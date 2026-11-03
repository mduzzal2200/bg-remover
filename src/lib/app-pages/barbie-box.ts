import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Barbie Box Trend: Turn Yourself Into a Doll in a Box",
  h1: "AI Barbie Box Photo Maker",
  metaDescription: "Join the doll box trend: turn your photo into a collectible doll in pink retail packaging with tiny accessories, shot like a real product photo.",
  tagline: "Upload a photo and see yourself as a collectible fashion doll: glossy pink packaging, a clear window, tiny accessories laid out around you and studio product lighting.",
  keywords: "ai barbie box, barbie box trend, doll box ai, turn yourself into a doll, barbie doll ai photo, ai doll packaging, action figure box trend",

  howToHeading: "How to make your own doll in a box",
  howTo: [
    { t: "Upload a clear photo", d: "Front-facing or half body, with your outfit visible. Bold, distinct clothes come out best on a doll." },
    { t: "Choose the presentation", d: "In its box is the trend look. On a display base, On a desk and In a scene show the doll out of the packaging." },
    { t: "Generate and share", d: "In under a minute you get a product-style photo of your doll. Run it again for different accessories." },
  ],
  exampleCaption: "A blonde selfie at home becomes a collectible fashion doll in a glossy pink retail box: the same face and hair, a pink satin dress and heels, with tiny printed accessories around her, sunglasses, a handbag, a phone, a laptop, a drink and a puppy.",

  sections: [
    {
      heading: "What is the doll box trend?",
      paragraphs: [
        "In 2025, feeds filled with people turned into toys: a small figure of themselves sealed in retail packaging, surrounded by tiny accessories that summed up their life, a laptop for work, a coffee cup, a pet, running shoes. The pink fashion-doll version, inspired by the most famous doll packaging of all, became one of the most popular takes.",
        "It works because it's affectionate and funny at once. Your whole personality becomes a product, with your favourite things as the add-ons. This app makes that pink doll-box version from a single photo, without writing a prompt.",
      ],
    },
    {
      heading: "What does the app create?",
      paragraphs: [
        "It turns you into a collectible fashion doll and photographs it like a real product. In the default **In its box** presentation, the doll stands in a glossy pink retail box with a clear plastic window, bold pink branding elements and printed accessories arranged around the figure. The lighting is studio product photography, so the plastic shines and the cardboard looks real.",
        "Your face and likeness are kept accurate in doll form: your hair colour and style, your features and your outfit, simplified and polished the way a doll would be. It's built to look like a photograph of a physical toy, not a flat drawing.",
        "\"Barbie\" is the name people search for, so we use it to describe the style. PixelShine isn't connected with Mattel, and the box is a doll-style design rather than official packaging.",
      ],
    },
    {
      heading: "Who makes a doll box photo?",
      items: [
        { t: "Anyone joining the trend", d: "It's a quick, fun post. The accessories make it personal, and people love guessing what each one means." },
        { t: "Friends making a birthday surprise", d: "Turn the birthday person into a doll for a card, a cake topper picture or a story post." },
        { t: "Professionals with a sense of humour", d: "A \"Marketing Manager doll, laptop and coffee included\" post on LinkedIn is a light way to introduce yourself or a new role." },
        { t: "Bachelorette and party hosts", d: "Make a doll of the bride or the guest of honour for invitations and decorations." },
        { t: "Small brands", d: "Shop owners and creators can turn themselves into a doll holding their own products, a playful about-us picture." },
      ],
    },
    {
      heading: "Four ways to present your doll",
      table: {
        head: ["Presentation", "What you'll see", "Good for"],
        rows: [
          ["In its box", "The doll in pink retail packaging with a clear window and accessories", "The trend itself; the most shared look"],
          ["On a display base", "The doll standing on a round base against a plain studio background, no packaging", "A clean collector's shot or a sticker"],
          ["On a desk", "The doll on a real desk beside everyday objects, so its size reads at once", "A funny, realistic \"I own a doll of myself\" photo"],
          ["In a scene", "The doll in a full miniature scene with set dressing and lighting", "A story picture, like a doll's dream house moment"],
        ],
      },
    },
    {
      heading: "How to get the best doll",
      list: [
        "**Show your outfit.** A half-body or full-body photo lets the doll wear your real clothes. A tight face crop leaves the outfit to chance.",
        "**Bold, simple clothes read best.** A bright dress, a coloured blazer or a striking top looks great in doll form.",
        "**Face the camera.** It gives the clearest likeness in the doll's face.",
        "**Plain backgrounds help.** The app focuses on packaging you, not on the room behind you.",
        "**Run it two or three times.** The accessories change each time, and one set will fit you best.",
      ],
    },
    {
      heading: "Doll box, action figure, Lego or Funko?",
      paragraphs: [
        "PixelShine has four toy styles, and they make a great side-by-side post from the same photo:",
      ],
      table: {
        head: ["Toy", "Looks like", "App"],
        rows: [
          ["Fashion doll", "Pink box, glossy doll, fashion accessories", "This app"],
          ["Action figure", "A detailed 3D figure on a base or in a blister pack", "[AI action figure](/creative/3d-figurine)"],
          ["Brick minifigure", "Blocky plastic figure with a cylinder head", "[Lego minifigure maker](/creative/lego-minifigure)"],
          ["Vinyl collectible", "Oversized head, dot eyes, window box", "[Funko Pop yourself](/creative/funko-pop-figure)"],
        ],
      },
    },
    {
      heading: "What it won't do",
      list: [
        "**Use official branding.** The packaging is a doll-box style, not a real product; PixelShine isn't connected with any toy company.",
        "**Pick the accessories for you.** The app chooses them from your photo. To add a specific item, run it again or edit afterwards.",
        "**Write your name on the box perfectly every time.** Lettering on packaging can slip; check it and run it again if needed.",
        "**Make a real toy.** It's a photo of a doll that doesn't exist. Print it, but you can't unbox it.",
      ],
    },
    {
      heading: "Ideas for your doll photo",
      items: [
        { t: "A \"meet the doll\" post", d: "Caption each accessory: \"comes with laptop, iced coffee and a dog who runs the house\"." },
        { t: "A group set", d: "Make a doll of each friend with the same presentation and post them as a collection." },
        { t: "A birthday card", d: "Print the box picture on a card: \"Limited edition, 30 years old\"." },
      ],
    },
    {
      heading: "How to make the accessories personal",
      items: [
        { t: "Hold something that's you", d: "A coffee cup, a camera, a tennis racket or a book in your photo gives the app a strong hint, and it often appears among the accessories." },
        { t: "Wear your signature colour", d: "The doll's outfit follows your clothes, so wear the colour people associate with you." },
        { t: "Dress for the role", d: "A blazer for the office, scrubs for a nurse, an apron for a baker: the doll and its accessories pick up the theme." },
        { t: "Run it a few times", d: "Every run lays out a new set of accessories. Keep the one that tells your story best." },
      ],
    },
    {
      heading: "Shapes for posting your doll",
      table: {
        head: ["Where", "Shape", "Why"],
        rows: [
          ["Instagram or Facebook post", "4:5", "The tall box fills the frame"],
          ["Stories and reels covers", "9:16", "Room above and below for stickers and text"],
          ["LinkedIn post", "4:5 or 1:1", "Works well with a job-title caption"],
          ["Printed card", "4:5", "Upscale 2× first, then print at 5 × 7 inches"],
        ],
      },
      after: ["The result follows your photo's shape unless you pick one, so choose before generating."],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `A doll-box picture is ${COST}. If the image fails, nothing is taken. Credits come in one-off packs starting at ${PACK_FROM}, and they wait in your account until you use them. Some countries have a trial; you'll spot it above the upload.`,
        "We pass your photo to fal.ai's image models to build the doll, and to no one else. It plays no part in AI training and is never sold. Your dolls sit in My Creations until you delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I make the Barbie box trend photo?", a: "Upload a clear photo with your outfit visible, keep Presentation on In its box and press Generate. You get your doll in pink packaging in under a minute." },
    { q: "Will the doll look like me?", a: "Yes. Your face, hair and outfit are kept in doll form, simplified and glossy like a real doll." },
    { q: "Can I show the doll outside the box?", a: "Yes. Choose On a display base, On a desk or In a scene." },
    { q: "Can I choose the accessories?", a: "Not directly; the app picks them from your photo. Run it again for a different set." },
    { q: "Is this official Barbie packaging?", a: "No. It's a doll-box style. PixelShine isn't connected with Mattel or any toy brand." },
    { q: "Does it work for men?", a: "Yes. Anyone can be a doll in a box; the outfit and accessories follow your photo." },
    { q: "How much does it cost?", a: `${COST} for each doll picture, taken only when it's ready. Packs start at ${PACK_FROM}.` },
    { q: "What photo works best?", a: "A front-facing, half-body or full-body photo with bold clothes and a plain background." },
    { q: "Can I make a doll of a friend?", a: "Yes, with their permission. Upload a clear photo of them and post it with a caption about their accessories." },
    { q: "Can I add my name to the box?", a: "Add it afterwards with the free watermark tool (centre or a corner), or in a design app for full control." },
    { q: "Is there a watermark?", a: "No. The boxed doll comes out at full size, nothing stamped on it." },
  ],
};

export default page;
