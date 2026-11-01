/**
 * festival-article.ts — the words under a festival app on /creative/<slug>.
 *
 * Every other catalogue app gets its category's composed copy
 * (longContentFor), which is written about portraits in general: studio
 * sittings, dating profiles, outfit try-ons. None of that fits a Diwali
 * greeting card or a Songkran background. This writes the page from the
 * festival's own data instead, so it says what the app actually makes, for
 * which festival, and what it won't do.
 *
 * The pages stay noindex (index-policy): the copy is generated from a
 * template, and the festival pages are the ones written for search.
 */

import type { AppItem, AppSection } from "@/lib/app-pages/types";
import { CREDIT_COST } from "@/lib/plans";
import { festivalAppSlug, festivalOfApp, type Festival, type FestivalAppSpec, type FestivalKind } from "@/lib/festivals";

export interface FestivalArticle {
  howToHeading: string;
  howTo: [AppItem, AppItem, AppItem];
  sections: AppSection[];
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "a Diwali …", "an Eid …". */
const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

/** What the app makes, without an article: "Diwali family photo". */
function noun(f: Festival, kind: FestivalKind): string {
  switch (kind) {
    case "portrait": return `${f.name} portrait`;
    case "couple": return `${f.name} couple photo`;
    case "family": return `${f.name} family photo`;
    case "friends": return `${f.name} photo with friends`;
    case "card": return `${f.name} card with your photo`;
    case "scene": return `${f.name} background behind your photo`;
  }
}

const thing = (f: Festival, kind: FestivalKind) => `${article(f.name)} ${noun(f, kind)}`;

function howToHeading(f: Festival, kind: FestivalKind): string {
  if (kind === "portrait") return `How to make ${thing(f, kind)} from a selfie`;
  if (kind === "scene") return `How to put ${thing(f, kind)}`;
  return `How to make ${thing(f, kind)}`;
}

function steps(f: Festival, kind: FestivalKind): [AppItem, AppItem, AppItem] {
  const upload: AppItem =
    kind === "family" || kind === "friends"
      ? { t: "Upload one photo with everyone in it", d: "All faces visible and not too small. A photo of just you works too." }
      : kind === "couple"
        ? { t: "Upload a photo of the two of you", d: "Both faces clear and well lit. A photo of just you works too." }
        : { t: "Upload a clear photo", d: "A well-lit photo with your face unobstructed. JPG, PNG or WEBP." };
  const middle: AppItem =
    kind === "card"
      ? { t: "Choose the words", d: `Keep "${f.style.greeting}", pick No text for a clean card, or type your own words.` }
      : kind === "scene"
        ? { t: "Pick a shape", d: "4:5 for a feed post, 9:16 for a story or status, 1:1 for a profile picture." }
        : { t: "Keep the festive outfit, or describe your own", d: "The app already knows what people wear for " + f.name + ". To wear something else, type it in Describe the outfit." };
  return [
    upload,
    middle,
    { t: "Tap Generate and download", d: `About a minute later it's ready, at full resolution with no watermark. Each image costs ${CREDIT_COST} credits.` },
  ];
}

function whatItMakes(f: Festival, kind: FestivalKind): string[] {
  const s = f.style;
  const scene = `${s.setting}, with ${s.decor}, in ${s.light}`;
  switch (kind) {
    case "portrait":
      return [
        `A waist-up portrait of you dressed for ${f.name}: ${s.attire}. You're placed ${scene}. The colours lean on ${s.palette}.`,
        "Your face, features and skin tone are kept. The clothes, the setting and the light are what change.",
      ];
    case "couple":
      return [
        `A photo of the two of you together for ${f.name}, standing close and relaxed, in ${s.attire}. You're placed ${scene}.`,
        "Both faces are kept as they are. Upload a photo of just one person and you'll be shown on your own in the same scene.",
      ];
    case "family":
      return [
        `Everyone in your photo, together for ${f.name}, in ${s.attire}, with the children dressed to match. You're placed ${scene}.`,
        "The app keeps the same people: it won't add anyone or leave anyone out, and every face stays recognisable.",
      ];
    case "friends":
      return [
        `Your group of friends celebrating ${f.name} together, in ${s.attire}. You're placed ${scene}.`,
        "The app keeps the same people: it won't add anyone or leave anyone out, and every face stays recognisable.",
      ];
    case "card":
      return [
        `The front of a ${f.name} card with you on it: you from the chest up, in ${s.attire}, ${scene}.`,
        `"${s.greeting}" is lettered once, in a calm space at the top or the bottom. You can choose No text instead, or type your own words.`,
      ];
    case "scene":
      return [
        `Your photo exactly as it is (the same face, hair, clothes and pose) with the background replaced by a ${f.name} scene ${s.setting}, with ${s.decor}.`,
        `The light on you is matched to the new scene, ${s.light}, so you don't look pasted in.`,
      ];
  }
}

function tips(f: Festival, kind: FestivalKind): string[] {
  const common = [
    "Use a photo where the face is evenly lit and fills a good part of the frame. Window light is ideal.",
    "Face the camera or turn slightly. Profiles, steep angles and sunglasses make a face harder to keep.",
  ];
  const rerun = "If the first result isn't right, run it again: each run is a new picture.";
  switch (kind) {
    case "portrait":
      return [...common, 'Want a particular colour or outfit? Type it in Describe the outfit, for example "a deep blue outfit with gold details".', "Pick 4:5 for an Instagram post and 9:16 for a story or WhatsApp status.", rerun];
    case "couple":
      return ["Both faces should be visible and about the same size. A photo taken at arm's length works well.", ...common.slice(1), "Type an outfit for one or both of you in Describe the outfit, or leave it to the app.", rerun];
    case "family":
    case "friends":
      return [
        "Everyone's face should be visible. Small faces at the back of a big group come out less like themselves, so crop in closer if you can.",
        "Groups of two to six work best.",
        "Count the people in the result before you share it. If someone is missing or doubled, run it again.",
        ...common.slice(1),
        rerun,
      ];
    case "card":
      return [
        ...common,
        "Check the lettering letter by letter before you send it. Image models sometimes misspell words.",
        "Choose No text if you'd rather add your own text later in another app.",
        "4:5 or 3:4 prints well as a card. 9:16 suits a WhatsApp status.",
      ];
    case "scene":
      return [
        "The clearer the edge around you, the cleaner the result. Hair against a busy background is the hardest part.",
        "Your clothes stay as they are, so a photo of you already dressed up for the day works best.",
        "A photo taken in light that suits the new scene blends in better.",
        rerun,
      ];
  }
}

function ideas(f: Festival, kind: FestivalKind): string[] {
  const share = `Send it to family and friends on ${f.name}, or post it as your WhatsApp status.`;
  switch (kind) {
    case "card":
      return [
        `Send it as your ${f.name} greeting instead of a forwarded image.`,
        "Print it as a postcard or a small photo card.",
        "Make one with No text and add a different message for each person you send it to.",
      ];
    case "scene":
      return [share, `Use it as your profile picture in the days around ${f.name}.`, "Put it at the top of a post about how you celebrated."];
    case "family":
    case "friends":
    case "couple":
      return [share, "Print it for the wall or a frame, at full resolution.", "Use it on the invitation when you host this year."];
    case "portrait":
      return [share, `Use it as your profile picture in the days around ${f.name}.`, "Post it on Instagram or Facebook on the day."];
  }
}

function limits(f: Festival, kind: FestivalKind): string[] {
  const out = [
    "It's a generated picture, not a photo of the day. The clothes, decorations and background are invented, and small details such as jewellery, hands or patterns can come out slightly wrong.",
    "It won't draw deities, prophets or other sacred figures, add religious script, or put a religious head covering or symbol on someone who isn't already wearing one.",
  ];
  if (kind === "family" || kind === "friends") out.push("Very large groups are hard: with more than six or seven people, faces get small and are harder to keep.");
  if (kind === "card") out.push("Lettering can come out misspelled. Check it before you share.");
  if (kind === "scene") out.push("It doesn't change your clothes or pose. For a festive outfit, use the portrait app instead.");
  return out;
}

/** "Also for Diwali: [Diwali Portrait](/creative/diwali-portrait), …" */
function siblings(f: Festival, spec: FestivalAppSpec): string {
  const links = f.apps
    .filter((s) => s !== spec)
    .map((s) => `[${s.name}](/creative/${s.use ?? festivalAppSlug(f, s)})`);
  return `Also for ${f.name}: ${links.join(", ")}. Or see [everything for ${f.name}](/festivals/${f.slug}).`;
}

export function festivalArticle(slug: string): FestivalArticle | undefined {
  const hit = festivalOfApp(slug);
  if (!hit) return undefined;
  const { festival: f, spec } = hit;
  const k = spec.kind;
  return {
    howToHeading: howToHeading(f, k),
    howTo: steps(f, k),
    sections: [
      { heading: `What does ${spec.name} make?`, paragraphs: whatItMakes(f, k) },
      { heading: `What is ${f.name}?`, paragraphs: [f.about[0], cap(f.dateNote)], after: [siblings(f, spec)] },
      { heading: `Tips for a better ${noun(f, k)}`, list: tips(f, k) },
      { heading: "What can you do with it?", list: ideas(f, k) },
      { heading: "What it won't do", list: limits(f, k) },
    ],
  };
}
