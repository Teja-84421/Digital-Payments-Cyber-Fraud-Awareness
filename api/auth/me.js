// api/auth/me.js
// GET -> returns the logged-in user (based on the session cookie), or 401.
// Use this on other pages to check "is someone logged in?".

const { getPool } = require('../_lib/db');
const { parseCookies, verifyToken, COOKIE_NAME } = require('../_lib/auth');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookies = parseCookies(req);
  const token = cookies[COOKIE_NAME];
  const payload = token && verifyToken(token);

  if (!payload) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }

  try {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT id, username, email, created_at FROM users WHERE id = ? LIMIT 1',
      [payload.uid]
    );
    if (!rows.length) {
      return res.status(401).json({ error: 'Not authenticated.' });
    }
    return res.status(200).json({ user: rows[0] });
  } catch (err) {
    console.error('me error:', err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};
