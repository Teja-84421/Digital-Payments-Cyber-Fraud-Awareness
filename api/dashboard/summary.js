// api/dashboard/summary.js
// GET -> returns the logged-in user's personalized dashboard data.
// All numbers are computed live from user_quiz_attempts and
// user_topic_progress — nothing here is hard-coded or fabricated.

const { getPool } = require('../_lib/db');
const { getAuthUserId } = require('../_lib/requireAuth');
const { TOTAL_TOPICS } = require('../_lib/topics');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }

  try {
    const pool = getPool();

    const [userRows] = await pool.query('SELECT username, email FROM users WHERE id = ? LIMIT 1', [userId]);
    if (!userRows.length) {
      return res.status(401).json({ error: 'Not authenticated.' });
    }
    const { username, email } = userRows[0];

    const [attemptRows] = await pool.query(
      'SELECT score, total, weak_topics, created_at FROM user_quiz_attempts WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    const quizAttempts = attemptRows.length;

    let bestScore = null;
    if (attemptRows.length) {
      const best = attemptRows.reduce((acc, row) => {
        const ratio = row.total > 0 ? row.score / row.total : 0;
        const accRatio = acc.total > 0 ? acc.score / acc.total : 0;
        return ratio > accRatio ? row : acc;
      }, attemptRows[0]);
      bestScore = { score: best.score, total: best.total };
    }

    // "Topics to improve" comes from the most recent attempt only — the
    // clearest, simplest signal of current weak areas (spec: "based on
    // questions/topics where the user performed poorly").
    let weakTopics = [];
    if (attemptRows.length) {
      const latest = attemptRows[0];
      try {
        const parsed = typeof latest.weak_topics === 'string' ? JSON.parse(latest.weak_topics) : latest.weak_topics;
        weakTopics = Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        weakTopics = [];
      }
    }

    const [topicRows] = await pool.query(
      'SELECT topic_key FROM user_topic_progress WHERE user_id = ? ORDER BY completed_at ASC',
      [userId]
    );
    const completedTopics = topicRows.map((r) => r.topic_key);

    // Safety Score formula (out of 100), dynamically computed:
    //   50% weight  -> share of the 8 awareness topics marked completed
    //   50% weight  -> best quiz score ratio (best score / questions in that attempt)
    // With no activity at all, this naturally evaluates to 0.
    const topicRatio = completedTopics.length / TOTAL_TOPICS;
    const quizRatio = bestScore && bestScore.total > 0 ? bestScore.score / bestScore.total : 0;
    const safetyScore = Math.round((topicRatio * 50 + quizRatio * 50));

    return res.status(200).json({
      username,
      email,
      quizAttempts,
      bestScore, // { score, total } or null
      completedTopics, // e.g. ["fraud1", "fraud3"]
      totalTopics: TOTAL_TOPICS,
      weakTopics, // e.g. ["fraud3"]
      safetyScore,
    });
  } catch (err) {
    console.error('dashboard summary error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
