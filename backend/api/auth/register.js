// api/auth/register.js
// POST { username, email, password } -> creates a new user account.

const { getPool } = require('../_lib/db');
const { hashValue } = require('../_lib/auth');
const { isValidEmail, isValidUsername, isValidPassword } = require('../_lib/validate');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { username, email, password } = req.body || {};

    if (!isValidUsername(username)) {
      return res.status(400).json({
        error: 'Username must be 3–20 characters (letters, numbers, underscore only).',
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!isValidPassword(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }

    const pool = getPool();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = username.trim();

    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1',
      [normalizedUsername, normalizedEmail]
    );
    if (existing.length) {
      return res.status(409).json({ error: 'Username or email is already registered.' });
    }

    const password_hash = await hashValue(password);
    await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [normalizedUsername, normalizedEmail, password_hash]
    );

    return res.status(201).json({ message: 'Account created successfully. You can now log in.' });
  } catch (err) {
    console.error('register error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
