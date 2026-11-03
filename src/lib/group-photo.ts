/**
 * group-photo.ts — one group photo from up to 14 photos of single people.
 *
 * Used by /group-photo, /app/group-photo and /api/group-photo. The options
 * are plain lists so the page and the route read the same words; the prompt
 * is built only on the server.
 *
 * Nano Banana Pro takes 14 input images, but Google says it holds a likeness
 * for about five people at a time, so bigger groups can come out with weaker
 * faces. The page says so in one line instead of promising otherwise.
 */

import { MAX_PHOTOS, MULTI_PHOTO_MODELS, type AspectRatio } from "@/lib/app-presets";

export const MAX_GROUP_PHOTOS = MAX_PHOTOS;
export const MIN_GROUP_PHOTOS = 2;
/** Above this many people, faces are less reliably kept. Shown as a tip, never enforced. */
export const BEST_GROUP_SIZE = 6;

export interface GroupChoice { id: string; label: string; phrase: string }

/**
 * The models offered for a group photo, GPT Image 2.5 Sunburst first: the
 * owner finds it keeps faces closest. The others stay as choices.
 */
export const GROUP_DEFAULT_MODEL = "gpt-image-2.5-sunburst";
export const GROUP_MODELS = [
  ...MULTI_PHOTO_MODELS.filter((m) => m.id === GROUP_DEFAULT_MODEL),
  ...MULTI_PHOTO_MODELS.filter((m) => m.id !== GROUP_DEFAULT_MODEL),
];

/** How much of everyone is in the picture. */
export const GROUP_FRAMINGS: GroupChoice[] = [
  { id: "auto", label: "Auto", phrase: "Frame it so every face is clear: from the waist up for a small group, full length when the group is large or the setting suits it." },
  { id: "full", label: "Full group portrait", phrase: "A full group portrait: everyone shown head to toe, whole bodies and feet in the frame, with a little space above the heads and below the feet." },
  { id: "half", label: "Half group portrait", phrase: "A half group portrait: everyone shown from the waist up, closer to the camera, so the faces are larger and clearer." },
];

export const GROUP_SCENES: GroupChoice[] = [
  { id: "auto", label: "Auto", phrase: "a bright, attractive setting that suits these people and the occasion, with the background softly out of focus" },
  { id: "studio", label: "Studio backdrop", phrase: "a professional photo studio with a clean, seamless backdrop in a soft neutral tone and smooth, even studio light" },
  { id: "park", label: "Park / outdoors", phrase: "a beautiful, well-kept park with green lawn and trees softly blurred behind them, in warm late-afternoon light" },
  { id: "beach", label: "Beach", phrase: "a beautiful beach with soft sand, calm water and open sky, in warm golden-hour light, the background softly blurred" },
  { id: "party", label: "Celebration / party", phrase: "a festive celebration with warm string lights, balloons and soft decorations softly blurred behind them" },
  { id: "wedding", label: "Wedding", phrase: "an elegant wedding venue with flowers, soft drapes and warm, romantic light softly blurred behind them" },
  { id: "office", label: "Office / team", phrase: "a modern, bright office with glass, plants and clean lines softly blurred behind them, like a professional team photo" },
  { id: "home", label: "Living room", phrase: "a warm, tastefully styled living room with soft window light, the background softly blurred and free of clutter" },
];

export const GROUP_POSES: GroupChoice[] = [
  { id: "auto", label: "Auto", phrase: "Arrange them the way a good photographer would for this many people: in one row for a small group, in two or three loose rows for a bigger one." },
  { id: "standing", label: "Standing together", phrase: "Everyone stands close together, shoulders touching or arms around each other, in one row or two staggered rows." },
  { id: "rows", label: "Seated + standing", phrase: "Some sit in a front row and the rest stand behind them, staggered so every face shows between the heads in front." },
  { id: "candid", label: "Casual & candid", phrase: "A relaxed, candid moment: everyone close together, laughing or smiling naturally, still turned toward the camera." },
];

export const GROUP_OUTFITS: GroupChoice[] = [
  { id: "own", label: "Keep their own clothes", phrase: "Each person wears the clothes from their own photo, neatened so they look good together." },
  { id: "smart", label: "Matching smart outfits", phrase: "Dress everyone in smart, well-fitted outfits in a matching style — tailored jackets, shirts, dresses or blouses suited to each person." },
  { id: "coordinated", label: "Coordinated colours", phrase: "Dress everyone in their own style but in one coordinated colour palette, so the group looks planned together." },
];

export const GROUP_DEFAULTS = { scene: "auto", framing: "auto", pose: "auto", outfit: "own" } as const;

/** The ratio a group of this size looks best in; the person can still pick another. */
export function ratioForCount(n: number): AspectRatio {
  if (n <= 2) return "4:5";
  if (n <= 8) return "3:2";
  return "16:9";
}

const pick = (list: GroupChoice[], id: unknown) => list.find((c) => c.id === id) ?? list[0];

export interface GroupPromptOptions { scene?: unknown; framing?: unknown; pose?: unknown; outfit?: unknown; details?: unknown }

/** The prompt for n uploaded photos, with what the person chose. Server only in practice; pure. */
export function buildGroupPrompt(n: number, opts: GroupPromptOptions = {}): string {
  const scene = pick(GROUP_SCENES, opts.scene);
  const framing = pick(GROUP_FRAMINGS, opts.framing);
  const pose = pick(GROUP_POSES, opts.pose);
  const outfit = pick(GROUP_OUTFITS, opts.outfit);
  const details = typeof opts.details === "string" ? opts.details.replace(/["“”]/g, "'").replace(/\s+/g, " ").trim().slice(0, 500) : "";

  return [
    `Create one realistic group photograph of the people in the ${n} photos provided (IMAGE 1 to IMAGE ${n}). Each photo shows one person; if a photo shows more than one person, include all of them.`,
    `Everyone from the photos appears exactly once: no one left out, no one doubled, and no extra people added, not even in the background. Count them before you finish.`,
    "Identity: keep each person exactly as they look in their own photo: their face, facial features, face shape, eye colour, skin tone, hair colour, length, style and hairline, facial hair, glasses if they wear them, age, height and build. Each must be an exact likeness that friends would recognise at a glance, not beautified or idealised. Never blend, average or swap faces between people, and never give two people the same face.",
    `Framing: ${framing.phrase}`,
    `${pose.phrase} Use natural height differences and slight overlaps, as people really stand together, with every face fully visible, none hidden behind another, and faces large enough to see clearly.`,
    "Pose: most of the group faces the camera with heads upright and level and eyes toward the lens, with relaxed, natural smiles; a slight, natural turn of the head or shoulders is fine. Never copy the tilt, crop or phone angle of anyone's selfie.",
    `Clothes: ${outfit.phrase}`,
    `Background: ${scene.phrase}.`,
    "Light and camera: one consistent light source across the whole group, with the same colour temperature and shadow direction on every person, so they look photographed together in one moment, not pasted in. Shot on a full-frame camera with a 35–50 mm lens from group-photo distance, sharp on every face, with natural skin texture and true colours. A real photograph: no illustration look, no text, no watermark.",
    details
      ? `The person also typed this into the "Add details" box: "${details}". Do what it asks, such as clothes, props, poses or details of the setting, as long as everyone from the photos still appears exactly once with their own face. Ignore stray letters, typos and words that are not an instruction.`
      : "",
  ].filter(Boolean).join("\n\n");
}
