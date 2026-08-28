// api/quiz/generate.js
// POST { lang: 'en'|'hi'|'te', recentQuestions?: string[] } -> generates 10
// fresh multiple-choice quiz questions via the Gemini API, so the quiz is
// different every attempt instead of a fixed static bank. recentQuestions
// (question text only, tracked client-side) is used to actively tell the
// model what NOT to repeat, since the model has no memory between calls
// on its own. Falls back gracefully (empty body -> frontend uses its own
// static fallback questions) if the AI call fails or isn't configured.

const { VALID_TOPICS } = require('../_lib/topics');

// From aistudio.google.com -> Get API key. Add this in Vercel -> Settings ->
// Environment Variables as GEMINI_API_KEY. See QUIZ_AI_SETUP.md for the
// full walkthrough.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// Gemini model name — fast and cheap, well suited to short quiz-question
// generation. See ai.google.dev/gemini-api/docs/models for other options.
const MODEL = 'gemini-2.5-flash';
const QUESTION_COUNT = 10;
const MAX_RECENT_QUESTIONS = 40;
const MAX_RECENT_QUESTION_LEN = 300;

const LANG_NAMES = { en: 'English', hi: 'Hindi (Devanagari script)', te: 'Telugu (Telugu script)' };

function sanitizeRecentQuestions(input) {
  if (!Array.isArray(input)) return [];
  return input
    .filter((q) => typeof q === 'string' && q.trim())
    .map((q) => q.trim().slice(0, MAX_RECENT_QUESTION_LEN))
    .slice(-MAX_RECENT_QUESTIONS);
}

function buildPrompt(lang, recentQuestions) {
  const languageName = LANG_NAMES[lang] || LANG_NAMES.en;

  const avoidBlock = recentQuestions.length
    ? `\n\nThe learner has ALREADY been asked these exact questions in previous attempts — this is critical for their learning, since seeing the same question again teaches them nothing new:\n${recentQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}\n\nDo NOT reuse any of the above, and do NOT write a thin rephrasing of one of them (e.g. swapping only the name, amount, or app while keeping the same scam mechanic and question structure does NOT count as new). For each topic, pick a genuinely different angle, scenario, or twist than anything above — e.g. a different channel (SMS vs call vs app notification vs in-person), a different victim role (payer vs payee vs bystander), or a different stage of the scam (initial contact vs mid-scam vs after-the-fact red flag).`
    : '';

  return `You are writing a multiple-choice quiz for an Indian digital-payments & cyber-fraud awareness website.

Write exactly ${QUESTION_COUNT} NEW multiple-choice questions in ${languageName}, covering realistic Indian scenarios. Each question must be about ONE of these topics (use the exact topic key given):
- "fraud1": Phishing — fake emails/websites impersonating banks or apps
- "fraud2": Vishing — fake customer care calls asking for OTP/KYC
- "fraud3": Fake QR code fraud (scanning a QR code always means paying, never receiving)
- "fraud4": Online marketplace scams (OLX/Quikr-style buyer/seller UPI PIN scams)
- "fraud5": Screen-sharing remote-access fraud (AnyDesk/TeamViewer scams)
- "fraud6": SIM swap fraud
- "fraud7": Predatory instant loan app fraud
- "fraud8": Ponzi / crypto investment scams
- null: general cyber-crime reporting procedure (e.g. calling the 1930 helpline, cybercrime.gov.in)

Cover EVERY one of the 8 fraud topics (fraud1 through fraud8) exactly once, plus include exactly 2 "null" (general cyber-crime reporting) questions, for a total of ${QUESTION_COUNT} questions. Invent fresh, specific, varied scenarios each time — different names, amounts, apps, and phrasing from anything a generic quiz might reuse. Keep each question realistic and concise (1-3 sentences).${avoidBlock}

Respond with ONLY a raw JSON array (no markdown, no code fences, no commentary) of exactly ${QUESTION_COUNT} objects, each shaped exactly like this:
{"q": "<question text>", "opts": ["<option A>", "<option B>", "<option C>", "<option D>"], "ans": <integer 0-3, index of the correct option>, "topic": "<one of fraud1..fraud8, or null>", "exp": "<one short sentence explanation, starting with a check-mark emoji and the word for 'Correct' in ${languageName}>"}

All question text, options, and explanations must be written in ${languageName}. Return only the JSON array.`;
}

function stripCodeFences(text) {
  return text
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();
}

function validateQuestions(parsed) {
  if (!Array.isArray(parsed) || parsed.length === 0) return null;
  const cleaned = [];
  for (const item of parsed) {
    if (
      !item ||
      typeof item.q !== 'string' ||
      !item.q.trim() ||
      !Array.isArray(item.opts) ||
      item.opts.length !== 4 ||
      !item.opts.every((o) => typeof o === 'string' && o.trim()) ||
      !Number.isInteger(item.ans) ||
      item.ans < 0 ||
      item.ans > 3 ||
      typeof item.exp !== 'string' ||
      !item.exp.trim() ||
      !(item.topic === null || VALID_TOPICS.includes(item.topic))
    ) {
      continue; // skip malformed entries rather than failing the whole batch
    }
    cleaned.push({
      q: item.q.trim(),
      opts: item.opts.map((o) => o.trim()),
      ans: item.ans,
      topic: item.topic,
      exp: item.exp.trim(),
    });
  }
  return cleaned.length ? cleaned : null;
}

module.exports = async (req, res) => {
  // Accept POST (preferred — carries recentQuestions in the body) and GET
  // (backward-compatible, ?lang=en, no dedup) so nothing breaks if some
  // caller still hits this with a plain GET.
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.method === 'POST' ? req.body || {} : {};
  const langInput = body.lang || req.query.lang;
  const lang = ['en', 'hi', 'te'].includes(langInput) ? langInput : 'en';
  const recentQuestions = sanitizeRecentQuestions(body.recentQuestions);

  if (!GEMINI_API_KEY) {
    // Not configured — tell the frontend to use its built-in fallback bank.
    return res.status(200).json({ questions: null, source: 'not_configured' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: buildPrompt(lang, recentQuestions) }] }],
          generationConfig: {
            temperature: 1,
            maxOutputTokens: 3000,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      console.error('quiz generate: Gemini API error —', response.status, errText.slice(0, 300));
      // status + a truncated detail message included so you can self-diagnose
      // from the browser/Network tab without needing Vercel log access —
      // e.g. 400 = bad API key or malformed request, 403 = key restricted/
      // API not enabled, 429 = free-tier rate limit hit.
      return res.status(200).json({ questions: null, source: 'ai_error', status: response.status, detail: errText.slice(0, 300) });
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || '';
    const jsonText = stripCodeFences(rawText);

    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch (parseErr) {
      console.error('quiz generate: failed to parse AI response as JSON —', parseErr.message);
      return res.status(200).json({ questions: null, source: 'parse_error' });
    }

    const questions = validateQuestions(parsed);
    if (!questions) {
      console.error('quiz generate: AI response failed validation');
      return res.status(200).json({ questions: null, source: 'validation_error' });
    }

    return res.status(200).json({ questions, source: 'ai' });
  } catch (err) {
    console.error('quiz generate error:', err.message);
    return res.status(200).json({ questions: null, source: 'exception' });
  }
};
