// api/auth/reset-password.js
// POST { email, otp, newPassword } -> verifies the OTP and updates the
// user's password.

const { getPool } = require('../_lib/db');
const { compareValue, hashValue } = require('../_lib/auth');
const { isValidEmail, isValidPassword } = require('../_lib/validate');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, otp, newPassword } = req.body || {};

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!otp || !/^\d{6}$/.test(String(otp))) {
      return res.status(400).json({ error: 'Please enter the 6-digit OTP.' });
    }
    if (!isValidPassword(newPassword)) {
      return res.status(400).json({ error: 'New password must be at least 8 characters.' });
    }

    const pool = getPool();
    const normalizedEmail = email.trim().toLowerCase();

    const [records] = await pool.query(
      'SELECT id, otp_hash, expires_at, used, attempts FROM password_resets WHERE email = ? ORDER BY id DESC LIMIT 1',
      [normalizedEmail]
    );

    if (!records.length) {
      return res.status(400).json({ error: 'Invalid or expired OTP. Please request a new one.' });
    }

    const record = records[0];

    if (record.used) {
      return res.status(400).json({ error: 'This OTP has already been used. Please request a new one.' });
    }
    if (new Date(record.expires_at) < new Date()) {
      return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
    }
    if (record.attempts >= 5) {
      return res.status(429).json({ error: 'Too many attempts. Please request a new OTP.' });
    }

    const otpMatches = await compareValue(String(otp), record.otp_hash);
    if (!otpMatches) {
      await pool.query('UPDATE password_resets SET attempts = attempts + 1 WHERE id = ?', [record.id]);
      return res.status(400).json({ error: 'Incorrect OTP. Please try again.' });
    }

    const newHash = await hashValue(newPassword);
    await pool.query('UPDATE users SET password_hash = ? WHERE email = ?', [newHash, normalizedEmail]);
    await pool.query('UPDATE password_resets SET used = 1 WHERE id = ?', [record.id]);

    return res.status(200).json({ message: 'Password reset successful. You can now log in with your new password.' });
  } catch (err) {
    console.error('reset-password error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
