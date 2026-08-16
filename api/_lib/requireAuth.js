// api/_lib/requireAuth.js
// Shared helper for endpoints that require a logged-in user. Reuses the
// exact same session cookie / JWT verification as api/auth/me.js — no
// second auth system.

const { parseCookies, verifyToken, COOKIE_NAME } = require('./auth');

/**
 * Returns the authenticated user's id (payload.uid), or null if there's
 * no valid session. Callers should respond 401 when this returns null.
 */
function getAuthUserId(req) {
  const cookies = parseCookies(req);
  const token = cookies[COOKIE_NAME];
  const payload = token && verifyToken(token);
  return payload ? payload.uid : null;
}

module.exports = { getAuthUserId };
