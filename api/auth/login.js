// api/auth/login.js
// POST { identifier, password } -> logs in with username OR email.
// On success, sets an httpOnly session cookie (JWT).

const { getPool } = require('../_lib/db');
const { compareValue, signToken, setAuthCookie } = require('../_lib/auth');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { identifier, password } = req.body || {};

    if (!identifier || !password) {
      return res.status(400).json({ error: 'Please enter your username/email and password.' });
    }

    const pool = getPool();
    const normalizedIdentifier = identifier.trim().toLowerCase();

    const [rows] = await pool.query(
      'SELECT id, username, email, password_hash FROM users WHERE LOWER(username) = ? OR email = ? LIMIT 1',
      [normalizedIdentifier, normalizedIdentifier]
    );

    if (!rows.length) {
      return res.status(401).json({ error: 'Invalid username/email or password.' });
    }

    const user = rows[0];
    if (!user.password_hash) {
      // Account was created via "Continue with Google" and has no password set.
      return res.status(401).json({ error: 'This account uses Google Sign-In. Please continue with Google, or use "Forgot password?" to set one.' });
    }
    const passwordMatches = await compareValue(password, user.password_hash);
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Invalid username/email or password.' });
    }

    const token = signToken({ uid: user.id, username: user.username });
    setAuthCookie(res, token);

    return res.status(200).json({
      message: 'Login successful.',
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error('login error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
