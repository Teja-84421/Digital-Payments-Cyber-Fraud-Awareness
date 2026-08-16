/* =====================
   DASHBOARD — fetches /api/dashboard/summary and renders the
   personalized cards. All numbers come straight from the API response;
   nothing here is hard-coded.
   ===================== */

(function () {
  const LABELS = {
    en: {
      welcome: (name) => `Welcome, ${name} 👋`,
      subtitle: 'Your Cyber Safety Dashboard',
      safetyScore: 'Safety Score',
      safetyScoreEmptyNote: 'Start learning to improve your score.',
      quizAttempts: 'Quiz Attempts',
      bestScore: 'Best Quiz Score',
      notAttempted: 'Not attempted',
      learningProgress: 'Learning Progress',
      completedLabel: (done, total) => `Completed: ${done}/${total}`,
      topicsToImprove: 'Topics You Need to Improve',
      topicsToImproveEmpty: 'Complete a quiz to identify topics you can improve.',
      recommended: 'Recommended for You',
      recommendedLearn: (title) => `Learn about ${title}`,
      learnMore: 'Learn More →',
      allDone: 'Excellent! You have completed all awareness topics. Keep testing your knowledge with quizzes.',
      loadError: "Couldn't load your dashboard. Please refresh the page.",
    },
    hi: {
      welcome: (name) => `स्वागत है, ${name} 👋`,
      subtitle: 'आपका साइबर सुरक्षा डैशबोर्ड',
      safetyScore: 'सुरक्षा स्कोर',
      safetyScoreEmptyNote: 'अपना स्कोर सुधारने के लिए सीखना शुरू करें।',
      quizAttempts: 'क्विज़ प्रयास',
      bestScore: 'सर्वश्रेष्ठ क्विज़ स्कोर',
      notAttempted: 'अभी तक प्रयास नहीं किया',
      learningProgress: 'सीखने की प्रगति',
      completedLabel: (done, total) => `पूर्ण: ${done}/${total}`,
      topicsToImprove: 'सुधार की आवश्यकता वाले विषय',
      topicsToImproveEmpty: 'सुधार के लिए विषयों की पहचान करने हेतु एक क्विज़ पूरा करें।',
      recommended: 'आपके लिए अनुशंसित',
      recommendedLearn: (title) => `${title} के बारे में जानें`,
      learnMore: 'और जानें →',
      allDone: 'शानदार! आपने सभी जागरूकता विषय पूरे कर लिए हैं। क्विज़ से अपने ज्ञान का परीक्षण जारी रखें।',
      loadError: 'आपका डैशबोर्ड लोड नहीं हो सका। कृपया पेज को रीफ़्रेश करें।',
    },
    te: {
      welcome: (name) => `స్వాగతం, ${name} 👋`,
      subtitle: 'మీ సైబర్ సేఫ్టీ డాష్‌బోర్డ్',
      safetyScore: 'సేఫ్టీ స్కోర్',
      safetyScoreEmptyNote: 'మీ స్కోర్‌ను మెరుగుపరచడానికి నేర్చుకోవడం ప్రారంభించండి.',
      quizAttempts: 'క్విజ్ ప్రయత్నాలు',
      bestScore: 'ఉత్తమ క్విజ్ స్కోర్',
      notAttempted: 'ఇంకా ప్రయత్నించలేదు',
      learningProgress: 'లెర్నింగ్ ప్రోగ్రెస్',
      completedLabel: (done, total) => `పూర్తయింది: ${done}/${total}`,
      topicsToImprove: 'మీరు మెరుగుపరచుకోవాల్సిన అంశాలు',
      topicsToImproveEmpty: 'మీరు మెరుగుపరచుకోవాల్సిన అంశాలను గుర్తించడానికి ఒక క్విజ్ పూర్తి చేయండి.',
      recommended: 'మీ కోసం సిఫార్సు',
      recommendedLearn: (title) => `${title} గురించి తెలుసుకోండి`,
      learnMore: 'మరింత తెలుసుకోండి →',
      allDone: 'అద్భుతం! మీరు అన్ని అవగాహన అంశాలను పూర్తి చేసారు. క్విజ్‌లతో మీ జ్ఞానాన్ని పరీక్షించడం కొనసాగించండి.',
      loadError: 'మీ డాష్‌బోర్డ్ లోడ్ కాలేదు. దయచేసి పేజీని రిఫ్రెష్ చేయండి.',
    },
  };

  function getLang() {
    return localStorage.getItem('lang') || 'en';
  }

  function topicTitle(topicKey, lang) {
    const t = window.translations && window.translations[lang];
    const key = `${topicKey}_title`;
    if (t && t[key]) return t[key];
    // Fallback if translations.js hasn't loaded for some reason
    return topicKey;
  }

  function renderDashboard(data) {
    const lang = getLang();
    const L = LABELS[lang] || LABELS.en;
    const main = document.getElementById('dash-main');

    const bestScoreValueHtml = data.bestScore
      ? `<div class="dash-card-value">${data.bestScore.score}/${data.bestScore.total}</div>`
      : `<div class="dash-card-value empty">${L.notAttempted}</div>`;

    const progressPct = data.totalTopics > 0
      ? Math.round((data.completedTopics.length / data.totalTopics) * 100)
      : 0;

    const weakTopicsHtml = data.weakTopics.length
      ? `<ul class="dash-topic-list">${data.weakTopics.map((k) => `<li>${escapeHtml(topicTitle(k, lang))}</li>`).join('')}</ul>`
      : `<p class="dash-empty-note">${L.topicsToImproveEmpty}</p>`;

    // Recommendation: prefer a weak topic; else the first incomplete topic; else a positive message.
    let recommendHtml;
    const firstWeak = data.weakTopics.find((k) => !data.completedTopics.includes(k)) || data.weakTopics[0];
    if (firstWeak) {
      recommendHtml = `
        <div class="dash-recommend-title">${L.recommendedLearn(escapeHtml(topicTitle(firstWeak, lang)))}</div>
        <a class="btn btn-outline" href="index.html#frauds">${L.learnMore}</a>
      `;
    } else if (data.completedTopics.length < data.totalTopics) {
      const nextTopic = Array.from({ length: data.totalTopics }, (_, i) => `fraud${i + 1}`)
        .find((k) => !data.completedTopics.includes(k));
      recommendHtml = `
        <div class="dash-recommend-title">${L.recommendedLearn(escapeHtml(topicTitle(nextTopic, lang)))}</div>
        <a class="btn btn-outline" href="index.html#frauds">${L.learnMore}</a>
      `;
    } else {
      recommendHtml = `<p class="dash-recommend-positive">${L.allDone}</p>`;
    }

    main.innerHTML = `
      <div class="dash-welcome">${L.welcome(escapeHtml(data.username))}</div>
      <div class="dash-subtitle">${L.subtitle}</div>

      <div class="dash-grid">
        <div class="dash-card">
          <span class="dash-card-icon">🛡️</span>
          <div class="dash-card-label">${L.safetyScore}</div>
          <div class="dash-card-value">${data.safetyScore}%</div>
          ${data.safetyScore === 0 ? `<p class="dash-empty-note">${L.safetyScoreEmptyNote}</p>` : ''}
        </div>
        <div class="dash-card">
          <span class="dash-card-icon">📝</span>
          <div class="dash-card-label">${L.quizAttempts}</div>
          <div class="dash-card-value">${data.quizAttempts}</div>
        </div>
        <div class="dash-card">
          <span class="dash-card-icon">🏆</span>
          <div class="dash-card-label">${L.bestScore}</div>
          ${bestScoreValueHtml}
        </div>
      </div>

      <div class="dash-grid">
        <div class="dash-card dash-wide">
          <span class="dash-card-icon">📚</span>
          <div class="dash-card-label">${L.learningProgress}</div>
          <div class="dash-card-value">${L.completedLabel(data.completedTopics.length, data.totalTopics)}</div>
          <div class="dash-progress-track">
            <div class="dash-progress-bar" style="width:${progressPct}%;"></div>
          </div>
        </div>
      </div>

      <div class="dash-grid">
        <div class="dash-card dash-wide">
          <span class="dash-card-icon">⚠️</span>
          <div class="dash-card-label">${L.topicsToImprove}</div>
          ${weakTopicsHtml}
        </div>
      </div>

      <div class="dash-grid">
        <div class="dash-card dash-wide">
          <span class="dash-card-icon">🎯</span>
          <div class="dash-card-label">${L.recommended}</div>
          ${recommendHtml}
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  let lastSummaryData = null;

  async function loadDashboard() {
    const lang = getLang();
    const L = LABELS[lang] || LABELS.en;
    try {
      const res = await fetch('/api/dashboard/summary', { credentials: 'include' });
      if (!res.ok) throw new Error('Failed to load summary');
      const data = await res.json();
      lastSummaryData = data;
      renderDashboard(data);
    } catch (e) {
      document.getElementById('dash-main').innerHTML = `<p class="dash-loading">${L.loadError}</p>`;
    }
  }

  // script.js defines a global setLanguage() (for the nav's data-i18n text).
  // Wrap it so switching EN/HI/TE also re-renders these dynamically-built
  // cards immediately, without needing a page refresh or a second fetch.
  function hookLanguageSwitch() {
    if (typeof window.setLanguage !== 'function' || window.setLanguage.__dashboardWrapped) return;
    const original = window.setLanguage;
    const wrapped = function (lang) {
      original(lang);
      if (lastSummaryData) renderDashboard(lastSummaryData);
    };
    wrapped.__dashboardWrapped = true;
    window.setLanguage = wrapped;
  }

  // auth-ui.js handles the "redirect to login if not signed in" check (via
  // data-auth-required on <body>) and fires "cybersafe:auth" once resolved.
  document.addEventListener('cybersafe:auth', (e) => {
    hookLanguageSwitch();
    if (e.detail.user) loadDashboard();
    // If there's no user, auth-ui.js is already redirecting to login.html.
  });
})();
