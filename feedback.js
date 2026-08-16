/* =====================
   FEEDBACK FORM (index.html)
   Sends the message to /api/feedback/submit, which emails it to the site
   owner. Works whether or not the visitor is logged in.
   ===================== */

(function () {
  const form = document.getElementById('feedback-form');
  if (!form) return;

  const statusBox = document.getElementById('feedback-status');
  const submitBtn = document.getElementById('feedback-submit');

  function getLang() {
    return localStorage.getItem('lang') || 'en';
  }

  function t(key) {
    const lang = getLang();
    return (window.translations && window.translations[lang] && window.translations[lang][key]) || key;
  }

  function showStatus(message, type) {
    statusBox.hidden = false;
    statusBox.textContent = message;
    statusBox.className = `form-status ${type}`;
  }

  function clearStatus() {
    statusBox.hidden = true;
    statusBox.textContent = '';
    statusBox.className = 'form-status';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatus();

    const name = document.getElementById('feedback-name').value.trim();
    const email = document.getElementById('feedback-email').value.trim();
    const message = document.getElementById('feedback-message').value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus(t('feedback_error_email'), 'error');
      return;
    }
    if (!message) {
      showStatus(t('feedback_error_message'), 'error');
      return;
    }

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = t('feedback_sending');

    try {
      const res = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Failed');
      showStatus(t('feedback_success'), 'success');
      form.reset();
    } catch (err) {
      showStatus(t('feedback_error'), 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
})();
