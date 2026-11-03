import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "Corporate Headshots — Matching Team Headshots From Selfies",
  h1: "Corporate Headshot Generator",
  metaDescription: "Give your whole team matching corporate headshots from their own selfies: the same style, light and background colour, without booking a shoot.",
  subtitle: "Matching professional headshots for your whole team, made from each person's own selfie: the same style, the same light, the same background colour. No studio day, no one left out.",
  keywords: "corporate headshots, team headshots, company headshots, business headshot generator, corporate headshot ai, staff photos, matching team photos, professional team photos",
  ctaText: "Make corporate headshots",
  sections: [
    {
      heading: "How do you make matching headshots for a team?",
      figure: creativeFigure("corporate-avatar", "Corporate Avatar", "A casual photo of a man in a grey T-shirt next to the same man in a navy blazer and light blue shirt on a soft blue-grey backdrop", "A casual photo turned into a corporate headshot."),
      items: [
        { t: "1. Choose one style and one background colour", d: "Decide the house look first: for example Navy Blazer Office for women and Charcoal Office for men, on a light grey background. Write it down so everyone gets the same." },
        { t: "2. Collect a clear selfie from each person", d: "Send everyone the same simple brief: face a window, eye level, plain top, no filters, only you in the photo. Consistent input gives consistent results." },
        { t: "3. Generate and set the same background", d: `Make each person's headshot in the agreed style (${COST} each), then give every one the same background colour (${COST} each). Download them and they sit together like one shoot.` },
      ],
    },
    {
      heading: "Why do team photos need to match?",
      paragraphs: [
        "A team page where one person is in a studio, one at a wedding and one in a car looks unfinished, however good each photo is. Matching style, lighting and background make the team look organised and make the page about the people, not the photos. The same goes for an email directory, a pitch deck's team slide, conference badges and the \"meet the team\" section of a proposal.",
      ],
      table: {
        head: ["Keep the same", "Why"],
        rows: [
          ["Style", "Similar outfits and framing make faces line up"],
          ["Background colour", "The biggest single thing that makes photos look like a set"],
          ["Crop", "Head and shoulders, the same distance from the top of the frame"],
          ["File size", "Export at one size so the page grid stays tidy"],
        ],
      },
    },
    {
      heading: "Who uses AI corporate headshots?",
      items: [
        { t: "Remote and hybrid teams", d: "When people work in different cities or countries, a shared shoot isn't practical. Everyone sends a selfie; the results match anyway." },
        { t: "Growing startups", d: "New hires join every month. Instead of waiting for the next photographer visit, give each new person a headshot in the house style on their first day." },
        { t: "Agencies, law firms and consultancies", d: "Client-facing teams appear in proposals and on the website. Consistent headshots signal a consistent firm." },
        { t: "Event and conference organisers", d: "Speaker photos arrive in every shape and quality. Generate matching headshots from the speakers' own photos, with their consent, for the programme and slides." },
      ],
    },
    {
      heading: "What about consent and accuracy?",
      paragraphs: [
        "Only make headshots of people who have agreed, using a photo they gave you for the purpose. Let each person see and approve their result before it's published, and offer a retake if they don't like it. The generator keeps each person's real features (face, skin tone, hair, glasses, age), so the results are honest portraits, not idealised ones.",
      ],
    },
    {
      heading: "Tips for a consistent set",
      list: [
        "**Send everyone the same photo brief** with one example selfie.",
        "**Pick neutral styles** that suit everyone; a single bold outfit choice rarely works for a whole team.",
        "**Use a mid-tone background** (light grey, soft blue). Pure white can wash out lighter skin tones and very dark backgrounds can lose dark hair.",
        "**Batch the work**: do everyone's style first, then all the background changes, so the colour is set once.",
        "**Keep a shared folder** of the finals and the brief, for new joiners.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `${COST} per person per style, plus ${COST} for each background change. For a team of ten with one style and a shared background colour, that's 40 credits. Packs start at ${PACK_FROM} and never expire; monthly plans give a better rate for larger teams. No watermark is added. See the main [AI headshot generator](/ai-headshot) or [LinkedIn headshot](/ai-headshot/linkedin) for individual use.`,
      ],
    },
  ],
  faq: [
    { q: "How do I get matching headshots for my team?", a: "Agree one style and one background colour, collect a clear selfie from each person, generate each headshot in that style, then set the same background on all of them." },
    { q: "Does everyone need to be in the same place?", a: "No. Each person sends their own selfie from wherever they are, and the results still match." },
    { q: "How much does it cost for a team?", a: `${COST} per person per style, plus ${COST} per background change. A team of ten with one style and one background colour uses 40 credits.` },
    { q: "Can we use our brand colour as the background?", a: "Yes. Pick a custom colour when you change the background, and use the same one for everyone." },
    { q: "Will the headshots look like each person?", a: "Yes. Each keeps the person's face, skin tone, hair, glasses and age, and changes the outfit, light and background." },
    { q: "Do we need everyone's permission?", a: "Yes. Only make headshots of people who've agreed, from photos they gave you, and let them approve the result." },
    { q: "Can I do several people at once?", a: "Each headshot is made from one person's photo, so you run them one person at a time." },
    { q: "Is there a watermark?", a: "No. Downloads have no watermark." },
  ],
};

export default page;
