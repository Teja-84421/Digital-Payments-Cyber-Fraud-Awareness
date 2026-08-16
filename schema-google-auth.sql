-- Additive schema change to support "Continue with Google".
-- Safe to run on your existing database — does not delete or rename
-- anything, and existing password-based accounts are unaffected.

-- Google-only accounts have no password, so password_hash must allow NULL.
ALTER TABLE users MODIFY password_hash VARCHAR(255) NULL;

-- Links an account to its Google identity (Google's stable "sub" claim).
ALTER TABLE users ADD COLUMN google_id VARCHAR(255) NULL UNIQUE;
