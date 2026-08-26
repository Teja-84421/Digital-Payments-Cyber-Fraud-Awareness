/* =====================
   AUTH UI — shared across all pages
   Checks /api/auth/session (GET) on load and swaps the nav "Login" link for a
   profile widget (avatar + dropdown with "My Dashboard", section links,
   name/email/logout) when the visitor has an active session.

   Requires a nav element with id="nav-auth-slot" wrapping the Login link:
     <li id="nav-auth-slot"><a href="login.html" data-i18n="nav_login">Login</a></li>

   Optional body attributes:
     data-auth-redirect="index.html"   -> bounce a LOGGED-IN visitor away
                                           (used by login.html)
     data-auth-required="login.html"   -> bounce a LOGGED-OUT visitor away
                                           (used by dashboard.html)

   Also exposes window.__cyberSafeUser (null when signed out) and fires a
   "cybersafe:auth" event on document once the session check resolves, so
   other scripts (quiz tracking, topic-completion buttons) can react.
   ===================== */

/* =====================
   MOBILE NAV (hamburger) — shared across all pages
   Toggles the collapsible nav-right panel (nav-links, language
   switcher, theme toggle, login/profile) on small/medium screens.
   ===================== */
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-menu-open');
  }
  function openMenu() {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-menu-open');
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close the menu whenever a link inside it is tapped (nav links,
  // section links, login link, or profile-dropdown links).
  navMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });

  // Close on outside tap.
  document.addEventListener('click', (e) => {
    if (!navMenu.classList.contains('open')) return;
    if (navMenu.contains(e.target) || hamburger.contains(e.target)) return;
    closeMenu();
  });

  // Close on Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close automatically if the viewport grows back to desktop width.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });
})();

(function () {
  const AUTH_LABELS = {
    en: { logout: 'Log out', greeting: 'Signed in as', dashboard: 'My Dashboard' },
    hi: { logout: 'लॉग आउट', greeting: 'इस रूप में साइन इन हैं', dashboard: 'मेरा डैशबोर्ड' },
    te: { logout: 'లాగ్ అవుట్', greeting: 'ఇలా సైన్ ఇన్ చేసారు', dashboard: 'నా డాష్‌బోర్డ్' },
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
    { hash: '#feedback', en: 'Feedback', hi: 'प्रतिक्रिया', te: 'అభిప్రాయం' },
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
          <a class="profile-dashboard-link" href="dashboard.html">
            <span aria-hidden="true">🛡️</span> ${t.dashboard}
          </a>
          <div class="profile-dropdown-divider"></div>
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
        await fetch('/api/auth/session', { method: 'POST', credentials: 'include' });
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
      const res = await fetch('/api/auth/session', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        user = data.user;
      }
    } catch (e) {
      /* treat as logged out */
    }

    window.__cyberSafeUser = user || null;
    document.dispatchEvent(new CustomEvent('cybersafe:auth', { detail: { user: window.__cyberSafeUser } }));

    const redirectIfLoggedIn = document.body.getAttribute('data-auth-redirect');
    if (user && redirectIfLoggedIn) {
      const params = new URLSearchParams(window.location.search);
      const requested = params.get('redirect');
      const safeRequested = requested && /^[a-zA-Z0-9_-]+\.html$/.test(requested) ? requested : null;
      window.location.href = safeRequested || redirectIfLoggedIn;
      return;
    }

    const redirectIfLoggedOut = document.body.getAttribute('data-auth-required');
    if (!user && redirectIfLoggedOut) {
      const here = window.location.pathname.split('/').pop() || 'index.html';
      window.location.href = `${redirectIfLoggedOut}?redirect=${encodeURIComponent(here)}`;
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
