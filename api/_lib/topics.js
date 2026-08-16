// api/_lib/topics.js
// The 8 awareness topics on the Frauds section of index.html
// (data-topic="fraud1" ... "fraud8"). Used to validate incoming topic
// keys so only real topics can be marked complete / reported as weak.

const VALID_TOPICS = ['fraud1', 'fraud2', 'fraud3', 'fraud4', 'fraud5', 'fraud6', 'fraud7', 'fraud8'];
const TOTAL_TOPICS = VALID_TOPICS.length;

function isValidTopic(key) {
  return typeof key === 'string' && VALID_TOPICS.includes(key);
}

module.exports = { VALID_TOPICS, TOTAL_TOPICS, isValidTopic };
