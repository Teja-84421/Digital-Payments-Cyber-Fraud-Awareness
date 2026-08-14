# ⚡ Digital Payments & Cyber Fraud Awareness

A responsive, multilingual, single-page website that educates users about India's digital payment ecosystem and helps them recognize, avoid, and report cyber fraud.

## 🌐 Live Demo

https://digital-payments-and-cyber-fraud-aw.vercel.app/

## 📖 About

India's digital payment ecosystem — UPI, cards, net banking, wallets, and the digital rupee — is growing rapidly, and so are the scams targeting it. This project is an awareness platform that explains how digital payments work, breaks down common fraud types, teaches practical safety habits, and gives users a clear action plan (and helpline numbers) if they ever fall victim to fraud.

Built as a static front-end site with no backend/build step required — just open `index.html` in a browser.

## ✨ Features

- **Digital Payments 101** — Overview of UPI, Debit/Credit Cards, Net Banking (NEFT/RTGS), QR Payments, Digital Wallets, and CBDC (Digital Rupee), plus a step-by-step breakdown of how a UPI transaction flows through NPCI.
- **Cyber Fraud Encyclopedia** — Covers 8 major fraud categories: Phishing, Vishing, QR Code Scams, Online Marketplace/Job Fraud, Remote Access (Screen Sharing) Fraud, SIM Swap Attacks, Predatory Loan Apps, and Ponzi/Crypto Scams.
- **🚨 Red Flags Checklist** — Quick-scan warning signs that indicate a scam in progress.
- **Protection Tips** — 8 actionable best practices for staying safe during digital transactions.
- **Real-World Case Studies** — Documented Indian fraud cases (digital arrest, OLX scams, loan app harassment, crypto investment fraud) with reported financial losses.
- **Video Resources** — Curated, filterable YouTube videos from official/verified sources (NPCI, SEBI, etc.), sorted by category (Fraud Types, UPI Safety, Awareness).
- **Interactive Quiz** — Scenario-based quiz to test fraud-recognition skills, with live scoring.
- **Emergency Help Section** — Key contacts including the National Cyber Crime Helpline (1930), cybercrime.gov.in, and the RBI Banking Ombudsman.
- **🌗 Light/Dark Theme Toggle** — Persisted UI theme switch.
- **🌍 Multilingual Support** — Full UI translation across **English, Hindi (हिंदी), and Telugu (తెలుగు)**.
- **Live Alert Ticker** — Scrolling banner of critical safety reminders.
- **Fully Responsive** — Optimized for desktop, tablet, and mobile.

## 🗂️ Project Structure

```
Digital Payments & Cyber Fraud Awareness/
├── index.html      # Page structure & content (all sections)
├── style.css       # Styling, theming (light/dark), layout, animations
├── script.js       # Language switching, theme toggle, video filters, quiz logic
└── README.md
```

## 🛠️ Built With

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (CSS variables) for theming, responsive grid/flexbox layouts
- **Vanilla JavaScript** — No frameworks or dependencies; handles i18n, theming, quiz, and video filtering
- **YouTube Embeds** — For the video resources section

## 🚀 Getting Started

No build tools or dependencies required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd "Digital Payments & Cyber Fraud Awareness"
   ```
2. **Open `index.html`** directly in your browser, or serve it locally:
   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node (npx)
   npx serve .
   ```
3. Visit `http://localhost:8000` in your browser.

## 🌍 Language Support

Use the language switcher in the navigation bar to toggle between:
- 🇬🇧 **EN** — English
- 🇮🇳 **हिं** — Hindi
- 🇮🇳 **తె** — Telugu

## 📞 Emergency Cyber Fraud Contacts (India)

| Service | Contact |
|---|---|
| National Cyber Crime Helpline | **1930** |
| Online Complaint Portal | [cybercrime.gov.in](https://cybercrime.gov.in) |
| RBI Banking Ombudsman | **14448** |
| Your Bank's Fraud Helpline | Immediately — freeze account/block card |

> **Golden Rule:** Call 1930 first, then your bank, then file a complaint at cybercrime.gov.in. Keep screenshots, transaction IDs, and call recordings as evidence.

## 📚 Sources

Content is informed by publicly available guidance from NPCI, RBI, the Ministry of Electronics & IT (MeitY), CERT-In, and Cybercrime.gov.in.

> ⚠️ **Disclaimer:** This project is for educational purposes only. Always verify information with official government sources before acting on it.

## 🤝 Contributing

Contributions are welcome! If you'd like to add more fraud case studies, improve translations, or enhance accessibility:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

## 📄 License

This project is available for educational use. _Add a license (e.g., MIT) if you'd like to formally open-source it._

---

*Built to make India's digital payment ecosystem safer, one user at a time.*
