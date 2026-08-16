// api/auth/google.js
// POST { credential } -> verifies a Google ID token (from the "Continue
// with Google" button).
//
// - If an account already exists for this Google identity (or a matching
//   email), logs the user in immediately, same as a normal login.
// - If this is a brand-new sign-up, no account is created yet. Instead we
//   return { needsPassword: true, pendingToken, ... } so the user can pick
//   a username/password first (see api/auth/google-complete.js). This is
//   what proves the Google identity was genuinely verified — the client
//   can't skip this by claiming an email directly.

const { OAuth2Client } = require('google-auth-library');
const { getPool } = require('../_lib/db');
const { signToken, setAuthCookie, signPendingSignupToken } = require('../_lib/auth');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

function usernameSuggestionFromEmail(email) {
  const local = email.split('@')[0].toLowerCase();
  const cleaned = local.replace(/[^a-z0-9_]/g, '');
  const trimmed = cleaned.slice(0, 16) || 'user';
  return trimmed.length >= 3 ? trimmed : trimmed.padEnd(3, '0');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!client) {
    console.error('google sign-in error: GOOGLE_CLIENT_ID is not set');
    return res.status(500).json({ error: 'Google Sign-In is not configured on this server.' });
  }

  try {
    const { credential } = req.body || {};
    if (!credential || typeof credential !== 'string') {
      return res.status(400).json({ error: 'Missing Google credential.' });
    }

    let payload;
    try {
      const ticket = await client.verifyIdToken({ idToken: credential, audience: GOOGLE_CLIENT_ID });
      payload = ticket.getPayload();
    } catch (verifyErr) {
      console.error('google sign-in error: token verification failed —', verifyErr.message);
      return res.status(401).json({ error: 'Could not verify Google sign-in. Please try again.' });
    }

    if (!payload || !payload.email || !payload.sub) {
      return res.status(401).json({ error: 'Could not verify Google sign-in. Please try again.' });
    }
    if (!payload.email_verified) {
      return res.status(401).json({ error: 'Your Google email is not verified.' });
    }

    const googleId = payload.sub;
    const email = payload.email.toLowerCase();
    const pool = getPool();

    // 1) Already linked to this Google account?
    let [rows] = await pool.query('SELECT id, username, email FROM users WHERE google_id = ? LIMIT 1', [googleId]);

    if (!rows.length) {
      // 2) An existing password-based account with the same email? Link it.
      const [byEmail] = await pool.query('SELECT id, username, email FROM users WHERE email = ? LIMIT 1', [email]);
      if (byEmail.length) {
        await pool.query('UPDATE users SET google_id = ? WHERE id = ?', [googleId, byEmail[0].id]);
        rows = byEmail;
      }
    }

    if (rows.length) {
      // Existing user (either already Google-linked, or just linked above) — log in normally.
      const user = rows[0];
      const token = signToken({ uid: user.id, username: user.username });
      setAuthCookie(res, token);
      return res.status(200).json({
        message: 'Signed in with Google.',
        user: { id: user.id, username: user.username, email: user.email },
      });
    }

    // 3) Brand new sign-up — don't create the account yet. Hand back a
    // short-lived pending token proving this email/google_id was verified,
    // and let the user set a password to finish creating the account.
    const pendingToken = signPendingSignupToken({ googleId, email });
    return res.status(200).json({
      needsPassword: true,
      pendingToken,
      email,
      suggestedUsername: usernameSuggestionFromEmail(email),
    });
  } catch (err) {
    console.error('google sign-in error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
