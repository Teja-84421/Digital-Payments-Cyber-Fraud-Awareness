# Setting up "Continue with Google"

Everything is already wired up in the code — the only thing missing is
your own **Google OAuth Client ID**, which only you can create (it's tied
to your Google account). This takes about 5 minutes and is completely free.

## 1. Create the OAuth Client ID

1. Go to [console.cloud.google.com](https://console.cloud.google.com/) and sign in.
2. Create a new project (top-left project dropdown -> "New Project") — name it anything, e.g. "CyberSafe Awareness".
3. Go to **APIs & Services -> OAuth consent screen**.
   - User type: **External**
   - Fill in the required fields: app name ("CyberSafe" or similar), your email as support email, your email again under developer contact.
   - You can skip scopes and test users — click through to **Save and Continue** until you reach the summary, then **Back to Dashboard**.
   - (Optional) Under "Audience" / publishing status, click **Publish App** so it isn't limited to a short test-user list. For a college project this isn't required — unpublished apps still work fine for anyone, they just see an "unverified app" notice, which is normal and fine here.
4. Go to **APIs & Services -> Credentials -> + Create Credentials -> OAuth client ID**.
   - Application type: **Web application**
   - Name: anything, e.g. "CyberSafe Web"
   - Under **Authorized JavaScript origins**, add your site's exact URL (no trailing slash), e.g.:
     ```
     https://digital-payments-and-cyber-fraud-aw.vercel.app
     ```
     Add `http://localhost:3000` too if you ever test locally.
   - You do **not** need to add anything under "Authorized redirect URIs" — this flow doesn't use redirects.
   - Click **Create**. Google shows you a **Client ID** (looks like `123456789-abc123xyz.apps.googleusercontent.com`) — copy it. You won't need the "Client Secret" for this setup at all.

## 2. Add the Client ID in two places

**A. Frontend** — open `login.html`'s companion file `login.js`, find this line near the bottom:
```js
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
```
Replace the placeholder with your real Client ID.

**B. Backend (Vercel)** — Vercel dashboard -> your project -> **Settings -> Environment Variables** -> add:
```
GOOGLE_CLIENT_ID = 123456789-abc123xyz.apps.googleusercontent.com
```
(same value as step A). Then **redeploy** so the function picks it up.

## 3. Run the database migration

Run `schema-google-auth.sql` once against your TiDB database (TiDB Cloud console -> SQL Editor). It just adds a `google_id` column and allows `password_hash` to be empty for Google-only accounts — it doesn't touch any existing data.

## 4. Push and test

```bash
git add -A
git commit -m "Add Continue with Google sign-in"
git push origin main
```

Once deployed, visit `login.html` — you should see a "Continue with Google" button under both the Login and Create Account forms. Clicking it opens Google's account picker; after choosing an account, you're logged in immediately (an account is created automatically the first time).

## Notes

- If someone already registered with email/password and later clicks "Continue with Google" using the *same email*, their existing account gets linked automatically — no duplicate account is created.
- Google-only accounts have no password. If that user later wants to also log in with a password, they can use "Forgot password?" to set one.
- If `GOOGLE_CLIENT_ID` is left as the placeholder, the site automatically hides the Google button/divider instead of showing something broken — so nothing looks wrong if you deploy before finishing this setup.
