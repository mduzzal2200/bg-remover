import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "LinkedIn Headshot Generator — Professional Photo From a Selfie",
  h1: "LinkedIn Headshot Generator",
  metaDescription: "Get a professional LinkedIn profile photo from one selfie: a clean, well-lit headshot in business or smart-casual style. 2 credits per style.",
  subtitle: "Turn one clear selfie into a professional LinkedIn profile photo: well lit, facing the camera, in a business or smart-casual style, on a background that suits your field.",
  keywords: "linkedin headshot, linkedin profile photo, linkedin headshot generator, ai linkedin photo, professional linkedin picture, linkedin photo from selfie, linkedin profile picture",
  ctaText: "Make my LinkedIn headshot",
  sections: [
    {
      heading: "How do you make a LinkedIn headshot from a selfie?",
      figure: creativeFigure("linkedin-headshot", "LinkedIn Headshot", "A casual selfie of a woman with curly hair at home next to the same woman in a black blazer with a softly blurred office behind", "A home selfie turned into a LinkedIn-ready headshot."),
      items: [
        { t: "1. Take one clear selfie", d: "Face a window, hold the phone at eye level, no sunglasses or filters. Only you in the photo." },
        { t: "2. Pick two or three styles", d: `Open the headshot generator, choose Women or Men, and pick styles that suit your industry: a suit for finance or law, a blazer for most offices, smart-casual for tech and creative work. Each style is ${COST}.` },
        { t: "3. Choose the background and upload", d: "Pick your favourite, change its background colour if you like, and download it. In LinkedIn, tap your photo, then Add photo, and crop it so your face sits in the middle of the circle." },
      ],
    },
    {
      heading: "What makes a good LinkedIn profile photo?",
      list: [
        "**Your face is the focus.** Head and shoulders, with your face filling most of the circle; LinkedIn shows it small next to your name.",
        "**You look like you.** Recent, recognisable, with your real hair and glasses. Someone meeting you on a call should know it's you.",
        "**Facing the camera, with a natural expression.** A slight smile reads as approachable.",
        "**Clean, simple background.** A plain colour or a softly blurred office keeps attention on you.",
        "**Dressed for the job you want.** Match what people in your field wear to work, one step smarter.",
      ],
    },
    {
      heading: "Which style suits your industry?",
      table: {
        head: ["Field", "Styles to try", "Background"],
        rows: [
          ["Finance, law, consulting", "Charcoal Office, Navy Blazer Office, Navy Executive Power", "Grey, navy or office"],
          ["Tech, product, marketing", "Light Blue Suit, Brown City View, Green Blazer Classic", "Softly blurred office or city"],
          ["Healthcare, education, coaching", "Beige Outdoor, Plaid Smart-Casual, Tan Suit Outdoor", "Light, warm or outdoor"],
          ["Sales and real estate", "Light Blue Power Suit, Grey + Sky Blue", "Bright, clean colour"],
          ["Creative work", "Smart-casual styles", "A colour from your portfolio"],
        ],
      },
    },
    {
      heading: "Who uses an AI LinkedIn headshot?",
      items: [
        { t: "Job seekers", d: "Recruiters glance at your photo before your headline. A professional photo makes the profile feel complete and current." },
        { t: "People changing careers", d: "Moving from hospitality to tech, or from teaching to corporate training? A headshot styled for the new field helps you look the part." },
        { t: "Freelancers and consultants", d: "Your LinkedIn photo is often a client's first impression. Use the same headshot on your website and proposals for a consistent brand." },
        { t: "Students and graduates", d: "Get a polished photo for internship applications without paying for a studio. Matching a [LinkedIn banner](/creative/linkedin-banner) finishes the profile." },
      ],
    },
    {
      heading: "Is it OK to use an AI headshot on LinkedIn?",
      paragraphs: [
        "Yes, as long as it truly looks like you. LinkedIn's purpose is to help people recognise and trust you, so the photo should match how you look today: your face, your hair, your glasses. Don't use it to look younger, slimmer or like someone else. The generator is built to keep your features exactly, changing only the clothes, light and background, which is the same thing a good photographer does.",
      ],
    },
    {
      heading: "Tips for the best result",
      list: [
        "**Use a sharp, front-facing photo in daylight.** It matters more than any setting.",
        "**Try the same style twice.** Each run is a new take; pick the most natural.",
        "**Keep the background simple**: plain grey, navy or light blue work in almost every industry.",
        "**Update it** when your look changes.",
        "**Want a different look?** The one-tap [professional headshot](/creative/professional-headshot) app is another way to turn a selfie into a portrait.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `${COST} per style, and ${COST} to change a headshot's background. Packs start at ${PACK_FROM}; pack credits never expire. You need a free account. There's no watermark on what you download. More detail on the main [AI headshot generator](/ai-headshot) page.`,
      ],
    },
  ],
  faq: [
    { q: "How do I make a LinkedIn headshot from a selfie?", a: "Upload one clear selfie to the headshot generator, pick two or three professional styles, choose the best result and download it. Then upload it as your LinkedIn photo." },
    { q: "What size is a LinkedIn profile photo?", a: "LinkedIn recommends at least 400 × 400 pixels. The headshots are well above that, so they stay sharp." },
    { q: "Is an AI headshot allowed on LinkedIn?", a: "Yes, as long as it genuinely looks like you. Keep your real features and appearance so people recognise you." },
    { q: "What should I wear in a LinkedIn photo?", a: "What people in your field wear to work, one step smarter. The styles cover suits, blazers and smart-casual looks." },
    { q: "What background is best?", a: "A plain grey, navy or light colour, or a softly blurred office. Simple backgrounds keep attention on your face." },
    { q: "How much does it cost?", a: `${COST} per style, ${COST} for a background change, with no watermark.` },
    { q: "Will it look like me?", a: "It keeps your face, skin tone, hair, glasses and age, and changes the outfit, light and background. A sharp, well-lit selfie gives the closest likeness." },
    { q: "Can I make a matching LinkedIn banner?", a: "Yes. The LinkedIn Banner app makes the wide cover image for the top of your profile." },
  ],
};

export default page;
