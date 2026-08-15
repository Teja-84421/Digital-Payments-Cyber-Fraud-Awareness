// api/auth/logout.js
// POST -> clears the session cookie.

const { clearAuthCookie } = require('../_lib/auth');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  clearAuthCookie(res);
  return res.status(200).json({ message: 'Logged out.' });
};
