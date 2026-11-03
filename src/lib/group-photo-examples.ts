/**
 * group-photo-examples.ts — the examples on /group-photo.
 *
 * Each one is made by the Group Photo tool itself: the same prompt
 * (buildGroupPrompt) run over separate single-person photos, so the page
 * shows what the tool really does. The single photos are ordinary
 * phone-style portraits made once by the image generator's "sources" set;
 * the group photos by its "group" set:
 *
 *   /api/admin/generate-images?token=...&set=sources&run=1   the single photos
 *   /api/admin/generate-images?token=...&set=group&run=1     the group photos
 *
 * Until a group photo exists, the page draws that example as an
 * illustration instead, so nothing ever shows a broken image.
 */

import { ratioForCount } from "@/lib/group-photo";
import type { AspectRatio } from "@/lib/app-presets";

export interface GroupExamplePerson {
  /** Source photo name in landing/sources/<name>.png. */
  source: string;
  /** Who they are, for the caption and alt text. */
  label: string;
  /** What the source photo shows; becomes its generation prompt. */
  prompt: string;
  /** For the drawn stand-in only: skin and hair colour, and long or short hair. */
  look: { skin: string; hair: string; long: boolean };
}

export interface GroupExample {
  id: string;
  /** Chip label, e.g. "Family". */
  title: string;
  /** One line under the showcase. */
  caption: string;
  scene: string;
  pose: string;
  outfit: string;
  details?: string;
  people: GroupExamplePerson[];
  /** Hues for the illustrated stand-in, one per person. */
  hues: number[];
}

const PHONE = "An ordinary, unstyled smartphone portrait from the chest up, front-facing, whole face clearly visible, natural expression, flat everyday light. It must look like a real everyday phone photo: slightly soft, not retouched, no filters.";

export const GROUP_EXAMPLES: GroupExample[] = [
  {
    id: "family",
    title: "Family",
    caption: "Four photos taken in four different homes, turned into one family photo in the park.",
    scene: "park",
    pose: "standing",
    outfit: "coordinated",
    people: [
      { source: "solo-grandma", label: "Grandma", prompt: `A South Asian woman in her late sixties with grey hair tied back, in a simple cardigan, standing in her kitchen. ${PHONE}`, look: { skin: "#C98E64", hair: "#BFB5AA", long: false } },
      { source: "solo-dad", label: "Dad", prompt: `A South Asian man in his early forties with short black hair and a trimmed beard, in a plain polo shirt, in a home office. ${PHONE}`, look: { skin: "#A86F4C", hair: "#151515", long: false } },
      { source: "solo-mum", label: "Mum", prompt: `A South Asian woman in her late thirties with long dark hair, in a plain kurta top, by a window in a living room. ${PHONE}`, look: { skin: "#C98E64", hair: "#2B1D14", long: true } },
      { source: "solo-daughter", label: "Daughter", prompt: `A South Asian young woman of about twenty with shoulder-length hair, in a hoodie, in a university dorm room. ${PHONE}`, look: { skin: "#C98E64", hair: "#2B1D14", long: true } },
    ],
    hues: [28, 210, 330, 160],
  },
  {
    id: "friends",
    title: "Friends",
    caption: "Five friends in five different cities, together on one beach at sunset.",
    scene: "beach",
    pose: "candid",
    outfit: "own",
    people: [
      { source: "solo-friend-1", label: "Maya", prompt: `A Latina woman in her late twenties with curly brown hair, in a denim jacket, on a city balcony. ${PHONE}`, look: { skin: "#E3B08A", hair: "#4A3324", long: true } },
      { source: "solo-friend-2", label: "Kofi", prompt: `A Black man in his late twenties with short twists, in a plain white t-shirt, in a bright kitchen. ${PHONE}`, look: { skin: "#7A4E33", hair: "#151515", long: false } },
      { source: "solo-friend-3", label: "Lena", prompt: `A white woman in her late twenties with straight blonde hair, in a striped top, in a café. ${PHONE}`, look: { skin: "#F1C9A5", hair: "#D8B25A", long: true } },
      { source: "solo-friend-4", label: "Arjun", prompt: `A South Asian man in his late twenties with wavy hair and glasses, in a green sweatshirt, at his desk. ${PHONE}`, look: { skin: "#A86F4C", hair: "#151515", long: false } },
      { source: "solo-friend-5", label: "Yuki", prompt: `An East Asian woman in her late twenties with a short bob, in a plain beige blouse, in a hallway. ${PHONE}`, look: { skin: "#F1C9A5", hair: "#151515", long: true } },
    ],
    hues: [12, 265, 48, 140, 190],
  },
  {
    id: "team",
    title: "Team",
    caption: "Six remote colleagues, six webcam-style photos, one team photo for the About page.",
    scene: "office",
    pose: "rows",
    outfit: "smart",
    people: [
      { source: "solo-team-1", label: "Priya", prompt: `A South Asian woman in her thirties with her hair in a low bun, in a plain blue shirt, at a home desk. ${PHONE}`, look: { skin: "#A86F4C", hair: "#151515", long: true } },
      { source: "solo-team-2", label: "Daniel", prompt: `A white man in his fifties with short grey hair and rimless glasses, in a plain jumper, in a study. ${PHONE}`, look: { skin: "#F1C9A5", hair: "#BFB5AA", long: false } },
      { source: "solo-team-3", label: "Amara", prompt: `A Black woman in her thirties with braided hair, in a plain mustard top, in a living room. ${PHONE}`, look: { skin: "#7A4E33", hair: "#151515", long: true } },
      { source: "solo-team-4", label: "Wei", prompt: `An East Asian man in his thirties with short black hair, in a plain grey t-shirt, in a kitchen. ${PHONE}`, look: { skin: "#E3B08A", hair: "#151515", long: false } },
      { source: "solo-team-5", label: "Omar", prompt: `A Middle Eastern man in his forties with a short beard, in a plain navy shirt, in a home office. ${PHONE}`, look: { skin: "#C98E64", hair: "#2B1D14", long: false } },
      { source: "solo-team-6", label: "Sofia", prompt: `A Latina woman in her twenties with long dark hair, in a plain cream sweater, by a window. ${PHONE}`, look: { skin: "#E3B08A", hair: "#2B1D14", long: true } },
    ],
    hues: [200, 30, 300, 120, 220, 350],
  },
];

/** Public URL of a file in the landing bucket. */
export function landingUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lwworujvfttxkrjfrgav.supabase.co"}/storage/v1/object/public/landing/${path}`;
}

/** Where an example's group photo is stored in the landing bucket. */
export const groupExamplePath = (id: string) => `group-photo/examples/${id}.png`;

export function groupExampleRatio(ex: GroupExample): AspectRatio {
  return ratioForCount(ex.people.length);
}
