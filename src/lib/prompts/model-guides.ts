import type { AppSection } from "@/lib/app-pages/types";

/**
 * The written guide on each /{model}-prompts page, below the prompts.
 * Like the blurbs in ModelLanding, it describes what the collection shows and
 * how to use it here, rather than vendor claims about the model itself.
 */
export const MODEL_GUIDES: Record<string, AppSection[]> = {
  "nano-banana-pro": [
    {
      heading: "What Nano Banana Pro prompts look like",
      paragraphs: [
        "This is the largest collection in the library, and it has a clear character. A big share of the prompts edit a photo you supply rather than inventing a scene from nothing: \"keep the face from the reference image\", \"use the person in image 1\", \"turn this selfie into…\". Many are written as structured instructions, sometimes literally as JSON, with separate fields for subject, outfit, background, lighting and camera.",
        "That structure is worth copying even if you use another model. Splitting a prompt into labelled parts makes it easy to change one thing, such as the outfit, without disturbing the rest.",
      ],
    },
    {
      heading: "A Nano Banana Pro-style prompt, taken apart",
      paragraphs: ["**The prompt:** \"Using the person in image 1: keep their face, hairstyle and glasses exactly. Subject: the same person as a 1990s bookshop owner. Outfit: a moss-green cardigan over a white shirt. Setting: a cramped bookshop at closing time, warm lamps. Camera: 50 mm, eye level, shallow depth of field.\""],
      items: [
        { t: "\"Using the person in image 1\"", d: "Points at the photo, the habit this collection relies on." },
        { t: "Labelled fields", d: "Subject, outfit, setting and camera are separate, so you can change one at a time." },
        { t: "\"Keep… exactly\"", d: "The identity lock comes before any change." },
      ],
    },
    {
      heading: "How to write your own Nano Banana Pro prompt",
      list: [
        "**Start with what to keep.** If you're using a photo, name the features that must not change: face, hairstyle, glasses, skin tone.",
        "**Then describe the change** in concrete terms: the outfit, the place, the time of day.",
        "**Add camera and light** last: lens length, framing, light direction.",
        "**Quote any text** you want in the image, and keep it short.",
        "**Number your images** when you upload several, and refer to them as image 1, image 2 and so on.",
      ],
    },
    {
      heading: "Using these prompts on PixelShine",
      paragraphs: [
        "Press **Generate this** on any prompt to open Create Image with the prompt filled in. Nano Banana Pro is one of the models there, and prompts that need your photo ask for it before they run. Generating uses credits; copying the prompt to use elsewhere is free. Prefer one tap and no prompt at all? The [AI photo apps](/creative) carry tuned versions of the most popular looks.",
      ],
    },
  ],
  "gpt-image-2": [
    {
      heading: "What GPT Image 2 prompts look like",
      paragraphs: [
        "The prompts collected for GPT Image 2 lean towards designed images with words in them: posters, infographics, menus, product labels, comic panels and social graphics. They tend to be long and specific, reading like a brief to a designer, with the exact text in quotes and instructions about where each element sits.",
        "If your idea is mostly layout and lettering, this is the collection to study. The same habits of quoting text, fixing the number of panels and naming fonts help with any model.",
      ],
    },
    {
      heading: "A GPT Image 2-style prompt, taken apart",
      paragraphs: ["**The prompt:** \"A 2:3 poster for a plant swap: a hand-drawn monstera leaf in the centre, the title \"PLANT SWAP\" in chunky green letters at the top, and \"Sunday · 10 am · Library garden\" in small caps at the bottom. Cream background, two-colour print style, generous margins.\""],
      items: [
        { t: "Format first", d: "\"A 2:3 poster\" fixes the shape before anything else." },
        { t: "Quoted text with positions", d: "Each piece of text says what it is and where it goes." },
        { t: "\"Two-colour print style\"", d: "A limited palette keeps the design clean." },
      ],
    },
    {
      heading: "How to write your own GPT Image 2 prompt",
      list: [
        "**Describe the layout first**: format, sections, what goes at the top and bottom.",
        "**Put every piece of text in quotes**, and keep each line short.",
        "**Name the style** of type and illustration: bold condensed sans, flat vector icons, retro print.",
        "**Limit the palette** to a few named colours.",
        "**Proofread the result** letter by letter before sharing or printing.",
      ],
    },
    {
      heading: "Using these prompts on PixelShine",
      paragraphs: [
        "GPT Image 2 is available in Create Image, along with the newer GPT Image 2.5 options. **Generate this** opens a prompt there, ready to run; generating uses credits, and copying is free. For posters you'll print, generate at the largest size and use the [upscaler](/upscale) before sending the file to a printer.",
      ],
    },
    {
      heading: "Common GPT Image 2 prompt shapes",
      list: [
        "**The poster brief**: format, image, title, details, style, palette.",
        "**The infographic**: title, numbered steps, icon style, labels.",
        "**The product sheet**: hero shot plus callouts for features.",
        "**The comic page**: panel count, character card, panel-by-panel action.",
      ],
    },
  ],
  "gpt-image-1-5": [
    {
      heading: "What GPT Image 1.5 prompts look like",
      paragraphs: [
        "The GPT Image 1.5 collection overlaps heavily with GPT Image 2's: layout-led compositions, typography, explainer graphics and stylised portraits. Many were written when 1.5 was the newest OpenAI image model, so they're a good record of the prompt patterns people found reliable at the time.",
      ],
    },
    {
      heading: "A GPT Image 1.5-style prompt, taken apart",
      paragraphs: ["**The prompt:** \"An explainer graphic titled \"How Bread Rises\" with three numbered panels in a row: \"Mix\", \"Rest\", \"Bake\", each with a simple flat illustration. Warm wheat and brown palette, rounded sans-serif labels, white background.\""],
      items: [
        { t: "A clear title", d: "In quotes, so it's spelled as written." },
        { t: "\"Three numbered panels in a row\"", d: "The panel count and order are fixed." },
        { t: "One-word labels", d: "Short labels are the most reliable text." },
      ],
    },
    {
      heading: "Getting the most from older prompts",
      list: [
        "**Most transfer directly** to GPT Image 2; paste them in unchanged first.",
        "**Trim workarounds**: older prompts sometimes repeat instructions several times to force compliance; newer models rarely need it.",
        "**Keep the structure**: the habit of describing layout, text and palette separately still works well.",
        "**Update the text** in quotes to your own words, and check spelling in the result.",
      ],
    },
    {
      heading: "Using these prompts on PixelShine",
      paragraphs: [
        "GPT Image 1.5 isn't offered in Create Image, but GPT Image 2 is, and **Generate this** opens these prompts there. If a result differs from the example image, that's usually the model difference; small wording changes, such as being more specific about layout, close the gap.",
      ],
    },
    {
      heading: "What these prompts are especially good for",
      list: [
        "**Explainer graphics** with numbered steps and labels.",
        "**Posters and covers** with a short, quoted title.",
        "**Stylised portraits** with a clear art direction.",
        "**Product layouts** with callouts and spec panels.",
        "**Comic panels** with simple speech bubbles.",
      ],
    },
  ],
  "seedream-4-5": [
    {
      heading: "What Seedream 4.5 prompts look like",
      paragraphs: [
        "The Seedream 4.5 collection is the most photographic in the library. The prompts read like a photographer's shot notes: the lens, the distance, where the light comes from, what time of day it is, and how the skin and fabric should look. Portraits, product shots and atmospheric scenes dominate.",
        "Even if you never use Seedream, these are the prompts to borrow camera language from; descriptions of light and lens carry over to every image model.",
      ],
    },
    {
      heading: "A Seedream 4.5-style prompt, taken apart",
      paragraphs: ["**The prompt:** \"An 85 mm portrait of a potter at her wheel, hands covered in wet clay, looking up with a quiet smile. Soft window light from the left, dust in the air, shallow depth of field, earthy brown and cream tones, natural skin texture, fine film grain.\""],
      items: [
        { t: "\"85 mm portrait\"", d: "The lens sets perspective and background blur." },
        { t: "\"Soft window light from the left\"", d: "Light with a source and a direction." },
        { t: "\"Natural skin texture, fine film grain\"", d: "Finish words that keep it photographic." },
      ],
    },
    {
      heading: "How to write your own Seedream 4.5 prompt",
      list: [
        "**Describe a real shot**: subject, action, setting and time of day.",
        "**Name the light**: soft window light from the left, hard noon sun, neon at night.",
        "**Pick a lens**: 35 mm environmental, 85 mm portrait, macro, wide aerial.",
        "**Ask for natural texture**: skin pores, fabric weave, film grain.",
        "**Avoid stacked praise words** like \"masterpiece, 8K\"; they add nothing a description of light doesn't.",
      ],
    },
    {
      heading: "Using these prompts on PixelShine",
      paragraphs: [
        "Seedream 4.5 is one of the models in Create Image, alongside newer Seedream versions. **Generate this** opens a prompt there; generating uses credits and copying is free. For a portrait of yourself in one tap, the [AI headshot](/ai-headshot) and [AI photo apps](/creative) do the prompt-writing for you.",
      ],
    },
    {
      heading: "Borrowing Seedream's camera language",
      list: [
        "**Portraits**: \"85 mm, soft window light from the left, shallow depth of field\".",
        "**Products**: \"large softbox from above, white bounce card, soft reflection below\".",
        "**Food**: \"45 degrees, backlight through steam, warm morning tones\".",
        "**Street**: \"35 mm at eye level, overcast light, candid moment\".",
        "**Night**: \"neon reflections on wet asphalt, high contrast, fine grain\".",
      ],
    },
  ],
  "seedance-2-0": [
    {
      heading: "What Seedance 2.0 prompts look like",
      paragraphs: [
        "Seedance 2.0 prompts are the most structured video prompts in the library. Instead of one sentence, many describe a clip as a timeline: what happens in the first seconds, how the camera moves, what changes next, and what you should hear. On each prompt's page, timeline prompts are shown shot by shot so they're easy to read and edit.",
      ],
    },
    {
      heading: "A Seedance 2.0-style timeline, taken apart",
      paragraphs: ["**The prompt:** \"0–3 s: wide shot of a lighthouse on a cliff at dusk, waves crashing below. 3–7 s: slow push-in toward the lit window at the top. 7–10 s: inside, an old keeper pours tea and looks out at the storm. Sound: wind, waves, a kettle whistling.\""],
      items: [
        { t: "Time stamps", d: "Each beat has its own few seconds." },
        { t: "A camera move per beat", d: "Wide, then push-in, then an interior shot." },
        { t: "A sound line", d: "Ambience and one small effect make it feel finished." },
      ],
    },
    {
      heading: "How to write your own video prompt in this style",
      list: [
        "**Plan the shots**: two to four beats for a short clip.",
        "**Give each beat a camera move**: push-in, tracking, orbit, crane.",
        "**Describe motion, not just a scene**: what moves, and how fast.",
        "**Keep characters consistent** with one fixed description reused in every beat.",
        "**Add sound** if your model generates it: ambience, effects, a short line of dialogue.",
      ],
    },
    {
      heading: "Using these prompts",
      paragraphs: [
        "PixelShine doesn't generate video, so copy a prompt and paste it into the video model's own app or website. A good workflow is to make a starting image first, with Create Image or an [AI photo app](/creative), then use it as the first frame if your video model accepts images. That keeps the look and the people consistent.",
      ],
    },
    {
      heading: "Reading a timeline prompt",
      list: [
        "**Each beat** starts with a time or shot number, so you can see the clip's structure.",
        "**The camera** is named in every beat: push-in, pan, orbit or handheld.",
        "**Sound** often has its own line: ambience, effects or a short line of speech.",
        "**To shorten a clip**, delete the later beats rather than squeezing them.",
        "**To change the story**, keep the camera directions and rewrite the action.",
      ],
    },
  ],
  "grok-imagine": [
    {
      heading: "What Grok Imagine prompts look like",
      paragraphs: [
        "The Grok Imagine collection is video-first and playful: physical comedy, surprising transformations, impossible camera moves and short narrative beats. Many prompts are brief, a sentence or two built around one funny or striking idea, which makes them a good source of ideas rather than finished scripts.",
      ],
    },
    {
      heading: "A Grok Imagine-style prompt, taken apart",
      paragraphs: ["**The prompt:** \"Handheld phone video: a golden retriever proudly carries a huge stick through a narrow doorway, gets stuck, thinks for a second, then turns its head and walks through sideways. Sunny garden, playful mood.\""],
      items: [
        { t: "\"Handheld phone video\"", d: "Sets a casual, real-life look." },
        { t: "A set-up and a punchline", d: "Stuck, a pause, then the clever solution." },
        { t: "Short and visual", d: "One idea, easy to act out in a few seconds." },
      ],
    },
    {
      heading: "Turning an idea into a stronger prompt",
      list: [
        "**Keep the one idea**: the joke or surprise is the point.",
        "**Add a camera**: \"handheld phone video\" or \"slow-motion close-up\" changes the feel completely.",
        "**Set the scene** in a few words: where, when and what light.",
        "**Describe the ending**, so the clip lands on the punchline.",
      ],
    },
    {
      heading: "Using these prompts",
      paragraphs: [
        "Video prompts are for copying into a video model's own app; PixelShine doesn't generate video. The site does offer Grok Imagine's image model in Create Image, which is handy for making a still in the same spirit to use as a starting frame.",
      ],
    },
    {
      heading: "Ideas the Grok Imagine collection does well",
      list: [
        "**Physical comedy**: a cat knocking things off a shelf in slow motion, a cake collapsing at the worst moment.",
        "**Transformations**: one object or animal turning smoothly into another.",
        "**Impossible camera moves**: flying through a keyhole, orbiting a falling drop of water.",
        "**Tiny stories**: a set-up and a punchline in under ten seconds.",
        "**Starting frames**: make a still with Grok Imagine's image model in Create Image, then animate it in the video app.",
      ],
    },
  ],
  "gemini-3": [
    {
      heading: "What Gemini 3 prompts look like",
      paragraphs: [
        "The Gemini 3 collection is the smallest in the library and the most experimental. Many prompts read like people testing what the model will do: unusual mash-ups, conversational instructions, and step-by-step edits to an existing image. That makes it a good place to browse for ideas you wouldn't have thought to try.",
      ],
    },
    {
      heading: "A conversational prompt, taken apart",
      paragraphs: ["**The prompt:** \"Make a cosy illustration of a reading nook by a rainy window, with a sleeping cat on a knitted blanket. Then, in a second step: keep everything the same but change the season to snowy winter and add fairy lights.\""],
      items: [
        { t: "Plain sentences", d: "Written as you'd ask a person." },
        { t: "Two steps", d: "Make the image first, then ask for one change." },
        { t: "\"Keep everything the same\"", d: "Says what must not move when editing." },
      ],
    },
    {
      heading: "Writing conversational image prompts",
      list: [
        "**Write as you'd brief a person**: full sentences are fine.",
        "**Edit in steps**: make the image, then ask for one change at a time.",
        "**Be explicit about what stays the same** when you ask for a change.",
        "**Keep text short and quoted** when you want words in the picture.",
      ],
    },
    {
      heading: "Using these prompts on PixelShine",
      paragraphs: [
        "**Generate this** opens a prompt in Create Image, where you can pick a model such as Nano Banana Pro. Generating uses credits; copying is free. To make step-by-step edits to a picture, the [AI photo editor](/ai-editor) takes one instruction at a time.",
      ],
    },
    {
      heading: "Ways to use a small, experimental collection",
      list: [
        "**Browse for ideas** rather than searching: the surprises are the point.",
        "**Combine two prompts**: take the subject from one and the style from another.",
        "**Turn an idea into a template** by replacing the specific subject with a fill-in field.",
        "**Try the same prompt in two models** in Create Image and keep the better result.",
        "**Save what works**: keep a note of prompts that gave you good results.",
      ],
    },
  ],
};

/** Questions written for each model page, in place of answers that would read the same on all seven. */
export const MODEL_FAQS: Record<string, { q: string; a: string }[]> = {
  "nano-banana-pro": [
    { q: "Where do the Nano Banana Pro prompts come from?", a: "From YouMind OpenLab's open collection of Nano Banana Pro prompts on GitHub, shared under CC BY 4.0. Each was first posted by an individual creator, who is named and linked on every card and prompt page here, as the licence requires." },
    { q: "How do I use a Nano Banana Pro prompt with my own photo?", a: "Open the prompt, fill in any fields, and press Generate this. Create Image opens with the prompt loaded and asks for your photo when the prompt needs one. You can also copy the text into any other app where you use Nano Banana Pro." },
    { q: "Does it cost anything to copy these?", a: "No. Copying needs no account and is always free; only generating an image on PixelShine uses credits." },
  ],
  "gpt-image-2": [
    { q: "Where do the GPT Image 2 prompts come from?", a: "They're adapted from YouMind OpenLab's open GPT Image 2 prompt collection on GitHub (CC BY 4.0). Every card credits and links the creator who first shared the prompt." },
    { q: "How do I get the text in my image right?", a: "Keep each line of text short, put it in quotes, say where it goes, and proofread the result letter by letter; the poster and infographic prompts here show the pattern." },
    { q: "Can I run these on PixelShine?", a: "Yes. Generate this opens the prompt in Create Image, where GPT Image 2 is one of the models; generating uses credits, while copying is free." },
  ],
  "gpt-image-1-5": [
    { q: "Where do the GPT Image 1.5 prompts come from?", a: "From YouMind OpenLab's open GPT Image 1.5 collection on GitHub, shared under CC BY 4.0, with each original creator credited and linked on the card." },
    { q: "Will a GPT Image 1.5 prompt work in a newer model?", a: "Usually. Paste it unchanged first; if the result drifts, tighten the layout and text instructions rather than adding repetition." },
    { q: "Can I try one without an account?", a: "You can read and copy any prompt without an account. Generating with Create Image needs a free account and uses credits." },
    { q: "Should I still use GPT Image 1.5 prompts?", a: "Yes, as a source of proven layouts and wording. The structure carries over even when you generate with a newer model." },
  ],
  "seedream-4-5": [
    { q: "Where do the Seedream 4.5 prompts come from?", a: "They come from YouMind OpenLab's open Seedream 4.5 prompt collection on GitHub (CC BY 4.0); the person who wrote each one is named and linked on its card." },
    { q: "Why do these prompts mention lenses and light so much?", a: "Because describing a real camera setup is the most reliable way to get a photographic result, and this collection's authors lean on it heavily." },
    { q: "Can I generate Seedream images here?", a: "Yes. Seedream 4.5 is one of the models in Create Image; press Generate this on a prompt to open it there. Generating uses credits." },
    { q: "Do Seedream prompts work for products?", a: "Yes. The product shots in this collection describe studio setups in detail, which transfer well to your own items." },
  ],
  "seedance-2-0": [
    { q: "Where do the Seedance 2.0 prompts come from?", a: "From YouMind OpenLab's open Seedance 2.0 prompt collection on GitHub, under CC BY 4.0. Each card names and links the creator who wrote it." },
    { q: "How do I use a Seedance 2.0 prompt?", a: "Copy it and paste it into the app or website where you use Seedance 2.0. PixelShine doesn't generate video, so there's no Generate button on video prompts." },
    { q: "What is a timeline prompt?", a: "A video prompt written as a sequence of moments, each with its action, camera move and sound. On each prompt's page they're laid out shot by shot." },
    { q: "How long should a Seedance clip be?", a: "Many timeline prompts here plan a clip of ten seconds or more; drop the later beats for a shorter social clip." },
  ],
  "grok-imagine": [
    { q: "Where do the Grok Imagine prompts come from?", a: "They're from YouMind OpenLab's open Grok Imagine collection on GitHub (CC BY 4.0), each credited to the creator who posted it." },
    { q: "How do I use a Grok Imagine video prompt?", a: "Copy it into the app where you use Grok Imagine. Video isn't generated on PixelShine, though Create Image offers Grok Imagine's image model for making a still in the same spirit." },
    { q: "Are these prompts good for short funny clips?", a: "Yes; that's the collection's character. Use them as idea starters and adjust the camera and ending to suit your clip." },
    { q: "Why are Grok Imagine prompts so short?", a: "They're written for short clips, so most are built around a single idea or punchline rather than a full script." },
  ],
  "gemini-3": [
    { q: "Where do the Gemini 3 prompts come from?", a: "From YouMind OpenLab's open Gemini 3 prompt collection on GitHub, shared under CC BY 4.0, with every original author credited on the card." },
    { q: "Why are these prompts so varied?", a: "The collection is small and experimental, so it's full of people testing ideas rather than polished templates. Browse it for inspiration." },
    { q: "Can I make step-by-step edits instead?", a: "Yes. Generate an image in Create Image, then use the AI photo editor to change one thing at a time." },
    { q: "Which prompts here are worth trying first?", a: "The ones with editable fields are the quickest wins: swap in your own subject and see how the idea changes." },
  ],
};
