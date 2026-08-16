// api/dashboard/topic-progress.js
// POST { topicKey, completed } -> marks (or unmarks) one of the 8
// awareness topics as completed for the logged-in user.

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
    const { topicKey, completed } = req.body || {};

    if (!isValidTopic(topicKey)) {
      return res.status(400).json({ error: 'Invalid topic.' });
    }

    const pool = getPool();

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
  } catch (err) {
    console.error('topic-progress error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
