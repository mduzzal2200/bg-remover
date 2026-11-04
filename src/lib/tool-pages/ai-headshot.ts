import type { ToolPage } from "./types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "AI Headshot Generator — Professional Headshots From a Selfie",
  h1: "AI Headshot Generator",
  metaDescription: "Turn one clear selfie into professional headshots for LinkedIn, CVs and team pages. 11 styles each for women and men, then change the background.",
  subtitle: "Upload one clear selfie, pick the styles you like, and get studio-quality professional headshots that still look like you. Then change the background colour to match your profile or company.",
  keywords: "ai headshot generator, professional headshot, linkedin headshot, ai headshot, corporate headshot, headshot from selfie, business headshot, professional photo from selfie",
  ctaText: "Make my headshots",
  alt: { hero: "A casual selfie against a bedroom wall next to the same person as a corporate headshot in a charcoal suit on a grey backdrop" },
  sections: [
    {
      heading: "How do you make a professional headshot from a selfie?",
      items: [
        { t: "1. Upload one clear photo of yourself", d: "A selfie or a phone photo is fine, as long as your face is clear, well lit and roughly facing the camera. No sunglasses, no heavy filters, and only you in the frame." },
        { t: "2. Choose your styles", d: "Pick Women or Men, then choose one or more of the 11 styles: suits, blazers, smart-casual, office, city and outdoor settings, each with its own lighting. Each style you choose makes one headshot." },
        { t: "3. Review, adjust and download", d: "Each style takes a minute or two, so keep the tab open. Then open any headshot to preview it, change its background to one of 12 preset colours, a custom colour or your own background image, and download the one you like." },
      ],
    },
    {
      heading: "Which headshot styles can you choose?",
      paragraphs: [
        "The styles are written to cover the situations people actually need a headshot for, from a bank's staff page to a designer's portfolio. Pick two or three that suit your field rather than all of them.",
      ],
      items: [
        { t: "Corporate and executive", d: "Dark suits and blazers, office or neutral studio backdrops, even and confident light. Styles such as Charcoal Office, Navy Urban, Navy Blazer Office and Navy Executive Power suit finance, law, consulting and senior roles." },
        { t: "Modern professional", d: "Lighter suits and blazers with a city or bright office behind, such as Light Blue Suit, Brown City View, Green Blazer Classic and Light Blue Power Suit. Good for tech, sales, marketing and most LinkedIn profiles." },
        { t: "Approachable and smart-casual", d: "Softer outfits and outdoor light, like Plaid Smart-Casual, Beige Outdoor and Tan Suit Outdoor. Right for coaches, healthcare, education, real estate and anyone whose clients need to feel at ease." },
        { t: "Plain portrait", d: "A clean, evenly lit portrait on a light background, such as Light Gray Portrait or Grey + Sky Blue, which works almost anywhere, including speaker bios and ID-style staff photos." },
      ],
    },
    {
      heading: "Who uses an AI headshot generator?",
      items: [
        { t: "Job seekers", d: "A clear, professional photo makes a LinkedIn profile look complete and trustworthy to recruiters. If you don't have a recent one, this is the quickest way to get one that fits the jobs you're applying for. See [LinkedIn headshot](/ai-headshot/linkedin) for platform tips." },
        { t: "Teams and small companies", d: "A team page where every photo was taken in a different place looks messy. Give everyone the same style and the same background colour and the page looks like one shoot. [Corporate headshots](/ai-headshot/corporate) covers doing it for a whole team." },
        { t: "Freelancers and consultants", d: "Your photo sits on your website, proposals, Upwork or Fiverr profile and email signature. A consistent, friendly professional headshot across all of them helps people remember you." },
        { t: "Speakers, authors and founders", d: "Conference programmes, book jackets, press kits and podcast pages all ask for a headshot, often at short notice. Generate a few styles and keep a formal and a relaxed version ready." },
      ],
    },
    {
      heading: "Will it still look like you?",
      paragraphs: [
        "That's the whole point, and it's what the generator is told first. Each style keeps your face shape, features, skin tone, hairline, facial hair, glasses if you wear them, and your age, and changes the clothes, background, lighting and camera. Your head is turned to face the camera and straightened even if your selfie was taken at an angle, so the result looks like a proper portrait rather than an arm's-length snapshot.",
        "The photo you upload matters more than anything else. A sharp, front-facing photo in daylight gives the closest likeness. A dark, blurry or heavily filtered selfie gives the AI less to go on, and the result can drift. If one style doesn't look like you, try it again or upload a better photo; don't settle.",
      ],
    },
    {
      heading: "How much does an AI headshot cost?",
      paragraphs: [
        `Each style costs **${COST}**, so choosing three styles uses 6 credits. Changing the background of a finished headshot is ${COST} as well. Credits come from a one-time pack (from ${PACK_FROM}; pack credits never expire) or a monthly plan. You need a free account, and there's no watermark on any headshot you download.`,
        "For a sense of scale: a photographer's headshot session usually costs far more and takes an appointment. AI headshots are not a replacement for a great photographer when you need one, but for a profile photo this week, they're hard to beat.",
      ],
    },
    {
      heading: "AI headshot or a photographer?",
      table: {
        head: ["", "AI headshot", "Photographer"],
        rows: [
          ["Time", "A few minutes, from your phone", "Booking, travel and the session"],
          ["Cost", `${COST} per style`, "Usually a session fee, often much more"],
          ["Choice", "Try 11 styles and many backgrounds", "What you shoot on the day"],
          ["Likeness", "Very close from a good selfie; check every result", "Exactly you"],
          ["Best for", "LinkedIn, CVs, team pages, quick bios", "Press, book covers, brand campaigns"],
        ],
      },
    },
    {
      heading: "How do you take the right selfie for it?",
      list: [
        "**Face a window.** Soft daylight from the front is the best free light there is. Avoid a bright window behind you.",
        "**Hold the phone at eye level**, an arm's length away, or ask someone to take it from about two metres.",
        "**Keep a neutral or slight smile**, eyes open, and your face fully visible: hair off the eyes, no hat, no sunglasses.",
        "**Turn off beauty filters and portrait blur.** The AI needs your real features to keep them.",
        "**Use a recent photo.** If you've changed your hair or grown a beard, the headshot should show that too.",
      ],
    },
    {
      heading: "What can't AI headshots do?",
      list: [
        "Make an official ID, passport or visa photo. Those have strict rules and usually must be unedited; use the [passport photo maker](/creative/passport-photo) and check your country's rules.",
        "Generate several people at once. It makes headshots of one person from one photo; run each team member separately.",
        "Copy a specific outfit you describe. The styles are fixed; for a particular jacket or dress, use the [AI photo editor](/ai-editor) on your headshot afterwards.",
        "Guarantee every result. Small details like earrings, glasses frames or a collar can come out differently. Pick the best and regenerate the rest.",
      ],
    },
    {
      heading: "What happens to your photo?",
      paragraphs: [
        "Your selfie is uploaded so the AI can use it, and the headshots are made by models run on fal.ai. Finished headshots are saved in your library so you can download them again, and you can delete them at any time. Your photos aren't used to train AI models and aren't sold. Details in the [privacy policy](/privacy).",
      ],
    },
  ],
  faq: [
    { q: "How does the AI headshot generator work?", a: "Upload one clear photo of yourself, choose Women or Men and one or more styles, and press Generate. Each style makes one professional headshot in a minute or two. You can then change its background and download it." },
    { q: "How much does it cost?", a: `${COST} per style, and ${COST} to change the background of a headshot. Packs start at ${PACK_FROM} and their credits never expire. There's no watermark.` },
    { q: "How many photos do I need to upload?", a: "Just one. A clear, well-lit, front-facing photo with only you in it gives the best likeness." },
    { q: "Will the headshot look like me?", a: "It keeps your face, features, skin tone, hair, glasses and age, and changes the outfit, background and light. A sharp photo in good light gives the closest result; if one doesn't look right, regenerate it." },
    { q: "Can I use it for LinkedIn?", a: "Yes, that's the most common use. Pick a corporate or modern professional style and a plain or office background." },
    { q: "Can I change the background colour?", a: "Yes. Open a headshot and choose one of 12 preset colours, a custom colour, or upload your own background image." },
    { q: "Can I make headshots for my whole team?", a: "Yes, one person at a time. Use the same style and background colour for everyone so the team page looks like one shoot." },
    { q: "Can I use it for a passport photo?", a: "No. Official ID photos have strict rules and usually must be unedited. Use the passport photo maker and check your country's requirements." },
    { q: "How long does it take?", a: "About one to two minutes per style. Keep the tab open while they generate." },
  ],
};

export default page;
