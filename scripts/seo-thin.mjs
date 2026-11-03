#!/usr/bin/env node
/**
 * seo-thin.mjs — how much of each indexed page is its own writing.
 *
 *   npm run seo:thin -- --base http://localhost:3123            # every sitemap URL
 *   npm run seo:thin -- --base http://localhost:3123 --only /remove-bg,/upscale
 *   npm run seo:thin -- --base https://www.sjpt.io --family tool --fail
 *
 * Google's helpful-content systems judge a page by what it adds, not by its
 * length, and a page whose text mostly also appears on other pages adds
 * little. So this counts a page's **own words**: the words inside <main>
 * (nav, header, footer, scripts and styles removed), minus every text block of
 * four or more words that also appears on more than three other pages of the
 * site — the shared upload line, the pricing block, the template FAQ.
 *
 * For each page it reports:
 *   - own words against the target for its family (FAMILIES below);
 *   - the share of its 6-word phrases that also appear on another page of the
 *     same family (a near-copy of a sibling scores high);
 *   - whether every FAQPage answer is also visible on the page;
 *   - headings that are slogans rather than questions ("Key highlights",
 *     "More about …", "Everything you need …");
 *   - one H1, title ≤ 60 characters, meta description ≤ 155.
 *
 * --fail exits 1 when a page in scope misses its target or a check, so a
 * batch of rewritten pages can be held to it.
 */

const args = process.argv.slice(2);
const arg = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};
const BASE = (arg("--base", "http://localhost:3123")).replace(/\/$/, "");
const ONLY = arg("--only", "") ? arg("--only", "").split(",").map((s) => s.trim()).filter(Boolean) : null;
const FAMILY = arg("--family", "");
const FAIL = args.includes("--fail");
const JSON_OUT = args.includes("--json");

/** Word targets (own words). First match wins. */
const FAMILIES = [
  { id: "home", test: (p) => p === "/", min: 0 },
  { id: "tool-variant", test: (p) => /^\/(remove-bg|upscale|ai-editor|ai-headshot)\/[^/]+$/.test(p), min: 800 },
  { id: "format", test: (p) => /^\/(crop|convert|compress)\/[^/]+$/.test(p), min: 800 },
  { id: "tool", test: (p) => /^\/(remove-bg|upscale|ai-editor|ai-headshot|resize-image|compress-image|crop-image|convert-image|rotate-image|watermark-image|image-to-pdf|meme-generator|blur-image|qr-code-generator|invisible-watermark-remover|tiktok-watermark-remover|watermark-remover|object-remover|group-photo|ai-image-generator)$/.test(p), min: 1000 },
  { id: "festival", test: (p) => /^\/festivals\/[^/]+$/.test(p), min: 900 },
  { id: "app", test: (p) => /^\/creative\/[^/]+$/.test(p), min: 1500 },
  { id: "blog", test: (p) => /^\/blog\/[^/]+$/.test(p), min: 1500 },
  { id: "prompt-category", test: (p) => /^\/prompts\/(image|video)\/[^/]+$/.test(p), min: 700 },
  { id: "hub", test: (p) => /^\/(tools|guides|guides\/[^/]+|pricing|blog|creative|festivals|prompts)$/.test(p), min: 600 },
  { id: "other", test: () => true, min: 0 },
];
const familyOf = (p) => FAMILIES.find((f) => f.test(p));

async function get(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; seo-thin; +https://www.sjpt.io)" }, redirect: "manual" });
      return { status: r.status, text: r.status === 200 ? await r.text() : "" };
    } catch (e) {
      if (i === 2) return { status: 0, text: "" };
    }
  }
}

const decode = (s) => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));

function blocksOf(html) {
  const m = html.match(/<main[^>]*>([\s\S]*)<\/main>/);
  let body = m ? m[1] : html;
  // Cards that repeat other pages' titles and excerpts (blog lists, topic hubs) sit between
  // listing marks (app/_components/ListingMark); a hub is judged on the guide written for it.
  body = body.replace(/<span[^>]*data-seo-listing="start"[^>]*><\/span>[\s\S]*?<span[^>]*data-seo-listing="end"[^>]*><\/span>/g, " ");
  body = body.replace(/<(script|style|nav|footer|header|svg|noscript)[\s\S]*?<\/\1>/g, " ");
  return body.split(/<[^>]+>/).map((b) => decode(b).replace(/\s+/g, " ").trim()).filter(Boolean);
}

const words = (s) => s.split(/\s+/).filter(Boolean);

function shingles(text, n = 6) {
  const w = words(text.toLowerCase().replace(/[^a-z0-9\s]/g, " "));
  const out = new Set();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(" "));
  return out;
}

function checks(html) {
  const issues = [];
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "");
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) issues.push(`${h1} H1s`);
  if (title.length > 60) issues.push(`title ${title.length} chars`);
  if (!desc) issues.push("no meta description");
  else if (desc.length > 155) issues.push(`meta ${desc.length} chars`);
  // Structured data spells the name "PixelShine" (lib/seo/brand) while older copy says "Pixel Shine"; that alone isn't a hidden answer.
  const visible = decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").replace(/Pixel Shine/g, "PixelShine");
  for (const block of html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) || []) {
    try {
      const j = JSON.parse(block.replace(/^<script[^>]*>|<\/script>$/g, ""));
      for (const item of Array.isArray(j) ? j : j["@graph"] || [j]) {
        if (item["@type"] !== "FAQPage") continue;
        const missing = (item.mainEntity || []).filter((q) => !visible.includes(String(q.acceptedAnswer?.text || "").replace(/\s+/g, " ").slice(0, 50)));
        if (missing.length) issues.push(`${missing.length} FAQ answers not visible`);
      }
    } catch { issues.push("JSON-LD does not parse"); }
  }
  const heads = (html.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g) || []).map((h) => decode(h.replace(/<[^>]+>/g, "")).trim());
  const slogans = heads.filter((h) => /^(key highlights|more about|everything you need|built for every|why choose|features)\b/i.test(h));
  if (slogans.length) issues.push(`slogan headings: ${slogans.slice(0, 2).join(" | ")}`);
  return { title, issues };
}

async function sitemapUrls() {
  const idx = await get(`${BASE}/sitemap.xml`);
  const maps = [...idx.text.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const m of maps) {
    const local = m.replace(/^https?:\/\/[^/]+/, BASE);
    const x = await get(local);
    urls.push(...[...x.text.matchAll(/<loc>(.*?)<\/loc>/g)].map((u) => u[1].replace(/^https?:\/\/[^/]+/, "") || "/"));
  }
  return [...new Set(urls)];
}

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}

const paths = await sitemapUrls();
if (!paths.length) { console.error(`No sitemap URLs at ${BASE}/sitemap.xml`); process.exit(2); }
const pages = await pool(paths, 10, async (p) => {
  const r = await get(BASE + p);
  return { path: p, status: r.status, html: r.text, blocks: r.text ? blocksOf(r.text) : [] };
});

// Blocks shared by more than three pages are the site's furniture, not the page's writing.
const freq = new Map();
for (const pg of pages) for (const b of new Set(pg.blocks)) if (words(b).length >= 4) freq.set(b, (freq.get(b) || 0) + 1);
const own = (pg) => pg.blocks.filter((b) => words(b).length < 4 || freq.get(b) <= 3);

// Phrase overlap within a family.
const fam = new Map();
for (const pg of pages) {
  pg.family = familyOf(pg.path);
  pg.ownText = own(pg).join(" ");
  pg.ownWords = words(pg.ownText).length;
  pg.shingles = shingles(pg.ownText);
  if (!fam.has(pg.family.id)) fam.set(pg.family.id, []);
  fam.get(pg.family.id).push(pg);
}
for (const list of fam.values()) {
  const seen = new Map();
  for (const pg of list) for (const s of pg.shingles) seen.set(s, (seen.get(s) || 0) + 1);
  for (const pg of list) {
    let dup = 0;
    for (const s of pg.shingles) if (seen.get(s) > 1) dup++;
    pg.overlap = pg.shingles.size ? dup / pg.shingles.size : 0;
  }
}

const inScope = pages.filter((pg) => (!ONLY || ONLY.includes(pg.path)) && (!FAMILY || pg.family.id === FAMILY));
let failed = 0;
const rows = inScope.map((pg) => {
  const c = pg.html ? checks(pg.html) : { title: "", issues: [`HTTP ${pg.status}`] };
  const problems = [...c.issues];
  if (pg.ownWords < pg.family.min) problems.unshift(`${pg.ownWords} own words < ${pg.family.min}`);
  if (pg.family.min && pg.overlap > 0.15) problems.push(`${Math.round(pg.overlap * 100)}% phrases shared with ${pg.family.id} pages`);
  if (problems.length) failed++;
  return { path: pg.path, family: pg.family.id, ownWords: pg.ownWords, overlap: Math.round(pg.overlap * 100), problems };
});

if (JSON_OUT) {
  console.log(JSON.stringify(rows, null, 1));
} else {
  rows.sort((a, b) => a.family.localeCompare(b.family) || a.ownWords - b.ownWords);
  for (const r of rows) console.log(`${r.problems.length ? "✗" : "✓"} ${String(r.ownWords).padStart(5)} own  ${String(r.overlap).padStart(3)}% shared  ${r.family.padEnd(15)} ${r.path}${r.problems.length ? `  — ${r.problems.join("; ")}` : ""}`);
  console.log(`\n${rows.length} pages checked, ${failed} with problems.`);
}
if (FAIL && failed) process.exit(1);
