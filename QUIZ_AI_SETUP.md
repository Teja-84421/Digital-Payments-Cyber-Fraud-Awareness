# Setting up AI-generated quiz questions

The quiz asks an AI model to write 10 fresh questions every time someone
takes it, instead of reusing the same 10 questions forever. This needs
one thing only you can provide: an **OpenRouter API key** (paid,
pay-as-you-go — there is no free tier, but the cost per quiz generation
is a small fraction of a cent with the model used here). The request is
routed through OpenRouter to a Claude model behind the scenes.

**If you don't set this up, nothing breaks** — the quiz automatically
falls back to the original static question bank.

## 1. Get an API key

1. Go to [openrouter.ai](https://openrouter.ai/) and sign up / log in.
2. Add a small amount of credit (Settings -> Credits) — a few dollars covers a very large number of quiz generations.
3. Go to **Keys** -> **Create Key**.
4. Copy the key — it looks like `sk-or-v1-...` and, like the Google Client ID, is shown in full only once.

## 2. Add it to Vercel

Vercel dashboard -> your project -> **Settings -> Environment Variables** -> add:
```
OPENROUTER_API_KEY = sk-or-v1-your-real-key
```
Make sure the **Production** checkbox is ticked (not just Preview/Development), then **redeploy** so the function picks it up.

## 3. That's it

No database changes, no other files to edit. Once the env var is set and
deployed, every time someone starts or restarts the quiz, `script.js`
calls `/api/quiz/generate` for a new batch of questions in the selected
language before showing the first question.

## How the fallback works

If `OPENROUTER_API_KEY` isn't set, the AI call fails, or the AI's response
doesn't come back in the exact expected format, the endpoint returns
`{ questions: null }` instead of an error — and the frontend silently
uses its original built-in question set for that attempt, in random
order. Visitors never see an error message either way; the quiz always
works.

## Notes

- Routes through OpenRouter to `anthropic/claude-haiku-4.5` — a fast, inexpensive model, well suited to short quiz-question generation. See [openrouter.ai/anthropic](https://openrouter.ai/anthropic) if you want to swap the model slug for a different one.
- Each generation is a single API call producing 10 questions in the selected language (EN/HI/TE), so it also naturally supports switching languages mid-quiz.
- Nothing about the user's answers or personal data is sent to OpenRouter/Anthropic — only an instructional prompt describing the topics to write about, plus the plain text of quiz questions this browser has already seen (tracked in `localStorage`, no names/emails/accounts involved), so the model can avoid repeating them.

## Avoiding repeat questions

Each browser remembers (in `localStorage`, up to the last 40 question texts per language) which questions it's already been shown, and sends that list along with every `/api/quiz/generate` request. The prompt explicitly tells the model not to reuse those questions or write thin rephrasings of them, so a learner doing several attempts in a row keeps seeing new scenarios instead of the same ones reworded. This resets if the browser's storage is cleared, and is separate per language.

If you're testing and still see the exact same 10 questions every time (just reordered), the AI call is very likely failing and it's silently using the built-in static fallback bank. Open your browser's DevTools -> Network tab, reload the quiz, and check the response from `/api/quiz/generate`:
- `{"questions": null, "source": "not_configured"}` — `OPENROUTER_API_KEY` isn't visible to the deployed function. Double-check it's added under the correct Vercel environment (Production, not just Preview/Development) and that you redeployed *after* adding it.
- `{"questions": null, "source": "ai_error", "status": ...}` — OpenRouter rejected the request. `status: 401` = invalid/revoked key, `status: 402` = no OpenRouter credit, `status: 429` = rate-limited, `status: 400` = malformed request or bad model slug.
- `{"questions": null, "source": "parse_error"}` or `"validation_error"` — the AI responded but not in the exact expected JSON shape; this should be rare but is fully harmless since the fallback bank kicks in automatically.
- `{"questions": [...], "source": "ai"}` — it's working correctly.

The browser console also logs a warning (`Quiz: using built-in fallback questions — ...`) whenever a fallback is used, so you don't need to dig into the Network tab unless you want the specific reason.
