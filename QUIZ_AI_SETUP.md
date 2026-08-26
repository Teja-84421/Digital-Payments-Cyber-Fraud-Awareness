# Setting up AI-generated quiz questions

The quiz now asks Claude to write 5 fresh questions every time someone
takes it, instead of reusing the same 5 questions forever. This needs
one thing only you can provide: an Anthropic API key (paid, pay-as-you-go
— there is no free tier, but the cost per quiz generation is a small
fraction of a cent with the model used here).

**If you don't set this up, nothing breaks** — the quiz automatically
falls back to the original static question bank.

## 1. Get an API key

1. Go to [console.anthropic.com](https://console.anthropic.com/) and sign up / log in.
2. Add a small amount of credit (Settings -> Billing) — a few dollars covers a very large number of quiz generations.
3. Go to **API Keys** -> **Create Key**.
4. Copy the key — it looks like `sk-ant-api03-...` and, like the Google Client ID, is shown in full only once.

## 2. Add it to Vercel

Vercel dashboard -> your project -> **Settings -> Environment Variables** -> add:
```
ANTHROPIC_API_KEY = sk-ant-api03-your-real-key
```
Then **redeploy** so the function picks it up.

## 3. That's it

No database changes, no frontend config, no other files to edit. Once
the env var is set and deployed, every time someone starts or restarts
the quiz, `script.js` calls `/api/quiz/generate` for a new batch of
questions in the selected language before showing the first question.

## How the fallback works

If `ANTHROPIC_API_KEY` isn't set, the AI call fails, or the AI's response
doesn't come back in the exact expected format, the endpoint returns
`{ questions: null }` instead of an error — and the frontend silently
uses its original built-in question set for that attempt, in random
order. Visitors never see an error message either way; the quiz always
works.

## Notes

- Uses `claude-haiku-4-5-20251001` — a fast, inexpensive model, well suited to short quiz-question generation.
- Each generation is a single API call producing 5 questions in the selected language (EN/HI/TE), so it also naturally supports switching languages mid-quiz.
- Nothing about the user's answers or personal data is sent to Anthropic — only a fixed instructional prompt describing the topics to write about.
