import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Pixar-Style Avatar: Turn Your Photo Into a 3D Character",
  h1: "AI Pixar-Style Avatar Maker",
  metaDescription: "Turn a selfie into a 3D animated-movie character: big expressive eyes, soft rounded shading and warm cinematic light, still recognisably you.",
  tagline: "Upload a selfie and see yourself as a character from a 3D animated film: big expressive eyes, smooth rounded features and warm, soft light, in the same pose and room as your photo.",
  keywords: "pixar avatar maker, ai pixar filter, 3d cartoon avatar, photo to 3d cartoon, pixar style ai, disney pixar face filter, 3d animated character from photo",

  howToHeading: "How to turn yourself into a 3D animated character",
  howTo: [
    { t: "Upload a selfie", d: "A clear, front-facing photo with your face well lit. The pose, outfit and room in the photo carry over into the cartoon." },
    { t: "Pick framing and strength, or keep Auto", d: "Head & shoulders makes a tidy avatar. Strong pushes the cartoon proportions further; Subtle keeps you closer to your photo." },
    { t: "Generate and download", d: "Your 3D character arrives in under a minute. Run it again for a slightly different take on your eyes, hair and expression." },
  ],
  exampleCaption: "A selfie of a woman with her hair in a bun, resting her chin on her hand in a bedroom, becomes a 3D animated-movie character in the same pose and room: large brown eyes, a soft rounded face, glossy hair and warm, gentle light.",

  sections: [
    {
      heading: "What does the Pixar-style avatar maker do?",
      paragraphs: [
        "It redraws you as a character from a modern 3D animated film. Your eyes grow larger and more expressive, your features become smooth and slightly stylised, skin and hair take on the soft, rounded shading of computer animation, and everything is lit with warm, cinematic light.",
        "It keeps what makes you recognisable: your face shape, hair colour and style, skin tone, smile and anything distinctive like glasses or freckles. It also keeps the scene. If you're resting your chin on your hand in your bedroom, your character does the same, in an animated version of that bedroom.",
        "\"Pixar style\" is the name most people search for, so we use it to describe the look. The app isn't made by or connected with Pixar or Disney, and it doesn't copy any of their characters. It creates a new character who looks like you.",
      ],
    },
    {
      heading: "What makes the 3D animated-movie look?",
      paragraphs: [
        "Four things give animated films their warmth. **Proportions**: eyes are larger, heads slightly bigger and features simplified, which makes characters read clearly and look friendly. **Shading**: surfaces are smooth with soft gradients and subtle light passing through skin, never harsh or gritty. **Light**: scenes are lit like a film set, with a warm key light, soft fill and a gentle glow at the edges of hair. **Detail where it counts**: hair, fabric and eyes get the most care, so they look touchable.",
        "Ordinary cartoon filters flatten a face into outlines and flat colour. A 3D look keeps depth and volume, which is why the result feels like a still from a film rather than a sticker. It's also why a well-lit, clear selfie matters: the app needs to see the shape of your face to rebuild it in 3D.",
      ],
    },
    {
      heading: "Who makes a 3D cartoon avatar?",
      items: [
        { t: "People who want a friendly profile picture", d: "A 3D avatar is approachable and recognisable without being a real photo, which suits forums, gaming profiles, group chats and anyone who'd rather not post their actual face." },
        { t: "Parents and grandparents", d: "Kids love seeing themselves, their siblings or their grandparents as animated characters. Make one for each family member and print them as a set." },
        { t: "Creators and streamers", d: "Use the character as a channel icon, a thumbnail face or the start of a branded mascot that still looks like you." },
        { t: "Teachers and team leads", d: "A cartoon version of yourself works for slides, classroom displays and internal tools where a formal headshot feels too stiff." },
        { t: "Couples and friends", d: "Turn a photo of the two of you into a scene from your own animated film for an anniversary post or a birthday card." },
      ],
    },
    {
      heading: "Framing and Strength: which to choose?",
      table: {
        head: ["Setting", "Choice", "Best for"],
        rows: [
          ["Framing", "Auto", "Keeps your photo's framing, as in our example"],
          ["Framing", "Head & shoulders", "Profile pictures and avatars shown in a small circle"],
          ["Framing", "Half body", "Posts and prints where your outfit and gesture matter"],
          ["Framing", "Full body", "A whole character, head to feet, for stickers or a poster"],
          ["Strength", "Subtle", "A gentle 3D finish: closer to your real proportions"],
          ["Strength", "Strong", "Fully cartoon: bigger eyes, rounder features, more stylised"],
        ],
      },
      after: ["If friends say it doesn't look like you, try Subtle. If it looks too much like a filtered photo, try Strong."],
    },
    {
      heading: "Tips for a character that looks like you",
      list: [
        "**Use a recent, front-facing photo.** The app builds your character's face from the one it can see; a side angle leaves it guessing.",
        "**Soft, even light.** Window light gives the cleanest shapes. Harsh shadows can turn into odd lumps in 3D.",
        "**Show your hair.** Hair is one of the most recognisable parts of a cartoon character. A hat or hood hides it.",
        "**Keep glasses on if you always wear them.** They're part of how people recognise you, and the app keeps them.",
        "**Pick a photo with an expression you like.** Your character copies it, so a natural smile beats a stiff one.",
        "**Run it two or three times.** Each run is a fresh drawing, and one usually captures you best.",
      ],
    },
    {
      heading: "How is it different from the other cartoon apps?",
      paragraphs: [
        "PixelShine has several ways to turn a photo into a drawing, and they suit different moods. This one is about **3D volume and animated-film warmth**. The [cartoon generator](/creative/cartoon-generator) gives flatter 2D cartoon styles. [Anime style](/creative/anime-style) draws you as a Japanese animation character with clean linework. The [claymation portrait](/creative/claymation-portrait) makes you look hand-modelled in clay, fingerprints and all. And the [Ghibli-style](/creative/ghibli-style) app paints a soft, hand-drawn scene.",
        "If you can't decide, try the same selfie in two or three of them. Each run costs the same, and seeing them side by side is half the fun.",
      ],
    },
    {
      heading: "Ideas for your animated character",
      items: [
        { t: "A movie-poster post", d: "Add a title and a tagline in a design app and post your character as the star of a film that doesn't exist yet." },
        { t: "Party invitations", d: "A child's birthday invite with the birthday kid as an animated hero is a guaranteed hit. Leave space above the head for the text by choosing Half body framing." },
        { t: "Stickers and merch", d: "Remove the background with the [background remover](/remove-bg), then print the character on stickers, mugs or a T-shirt." },
        { t: "A family set", d: "Make one character per family member from separate selfies with the same settings, then line them up in a collage for a holiday card." },
        { t: "Before-and-after reveals", d: "Short videos that cut from your selfie to your character are a popular format. The original and the result are both saved in My Creations, ready to edit together." },
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Copy a specific film character.** It makes a new character based on you, not a version of a famous one.",
        "**Animate you.** The result is a still image, not a moving clip.",
        "**Give you a 3D model file.** It looks 3D, but it's a flat picture you can't rotate or print on a 3D printer.",
        "**Look identical every time.** Each generation is new; save the one you like best.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each character uses ${COST}, and you're only charged when the image is made. Credit packs start at ${PACK_FROM} and never expire. If a free trial is running in your country, the box above the upload tells you, and your first character is on us.`,
        "The selfie you upload is sent to fal.ai, the service that runs our image models, to draw your character. It's not used for training AI and not sold. You'll find both images in My Creations, and you can delete them there whenever you want.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a Pixar-style avatar of myself?", a: "Upload a clear, front-facing selfie, keep Framing and Strength on Auto and press Generate. Your 3D animated character is ready in under a minute." },
    { q: "Is this an official Pixar or Disney filter?", a: "No. It creates an original 3D animated-movie style character from your photo. PixelShine isn't connected with Pixar or Disney." },
    { q: "Will it still look like me?", a: "Yes. Your face shape, hair, skin tone and expression are kept, just drawn in a 3D cartoon style. Subtle strength keeps you closest to your photo." },
    { q: "Can I do it with my kids or my partner?", a: "Yes. Upload a photo with everyone in it and each person is turned into a character, or make one each for a matching set." },
    { q: "Does it work on pets?", a: "It's designed for people, but pets often come out charming too. For a dedicated pet look, try the AI pet portrait maker." },
    { q: "How much does it cost?", a: `${COST} per character, only when it's made. Packs start at ${PACK_FROM}, and a free trial, where available, covers your first one.` },
    { q: "What's the best photo to use?", a: "A recent, well-lit, front-facing selfie with your hair visible and no sunglasses." },
    { q: "Can I use it as my profile picture?", a: "Yes. Choose Head & shoulders framing so your face fills the circle, then download and upload it to any profile." },
    { q: "Can I make a full-body character?", a: "Yes. Choose Full body framing and use a photo where your whole body is visible, so the app can see your outfit and stance." },
    { q: "Why does the background look animated too?", a: "The whole scene is redrawn in the same 3D style, so your room or street becomes an animated version of itself." },
    { q: "Is there a watermark?", a: "No. Your character downloads at full size without a watermark." },
  ],
};

export default page;
