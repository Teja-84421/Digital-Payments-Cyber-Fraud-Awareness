// api/auth/google.js
// POST { credential } -> verifies a Google ID token (from the "Continue
// with Google" button) and logs the user in, creating an account on
// first sign-in. No Google client secret is needed for this flow — the
// ID token's signature is verified against Google's public keys.

const { OAuth2Client } = require('google-auth-library');
const { getPool } = require('../_lib/db');
const { signToken, setAuthCookie } = require('../_lib/auth');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

function usernameBaseFromEmail(email) {
  const local = email.split('@')[0].toLowerCase();
  const cleaned = local.replace(/[^a-z0-9_]/g, '');
  const trimmed = cleaned.slice(0, 16) || 'user';
  return trimmed.length >= 3 ? trimmed : trimmed.padEnd(3, '0');
}

async function generateUniqueUsername(pool, email) {
  const base = usernameBaseFromEmail(email);
  let candidate = base;
  for (let attempt = 0; attempt < 6; attempt++) {
    const [rows] = await pool.query('SELECT id FROM users WHERE username = ? LIMIT 1', [candidate]);
    if (!rows.length) return candidate;
    const suffix = Math.floor(100 + Math.random() * 900); // 3-digit suffix
    candidate = `${base.slice(0, 16)}${suffix}`.slice(0, 20);
  }
  // Extremely unlikely fallback
  return `${base.slice(0, 12)}${Date.now().toString().slice(-6)}`.slice(0, 20);
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

    let user;
    if (rows.length) {
      user = rows[0];
    } else {
      // 3) Brand new user — create an account with no password.
      const username = await generateUniqueUsername(pool, email);
      const [result] = await pool.query(
        'INSERT INTO users (username, email, password_hash, google_id) VALUES (?, ?, NULL, ?)',
        [username, email, googleId]
      );
      user = { id: result.insertId, username, email };
    }

    const token = signToken({ uid: user.id, username: user.username });
    setAuthCookie(res, token);

    return res.status(200).json({
      message: 'Signed in with Google.',
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error('google sign-in error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
