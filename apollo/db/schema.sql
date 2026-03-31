-- Apollo Health - Neon Postgres Schema
-- Run this SQL in your Neon dashboard to create the required tables.

-- Contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id            SERIAL PRIMARY KEY,
  first_name    VARCHAR(100) NOT NULL,
  last_name     VARCHAR(100) NOT NULL,
  email         VARCHAR(255) NOT NULL,
  phone         VARCHAR(50)  NOT NULL,
  company       VARCHAR(255),
  role          VARCHAR(50),
  inquiry_type  VARCHAR(50)  NOT NULL,
  employee_count VARCHAR(20),
  message       TEXT         NOT NULL,
  page_url      TEXT,
  utm_source    VARCHAR(255),
  utm_medium    VARCHAR(255),
  utm_campaign  VARCHAR(255),
  submission_status VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Indexes for common lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email      ON contact_submissions (email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions (created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_inquiry    ON contact_submissions (inquiry_type);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status     ON contact_submissions (submission_status);
