// api/auth/forgot-password.js
// POST { email, lang? } -> if the email is registered, emails a 6-digit OTP
// that expires in 10 minutes. Always returns a generic success message so
// the endpoint can't be used to check which emails are registered.

const crypto = require('crypto');
const { getPool } = require('../_lib/db');
const { hashValue } = require('../_lib/auth');
const { isValidEmail } = require('../_lib/validate');
const { sendOtpEmail } = require('../_lib/mailer');

function generateOtp() {
  return String(crypto.randomInt(100000, 999999));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const genericResponse = {
    message: 'If an account exists for that email, an OTP has been sent.',
  };

  try {
    const { email, lang } = req.body || {};
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const pool = getPool();
    const normalizedEmail = email.trim().toLowerCase();

    const [users] = await pool.query('SELECT id FROM users WHERE email = ? LIMIT 1', [normalizedEmail]);
    if (!users.length) {
      // Don't reveal whether the email exists.
      return res.status(200).json(genericResponse);
    }

    const otp = generateOtp();
    const otpHash = await hashValue(otp);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await pool.query(
      'INSERT INTO password_resets (email, otp_hash, expires_at) VALUES (?, ?, ?)',
      [normalizedEmail, otpHash, expiresAt]
    );

    await sendOtpEmail(normalizedEmail, otp, ['en', 'hi', 'te'].includes(lang) ? lang : 'en');

    return res.status(200).json(genericResponse);
  } catch (err) {
    console.error('forgot-password error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
