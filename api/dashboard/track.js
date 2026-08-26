// api/dashboard/track.js
// Combines the old quiz-attempt.js and topic-progress.js into one file —
// each file under /api counts as a separate serverless function, and
// Vercel's Hobby plan caps that at 12, so these two closely-related
// "record some dashboard activity" endpoints are merged here.
//
// POST { action: 'quiz_attempt', score, total, lang, weakTopics }
//   -> records one completed quiz pass for the logged-in user.
// POST { action: 'topic_progress', topicKey, completed }
//   -> marks/unmarks one of the 8 awareness topics as completed.

const { getPool } = require('../_lib/db');
const { getAuthUserId } = require('../_lib/requireAuth');
const { isValidTopic } = require('../_lib/topics');

async function handleQuizAttempt(req, res, userId, pool) {
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

  await pool.query(
    'INSERT INTO user_quiz_attempts (user_id, score, total, lang, weak_topics) VALUES (?, ?, ?, ?, ?)',
    [userId, score_, total_, lang_, JSON.stringify(weakTopics_)]
  );

  return res.status(201).json({ message: 'Quiz attempt recorded.' });
}

async function handleTopicProgress(req, res, userId, pool) {
  const { topicKey, completed } = req.body || {};

  if (!isValidTopic(topicKey)) {
    return res.status(400).json({ error: 'Invalid topic.' });
  }

  if (completed) {
    // Idempotent: re-marking an already-completed topic just keeps the
    // original completed_at instead of erroring on the unique key.
    await pool.query(
      `INSERT INTO user_topic_progress (user_id, topic_key)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE completed_at = completed_at`,
      [userId, topicKey]
    );
  } else {
    await pool.query('DELETE FROM user_topic_progress WHERE user_id = ? AND topic_key = ?', [userId, topicKey]);
  }

  return res.status(200).json({ message: 'Progress updated.', topicKey, completed: Boolean(completed) });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }

  const { action } = req.body || {};

  try {
    const pool = getPool();
    if (action === 'quiz_attempt') {
      return await handleQuizAttempt(req, res, userId, pool);
    }
    if (action === 'topic_progress') {
      return await handleTopicProgress(req, res, userId, pool);
    }
    return res.status(400).json({ error: 'Unknown action.' });
  } catch (err) {
    console.error(`dashboard track (${action}) error:`, err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
