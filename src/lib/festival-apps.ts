/**
 * festival-apps.ts — the one-tap apps behind each festival on /festivals.
 *
 * Every festival in festivals.ts has four slots. Each slot that doesn't reuse
 * an existing app becomes a CreativeApp here, so it gets the same app page,
 * workspace, generation route (2 credits) and example-image job as every
 * other app. The prompts come from one template per kind, filled in from the
 * festival's style, so 158 prompts stay consistent and each one still reads
 * like that festival.
 */

import type { CreativeApp } from "@/lib/creative-apps";
import { KEEP_FACE, PHOTOREAL } from "@/lib/app-catalog";
import { CREDIT_COST } from "@/lib/plans";
import { FESTIVALS, festivalAppSlug, type Festival, type FestivalAppSpec } from "@/lib/festivals";

/** Said on every festival app: the pictures celebrate, they never caricature. */
const RESPECT =
  "Show the celebration respectfully and accurately: no caricature or costume stereotypes, no deities, prophets or other sacred figures, no scripture or religious script, and add no religious head covering or symbol the person isn't already wearing.";

function promptFor(f: Festival, spec: FestivalAppSpec): string {
  const s = f.style;
  const scene = `Place them ${s.setting}, with ${s.decor}. Use a palette of ${s.palette} and ${s.light}.`;
  const dress = (who: string) => `Unless an outfit is described below, dress ${who} in ${s.attire}, in whatever suits ${who === "them" ? "them" : "each of them"}.`;
  let base: string;
  switch (spec.kind) {
    case "portrait":
      base = `Restage this as a festive ${f.name} portrait of the person in the photo. ${dress("them")} ${scene} Frame them from the waist up, looking at the camera with a natural, happy expression, the whole face clearly visible.`;
      break;
    case "couple":
      base = `Restage this as a ${f.name} couple photo. If there are two people, show them together as a couple, standing close and relaxed, both faces clearly visible; if there is one person, show them alone in the same scene. ${dress("both")} ${scene} Frame them from the thighs up.`;
      break;
    case "family":
      base = `Restage this as a ${f.name} family photo. Keep every person who is in the photo and keep the same number of people: add no one and remove no one; if there is one person, show them alone in the same scene. Arrange everyone naturally together, all faces clearly visible and looking at the camera. ${dress("everyone")} Dress any children to match. ${scene}`;
      break;
    case "friends":
      base = `Restage this as a ${f.name} group photo of friends celebrating together. Keep every person who is in the photo and keep the same number of people: add no one and remove no one; if there is one person, show them alone in the same scene. Show them laughing and celebrating naturally, all faces clearly visible. ${dress("everyone")} ${scene}`;
      break;
    case "card":
      base = `Turn this into the front of a ${f.name} greeting card: one finished card filling the frame. Show the person from the chest up, dressed in ${s.attire}, in whatever suits them, ${s.setting}, with ${s.decor}, in a palette of ${s.palette} and ${s.light}. Leave a calm, uncluttered area across the top or the bottom. Unless no text or other words are chosen below, letter "${s.greeting}" once in that area in elegant, perfectly legible type, spelled exactly like that. No other words, logos, borders or watermarks.`;
      break;
    case "scene":
      base = `Keep the person exactly as they are in the photo: the same face, hair, clothes, pose, expression and framing. Replace only the background with a ${f.name} scene ${s.setting}, with ${s.decor}, in a palette of ${s.palette}. Match the light on the person to the new scene, ${s.light}, with a clean, natural edge between the person and the background.`;
      break;
  }
  return [base, spec.detail, RESPECT, s.avoid, KEEP_FACE, PHOTOREAL].filter(Boolean).join(" ");
}

function uploadAdvice(spec: FestivalAppSpec): string {
  switch (spec.kind) {
    case "couple":
      return "One photo of the two of you together, both faces clearly visible and well lit. A photo of just you works too: you'll be shown on your own in the same scene.";
    case "family":
    case "friends":
      return "One photo with everyone in it, all faces visible and reasonably large. The app keeps the same people: it won't add anyone or leave anyone out. A photo of just you works too.";
    case "scene":
      return "Any clear photo of you, well lit. Your face, clothes and pose stay exactly as they are; only the background changes.";
    default:
      return "A clear, front-facing photo of one person, well lit, with the face unobstructed. Heavy sunglasses, extreme angles and deep shadows make the face harder to keep.";
  }
}

function faqFor(f: Festival, spec: FestivalAppSpec) {
  const faq = [
    { q: `When is ${f.name}?`, a: f.dateNote },
    { q: "What photo should I upload?", a: uploadAdvice(spec) },
    { q: "How much does it cost?", a: `Each image costs ${CREDIT_COST} credits. Credits come with a monthly plan or a one-time pack, and pack credits never expire.` },
    ...(spec.kind === "scene"
      ? []
      : [{ q: "Will it still look like me?", a: "That is the first thing the app is told: keep your face, features and skin tone exactly, and change only the clothes, setting and light. If a result drifts, run it again — a second try usually lands." }]),
    ...(spec.kind === "card"
      ? [{ q: "Can I change the text on the card?", a: `Yes. Keep "${f.style.greeting}", choose No text for a clean card, or type your own words. Image models sometimes misspell lettering, so check it before you share and run it again if a letter is off.` }]
      : []),
    { q: "Do you watermark the download?", a: "No. Every download is full resolution with nothing added." },
  ];
  return faq;
}

function build(f: Festival, spec: FestivalAppSpec): CreativeApp {
  const slug = festivalAppSlug(f, spec);
  const name = spec.name;
  return {
    slug,
    emoji: spec.emoji,
    gradient: f.gradient,
    title: `${name} — AI ${f.name} Photo | Pixel Shine`,
    metaDescription: `${spec.blurb} Upload a photo and get it in about a minute. ${CREDIT_COST} credits, full resolution, no watermark.`,
    keywords: [name.toLowerCase(), `ai ${name.toLowerCase()}`, `${f.name.toLowerCase()} photo`, `${f.name.toLowerCase()} ai photo`, ...f.aliases.slice(0, 2).map((a) => `${a.toLowerCase()} photo`)].join(", "),
    h1: name,
    tagline: `${spec.blurb} Upload a clear photo, tap Generate, and download the result at full resolution with no watermark.`,
    intro: spec.blurb,
    prompt: promptFor(f, spec),
    badge: `${f.emoji} ${f.name}`,
    faq: faqFor(f, spec),
    cat: "festival",
  };
}

export const FESTIVAL_APPS: CreativeApp[] = FESTIVALS.flatMap((f) =>
  f.apps.filter((spec) => !spec.use).map((spec) => build(f, spec))
);
