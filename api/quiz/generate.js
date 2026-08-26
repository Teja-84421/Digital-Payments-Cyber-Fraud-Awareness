// api/quiz/generate.js
// GET ?lang=en|hi|te -> generates 5 fresh multiple-choice quiz questions
// using Claude, so the quiz is different every attempt instead of a fixed
// static bank. Falls back gracefully (empty body -> frontend uses its own
// static fallback questions) if the AI call fails or isn't configured.

const { VALID_TOPICS } = require('../_lib/topics');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-haiku-4-5-20251001';
const QUESTION_COUNT = 5;

const LANG_NAMES = { en: 'English', hi: 'Hindi (Devanagari script)', te: 'Telugu (Telugu script)' };

function buildPrompt(lang) {
  const languageName = LANG_NAMES[lang] || LANG_NAMES.en;
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

Use each topic at most once across the ${QUESTION_COUNT} questions, and include at least one "null" (reporting) question if possible. Invent fresh, specific, varied scenarios each time — different names, amounts, apps, and phrasing from anything a generic quiz might reuse. Keep each question realistic and concise (1-3 sentences).

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
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const lang = ['en', 'hi', 'te'].includes(req.query.lang) ? req.query.lang : 'en';

  if (!ANTHROPIC_API_KEY) {
    // Not configured — tell the frontend to use its built-in fallback bank.
    return res.status(200).json({ questions: null, source: 'not_configured' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1500,
        temperature: 1,
        messages: [{ role: 'user', content: buildPrompt(lang) }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      console.error('quiz generate: Anthropic API error —', response.status, errText.slice(0, 300));
      return res.status(200).json({ questions: null, source: 'ai_error' });
    }

    const data = await response.json();
    const rawText = (data.content || []).map((block) => block.text || '').join('');
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
