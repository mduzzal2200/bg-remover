import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "Coastal Cowgirl AI Photoshoot: Try the Look on Your Photo",
  h1: "Coastal Cowgirl Aesthetic AI Photoshoot",
  metaDescription: "Try the coastal cowgirl look on your own photo: straw cowboy hat, light denim, white linen, beachy hair and golden-hour sea light. Looks like a real shoot.",
  tagline: "Upload a selfie and see yourself in the coastal cowgirl look: a straw cowboy hat, light denim and white linen, sun-bleached waves and warm golden light by the sea.",
  keywords: "coastal cowgirl aesthetic, coastal cowgirl photoshoot, coastal cowgirl outfit ai, cowgirl photo filter, western beach photoshoot, coastal cowgirl look, cowboy hat beach photo",

  howToHeading: "How to get the coastal cowgirl look on your photo",
  howTo: [
    { t: "Upload a selfie", d: "Your face and shoulders should be clear and well lit. You can be in a sweatshirt in your bedroom; the outfit and the beach are added." },
    { t: "Leave Setting and Lighting on Auto, or adjust", d: "Auto puts you by the ocean at golden hour. Garden, Outdoors or City street give the same styling inland." },
    { t: "Generate a few versions", d: "Each run styles the hat, denim and pose a little differently. Keep the one that feels most like you." },
  ],
  exampleCaption: "A selfie in a grey sweatshirt at home becomes a golden-hour coastal cowgirl shoot: a straw cowboy hat, a light denim jacket over a white lace top, a western belt buckle and sun-bleached waves, sitting on rocks by the sea at sunset.",

  sections: [
    {
      heading: "What is the coastal cowgirl aesthetic?",
      paragraphs: [
        "Coastal cowgirl is a mash-up of two very different worlds: the ranch and the beach. Picture a straw cowboy hat and western boots, but paired with light-wash denim, white linen and lace, loose sun-bleached hair and the warm light of an evening by the sea. It's relaxed, romantic and a little bit country, without the dust.",
        "The look took off on social feeds in 2023 and has stayed around since, often alongside its cousins, coastal grandmother and cowboy-core. Its colours are easy to spot: soft blues, white, cream, sand and a hint of tan leather. Its mood is golden hour, every time.",
      ],
    },
    {
      heading: "What does the app do to your photo?",
      paragraphs: [
        "It restyles you for a coastal cowgirl shoot and photographs you there. It adds the straw cowboy hat, light denim and white linen or lace, subtle western accessories such as a belt buckle or boots, and beachy, sun-bleached hair. Then it places you somewhere breezy and ocean-adjacent, lit by warm, low golden-hour sun.",
        "Your face stays exactly as it is. The result is built to look like a real photograph, with natural skin texture, real shadows and believable light, not like a painting or an obvious filter. That's what makes it useful for a profile picture: people see you, just on a better evening.",
      ],
    },
    {
      heading: "Who tries the coastal cowgirl look?",
      items: [
        { t: "Anyone curious about the trend", d: "You don't need to buy a hat, boots and a denim jacket to find out if the style suits you. Try it on a selfie first." },
        { t: "Creators and influencers", d: "Post a coastal cowgirl set without a trip to the beach or a styled shoot. It's a quick way to join a trending theme while it's hot." },
        { t: "Fashion and boutique sellers", d: "Use the results as mood shots for a western or beachwear collection, to show the vibe before a real campaign shoot." },
        { t: "Brides and bachelorette planners", d: "Western-beach bachelorettes and \"last rodeo\" parties are popular. Make a themed photo of the bride for the invite or group chat." },
        { t: "Moodboard makers", d: "Collect a set of yourself in the look to plan an outfit, a holiday wardrobe or a real photoshoot with a photographer." },
      ],
    },
    {
      heading: "Settings: change the place and the light",
      paragraphs: ["Both settings start on Auto, which gives the seaside sunset look. Change them to take the styling somewhere else."],
      table: {
        head: ["Setting", "Try", "Result"],
        rows: [
          ["Setting", "Beach", "Sand, calm water and open sky, the purest coastal look"],
          ["Setting", "Outdoors", "A scenic spot such as a path or a terrace, more ranch than beach"],
          ["Setting", "Garden", "Wildflowers and greenery, a softer country version"],
          ["Setting", "City street", "Western styling in town, a fashion-week street-style take"],
          ["Lighting", "Golden hour", "Warm low sun and a glowing rim around your hair and hat"],
          ["Lighting", "Bright & airy", "Light, high-key and summery, almost washed out"],
          ["Lighting", "Moody", "Darker, richer and more dramatic, for an evening feel"],
        ],
      },
    },
    {
      heading: "How to style a convincing coastal cowgirl photo",
      list: [
        "**Start with your hair down.** Loose hair turns into the beachy waves that define the look more naturally than an updo.",
        "**Use daylight.** Photos taken near a window or outdoors blend most convincingly into golden-hour light.",
        "**Face and shoulders visible.** The hat and jacket are built around them; a tight face crop leaves the styling with nothing to work on.",
        "**Skip sunglasses.** They hide your eyes, and the hat already gives the photo its shape.",
        "**Run it a few times.** Hats, tops and poses change every run. Pick the version you'd actually wear.",
      ],
    },
    {
      heading: "What the app won't do",
      list: [
        "**Dress you in a specific item.** It styles the look in general. To try a particular jacket or dress, describe it in the [outfit changer](/creative/outfit-generator).",
        "**Place you at a real beach.** The coast is invented. It won't recreate Malibu or a particular resort.",
        "**Change your face or body.** Only your clothes, hair styling, setting and light change.",
        "**Keep your exact pose every time.** It may sit you on rocks, lean you on a fence or walk you along the sand.",
      ],
    },
    {
      heading: "More aesthetic trends to try",
      paragraphs: [
        "If coastal cowgirl suits you, try the [old money aesthetic](/creative/old-money-aesthetic) for camel coats and quiet luxury, or the [Y2K aesthetic](/creative/y2k-aesthetic) for a flash-lit early-2000s party look. For a polished portrait with a hat and coat but a city backdrop, the [outfit changer](/creative/outfit-generator) lets you describe the exact look.",
      ],
    },
    {
      heading: "Ideas for your coastal cowgirl photos",
      items: [
        { t: "A summer profile picture", d: "Golden light and a straw hat say summer instantly. Crop it square in the [crop tool](/crop-image) for a profile." },
        { t: "A themed carousel", d: "Make three or four versions with different settings, beach, garden, street, and post them together." },
        { t: "A trip teaser", d: "Going somewhere sunny? Post your coastal cowgirl photo as a countdown before the real holiday photos." },
      ],
    },
    {
      heading: "What are the key pieces of a coastal cowgirl outfit?",
      items: [
        { t: "The straw cowboy hat", d: "The single most important piece. Natural straw, a wide brim and a relaxed shape keep it beachy rather than rodeo." },
        { t: "Light-wash denim", d: "A cropped denim jacket, denim shorts or a long denim skirt. Light and faded, never dark indigo." },
        { t: "White linen or lace", d: "A lace top, a linen shirt or a floaty white dress softens the western pieces and keeps it summery." },
        { t: "Western details", d: "A belt with a big buckle, cowboy boots, a little turquoise jewellery or a bandana. One or two is enough." },
        { t: "Beachy hair and light", d: "Loose, sun-bleached waves and warm evening light finish the look. The app adds both." },
      ],
      after: ["Want to see one exact piece on yourself, say a white maxi dress with boots? Describe it in the [outfit changer](/creative/outfit-generator) and pick Beach as the setting."],
    },
    {
      heading: "Coastal cowgirl, coastal grandmother or cowboy-core?",
      paragraphs: [
        "They're often mixed up. **Coastal grandmother** is calm and classic: cream knits, linen trousers, a beach house kitchen, no western touches at all. **Cowboy-core** is the full western look, dark denim, leather and suede, in a desert or ranch setting. **Coastal cowgirl** sits between the two: the western hat and boots, but the light colours, lace and seaside mood of the beach. This app is built for that middle ground.",
      ],
    },
    {
      heading: "Price, and where your photo goes",
      paragraphs: [
        `Each photo uses ${COST}, charged only when the image arrives. Packs from ${PACK_FROM} never expire. If your country has a free trial running, you'll see it above the upload and your first photo is free.`,
        "The selfie is sent to fal.ai, our image-model partner, only to create the restyled photo. We never sell it or use it to train AI. Your results live in My Creations, where you can delete them whenever you want.",
      ],
    },
  ],

  faq: [
    { q: "How do I get the coastal cowgirl look on my photo?", a: "Upload a clear selfie, leave Setting and Lighting on Auto and press Generate. You get a golden-hour seaside photo with the hat, denim and linen styling." },
    { q: "What is coastal cowgirl style?", a: "A mix of western and beach style: straw cowboy hats, light denim, white linen or lace, boots and sun-bleached hair, usually shot in golden light by the sea." },
    { q: "Will it look like a real photo?", a: "Yes. It's built to look like a real photograph with natural skin, light and shadow, not a drawing or a filter." },
    { q: "Will my face change?", a: "No. Your face and identity stay exactly the same; the outfit, hair styling, setting and light change." },
    { q: "Can I do it away from the beach?", a: "Yes. Choose Garden, Outdoors or City street for the same styling in a different place." },
    { q: "Does it work for men?", a: "Yes. Men get the same relaxed western-beach styling: a straw hat, light denim and linen shirts." },
    { q: "How much does it cost?", a: `${COST} per photo, only when it's made. Packs start at ${PACK_FROM}, and a free trial, where offered, covers the first.` },
    { q: "What photo works best?", a: "A well-lit photo with your face and shoulders visible, hair down and no sunglasses." },
    { q: "Can I keep my own outfit and just add the hat?", a: "Not in this app; it restyles the whole outfit. To add only a hat, describe it in the AI outfit changer, or try the AI photo editor with a short instruction." },
    { q: "Can I keep my own hair colour?", a: "Yes. Your hair colour stays yours; the app just adds a beachy, sun-kissed texture." },
    { q: "Is there a watermark?", a: "No. The photo downloads clean, at full size." },
  ],
};

export default page;
