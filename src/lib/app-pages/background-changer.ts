import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Background Changer: Swap a Messy Background in One Tap",
  h1: "AI Background Changer",
  metaDescription: "Swap the background behind you or your product for a modern office, plain white, studio grey, outdoors, a gradient or a soft blur. You stay the same.",
  tagline: "Upload a photo and swap what's behind you: a modern office by default, or plain white, studio grey, outdoors, a colour gradient, a soft blur or transparent. You, your pose and your clothes stay exactly as they were.",
  keywords: "ai background changer, change photo background, replace background ai, background changer online, change background of photo, photo background editor, office background for photo",

  howToHeading: "How to change the background of a photo",
  howTo: [
    { t: "Upload your photo", d: "A portrait, a product or a pet. A clear edge between the subject and what's behind it gives the cleanest swap." },
    { t: "Choose a background", d: "Auto gives a softly blurred modern office. Pick Plain white, Studio grey, Outdoor, Gradient, Blur the original or Transparent instead." },
    { t: "Generate and download", d: "In under a minute you have the same photo with a new background, lit to match. Try another background from the same upload any time." },
  ],
  exampleCaption: "A man in a denim shirt at a cluttered home desk, books, papers and a monitor behind him, gets a clean modern office background: warm shelf lighting, plants and wood, softly out of focus, while his pose, shirt, hands and laptop stay exactly the same.",

  sections: [
    {
      heading: "What does the AI background changer do?",
      paragraphs: [
        "It keeps the subject of your photo exactly as it is, your face, hair, clothes, pose and anything you're holding, and replaces only what's behind it. The default background is a modern office interior, softly out of focus, with warm lighting under shelves, a few plants and clean wooden surfaces. The new background is lit to match the light on you, so the result looks like one photo rather than a cut-out pasted on a picture.",
        "Fine edges are where background changes usually fail: flyaway hair, glasses, the gap between an arm and the body. The app works on the whole image at once rather than cutting along a hard line, which is why hair and edges look natural in our example.",
      ],
    },
    {
      heading: "Which background should you choose?",
      table: {
        head: ["Background", "What you get", "Best for"],
        rows: [
          ["Auto", "A modern office, softly blurred, warm light", "Work profiles, LinkedIn, team pages"],
          ["Plain white", "Pure white with a soft natural contact shadow", "Product listings, documents, clean portraits"],
          ["Studio grey", "A seamless mid-grey backdrop with a gentle gradient", "Professional portraits, a classic studio look"],
          ["Office", "A modern office lit to match you", "Speaker bios, consultant profiles"],
          ["Outdoor", "Natural daylight with believable depth", "Friendly profile pictures, dating apps"],
          ["Gradient", "A smooth two-tone colour gradient", "Social posts, thumbnails, brand colours"],
          ["Blur the original", "Your own background, thrown out of focus like a wide-aperture lens", "Keeping the place but hiding the mess"],
          ["Transparent", "No background at all, with a precise edge", "Designs, stickers, putting yourself on a slide"],
        ],
      },
    },
    {
      heading: "Who changes photo backgrounds?",
      items: [
        { t: "Remote workers", d: "Your home office or bedroom isn't the backdrop you want on a profile. An office or studio background looks polished without moving furniture." },
        { t: "Job seekers", d: "Turn a decent photo of yourself into a professional profile picture by replacing a busy room with grey or a blurred office." },
        { t: "Online sellers", d: "Put products on white for marketplaces, or on a lifestyle-feeling blur for social posts, from the same photo." },
        { t: "Estate agents and consultants", d: "Consistent, calm backgrounds make a team page look like one firm, even if every photo was taken somewhere different." },
        { t: "Parents and pet owners", d: "A great photo of a child or a dog ruined by a pile of laundry behind them? Blur it away or swap it for the outdoors." },
      ],
    },
    {
      heading: "Background changer, background remover or AI photo editor?",
      paragraphs: [
        "PixelShine has three ways to deal with a background, and each suits a different job:",
      ],
      table: {
        head: ["Tool", "What it does", "Use it when"],
        rows: [
          ["Background changer (this app)", "Swaps the background for one of eight ready choices", "You want a clean result fast, with no prompt"],
          ["[Background remover](/remove-bg)", "Cuts the subject out on transparent", "You'll place the cut-out in your own design"],
          ["[Change background with a prompt](/ai-editor/change-background)", "You describe any background in words", "You want somewhere specific, like a Paris café or a beach at dusk"],
        ],
      },
      after: ["All three cost the same per image, so pick the one that fits the job."],
    },
    {
      heading: "Tips for a clean background swap",
      list: [
        "**Contrast helps.** A dark jacket against a light wall, or a light top against a dark room, gives the cleanest edge.",
        "**Avoid motion blur.** A sharp subject keeps hair and fingers crisp after the swap.",
        "**Light matters.** A well-lit photo keeps fine detail; very dark photos can lose edges.",
        "**Keep the whole subject in frame.** If your elbow is cut off by the edge, it stays cut off.",
        "**Match the mood.** An outdoor portrait in sunlight looks odd on a dark studio backdrop; Outdoor or Blur will look more natural.",
        "**Try two or three.** Each run is a fresh image, and choosing between backgrounds side by side is quick.",
      ],
    },
    {
      heading: "When to blur instead of replacing",
      paragraphs: [
        "**Blur the original** keeps where you were but softens it, the way a portrait lens does. It's often the most honest-looking choice: the colours and light still match perfectly because they're the real ones, but the clutter becomes a pleasant soft wash. Use it when the setting is part of the story, a wedding, a holiday, a workshop, but you want the attention on the person.",
        "Replacing is better when the original background is distracting even when blurred, like a bright window, a busy street or a messy desk right behind you.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Change you.** Your face, body, clothes and pose stay as they are. To change an outfit, use the [outfit changer](/creative/outfit-generator).",
        "**Put you in a specific real place.** The office and outdoor backgrounds are generic. For a named place, describe it in the [AI photo editor](/ai-editor).",
        "**Fix a blurry subject.** If you're out of focus in the original, sharpen it first with the [image upscaler](/upscale).",
        "**Guarantee perfect edges on every photo.** Very fine hair against a similar-coloured wall is the hardest case; run it again or try Blur the original.",
      ],
    },
    {
      heading: "Ideas for your new background",
      items: [
        { t: "A matching team set", d: "Run every team member's photo with Studio grey so the whole team page looks like one shoot." },
        { t: "A product catalogue", d: "Plain white for the shop, Gradient in your brand colours for social posts, from the same product photo." },
        { t: "A video-call profile", d: "Use Office for the picture people see when your camera is off, so it matches a work context." },
      ],
    },
    {
      heading: "Cost, and what happens to your photo",
      paragraphs: [
        `A new background costs ${COST}, and only when the image is made. Packs start at ${PACK_FROM} with credits that don't expire, so you can swap backgrounds for a whole catalogue over time. Where a free trial is offered, it appears above the upload.`,
        "Your photo is processed by fal.ai's image models to rebuild the background and goes nowhere else. We never sell it or use it to train AI. Originals and results are saved in My Creations, where you can delete them at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I change the background of a photo?", a: "Upload it, choose a background or keep Auto for a modern office, and press Generate. Your subject stays the same and the background is replaced in under a minute." },
    { q: "Can I make the background white?", a: "Yes. Choose Plain white for a pure white background with a soft shadow, ideal for product listings." },
    { q: "Can I get a transparent background?", a: "Yes. Choose Transparent. For cut-outs you'll place in your own designs, the background remover is built for that job too." },
    { q: "Will it change my face or clothes?", a: "No. Only the background changes. Your face, hair, clothes and pose stay as they were." },
    { q: "Can I choose any background I want?", a: "This app offers eight ready choices. To describe any place in your own words, use the AI photo editor's change-background page." },
    { q: "Does it work on product photos?", a: "Yes. Plain white and Studio grey suit marketplace listings; Gradient suits social posts." },
    { q: "How much does it cost?", a: `${COST} per image, only when it's made. Credit packs start at ${PACK_FROM}.` },
    { q: "What's the best photo to use?", a: "A sharp, well-lit photo with clear contrast between the subject and the background, and the whole subject in frame." },
    { q: "Can I change the background of a group photo?", a: "Yes. Everyone in the photo stays as they are and only the background behind them changes." },
    { q: "Is there a watermark?", a: "No. The new photo downloads at full size with nothing added." },
  ],
};

export default page;
