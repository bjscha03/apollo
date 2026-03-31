import { neon } from '@neondatabase/serverless';

/**
 * Netlify Function – POST /.netlify/functions/contact-submit
 *
 * Accepts a JSON body from the contact form, validates it,
 * and inserts a row into the contact_submissions table in Neon.
 */

const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'phone', 'inquiryType', 'message'];

const MAX_LENGTHS = {
  firstName: 100,
  lastName: 100,
  email: 255,
  phone: 50,
  company: 255,
  role: 50,
  inquiryType: 50,
  employeeCount: 20,
  message: 5000,
  pageUrl: 2000,
  utmSource: 255,
  utmMedium: 255,
  utmCampaign: 255,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = [];

  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || String(body[field]).trim() === '') {
      errors.push(`${field} is required.`);
    }
  }

  if (body.email && !EMAIL_REGEX.test(body.email)) {
    errors.push('Invalid email address.');
  }

  for (const [key, max] of Object.entries(MAX_LENGTHS)) {
    if (body[key] && String(body[key]).length > max) {
      errors.push(`${key} must be ${max} characters or fewer.`);
    }
  }

  return errors;
}

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Parse body
  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON body.' }),
    };
  }

  // Validate
  const errors = validate(body);
  if (errors.length > 0) {
    return {
      statusCode: 422,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Validation failed.', details: errors }),
    };
  }

  // Ensure env var is set
  const databaseUrl = process.env.NEON_DATABASE_URL;
  if (!databaseUrl) {
    console.error('NEON_DATABASE_URL is not set.');
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Server configuration error.' }),
    };
  }

  try {
    const sql = neon(databaseUrl);

    await sql`
      INSERT INTO contact_submissions (
        first_name, last_name, email, phone,
        company, role, inquiry_type, employee_count,
        message, page_url, utm_source, utm_medium, utm_campaign
      ) VALUES (
        ${body.firstName.trim()},
        ${body.lastName.trim()},
        ${body.email.trim().toLowerCase()},
        ${body.phone.trim()},
        ${(body.company || '').trim() || null},
        ${(body.role || '').trim() || null},
        ${body.inquiryType.trim()},
        ${(body.employeeCount || '').trim() || null},
        ${body.message.trim()},
        ${(body.pageUrl || '').trim() || null},
        ${(body.utmSource || '').trim() || null},
        ${(body.utmMedium || '').trim() || null},
        ${(body.utmCampaign || '').trim() || null}
      )
    `;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Submission received successfully.' }),
    };
  } catch (err) {
    console.error('Database insert error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Unable to save your submission. Please try again later.' }),
    };
  }
}
