// api/_lib/mailer.js
// Sends the password-reset OTP email via SMTP (Gmail app password, Brevo,
// SendGrid SMTP relay, etc. all work — just set the env vars).

const nodemailer = require('nodemailer');

function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error(
      'SMTP is not configured: SMTP_HOST, SMTP_USER, and SMTP_PASS must all be set.'
    );
  }
  if (!global.__mailTransporter) {
    const port = Number(process.env.SMTP_PORT) || 587;
    // If SMTP_SECURE isn't explicitly set, infer it from the port
    // (465 = implicit TLS, 587/25 = STARTTLS).
    const secure =
      process.env.SMTP_SECURE != null ? process.env.SMTP_SECURE === 'true' : port === 465;

    global.__mailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Serverless functions have short execution limits — fail fast instead
      // of hanging until the platform kills the whole request.
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 8000,
    });
  }
  return global.__mailTransporter;
}

const COPY = {
  en: {
    subject: 'Your Password Reset OTP — CyberSafe',
    heading: 'Password Reset Request',
    body: 'We received a request to reset your password. Use the OTP below to continue. This code expires in 10 minutes.',
    otpLabel: 'Your OTP',
    ignore: "If you didn't request this, you can safely ignore this email.",
  },
  hi: {
    subject: 'आपका पासवर्ड रीसेट OTP — CyberSafe',
    heading: 'पासवर्ड रीसेट अनुरोध',
    body: 'हमें आपका पासवर्ड रीसेट करने का अनुरोध मिला है। जारी रखने के लिए नीचे दिए गए OTP का उपयोग करें। यह कोड 10 मिनट में समाप्त हो जाएगा।',
    otpLabel: 'आपका OTP',
    ignore: 'यदि आपने यह अनुरोध नहीं किया है, तो आप इस ईमेल को सुरक्षित रूप से अनदेखा कर सकते हैं।',
  },
  te: {
    subject: 'మీ పాస్‌వర్డ్ రీసెట్ OTP — CyberSafe',
    heading: 'పాస్‌వర్డ్ రీసెట్ అభ్యర్థన',
    body: 'మీ పాస్‌వర్డ్‌ను రీసెట్ చేయమని మాకు అభ్యర్థన వచ్చింది. కొనసాగించడానికి దిగువ OTPని ఉపయోగించండి. ఈ కోడ్ 10 నిమిషాల్లో గడువు ముగుస్తుంది.',
    otpLabel: 'మీ OTP',
    ignore: 'మీరు ఈ అభ్యర్థన చేయకపోతే, మీరు ఈ ఇమెయిల్‌ను సురక్షితంగా విస్మరించవచ్చు.',
  },
};

async function sendOtpEmail(to, otp, lang = 'en') {
  const t = COPY[lang] || COPY.en;
  const html = `
  <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
    <h2 style="color:#0077aa;margin-top:0;">${t.heading}</h2>
    <p style="color:#333;line-height:1.6;">${t.body}</p>
    <div style="text-align:center;margin:24px 0;">
      <span style="display:inline-block;font-size:32px;letter-spacing:8px;font-weight:bold;background:#f0f4f8;color:#0f1a2e;padding:12px 24px;border-radius:8px;">${otp}</span>
    </div>
    <p style="color:#666;font-size:13px;">${t.ignore}</p>
  </div>`;

  return getTransporter().sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to,
    subject: t.subject,
    html,
    text: `${t.otpLabel}: ${otp}`,
  });
}

async function sendFeedbackEmail({ name, email, message }) {
  const safeName = escapeHtml(name || 'Anonymous');
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
    <h2 style="color:#0077aa;margin-top:0;">New Feedback — CyberSafe Website</h2>
    <p style="color:#333;"><strong>From:</strong> ${safeName} (${safeEmail})</p>
    <div style="background:#f0f4f8;color:#0f1a2e;padding:16px;border-radius:8px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</div>
  </div>`;

  const to = process.env.FEEDBACK_TO_EMAIL || process.env.SMTP_USER;

  return getTransporter().sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to,
    replyTo: email,
    subject: `CyberSafe Feedback from ${name || email}`,
    html,
    text: `From: ${name || 'Anonymous'} (${email})\n\n${message}`,
  });
}

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = { sendOtpEmail, sendFeedbackEmail };
