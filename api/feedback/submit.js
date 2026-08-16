// api/feedback/submit.js
// POST { name, email, message } -> emails the feedback to the site owner.
// Open to everyone (logged in or not) — this is not tied to the account
// system, and nothing here is stored in the database, only emailed.

const { isValidEmail } = require('../_lib/validate');
const { sendFeedbackEmail } = require('../_lib/mailer');

const MAX_NAME_LEN = 80;
const MAX_MESSAGE_LEN = 2000;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const trimmedMessage = typeof message === 'string' ? message.trim() : '';
    if (!trimmedMessage) {
      return res.status(400).json({ error: 'Please enter a message.' });
    }
    if (trimmedMessage.length > MAX_MESSAGE_LEN) {
      return res.status(400).json({ error: `Message must be under ${MAX_MESSAGE_LEN} characters.` });
    }

    const trimmedName = typeof name === 'string' ? name.trim().slice(0, MAX_NAME_LEN) : '';

    await sendFeedbackEmail({ name: trimmedName, email: email.trim(), message: trimmedMessage });

    return res.status(200).json({ message: 'Feedback sent.' });
  } catch (err) {
    console.error('feedback submit error:', err.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
