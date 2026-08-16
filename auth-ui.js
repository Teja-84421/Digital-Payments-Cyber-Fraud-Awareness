/* =====================
   AUTH UI — shared across all pages
   Checks /api/auth/me on load and swaps the nav "Login" link for a
   profile widget (avatar + dropdown with name/email/logout) when
   the visitor has an active session.

   Requires a nav element with id="nav-auth-slot" wrapping the Login link:
     <li id="nav-auth-slot"><a href="login.html" data-i18n="nav_login">Login</a></li>

   Optional: add [data-auth-redirect="index.html"] to <body> on pages
   (like login.html) that should bounce a logged-in visitor away.
   ===================== */

(function () {
  const AUTH_LABELS = {
    en: { logout: 'Log out', greeting: 'Signed in as' },
    hi: { logout: 'लॉग आउट', greeting: 'इस रूप में साइन इन हैं' },
    te: { logout: 'లాగ్ అవుట్', greeting: 'ఇలా సైన్ ఇన్ చేసారు' },
  };

  // Same section links as the main nav — repeated here so they're reachable
  // from the profile dropdown on mobile, where the top nav-links list is hidden.
  const SECTION_LINKS = [
    { hash: '#payments', en: 'Payments', hi: 'भुगतान', te: 'చెల్లింపులు' },
    { hash: '#frauds', en: 'Frauds', hi: 'धोखाधड़ी', te: 'మోసాలు' },
    { hash: '#protect', en: 'Stay Safe', hi: 'सुरक्षित रहें', te: 'సురక్షితంగా ఉండండి' },
    { hash: '#videos', en: 'Videos', hi: 'वीडियो', te: 'వీడియోలు' },
    { hash: '#quiz', en: 'Quiz', hi: 'क्विज़', te: 'క్విజ్' },
    { hash: '#help', en: 'Help', hi: 'सहायता', te: 'సహాయం' },
  ];

  function getLang() {
    return localStorage.getItem('lang') || 'en';
  }

  function renderSectionLinksHtml(lang) {
    return SECTION_LINKS.map(
      (link) =>
        `<a class="profile-nav-link" href="index.html${link.hash}">${escapeHtml(link[lang] || link.en)}</a>`
    ).join('');
  }

  function renderProfileWidget(slot, user) {
    const lang = getLang();
    const t = AUTH_LABELS[lang] || AUTH_LABELS.en;
    const initial = (user.username || user.email || '?').trim().charAt(0).toUpperCase();

    slot.innerHTML = `
      <div class="profile-widget" id="profile-widget">
        <button type="button" class="profile-trigger" id="profile-trigger" aria-haspopup="true" aria-expanded="false">
          <span class="profile-avatar">${initial}</span>
          <span class="profile-name-label">${escapeHtml(user.username)}</span>
          <span class="profile-caret">▾</span>
        </button>
        <div class="profile-dropdown" role="menu">
          <div class="profile-nav-links">
            ${renderSectionLinksHtml(lang)}
          </div>
          <div class="profile-dropdown-divider"></div>
          <div class="profile-dropdown-greeting" style="font-size:0.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em;">${t.greeting}</div>
          <div class="profile-dropdown-name">${escapeHtml(user.username)}</div>
          <div class="profile-dropdown-email">${escapeHtml(user.email)}</div>
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="profile-logout-btn" id="profile-logout-btn">${t.logout}</button>
        </div>
      </div>
    `;

    const widget = document.getElementById('profile-widget');
    const trigger = document.getElementById('profile-trigger');
    const logoutBtn = document.getElementById('profile-logout-btn');

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = widget.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target)) {
        widget.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    widget.querySelectorAll('.profile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        widget.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });

    logoutBtn.addEventListener('click', async () => {
      logoutBtn.disabled = true;
      try {
        await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      } catch (e) {
        /* ignore network errors, cookie may still be cleared client-side on next load */
      }
      window.location.href = 'index.html';
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  async function initAuthUI() {
    const slot = document.getElementById('nav-auth-slot');
    let user = null;

    try {
      const res = await fetch('/api/auth/me', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        user = data.user;
      }
    } catch (e) {
      /* treat as logged out */
    }

    const redirectTarget = document.body.getAttribute('data-auth-redirect');
    if (user && redirectTarget) {
      window.location.href = redirectTarget;
      return;
    }

    if (user && slot) {
      renderProfileWidget(slot, user);
    }
    // If not logged in, leave the existing "Login" link in place untouched.
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthUI);
  } else {
    initAuthUI();
  }
})();
