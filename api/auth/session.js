// api/auth/session.js
// Combines the old me.js (GET) and logout.js (POST) into one file — each
// file under /api counts as a separate serverless function, and Vercel's
// Hobby plan caps that at 12, so closely-related tiny endpoints like
// these two are merged here to stay under the limit.
//
// GET  -> returns the logged-in user (based on the session cookie), or 401.
// POST -> clears the session cookie (logs out).

const { getPool } = require('../_lib/db');
const { parseCookies, verifyToken, clearAuthCookie, COOKIE_NAME } = require('../_lib/auth');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    clearAuthCookie(res);
    return res.status(200).json({ message: 'Logged out.' });
  }

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
    console.error('session (me) error:', err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};
