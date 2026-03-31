/**
 * Reusable HTML email templates for Apollo form submissions.
 *
 * Both templates use inline styles and table-based layouts so they
 * render correctly in Gmail, Outlook, Apple Mail, and mobile clients.
 */

const LOGO_URL =
  'https://res.cloudinary.com/dtrxl120u/image/upload/v1774984252/zenith_qhnpjr.png';

/* ---------- shared helpers ---------- */

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function labelFor(key) {
  const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    role: 'Role',
    inquiryType: 'Inquiry Type',
    employeeCount: 'Employee Count',
    message: 'Message',
    pageUrl: 'Page URL',
    utmSource: 'UTM Source',
    utmMedium: 'UTM Medium',
    utmCampaign: 'UTM Campaign',
  };
  return labels[key] || key;
}

/** Build table rows for every non-empty field in data. */
function dataRows(data) {
  const display = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'company',
    'role',
    'inquiryType',
    'employeeCount',
    'message',
    'pageUrl',
    'utmSource',
    'utmMedium',
    'utmCampaign',
  ];

  return display
    .filter((key) => data[key] && String(data[key]).trim() !== '')
    .map(
      (key) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-weight:600;width:160px;vertical-align:top;">
          ${escapeHtml(labelFor(key))}
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">
          ${escapeHtml(String(data[key]).trim())}
        </td>
      </tr>`
    )
    .join('');
}

/* ---------- wrapper that both templates share ---------- */

function wrapHtml(innerContent) {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apollo</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:8px;overflow:hidden;">
          <!-- Logo header -->
          <tr>
            <td align="center" style="padding:28px 24px;background-color:#111827;">
              <img src="${LOGO_URL}" alt="Apollo" width="160" style="display:block;border:0;outline:none;max-width:160px;height:auto;" />
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 28px;">
              ${innerContent}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px 28px;background-color:#f9fafb;color:#9ca3af;font-size:12px;line-height:18px;">
              &copy; ${new Date().getFullYear()} Apollo. All rights reserved.
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ---------- public templates ---------- */

/**
 * Internal notification email – sent to the Apollo team.
 * Includes all submitted form data in a table.
 */
export function renderApolloInternalEmail(data) {
  const inner = `
    <h1 style="margin:0 0 8px;font-size:22px;color:#111827;">New Form Submission</h1>
    <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:22px;">
      A new contact form submission was received on the Apollo website.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;border-collapse:collapse;">
      ${dataRows(data)}
    </table>
    <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;line-height:20px;">
      Submitted at ${new Date().toUTCString()}
    </p>`;

  return wrapHtml(inner);
}

/**
 * Customer confirmation email – sent to the person who submitted the form.
 * Professional, clean, high-trust tone.
 */
export function renderApolloCustomerEmail(data) {
  const firstName = escapeHtml((data.firstName || '').trim());

  const inner = `
    <h1 style="margin:0 0 8px;font-size:22px;color:#111827;">We Received Your Request</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:24px;">
      Hi ${firstName || 'there'},
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:24px;">
      Thank you for reaching out to Apollo. We have received your inquiry and a member of
      our team will review it shortly. You can expect to hear back from us within
      1–2 business days.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:24px;">
      If your matter is urgent, please don&rsquo;t hesitate to contact us directly.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border:1px solid #e5e7eb;border-radius:6px;border-collapse:collapse;">
      <tr>
        <td style="padding:16px;background-color:#f9fafb;color:#374151;font-size:14px;line-height:22px;">
          <strong>Your submission summary</strong><br/><br/>
          <strong>Name:</strong> ${escapeHtml((data.firstName || '').trim())} ${escapeHtml((data.lastName || '').trim())}<br/>
          <strong>Email:</strong> ${escapeHtml((data.email || '').trim())}<br/>
          <strong>Inquiry Type:</strong> ${escapeHtml((data.inquiryType || '').trim())}<br/>
          <strong>Message:</strong> ${escapeHtml((data.message || '').trim())}
        </td>
      </tr>
    </table>
    <p style="margin:0;font-size:15px;color:#374151;line-height:24px;">
      We appreciate your interest and look forward to connecting with you.
    </p>
    <p style="margin:16px 0 0;font-size:15px;color:#374151;line-height:24px;">
      Warm regards,<br/>
      <strong>The Apollo Team</strong>
    </p>`;

  return wrapHtml(inner);
}
