import { FESTIVALS } from "@/lib/festivals";
import { AFRICA } from "./africa";
import { AMERICAS } from "./americas";
import { EAST_ASIA } from "./east-asia";
import { EUROPE } from "./europe";
import { MIDDLE_EAST } from "./middle-east";
import { SOUTH_ASIA } from "./south-asia";
import { SOUTHEAST_ASIA } from "./southeast-asia";
import type { FestivalGuide } from "./types";

export type { FestivalGuide } from "./types";

/** Every festival page's written guide, keyed by festival slug. */
export const FESTIVAL_GUIDES: Record<string, FestivalGuide> = {
  ...SOUTH_ASIA,
  ...MIDDLE_EAST,
  ...EAST_ASIA,
  ...SOUTHEAST_ASIA,
  ...EUROPE,
  ...AMERICAS,
  ...AFRICA,
};

const missing = FESTIVALS.filter((f) => !FESTIVAL_GUIDES[f.slug]).map((f) => f.slug);
if (missing.length) throw new Error(`Festival guides missing for: ${missing.join(", ")}`);

export const festivalGuide = (slug: string): FestivalGuide | undefined => FESTIVAL_GUIDES[slug];
