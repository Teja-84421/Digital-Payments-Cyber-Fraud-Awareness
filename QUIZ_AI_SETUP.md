# Setting up AI-generated quiz questions

The quiz asks the Gemini API to write 10 fresh questions every time
someone takes it, instead of reusing the same 10 questions forever.
Gemini has a genuine free tier (unlike a draining trial credit), so this
should keep working without needing to add billing for light/personal use.

**If you don't set this up, nothing breaks** — the quiz automatically
falls back to the original static question bank.

## 1. Get an API key

1. Go to [aistudio.google.com](https://aistudio.google.com/) and sign in with a Google account.
2. Click **Get API key** (top left) -> **Create API key**.
3. Choose or create a Google Cloud project when prompted (this is just a formality for a free-tier key, no billing needs to be attached).
4. Copy the key.

## 2. Add it to Vercel

Vercel dashboard -> your project -> **Settings -> Environment Variables** -> add:
```
GEMINI_API_KEY = your-real-key
```
Make sure the **Production** checkbox is ticked (not just Preview/Development), then **redeploy** so the function picks it up.

## 3. That's it

No database changes, no other files to edit. Once the env var is set and
deployed, every time someone starts or restarts the quiz, `script.js`
calls `/api/quiz/generate` for a new batch of questions in the selected
language before showing the first question.

## How the fallback works

If `GEMINI_API_KEY` isn't set, the AI call fails, or the AI's response
doesn't come back in the exact expected format, the endpoint returns
`{ questions: null }` instead of an error — and the frontend silently
uses its original built-in question set for that attempt, in random
order. Visitors never see an error message either way; the quiz always
works.

## Notes

- Uses `gemini-2.5-flash` — a fast, inexpensive model well suited to short quiz-question generation, with a free tier. See [ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models) if you want to swap the model name.
- Each generation is a single API call producing 10 questions in the selected language (EN/HI/TE), so it also naturally supports switching languages mid-quiz.
- Nothing about the user's answers or personal data is sent to Google — only an instructional prompt describing the topics to write about, plus the plain text of quiz questions this browser has already seen (tracked in `localStorage`, no names/emails/accounts involved), so the model can avoid repeating them.
- Requests use `generationConfig.responseMimeType: "application/json"`, which asks Gemini to return raw JSON directly (no markdown code fences to strip), making parsing more reliable.

## Avoiding repeat questions

Each browser remembers (in `localStorage`, up to the last 40 question texts per language) which questions it's already been shown, and sends that list along with every `/api/quiz/generate` request. The prompt explicitly tells the model not to reuse those questions or write thin rephrasings of them, so a learner doing several attempts in a row keeps seeing new scenarios instead of the same ones reworded. This resets if the browser's storage is cleared, and is separate per language.

If you're testing and still see the exact same 10 questions every time (just reordered), the AI call is very likely failing and it's silently using the built-in static fallback bank. Open your browser's DevTools -> Network tab, reload the quiz, and check the response from `/api/quiz/generate`:
- `{"questions": null, "source": "not_configured"}` — `GEMINI_API_KEY` isn't visible to the deployed function. Double-check it's added under the correct Vercel environment (Production, not just Preview/Development) and that you redeployed *after* adding it.
- `{"questions": null, "source": "ai_error", "status": ...}` — Gemini rejected the request. `status: 400` = invalid key or malformed request, `status: 403` = key restricted or the Generative Language API isn't enabled on the linked project, `status: 429` = free-tier rate limit hit (wait a bit and retry).
- `{"questions": null, "source": "parse_error"}` or `"validation_error"` — the AI responded but not in the exact expected JSON shape; this should be rare but is fully harmless since the fallback bank kicks in automatically.
- `{"questions": [...], "source": "ai"}` — it's working correctly.

The browser console also logs a warning (`Quiz: using built-in fallback questions — ...`) whenever a fallback is used, so you don't need to dig into the Network tab unless you want the specific reason.
