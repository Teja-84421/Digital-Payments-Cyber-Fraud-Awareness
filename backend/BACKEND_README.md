# Backend — Auth API (Vercel Serverless Functions + TiDB)

These files add a login/register/forgot-password backend to your existing
static site, deployable on Vercel with no separate server needed. Vercel
automatically turns anything under `/api` into a serverless function.

## 1. Copy files into your project root

Copy this whole `backend/` folder's **contents** into the root of your
existing repo (the same folder as your `index.html`), so you end up with:

```
your-repo/
├── api/
│   ├── _lib/
│   │   ├── auth.js
│   │   ├── db.js
│   │   ├── mailer.js
│   │   └── validate.js
│   └── auth/
│       ├── register.js
│       ├── login.js
│       ├── logout.js
│       ├── me.js
│       ├── forgot-password.js
│       └── reset-password.js
├── index.html
├── login.html          <- from the frontend files
├── login.css
├── login.js
├── style.css
├── script.js
├── package.json         <- merge with your existing one if you have one
├── schema.sql
└── .env.example
```

If you don't already have a root `package.json`, just use the one included
here. If you already have one (e.g. from another tool), merge the
`dependencies` block into it instead of overwriting it.

## 2. Create the database tables

1. Get a free cluster at [tidbcloud.com](https://tidbcloud.com) (Serverless tier).
2. Open the SQL Editor (or connect with the `mysql` CLI) and run everything
   in `schema.sql`. It creates two tables: `users` and `password_resets`.

## 3. Set environment variables

Copy `.env.example` to `.env` for local testing with `vercel dev`, and add
the same variables in **Vercel Dashboard → your project → Settings →
Environment Variables**:

| Variable | Where to get it |
|---|---|
| `TIDB_HOST`, `TIDB_PORT`, `TIDB_USER`, `TIDB_PASSWORD`, `TIDB_DATABASE` | TiDB Cloud → your cluster → "Connect" |
| `JWT_SECRET` | Any long random string — generate with `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM` | Your email provider's SMTP credentials (Gmail App Password, Brevo, SendGrid, etc.) |

## 4. API endpoints this adds

All under `/api/auth/...`, same domain as your site — no CORS setup needed.

| Endpoint | Method | Body | What it does |
|---|---|---|---|
| `/api/auth/register` | POST | `{ username, email, password }` | Creates an account |
| `/api/auth/login` | POST | `{ identifier, password }` | Logs in with username **or** email, sets an httpOnly session cookie |
| `/api/auth/logout` | POST | — | Clears the session cookie |
| `/api/auth/me` | GET | — | Returns the logged-in user, or 401 |
| `/api/auth/forgot-password` | POST | `{ email, lang }` | Emails a 6-digit OTP (valid 10 min) if the email is registered |
| `/api/auth/reset-password` | POST | `{ email, otp, newPassword }` | Verifies the OTP and sets the new password |

`lang` is optional (`en` / `hi` / `te`) — it just controls which language the
OTP email is sent in; it defaults to English.

## 5. Push to GitHub

```bash
git add api package.json schema.sql .env.example login.html login.css login.js
git commit -m "Add login backend (TiDB + Vercel functions)"
git push
```

Vercel will detect the new `/api` folder and `package.json`, install the
dependencies, and deploy the functions automatically — no extra Vercel
config needed. Just make sure the environment variables from step 3 are set
in the Vercel dashboard before the first deploy (or redeploy after adding them).

## Notes / things to harden later

- Passwords and OTPs are hashed with bcrypt — never stored in plain text.
- The forgot-password endpoint always returns the same generic message
  whether or not the email exists, to avoid leaking which emails are
  registered.
- OTPs expire after 10 minutes and lock after 5 wrong attempts.
- For production, consider adding rate limiting (e.g. Vercel's built-in
  rate limiting, or Upstash Redis) on `login` and `forgot-password` to
  slow down brute-force attempts.
