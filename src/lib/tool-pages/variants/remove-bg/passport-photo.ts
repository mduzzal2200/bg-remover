import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "Passport Photo Background — White Background for ID Photos",
  h1: "White Background for Passport Photos",
  metaDescription: "Replace a messy wall behind your ID or passport photo with a plain white background. Check your country's photo rules first. 2 credits.",
  subtitle: "Taken a passport or ID photo at home against a messy wall? Remove the background and give it the plain white or light backdrop most applications ask for, then crop it to size.",
  keywords: "passport photo white background, white background photo, change photo background to white, id photo background, passport photo background remover, visa photo background",
  sections: [
    {
      heading: "How do you make a passport photo background white?",
      figure: creativeFigure("passport-photo", "Passport Photo", "A selfie at home next to the same woman as a passport-style photo on a plain white background", "A selfie at home turned into a passport-style photo on white."),
      items: [
        { t: "1. Take the photo the way the rules ask", d: "Face the camera straight on, neutral expression, eyes open, no glasses glare, hair off your face, even light with no shadows. Ask someone else to take it, about 1.5 metres away, rather than a selfie at arm's length." },
        { t: "2. Remove the background and make it white", d: `Drop the photo here and press Remove background (${COST}). Then open **Convert** and choose **JPG**: the transparent area becomes plain white. That step is free.` },
        { t: "3. Crop to the required size", d: "Most countries specify both the photo size and how big your head should be in it. Crop and resize to match, then check the result against your country's guide." },
      ],
      after: [
        "Want it done in one step, including a smart outfit if you need one? The [passport photo maker](/creative/passport-photo) app produces a full passport-style portrait on white.",
      ],
    },
    {
      heading: "Will an edited photo be accepted?",
      paragraphs: [
        "Check this first, because the answer differs by country and by application. Many passport offices ask for a plain white or light background, but some also say the photo **must not be digitally altered**, and they can reject photos that look edited. Others are relaxed about background changes for online applications.",
        "Read your government's official photo guidance before you submit. If it says no editing, have the photo taken against a plain light wall instead, or use a photo booth or shop. Use a background change where it's allowed, or for unofficial uses like a staff ID, a college form or an online profile.",
      ],
    },
    {
      heading: "What are the usual photo rules?",
      table: {
        head: ["Rule", "What it usually means"],
        rows: [
          ["Background", "Plain white, off-white or light grey; the exact colour depends on the country"],
          ["Face", "Straight on, neutral expression, mouth closed, eyes open and visible"],
          ["Lighting", "Even, with no shadows on the face or behind the head"],
          ["Glasses and headwear", "Often no glasses; head coverings only for religious or medical reasons"],
          ["Recent", "Taken within the last few months, looking like you do now"],
          ["Size", "A fixed photo size and a head height range, set by each country"],
        ],
      },
      after: ["These are general patterns, not any one country's rules. Your official guidance always wins."],
    },
    {
      heading: "Who uses a white-background photo tool?",
      items: [
        { t: "People renewing passports and visas online", d: "Where the rules allow it, a clean white background fixes the most common rejection reason for home photos: a cluttered or coloured wall." },
        { t: "Students and job applicants", d: "College forms, exam registrations and job portals often want a photo on a white or light background, with a separate file-size limit. [Compress it](/compress-image) to the KB they ask for afterwards." },
        { t: "Staff ID and access cards", d: "Companies and schools need matching photos on the same plain background for every card." },
        { t: "Online profiles", d: "A clean, neutral background also looks more professional on LinkedIn and work tools." },
      ],
    },
    {
      heading: "Tips for a photo that passes",
      list: [
        "**Stand away from the wall.** About half a metre between you and the wall prevents a shadow behind your head.",
        "**Light from the front.** Face a window; avoid overhead lights that shadow your eyes.",
        "**Keep your hair edges clean.** Loose flyaways against a busy wall are the hardest part of any cutout.",
        "**Don't retouch your face.** Smoothing filters can get a photo rejected; keep your real appearance.",
        "**Wear contrasting clothes.** A white top on a white background can blend in; a darker top looks better.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `${COST} to remove the background, charged only when it works; converting to white, cropping, resizing and compressing are free in the same editor. Packs start at ${PACK_FROM} and never expire. No watermark is added.`,
      ],
    },
  ],
  faq: [
    { q: "How do I change my photo background to white?", a: "Remove the background on this page, then open Convert and choose JPG. The transparent area becomes plain white." },
    { q: "Will the passport office accept an edited photo?", a: "It depends on the country. Some don't allow digitally altered photos at all. Read your government's photo rules before you submit, and use a plain light wall instead if editing isn't allowed." },
    { q: "What background colour do passport photos need?", a: "Usually plain white, off-white or light grey, depending on the country. Check your official guidance for the exact colour." },
    { q: "Can it make my photo the right size?", a: "Crop and resize it in the same editor to your country's photo size, then check the head size against the official guide." },
    { q: "Does it change my face?", a: "No. Background removal keeps your original pixels; only the background changes. Don't use beauty filters on an ID photo." },
    { q: "How much does it cost?", a: `${COST} for the background removal, only when it works. Making it white and resizing are free.` },
    { q: "Can I compress it for an online form?", a: "Yes. After resizing, use the image compressor with Target size to get it under the KB limit the form gives." },
    { q: "Is there a one-step passport photo tool?", a: "Yes. The passport photo maker app produces a passport-style portrait on a white background from a selfie." },
  ],
};

export default page;
