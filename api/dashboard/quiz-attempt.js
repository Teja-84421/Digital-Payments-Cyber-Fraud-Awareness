// api/dashboard/quiz-attempt.js
// POST { score, total, lang, weakTopics } -> records one completed quiz
// pass for the logged-in user. Called automatically by script.js when a
// signed-in user finishes all quiz questions. Every real completed quiz
// counts as exactly one attempt — nothing here is simulated.

const { getPool } = require('../_lib/db');
const { getAuthUserId } = require('../_lib/requireAuth');
const { isValidTopic } = require('../_lib/topics');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }

  try {
    const { score, total, lang, weakTopics } = req.body || {};

    const total_ = Number(total);
    const score_ = Number(score);

    if (!Number.isInteger(total_) || total_ <= 0 || total_ > 50) {
      return res.status(400).json({ error: 'Invalid quiz total.' });
    }
    if (!Number.isInteger(score_) || score_ < 0 || score_ > total_) {
      return res.status(400).json({ error: 'Invalid quiz score.' });
    }

    const lang_ = ['en', 'hi', 'te'].includes(lang) ? lang : 'en';

    let weakTopics_ = [];
    if (Array.isArray(weakTopics)) {
      weakTopics_ = [...new Set(weakTopics.filter(isValidTopic))].slice(0, 8);
    }

    const pool = getPool();
    await pool.query(
      'INSERT INTO user_quiz_attempts (user_id, score, total, lang, weak_topics) VALUES (?, ?, ?, ?, ?)',
      [userId, score_, total_, lang_, JSON.stringify(weakTopics_)]
    );

    return res.status(201).json({ message: 'Quiz attempt recorded.' });
  } catch (err) {
    console.error('quiz-attempt error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
