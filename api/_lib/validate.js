// api/_lib/validate.js

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;

function isValidEmail(value) {
  return typeof value === 'string' && EMAIL_RE.test(value.trim());
}

function isValidUsername(value) {
  return typeof value === 'string' && USERNAME_RE.test(value.trim());
}

function isValidPassword(value) {
  return typeof value === 'string' && value.length >= 8;
}

module.exports = { isValidEmail, isValidUsername, isValidPassword };
