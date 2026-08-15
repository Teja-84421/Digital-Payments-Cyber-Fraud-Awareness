/* =====================
   THEME TOGGLE (same behavior as script.js on the main site)
   ===================== */
(function () {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('toggle-icon');
  const label = document.getElementById('toggle-label');

  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }
})();

/* =====================
   TRANSLATIONS
   ===================== */
const translations = {
  en: {
    tab_login: 'Log In',
    tab_register: 'Create Account',
    login_title: 'Welcome back',
    login_sub: 'Log in with your username or email.',
    label_identifier: 'Username or Email',
    label_password: 'Password',
    forgot_link: 'Forgot password?',
    login_cta: 'Log In',
    register_title: 'Create your account',
    register_sub: 'Takes less than a minute.',
    label_username: 'Username',
    hint_username: '3–20 characters: letters, numbers, underscore.',
    label_email: 'Email',
    hint_password: 'At least 8 characters.',
    register_cta: 'Create Account',
    back_link: '← Back to login',
    forgot_title: 'Reset your password',
    forgot_sub: "Enter your registered email. We'll send a one-time code (OTP).",
    send_otp_cta: 'Send OTP',
    otp_title: 'Check your inbox',
    otp_sub: 'Enter the 6-digit code we sent to your email.',
    label_otp: 'OTP Code',
    label_new_password: 'New Password',
    reset_cta: 'Reset Password',
    resend_cta: 'Resend OTP',
    err_generic: 'Something went wrong. Please try again.',
    msg_otp_sent: 'If an account exists for that email, an OTP has been sent.',
    msg_reset_ok: 'Password reset! You can now log in with your new password.',
    msg_register_ok: 'Account created! You can now log in.',
  },
  hi: {
    tab_login: 'लॉग इन',
    tab_register: 'खाता बनाएं',
    login_title: 'वापसी पर स्वागत है',
    login_sub: 'अपने यूज़रनेम या ईमेल से लॉग इन करें।',
    label_identifier: 'यूज़रनेम या ईमेल',
    label_password: 'पासवर्ड',
    forgot_link: 'पासवर्ड भूल गए?',
    login_cta: 'लॉग इन करें',
    register_title: 'अपना खाता बनाएं',
    register_sub: 'एक मिनट से भी कम समय लगता है।',
    label_username: 'यूज़रनेम',
    hint_username: '3–20 वर्ण: अक्षर, अंक, अंडरस्कोर।',
    label_email: 'ईमेल',
    hint_password: 'कम से कम 8 वर्ण।',
    register_cta: 'खाता बनाएं',
    back_link: '← लॉगिन पर वापस जाएं',
    forgot_title: 'अपना पासवर्ड रीसेट करें',
    forgot_sub: 'अपना पंजीकृत ईमेल दर्ज करें। हम एक वन-टाइम कोड (OTP) भेजेंगे।',
    send_otp_cta: 'OTP भेजें',
    otp_title: 'अपना इनबॉक्स देखें',
    otp_sub: 'हमने आपके ईमेल पर भेजा गया 6-अंकीय कोड दर्ज करें।',
    label_otp: 'OTP कोड',
    label_new_password: 'नया पासवर्ड',
    reset_cta: 'पासवर्ड रीसेट करें',
    resend_cta: 'OTP दोबारा भेजें',
    err_generic: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
    msg_otp_sent: 'यदि उस ईमेल के लिए कोई खाता मौजूद है, तो एक OTP भेज दिया गया है।',
    msg_reset_ok: 'पासवर्ड रीसेट हो गया! अब आप अपने नए पासवर्ड से लॉग इन कर सकते हैं।',
    msg_register_ok: 'खाता बन गया! अब आप लॉग इन कर सकते हैं।',
  },
  te: {
    tab_login: 'లాగిన్',
    tab_register: 'ఖాతా సృష్టించండి',
    login_title: 'తిరిగి స్వాగతం',
    login_sub: 'మీ యూజర్‌నేమ్ లేదా ఇమెయిల్‌తో లాగిన్ అవ్వండి.',
    label_identifier: 'యూజర్‌నేమ్ లేదా ఇమెయిల్',
    label_password: 'పాస్‌వర్డ్',
    forgot_link: 'పాస్‌వర్డ్ మర్చిపోయారా?',
    login_cta: 'లాగిన్',
    register_title: 'మీ ఖాతాను సృష్టించండి',
    register_sub: 'ఒక నిమిషం కంటే తక్కువ సమయం పడుతుంది.',
    label_username: 'యూజర్‌నేమ్',
    hint_username: '3–20 అక్షరాలు: అక్షరాలు, సంఖ్యలు, అండర్‌స్కోర్.',
    label_email: 'ఇమెయిల్',
    hint_password: 'కనీసం 8 అక్షరాలు.',
    register_cta: 'ఖాతా సృష్టించండి',
    back_link: '← లాగిన్‌కు తిరిగి వెళ్లండి',
    forgot_title: 'మీ పాస్‌వర్డ్‌ను రీసెట్ చేయండి',
    forgot_sub: 'మీ నమోదిత ఇమెయిల్‌ను నమోదు చేయండి. మేము వన్-టైమ్ కోడ్ (OTP) పంపుతాము.',
    send_otp_cta: 'OTP పంపండి',
    otp_title: 'మీ ఇన్‌బాక్స్ చూడండి',
    otp_sub: 'మీ ఇమెయిల్‌కు మేము పంపిన 6-అంకెల కోడ్‌ను నమోదు చేయండి.',
    label_otp: 'OTP కోడ్',
    label_new_password: 'కొత్త పాస్‌వర్డ్',
    reset_cta: 'పాస్‌వర్డ్ రీసెట్ చేయండి',
    resend_cta: 'OTP మళ్లీ పంపండి',
    err_generic: 'ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    msg_otp_sent: 'ఆ ఇమెయిల్ కోసం ఖాతా ఉంటే, OTP పంపబడింది.',
    msg_reset_ok: 'పాస్‌వర్డ్ రీసెట్ అయింది! ఇప్పుడు మీరు కొత్త పాస్‌వర్డ్‌తో లాగిన్ అవ్వవచ్చు.',
    msg_register_ok: 'ఖాతా సృష్టించబడింది! ఇప్పుడు మీరు లాగిన్ అవ్వవచ్చు.',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  ['en', 'hi', 'te'].forEach((code) => {
    const btn = document.getElementById(`lang-${code}`);
    if (btn) btn.classList.toggle('active', code === lang);
  });
}
setLanguage(currentLang);

/* =====================
   VIEW SWITCHING
   ===================== */
const views = {
  login: document.getElementById('login-view'),
  register: document.getElementById('register-view'),
  'forgot-email': document.getElementById('forgot-email-view'),
  'forgot-reset': document.getElementById('forgot-reset-view'),
};
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const statusBox = document.getElementById('form-status');

function showView(name) {
  Object.values(views).forEach((v) => { v.hidden = true; });
  views[name].hidden = false;
  clearStatus();

  const onAuthTab = name === 'login' || name === 'register';
  tabLogin.parentElement.style.display = onAuthTab ? 'flex' : 'none';
  tabLogin.classList.toggle('active', name === 'login');
  tabRegister.classList.toggle('active', name === 'register');
}

function clearStatus() {
  statusBox.hidden = true;
  statusBox.textContent = '';
  statusBox.className = 'form-status';
}

function showStatus(message, type) {
  statusBox.hidden = false;
  statusBox.textContent = message;
  statusBox.className = `form-status ${type}`;
}

tabLogin.addEventListener('click', () => showView('login'));
tabRegister.addEventListener('click', () => showView('register'));
document.getElementById('open-forgot').addEventListener('click', () => showView('forgot-email'));
document.querySelectorAll('[data-back]').forEach((btn) => {
  btn.addEventListener('click', () => showView(btn.dataset.back === 'forgot-email' ? 'forgot-email' : 'login'));
});

/* =====================
   PASSWORD SHOW/HIDE
   ===================== */
document.querySelectorAll('.pw-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    const showing = input.type === 'password';
    input.type = showing ? 'text' : 'password';
    btn.classList.toggle('showing', showing);
    btn.textContent = showing ? '🙈' : '👁️';
  });
});

/* =====================
   API HELPER
   ===================== */
async function api(path, body) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  let data = {};
  try { data = await res.json(); } catch (e) { /* no body */ }
  if (!res.ok) {
    throw new Error(data.error || translations[currentLang].err_generic);
  }
  return data;
}

function setLoading(button, loading) {
  button.disabled = loading;
  button.style.opacity = loading ? 0.6 : 1;
}

/* =====================
   LOGIN
   ===================== */
document.getElementById('login-view').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearStatus();
  const submitBtn = document.getElementById('login-submit');
  setLoading(submitBtn, true);
  try {
    const identifier = document.getElementById('login-identifier').value.trim();
    const password = document.getElementById('login-password').value;
    await api('/api/auth/login', { identifier, password });
    window.location.href = 'index.html';
  } catch (err) {
    showStatus(err.message, 'error');
  } finally {
    setLoading(submitBtn, false);
  }
});

/* =====================
   REGISTER
   ===================== */
document.getElementById('register-view').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearStatus();
  const submitBtn = document.getElementById('register-submit');
  setLoading(submitBtn, true);
  try {
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    await api('/api/auth/register', { username, email, password });
    showView('login');
    showStatus(translations[currentLang].msg_register_ok, 'success');
  } catch (err) {
    showStatus(err.message, 'error');
  } finally {
    setLoading(submitBtn, false);
  }
});

/* =====================
   FORGOT PASSWORD — STEP 1: SEND OTP
   ===================== */
let resetEmail = '';

document.getElementById('forgot-email-view').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearStatus();
  const submitBtn = document.getElementById('forgot-submit');
  setLoading(submitBtn, true);
  try {
    resetEmail = document.getElementById('forgot-email').value.trim();
    await api('/api/auth/forgot-password', { email: resetEmail, lang: currentLang });
    document.getElementById('otp-sent-to').textContent = translations[currentLang].otp_sub;
    showView('forgot-reset');
    showStatus(translations[currentLang].msg_otp_sent, 'success');
  } catch (err) {
    showStatus(err.message, 'error');
  } finally {
    setLoading(submitBtn, false);
  }
});

document.getElementById('resend-otp').addEventListener('click', async () => {
  clearStatus();
  try {
    await api('/api/auth/forgot-password', { email: resetEmail, lang: currentLang });
    showStatus(translations[currentLang].msg_otp_sent, 'success');
  } catch (err) {
    showStatus(err.message, 'error');
  }
});

/* =====================
   FORGOT PASSWORD — STEP 2: VERIFY OTP + RESET
   ===================== */
document.getElementById('forgot-reset-view').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearStatus();
  const submitBtn = document.getElementById('reset-submit');
  setLoading(submitBtn, true);
  try {
    const otp = document.getElementById('otp-code').value.trim();
    const newPassword = document.getElementById('new-password').value;
    await api('/api/auth/reset-password', { email: resetEmail, otp, newPassword });
    showView('login');
    showStatus(translations[currentLang].msg_reset_ok, 'success');
  } catch (err) {
    showStatus(err.message, 'error');
  } finally {
    setLoading(submitBtn, false);
  }
});
