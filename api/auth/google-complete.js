// api/auth/google-complete.js
// POST { pendingToken, username, password } -> finishes creating an
// account that was started via "Continue with Google". The pendingToken
// (from api/auth/google.js) is the proof that the email/google_id were
// already verified with Google — nothing here re-trusts client input for
// that part.

const { getPool } = require('../_lib/db');
const { hashValue, signToken, setAuthCookie, verifyPendingSignupToken } = require('../_lib/auth');
const { isValidUsername, isValidPassword } = require('../_lib/validate');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pendingToken, username, password } = req.body || {};

    const decoded = pendingToken ? verifyPendingSignupToken(pendingToken) : null;
    if (!decoded || !decoded.email || !decoded.googleId) {
      return res.status(401).json({ error: 'Your Google sign-up session expired. Please click "Continue with Google" again.' });
    }

    if (!isValidUsername(username)) {
      return res.status(400).json({
        error: 'Username must be 3–20 characters (letters, numbers, underscore only).',
      });
    }
    if (!isValidPassword(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }

    const pool = getPool();
    const normalizedUsername = username.trim();
    const email = decoded.email;
    const googleId = decoded.googleId;

    // Re-check for races: someone else may have taken this username, or
    // this email/google_id may have been registered in the last 15 minutes
    // (e.g. the same person signed up a different way in another tab).
    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ? OR email = ? OR google_id = ? LIMIT 1',
      [normalizedUsername, email, googleId]
    );
    if (existing.length) {
      return res.status(409).json({ error: 'That username or email is already registered. Please try logging in instead.' });
    }

    const password_hash = await hashValue(password);
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password_hash, google_id) VALUES (?, ?, ?, ?)',
      [normalizedUsername, email, password_hash, googleId]
    );

    const user = { id: result.insertId, username: normalizedUsername, email };
    const token = signToken({ uid: user.id, username: user.username });
    setAuthCookie(res, token);

    return res.status(201).json({
      message: 'Account created.',
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error('google-complete error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
