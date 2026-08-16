/* =====================
   TOPIC TRACKER — "Mark as Completed" buttons on the Frauds cards
   Only active for signed-in users (auth-ui.js fires "cybersafe:auth" once
   the session check resolves). Fully invisible/inert for anonymous
   visitors — the rest of the site behaves exactly as before.
   ===================== */

(function () {
  function completedLabel() {
    const lang = localStorage.getItem('lang') || 'en';
    if (window.translations && window.translations[lang] && window.translations[lang].mark_completed_label) {
      return window.translations[lang].mark_completed_label;
    }
    return lang === 'hi' ? 'पूर्ण' : lang === 'te' ? 'పూర్తయింది' : 'Completed';
  }

  function markCompleteLabel() {
    const lang = localStorage.getItem('lang') || 'en';
    if (window.translations && window.translations[lang] && window.translations[lang].mark_complete) {
      return window.translations[lang].mark_complete;
    }
    return lang === 'hi' ? 'पूर्ण के रूप में चिह्नित करें' : lang === 'te' ? 'పూర్తయినట్లు గుర్తించండి' : 'Mark as Completed';
  }

  function paintButton(btn, completed) {
    btn.classList.toggle('is-completed', completed);
    btn.querySelector('.topic-complete-icon').textContent = completed ? '✓' : '○';
    btn.querySelector('.topic-complete-label').textContent = completed ? completedLabel() : markCompleteLabel();
    btn.setAttribute('aria-pressed', String(completed));
  }

  async function toggleTopic(topicKey, completed) {
    const res = await fetch('/api/dashboard/topic-progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ topicKey, completed }),
    });
    if (!res.ok) throw new Error('Failed to update progress');
  }

  async function init(user) {
    if (!user) return;

    const buttons = document.querySelectorAll('.topic-complete-btn');
    if (!buttons.length) return;

    let completedTopics = [];
    try {
      const res = await fetch('/api/dashboard/summary', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        completedTopics = data.completedTopics || [];
      }
    } catch (e) {
      /* if this fails, buttons still work — they'll just all start unchecked */
    }

    buttons.forEach((btn) => {
      btn.hidden = false;
      const topicKey = btn.getAttribute('data-topic-btn');
      paintButton(btn, completedTopics.includes(topicKey));

      btn.addEventListener('click', async () => {
        const nowCompleted = !btn.classList.contains('is-completed');
        paintButton(btn, nowCompleted); // optimistic UI
        btn.disabled = true;
        try {
          await toggleTopic(topicKey, nowCompleted);
        } catch (e) {
          paintButton(btn, !nowCompleted); // revert on failure
        } finally {
          btn.disabled = false;
        }
      });
    });
  }

  if (window.__cyberSafeUser !== undefined) {
    // auth-ui.js already resolved before this script ran.
    init(window.__cyberSafeUser);
  } else {
    document.addEventListener('cybersafe:auth', (e) => init(e.detail.user));
  }
})();
