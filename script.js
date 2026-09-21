/* =====================
   VIDEO RESOURCES (per-language: channel + content match the selected language)
   ===================== */

// Each video's `id` is the YouTube video ID, `cat` matches the filter tabs
// (upi | fraud | awareness), and title/desc are in the video's own language
// since these are genuinely different videos per language, not translations
// of the same video.
const videoData = {
  en: [
    {
      id: "UasqK0JA6co", cat: "upi",
      title: "UPI Fraud Awareness — NPCI Official",
      desc: "An official awareness initiative by NPCI educating users on the types of UPI frauds and how to easily avoid them."
    },
    {
      id: "vBH4nrJtKiI", cat: "upi",
      title: "Cyber Awareness on UPI Frauds",
      desc: "Learn the most common UPI scam tricks including fake collect requests, QR scams, and social engineering tactics."
    },
    {
      id: "TyzSwiOGz2o", cat: "awareness",
      title: "Banking Cyber Crimes Exposed",
      desc: "How cybercriminals target bank accounts using AI and social engineering — and what you must know to stay protected."
    },
    {
      id: "vtbtkab9lcs", cat: "fraud",
      title: "What Is SIM Swapping?",
      desc: "How criminals port your mobile number to a new SIM, intercept all OTPs, and drain bank accounts — with tips on prevention."
    },
    {
      id: "H1lmavxI7BU", cat: "fraud",
      title: "Job Scams — How to Spot & Avoid Them",
      desc: "Tips to identify fake job postings and AI-powered recruitment scams that trick victims into sending money or sharing credentials."
    },
    {
      id: "fBKSmfOpC6s", cat: "upi",
      title: "Fake UPI Handle Scams & How to Stay Safe",
      desc: "A guide on spotting fraudulent UPI handles, validated payment channels, and how to verify before you transact."
    }
  ],
  hi: [
    {
      id: "9mBMspGhm3E", cat: "upi",
      title: "UPI धोखाधड़ी जागरूकता — NPCI आधिकारिक (Hindi)",
      desc: "NPCI की एक आधिकारिक जागरूकता पहल, जो UPI पर होने वाली धोखाधड़ी के प्रकार और उनसे बचने के आसान तरीके बताती है।"
    },
    {
      id: "FmvrRtlMzFs", cat: "upi",
      title: "UPI Payment Scam: कैसे हो रही साइबर धोखाधड़ी",
      desc: "NPCI के हवाले से जानें कि UPI भुगतान में धोखाधड़ी किस तरह होती है और इससे खुद को कैसे सुरक्षित रखें।"
    },
    {
      id: "PdAVQXyn0lg", cat: "awareness",
      title: "Money मंत्र: स्मार्ट बनें, साइबर ठगी रोकें",
      desc: "डिजिटल पेमेंट्स के दौर में साइबर फ्रॉड और ऑनलाइन ठगी से बचाव के ज़रूरी तरीकों पर एक विशेष चर्चा।"
    },
    {
      id: "-LZP-sDhWWs", cat: "fraud",
      title: "Digital Arrest Scam — जागरूकता इंटरव्यू",
      desc: "डिजिटल अरेस्ट स्कैम सहित आम साइबर धोखाधड़ी की चाल को समझें और खुद को इनसे सुरक्षित रखना सीखें।"
    },
    {
      id: "Otem95T0W3Q", cat: "fraud",
      title: "Online Scam के नए तरीके जान लो (2026)",
      desc: "मिस्ड-कॉल हैकिंग और OTP जैसी नई ऑनलाइन ठगी की तकनीकों की जानकारी, साथ ही शिकायत दर्ज करने का सही तरीका।"
    },
    {
      id: "TcM7j4A-LYw", cat: "awareness",
      title: "आज मेरे साथ Cyber Fraud हो गया — Ajit Anjum",
      desc: "पत्रकार अजीत अंजुम का निजी अनुभव, जो दिखाता है कि जान-पहचान के भरोसे पर भी धोखाधड़ी हो सकती है।"
    }
  ],
  te: [
    {
      id: "9FDk_KJxuJk", cat: "upi",
      title: "నా కళ్ళ ముందే జరిగింది — Prasad Tech in Telugu",
      desc: "UPI స్కామ్‌లు, OTP మోసాలు, లోన్ యాప్‌లు మరియు బెట్టింగ్ యాప్‌ల గురించి తెలుగులో వివరణ."
    },
    {
      id: "ZwGT0LeyCAc", cat: "fraud",
      title: "Digital Arrest Scam Telugu — ఒక్క కాల్‌తో లక్షలు పోతాయి!",
      desc: "పోలీస్ కాల్ స్కామ్ (డిజిటల్ అరెస్ట్) ఎలా జరుగుతుందో, దీని బారి నుండి ఎలా తప్పించుకోవాలో వివరణ."
    },
    {
      id: "QC0_0mnyygU", cat: "fraud",
      title: "SIM Swap Fraud — తెలుగులో వివరణ",
      desc: "సిమ్ కార్డ్ క్లోనింగ్ మరియు స్వాపింగ్ ద్వారా జరిగే మోసాల గురించి పూర్తి వివరణ."
    },
    {
      id: "_lgPcr1V0Ik", cat: "awareness",
      title: "Latest Scams 2026 — ఆన్‌లైన్ మోసాల పట్ల అప్రమత్తత",
      desc: "2026లో వస్తున్న కొత్త ఆన్‌లైన్ స్కామ్‌ల గురించి తెలుసుకుని, జాగ్రత్తగా ఎలా ఉండాలో నేర్చుకోండి."
    },
    {
      id: "cpzDdZjGsCw", cat: "fraud",
      title: "Loan App Scam — యువత తప్పక చూడాల్సిన వీడియో",
      desc: "నకిలీ లోన్ యాప్‌ల మోసాల గురించి యువత తప్పనిసరిగా తెలుసుకోవాల్సిన ముఖ్యమైన సమాచారం."
    }
  ]
};

// Keeps track of the currently active filter tab across language switches
let currentVideoFilter = 'all';

function videoTagKey(cat) {
  if (cat === 'upi') return 'vtab_upi';
  if (cat === 'fraud') return 'vtab_fraud';
  return 'vtab_awareness';
}

function renderVideos(lang) {
  const grid = document.getElementById('video-grid');
  if (!grid) return;

  const videos = videoData[lang] || videoData.en;
  const t = translations[lang] || translations.en;

  grid.innerHTML = videos.map(v => `
    <div class="video-card" data-cat="${v.cat}">
      <div class="video-wrap">
        <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title.replace(/"/g, '&quot;')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="video-info">
        <span class="video-tag">${t[videoTagKey(v.cat)]}</span>
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>
    </div>
  `).join('');

  // Re-apply whichever filter tab was active before the language switch
  document.querySelectorAll('.video-card').forEach(card => {
    if (currentVideoFilter === 'all' || card.dataset.cat === currentVideoFilter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

/* =====================
   VIDEO FILTER TABS
   ===================== */
function filterVideos(cat, btn) {
  currentVideoFilter = cat;
  document.querySelectorAll('.vtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.video-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}


/* =====================
   THEME TOGGLE
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
    nav_payments: "Payments",
    nav_frauds: "Frauds",
    nav_protect: "Stay Safe",
    nav_videos: "Videos",
    nav_quiz: "Quiz",
    nav_help: "Help",
    nav_feedback: "Feedback",
    nav_login: "Login",
    mark_complete: "Mark as Completed",
    mark_completed_label: "Completed",
    hero_title1: "Digital Payments",
    hero_title2: "Cyber Fraud",
    hero_title3: "Awareness",
    hero_sub: "India's digital payment ecosystem is growing at lightning speed—but so are the threats. Know how to pay smart, spot scams, and protect your money in the digital age.",
    hero_cta1: "Explore →",
    hero_cta2: "Take the Quiz",
    stat1: "UPI transactions (2024)",
    stat2: "Cyber frauds reported (2023)",
    stat3: "Online fraud losses",
    ticker_label: "⚠️ LIVE ALERTS",
    ticker1: "🔴 Never share OTP with anyone — not even bank employees",
    ticker2: "🔴 Scanning a QR code always means you PAY — you can never receive money via QR",
    ticker3: "🔴 Report fraud immediately: Call 1930 (National Cyber Crime Helpline)",
    ticker4: "🔴 \"Digital Arrest\" is NOT real — it's a scam. Hang up immediately",
    ticker5: "🔴 Do not install AnyDesk or TeamViewer on request from strangers",
    sec01_label: "01 — What are Digital Payments",
    sec01_title: "The Digital Payment Ecosystem",
    sec01_desc: "Digital payments are electronic transactions made without physical cash. India has one of the world's fastest-growing digital payment systems, powered by multiple platforms and technologies.",
    pay1_title: "UPI (Unified Payments Interface)",
    pay1_desc: "Real-time bank-to-bank transfer via mobile apps like GPay, PhonePe, Paytm. Uses VPA (Virtual Payment Address). Instant, 24×7, zero cost for users.",
    pay2_title: "Debit / Credit Cards",
    pay2_desc: "Plastic or virtual cards linked to bank accounts or credit lines. Use POS machines, online checkouts, and ATMs. Protected by CVV and OTP.",
    pay3_title: "Net Banking / NEFT / RTGS",
    pay3_desc: "Bank portals for fund transfers. NEFT works in batches; RTGS is real-time for large amounts (₹2L+). Ideal for business and high-value transactions.",
    pay4_title: "QR Code Payments",
    pay4_desc: "Scan a code to pay instantly. Used at shops, restaurants, and petrol pumps. Linked to UPI or wallets. Always verify the receiver before scanning.",
    pay5_title: "Digital Wallets",
    pay5_desc: "Apps like Paytm, Amazon Pay, MobiKwik store money for quick payments. Convenient for small purchases, online shopping, and utility bills.",
    pay6_title: "CBDC (Digital Rupee)",
    pay6_desc: "RBI's official digital currency. A government-backed e-rupee that works like cash but is fully digital. Being piloted across Indian banks since 2022.",
    upi_flow_title: "How a UPI Transaction Works",
    flow1_title: "Initiate", flow1_desc: "User enters UPI ID / scans QR and enters amount",
    flow2_title: "Authenticate", flow2_desc: "UPI PIN entered on secure keypad",
    flow3_title: "NPCI Switch", flow3_desc: "NPCI routes request to payer's bank",
    flow4_title: "Debit & Credit", flow4_desc: "Payer's account debited, receiver's credited",
    flow5_title: "Confirm", flow5_desc: "Both parties notified instantly",
    sec02_label: "02 — Cyber Frauds",
    sec02_title: "Types of Cyber Frauds in India",
    sec02_desc: "Cybercriminals are evolving rapidly. Here are the most common fraud types targeting digital payment users in India.",
    fraud1_title: "Fake Emails & Websites",
    fraud1_desc: "Fraudsters send fake emails mimicking banks (SBI, HDFC) or apps. Clicking links takes you to a fake site that steals your login credentials and OTP.",
    fraud2_title: "Fake Customer Care Calls",
    fraud2_desc: "Callers pose as bank officials, claiming your KYC is expired or account will be blocked. They ask for OTP, card details, or UPI PIN to \"verify.\"",
    fraud3_title: "Fake QR Code Fraud",
    fraud3_desc: "Scammers send QR codes saying \"scan to receive money.\" But in UPI, scanning a QR always means you PAY — you can never receive via a QR code.",
    fraud4_title: "Online Marketplace Scams",
    fraud4_desc: "Fake buyers on OLX, Quikr, or job portals. They send fake advance payments and ask you to \"refund\" a small amount via UPI, stealing far more.",
    fraud5_title: "Screen Sharing Fraud",
    fraud5_desc: "Fraudsters ask you to install AnyDesk, TeamViewer, etc. under the guise of \"technical support.\" They then access your banking apps and steal money.",
    fraud6_title: "SIM Swap Attack",
    fraud6_desc: "Criminals get your phone number ported to their SIM using forged documents. They then receive all your OTPs and drain your accounts.",
    fraud7_title: "Predatory Loan Apps",
    fraud7_desc: "Fake instant loan apps collect your Aadhaar, PAN, and contacts. They harass users with threats of sharing data publicly if immediate repayments aren't made.",
    fraud8_title: "Ponzi / Crypto Scams",
    fraud8_desc: "Promises of 30–100% returns via WhatsApp groups or Telegram. Often disguised as crypto, trading, or pyramid schemes. Victims lose entire savings.",
    flags_label: "02b — Warning Signs",
    flags_title: "🚨 Red Flags to Watch Out For",
    flags_desc: "Stop before you transact. If any of these signs appear, it's very likely a scam.",
    flag1: "Someone asks for your OTP, PIN, CVV, or password — no legitimate bank or app ever does this",
    flag2: "You're asked to \"send a small amount first\" to receive a larger one — this is always a scam",
    flag3: "Urgent pressure to act within minutes — \"your account will be blocked immediately\"",
    flag4: "A stranger sends a QR code and says \"scan to receive money\" — impossible in UPI",
    flag5: "Requests to install apps like AnyDesk, TeamViewer, or Screen Mirroring",
    flag6: "Links that look like real bank websites but have slight spelling differences",
    flag7: "Job offers asking for a \"security deposit\" or advance payment via UPI",
    flag8: "Lottery / lucky draw winnings you never entered — you must pay a fee to \"claim\"",
    sec03_label: "03 — Protection Tips",
    sec03_title: "How to Stay Safe Online",
    sec03_desc: "Simple habits can prevent most digital frauds. Follow these practices every time you make a digital transaction.",
    tip1_title: "Never Share OTP or PIN", tip1_desc: "Your OTP, UPI PIN, card CVV, and net banking password are yours alone. No bank, app, or government agency will ever ask for these.",
    tip2_title: "Verify Before You Pay", tip2_desc: "Always double-check the recipient's name shown on your UPI app before confirming. One wrong digit could send money to a stranger.",
    tip3_title: "Use Only Official Apps", tip3_desc: "Download payment apps only from Google Play Store or Apple App Store. Avoid APK files from WhatsApp or unknown websites.",
    tip4_title: "Enable Transaction Alerts", tip4_desc: "Turn on SMS and app notifications for every transaction. Monitor your bank statement weekly. Report unauthorized transactions immediately.",
    tip5_title: "Set UPI & Card Limits", tip5_desc: "Use your bank app to set daily UPI and card spending limits. This minimizes damage if your credentials are ever compromised.",
    tip6_title: "Use Strong, Unique Passwords", tip6_desc: "Never reuse passwords across apps. Use a password manager. Enable biometric or 2-factor authentication wherever possible.",
    tip7_title: "Secure Your SIM", tip7_desc: "Alert your telecom operator immediately if your SIM suddenly stops working. A dead SIM could mean you're being SIM-swapped.",
    tip8_title: "Avoid Public Wi-Fi for Payments", tip8_desc: "Public Wi-Fi networks can be intercepted. Use mobile data when doing any financial transaction. A VPN adds an extra layer of security.",
    sec04_label: "04 — Real Cases",
    sec04_title: "Real-World Fraud Cases in India",
    sec04_desc: "These documented cases show how everyday citizens fell victim to cyber fraud — and what we can learn from them.",
    case1_title: "Fake TRAI Officer Threatens Number Block",
    case1_desc: "A Mumbai businessman received a call from a \"TRAI officer\" claiming his number would be disconnected for illegal use. Transferred to a \"CBI officer,\" he was made to transfer ₹1.9 crore in \"digital arrest\" over 3 days before realizing the fraud.",
    case2_title: "Army Officer Posing as Buyer",
    case2_desc: "Victim listed a second-hand sofa on OLX. A fake army officer offered to buy it and sent a \"payment QR\" to receive money. The victim scanned and entered PIN, losing money instead of receiving it.",
    case3_title: "Predatory Loan App Harassment",
    case3_desc: "A Hyderabad resident downloaded a \"quick loan\" app and borrowed ₹5,000. The app accessed his contacts. When he couldn't repay the next day, fraudsters morphed his photo and messaged all his contacts calling him a criminal.",
    case4_title: "WhatsApp Crypto Trading Group",
    case4_desc: "A Bengaluru IT professional was added to a WhatsApp group where \"experts\" showed fake profits from crypto trading. He invested ₹12 lakh. When he tried to withdraw, he was asked to pay more \"taxes.\" He lost everything.",
    loss_label: "Loss",
    loss_label2: "+ Harassment",
    sec05_label: "05 — Watch & Learn",
    sec05_title: "Video Resources",
    sec05_desc: "Watch these curated videos to understand how cyber frauds actually happen — and how to protect yourself. All videos are from official and trusted sources.",
    vtab_all: "All", vtab_fraud: "Fraud Types", vtab_upi: "UPI Safety", vtab_awareness: "Awareness",
    vid1_title: "UPI Fraud Awareness — NPCI Official", vid1_desc: "An official awareness initiative by NPCI educating users on the types of UPI frauds and how to easily avoid them.",
    vid2_title: "Cyber Awareness on UPI Frauds", vid2_desc: "Learn the most common UPI scam tricks including fake collect requests, QR scams, and social engineering tactics.",
    vid3_title: "Banking Cyber Crimes Exposed", vid3_desc: "How cybercriminals target bank accounts using AI and social engineering — and what you must know to stay protected in 2025.",
    vid4_title: "What Is SIM Swapping?", vid4_desc: "How criminals port your mobile number to a new SIM, intercept all OTPs, and drain bank accounts — with tips on prevention.",
    vid5_title: "Job Scams — How to Spot & Avoid Them", vid5_desc: "10 tips to identify fake job postings and AI-powered recruitment scams that trick victims into sending money or sharing credentials.",
    vid6_title: "Fake UPI Handle Scams & How to Stay Safe", vid6_desc: "SEBI's guide on spotting fraudulent UPI handles, validated payment channels, and how to verify before you transact.",
    video_note: "Videos open from YouTube. All content is from verified educational and government channels. If a video is unavailable in your region, search the title directly on YouTube.",
    sec06_label: "06 — Test Yourself",
    sec06_title: "Cyber Fraud Awareness Quiz",
    sec06_desc: "Can you spot the scam? Test your knowledge with these real-world scenarios.",
    quiz_next: "Next Question →",
    sec07_label: "07 — Get Help",
    sec07_title: "Reported a Fraud? Act Fast!",
    sec07_desc: "Time is critical. Report cyber fraud immediately — banks can often freeze funds within hours of reporting. Here's who to contact.",
    help1_org: "National Cyber Crime Portal", help1_title: "Cyber Crime Helpline", help1_desc: "Call within minutes of fraud for best chance of fund recovery. Available 24×7.",
    help2_org: "Online Reporting", help2_title: "Report @ Cyber Portal", help2_desc: "File FIR online for financial, social media, and other cyber crimes.",
    help3_org: "Reserve Bank of India", help3_title: "RBI Banking Ombudsman", help3_desc: "Escalate banking disputes and unauthorized transaction complaints to RBI.",
    help4_org: "Your Bank", help4_title: "Bank Fraud Helpline", help4_num: "Immediately", help4_desc: "Call your bank's 24×7 helpline and freeze your account / block card without delay.",
    golden_label: "Golden Rule:",
    golden_text: "Call 1930 first, then your bank, then file an online complaint at cybercrime.gov.in. Keep all screenshots, transaction IDs, and call recordings as evidence. The sooner you report, the higher the chance of fund recovery.",
    feedback_label: "08 — Get in Touch",
    feedback_title: "Feedback & Queries",
    feedback_desc: "Found something wrong, have a suggestion, or a question about a scam? Send us a message — it goes straight to our inbox.",
    feedback_name_label: "Name (optional)",
    feedback_email_label: "Your Email",
    feedback_message_label: "Message",
    feedback_submit: "Send Feedback",
    feedback_sending: "Sending…",
    feedback_success: "Thanks! Your message has been sent.",
    feedback_error: "Couldn't send your message. Please try again.",
    feedback_error_email: "Please enter a valid email address.",
    feedback_error_message: "Please enter a message.",
    footer_title: "Digital Payments & Cyber Fraud Awareness",
    footer_sub: "Sources: NPCI, RBI, Ministry of Electronics & IT (MeitY), CERT-In, Cybercrime.gov.in\nFor educational purposes only. Always verify information with official government sources."
  },
  hi: {
    nav_payments: "भुगतान",
    nav_frauds: "धोखाधड़ी",
    nav_protect: "सुरक्षित रहें",
    nav_videos: "वीडियो",
    nav_quiz: "क्विज़",
    nav_help: "सहायता",
    nav_feedback: "प्रतिक्रिया",
    nav_login: "लॉग इन",
    mark_complete: "पूर्ण के रूप में चिह्नित करें",
    mark_completed_label: "पूर्ण",
    hero_title1: "डिजिटल भुगतान",
    hero_title2: "साइबर धोखाधड़ी",
    hero_title3: "जागरूकता",
    hero_sub: "भारत का डिजिटल भुगतान तेज़ी से बढ़ रहा है — लेकिन खतरे भी बढ़ रहे हैं। जानें कैसे सुरक्षित भुगतान करें, धोखाधड़ी पहचानें और अपना पैसा बचाएं।",
    hero_cta1: "जानें →",
    hero_cta2: "क्विज़ दें",
    stat1: "UPI लेनदेन (2024)",
    stat2: "साइबर धोखाधड़ी रिपोर्ट (2023)",
    stat3: "ऑनलाइन धोखाधड़ी नुकसान",
    ticker_label: "⚠️ अलर्ट",
    ticker1: "🔴 OTP किसी से भी साझा न करें — बैंक कर्मचारियों से भी नहीं",
    ticker2: "🔴 QR कोड स्कैन करने का मतलब हमेशा भुगतान करना होता है — QR से पैसे नहीं मिलते",
    ticker3: "🔴 धोखाधड़ी की तुरंत रिपोर्ट करें: 1930 पर कॉल करें",
    ticker4: "🔴 \"डिजिटल अरेस्ट\" असली नहीं है — यह एक धोखा है। तुरंत फोन काटें",
    ticker5: "🔴 अजनबियों के कहने पर AnyDesk या TeamViewer न इंस्टॉल करें",
    sec01_label: "01 — डिजिटल भुगतान क्या है",
    sec01_title: "डिजिटल भुगतान का संसार",
    sec01_desc: "डिजिटल भुगतान बिना नकदी के इलेक्ट्रॉनिक लेनदेन हैं। भारत में दुनिया के सबसे तेज़ी से बढ़ते डिजिटल भुगतान सिस्टम हैं।",
    pay1_title: "UPI (एकीकृत भुगतान इंटरफेस)",
    pay1_desc: "GPay, PhonePe, Paytm जैसे मोबाइल ऐप्स से तत्काल बैंक-से-बैंक ट्रांसफर। VPA का उपयोग करता है। तत्काल, 24×7, उपयोगकर्ताओं के लिए निःशुल्क।",
    pay2_title: "डेबिट / क्रेडिट कार्ड",
    pay2_desc: "बैंक खाते या क्रेडिट लाइन से जुड़े कार्ड। POS मशीन, ऑनलाइन चेकआउट और ATM पर उपयोग। CVV और OTP से सुरक्षित।",
    pay3_title: "नेट बैंकिंग / NEFT / RTGS",
    pay3_desc: "फंड ट्रांसफर के लिए बैंक पोर्टल। NEFT बैचों में; RTGS बड़ी राशि (₹2L+) के लिए तत्काल। व्यापार के लिए उपयुक्त।",
    pay4_title: "QR कोड भुगतान",
    pay4_desc: "तुरंत भुगतान के लिए कोड स्कैन करें। दुकानों, रेस्तरां और पेट्रोल पंपों पर उपयोग। स्कैन करने से पहले प्राप्तकर्ता की जांच करें।",
    pay5_title: "डिजिटल वॉलेट",
    pay5_desc: "Paytm, Amazon Pay, MobiKwik जैसे ऐप्स। छोटी खरीदारी, ऑनलाइन शॉपिंग और यूटिलिटी बिलों के लिए सुविधाजनक।",
    pay6_title: "CBDC (डिजिटल रुपया)",
    pay6_desc: "RBI की आधिकारिक डिजिटल मुद्रा। सरकार समर्थित e-रुपया जो कैश की तरह काम करता है। 2022 से भारतीय बैंकों में परीक्षण।",
    upi_flow_title: "UPI लेनदेन कैसे काम करता है",
    flow1_title: "शुरू करें", flow1_desc: "UPI ID दर्ज करें / QR स्कैन करें और राशि दर्ज करें",
    flow2_title: "प्रमाणीकरण", flow2_desc: "सुरक्षित कीपैड पर UPI PIN दर्ज करें",
    flow3_title: "NPCI स्विच", flow3_desc: "NPCI अनुरोध को भुगतानकर्ता के बैंक तक भेजता है",
    flow4_title: "डेबिट और क्रेडिट", flow4_desc: "भुगतानकर्ता का खाता डेबिट, प्राप्तकर्ता का क्रेडिट",
    flow5_title: "पुष्टि", flow5_desc: "दोनों पक्षों को तुरंत सूचना",
    sec02_label: "02 — साइबर धोखाधड़ी",
    sec02_title: "भारत में साइबर धोखाधड़ी के प्रकार",
    sec02_desc: "साइबर अपराधी तेज़ी से बदल रहे हैं। यहाँ सबसे सामान्य धोखाधड़ी के प्रकार हैं।",
    fraud1_title: "नकली ईमेल और वेबसाइटें",
    fraud1_desc: "धोखेबाज बैंकों (SBI, HDFC) जैसी नकली ईमेल भेजते हैं। लिंक पर क्लिक करने से नकली साइट खुलती है जो लॉगिन और OTP चुराती है।",
    fraud2_title: "नकली कस्टमर केयर कॉल",
    fraud2_desc: "कॉलर खुद को बैंक अधिकारी बताते हैं, कहते हैं KYC समाप्त हो गई है। \"सत्यापन\" के लिए OTP, कार्ड विवरण या UPI PIN मांगते हैं।",
    fraud3_title: "नकली QR कोड धोखाधड़ी",
    fraud3_desc: "जालसाज QR कोड भेजते हैं कि \"पैसे पाने के लिए स्कैन करें।\" लेकिन UPI में QR स्कैन करने का मतलब हमेशा भुगतान करना है।",
    fraud4_title: "ऑनलाइन मार्केटप्लेस घोटाले",
    fraud4_desc: "OLX, Quikr पर नकली खरीदार। वे एडवांस पेमेंट का नाटक करते हैं और UPI से \"रिफंड\" मांगते हैं, ज़्यादा पैसे चुराते हैं।",
    fraud5_title: "स्क्रीन शेयरिंग धोखाधड़ी",
    fraud5_desc: "\"तकनीकी सहायता\" के बहाने AnyDesk, TeamViewer इंस्टॉल करवाते हैं। फिर बैंकिंग ऐप्स तक पहुंच बनाकर पैसे चुरा लेते हैं।",
    fraud6_title: "SIM स्वैप हमला",
    fraud6_desc: "अपराधी जाली दस्तावेजों से आपका नंबर नई SIM पर पोर्ट करवा लेते हैं। फिर सभी OTP प्राप्त कर खातों को खाली कर देते हैं।",
    fraud7_title: "शोषणकारी लोन ऐप्स",
    fraud7_desc: "नकली लोन ऐप्स आपका आधार, PAN और संपर्क लेते हैं। तत्काल चुकाई न करने पर डेटा सार्वजनिक करने की धमकी देते हैं।",
    fraud8_title: "पोंजी / क्रिप्टो घोटाले",
    fraud8_desc: "WhatsApp या Telegram पर 30-100% रिटर्न का वादा। क्रिप्टो, ट्रेडिंग या पिरामिड स्कीम के रूप में। पीड़ित सब कुछ खो देते हैं।",
    flags_label: "02b — चेतावनी संकेत",
    flags_title: "🚨 सावधान रहें — ये संकेत धोखे के हैं",
    flags_desc: "लेनदेन से पहले रुकें। अगर ये संकेत दिखें तो यह धोखाधड़ी है।",
    flag1: "कोई आपका OTP, PIN, CVV या पासवर्ड मांगे — कोई भी वैध बैंक या ऐप ऐसा कभी नहीं करता",
    flag2: "\"पहले थोड़ा पैसा भेजें\" तो ज़्यादा मिलेगा — यह हमेशा धोखा होता है",
    flag3: "\"मिनटों में खाता बंद हो जाएगा\" — इस तरह का दबाव धोखे का संकेत है",
    flag4: "अजनबी QR कोड भेजे और कहे \"पैसे पाने के लिए स्कैन करें\" — UPI में यह असंभव है",
    flag5: "AnyDesk, TeamViewer या स्क्रीन मिररिंग ऐप इंस्टॉल करने का अनुरोध",
    flag6: "बैंक वेबसाइट जैसे दिखने वाले लिंक में थोड़ी स्पेलिंग गलती हो",
    flag7: "नौकरी के लिए \"सिक्योरिटी डिपॉजिट\" या UPI पेमेंट मांगें",
    flag8: "वह लॉटरी जिसमें आपने हिस्सा नहीं लिया — \"दावा\" करने के लिए फीस मांगें",
    sec03_label: "03 — सुरक्षा टिप्स",
    sec03_title: "ऑनलाइन कैसे सुरक्षित रहें",
    sec03_desc: "सरल आदतें अधिकांश डिजिटल धोखाधड़ी को रोक सकती हैं। हर डिजिटल लेनदेन में इन बातों का पालन करें।",
    tip1_title: "OTP या PIN कभी साझा न करें", tip1_desc: "आपका OTP, UPI PIN, कार्ड CVV और नेट बैंकिंग पासवर्ड केवल आपका है। कोई भी बैंक, ऐप या सरकारी एजेंसी इसे कभी नहीं मांगेगी।",
    tip2_title: "भुगतान से पहले जांचें", tip2_desc: "UPI ऐप पर दिखाए गए प्राप्तकर्ता का नाम पुष्टि करने से पहले हमेशा जांचें। एक गलत अंक अजनबी को पैसे भेज सकता है।",
    tip3_title: "केवल आधिकारिक ऐप्स का उपयोग करें", tip3_desc: "पेमेंट ऐप्स केवल Google Play Store या Apple App Store से डाउनलोड करें। WhatsApp या अज्ञात वेबसाइटों से APK फाइलें बचें।",
    tip4_title: "लेनदेन अलर्ट चालू रखें", tip4_desc: "हर लेनदेन के लिए SMS और ऐप सूचनाएं चालू करें। बैंक स्टेटमेंट साप्ताहिक जांचें। अनधिकृत लेनदेन तुरंत रिपोर्ट करें।",
    tip5_title: "UPI और कार्ड की सीमा तय करें", tip5_desc: "बैंक ऐप से दैनिक UPI और कार्ड खर्च सीमा निर्धारित करें। यह क्रेडेंशियल चोरी होने पर नुकसान कम करता है।",
    tip6_title: "मज़बूत, अद्वितीय पासवर्ड का उपयोग करें", tip6_desc: "पासवर्ड को ऐप्स में दोबारा उपयोग न करें। पासवर्ड मैनेजर का उपयोग करें। जहां भी संभव हो 2-फैक्टर प्रमाणीकरण चालू करें।",
    tip7_title: "अपनी SIM सुरक्षित करें", tip7_desc: "SIM अचानक बंद हो जाए तो तुरंत टेलीकॉम ऑपरेटर को सूचित करें। बंद SIM SIM स्वैप का संकेत हो सकती है।",
    tip8_title: "भुगतान के लिए पब्लिक Wi-Fi से बचें", tip8_desc: "सार्वजनिक Wi-Fi को इंटरसेप्ट किया जा सकता है। कोई भी वित्तीय लेनदेन मोबाइल डेटा से करें। VPN सुरक्षा की अतिरिक्त परत जोड़ता है।",
    sec04_label: "04 — असली मामले",
    sec04_title: "भारत में वास्तविक धोखाधड़ी के मामले",
    sec04_desc: "ये दर्ज मामले दिखाते हैं कि कैसे आम नागरिक साइबर धोखाधड़ी का शिकार हुए — और हम क्या सीख सकते हैं।",
    case1_title: "नकली TRAI अधिकारी ने नंबर बंद करने की धमकी दी",
    case1_desc: "मुंबई के एक व्यापारी को \"TRAI अधिकारी\" का फोन आया जिसने कहा उनका नंबर अवैध उपयोग के कारण बंद होगा। \"CBI अधिकारी\" को ट्रांसफर कर 3 दिनों में ₹1.9 करोड़ \"डिजिटल अरेस्ट\" में ट्रांसफर करवाए।",
    case2_title: "सेना अधिकारी बनकर खरीदार",
    case2_desc: "पीड़ित ने OLX पर पुराना सोफा बेचा। नकली सेना अधिकारी ने \"पेमेंट QR\" भेजकर पैसे लेने का नाटक किया। पीड़ित ने स्कैन कर PIN डाला और पैसे मिलने की बजाय चले गए।",
    case3_title: "शोषणकारी लोन ऐप का उत्पीड़न",
    case3_desc: "हैदराबाद के निवासी ने \"त्वरित लोन\" ऐप से ₹5,000 उधार लिए। ऐप ने उनके संपर्क एक्सेस किए। अगले दिन चुकाने में असमर्थ होने पर जालसाजों ने फोटो मॉर्फ कर सभी संपर्कों को भेजी।",
    case4_title: "WhatsApp क्रिप्टो ट्रेडिंग ग्रुप",
    case4_desc: "बेंगलुरु के IT पेशेवर को WhatsApp ग्रुप में जोड़ा गया जहाँ \"विशेषज्ञों\" ने नकला मुनाफा दिखाया। उन्होंने ₹12 लाख निवेश किए। निकासी पर और \"टैक्स\" माँगा गया। सब कुछ खो गया।",
    loss_label: "नुकसान",
    loss_label2: "+ उत्पीड़न",
    sec05_label: "05 — देखें और सीखें",
    sec05_title: "वीडियो संसाधन",
    sec05_desc: "ये वीडियो देखें — समझें कि साइबर धोखाधड़ी कैसे होती है और खुद को कैसे सुरक्षित रखें। सभी वीडियो आधिकारिक स्रोतों से हैं।",
    vtab_all: "सभी", vtab_fraud: "धोखाधड़ी प्रकार", vtab_upi: "UPI सुरक्षा", vtab_awareness: "जागरूकता",
    vid1_title: "UPI धोखाधड़ी जागरूकता — NPCI आधिकारिक", vid1_desc: "NPCI की आधिकारिक जागरूकता पहल जो UPI धोखाधड़ी और उनसे बचने के बारे में बताती है।",
    vid2_title: "UPI धोखाधड़ी पर साइबर जागरूकता", vid2_desc: "सामान्य UPI घोटाले की चालें जानें — नकली कलेक्ट रिक्वेस्ट, QR घोटाले और सोशल इंजीनियरिंग।",
    vid3_title: "बैंकिंग साइबर अपराध उजागर", vid3_desc: "साइबर अपराधी AI और सोशल इंजीनियरिंग से बैंक खातों को कैसे निशाना बनाते हैं — 2025 में सुरक्षित रहने के उपाय।",
    vid4_title: "SIM स्वैपिंग क्या है?", vid4_desc: "अपराधी आपका मोबाइल नंबर नई SIM पर कैसे पोर्ट करते हैं, OTP इंटरसेप्ट करते हैं और खाते खाली करते हैं।",
    vid5_title: "जॉब घोटाले — कैसे पहचानें और बचें", vid5_desc: "नकली नौकरी पोस्टिंग और AI घोटालों की पहचान के 10 टिप्स।",
    vid6_title: "नकली UPI हैंडल घोटाले और सुरक्षा", vid6_desc: "धोखाधड़ी वाले UPI हैंडल पहचानने और लेनदेन से पहले जांचने के SEBI के उपाय।",
    video_note: "वीडियो YouTube से खुलते हैं। सभी सामग्री सत्यापित शैक्षिक और सरकारी चैनलों से है।",
    sec06_label: "06 — खुद परखें",
    sec06_title: "साइबर धोखाधड़ी जागरूकता क्विज़",
    sec06_desc: "क्या आप धोखे को पहचान सकते हैं? वास्तविक परिदृश्यों के साथ अपना ज्ञान परखें।",
    quiz_next: "अगला प्रश्न →",
    sec07_label: "07 — सहायता प्राप्त करें",
    sec07_title: "धोखाधड़ी हुई? तुरंत कार्रवाई करें!",
    sec07_desc: "समय महत्वपूर्ण है। तुरंत साइबर धोखाधड़ी की रिपोर्ट करें — बैंक घंटों में फंड फ्रीज कर सकते हैं।",
    help1_org: "राष्ट्रीय साइबर अपराध पोर्टल", help1_title: "साइबर क्राइम हेल्पलाइन", help1_desc: "धोखाधड़ी के तुरंत बाद कॉल करें — फंड वापसी की सबसे अधिक संभावना। 24×7 उपलब्ध।",
    help2_org: "ऑनलाइन रिपोर्टिंग", help2_title: "साइबर पोर्टल पर रिपोर्ट करें", help2_desc: "वित्तीय, सोशल मीडिया और अन्य साइबर अपराधों के लिए ऑनलाइन FIR दर्ज करें।",
    help3_org: "भारतीय रिजर्व बैंक", help3_title: "RBI बैंकिंग लोकपाल", help3_desc: "बैंकिंग विवाद और अनधिकृत लेनदेन की शिकायत RBI को करें।",
    help4_org: "आपका बैंक", help4_title: "बैंक धोखाधड़ी हेल्पलाइन", help4_num: "तुरंत", help4_desc: "बैंक की 24×7 हेल्पलाइन पर कॉल करें और बिना देरी खाता फ्रीज / कार्ड ब्लॉक करें।",
    golden_label: "सुनहरा नियम:",
    golden_text: "पहले 1930 पर कॉल करें, फिर अपने बैंक को, फिर cybercrime.gov.in पर ऑनलाइन शिकायत दर्ज करें। सभी स्क्रीनशॉट, ट्रांजेक्शन ID और कॉल रिकॉर्डिंग सुरक्षित रखें। जितनी जल्दी रिपोर्ट करें, फंड वापसी की उतनी अधिक संभावना।",
    feedback_label: "08 — संपर्क करें",
    feedback_title: "प्रतिक्रिया और प्रश्न",
    feedback_desc: "कुछ गलत लगा, कोई सुझाव है, या किसी धोखाधड़ी के बारे में सवाल है? हमें संदेश भेजें — यह सीधे हमारे इनबॉक्स में जाएगा।",
    feedback_name_label: "नाम (वैकल्पिक)",
    feedback_email_label: "आपका ईमेल",
    feedback_message_label: "संदेश",
    feedback_submit: "प्रतिक्रिया भेजें",
    feedback_sending: "भेजा जा रहा है…",
    feedback_success: "धन्यवाद! आपका संदेश भेज दिया गया है।",
    feedback_error: "संदेश नहीं भेजा जा सका। कृपया पुनः प्रयास करें।",
    feedback_error_email: "कृपया एक वैध ईमेल पता दर्ज करें।",
    feedback_error_message: "कृपया एक संदेश दर्ज करें।",
    footer_title: "डिजिटल भुगतान और साइबर धोखाधड़ी जागरूकता",
    footer_sub: "स्रोत: NPCI, RBI, इलेक्ट्रॉनिक्स एवं IT मंत्रालय (MeitY), CERT-In, Cybercrime.gov.in\nकेवल शैक्षिक उद्देश्यों के लिए। आधिकारिक सरकारी स्रोतों से जानकारी सत्यापित करें।"
  },
  te: {
    nav_payments: "చెల్లింపులు",
    nav_frauds: "మోసాలు",
    nav_protect: "సురక్షితంగా ఉండండి",
    nav_videos: "వీడియోలు",
    nav_quiz: "క్విజ్",
    nav_help: "సహాయం",
    nav_feedback: "అభిప్రాయం",
    nav_login: "లాగిన్",
    mark_complete: "పూర్తయినట్లు గుర్తించండి",
    mark_completed_label: "పూర్తయింది",
    hero_title1: "డిజిటల్ చెల్లింపులు",
    hero_title2: "సైబర్ మోసం",
    hero_title3: "అవగాహన",
    hero_sub: "భారతదేశం యొక్క డిజిటల్ చెల్లింపు పర్యావరణ వ్యవస్థ వేగంగా పెరుగుతోంది — కానీ ముప్పులు కూడా పెరుగుతున్నాయి. స్మార్ట్ పేమెంట్ ఎలా చేయాలో, మోసాలను ఎలా గుర్తించాలో, డిజిటల్ యుగంలో మీ డబ్బును ఎలా రక్షించుకోవాలో తెలుసుకోండి.",
    hero_cta1: "అన్వేషించండి →",
    hero_cta2: "క్విజ్ తీసుకోండి",
    stat1: "UPI లావాదేవీలు (2024)",
    stat2: "నివేదించబడిన సైబర్ మోసాలు (2023)",
    stat3: "ఆన్‌లైన్ మోస నష్టాలు",
    ticker_label: "⚠️ ప్రత్యక్ష హెచ్చరికలు",
    ticker1: "🔴 OTP ఎవరితోనూ పంచుకోవద్దు — బ్యాంక్ ఉద్యోగులతో కూడా కాదు",
    ticker2: "🔴 QR కోడ్ స్కాన్ చేయడం అంటే మీరు చెల్లిస్తున్నారు — QR ద్వారా డబ్బు రాదు",
    ticker3: "🔴 మోసాన్ని వెంటనే నివేదించండి: 1930 కి కాల్ చేయండి",
    ticker4: "🔴 \"డిజిటల్ అరెస్ట్\" నిజం కాదు — ఇది మోసం. వెంటనే ఫోన్ పెట్టండి",
    ticker5: "🔴 అపరిచితుల అభ్యర్థన మేరకు AnyDesk లేదా TeamViewer ఇన్‌స్టాల్ చేయవద్దు",
    sec01_label: "01 — డిజిటల్ చెల్లింపులు అంటే ఏమిటి",
    sec01_title: "డిజిటల్ చెల్లింపు పర్యావరణ వ్యవస్థ",
    sec01_desc: "డిజిటల్ చెల్లింపులు నగదు లేకుండా ఎలక్ట్రానిక్ లావాదేవీలు. భారతదేశంలో ప్రపంచంలోనే వేగంగా అభివృద్ధి చెందుతున్న డిజిటల్ చెల్లింపు వ్యవస్థలు ఉన్నాయి.",
    pay1_title: "UPI (ఏకీకృత చెల్లింపు ఇంటర్ఫేస్)",
    pay1_desc: "GPay, PhonePe, Paytm వంటి మొబైల్ యాప్ల ద్వారా రియల్-టైమ్ బ్యాంక్-టు-బ్యాంక్ బదిలీ. VPA ఉపయోగిస్తుంది. తక్షణ, 24×7, వినియోగదారులకు ఉచితం.",
    pay2_title: "డెబిట్ / క్రెడిట్ కార్డ్‌లు",
    pay2_desc: "బ్యాంక్ ఖాతాలు లేదా క్రెడిట్ లైన్లకు అనుసంధానించబడిన కార్డ్‌లు. POS మెషీన్లు, ఆన్‌లైన్ చెక్అవుట్లు మరియు ATMలలో ఉపయోగించండి. CVV మరియు OTP ద్వారా రక్షించబడతాయి.",
    pay3_title: "నెట్ బ్యాంకింగ్ / NEFT / RTGS",
    pay3_desc: "నిధుల బదిలీ కోసం బ్యాంక్ పోర్టల్‌లు. NEFT బ్యాచ్‌లలో పనిచేస్తుంది; RTGS పెద్ద మొత్తాలకు (₹2L+) రియల్-టైమ్. వ్యాపారానికి అనువైనది.",
    pay4_title: "QR కోడ్ చెల్లింపులు",
    pay4_desc: "తక్షణ చెల్లింపు కోసం కోడ్ స్కాన్ చేయండి. దుకాణాలు, రెస్టారెంట్లు మరియు పెట్రోల్ పంపులలో ఉపయోగించబడుతుంది. స్కాన్ చేయడానికి ముందు గ్రహీతను ఎల్లప్పుడూ ధృవీకరించండి.",
    pay5_title: "డిజిటల్ వాలెట్‌లు",
    pay5_desc: "Paytm, Amazon Pay, MobiKwik వంటి యాప్‌లు త్వరిత చెల్లింపుల కోసం డబ్బును నిల్వ చేస్తాయి. చిన్న కొనుగోళ్లు, ఆన్‌లైన్ షాపింగ్ మరియు యుటిలిటీ బిల్లులకు అనుకూలం.",
    pay6_title: "CBDC (డిజిటల్ రూపాయి)",
    pay6_desc: "RBI యొక్క అధికారిక డిజిటల్ కరెన్సీ. ప్రభుత్వ-మద్దతు ఉన్న ఇ-రూపాయి ఇది నగదు లాగా పనిచేస్తుంది. 2022 నుండి భారతీయ బ్యాంకులలో పైలట్.",
    upi_flow_title: "UPI లావాదేవీ ఎలా పనిచేస్తుంది",
    flow1_title: "ప్రారంభించండి", flow1_desc: "వినియోగదారు UPI ID / QR స్కాన్ చేసి మొత్తం నమోదు చేయండి",
    flow2_title: "ధృవీకరించండి", flow2_desc: "సురక్షిత కీప్యాడ్‌పై UPI PIN నమోదు చేయండి",
    flow3_title: "NPCI స్విచ్", flow3_desc: "NPCI అభ్యర్థనను చెల్లింపుదారు బ్యాంక్‌కు మార్గనిర్దేశం చేస్తుంది",
    flow4_title: "డెబిట్ & క్రెడిట్", flow4_desc: "చెల్లింపుదారు ఖాతా డెబిట్, గ్రహీతకు క్రెడిట్",
    flow5_title: "నిర్ధారించండి", flow5_desc: "రెండు పార్టీలకు తక్షణం తెలియజేయబడుతుంది",
    sec02_label: "02 — సైబర్ మోసాలు",
    sec02_title: "భారతదేశంలో సైబర్ మోసాల రకాలు",
    sec02_desc: "సైబర్ నేరస్థులు వేగంగా అభివృద్ధి చెందుతున్నారు. భారతదేశంలో డిజిటల్ చెల్లింపు వినియోగదారులను లక్ష్యంగా చేసుకునే అత్యంత సాధారణ మోస రకాలు ఇవి.",
    fraud1_title: "నకిలీ ఇమెయిల్‌లు & వెబ్‌సైట్‌లు",
    fraud1_desc: "మోసగాళ్లు బ్యాంకులను (SBI, HDFC) లేదా యాప్‌లను అనుకరించే నకిలీ ఇమెయిల్‌లు పంపుతారు. లింక్‌లపై క్లిక్ చేయడం వలన మీ లాగిన్ ఆధారాలు మరియు OTPని దొంగిలించే నకిలీ సైట్‌కు తీసుకువెళతారు.",
    fraud2_title: "నకిలీ కస్టమర్ కేర్ కాల్స్",
    fraud2_desc: "కాలర్లు బ్యాంక్ అధికారులుగా నటిస్తారు, మీ KYC గడువు ముగిసిందని లేదా ఖాతా బ్లాక్ అవుతుందని చెబుతారు. \"ధృవీకరించడానికి\" OTP, కార్డ్ వివరాలు లేదా UPI PIN అడుగుతారు.",
    fraud3_title: "నకిలీ QR కోడ్ మోసం",
    fraud3_desc: "మోసగాళ్లు \"డబ్బు పొందడానికి స్కాన్ చేయండి\" అని QR కోడ్‌లను పంపుతారు. కానీ UPIలో, QR స్కాన్ చేయడం అంటే మీరు చెల్లిస్తున్నారు — QR ద్వారా మీరు ఎప్పుడూ డబ్బు పొందలేరు.",
    fraud4_title: "ఆన్‌లైన్ మార్కెట్‌ప్లేస్ మోసాలు",
    fraud4_desc: "OLX, Quikr లేదా ఉద్యోగ పోర్టల్‌లలో నకిలీ కొనుగోలుదారులు. వారు నకిలీ అడ్వాన్స్ చెల్లింపులు పంపుతారు మరియు UPI ద్వారా \"రిఫండ్\" చేయమని అడుగుతారు, ఇంకా ఎక్కువ దొంగిలిస్తారు.",
    fraud5_title: "స్క్రీన్ షేరింగ్ మోసం",
    fraud5_desc: "\"సాంకేతిక మద్దతు\" పేరుతో AnyDesk, TeamViewer మొదలైనవి ఇన్‌స్టాల్ చేయమని మోసగాళ్లు అడుగుతారు. అప్పుడు వారు మీ బ్యాంకింగ్ యాప్‌లను యాక్సెస్ చేసి డబ్బు దొంగిలిస్తారు.",
    fraud6_title: "SIM స్వాప్ దాడి",
    fraud6_desc: "నేరస్థులు నకిలీ పత్రాలను ఉపయోగించి మీ ఫోన్ నంబర్‌ను వారి SIMకు పోర్ట్ చేస్తారు. అప్పుడు వారు మీ అన్ని OTPలను స్వీకరించి మీ ఖాతాలను ఖాళీ చేస్తారు.",
    fraud7_title: "ప్రెడేటరీ లోన్ యాప్‌లు",
    fraud7_desc: "నకిలీ ఇన్‌స్టంట్ లోన్ యాప్‌లు మీ ఆధార్, PAN మరియు పరిచయాలను సేకరిస్తాయి. తక్షణ చెల్లింపులు చేయకపోతే డేటాను బహిరంగంగా భాగస్వామ్యం చేస్తామని బెదిరిస్తూ వినియోగదారులను వేధిస్తారు.",
    fraud8_title: "పోంజి / క్రిప్టో మోసాలు",
    fraud8_desc: "WhatsApp గ్రూపులు లేదా Telegram ద్వారా 30–100% రిటర్న్స్ వాగ్దానాలు. తరచుగా క్రిప్టో, ట్రేడింగ్ లేదా పిరమిడ్ పథకాలుగా మారువేషంలో ఉంటాయి. బాధితులు మొత్తం పొదుపును కోల్పోతారు.",
    flags_label: "02బి — హెచ్చరిక సంకేతాలు",
    flags_title: "🚨 గమనించవలసిన రెడ్ ఫ్లాగ్‌లు",
    flags_desc: "లావాదేవీకి ముందు ఆగండి. ఈ సంకేతాలలో ఏదైనా కనిపిస్తే, అది చాలా మోసం.",
    flag1: "ఎవరైనా మీ OTP, PIN, CVV లేదా పాస్‌వర్డ్ అడిగితే — ఏ చట్టబద్ధమైన బ్యాంక్ లేదా యాప్ ఇది ఎప్పుడూ చేయదు",
    flag2: "పెద్ద మొత్తం పొందడానికి \"మొదట చిన్న మొత్తం పంపండి\" అని అడిగితే — ఇది ఎల్లప్పుడూ మోసం",
    flag3: "నిమిషాల్లో చర్య తీసుకోవాలని ఒత్తిడి — \"మీ ఖాతా వెంటనే బ్లాక్ చేయబడుతుంది\"",
    flag4: "ఒక అపరిచితుడు QR కోడ్ పంపి \"డబ్బు పొందడానికి స్కాన్ చేయండి\" అని చెప్పడం — UPIలో అసాధ్యం",
    flag5: "AnyDesk, TeamViewer లేదా స్క్రీన్ మిర్రరింగ్ వంటి యాప్‌లను ఇన్‌స్టాల్ చేయాలని అభ్యర్థనలు",
    flag6: "నిజమైన బ్యాంక్ వెబ్‌సైట్‌ల మాదిరిగా కనిపించే లింక్‌లలో కొద్దిపాటి స్పెల్లింగ్ తేడాలు ఉంటాయి",
    flag7: "UPI ద్వారా \"సెక్యూరిటీ డిపాజిట్\" లేదా అడ్వాన్స్ చెల్లింపు అడిగే ఉద్యోగ ఆఫర్లు",
    flag8: "మీరు ఎప్పుడూ ప్రవేశించని లాటరీ / లక్కీ డ్రా — \"క్లెయిమ్\" చేయడానికి మీరు ఫీజు చెల్లించాలి",
    sec03_label: "03 — రక్షణ చిట్కాలు",
    sec03_title: "ఆన్‌లైన్‌లో సురక్షితంగా ఎలా ఉండాలి",
    sec03_desc: "సాధారణ అలవాట్లు చాలా డిజిటల్ మోసాలను నివారించగలవు. ప్రతి డిజిటల్ లావాదేవీ సమయంలో ఈ పద్ధతులను అనుసరించండి.",
    tip1_title: "OTP లేదా PIN ఎప్పుడూ పంచుకోవద్దు", tip1_desc: "మీ OTP, UPI PIN, కార్డ్ CVV మరియు నెట్ బ్యాంకింగ్ పాస్‌వర్డ్ మీవి మాత్రమే. ఏ బ్యాంక్, యాప్ లేదా ప్రభుత్వ ఏజెన్సీ వీటిని ఎప్పుడూ అడగదు.",
    tip2_title: "చెల్లించే ముందు ధృవీకరించండి", tip2_desc: "నిర్ధారించే ముందు మీ UPI యాప్‌లో చూపబడిన గ్రహీత పేరును ఎల్లప్పుడూ రెండుసార్లు తనిఖీ చేయండి. ఒక తప్పు అంకె అపరిచితునికి డబ్బు పంపవచ్చు.",
    tip3_title: "అధికారిక యాప్‌లను మాత్రమే ఉపయోగించండి", tip3_desc: "చెల్లింపు యాప్‌లను Google Play Store లేదా Apple App Store నుండి మాత్రమే డౌన్‌లోడ్ చేయండి. WhatsApp లేదా తెలియని వెబ్‌సైట్ల నుండి APK ఫైల్‌లను నివారించండి.",
    tip4_title: "లావాదేవీ హెచ్చరికలను ప్రారంభించండి", tip4_desc: "ప్రతి లావాదేవీకి SMS మరియు యాప్ నోటిఫికేషన్‌లను ఆన్ చేయండి. వారానికోసారి మీ బ్యాంక్ స్టేట్‌మెంట్‌ను పర్యవేక్షించండి. అనధికార లావాదేవీలను వెంటనే నివేదించండి.",
    tip5_title: "UPI & కార్డ్ పరిమితులను సెట్ చేయండి", tip5_desc: "రోజువారీ UPI మరియు కార్డ్ ఖర్చు పరిమితులను సెట్ చేయడానికి మీ బ్యాంక్ యాప్‌ను ఉపయోగించండి. మీ ఆధారాలు రాజీపడినప్పుడు ఇది నష్టాన్ని తగ్గిస్తుంది.",
    tip6_title: "బలమైన, ప్రత్యేకమైన పాస్‌వర్డ్‌లను ఉపయోగించండి", tip6_desc: "యాప్‌లలో పాస్‌వర్డ్‌లను ఎప్పుడూ తిరిగి ఉపయోగించవద్దు. పాస్‌వర్డ్ మేనేజర్ ఉపయోగించండి. సాధ్యమైనచోట బయోమెట్రిక్ లేదా 2-ఫ్యాక్టర్ ప్రామాణీకరణను ప్రారంభించండి.",
    tip7_title: "మీ SIMను సురక్షితం చేయండి", tip7_desc: "మీ SIM అకస్మాత్తుగా పనిచేయడం ఆపివేస్తే వెంటనే మీ టెలికాం ఆపరేటర్‌కు హెచ్చరించండి. చనిపోయిన SIM అంటే మీరు SIM-స్వాప్ అవుతున్నారని అర్థం కావచ్చు.",
    tip8_title: "చెల్లింపుల కోసం పబ్లిక్ Wi-Fiని నివారించండి", tip8_desc: "పబ్లిక్ Wi-Fi నెట్‌వర్క్‌లు అడ్డగించబడతాయి. ఏదైనా ఆర్థిక లావాదేవీ చేసేటప్పుడు మొబైల్ డేటా ఉపయోగించండి. VPN అదనపు భద్రతను అందిస్తుంది.",
    sec04_label: "04 — నిజమైన కేసులు",
    sec04_title: "భారతదేశంలో వాస్తవ-ప్రపంచ మోస కేసులు",
    sec04_desc: "ఈ డాక్యుమెంట్ చేయబడిన కేసులు సాధారణ పౌరులు సైబర్ మోసానికి ఎలా గురయ్యారో — మరియు మనం వాటి నుండి ఏమి నేర్చుకోవచ్చో చూపిస్తాయి.",
    case1_title: "నకిలీ TRAI అధికారి నంబర్ బ్లాక్ బెదిరింపు",
    case1_desc: "ముంబై వ్యాపారస్తుడు \"TRAI అధికారి\" నుండి కాల్ అందుకున్నాడు, అతని నంబర్ అక్రమ ఉపయోగం కోసం డిస్కనెక్ట్ చేయబడుతుందని చెప్పారు. \"CBI అధికారి\"కి బదిలీ చేయబడి, 3 రోజుల్లో \"డిజిటల్ అరెస్ట్\"లో ₹1.9 కోట్లు బదిలీ చేయమని బలవంతం చేయబడ్డాడు.",
    case2_title: "కొనుగోలుదారుగా నటిస్తున్న ఆర్మీ ఆఫీసర్",
    case2_desc: "బాధితుడు OLXలో సెకండ్-హ్యాండ్ సోఫా జాబితా చేశాడు. నకిలీ ఆర్మీ ఆఫీసర్ దానిని కొనుగోలు చేయడానికి ఆఫర్ చేసి, డబ్బు పొందడానికి \"పేమెంట్ QR\" పంపాడు. బాధితుడు స్కాన్ చేసి PIN నమోదు చేశాడు, డబ్బు పొందకుండా కోల్పోయాడు.",
    case3_title: "ప్రెడేటరీ లోన్ యాప్ వేధింపు",
    case3_desc: "హైదరాబాద్ నివాసి \"త్వరిత లోన్\" యాప్‌ను డౌన్‌లోడ్ చేసి ₹5,000 అప్పు తీసుకున్నాడు. యాప్ అతని కాంటాక్ట్‌లను యాక్సెస్ చేసింది. మరుసటి రోజు తిరిగి చెల్లించలేకపోయినప్పుడు, మోసగాళ్లు అతని ఫోటోను మార్చి అతని కాంటాక్ట్‌లందరికీ క్రిమినల్ అని సందేశం పంపారు.",
    case4_title: "WhatsApp క్రిప్టో ట్రేడింగ్ గ్రూప్",
    case4_desc: "బెంగళూరుకు చెందిన IT ప్రొఫెషనల్ WhatsApp గ్రూప్‌లో చేర్చబడ్డాడు, అక్కడ \"నిపుణులు\" క్రిప్టో ట్రేడింగ్ నుండి నకిలీ లాభాలను చూపించారు. అతను ₹12 లక్షలు పెట్టుబడి పెట్టాడు. ఉపసంహరించుకోవడానికి ప్రయత్నించినప్పుడు, అతను మరింత \"పన్నులు\" చెల్లించమని అడిగారు. అతను ప్రతిదీ కోల్పోయాడు.",
    loss_label: "నష్టం",
    loss_label2: "+ వేధింపు",
    sec05_label: "05 — చూడండి & నేర్చుకోండి",
    sec05_title: "వీడియో వనరులు",
    sec05_desc: "సైబర్ మోసాలు వాస్తవానికి ఎలా జరుగుతాయో — మరియు మిమ్మల్ని మీరు ఎలా రక్షించుకోవాలో అర్థం చేసుకోవడానికి ఈ క్యూరేటెడ్ వీడియోలను చూడండి. అన్ని వీడియోలు అధికారిక మరియు విశ్వసనీయ మూలాల నుండి వచ్చాయి.",
    vtab_all: "అన్నీ", vtab_fraud: "మోస రకాలు", vtab_upi: "UPI భద్రత", vtab_awareness: "అవగాహన",
    vid1_title: "UPI మోస అవగాహన — NPCI అధికారిక", vid1_desc: "UPI మోసాల రకాలు మరియు వాటిని సులభంగా ఎలా నివారించాలో వినియోగదారులకు అవగాహన కల్పించే NPCI యొక్క అధికారిక చొరవ.",
    vid2_title: "UPI మోసాలపై సైబర్ అవగాహన", vid2_desc: "నకిలీ కలెక్ట్ అభ్యర్థనలు, QR మోసాలు మరియు సోషల్ ఇంజినీరింగ్ వ్యూహాలతో సహా అత్యంత సాధారణ UPI మోసపు ట్రిక్స్ తెలుసుకోండి.",
    vid3_title: "బ్యాంకింగ్ సైబర్ నేరాలు బహిర్గతం", vid3_desc: "సైబర్ నేరస్థులు AI మరియు సోషల్ ఇంజినీరింగ్ ఉపయోగించి బ్యాంక్ ఖాతాలను ఎలా లక్ష్యంగా చేసుకుంటారు — మరియు 2025లో సురక్షితంగా ఉండటానికి మీరు తప్పనిసరిగా తెలుసుకోవలసినవి.",
    vid4_title: "SIM స్వాపింగ్ అంటే ఏమిటి?", vid4_desc: "నేరస్థులు మీ మొబైల్ నంబర్‌ను కొత్త SIMకు ఎలా పోర్ట్ చేస్తారు, అన్ని OTPలను అడ్డగించి, బ్యాంక్ ఖాతాలను ఖాళీ చేస్తారు — నివారణ చిట్కాలతో.",
    vid5_title: "ఉద్యోగ మోసాలు — ఎలా గుర్తించాలి & నివారించాలి", vid5_desc: "నకిలీ ఉద్యోగ పోస్టింగ్‌లు మరియు AI-ఆధారిత రిక్రూట్‌మెంట్ మోసాలను గుర్తించడానికి 10 చిట్కాలు, ఇవి బాధితులను డబ్బు పంపడానికి లేదా ఆధారాలను పంచుకోవడానికి మోసం చేస్తాయి.",
    vid6_title: "నకిలీ UPI హ్యాండిల్ మోసాలు & సురక్షితంగా ఎలా ఉండాలి", vid6_desc: "మోసపూరిత UPI హ్యాండిల్‌లను గుర్తించడం, ధృవీకరించబడిన చెల్లింపు ఛానెల్‌లు మరియు లావాదేవీకి ముందు ఎలా ధృవీకరించాలి అనే SEBI మార్గదర్శి.",
    video_note: "వీడియోలు YouTube నుండి తెరవబడతాయి. అన్ని కంటెంట్ ధృవీకరించబడిన విద్యా మరియు ప్రభుత్వ ఛానెల్‌ల నుండి వచ్చింది. మీ ప్రాంతంలో వీడియో అందుబాటులో లేకుంటే, శీర్షికను నేరుగా YouTubeలో శోధించండి.",
    sec06_label: "06 — మీరే పరీక్షించుకోండి",
    sec06_title: "సైబర్ మోస అవగాహన క్విజ్",
    sec06_desc: "మీరు మోసాన్ని గుర్తించగలరా? ఈ వాస్తవ-ప్రపంచ పరిస్థితులతో మీ జ్ఞానాన్ని పరీక్షించుకోండి.",
    quiz_next: "తదుపరి ప్రశ్న →",
    sec07_label: "07 — సహాయం పొందండి",
    sec07_title: "మోసం జరిగిందా? వేగంగా చర్య తీసుకోండి!",
    sec07_desc: "సమయం కీలకం. వెంటనే సైబర్ మోసాన్ని నివేదించండి — బ్యాంకులు తరచుగా నివేదించిన కొన్ని గంటల్లో నిధులను స్తంభింపజేయగలవు. ఇక్కడ ఎవరిని సంప్రదించాలో చూడండి.",
    help1_org: "జాతీయ సైబర్ క్రైమ్ పోర్టల్", help1_title: "సైబర్ క్రైమ్ హెల్ప్‌లైన్", help1_desc: "నిధుల రికవరీకి ఉత్తమ అవకాశం కోసం మోసం జరిగిన నిమిషాల్లోనే కాల్ చేయండి. 24×7 అందుబాటులో ఉంటుంది.",
    help2_org: "ఆన్‌లైన్ రిపోర్టింగ్", help2_title: "సైబర్ పోర్టల్‌లో రిపోర్ట్ చేయండి", help2_desc: "ఆర్థిక, సోషల్ మీడియా మరియు ఇతర సైబర్ నేరాల కోసం ఆన్‌లైన్‌లో FIR దాఖలు చేయండి.",
    help3_org: "భారతీయ రిజర్వ్ బ్యాంక్", help3_title: "RBI బ్యాంకింగ్ ఒంబడ్స్‌మన్", help3_desc: "బ్యాంకింగ్ వివాదాలు మరియు అనధికార లావాదేవీ ఫిర్యాదులను RBIకి పంపండి.",
    help4_org: "మీ బ్యాంక్", help4_title: "బ్యాంక్ మోస హెల్ప్‌లైన్", help4_num: "తక్షణం", help4_desc: "మీ బ్యాంక్ యొక్క 24×7 హెల్ప్‌లైన్‌కు కాల్ చేసి, ఆలస్యం చేయకుండా మీ ఖాతాను స్తంభింపజేయండి / కార్డ్‌ను బ్లాక్ చేయండి.",
    golden_label: "స్వర్ణ నియమం:",
    golden_text: "మొదట 1930కి కాల్ చేయండి, తర్వాత మీ బ్యాంక్‌కు, ఆపై cybercrime.gov.inలో ఆన్‌లైన్ ఫిర్యాదు దాఖలు చేయండి. అన్ని స్క్రీన్‌షాట్‌లు, లావాదేవీ IDలు మరియు కాల్ రికార్డింగ్‌లను సాక్ష్యంగా ఉంచుకోండి. మీరు ఎంత త్వరగా నివేదిస్తే, నిధుల రికవరీ అవకాశం అంత ఎక్కువ.",
    feedback_label: "08 — మమ్మల్ని సంప్రదించండి",
    feedback_title: "అభిప్రాయం & ప్రశ్నలు",
    feedback_desc: "ఏదైనా తప్పు కనిపించిందా, సూచన ఉందా, లేదా మోసం గురించి ప్రశ్న ఉందా? మాకు సందేశం పంపండి — ఇది నేరుగా మా ఇన్‌బాక్స్‌కు వెళుతుంది.",
    feedback_name_label: "పేరు (ఐచ్ఛికం)",
    feedback_email_label: "మీ ఇమెయిల్",
    feedback_message_label: "సందేశం",
    feedback_submit: "అభిప్రాయం పంపండి",
    feedback_sending: "పంపుతోంది…",
    feedback_success: "ధన్యవాదాలు! మీ సందేశం పంపబడింది.",
    feedback_error: "సందేశం పంపడం సాధ్యం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.",
    feedback_error_email: "దయచేసి సరైన ఇమెయిల్ చిరునామాను నమోదు చేయండి.",
    feedback_error_message: "దయచేసి ఒక సందేశాన్ని నమోదు చేయండి.",
    footer_title: "డిజిటల్ చెల్లింపులు & సైబర్ మోస అవగాహన",
    footer_sub: "మూలాలు: NPCI, RBI, ఎలక్ట్రానిక్స్ & IT మంత్రిత్వ శాఖ (MeitY), CERT-In, Cybercrime.gov.in\nవిద్యా ప్రయోజనాల కోసం మాత్రమే. అధికారిక ప్రభుత్వ మూలాల నుండి సమాచారాన్ని ఎల్లప్పుడూ ధృవీకరించండి."
  }
};

// Exposed for other scripts (e.g. topic-tracker.js) that reuse these strings
// instead of duplicating a separate translation set.
window.translations = translations;

/* =====================
   LANGUAGE SYSTEM
   ===================== */
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update ticker (duplicate for seamless loop)
  const tickerContent = document.querySelector('.ticker-content');
  if (tickerContent) {
    const items = ['ticker1','ticker2','ticker3','ticker4','ticker5'];
    let html = '';
    // Duplicate for infinite scroll
    for (let pass = 0; pass < 2; pass++) {
      items.forEach(k => {
        html += `<span class="ticker-item">${t[k]}</span><span class="ticker-sep">•</span>`;
      });
    }
    tickerContent.innerHTML = html;
  }

  // Toggle active buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('lang-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  // Update html lang attribute
  document.documentElement.lang = (lang === 'hi' || lang === 'te') ? lang : 'en';

  // Reload quiz in new language (fetches a fresh AI-generated batch)
  startNewQuizAttempt();

  // Reload video resources in new language (different channels/content per language)
  renderVideos(lang);
}

// Apply saved language on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});


/* =====================
   QUIZ
   ===================== */
/* =====================
   QUIZ QUESTION BANK — 100 fixed English questions (10 sets of 10)
   No API, no AI, no network call of any kind. Every set below always
   covers each of the 8 fraud topics exactly once, plus 2 general
   cyber-crime-reporting questions, matching the original quiz format.
   See getNextEnglishSet() further down for how a set is picked each
   time the quiz (re)starts.
   ===================== */
const enTopics = {
  fraud3: [ // Fake QR code fraud
    {
      q: "You receive a QR code on WhatsApp from an unknown person saying 'Scan this to receive ₹5000'. What do you do?",
      opts: ["Scan it immediately", "Ask them to send again", "Never scan — in UPI, scanning a QR always means you PAY", "Call your bank first"],
      ans: 2, topic: 'fraud3',
      exp: "✅ Correct! Scanning a QR code in UPI always initiates a payment FROM you. You can NEVER receive money by scanning a QR code."
    },
    {
      q: "A buyer on Facebook Marketplace sends you a QR code and says scanning it will 'verify your account' before he pays you. What's the reality?",
      opts: ["Scanning verifies your account safely", "Scanning it will make you pay him, not the other way round", "It speeds up the payment", "It's required by Facebook"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! No genuine payment process ever needs YOU to scan a QR before receiving money — scanning always triggers an outgoing payment."
    },
    {
      q: "A caller says an EMI mandate was wrongly set up on your account and asks you to scan a QR code to 'cancel' it. What actually happens if you scan?",
      opts: ["The mandate is cancelled instantly", "Nothing, it's just a formality", "Money is deducted from your account", "Your CIBIL score improves"],
      ans: 2, topic: 'fraud3',
      exp: "✅ Correct! Scanning a QR never cancels anything — it authorizes a payment. Cancel mandates only through your bank's official app or branch."
    },
    {
      q: "You post a 'Wanted to Buy' ad. A 'buyer' sends you a QR code claiming it 'confirms he already sent the money'. What should you do?",
      opts: ["Scan it to confirm receipt", "Check your bank account/app directly for the credit, never scan to 'confirm'", "Ask him to send a screenshot instead", "Trust him since he contacted you first"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! Only your own bank app or SMS alert can confirm money was received. A QR code is never used to 'confirm' an incoming payment."
    },
    {
      q: "Someone claiming to be from a payment gateway company sends you a QR code 'for KYC verification'. Is scanning a QR ever part of KYC?",
      opts: ["Yes, it's a standard KYC step", "No — KYC never requires scanning a payment QR code", "Only for business accounts", "Only if the caller sounds official"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! KYC verification never involves scanning a UPI QR code — that only ever initiates a payment, never an identity check."
    },
    {
      q: "A fraudster pastes a fake QR sticker over a shop's genuine UPI QR code at the counter. Who does the customer's payment go to if they scan it?",
      opts: ["The shop, as usual", "The fraudster who pasted the sticker", "It bounces back automatically", "The bank flags it before it's sent"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! A tampered QR sticker redirects payment to the fraudster's own UPI ID. Shopkeepers and customers should regularly check the printed UPI ID matches the shop's own."
    },
    {
      q: "Someone messages 'I accidentally sent you extra money, please scan this QR to refund the difference'. What's really going on?",
      opts: ["A genuine refund request", "A scam — scanning the QR will pay them, not refund anything", "A bank-mandated verification", "Nothing, it's harmless"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! This is a common trick — the 'refund' QR is just another payment request. Check your own account for any actual extra credit first, and never scan to 'return' money."
    },
    {
      q: "A fake job recruiter tells you to scan a QR code to 'receive your joining bonus'. What should you expect?",
      opts: ["The bonus credited instantly", "Money will be deducted from your account instead", "A confirmation SMS from HR", "Nothing happens either way"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! No employer ever pays a bonus by asking you to scan a QR — that action only ever sends money out of your account."
    },
    {
      q: "A scammer keeps sending you QR code after QR code saying 'try this one, that one didn't work'. What does this behaviour suggest?",
      opts: ["A technical glitch on their end", "They're trying to trick you into scanning one out of persistence/urgency", "Their app is outdated", "It's a sign they are trustworthy"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! Repeated QR codes with manufactured urgency is a pressure tactic. If any QR is meant to make you receive money, stop and verify independently."
    },
    {
      q: "What is the one universal truth you should always remember about UPI QR codes?",
      opts: ["Scanning a QR can either pay or receive money, depending on the app", "Scanning a QR code ALWAYS initiates a payment from you, never a receipt", "QR codes are only used by shops", "QR codes always require a PIN to be safe"],
      ans: 1, topic: 'fraud3',
      exp: "✅ Correct! No matter who sends it or what they claim, scanning a QR code always means you are about to pay — never receive."
    },
  ],
  fraud2: [ // Vishing
    {
      q: "A 'bank officer' calls and says your KYC is expired. He asks for your OTP to 'update' it. What do you do?",
      opts: ["Share OTP quickly to avoid account block", "Ask him to call back later", "Hang up — banks NEVER ask for OTP", "Share only half the OTP"],
      ans: 2, topic: 'fraud2',
      exp: "✅ Correct! No bank, government body, or app will ever ask for your OTP. This is a vishing (voice phishing) scam."
    },
    {
      q: "A caller claiming to be from 'RBI' says a fraudulent transaction is happening on your account right now and asks you to share the OTP to 'block' it. What should you do?",
      opts: ["Share it immediately to stop the fraud", "Hang up — RBI never calls individuals directly or asks for OTPs", "Ask for his employee ID first", "Share it only if he knows your name"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! RBI does not call individual customers about their accounts or ask for OTPs. This urgency is a manipulation tactic."
    },
    {
      q: "Someone claiming to be your UPI app's customer care asks you to read out the OTP you just received, saying it's needed to 'process your refund'. What is this OTP actually for?",
      opts: ["Confirming the refund", "Authorizing a payment OUT of your account", "Verifying your identity only", "Nothing important"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! An OTP received during a 'refund' call is almost always for an outgoing payment/PIN reset — never share it with a caller."
    },
    {
      q: "A caller says he's from a courier company and your parcel is held at customs; you must share an OTP to pay a small 'customs duty' and release it. What should you do?",
      opts: ["Share the OTP to release the parcel", "Hang up and verify directly with the courier company via its official number", "Ask him to call your family instead", "Pay only through the number he gives you"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! Genuine customs/courier dues are paid through official, verifiable channels — never by sharing an OTP over a call."
    },
    {
      q: "Someone calls claiming to be from your credit card company, saying they need your CVV and an OTP to 'increase your credit limit'. Is this legitimate?",
      opts: ["Yes, this is standard verification", "No — no card company needs your CVV/OTP over a call for this", "Only if they know your card's last 4 digits", "Yes, if the call comes from a toll-free number"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! Credit limit changes never require you to share your CVV or OTP over a phone call. This is a card-fraud attempt."
    },
    {
      q: "A caller says your EPFO/PF account is under 'verification' and asks for your OTP along with your Aadhaar number. What should you suspect?",
      opts: ["A routine EPFO process", "A vishing scam trying to steal your identity and account access", "A mandatory yearly check", "Nothing unusual"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! EPFO never asks for OTPs over calls. Combining Aadhaar with an OTP request is a strong sign of identity/account theft."
    },
    {
      q: "An 'insurance agent' calls saying your policy is about to lapse and asks for an OTP to 'extend' it immediately. What should you do?",
      opts: ["Share the OTP to avoid losing the policy", "Hang up and check your policy status directly with the insurer's app/website", "Ask him to WhatsApp the OTP request", "Give the OTP only if he has your policy number"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! Insurers never need an OTP over a call to extend a policy. Verify any policy concerns directly through official channels."
    },
    {
      q: "Caller ID shows your bank's real customer-care number, and the caller asks for your card details. Since the number looks genuine, is it safe to trust?",
      opts: ["Yes, caller ID can never be faked", "No — caller ID can be spoofed to look like a real number", "Only banks can display their real number", "Yes, if the call has good audio quality"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! Caller ID spoofing lets scammers display any number, including a real bank number. Never share sensitive details based on caller ID alone."
    },
    {
      q: "A caller says your banking app has a 'technical glitch' and you must share the OTP sent to your phone to 'fix' it. What's really happening?",
      opts: ["A genuine technical support call", "The OTP is being used to authorize a transaction from your account", "A routine app update", "Nothing — it's harmless to share"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! 'Technical glitches' needing your OTP is a common script — the OTP is actually authorizing a fraudulent transaction."
    },
    {
      q: "What should you always remember about any customer-care call — even one that sounds convincing — asking you for an OTP?",
      opts: ["Share it if they already know your name and account number", "No legitimate customer care will ever ask you to share an OTP over a call", "Share it only for 'urgent' matters", "It's fine if they call from an official-sounding number"],
      ans: 1, topic: 'fraud2',
      exp: "✅ Correct! An OTP is meant only for you — no legitimate organization will ever ask you to read it out over a phone call, no matter how convincing they sound."
    },
  ],
  fraud4: [ // Online marketplace scams
    {
      q: "You sold something on OLX. The 'buyer' sends ₹1 and asks you to enter your UPI PIN to 'collect the full payment'. What happens?",
      opts: ["You receive the full amount", "Nothing happens", "You send money to the scammer", "Your account gets verified"],
      ans: 2, topic: 'fraud4',
      exp: "✅ Correct! Entering your UPI PIN always authorizes an outgoing payment, never an incoming one. This is the classic OLX QR/PIN scam."
    },
    {
      q: "You're buying an item from a classifieds ad. The seller asks for a 'token advance' via UPI before you can even see the item in person, then stops replying. What went wrong?",
      opts: ["Nothing — this is standard practice", "You paid an advance to someone with no accountability and no item to show for it", "The seller just forgot to reply", "The UPI app malfunctioned"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! Never pay an advance to a stranger before verifying the item and seller in person; classifieds fraud often ends exactly this way."
    },
    {
      q: "A 'buyer' for your car ad claims to be an army officer posted abroad and asks you to ship the item first, promising payment via a screenshot they'll send. What's the red flag?",
      opts: ["Army officers can't buy online, so it's automatically fake", "Relying on a screenshot instead of your own bank confirmation is the red flag", "There's no red flag, this is normal", "The price they offered was too low"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! A payment screenshot can be faked. Only trust money actually credited and visible in your own bank/UPI app — never ship first based on a promise."
    },
    {
      q: "A buyer sends you a screenshot claiming payment is done and asks you to hand over the goods before you've checked your bank. What should you do?",
      opts: ["Trust the screenshot and release the goods", "Check your actual bank/UPI app balance and SMS alerts before releasing anything", "Ask for a second screenshot to confirm", "Release the goods since he seems honest"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! Screenshots are easy to fake or edit. Always confirm the credit has actually reflected in your own account first."
    },
    {
      q: "A 'buyer' insists on a video call and asks you to share your screen while they 'verify' something on your banking app, but they're actually watching for your OTP. What should you do?",
      opts: ["Share your screen since it's just a video call", "Refuse — never share your screen showing banking apps with strangers", "Share it but mute the audio", "Only share it if the call is recorded"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! Screen-sharing your banking app with a stranger, for any reason, lets them capture OTPs and PINs live."
    },
    {
      q: "A phone is listed at a suspiciously low price on a classifieds site, and the seller demands full payment upfront with no meeting. What should you do?",
      opts: ["Pay quickly before someone else buys it", "Be highly suspicious — genuine sellers rarely demand full upfront payment with no verification", "Assume it's a clearance sale", "Ask for a bigger discount instead"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! Deals that are 'too good to be true' combined with full upfront payment and no in-person option are a classic scam pattern."
    },
    {
      q: "A seller pressures you to complete payment 'right now' because 'many other buyers are interested'. What does this manufactured urgency usually indicate?",
      opts: ["It's just good salesmanship", "It's a pressure tactic used to stop you from thinking it through or verifying the deal", "It means the item is genuinely popular", "It guarantees the seller is trustworthy"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! Scammers create false urgency so you skip normal checks. A genuine seller won't mind you taking a moment to verify."
    },
    {
      q: "You get a call from someone claiming to be 'OLX support' who says they need to verify your listing's safety and asks for the OTP sent to your phone. What should you do?",
      opts: ["Share the OTP since it's for your own listing's safety", "Refuse — OLX/marketplace support never asks for OTPs over a call", "Share it only if they know your listing details", "Ask them to email you instead, then share it"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! No marketplace's real support team ever needs your OTP to 'verify' a listing — this is a scam trying to hijack your account."
    },
    {
      q: "A buyer insists you download a specific unfamiliar app 'to confirm payment receipt'. Is this ever necessary for a normal UPI transaction?",
      opts: ["Yes, some apps require this for verification", "No — a genuine UPI payment reflects directly in your own banking/UPI app, no extra app needed", "Only for high-value transactions", "Only if the buyer is from another city"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! You never need to install a buyer-suggested app to 'receive' a payment — that's a common way to install fraudulent remote-access or fake payment apps."
    },
    {
      q: "What is the safest way to complete an online marketplace deal with a stranger?",
      opts: ["Trust screenshots and complete payment in advance", "Meet in a safe public place, verify the item, and use cash or immediate UPI transfer confirmed in your own app", "Always ship first to build trust", "Share your UPI PIN so they can 'test' the payment"],
      ans: 1, topic: 'fraud4',
      exp: "✅ Correct! In-person verification in a safe location, with payment confirmed directly in your own app, avoids nearly all classifieds scams."
    },
  ],
  fraud1: [ // Phishing
    {
      q: "Which of these is a legitimate way your bank will contact you?",
      opts: ["WhatsApp message asking to update KYC via a link", "Call asking for your card number and CVV", "Email from bank's official domain with no attachments", "SMS asking you to call an unknown number"],
      ans: 2, topic: 'fraud1',
      exp: "✅ Correct! Legitimate bank emails come from official domains and never ask for sensitive information or have suspicious attachments."
    },
    {
      q: "You get an email 'from your bank' warning your account will be blocked in 24 hours unless you click a link to 'sbi-security-update.com'. What should you do?",
      opts: ["Click and enter your details quickly to avoid the block", "Reply to the email asking for clarification", "Delete/report it — banks don't send urgent 'account will be blocked' links, and the domain isn't the bank's own", "Forward it to friends using the same link"],
      ans: 2, topic: 'fraud1',
      exp: "✅ Correct! A domain that isn't the bank's official one, plus manufactured urgency, is a classic phishing pattern. Never click such links."
    },
    {
      q: "A pop-up says 'You've won cashback from your payment app! Click to claim' and then asks for your UPI PIN to 'activate' the reward. What should you do?",
      opts: ["Enter the PIN to claim the reward", "Close the pop-up — a genuine reward never requires your UPI PIN to 'activate'", "Enter half the PIN to test it", "Screenshot it and share on social media first"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Your UPI PIN is only ever needed to authorize a payment — never to 'claim' or 'activate' a reward. This is a phishing trick to steal your PIN."
    },
    {
      q: "You get an SMS saying 'Your account will be suspended, update your PAN at http://icici-kyc-verify.co'. What's suspicious about this?",
      opts: ["Nothing, it looks official", "The domain doesn't match the bank's real website — a classic phishing sign", "The message is too short to be fake", "It's suspicious only if sent at night"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Always check the actual domain in a link carefully — banks only use their own verified domains, never look-alike or unrelated ones."
    },
    {
      q: "You receive an email attachment named 'Refund_Form.pdf.exe' claiming to be from the Income Tax Department. What's the safest action?",
      opts: ["Open it to check your refund status", "Don't open it — a '.exe' file disguised as a PDF is a strong sign of malware/phishing", "Forward it to your accountant to open first", "Open it only on your phone, not your computer"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Executable files disguised with double extensions like '.pdf.exe' are a common malware delivery method — never open them."
    },
    {
      q: "A fake login page looks identical to your bank's real website and asks for your net-banking password. What's the most reliable way to spot it's fake?",
      opts: ["The page design will always look different", "Carefully check the URL/domain in the address bar for spelling errors or a mismatched domain", "Fake pages never use HTTPS", "There's no way to tell the difference"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Visual design can be copied perfectly, but the actual domain in the address bar cannot be faked as your bank's real one — always check it carefully."
    },
    {
      q: "You get a WhatsApp message with your bank's logo saying 'Your KYC documents are outdated, update now' with a link. What's the red flag here?",
      opts: ["The logo looks too professional", "Banks don't send unsolicited KYC-update links over WhatsApp with urgency", "WhatsApp messages are always fake", "Nothing, this is standard practice"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! An unsolicited link with urgency, sent via WhatsApp and using a copied logo, is a classic phishing setup — never click it."
    },
    {
      q: "An email says you've won ₹10 lakh from a bank lottery you never entered, but you must first pay a 'processing fee' to claim it. What is this?",
      opts: ["A genuine bank promotion", "A phishing/advance-fee scam — you never pay to receive a prize you never entered for", "A tax refund process", "A loyalty reward program"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Legitimate prizes never require an upfront 'fee' to release them. This is a classic advance-fee phishing scam."
    },
    {
      q: "You get a text with a shortened link (like bit.ly/xyz) claiming to be your electricity board asking you to pay a pending bill immediately. What should you do?",
      opts: ["Click the shortened link and pay right away", "Ignore the link and check your bill status directly on the electricity board's official app/website", "Reply 'STOP' to the SMS", "Forward it to the electricity board's number"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Shortened links hide the real destination. Always check bills directly through the utility's official app or website instead of clicking SMS links."
    },
    {
      q: "What is the safest way to check whether a bank communication (email, SMS, or call) is genuine?",
      opts: ["Click the link and see what happens", "Independently type the bank's official website address yourself, or call the number printed on your card", "Reply to the message asking if it's real", "Trust it if it has the bank's logo"],
      ans: 1, topic: 'fraud1',
      exp: "✅ Correct! Always verify independently — type the bank's known URL yourself or call the number on your card/passbook, never one given in the suspicious message itself."
    },
  ],
  fraud5: [ // Screen-sharing remote access fraud
    {
      q: "Someone claiming to be from tech support calls you and asks you to install AnyDesk or TeamViewer to 'fix an issue' with your bank app. What should you do?",
      opts: ["Install it and let them control your screen", "Only share your screen, not control", "Refuse — never give screen-sharing/remote access to unknown callers", "Install it but close your banking app first"],
      ans: 2, topic: 'fraud5',
      exp: "✅ Correct! Remote-access apps let scammers see your OTPs and PINs live and drain your account. Never install these for unsolicited callers."
    },
    {
      q: "A 'bank employee' calls saying they need to install a remote-access app on your phone to 'reverse' a wrongly debited transaction. Is this a real bank process?",
      opts: ["Yes, banks sometimes need remote access to fix errors", "No — banks never need remote access to your device to reverse a transaction", "Only for large amounts", "Only if you initiate the call yourself"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! Transaction reversals are handled entirely on the bank's end — they never require installing remote-access software on your phone."
    },
    {
      q: "You searched Google for a company's 'customer care number', called it, and they asked you to install a remote-access app. What's the danger here?",
      opts: ["No danger, since you found the number yourself", "Fake customer-care numbers are often planted online specifically to trick you into installing such apps", "Google always verifies phone numbers", "There's no risk if the call is short"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! Scammers plant fake 'customer care' numbers online. Always get support numbers only from the company's official app or website, and never install remote apps for any caller."
    },
    {
      q: "A platform claims your app-store purchase needs a 'refund', but first you must install remote-access software to 'process' it. What should you do?",
      opts: ["Install it since it's for a refund", "Refuse — refunds never require installing remote-access software", "Install it and immediately uninstall after", "Ask them to process it without remote access, and hang up if they refuse"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! No legitimate refund process ever needs remote access to your device. This is a setup to steal banking credentials."
    },
    {
      q: "During a video call, a fraudster specifically asks you to enable 'screen share' to help 'troubleshoot' your UPI app. What is the real goal?",
      opts: ["Genuinely helping fix your app", "Watching your screen live to capture your PIN, OTP, or account details", "Improving call quality", "Verifying your identity"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! Screen-sharing during a banking task lets a scammer watch everything you type in real time, including OTPs and PINs."
    },
    {
      q: "Once a scammer has remote access to your phone or computer via an app like AnyDesk, what can they typically do?",
      opts: ["Only see your wallpaper", "See everything on your screen and control your device just like you can, including opening banking apps", "Only access your camera", "Nothing without your permission each time"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! Remote-access apps give the caller full visibility and control of your device, exactly as if they were sitting in front of it."
    },
    {
      q: "A caller insists you keep a remote-access app running 'in the background' while you carry out your own banking. What's the danger in this specifically?",
      opts: ["No danger if you're the one typing", "They can watch and record every keystroke and screen you access, including OTPs, live", "It only slows down your phone", "It's only risky if you close the banking app"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! A 'background' remote session still lets the scammer see and record your screen in real time — it's just as dangerous as an active call."
    },
    {
      q: "Someone claiming to be from the 'electricity board' says you were overbilled and asks you to install AnyDesk to process an urgent refund. What should you do?",
      opts: ["Install it to get the refund faster", "Refuse — utility refunds are processed automatically through your bank account, never via remote-access apps", "Ask for a smaller refund without the app", "Install it just for this one refund"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! No utility company processes refunds by remotely accessing your device — refunds simply get credited to your registered bank account."
    },
    {
      q: "A pop-up claiming to be a 'software update' asks you to install a screen-sharing tool to complete 'verification'. Is this legitimate?",
      opts: ["Yes, updates sometimes need this", "No — genuine software updates never require installing a separate screen-sharing tool for 'verification'", "Only if the pop-up looks professional", "Only on older phones"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! Real software updates never ask you to install a screen-sharing app as part of the process. Close and ignore such pop-ups."
    },
    {
      q: "What is the single best rule to remember about remote-access apps (AnyDesk, TeamViewer, QuickSupport, etc.) and banking?",
      opts: ["Only install them if the caller sounds professional", "Never install or activate them for any unsolicited caller, especially around anything related to your bank or payments", "They're safe as long as you watch the screen", "Only risky if you share your PIN separately"],
      ans: 1, topic: 'fraud5',
      exp: "✅ Correct! No legitimate bank, company, or support team ever needs remote access to your personal device — treat every such request as fraud."
    },
  ],
  fraud6: [ // SIM swap fraud
    {
      q: "Your phone suddenly loses network signal for hours and you later find your SIM was reissued to someone else. This is most likely which fraud?",
      opts: ["Phishing", "SIM swap fraud", "QR code fraud", "Ponzi scheme"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! In SIM swap fraud, criminals get your number reissued on a new SIM to intercept OTPs. Report a sudden 'No Service' status to your telecom operator immediately."
    },
    {
      q: "You get an SMS about a 'SIM swap/replacement request' that you never initiated. What should you do immediately?",
      opts: ["Ignore it, it's probably spam", "Contact your telecom operator immediately to block/verify the request, and alert your bank", "Wait for the new SIM to arrive to check it", "Reply to the SMS asking who requested it"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! An unrequested SIM swap message needs urgent action — contact your telecom provider right away and alert your bank, since OTPs are the target."
    },
    {
      q: "A scammer first collects your personal details via a phishing scam, then requests a duplicate SIM from your telecom provider. What is the purpose of this second step?",
      opts: ["To sell your number", "To intercept OTPs sent to your registered mobile number and take over your bank accounts", "To spam your contacts", "To improve their own network coverage"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! SIM swap is usually the final step after identity theft — it lets the scammer receive your OTPs directly and drain your accounts."
    },
    {
      q: "Your phone suddenly shows 'No Service' with no explanation, and shortly after, a large unauthorized transaction happens on your bank account. What likely occurred?",
      opts: ["A random network outage", "A SIM swap attack — your number was moved to the scammer's SIM to receive the OTP", "A software bug in your banking app", "Nothing related, just a coincidence"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! Losing signal unexpectedly, followed by unauthorized transactions, is the classic sign of an in-progress SIM swap attack."
    },
    {
      q: "What telecom-side precaution can help reduce the risk of SIM swap fraud succeeding against you?",
      opts: ["Sharing your Aadhaar number publicly", "Setting a strong PIN/password with your telecom provider for any SIM-related requests, and reporting lost SIMs immediately", "Keeping your old SIM inactive but registered", "Using the same PIN as your bank account"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! A telecom-account PIN/password adds a layer of protection against unauthorized SIM swap requests being processed."
    },
    {
      q: "A caller pretending to be from your telecom operator offers a 'free SIM upgrade' and asks for your Aadhaar-linked mobile details. What's the risk?",
      opts: ["No risk, upgrades are common", "This information can be used to fraudulently request a SIM swap in your name", "It only affects call quality", "It's risk-free if he knows your name"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! Sharing identity/SIM details with an unsolicited caller gives them exactly what's needed to request a fraudulent SIM swap."
    },
    {
      q: "What is the correct official step to take with your telecom operator if you suspect a SIM swap attempt against you?",
      opts: ["Wait it out and see if service returns on its own", "Visit or call your telecom operator's official store/helpline immediately to verify and block any pending SIM change request", "Post about it on social media first", "Buy a new SIM from any local shop"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! Only your telecom operator's official channels can verify, pause, or block a SIM change request in progress."
    },
    {
      q: "Should you ignore an SMS saying 'Your SIM swap/replacement request is being processed' if you never requested one?",
      opts: ["Yes, it's probably a mistake", "No — act on it immediately by contacting your telecom operator, since this could be a live fraud attempt", "Yes, wait for the new SIM before doing anything", "Only respond if it happens twice"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! Any such message you didn't initiate is a serious warning sign — treat it as an active fraud attempt and act immediately."
    },
    {
      q: "A scammer already has your PAN and Aadhaar details from an earlier phishing scam, and now wants your registered mobile number for 'further verification'. Why is this combination especially dangerous?",
      opts: ["It isn't dangerous by itself", "Together, these details can be used to convincingly request a SIM swap and then intercept your OTPs", "It only affects your Aadhaar card", "PAN and Aadhaar are unrelated to mobile numbers"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! Identity documents plus your mobile number are exactly what's needed to impersonate you for a SIM swap request — never share this combination with unverified callers."
    },
    {
      q: "What is a very early warning sign that a SIM swap attack may be in progress against you?",
      opts: ["Your phone getting slightly warm", "Sudden, unexplained loss of network signal or 'No Service' status for an extended period", "Receiving too many OTPs at once", "Your battery draining faster than usual"],
      ans: 1, topic: 'fraud6',
      exp: "✅ Correct! An unexplained, prolonged loss of signal — especially if you didn't change SIMs yourself — is the earliest sign something may be wrong."
    },
  ],
  fraud7: [ // Predatory instant loan app fraud
    {
      q: "An app promises an instant loan with no paperwork, but after disbursing a small amount it demands a huge 'processing fee' and threatens to leak your contacts. What is this?",
      opts: ["A legitimate NBFC offer", "A predatory instant loan app scam", "A government loan scheme", "A credit score booster"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Unregulated instant-loan apps often use harassment and data misuse as extortion tactics. Only use RBI-registered lenders."
    },
    {
      q: "A loan app asks for full access to your phone contacts and photo gallery before even approving your loan. Is this normal for RBI-registered lenders?",
      opts: ["Yes, all lending apps need this", "No — RBI-registered lenders never need this level of access to approve a loan", "Only for very large loan amounts", "Only for first-time borrowers"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Excessive permission requests (contacts, gallery, SMS) are a major red flag used later for harassment if repayment is delayed."
    },
    {
      q: "After taking a small loan, the app starts sending abusive/threatening messages to your contacts claiming you 'defaulted'. What should you do?",
      opts: ["Pay whatever they demand immediately to stop it", "Document everything and report it to the cyber crime helpline (1930) and cybercrime.gov.in", "Ignore it and hope it stops", "Delete the app and forget about it"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Harassment through your contacts is illegal. Preserve evidence and report it — don't pay extortion demands, which often continue regardless."
    },
    {
      q: "How can you check whether a lending app is legitimate before installing it?",
      opts: ["Check its star rating on the app store only", "Verify it's linked to an RBI-registered NBFC/bank, listed on the RBI's official list", "Trust it if it has millions of downloads", "Trust it if a friend used it once"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Always verify the lender is an RBI-registered NBFC or bank — this is listed on the RBI's official website, not just judged by app store popularity."
    },
    {
      q: "A loan app charges an interest rate far higher than any bank or NBFC and hides the total repayment cost until after you accept. What should you do?",
      opts: ["Accept it since you need the money urgently", "Avoid it — hidden, excessive costs are a hallmark of predatory lending", "Negotiate the rate directly with the app", "Accept but pay late deliberately"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Extremely high, hidden interest rates are designed to trap borrowers in unpayable debt — a key predatory-lending red flag."
    },
    {
      q: "You're pressured to repay a loan within 7 days with a steep penalty for even a single day's delay. Is this normal lending practice?",
      opts: ["Yes, all loans work this way", "No — this kind of extreme, short-tenure pressure is typical of predatory/unregistered lending apps", "Only for loans under ₹5000", "Yes, if you agreed to the terms"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Legitimate lenders offer reasonable, clearly disclosed repayment terms — extreme short deadlines with harsh penalties are a predatory tactic."
    },
    {
      q: "What kind of app permission requests should make you suspicious of a lending app?",
      opts: ["Requesting your PAN card only", "Requesting access to your contacts, SMS, gallery, and call logs", "Requesting your employment details", "Requesting your email address"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Access to contacts, SMS, and photos has no genuine purpose for a loan and is typically misused later for harassment and blackmail."
    },
    {
      q: "Someone in financial difficulty is considering an instant loan app but isn't sure about its RBI status. What should they check first?",
      opts: ["Just proceed since they need the money now", "Look up the RBI's list of registered NBFCs, or check with the RBI's official Sachet portal, before installing", "Ask the app's own customer support", "Check only the number of downloads"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! RBI's Sachet portal and official NBFC list let you verify a lender's legitimacy independently, rather than relying on the app's own claims."
    },
    {
      q: "An instant loan app threatened you but disappeared before you paid anything extra. What should your reporting steps be?",
      opts: ["Nothing, since you didn't lose money", "Still report it to 1930 and cybercrime.gov.in — this helps authorities track and shut down such apps", "Wait to see if they come back", "Only report if you actually paid"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Reporting predatory apps even without financial loss helps authorities build cases against them and protect future victims."
    },
    {
      q: "What is the safest way to get a genuine personal loan quickly in India?",
      opts: ["Any app promising 'instant approval, no documents'", "Through your own bank, an RBI-registered NBFC, or a verified digital lending platform listed with RBI", "Any app with a high rating on the app store", "Whichever app a friend forwarded on WhatsApp"],
      ans: 1, topic: 'fraud7',
      exp: "✅ Correct! Sticking to your bank or an RBI-registered NBFC avoids the hidden costs and harassment risks of unregistered instant-loan apps."
    },
  ],
  fraud8: [ // Ponzi / crypto investment scams
    {
      q: "A 'friend' shows you huge, guaranteed monthly returns from a new crypto investment app and urges you to invest quickly before it 'closes'. What should you suspect?",
      opts: ["A safe, high-return investment", "A Ponzi/crypto investment scam", "A government savings scheme", "A stock market IPO"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! Guaranteed high returns and urgency to invest fast are classic red flags of a Ponzi or fake crypto investment scam."
    },
    {
      q: "An investment WhatsApp/Telegram group promises '2% daily returns, guaranteed'. Is this realistic for any legitimate investment?",
      opts: ["Yes, crypto can grow that fast", "No — no legitimate investment can guarantee such consistent daily returns; this is a hallmark of a scam", "Only if it's backed by a bank", "Yes, for the first month only"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! '2% daily' compounds to absurd, impossible annual returns — genuine markets simply don't work this way. This is a scam pattern."
    },
    {
      q: "A scheme pays you more for recruiting new investors than for any actual trading or business profit. What type of scheme is this?",
      opts: ["A mutual fund", "A Ponzi/pyramid scheme — it relies on new investors' money to pay earlier ones, not real profit", "A government bond", "A stock market index fund"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! When returns depend on recruiting others rather than genuine business activity, it's a Ponzi/pyramid structure that eventually collapses."
    },
    {
      q: "An app shows your investment 'growing' every day on screen, but every time you try to withdraw, it says 'pending' or asks for another deposit first. What's happening?",
      opts: ["A normal processing delay", "A classic scam tactic — the displayed growth is fake, and further deposits are demanded to keep you trapped", "A technical glitch that will resolve itself", "Your bank is blocking the withdrawal"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! Fake on-screen 'growth' combined with blocked withdrawals and demands for more money is a well-known crypto/investment scam pattern."
    },
    {
      q: "A 'financial advisor' contacts you unsolicited on social media promising insider crypto tips for guaranteed profit. How much should you trust this?",
      opts: ["Fully — insider tips are valuable", "Very little — unsolicited 'guaranteed profit' tips from strangers online are a common scam approach", "Trust it if they have many followers", "Trust it if they share screenshots of profits"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! No genuine financial advisor guarantees profits or reaches out unsolicited with 'insider tips' — this is a common scam recruitment method."
    },
    {
      q: "What is a major warning sign that distinguishes a Ponzi scheme from a genuine investment?",
      opts: ["It has a professional-looking app or website", "It promises guaranteed, unusually high returns with little or no risk explained", "It's recommended by a friend", "It accepts payments via UPI"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! All genuine investments carry risk and no guaranteed fixed high return — any scheme claiming otherwise should be treated as a red flag."
    },
    {
      q: "You're asked to pay a 'tax' or 'unlocking fee' before you're allowed to withdraw your investment profits. Is this a legitimate requirement?",
      opts: ["Yes, taxes must be paid before any withdrawal", "No — legitimate platforms deduct applicable taxes automatically; being asked to pay extra just to 'unlock' withdrawal is a scam tactic", "Only for foreign investments", "Only if the amount is very large"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! Genuine platforms never require you to pay an extra fee just to access your own money — this demand is designed to extract more money from victims."
    },
    {
      q: "A scheme claims SEBI or RBI approval, but you can't find it listed on either regulator's official website. What should you do?",
      opts: ["Trust the scheme's own claim", "Do not invest — always verify registration/approval directly on the regulator's official website, not just the scheme's claim", "Invest a small amount to test it", "Ask other investors if it's genuine"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! Regulatory approval claims must be independently verified on SEBI/RBI's own official websites — never take a scheme's word for it."
    },
    {
      q: "Why do Ponzi schemes eventually collapse, leaving most investors with losses?",
      opts: ["Because of unrelated market crashes", "Because payouts depend entirely on new investors' money, which eventually can't keep up with what's owed to earlier investors", "Because of government intervention only", "Because the app runs out of storage space"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! Since there's no real underlying profit, a Ponzi scheme needs an ever-growing stream of new money — it inevitably runs out and collapses."
    },
    {
      q: "What should you always verify before putting money into any investment scheme?",
      opts: ["Whether the app looks modern and trustworthy", "Its regulatory registration (SEBI/RBI), the realism of promised returns, and independent reviews outside the scheme's own materials", "Whether a friend has already invested", "Whether it accepts UPI payments"],
      ans: 1, topic: 'fraud8',
      exp: "✅ Correct! Independent verification of registration and realistic return expectations are essential before investing anywhere, especially schemes reached through social media or referrals."
    },
  ],
  general: [ // General cyber-crime reporting (2 used per set)
    {
      q: "You lost money to a cyber fraud. What is the FIRST thing you should do?",
      opts: ["Post about it on social media", "Call 1930 (Cyber Crime Helpline) immediately", "Wait and see if money comes back", "Change your UPI PIN"],
      ans: 1, topic: null,
      exp: "✅ Correct! Call 1930 immediately — it's the National Cyber Crime Helpline. Early reporting maximizes the chance of fund recovery."
    },
    {
      q: "Where can you file an official online complaint about a cyber financial fraud in India, besides calling 1930?",
      opts: ["cybercrime.gov.in", "Any random forwarded WhatsApp link", "A private recovery agent's website", "Your fraud's own customer care number"],
      ans: 0, topic: null,
      exp: "✅ Correct! cybercrime.gov.in is the official Government of India portal for reporting cyber crimes, alongside the 1930 helpline."
    },
    {
      q: "Within what time window should you report a financial cyber fraud for the best chance of getting funds frozen or recovered?",
      opts: ["Within a few months", "As soon as possible — ideally within the first few hours (the 'golden hour')", "Only after a week, to be sure it's really fraud", "It doesn't matter when you report"],
      ans: 1, topic: null,
      exp: "✅ Correct! The first few hours ('golden hour') are critical — banks can often freeze funds still sitting in the fraudster's account if reported quickly."
    },
    {
      q: "What information should you keep ready before calling the 1930 cyber crime helpline?",
      opts: ["Nothing, they don't need any details", "Transaction details, screenshots, the fraudster's UPI ID/number, and your bank account details", "Only your Aadhaar number", "Only the date of the fraud"],
      ans: 1, topic: null,
      exp: "✅ Correct! Having transaction IDs, screenshots, and the fraudster's details ready speeds up the complaint and improves recovery chances."
    },
    {
      q: "Is the National Cyber Crime helpline 1930 available 24x7?",
      opts: ["No, only on weekdays", "Yes, it operates round the clock", "Only during banking hours", "Only for amounts above ₹10,000"],
      ans: 1, topic: null,
      exp: "✅ Correct! 1930 is a 24x7 helpline specifically for reporting financial cyber fraud as quickly as possible."
    },
    {
      q: "If your bank account is compromised, besides calling 1930, what should you immediately do with your bank?",
      opts: ["Nothing, 1930 handles everything", "Call your bank to block/freeze the account or card and report the unauthorized transaction", "Close the account permanently", "Wait for the bank to notice on its own"],
      ans: 1, topic: null,
      exp: "✅ Correct! Directly alerting your bank to block the account/card alongside reporting to 1930 gives the best chance of stopping further loss."
    },
    {
      q: "Someone found online offers to recover your lost fraud money for an upfront 'fee'. What should you do?",
      opts: ["Pay the fee since they claim to be experts", "Avoid it — this is very often itself a secondary scam targeting fraud victims", "Pay only half upfront", "Trust it if they have a professional-looking website"],
      ans: 1, topic: null,
      exp: "✅ Correct! 'Recovery agents' demanding upfront fees are frequently scammers targeting people who've already been defrauded once."
    },
    {
      q: "Where can you specifically report cyber crimes involving harassment of women and children in India?",
      opts: ["There's no separate reporting option", "The dedicated section on cybercrime.gov.in for crimes against women/children, or 1930", "Only through a local newspaper", "Only via social media reporting tools"],
      ans: 1, topic: null,
      exp: "✅ Correct! cybercrime.gov.in has a dedicated reporting category for crimes against women and children, in addition to general cyber fraud reporting."
    },
    {
      q: "What evidence should you preserve if you've been a victim of online fraud?",
      opts: ["Nothing is needed once you've called the helpline", "Screenshots of chats/messages, transaction IDs, the fraudster's contact details, and any call recordings", "Only the amount lost", "Only your bank statement from that month"],
      ans: 1, topic: null,
      exp: "✅ Correct! Detailed evidence — screenshots, IDs, contact details — strengthens your complaint and helps investigators trace the fraud."
    },
    {
      q: "True or false: You must visit a police station in person before you can file any cyber crime complaint in India.",
      opts: ["True", "False — you can file online via cybercrime.gov.in or call 1930 first, without visiting in person", "True, only for amounts over ₹1 lakh", "True, unless it happened on a weekend"],
      ans: 1, topic: null,
      exp: "✅ Correct! Cyber crime complaints can be filed online through cybercrime.gov.in or by calling 1930, without needing to visit a police station first."
    },
    {
      q: "What does the 1930 helpline specifically help try to do when you report quickly?",
      opts: ["Cancel your bank account", "Coordinate with banks/wallets to freeze the fraudulent transaction's funds before they're withdrawn", "Send you a replacement debit card", "Block your mobile number"],
      ans: 1, topic: null,
      exp: "✅ Correct! 1930 works with banks and payment systems to try to freeze the money in the fraudster's account before it can be withdrawn."
    },
    {
      q: "If money was deducted through fraud a few days ago, is it still worth reporting now?",
      opts: ["No, it's too late to matter", "Yes — always report it; even delayed reports help investigations and may occasionally still lead to recovery", "Only if it happened today", "Only for amounts above ₹50,000"],
      ans: 1, topic: null,
      exp: "✅ Correct! While speed matters most, reporting is always worthwhile — it helps track patterns and can still occasionally lead to recovery or prevent further fraud on others."
    },
    {
      q: "What's a good habit to build so you can report a fraud quickly if it ever happens to you?",
      opts: ["Nothing specific is needed", "Save the 1930 helpline number and cybercrime.gov.in in your phone/bookmarks in advance", "Memorize your bank's entire policy manual", "Keep your UPI PIN written down somewhere accessible"],
      ans: 1, topic: null,
      exp: "✅ Correct! Having the helpline number and portal saved in advance means you can act within minutes instead of losing time searching for them during a stressful moment."
    },
    {
      q: "What is the ideal first step immediately after realizing you clicked a suspicious phishing link, even if no money has been lost yet?",
      opts: ["Ignore it since nothing happened yet", "Change your passwords/PINs for any account you may have exposed, and monitor your accounts closely", "Restart your phone and forget about it", "Wait to see if money disappears before acting"],
      ans: 1, topic: null,
      exp: "✅ Correct! Acting immediately — changing credentials and monitoring accounts — can prevent a phishing click from turning into actual financial loss."
    },
    {
      q: "If you suspect your UPI app itself may be compromised, what's a good precaution alongside reporting to 1930?",
      opts: ["Keep using it as normal", "Temporarily disable/uninstall the app and contact your bank to review recent transactions", "Only change your phone's lock screen password", "Nothing else is needed"],
      ans: 1, topic: null,
      exp: "✅ Correct! Disabling the potentially compromised app and having your bank review recent activity limits further damage while you report the incident."
    },
    {
      q: "Should you delete screenshots and messages related to a scam after you've reported it?",
      opts: ["Yes, to clear space on your phone", "No — keep all evidence safely until the case is resolved, as investigators may need it again", "Yes, once you've told the helpline what happened", "Only delete messages, keep screenshots"],
      ans: 1, topic: null,
      exp: "✅ Correct! Investigations can take time and may require the same evidence again — never delete scam-related evidence until the matter is fully resolved."
    },
    {
      q: "Besides the cyber crime helpline, who else can genuinely help you understand your rights and next steps after being defrauded?",
      opts: ["Only social media influencers", "Your bank's official grievance/nodal officer, and consumer protection channels like the RBI's Banking Ombudsman", "Any 'recovery expert' found via a Google ad", "No one else can help"],
      ans: 1, topic: null,
      exp: "✅ Correct! Your bank's grievance officer and the RBI's Banking Ombudsman are official channels that can genuinely help resolve disputes and clarify your rights."
    },
    {
      q: "What is a reliable way to verify that cybercrime.gov.in is the genuine government portal before entering any details?",
      opts: ["Search for it and click any top result", "Type the URL directly yourself (cybercrime.gov.in) rather than clicking a link sent to you", "Trust any site that mentions '1930' in its name", "Trust it if it looks official"],
      ans: 1, topic: null,
      exp: "✅ Correct! Always type official government portal addresses directly rather than clicking links from messages, which could lead to a fake look-alike site."
    },
    {
      q: "After successfully reporting a fraud, what's a sensible next step for your own protection going forward?",
      opts: ["Nothing further is needed", "Review and tighten your account security — update passwords, enable transaction alerts, and stay alert to similar scams", "Stop using digital payments altogether", "Share your experience only with the scammer to warn them off"],
      ans: 1, topic: null,
      exp: "✅ Correct! Strengthening your account security and staying alert afterward helps prevent repeat incidents, without needing to give up digital payments entirely."
    },
    {
      q: "Which government ministry/body oversees CERT-In, which handles broader cyber security incidents in India beyond individual financial fraud?",
      opts: ["Ministry of Electronics and Information Technology (MeitY)", "Ministry of Finance", "Reserve Bank of India only", "Election Commission of India"],
      ans: 0, topic: null,
      exp: "✅ Correct! CERT-In (Indian Computer Emergency Response Team) operates under MeitY and handles cyber security incidents at a national level, alongside 1930/cybercrime.gov.in for individual fraud complaints."
    },
  ],
};

// Assembles the 10 fixed sets (8 fraud topics once each + 2 general
// questions per set, in the same layout as the site's original quiz) from
// the pools above. This is the entire question bank — nothing here is
// generated, fetched, or produced by any AI/API call.
const quizQuestionSetsEn = Array.from({ length: 10 }, (_, i) => [
  enTopics.fraud3[i],
  enTopics.fraud2[i],
  enTopics.fraud4[i],
  enTopics.fraud1[i],
  enTopics.general[i * 2],
  enTopics.fraud5[i],
  enTopics.fraud6[i],
  enTopics.fraud7[i],
  enTopics.fraud8[i],
  enTopics.general[i * 2 + 1],
]);

const fallbackQuestionsData = {
  en: quizQuestionSetsEn[0],
  hi: [
    {
      q: "एक अनजान व्यक्ति WhatsApp पर QR कोड भेजता है और कहता है 'पैसे पाने के लिए स्कैन करें'। आप क्या करेंगे?",
      opts: ["तुरंत स्कैन करें", "दोबारा भेजने के लिए कहें", "कभी स्कैन न करें — UPI में QR स्कैन का मतलब हमेशा भुगतान करना है", "पहले बैंक को कॉल करें"],
      ans: 2,
      topic: 'fraud3',
      exp: "✅ सही! UPI में QR कोड स्कैन करने का मतलब हमेशा आपकी तरफ से भुगतान होता है। QR स्कैन से कभी पैसे नहीं मिलते।"
    },
    {
      q: "'बैंक अधिकारी' कॉल करके कहते हैं कि KYC समाप्त हो गई है और OTP मांगते हैं। आप क्या करेंगे?",
      opts: ["खाता बंद होने से बचाने के लिए OTP दें", "बाद में कॉल करने के लिए कहें", "फोन काटें — बैंक कभी OTP नहीं मांगते", "आधा OTP साझा करें"],
      ans: 2,
      topic: 'fraud2',
      exp: "✅ सही! कोई भी बैंक, सरकारी संस्था या ऐप कभी OTP नहीं मांगेगा। यह विशिंग (वॉयस फिशिंग) घोटाला है।"
    },
    {
      q: "आपने OLX पर सामान बेचा। 'खरीदार' ₹1 भेजता है और कहता है 'पूरा पेमेंट पाने के लिए UPI PIN डालें'। क्या होगा?",
      opts: ["आपको पूरी राशि मिलेगी", "कुछ नहीं होगा", "आप जालसाज को पैसे भेज देंगे", "आपका खाता सत्यापित हो जाएगा"],
      ans: 2,
      topic: 'fraud4',
      exp: "✅ सही! UPI PIN डालना हमेशा आपकी तरफ से भुगतान अधिकृत करता है, कभी प्राप्त नहीं। यह क्लासिक OLX QR/PIN घोटाला है।"
    },
    {
      q: "आपका बैंक आपसे संपर्क करने का वैध तरीका कौन सा है?",
      opts: ["WhatsApp पर KYC अपडेट लिंक", "कॉल पर कार्ड नंबर और CVV मांगना", "बैंक के आधिकारिक डोमेन से बिना अटैचमेंट ईमेल", "अज्ञात नंबर पर कॉल करने वाला SMS"],
      ans: 2,
      topic: 'fraud1',
      exp: "✅ सही! वैध बैंक ईमेल आधिकारिक डोमेन से आते हैं और संवेदनशील जानकारी कभी नहीं मांगते।"
    },
    {
      q: "साइबर धोखाधड़ी में पैसे गए। सबसे पहले क्या करेंगे?",
      opts: ["सोशल मीडिया पर पोस्ट करें", "तुरंत 1930 (साइबर क्राइम हेल्पलाइन) पर कॉल करें", "प्रतीक्षा करें कि पैसे वापस आएंगे", "UPI PIN बदलें"],
      ans: 1,
      topic: null,
      exp: "✅ सही! तुरंत 1930 पर कॉल करें — यह राष्ट्रीय साइबर अपराध हेल्पलाइन है। जल्दी रिपोर्ट से फंड वापसी की संभावना बढ़ती है।"
    },
    {
      q: "कोई 'टेक सपोर्ट' वाला कॉल करके आपके बैंक ऐप की 'समस्या ठीक करने' के लिए AnyDesk या TeamViewer इंस्टॉल करने को कहता है। आप क्या करेंगे?",
      opts: ["इंस्टॉल करके उन्हें स्क्रीन कंट्रोल दें", "सिर्फ स्क्रीन शेयर करें, कंट्रोल नहीं", "इनकार करें — अनजान कॉलर को कभी रिमोट एक्सेस न दें", "बैंकिंग ऐप बंद करके इंस्टॉल करें"],
      ans: 2,
      topic: 'fraud5',
      exp: "✅ सही! रिमोट-एक्सेस ऐप्स से जालसाज आपके OTP और PIN लाइव देख सकते हैं और खाता खाली कर सकते हैं। अनजान कॉलर के लिए कभी इंस्टॉल न करें।"
    },
    {
      q: "आपके फोन का नेटवर्क अचानक घंटों गायब हो जाता है और बाद में पता चलता है कि आपका सिम किसी और को जारी हो गया। यह कौन सी धोखाधड़ी है?",
      opts: ["फिशिंग", "सिम स्वैप फ्रॉड", "QR कोड फ्रॉड", "पोंजी स्कीम"],
      ans: 1,
      topic: 'fraud6',
      exp: "✅ सही! सिम स्वैप फ्रॉड में जालसाज OTP रोकने के लिए आपका नंबर नए सिम पर जारी करवा लेते हैं। 'No Service' अचानक दिखे तो तुरंत टेलीकॉम ऑपरेटर को बताएं।"
    },
    {
      q: "एक ऐप बिना कागज़ी काम के तुरंत लोन का वादा करता है, थोड़ी राशि देने के बाद बड़ी 'प्रोसेसिंग फीस' मांगता है और आपके कॉन्टैक्ट्स लीक करने की धमकी देता है। यह क्या है?",
      opts: ["वैध NBFC ऑफर", "प्रिडेटरी इंस्टेंट लोन ऐप फ्रॉड", "सरकारी लोन योजना", "क्रेडिट स्कोर बूस्टर"],
      ans: 1,
      topic: 'fraud7',
      exp: "✅ सही! अनियंत्रित इंस्टेंट-लोन ऐप्स अक्सर उत्पीड़न और डेटा दुरुपयोग को जबरन वसूली के लिए इस्तेमाल करते हैं। केवल RBI-पंजीकृत लेंडर का उपयोग करें।"
    },
    {
      q: "एक 'दोस्त' आपको नए क्रिप्टो इन्वेस्टमेंट ऐप से बड़े, गारंटीड मासिक रिटर्न दिखाकर 'जल्द बंद होने से पहले' निवेश करने को कहता है। आपको क्या शक करना चाहिए?",
      opts: ["एक सुरक्षित, उच्च-रिटर्न निवेश", "पोंजी/क्रिप्टो निवेश घोटाला", "सरकारी बचत योजना", "स्टॉक मार्केट IPO"],
      ans: 1,
      topic: 'fraud8',
      exp: "✅ सही! गारंटीड उच्च रिटर्न और जल्दी निवेश करने का दबाव पोंजी या नकली क्रिप्टो निवेश घोटाले के क्लासिक संकेत हैं।"
    },
    {
      q: "1930 पर कॉल करने के अलावा, भारत में साइबर वित्तीय धोखाधड़ी की आधिकारिक ऑनलाइन शिकायत कहाँ दर्ज कर सकते हैं?",
      opts: ["cybercrime.gov.in", "किसी भी फॉरवर्ड किए गए WhatsApp लिंक पर", "किसी निजी रिकवरी एजेंट की वेबसाइट पर", "फ्रॉड करने वाले के अपने कस्टमर केयर नंबर पर"],
      ans: 0,
      topic: null,
      exp: "✅ सही! cybercrime.gov.in भारत सरकार का आधिकारिक पोर्टल है, जो 1930 हेल्पलाइन के साथ साइबर अपराध रिपोर्ट करने के लिए है।"
    }
  ],
  te: [
    {
      q: "ఒక అపరిచిత వ్యక్తి WhatsAppలో QR కోడ్ పంపి '₹5000 పొందడానికి స్కాన్ చేయండి' అని చెప్పాడు. మీరు ఏమి చేస్తారు?",
      opts: ["వెంటనే స్కాన్ చేయండి", "మళ్ళీ పంపమని అడగండి", "ఎప్పుడూ స్కాన్ చేయవద్దు — UPIలో QR స్కాన్ చేయడం అంటే మీరు చెల్లిస్తున్నారు", "మొదట మీ బ్యాంక్‌కు కాల్ చేయండి"],
      ans: 2,
      topic: 'fraud3',
      exp: "✅ సరైనది! UPIలో QR కోడ్ స్కాన్ చేయడం ఎల్లప్పుడూ మీ నుండి చెల్లింపును ప్రారంభిస్తుంది. QR కోడ్ స్కాన్ చేయడం ద్వారా మీరు ఎప్పుడూ డబ్బు పొందలేరు."
    },
    {
      q: "ఒక 'బ్యాంక్ అధికారి' కాల్ చేసి మీ KYC గడువు ముగిసిందని, దాన్ని 'అప్‌డేట్' చేయడానికి OTP అడుగుతాడు. మీరు ఏమి చేస్తారు?",
      opts: ["ఖాతా బ్లాక్ కాకుండా ఉండటానికి త్వరగా OTP ఇవ్వండి", "తర్వాత మళ్ళీ కాల్ చేయమని చెప్పండి", "ఫోన్ పెట్టండి — బ్యాంకులు ఎప్పుడూ OTP అడగవు", "OTPలో సగం మాత్రమే ఇవ్వండి"],
      ans: 2,
      topic: 'fraud2',
      exp: "✅ సరైనది! ఏ బ్యాంక్, ప్రభుత్వ సంస్థ లేదా యాప్ కూడా మీ OTPని ఎప్పుడూ అడగదు. ఇది విశింగ్ (వాయిస్ ఫిషింగ్) మోసం."
    },
    {
      q: "మీరు OLXలో ఏదైనా విక్రయించారు. 'కొనుగోలుదారు' ₹1 పంపి, 'పూర్తి చెల్లింపు సేకరించడానికి' మీ UPI PIN నమోదు చేయమని అడుగుతాడు. ఏమి జరుగుతుంది?",
      opts: ["మీరు పూర్తి మొత్తం పొందుతారు", "ఏమీ జరగదు", "మీరు మోసగాడికి డబ్బు పంపుతారు", "మీ ఖాతా ధృవీకరించబడుతుంది"],
      ans: 2,
      topic: 'fraud4',
      exp: "✅ సరైనది! మీ UPI PIN నమోదు చేయడం ఎల్లప్పుడూ అవుట్‌గోయింగ్ చెల్లింపును అధికారం చేస్తుంది, ఇన్‌కమింగ్ చెల్లింపును కాదు. ఇది క్లాసిక్ OLX QR/PIN మోసం."
    },
    {
      q: "మీ బ్యాంక్ మిమ్మల్ని సంప్రదించడానికి చట్టబద్ధమైన మార్గం ఏది?",
      opts: ["లింక్ ద్వారా KYC అప్‌డేట్ చేయమని WhatsApp సందేశం", "మీ కార్డ్ నంబర్ మరియు CVV అడిగే కాల్", "అటాచ్‌మెంట్‌లు లేని బ్యాంక్ అధికారిక డొమైన్ నుండి ఇమెయిల్", "తెలియని నంబర్‌కు కాల్ చేయమని SMS"],
      ans: 2,
      topic: 'fraud1',
      exp: "✅ సరైనది! చట్టబద్ధమైన బ్యాంక్ ఇమెయిల్‌లు అధికారిక డొమైన్‌ల నుండి వస్తాయి మరియు సున్నితమైన సమాచారాన్ని ఎప్పుడూ అడగవు."
    },
    {
      q: "మీరు సైబర్ మోసంలో డబ్బు కోల్పోయారు. మీరు చేయవలసిన మొదటి పని ఏమిటి?",
      opts: ["దాని గురించి సోషల్ మీడియాలో పోస్ట్ చేయండి", "వెంటనే 1930 (సైబర్ క్రైమ్ హెల్ప్‌లైన్)కి కాల్ చేయండి", "డబ్బు తిరిగి వస్తుందో లేదో వేచి ఉండండి", "మీ UPI PIN మార్చండి"],
      ans: 1,
      topic: null,
      exp: "✅ సరైనది! వెంటనే 1930కి కాల్ చేయండి — ఇది జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్. ప్రారంభ రిపోర్టింగ్ నిధుల రికవరీ అవకాశాన్ని పెంచుతుంది."
    },
    {
      q: "'టెక్ సపోర్ట్' నుండి ఒకరు కాల్ చేసి మీ బ్యాంక్ యాప్ 'సమస్యను పరిష్కరించడానికి' AnyDesk లేదా TeamViewer ఇన్‌స్టాల్ చేయమని అడుగుతారు. మీరు ఏమి చేయాలి?",
      opts: ["ఇన్‌స్టాల్ చేసి స్క్రీన్ కంట్రోల్ ఇవ్వండి", "కంట్రోల్ కాదు, స్క్రీన్ మాత్రమే షేర్ చేయండి", "నిరాకరించండి — తెలియని కాలర్‌లకు ఎప్పుడూ రిమోట్ యాక్సెస్ ఇవ్వవద్దు", "బ్యాంకింగ్ యాప్ మూసి ఇన్‌స్టాల్ చేయండి"],
      ans: 2,
      topic: 'fraud5',
      exp: "✅ సరైనది! రిమోట్-యాక్సెస్ యాప్‌లతో మోసగాళ్ళు మీ OTP మరియు PIN లైవ్‌గా చూసి ఖాతా ఖాళీ చేయగలరు. తెలియని కాలర్ల కోసం వీటిని ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు."
    },
    {
      q: "మీ ఫోన్ నెట్‌వర్క్ అకస్మాత్తుగా గంటల తరబడి పోతుంది మరియు తర్వాత మీ సిమ్ మరొకరికి రీఇష్యూ అయినట్లు తెలుస్తుంది. ఇది ఏ మోసం?",
      opts: ["ఫిషింగ్", "సిమ్ స్వాప్ మోసం", "QR కోడ్ మోసం", "పాంజీ స్కీమ్"],
      ans: 1,
      topic: 'fraud6',
      exp: "✅ సరైనది! సిమ్ స్వాప్ మోసంలో మోసగాళ్ళు OTPలను అడ్డగించడానికి మీ నంబర్‌ను కొత్త సిమ్‌పై రీఇష్యూ చేయిస్తారు. అకస్మాత్తుగా 'No Service' కనిపిస్తే వెంటనే టెలికాం ఆపరేటర్‌కు తెలియజేయండి."
    },
    {
      q: "ఒక యాప్ ఎలాంటి పేపర్‌వర్క్ లేకుండా తక్షణ లోన్ వాగ్దానం చేస్తుంది, కొద్దిపాటి మొత్తం ఇచ్చాక భారీ 'ప్రాసెసింగ్ ఫీజు' అడిగి మీ కాంటాక్ట్‌లను లీక్ చేస్తానని బెదిరిస్తుంది. ఇది ఏమిటి?",
      opts: ["చట్టబద్ధమైన NBFC ఆఫర్", "ప్రిడేటరీ ఇన్‌స్టంట్ లోన్ యాప్ మోసం", "ప్రభుత్వ లోన్ పథకం", "క్రెడిట్ స్కోర్ బూస్టర్"],
      ans: 1,
      topic: 'fraud7',
      exp: "✅ సరైనది! నియంత్రణ లేని ఇన్‌స్టంట్-లోన్ యాప్‌లు తరచుగా వేధింపులు మరియు డేటా దుర్వినియోగాన్ని బెదిరింపు సాధనాలుగా వాడతాయి. RBI-నమోదిత లెండర్లను మాత్రమే వాడండి."
    },
    {
      q: "ఒక 'స్నేహితుడు' కొత్త క్రిప్టో ఇన్వెస్ట్‌మెంట్ యాప్ నుండి భారీ, గ్యారంటీడ్ నెలవారీ రిటర్న్‌లు చూపించి, అది 'త్వరలో మూసివేస్తారు' కాబట్టి తొందరగా పెట్టుబడి పెట్టమని ఒత్తిడి చేస్తాడు. మీరు దేనిని అనుమానించాలి?",
      opts: ["సురక్షితమైన, అధిక-రిటర్న్ పెట్టుబడి", "పాంజీ/క్రిప్టో ఇన్వెస్ట్‌మెంట్ మోసం", "ప్రభుత్వ పొదుపు పథకం", "స్టాక్ మార్కెట్ IPO"],
      ans: 1,
      topic: 'fraud8',
      exp: "✅ సరైనది! గ్యారంటీడ్ అధిక రిటర్న్‌లు మరియు తొందరగా పెట్టుబడి పెట్టమని ఒత్తిడి చేయడం పాంజీ లేదా నకిలీ క్రిప్టో మోసం యొక్క క్లాసిక్ సంకేతాలు."
    },
    {
      q: "1930కి కాల్ చేయడంతో పాటు, భారతదేశంలో సైబర్ ఆర్థిక మోసంపై అధికారిక ఆన్‌లైన్ ఫిర్యాదు ఎక్కడ దాఖలు చేయవచ్చు?",
      opts: ["cybercrime.gov.in", "ఏదైనా ఫార్వర్డ్ చేసిన WhatsApp లింక్‌లో", "ఒక ప్రైవేట్ రికవరీ ఏజెంట్ వెబ్‌సైట్‌లో", "మోసం చేసిన వ్యక్తి యొక్క సొంత కస్టమర్ కేర్ నంబర్‌లో"],
      ans: 0,
      topic: null,
      exp: "✅ సరైనది! cybercrime.gov.in అనేది భారత ప్రభుత్వం యొక్క అధికారిక పోర్టల్, ఇది 1930 హెల్ప్‌లైన్‌తో పాటు సైబర్ నేరాలను నివేదించడానికి ఉంది."
    }
  ]
};

let current = 0, score = 0, answered = false;
let attemptTopicResults = []; // {topic, correct} for the question(s) answered in the current pass — used to report a finished quiz attempt to the dashboard
let activeQuestions = []; // the question set actually in use for the current attempt (a shuffled copy of the current rotation set)

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Set rotation (per browser, per language) — no API/network involved ---
// English has 10 fixed sets of 10 (quizQuestionSetsEn, defined above). Each
// time the quiz starts, this reads which set index is "next" for this
// browser from localStorage, hands that set out, and advances the pointer
// (wrapping from set 9 back to set 0) — so a set only repeats once all 10
// have been shown once. Hindi/Telugu currently have one static set each,
// which is simply reshuffled on every attempt.
const QUIZ_SET_INDEX_KEY = 'cybersafe_quiz_set_index_en';

function getNextEnglishSetIndex() {
  let idx = 0;
  try {
    const stored = localStorage.getItem(QUIZ_SET_INDEX_KEY);
    idx = stored !== null ? parseInt(stored, 10) : 0;
    if (!Number.isInteger(idx) || idx < 0 || idx >= quizQuestionSetsEn.length) idx = 0;
  } catch (e) {
    idx = 0; // localStorage unavailable (private browsing etc.) — non-fatal
  }
  const nextIdx = (idx + 1) % quizQuestionSetsEn.length;
  try {
    localStorage.setItem(QUIZ_SET_INDEX_KEY, String(nextIdx));
  } catch (e) {
    // ignore — rotation just restarts from set 0 next time if storage fails
  }
  return idx;
}

// Returns the 10 questions for this attempt. No fetch, no AI, no API key —
// this is pure local data plus the rotation logic above.
function getQuizQuestions(lang) {
  if (lang === 'en') {
    return shuffleArray(quizQuestionSetsEn[getNextEnglishSetIndex()]);
  }
  const bank = fallbackQuestionsData[lang] || fallbackQuestionsData.en;
  return shuffleArray(bank);
}

// Starts a brand-new quiz attempt: resets score/progress and loads the
// next set in rotation for the current language.
function startNewQuizAttempt() {
  if (!document.getElementById('quiz-question')) return; // no quiz on this page (e.g. dashboard.html)
  current = 0;
  score = 0;
  answered = false;
  attemptTopicResults = [];

  const optsEl = document.getElementById('quiz-options');
  const fbEl = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('quiz-next');
  if (optsEl) optsEl.innerHTML = '';
  if (fbEl) fbEl.textContent = '';
  if (nextBtn) {
    nextBtn.style.display = 'none';
    nextBtn.textContent = nextQuestionLabel();
    nextBtn.onclick = nextQuestion; // restore normal "Next Question" behaviour (answer() swaps this to "Retake Quiz" only once the quiz is finished)
  }

  activeQuestions = getQuizQuestions(currentLang);
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  if (!activeQuestions.length) return; // still loading — startNewQuizAttempt() will call this again once ready
  const q = activeQuestions[current % activeQuestions.length];

  const qEl = document.getElementById('quiz-question');
  const fbEl = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('quiz-next');
  const scoreEl = document.getElementById('quiz-score');

  if (!qEl) return;

  qEl.textContent = `Q${current + 1}: ${q.q}`;
  if (fbEl) fbEl.textContent = '';
  if (nextBtn) nextBtn.style.display = 'none';

  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.onclick = () => answer(i);
    opts.appendChild(btn);
  });

  if (scoreEl) scoreEl.textContent = `${scoreLabel()}: ${score} / ${current}`;
}

function answer(i) {
  if (answered) return;
  answered = true;
  const q = activeQuestions[current % activeQuestions.length];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, idx) => {
    if (idx === q.ans) b.classList.add('correct');
    else if (idx === i && i !== q.ans) b.classList.add('wrong');
    b.style.cursor = 'default';
  });
  const feedback = document.getElementById('quiz-feedback');
  const isCorrect = i === q.ans;
  if (isCorrect) {
    score++;
    feedback.textContent = q.exp;
    feedback.style.color = 'var(--green)';
  } else {
    feedback.textContent = `❌ ${q.exp}`;
    feedback.style.color = 'var(--accent2)';
  }
  if (q.topic) {
    attemptTopicResults.push({ topic: q.topic, correct: isCorrect });
  }
  document.getElementById('quiz-score').textContent = `${scoreLabel()}: ${score} / ${current + 1}`;
  const nextBtn = document.getElementById('quiz-next');
  nextBtn.style.display = 'inline-block';
  if (current >= activeQuestions.length - 1) {
    // Last question answered — clear everything else away and show ONLY
    // the final score in the question area, plus a "Retake Quiz" button.
    submitQuizAttempt(score, activeQuestions.length);
    const qEl = document.getElementById('quiz-question');
    const optsEl = document.getElementById('quiz-options');
    if (qEl) qEl.textContent = `${quizCompletedLabel()} ${scoreLabel()}: ${score} / ${activeQuestions.length}`;
    if (optsEl) optsEl.innerHTML = ''; // no leftover question/options once finished
    feedback.textContent = '';
    nextBtn.textContent = retakeQuizLabel();
    nextBtn.onclick = () => {
      // Simulate loading fresh questions for 5 seconds before the next set appears.
      nextBtn.disabled = true;
      nextBtn.style.display = 'none';
      if (qEl) qEl.textContent = loadingLabel();
      setTimeout(() => {
        nextBtn.disabled = false;
        startNewQuizAttempt();
      }, 5000);
    };
  }
}

// Reports a completed quiz pass to the personalized dashboard. Silently
// no-ops for signed-out visitors (the quiz itself still works for everyone).
function submitQuizAttempt(finalScore, total) {
  if (!window.__cyberSafeUser) return;
  const weakTopics = [...new Set(
    attemptTopicResults.filter((r) => !r.correct).map((r) => r.topic)
  )];
  fetch('/api/dashboard/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ action: 'quiz_attempt', score: finalScore, total, lang: currentLang, weakTopics }),
  }).catch(() => { /* dashboard tracking is best-effort; never block the quiz UI */ });
}

function scoreLabel() {
  if (currentLang === 'hi') return 'स्कोर';
  if (currentLang === 'te') return 'స్కోర్';
  return 'Score';
}

function loadingLabel() {
  if (currentLang === 'hi') return 'नए प्रश्न लाए जा रहे हैं…';
  if (currentLang === 'te') return 'కొత్త ప్రశ్నలు లోడ్ అవుతున్నాయి…';
  return 'Loading new questions…';
}

function quizCompletedLabel() {
  if (currentLang === 'hi') return '🎉 क्विज़ पूर्ण हुआ!';
  if (currentLang === 'te') return '🎉 క్విజ్ పూర్తయింది!';
  return '🎉 Quiz Completed!';
}

function retakeQuizLabel() {
  if (currentLang === 'hi') return '🔄 क्विज़ फिर से लें';
  if (currentLang === 'te') return '🔄 క్విజ్ మళ్లీ చేయండి';
  return '🔄 Retake Quiz';
}

function nextQuestionLabel() {
  if (currentLang === 'hi') return 'अगला प्रश्न →';
  if (currentLang === 'te') return 'తదుపరి ప్రశ్న →';
  return 'Next Question →';
}

function nextQuestion() {
  current++;
  if (current >= activeQuestions.length) { current = 0; score = 0; }
  loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  startNewQuizAttempt();
});
