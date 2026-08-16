<mark>🛡️ CyberSafe — Digital Payments & Cyber Fraud Awareness</mark>

An interactive, multilingual awareness platform that helps users understand digital payments in India and recognize, prevent, and report cyber fraud.

<mark>🌐 Live Website</mark>

CyberSafe:
https://digital-payments-and-cyber-fraud-aw.vercel.app/

<mark>📌 About the Project</mark>

Digital payments such as UPI, QR payments, debit/credit cards, net banking, wallets, and the Digital Rupee have become an important part of everyday life in India. At the same time, cyber criminals use these technologies to target users through phishing, fake calls, QR-code scams, fake job offers, remote-access scams, SIM swaps, fraudulent loan applications, investment scams, and other social-engineering techniques.

CyberSafe is an educational web platform created to improve digital-payment and cyber-fraud awareness. It explains common payment methods and fraud techniques in a simple, interactive format and provides practical safety advice, real-world case studies, videos, quizzes, emergency reporting information, and personalized learning features.

The platform supports English, Hindi, and Telugu, making the content accessible to a wider audience.

<mark>✨ Key Features</mark>

<mark>💳 Digital Payments Awareness</mark>

Learn how common digital payment methods work, including:

UPI

QR Code Payments

Debit and Credit Cards

Net Banking

NEFT and RTGS

Digital Wallets

Digital Rupee / CBDC

UPI transaction flow

<mark>🚨 Cyber Fraud Encyclopedia</mark>

The website explains major types of digital-payment and online fraud, including:

Phishing

Vishing and fake customer-care calls

QR Code Scams

Online Marketplace and Job Fraud

Remote Access / Screen Sharing Fraud

SIM Swap Attacks

Predatory Loan App Scams

Ponzi and Crypto Investment Scams

<mark>⚠️ Red Flags</mark>

A quick-reference section helps users identify common warning signs such as:

Urgent payment requests

Requests for OTPs, PINs, or passwords

Suspicious links

Fake customer-care numbers

Requests to install screen-sharing applications

Unexpected QR codes

Guaranteed investment returns

Fake KYC or account-blocking messages

<mark>🛡️ Protection Tips</mark>

Practical security recommendations are provided for safer digital transactions, accounts, devices, and personal information.

<mark>📚 Real-World Case Studies</mark>

The project presents examples of cyber-fraud incidents to demonstrate how scams happen and what users can learn from them.

<mark>🎥 Video Resources</mark>

Curated awareness videos are organized by categories such as:

Fraud Types

UPI Safety

Cyber Awareness

<mark>🧠 Interactive Quiz</mark>

Users can test their cyber-safety knowledge through scenario-based questions and receive a score.

<mark>👤 User Accounts</mark>

The project includes a serverless authentication system with:

Create Account

Login with username or email

Logout

Session authentication

Forgot Password

Email OTP password reset

Password hashing

<mark>📊 Personalized Cyber Safety Dashboard</mark>

Logged-in users can access a personalized dashboard containing information such as:

Safety / learning progress

Quiz attempts

Best quiz performance

Weak topics

Completed awareness topics

Topic progress

<mark>🌍 Multilingual Interface</mark>

The interface supports:

🇬🇧 English

🇮🇳 Hindi (हिंदी)

🇮🇳 Telugu (తెలుగు)

<mark>🌗 Light / Dark Mode</mark>

Users can switch between light and dark themes, with the selected theme persisted in the browser.

<mark>📱 Responsive Design</mark>

The interface is designed for:

Desktop

Laptop

Tablet

Mobile devices

<mark>📩 Feedback</mark>

Users can submit feedback through the website.

<mark>🏗️ Technology Stack</mark>

<mark>Frontend</mark>

HTML5 — Page structure and semantic content

CSS3 — Responsive design, themes, animations, and layout

JavaScript (Vanilla JS) — Interactions, multilingual support, quiz logic, authentication UI, dashboard functionality, and API communication

<mark>Backend</mark>

Vercel Serverless Functions — Backend API endpoints

Node.js — Serverless JavaScript runtime

TiDB Cloud / MySQL-compatible database — User and learning data storage

bcryptjs — Password and OTP hashing

jsonwebtoken (JWT) — Authentication/session handling

Nodemailer — Forgot-password OTP email delivery

<mark>Deployment</mark>

Vercel — Frontend hosting and serverless API deployment

GitHub — Source-code repository and version control

<mark>📂 Project Structure</mark>

Digital Payments & Cyber Fraud Awareness/
│
├── index.html
├── style.css
├── script.js
│
├── login.html
├── login.css
├── login.js
├── auth-ui.css
├── auth-ui.js
│
├── dashboard.html
├── dashboard.css
├── dashboard.js
├── topic-tracker.js
├── feedback.js
│
├── favicon.png
│
├── api/
│   ├── _lib/
│   │   ├── auth.js
│   │   ├── db.js
│   │   ├── mailer.js
│   │   ├── requireAuth.js
│   │   ├── topics.js
│   │   └── validate.js
│   │
│   ├── auth/
│   │   ├── register.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   ├── me.js
│   │   ├── forgot-password.js
│   │   └── reset-password.js
│   │
│   ├── dashboard/
│   │   ├── quiz-attempt.js
│   │   ├── summary.js
│   │   └── topic-progress.js
│   │
│   └── feedback/
│       └── submit.js
│
├── schema.sql
├── schema-dashboard.sql
├── .env.example
├── package.json
├── vercel.json
├── BACKEND_README.md
└── README.md

<mark>🔐 Authentication & Backend</mark>

The project uses Vercel Serverless Functions instead of a separate Express server.

<mark>Authentication API</mark>

Endpoint

Method

Purpose

/api/auth/register

POST

Create a new account

/api/auth/login

POST

Authenticate a user

/api/auth/logout

POST

End the current session

/api/auth/me

GET

Get the current logged-in user

/api/auth/forgot-password

POST

Request a password-reset OTP

/api/auth/reset-password

POST

Verify OTP and reset password

<mark>Dashboard API</mark>

Endpoint

Method

Purpose

/api/dashboard/summary

GET

Get personalized dashboard summary

/api/dashboard/quiz-attempt

POST

Save a quiz attempt

/api/dashboard/topic-progress

POST

Save topic completion/progress

<mark>Feedback API</mark>

Endpoint

Method

Purpose

/api/feedback/submit

POST

Submit user feedback

<mark>🗄️ Database</mark>

The application uses TiDB Cloud, which is MySQL-compatible.

<mark>Main Tables</mark>

schema.sql creates:

users

password_resets

schema-dashboard.sql creates:

user_quiz_attempts

user_topic_progress

The dashboard tables store user quiz performance and topic-completion progress.

<mark>⚙️ Environment Variables</mark>

For local development, copy .env.example to .env and configure the required values.

TIDB_HOST=
TIDB_PORT=4000
TIDB_USER=
TIDB_PASSWORD=
TIDB_DATABASE=

JWT_SECRET=

SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
EMAIL_FROM=

<mark>Important</mark>

Never commit the real .env file or database/email credentials to GitHub.

For Vercel deployment, add these variables under:

Vercel → Project → Settings → Environment Variables

<mark>🚀 Run the Project Locally</mark>

<mark>1. Clone the repository</mark>

git clone https://github.com/<your-username>/<your-repository>.git
cd "Digital Payments & Cyber Fraud Awareness"

<mark>2. Install backend dependencies</mark>

npm install

<mark>3. Configure environment variables</mark>

Copy:

.env.example

to:

.env

Then enter your TiDB and SMTP credentials.

<mark>4. Create the database</mark>

Run schema.sql in your TiDB Cloud SQL Editor.

Then run:

schema-dashboard.sql

to enable personalized dashboard storage.

<mark>5. Run locally</mark>

For the complete Vercel serverless environment, use:

npx vercel dev

Then open the local URL provided by Vercel.

Opening index.html directly is useful for viewing the static frontend, but authentication, dashboard storage, and other API-dependent features require the serverless API environment and database configuration.

<mark>☁️ Deploy to Vercel</mark>

Push the project to GitHub.

Import the GitHub repository into Vercel.

Vercel automatically detects the static frontend and /api serverless functions.

Add all required environment variables in the Vercel project settings.

Make sure the TiDB database tables have been created.

Deploy the project.

Open the generated Vercel URL.

The included vercel.json configures the API function runtime limits.

<mark>🔑 Password Reset Flow</mark>

The forgot-password system works as follows:

User enters registered email
          ↓
Backend generates OTP
          ↓
OTP is hashed and stored
          ↓
OTP is sent through SMTP
          ↓
User enters OTP + new password
          ↓
Backend verifies OTP
          ↓
Password is securely updated

OTP codes expire and failed attempts are limited.

<mark>🛡️ Security Practices</mark>

The project includes several security-focused practices:

Passwords are hashed using bcryptjs.

OTP values are hashed before database storage.

Authentication uses signed JWT-based sessions.

Authentication cookies are handled server-side.

Password-reset OTPs expire.

OTP verification attempts are limited.

Database credentials are kept in environment variables.

The application avoids exposing sensitive credentials in frontend code.

For a production deployment, additional protections such as rate limiting, monitoring, stronger security headers, and regular dependency updates are recommended.

<mark>📞 Cyber Fraud Emergency Information — India</mark>

If you become a victim of online financial fraud:

Service

Contact

National Cyber Crime Helpline

1930

Cyber Crime Reporting Portal

cybercrime.gov.in

RBI Banking Ombudsman / Complaint Assistance

14448

Bank Fraud Helpline

Contact your bank immediately

<mark>Recommended Immediate Actions</mark>

Contact 1930 as soon as possible.

Inform your bank or payment provider.

Block or secure affected cards/accounts if required.

Report the incident through the official cybercrime portal.

Preserve transaction IDs, screenshots, messages, emails, and other evidence.

Do not share OTPs, PINs, passwords, or remote-access codes with anyone.

Important: Always verify emergency contact information through official government, bank, RBI, or cybercrime sources before taking action.

<mark>🎯 Project Objectives</mark>

The major objectives of CyberSafe are to:

Increase awareness of India's digital payment ecosystem.

Help users identify common cyber-fraud techniques.

Teach users safe digital-payment practices.

Encourage early reporting of financial cyber fraud.

Provide multilingual cyber-safety education.

Use interactive quizzes to reinforce learning.

Track learning progress through a personalized dashboard.

Make cyber-safety information accessible to users with different levels of technical knowledge.

<mark>👥 Target Users</mark>

The platform is designed for:

Students

First-time digital-payment users

Rural and semi-urban communities

Senior citizens

Smartphone users

UPI and mobile-banking users

Anyone who wants to improve their cyber-safety awareness

<mark>🔮 Future Enhancements</mark>

Possible future improvements include:

More Indian-language translations

More localized fraud case studies

AI-assisted scam-message analysis

Real-time verified cyber-fraud alerts

Accessibility improvements

Advanced learning analytics

Gamification and achievement badges

Community awareness campaigns

Progressive Web App (PWA) support

<mark>📚 Educational Sources</mark>

The project's awareness content is informed by publicly available information and guidance from organizations such as:

Reserve Bank of India (RBI)

National Payments Corporation of India (NPCI)

Ministry of Electronics and Information Technology (MeitY)

Indian Computer Emergency Response Team (CERT-In)

National Cyber Crime Reporting Portal

⚠️ Disclaimer: This project is intended for educational and awareness purposes. It is not a substitute for official financial, legal, or cybersecurity advice. Always verify important information with the relevant official organization.

<mark>🤝 Contributing</mark>

Contributions and suggestions are welcome.

To contribute:

git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push origin feature/your-feature

Then open a Pull Request on GitHub.

<mark>📄 License</mark>

This project is currently intended for educational use.

If you plan to distribute it as an open-source project, consider adding an appropriate license such as the MIT License.

<mark>⭐ Project</mark>

CyberSafe — Digital Payments & Cyber Fraud Awareness

Learn. Detect. Protect. Report.

Made to help users become safer and more confident while using digital payments.