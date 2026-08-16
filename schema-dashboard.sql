-- Additive schema for the Personalized Cyber Safety Dashboard.
-- Does NOT modify the existing `users` or `password_resets` tables.
-- Run this once against the same TiDB database you already set up
-- (TiDB Cloud console -> SQL Editor, or `mysql --host ... < schema-dashboard.sql`).

CREATE TABLE IF NOT EXISTS user_quiz_attempts (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  score INT NOT NULL,
  total INT NOT NULL,
  lang VARCHAR(5) NOT NULL DEFAULT 'en',
  weak_topics JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_quiz_attempts_user (user_id)
);

CREATE TABLE IF NOT EXISTS user_topic_progress (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  topic_key VARCHAR(50) NOT NULL,
  completed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_user_topic (user_id, topic_key),
  INDEX idx_user_topic_progress_user (user_id)
);

-- Note: user_id intentionally has no FOREIGN KEY constraint to `users.id`
-- to stay compatible across TiDB Serverless versions/configurations —
-- referential integrity is enforced at the application layer (every
-- write goes through the session-authenticated API endpoints only).
