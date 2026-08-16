// api/_lib/auth.js
// Password hashing, JWT session tokens, and cookie helpers.

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const COOKIE_NAME = 'session_token';
const TOKEN_TTL = '7d';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // seconds

function getJwtSecret() {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set.');
  }
  return process.env.JWT_SECRET;
}

function signToken(payload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: TOKEN_TTL });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, getJwtSecret());
  } catch (err) {
    return null;
  }
}

// Short-lived token used only to carry a verified Google identity from
// "we checked with Google" to "user finished picking a password" — kept
// separate from session tokens (different expiry + a `purpose` claim) so
// one can never be mistaken for or reused as the other.
const PENDING_SIGNUP_TTL = '15m';
const PENDING_SIGNUP_PURPOSE = 'google_pending_signup';

function signPendingSignupToken(payload) {
  return jwt.sign({ ...payload, purpose: PENDING_SIGNUP_PURPOSE }, getJwtSecret(), {
    expiresIn: PENDING_SIGNUP_TTL,
  });
}

function verifyPendingSignupToken(token) {
  const decoded = verifyToken(token);
  if (!decoded || decoded.purpose !== PENDING_SIGNUP_PURPOSE) return null;
  return decoded;
}

function parseCookies(req) {
  const header = req.headers.cookie;
  const out = {};
  if (!header) return out;
  header.split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    const key = pair.slice(0, idx).trim();
    const val = pair.slice(idx + 1).trim();
    out[key] = decodeURIComponent(val);
  });
  return out;
}

function setAuthCookie(res, token) {
  const isProd = process.env.NODE_ENV === 'production';
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    'HttpOnly',
    'Path=/',
    `Max-Age=${COOKIE_MAX_AGE}`,
    'SameSite=Lax',
  ];
  if (isProd) parts.push('Secure');
  res.setHeader('Set-Cookie', parts.join('; '));
}

function clearAuthCookie(res) {
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`
  );
}

async function hashValue(plain) {
  return bcrypt.hash(plain, 10);
}

async function compareValue(plain, hash) {
  return bcrypt.compare(plain, hash);
}

module.exports = {
  COOKIE_NAME,
  signToken,
  verifyToken,
  signPendingSignupToken,
  verifyPendingSignupToken,
  parseCookies,
  setAuthCookie,
  clearAuthCookie,
  hashValue,
  compareValue,
};
