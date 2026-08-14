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
    footer_title: "డిజిటల్ చెల్లింపులు & సైబర్ మోస అవగాహన",
    footer_sub: "మూలాలు: NPCI, RBI, ఎలక్ట్రానిక్స్ & IT మంత్రిత్వ శాఖ (MeitY), CERT-In, Cybercrime.gov.in\nవిద్యా ప్రయోజనాల కోసం మాత్రమే. అధికారిక ప్రభుత్వ మూలాల నుండి సమాచారాన్ని ఎల్లప్పుడూ ధృవీకరించండి."
  }
};

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

  // Reload quiz in new language
  loadQuestion();

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
const questionsData = {
  en: [
    {
      q: "You receive a QR code on WhatsApp from an unknown person saying 'Scan this to receive ₹5000'. What do you do?",
      opts: ["Scan it immediately", "Ask them to send again", "Never scan — in UPI, scanning a QR always means you PAY", "Call your bank first"],
      ans: 2,
      exp: "✅ Correct! Scanning a QR code in UPI always initiates a payment FROM you. You can NEVER receive money by scanning a QR code."
    },
    {
      q: "A 'bank officer' calls and says your KYC is expired. He asks for your OTP to 'update' it. What do you do?",
      opts: ["Share OTP quickly to avoid account block", "Ask him to call back later", "Hang up — banks NEVER ask for OTP", "Share only half the OTP"],
      ans: 2,
      exp: "✅ Correct! No bank, government body, or app will ever ask for your OTP. This is a vishing (voice phishing) scam."
    },
    {
      q: "You sold something on OLX. The 'buyer' sends ₹1 and asks you to enter your UPI PIN to 'collect the full payment'. What happens?",
      opts: ["You receive the full amount", "Nothing happens", "You send money to the scammer", "Your account gets verified"],
      ans: 2,
      exp: "✅ Correct! Entering your UPI PIN always authorizes an outgoing payment, never an incoming one. This is the classic OLX QR/PIN scam."
    },
    {
      q: "Which of these is a legitimate way your bank will contact you?",
      opts: ["WhatsApp message asking to update KYC via a link", "Call asking for your card number and CVV", "Email from bank's official domain with no attachments", "SMS asking you to call an unknown number"],
      ans: 2,
      exp: "✅ Correct! Legitimate bank emails come from official domains and never ask for sensitive information or have suspicious attachments."
    },
    {
      q: "You lost money to a cyber fraud. What is the FIRST thing you should do?",
      opts: ["Post about it on social media", "Call 1930 (Cyber Crime Helpline) immediately", "Wait and see if money comes back", "Change your UPI PIN"],
      ans: 1,
      exp: "✅ Correct! Call 1930 immediately — it's the National Cyber Crime Helpline. Early reporting maximizes the chance of fund recovery."
    }
  ],
  hi: [
    {
      q: "एक अनजान व्यक्ति WhatsApp पर QR कोड भेजता है और कहता है 'पैसे पाने के लिए स्कैन करें'। आप क्या करेंगे?",
      opts: ["तुरंत स्कैन करें", "दोबारा भेजने के लिए कहें", "कभी स्कैन न करें — UPI में QR स्कैन का मतलब हमेशा भुगतान करना है", "पहले बैंक को कॉल करें"],
      ans: 2,
      exp: "✅ सही! UPI में QR कोड स्कैन करने का मतलब हमेशा आपकी तरफ से भुगतान होता है। QR स्कैन से कभी पैसे नहीं मिलते।"
    },
    {
      q: "'बैंक अधिकारी' कॉल करके कहते हैं कि KYC समाप्त हो गई है और OTP मांगते हैं। आप क्या करेंगे?",
      opts: ["खाता बंद होने से बचाने के लिए OTP दें", "बाद में कॉल करने के लिए कहें", "फोन काटें — बैंक कभी OTP नहीं मांगते", "आधा OTP साझा करें"],
      ans: 2,
      exp: "✅ सही! कोई भी बैंक, सरकारी संस्था या ऐप कभी OTP नहीं मांगेगा। यह विशिंग (वॉयस फिशिंग) घोटाला है।"
    },
    {
      q: "आपने OLX पर सामान बेचा। 'खरीदार' ₹1 भेजता है और कहता है 'पूरा पेमेंट पाने के लिए UPI PIN डालें'। क्या होगा?",
      opts: ["आपको पूरी राशि मिलेगी", "कुछ नहीं होगा", "आप जालसाज को पैसे भेज देंगे", "आपका खाता सत्यापित हो जाएगा"],
      ans: 2,
      exp: "✅ सही! UPI PIN डालना हमेशा आपकी तरफ से भुगतान अधिकृत करता है, कभी प्राप्त नहीं। यह क्लासिक OLX QR/PIN घोटाला है।"
    },
    {
      q: "आपका बैंक आपसे संपर्क करने का वैध तरीका कौन सा है?",
      opts: ["WhatsApp पर KYC अपडेट लिंक", "कॉल पर कार्ड नंबर और CVV मांगना", "बैंक के आधिकारिक डोमेन से बिना अटैचमेंट ईमेल", "अज्ञात नंबर पर कॉल करने वाला SMS"],
      ans: 2,
      exp: "✅ सही! वैध बैंक ईमेल आधिकारिक डोमेन से आते हैं और संवेदनशील जानकारी कभी नहीं मांगते।"
    },
    {
      q: "साइबर धोखाधड़ी में पैसे गए। सबसे पहले क्या करेंगे?",
      opts: ["सोशल मीडिया पर पोस्ट करें", "तुरंत 1930 (साइबर क्राइम हेल्पलाइन) पर कॉल करें", "प्रतीक्षा करें कि पैसे वापस आएंगे", "UPI PIN बदलें"],
      ans: 1,
      exp: "✅ सही! तुरंत 1930 पर कॉल करें — यह राष्ट्रीय साइबर अपराध हेल्पलाइन है। जल्दी रिपोर्ट से फंड वापसी की संभावना बढ़ती है।"
    }
  ],
  te: [
    {
      q: "ఒక అపరిచిత వ్యక్తి WhatsAppలో QR కోడ్ పంపి '₹5000 పొందడానికి స్కాన్ చేయండి' అని చెప్పాడు. మీరు ఏమి చేస్తారు?",
      opts: ["వెంటనే స్కాన్ చేయండి", "మళ్ళీ పంపమని అడగండి", "ఎప్పుడూ స్కాన్ చేయవద్దు — UPIలో QR స్కాన్ చేయడం అంటే మీరు చెల్లిస్తున్నారు", "మొదట మీ బ్యాంక్‌కు కాల్ చేయండి"],
      ans: 2,
      exp: "✅ సరైనది! UPIలో QR కోడ్ స్కాన్ చేయడం ఎల్లప్పుడూ మీ నుండి చెల్లింపును ప్రారంభిస్తుంది. QR కోడ్ స్కాన్ చేయడం ద్వారా మీరు ఎప్పుడూ డబ్బు పొందలేరు."
    },
    {
      q: "ఒక 'బ్యాంక్ అధికారి' కాల్ చేసి మీ KYC గడువు ముగిసిందని, దాన్ని 'అప్‌డేట్' చేయడానికి OTP అడుగుతాడు. మీరు ఏమి చేస్తారు?",
      opts: ["ఖాతా బ్లాక్ కాకుండా ఉండటానికి త్వరగా OTP ఇవ్వండి", "తర్వాత మళ్ళీ కాల్ చేయమని చెప్పండి", "ఫోన్ పెట్టండి — బ్యాంకులు ఎప్పుడూ OTP అడగవు", "OTPలో సగం మాత్రమే ఇవ్వండి"],
      ans: 2,
      exp: "✅ సరైనది! ఏ బ్యాంక్, ప్రభుత్వ సంస్థ లేదా యాప్ కూడా మీ OTPని ఎప్పుడూ అడగదు. ఇది విశింగ్ (వాయిస్ ఫిషింగ్) మోసం."
    },
    {
      q: "మీరు OLXలో ఏదైనా విక్రయించారు. 'కొనుగోలుదారు' ₹1 పంపి, 'పూర్తి చెల్లింపు సేకరించడానికి' మీ UPI PIN నమోదు చేయమని అడుగుతాడు. ఏమి జరుగుతుంది?",
      opts: ["మీరు పూర్తి మొత్తం పొందుతారు", "ఏమీ జరగదు", "మీరు మోసగాడికి డబ్బు పంపుతారు", "మీ ఖాతా ధృవీకరించబడుతుంది"],
      ans: 2,
      exp: "✅ సరైనది! మీ UPI PIN నమోదు చేయడం ఎల్లప్పుడూ అవుట్‌గోయింగ్ చెల్లింపును అధికారం చేస్తుంది, ఇన్‌కమింగ్ చెల్లింపును కాదు. ఇది క్లాసిక్ OLX QR/PIN మోసం."
    },
    {
      q: "మీ బ్యాంక్ మిమ్మల్ని సంప్రదించడానికి చట్టబద్ధమైన మార్గం ఏది?",
      opts: ["లింక్ ద్వారా KYC అప్‌డేట్ చేయమని WhatsApp సందేశం", "మీ కార్డ్ నంబర్ మరియు CVV అడిగే కాల్", "అటాచ్‌మెంట్‌లు లేని బ్యాంక్ అధికారిక డొమైన్ నుండి ఇమెయిల్", "తెలియని నంబర్‌కు కాల్ చేయమని SMS"],
      ans: 2,
      exp: "✅ సరైనది! చట్టబద్ధమైన బ్యాంక్ ఇమెయిల్‌లు అధికారిక డొమైన్‌ల నుండి వస్తాయి మరియు సున్నితమైన సమాచారాన్ని ఎప్పుడూ అడగవు."
    },
    {
      q: "మీరు సైబర్ మోసంలో డబ్బు కోల్పోయారు. మీరు చేయవలసిన మొదటి పని ఏమిటి?",
      opts: ["దాని గురించి సోషల్ మీడియాలో పోస్ట్ చేయండి", "వెంటనే 1930 (సైబర్ క్రైమ్ హెల్ప్‌లైన్)కి కాల్ చేయండి", "డబ్బు తిరిగి వస్తుందో లేదో వేచి ఉండండి", "మీ UPI PIN మార్చండి"],
      ans: 1,
      exp: "✅ సరైనది! వెంటనే 1930కి కాల్ చేయండి — ఇది జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్. ప్రారంభ రిపోర్టింగ్ నిధుల రికవరీ అవకాశాన్ని పెంచుతుంది."
    }
  ]
};

let current = 0, score = 0, answered = false;

function loadQuestion() {
  answered = false;
  const questions = questionsData[currentLang] || questionsData.en;
  const q = questions[current % questions.length];

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
  const questions = questionsData[currentLang] || questionsData.en;
  const q = questions[current % questions.length];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, idx) => {
    if (idx === q.ans) b.classList.add('correct');
    else if (idx === i && i !== q.ans) b.classList.add('wrong');
    b.style.cursor = 'default';
  });
  const feedback = document.getElementById('quiz-feedback');
  if (i === q.ans) {
    score++;
    feedback.textContent = q.exp;
    feedback.style.color = 'var(--green)';
  } else {
    feedback.textContent = `❌ ${q.exp}`;
    feedback.style.color = 'var(--accent2)';
  }
  document.getElementById('quiz-score').textContent = `${scoreLabel()}: ${score} / ${current + 1}`;
  const nextBtn = document.getElementById('quiz-next');
  nextBtn.style.display = 'inline-block';
  const questions2 = questionsData[currentLang] || questionsData.en;
  if (current >= questions2.length - 1) {
    nextBtn.textContent = `${finishedLabel()} ${score}/${questions2.length} ✓`;
    nextBtn.onclick = () => {
      current = -1;
      score = 0;
      nextQuestion();
      nextBtn.textContent = nextQuestionLabel();
      nextBtn.onclick = nextQuestion;
    };
  }
}

function scoreLabel() {
  if (currentLang === 'hi') return 'स्कोर';
  if (currentLang === 'te') return 'స్కోర్';
  return 'Score';
}

function finishedLabel() {
  if (currentLang === 'hi') return 'समाप्त!';
  if (currentLang === 'te') return 'పూర్తి!';
  return 'Finished!';
}

function nextQuestionLabel() {
  if (currentLang === 'hi') return 'अगला प्रश्न →';
  if (currentLang === 'te') return 'తదుపరి ప్రశ్న →';
  return 'Next Question →';
}

function nextQuestion() {
  const questions = questionsData[currentLang] || questionsData.en;
  current++;
  if (current >= questions.length) { current = 0; score = 0; }
  loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
});
