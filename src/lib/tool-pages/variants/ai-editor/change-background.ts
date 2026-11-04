import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "Change Photo Background With AI — Any Scene, Matched Light",
  h1: "Change Photo Background With AI",
  metaDescription: "Put yourself or a product in a new place: a studio, a beach, an office, a city at night. Describe the background and AI relights you to match.",
  subtitle: "Describe a new background (a studio wall, a beach at sunset, a modern office, a city at night) and AI puts you or your product there, with the light adjusted so it looks like you were really there.",
  keywords: "change photo background, change background ai, ai background changer, replace background of photo, background change online, photo background editor, change picture background",
  sections: [
    {
      heading: "How do you change the background of a photo?",
      figure: creativeFigure("background-changer", "Background Changer", "A man at a cluttered home desk next to the same man in a bright, modern office", "The same person, moved from a cluttered desk to a clean office."),
      items: [
        { t: "1. Upload the photo", d: "A person, a pet or a product, as clear and well lit as possible. Drop it on this page to open the editor." },
        { t: "2. Describe the new background", d: "Be specific about place, time and light: \"a bright Scandinavian living room, morning light\", \"a plain warm grey studio wall\", \"a rooftop in Mumbai at dusk with city lights\"." },
        { t: "3. Generate and download", d: `The edit costs ${COST}. The subject stays as it was, and its light and colour are adjusted to the new scene. Not right? Rephrase and run it again.` },
      ],
    },
    {
      heading: "Change the background or remove it?",
      paragraphs: [
        "They sound similar but give different results. **Removing** the background (with the [background remover](/remove-bg)) gives you the subject on transparency, a cutout to place on your own design or a plain white. **Changing** the background with AI builds a whole new scene behind the subject and blends the light, shadows and colour so it looks like one photograph.",
      ],
      table: {
        head: ["You want", "Use"],
        rows: [
          ["A cutout on transparency or pure white", "[Background remover](/remove-bg)"],
          ["A realistic new scene behind you", "Change background with AI (this page)"],
          ["One tap, no typing", "[AI background changer](/creative/background-changer) app"],
          ["A new background for a product listing", "[Product photo background remover](/remove-bg/product-photos), or describe a styled scene here"],
        ],
      },
    },
    {
      heading: "Who changes photo backgrounds?",
      items: [
        { t: "Professionals", d: "Swap a bedroom or kitchen behind your portrait for a clean office or a neutral studio for LinkedIn, a speaker bio or a company website." },
        { t: "Online sellers", d: "Show one product in several settings for ads and social posts: a café table, a gym bag, a gift on a wooden shelf, without a separate shoot for each." },
        { t: "Creators", d: "Build thumbnails and Reels covers with dramatic, on-theme backgrounds behind you." },
        { t: "Anyone with a good photo in a bad place", d: "A great smile in front of a car park, a construction site or a crowd. Keep the moment, change the place." },
      ],
    },
    {
      heading: "How do you make it look real?",
      list: [
        "**Match the light.** If your photo was taken in soft daylight, ask for a daylight scene; a night city behind a sunlit face looks fake.",
        "**Match the angle.** A photo taken from above suits a background seen from above.",
        "**Say what to keep**: \"keep the person exactly the same\" helps when the subject is close to the edge.",
        "**Leave some depth.** \"Softly out of focus\" behind a portrait looks like a real camera did it.",
        "**Keep it believable for the purpose.** For a professional profile, an office or studio beats a tropical beach.",
      ],
    },
    {
      heading: "What can't it do?",
      list: [
        "Keep tiny edges perfect every time. Flyaway hair and see-through objects can blend; run it again or simplify the request.",
        "Change the background without touching the light. That's on purpose, so the subject fits; for an untouched subject, remove the background instead.",
        "Put people in places to mislead. Don't use it to fake where someone was or to deceive; see the [terms](/terms).",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `Each background change is ${COST}, charged only when it works. Packs start at ${PACK_FROM} and never expire. No watermark is added. For any other edit by description, see the [AI photo editor](/ai-editor).`,
      ],
    },
  ],
  faq: [
    { q: "How do I change the background of a photo with AI?", a: "Upload the photo, describe the new background with the place, time and light, and generate. The subject stays the same and is relit to fit the new scene." },
    { q: "What's the difference between changing and removing a background?", a: "Removing gives a cutout on transparency. Changing builds a realistic new scene behind the subject and blends the light so it looks like one photo." },
    { q: "Will it change my face?", a: "It's told to keep the person exactly as they are. The light on the subject is adjusted to match the scene, but features stay the same." },
    { q: "Can I use it for product photos?", a: "Yes. Describe a styled setting, such as a marble counter, a wooden table or a gym floor, to show a product in use." },
    { q: "How much does it cost?", a: `${COST} per background change, only when it works, with no watermark.` },
    { q: "Is there a one-tap version?", a: "Yes, the AI Background Changer app, which picks a fitting background without you typing." },
    { q: "Why does my edit look fake?", a: "Usually because the light or angle doesn't match. Ask for a scene with the same kind of light as your photo, and add 'softly out of focus' behind portraits." },
    { q: "Can I get a plain white background?", a: "For a pure white background, remove the background and convert to JPG, which fills it with white for free." },
  ],
};

export default page;
