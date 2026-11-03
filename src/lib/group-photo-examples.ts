/**
 * group-photo-examples.ts — the drawn stand-ins for /group-photo's examples.
 *
 * The real examples are the owner's own creatives in the "Group Photo"
 * bucket (see group-photo-creatives.server.ts). These illustrations are only
 * shown when that bucket can't be read, so the page never shows a broken
 * image: no photos are claimed, and each one is labelled "Illustration".
 */

export interface IllustratedPerson {
  label: string;
  hue: number;
  skin: string;
  hair: string;
  long: boolean;
}

export interface IllustratedExample {
  id: string;
  title: string;
  caption: string;
  /** Which drawn background to use: park, beach or office. */
  scene: string;
  people: IllustratedPerson[];
}

export const ILLUSTRATED_EXAMPLES: IllustratedExample[] = [
  {
    id: "family",
    title: "Family",
    caption: "Four photos taken in four different homes, turned into one family photo.",
    scene: "park",
    people: [
      { label: "Grandma", hue: 28, skin: "#C98E64", hair: "#BFB5AA", long: false },
      { label: "Dad", hue: 210, skin: "#A86F4C", hair: "#151515", long: false },
      { label: "Mum", hue: 330, skin: "#C98E64", hair: "#2B1D14", long: true },
      { label: "Daughter", hue: 160, skin: "#C98E64", hair: "#2B1D14", long: true },
    ],
  },
  {
    id: "friends",
    title: "Friends",
    caption: "Five friends in five different cities, together in one photo.",
    scene: "beach",
    people: [
      { label: "Maya", hue: 12, skin: "#E3B08A", hair: "#4A3324", long: true },
      { label: "Kofi", hue: 265, skin: "#7A4E33", hair: "#151515", long: false },
      { label: "Lena", hue: 48, skin: "#F1C9A5", hair: "#D8B25A", long: true },
      { label: "Arjun", hue: 140, skin: "#A86F4C", hair: "#151515", long: false },
      { label: "Yuki", hue: 190, skin: "#F1C9A5", hair: "#151515", long: true },
    ],
  },
  {
    id: "team",
    title: "Team",
    caption: "Six remote colleagues, six separate photos, one team photo.",
    scene: "office",
    people: [
      { label: "Priya", hue: 200, skin: "#A86F4C", hair: "#151515", long: true },
      { label: "Daniel", hue: 30, skin: "#F1C9A5", hair: "#BFB5AA", long: false },
      { label: "Amara", hue: 300, skin: "#7A4E33", hair: "#151515", long: true },
      { label: "Wei", hue: 120, skin: "#E3B08A", hair: "#151515", long: false },
      { label: "Omar", hue: 220, skin: "#C98E64", hair: "#2B1D14", long: false },
      { label: "Sofia", hue: 350, skin: "#E3B08A", hair: "#2B1D14", long: true },
    ],
  },
];
