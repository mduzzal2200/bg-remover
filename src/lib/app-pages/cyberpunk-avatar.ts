import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Cyberpunk Avatar: Neon Sci-Fi Portrait From Your Selfie",
  h1: "AI Cyberpunk Avatar Maker",
  metaDescription: "Turn a selfie into a neon cyberpunk portrait: a jacket with glowing pink and cyan piping, rain-wet city lights and dramatic rim light. Still you.",
  tagline: "Upload a selfie and step into a rain-soaked future city at night: a black jacket with glowing neon piping, a tech earpiece, pink and cyan light on your face and neon signs behind you.",
  keywords: "cyberpunk avatar, ai cyberpunk filter, neon portrait ai, cyberpunk photo editor, sci-fi avatar maker, cyberpunk profile picture, neon city photo",

  howToHeading: "How to make a cyberpunk avatar from your photo",
  howTo: [
    { t: "Upload a selfie", d: "A clear photo of your face and shoulders. Darker, simple backgrounds blend best into the night-city scene." },
    { t: "Set framing and strength", d: "Auto frames you from the chest up, as in our example. Head & shoulders is tighter for a profile picture; Strong turns up the neon and the contrast." },
    { t: "Generate and pick your favourite", d: "Each run balances the pink and cyan a little differently. Make a few and keep the one that glows best." },
  ],
  exampleCaption: "A soft daylight selfie in a white sweater becomes a cyberpunk portrait: a black jacket with glowing neon-pink and cyan piping, pink highlights in her hair, a small earpiece, and a rain-wet futuristic city of towers and neon signs at night behind her.",

  sections: [
    {
      heading: "What does the cyberpunk avatar maker do?",
      paragraphs: [
        "It turns your photo into a night-time portrait from a sci-fi future. You're framed from the chest up wearing a black jacket with glowing neon-pink and cyan piping and a subtle tech earpiece. Your hair catches pink neon highlights, and behind you a rain-wet city of tall towers and glowing signs stretches into the dark.",
        "The light is the star: dramatic pink and cyan rim light outlines your face and shoulders, with high contrast and deep shadows. Your face and identity stay exactly as they are, and the result is meant to look like a real photograph taken on a neon-lit street, not a drawing.",
      ],
    },
    {
      heading: "What makes something look cyberpunk?",
      paragraphs: [
        "Cyberpunk is a corner of science fiction about high technology and gritty city life: enormous neon-lit cities, rain, crowded streets, implants and gadgets, and people living at night. Its visual style became famous through novels, films, anime and video games, and it's now one of the most popular looks for gaming and streaming profiles.",
        "In a photo, three things say \"cyberpunk\" instantly. **Neon colour**, especially hot pink and electric cyan, often both at once from opposite sides. **Wet surfaces**, which double every light into reflections. And **a dense city at night**, all signs and towers. The app combines all three around you and adds a touch of tech to your outfit, so you look like you belong there.",
      ],
    },
    {
      heading: "Who uses a cyberpunk avatar?",
      items: [
        { t: "Gamers", d: "A neon portrait suits Steam, Xbox, PlayStation and Discord profiles, especially if you play sci-fi or open-world games." },
        { t: "Streamers and creators", d: "Use it as your Twitch or YouTube icon, a channel banner face, or a \"starting soon\" screen. Strong neon reads well at small sizes." },
        { t: "Developers and tech people", d: "A cyberpunk portrait is a fun alternative to a formal headshot on GitHub, a personal site or a tech meetup badge." },
        { t: "Music and nightlife", d: "DJs, producers and event promoters can use the look for flyers and artist profiles; it fits electronic music perfectly." },
        { t: "Sci-fi fans and cosplayers", d: "See yourself in the genre before building a real costume, or make a character portrait for a tabletop campaign." },
      ],
    },
    {
      heading: "Framing and Strength options",
      table: {
        head: ["Setting", "Choice", "Effect"],
        rows: [
          ["Framing", "Auto", "Chest-up portrait with the neon city behind, as in our example"],
          ["Framing", "Head & shoulders", "A tighter crop for circular profile pictures"],
          ["Framing", "Half body", "More of the glowing jacket and the street"],
          ["Framing", "Full body", "Your whole figure standing in the rain-wet street"],
          ["Strength", "Subtle", "Neon accents on a photo that stays close to your original"],
          ["Strength", "Strong", "Maximum glow, contrast and futuristic styling"],
        ],
      },
      after: ["Pink and cyan is the signature palette. If one colour dominates your first result, run it again; the balance shifts each time."],
    },
    {
      heading: "Tips for a striking neon portrait",
      list: [
        "**Use a clear, front-facing photo.** Rim light traces the edges of your face, so a clean outline looks best.",
        "**Simple lighting in the original.** Flat, soft light lets the app add its own neon. Strong coloured light from a screen can clash.",
        "**Darker backgrounds blend best.** A bright beach becomes a night city less convincingly than a plain wall.",
        "**Glasses can look great.** They catch the neon reflections, so leave them on if you usually wear them.",
        "**Try your hair down.** Loose hair picks up pink highlights beautifully.",
      ],
    },
    {
      heading: "Making a matching banner and set",
      paragraphs: [
        "A profile picture looks best with a banner to match. Generate your avatar with Head & shoulders framing, then a second version with Half body and a wide 16:9 shape for a Twitch, X or YouTube banner. Keeping the same photo and settings gives you a consistent look across platforms.",
        "Need it smaller for a forum or Discord server? Crop it square in the [crop tool](/crop-image) or make it round with the circle crop. For a print or a poster, enlarge it first in the [image upscaler](/upscale).",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Copy a specific game or film.** It creates an original cyberpunk scene, not a character or location from an existing title.",
        "**Add implants or change your face.** The tech is limited to clothing and accessories; your face stays yours.",
        "**Write readable signs in your language.** Neon signs are decoration; they may show characters you can't read.",
        "**Animate the lights.** It's a still image. Add motion afterwards in a video app if you want flicker.",
      ],
    },
    {
      heading: "Other bold profile looks",
      paragraphs: [
        "Prefer retro gaming? The [pixel art avatar maker](/creative/pixel-art-avatar) turns you into a 16-bit character. For heroics, try the [superhero costume maker](/creative/superhero-costume) or the [comic book cover](/creative/comic-book-cover). And if you want to go further into space than a future city, the [astronaut photo maker](/creative/astronaut-photoshoot) puts you on a spacewalk.",
      ],
    },
    {
      heading: "Why pink and cyan?",
      paragraphs: [
        "Hot pink and electric cyan sit on opposite sides of the colour wheel, so when they light a face from two sides, each makes the other look brighter. That contrast is the signature of neon city scenes in films, games and photography, and it's why this app uses both: warm pink on one side of your face, cool cyan on the other, with deep shadow between.",
        "Photographers recreate it with two coloured lights and a smoke machine. Here, the app adds the light, the rain reflections and the haze for you, then keeps your skin tone natural underneath, so you look lit by neon rather than painted in it.",
      ],
    },
    {
      heading: "Cyberpunk avatar for gaming, streaming and work",
      table: {
        head: ["Where", "Framing", "Shape"],
        rows: [
          ["Discord, Steam, Xbox, PlayStation", "Head & shoulders", "1:1, then crop to a circle if needed"],
          ["Twitch or YouTube icon", "Head & shoulders, Strength Strong", "1:1"],
          ["Channel banner or X header", "Half body", "16:9"],
          ["Phone wallpaper", "Half body or Full body", "9:16"],
          ["Personal site or GitHub", "Auto", "1:1 or 4:5"],
        ],
      },
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each cyberpunk portrait uses ${COST}, and nothing is charged if it fails. Credit packs from ${PACK_FROM} don't expire. If a free trial is available where you are, the box above the upload says so.`,
        "Your selfie is sent to fal.ai, the image-model provider we use, only to light and restyle it. It's not used to train AI or sold. Results are kept in My Creations, where you can delete them whenever you choose.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a cyberpunk avatar?", a: "Upload a clear selfie, keep Framing and Strength on Auto and press Generate. You get a neon-lit portrait in a futuristic city in under a minute." },
    { q: "Will it still look like me?", a: "Yes. Your face and identity are kept exactly; only your outfit, lighting and background change." },
    { q: "Is it a cartoon or a photo?", a: "A photo. It's built to look like a real photograph taken on a neon-lit city street at night." },
    { q: "Can I use it as a Discord or Twitch picture?", a: "Yes. Choose Head & shoulders framing for a profile picture, and make a wide Half body version for a banner." },
    { q: "Can I change the neon colours?", a: "The look is built on pink and cyan. Running it again changes the balance between them." },
    { q: "Does it work for men and women?", a: "Yes. Anyone gets the neon jacket, the city and the lighting." },
    { q: "How much does it cost?", a: `${COST} per portrait, only when it's made. Packs start at ${PACK_FROM}, and where a free trial runs, your first is free.` },
    { q: "Is it from a video game?", a: "No. It's an original cyberpunk-style scene. PixelShine isn't connected with any game or film." },
    { q: "Can I make a banner as well as an avatar?", a: "Yes. Run the same photo with Half body framing and a wide 16:9 shape for a banner that matches your avatar." },
    { q: "What photo works best?", a: "A clear, front-facing photo with even, simple lighting. Darker or plain backgrounds blend best into the night city." },
    { q: "Can I use it for a group photo?", a: "It's designed for one person. For a crew, make one portrait each with the same settings for a matching set." },
    { q: "Can I make a phone wallpaper?", a: "Yes. Choose a tall 9:16 shape and Half body or Full body framing for a neon wallpaper." },
    { q: "Is there a watermark?", a: "No. Your avatar downloads at full size without a watermark." },
  ],
};

export default page;
