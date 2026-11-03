import type { ToolPage } from "./types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "AI Image Generator — Text to Image With Nano Banana Pro",
  h1: "AI Image Generator",
  metaDescription: "Describe a picture and get it in about half a minute. Nano Banana Pro, GPT Image, Seedream, FLUX and more in one place. Add your photo to be in it.",
  subtitle: "Describe the picture you want and get it in about half a minute: photos, portraits, product shots, posters, illustrations. Choose from 29 models, starting with Google's Nano Banana Pro, and add your own photo to put yourself in it.",
  keywords: "ai image generator, text to image, ai art generator, ai picture generator, nano banana pro, image generator from text, ai photo generator, create image with ai",
  ctaText: "Create an image",
  sections: [
    {
      heading: "How do you make an image with AI?",
      items: [
        { t: "1. Open Create Image and describe the picture", d: "Type what you want to see, in as much detail as you like, up to 4,000 characters. Stuck for an idea? Tap one of the images under **Need an idea?** to start from its prompt." },
        { t: "2. Pick a shape and a model", d: "Choose 1:1 square, 4:5 or 3:4 portrait, 16:9 landscape, 9:16 for Stories, or 3:2 photo. Leave the model on Nano Banana Pro, or choose another." },
        { t: "3. Generate, then refine", d: "Your image is ready in about half a minute. Not quite right? Change a few words and run it again; each run is a new take. Download the one you like, or open it in the [AI photo editor](/ai-editor) to change details." },
      ],
    },
    {
      heading: "Which AI model should you use?",
      paragraphs: [
        "Different models are good at different things. You don't need to learn them all: start with the default, and switch only when a result isn't landing.",
      ],
      table: {
        head: ["Model", "Strongest at"],
        rows: [
          ["**Nano Banana Pro** (Google Gemini 3 Pro Image)", "The default. Realistic photos and people, following long, detailed prompts, legible text in images."],
          ["GPT Image 2 and 2.5 (Sunburst, Flare)", "Following instructions precisely, layouts, posters and text, accurate faces from your own photo."],
          ["Seedream 4.5 and v5", "Polished, high-detail images with strong colour; good for fashion and product shots."],
          ["FLUX (2 Pro, 3, Kontext)", "Photographic realism, natural light and textures."],
          ["Recraft v4", "Illustration, graphic design, flat and vector-like styles."],
          ["Grok Imagine, Qwen Image, Krea and others", "More looks to try when you want a different take on the same prompt."],
        ],
      },
    },
    {
      heading: "What can you make with an AI image generator?",
      items: [
        { t: "Pictures of yourself, in places you've never been", d: "Add your own photo and describe the scene: you on a Tokyo street at night, in a 1970s magazine cover, as a medieval painting. You can add up to 14 photos, so friends, family or products can all be in the same picture." },
        { t: "Product and marketing images", d: "Online sellers and small brands describe a scene for a product (\"a glass bottle of olive oil on a rustic table, morning light, shallow depth of field\") and get lifestyle images without a shoot. Add a photo of the real product to keep it accurate." },
        { t: "Social posts, thumbnails and posters", d: "Creators make backgrounds, thumbnails, event posters and quote cards in exactly the shape each platform wants: 9:16 for Stories and Reels, 16:9 for YouTube, 4:5 for the feed." },
        { t: "Illustrations and concept art", d: "Writers, game designers and teachers make characters, scenes and diagrams to show an idea, in styles from watercolour and anime to clay and 3D." },
        { t: "Gifts and keepsakes", d: "Birthday cards, pet portraits, a family as cartoon characters, a couple in a painting: one-off pictures that mean something to one person." },
      ],
    },
    {
      heading: "How do you write a good image prompt?",
      paragraphs: [
        "A good prompt describes the picture the way a photographer or illustrator would brief it. Cover these five things and most results land first time:",
      ],
      list: [
        "**Subject:** who or what, doing what. \"A young woman reading on a balcony.\"",
        "**Setting:** where and when. \"A narrow street in Lisbon, late afternoon.\"",
        "**Style:** photo, painting, 3D, anime, poster. \"Shot on 35mm film\" or \"soft watercolour\".",
        "**Light and mood:** \"warm golden light\", \"moody and dark\", \"bright and airy\".",
        "**Framing:** \"close-up portrait\", \"wide shot\", \"seen from above\".",
      ],
      after: [
        "Then add what matters most last of all, such as colours, clothes or any text you want in the image, in quotes. Leave out what doesn't matter; long lists of keywords like \"8k, ultra detailed, masterpiece\" add little to modern models. For inspiration, the [prompt library](/prompts) has hundreds of prompts, each shown with the image it made, and [Nano Banana Pro prompts](/nano-banana-pro-prompts) collects ones written for the default model.",
      ],
    },
    {
      heading: "Can you put your own face in an AI image?",
      paragraphs: [
        "Yes. In Create Image, add your photo under **Your image** and describe the scene you want to be in. The generator is told to keep your face, features, skin tone and hair, and to change the rest. A clear, well-lit, front-facing photo gives the closest likeness. For one-tap versions of popular looks, the [AI photo apps](/creative) turn a selfie into a [Ghibli-style picture](/creative/ghibli-style), an [action figure](/creative/3d-figurine), a [professional headshot](/creative/professional-headshot) and around 200 more without writing a prompt.",
      ],
    },
    {
      heading: "How much does the AI image generator cost?",
      paragraphs: [
        `Each image costs **${COST}**, charged only when it works, whichever model you choose. Credits come from a one-time pack (from ${PACK_FROM}; pack credits never expire) or a monthly plan you can cancel any time. You need a free account. Images download at full quality with no watermark.`,
      ],
    },
    {
      heading: "How is it different from ChatGPT, Gemini or Midjourney?",
      table: {
        head: ["Option", "Good for", "Keep in mind"],
        rows: [
          ["**Pixel Shine**", "Many top models in one place, your own photos in the picture, and the editing tools right next to it.", `${COST} per image; no subscription needed.`],
          ["ChatGPT or Gemini apps", "Making images inside a conversation.", "One model each, daily limits, and less control over size and style."],
          ["Midjourney", "A distinctive artistic look and a big community.", "A subscription, and its own way of writing prompts."],
          ["Canva", "Dropping a generated image straight into a design.", "Generation limits depend on the plan."],
        ],
      },
    },
    {
      heading: "What can't AI image generators do?",
      list: [
        "**Spell long text perfectly every time.** Short words and titles usually come out right, especially with Nano Banana Pro and GPT Image; check every letter before printing.",
        "**Make a real photograph of a real event.** Generated images are new pictures. Don't present them as real news, evidence or documents.",
        "**Copy a living artist, a brand or a famous person.** Describe the style you like in your own words instead; requests that copy a protected character or use a real person without consent are against the [terms](/terms).",
        "**Get hands, crowds and small details right every time.** Run it again, or fix a detail in the AI photo editor.",
      ],
    },
    {
      heading: "What happens to your prompts and images?",
      paragraphs: [
        "Your prompt (and any photo you add) is sent to fal.ai, which runs the model, and the image is saved in My Creations in your account. You can delete it there at any time. Your images and prompts aren't used to train AI models and aren't sold. More in the [privacy policy](/privacy).",
      ],
    },
  ],
  faq: [
    { q: "How do I generate an image with AI?", a: "Open Create Image, describe the picture you want, choose a shape and a model, and press Generate. The image is ready in about half a minute." },
    { q: "Is the AI image generator free?", a: `Each image costs ${COST}, charged only when it works. Packs start at ${PACK_FROM} and their credits never expire. There's no watermark.` },
    { q: "Which model is best?", a: "Start with Nano Banana Pro, the default: it's strong at realistic photos, people and following detailed prompts. Try GPT Image for precise layouts and text, Seedream for polished fashion and product shots, or Recraft for illustration." },
    { q: "Can I put myself in the image?", a: "Yes. Add your photo under Your image and describe the scene. You can add up to 14 photos to put several people or products in one picture." },
    { q: "What sizes can I make?", a: "1:1 square, 4:5 and 3:4 portrait, 16:9 landscape, 9:16 for Stories and Reels, and 3:2 photo." },
    { q: "How long can my prompt be?", a: "Up to 4,000 characters. A clear paragraph covering subject, setting, style, light and framing usually works best." },
    { q: "Can I use the images commercially?", a: "Yes, for your own projects and products. Don't copy protected characters or brands, and don't use real people's likeness without their consent." },
    { q: "Where can I find prompt ideas?", a: "Tap any image under Need an idea? in Create Image, or browse the prompt library, which shows each prompt with the image it made." },
    { q: "Can it write text in images?", a: "Yes, short text usually comes out right with Nano Banana Pro and GPT Image. Put the exact words in quotes, and check the spelling before you use it." },
  ],
};

export default page;
