import type { ToolPage } from "./types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "AI Photo Editor — Edit Photos by Describing the Change",
  h1: "AI Photo Editor",
  metaDescription: "Edit a photo by typing what should change: swap the sky, remove people, relight it, change an outfit. Nano Banana Pro and 16 more models.",
  subtitle: "Upload a photo and type what should change, the way you'd ask a retoucher. Remove a person, change the sky, fix the light, try a new outfit, then keep editing the result.",
  keywords: "ai photo editor, ai image editor, edit photo with ai, edit photo with text, ai picture editor, photo editor online, nano banana photo editor, change background ai",
  alt: { hero: "A person in a dim hallway, and the same person edited by AI to stand outdoors at golden hour" },
  sections: [
    {
      heading: "How do you edit a photo with AI?",
      items: [
        { t: "1. Drop your photo on this page", d: "JPG, PNG or WebP, up to 15 MB. It opens in the AI Photo Editor in your dashboard; sign in if you haven't." },
        { t: "2. Say what should change", d: "Type it in plain words: \"remove the man on the left\", \"make the sky a sunset\", \"put her in a navy blazer\", \"make it look like it was shot on film\". Or tap one of the ready-made ideas under the box. Keep the size as it is, or pick a shape such as 1:1, 4:5 or 16:9." },
        { t: "3. Generate, then keep going", d: "The edit takes around half a minute. If it's right, download it. If you want another change on top, press **Keep editing this** and describe the next one; each step builds on the last." },
      ],
    },
    {
      heading: "What can you change with a sentence?",
      paragraphs: [
        "Almost anything you can describe, as long as you describe one clear change at a time. These are the requests people use most, and what to type for each.",
      ],
      items: [
        { t: "Remove something", d: "\"Remove the people in the background\", \"remove the bin next to the door\", \"take the wires out of the sky\". The AI fills the space with what would naturally be behind. For precise control over exactly what disappears, the [object remover](/object-remover) lets you brush over it instead." },
        { t: "Change the background or setting", d: "\"Put her on a beach at sunset\", \"make the background a plain light grey studio wall\", \"move this product onto a marble counter\". Light on the subject is adjusted to match, so it doesn't look pasted on." },
        { t: "Relight or regrade", d: "\"Make it golden hour\", \"soft window light from the left\", \"moody, low-key, like a film still\", \"brighter and warmer\". This is often the single edit that makes an ordinary phone photo look professional." },
        { t: "Change clothes, hair or style", d: "\"Change the hoodie to a white linen shirt\", \"give him short curly hair\", \"turn this into a watercolour painting\". For one-tap versions of the popular ones, see the [AI outfit changer](/creative/outfit-generator) and [hairstyle changer](/creative/hairstyle-changer)." },
        { t: "Fix and restore", d: "\"Restore and sharpen this old photo\", \"remove the scratches and the fold line\", \"fix the colour cast\". For faded family photos, [restore old photos](/creative/restore-old-photos) is tuned for exactly that job." },
      ],
    },
    {
      heading: "Who is the AI photo editor for?",
      items: [
        { t: "Online sellers and small brands", d: "Turn one plain product photo into several listing and ad images: on white, on a kitchen counter, in a lifestyle scene, in morning light. You get consistent images without booking a shoot for each one." },
        { t: "Creators", d: "Change the mood of a thumbnail, clean distractions out of a vlog still, or restyle a photo to match the look of your feed, in less time than opening a desktop editor." },
        { t: "People fixing their own photos", d: "The holiday photo with a stranger in it, the group shot under harsh noon sun, the portrait with an overflowing laundry basket behind it. Describe the problem and it's gone." },
        { t: "Marketers and designers", d: "Try a concept before paying for production: the same model in three outfits, a product in four settings, a campaign image in different seasons. Ideas that took a day in Photoshop take minutes." },
      ],
    },
    {
      heading: "Which AI model edits the photo?",
      paragraphs: [
        "By default, **Nano Banana Pro** (Google's Gemini 3 Pro Image model). It is very good at keeping the parts of a photo you didn't mention exactly as they were, and at keeping faces true to the person. You can switch to 16 other editing models from the Model menu, including GPT Image 2 and 2.5, Seedream 4.5, FLUX and Qwen Image Edit. If you're not sure, leave it on Nano Banana Pro and only try another model when a particular edit isn't landing.",
        "Every request is wrapped in the same instructions before it reaches the model: change only what was asked, keep everything else, and keep people looking like themselves. That's why \"make the sky orange\" doesn't also change the shirt.",
      ],
    },
    {
      heading: "How much does the AI photo editor cost?",
      paragraphs: [
        `Each edit costs **${COST}**, charged only when it works. Credits come from a one-time pack (from ${PACK_FROM}, never expiring) or a monthly plan you can cancel any time. There's no watermark on anything you download.`,
        "If you only need simple adjustments (crop, resize, rotate, brightness and contrast, compress, convert) the [free photo editor tools](/tools) do those in your browser without credits.",
      ],
    },
    {
      heading: "How is it different from Photoshop, Canva or ChatGPT?",
      table: {
        head: ["Option", "Good for", "Keep in mind"],
        rows: [
          ["**Pixel Shine AI Photo Editor**", "Precise edits by sentence, many models in one place, and the result stays in your library.", `${COST} per edit.`],
          ["Photoshop (Generative Fill)", "Pixel-level control when you know the software.", "A subscription and a learning curve; you select areas by hand."],
          ["Canva (Magic Edit)", "Quick edits to images already in a Canva design.", "Part of Canva's paid plans; fewer model choices."],
          ["ChatGPT or Gemini apps", "Conversational edits and brainstorming.", "Can redraw the whole image, changing faces and details you wanted kept; daily limits apply."],
        ],
      },
    },
    {
      heading: "How do you write an edit that works first time?",
      list: [
        "**One change per request.** \"Remove the car\" then \"make it evening\" works better than both at once.",
        "**Say where.** \"The man on the left\", \"the sign above the door\", \"the bottom-right corner\".",
        "**Describe the result, not the process.** \"A plain white background\" rather than \"use a background removal tool\".",
        "**Name what must stay.** For portraits, adding \"keep her face and expression exactly the same\" helps when the edit is close to the face.",
        "**Pick a size only when you need one.** \"Keep original\" preserves your framing; a new shape such as 9:16 may extend or crop the scene.",
      ],
    },
    {
      heading: "What can't the AI photo editor do?",
      list: [
        "Read your mind. A vague request like \"make it better\" gives an unpredictable result; say what better means.",
        "Keep text perfect. Signs and labels can come back slightly altered, so check any lettering.",
        "Guarantee every detail. Hands, jewellery and patterns are the usual places to look twice. Running the same request again gives a fresh attempt.",
        "Edit a photo of someone in a way they haven't agreed to. Don't use it to put real people in misleading or intimate situations; that's against the [terms](/terms).",
      ],
    },
    {
      heading: "What happens to your photo?",
      paragraphs: [
        "Your photo and request are sent to fal.ai, which runs the AI model, and the result is saved to My Creations in your account. You can delete it there whenever you like. Images aren't used to train AI models and aren't sold. See the [privacy policy](/privacy).",
      ],
    },
  ],
  faq: [
    { q: "How do I edit a photo with AI?", a: "Upload the photo, type what should change in plain words, and press Generate. In about half a minute you get the edited photo, and you can keep editing it with another request." },
    { q: "Is the AI photo editor free?", a: `Each AI edit costs ${COST}, charged only when it works. Packs start at ${PACK_FROM} and never expire. The basic editing tools, like crop, resize and compress, are free in your browser.` },
    { q: "Which model does it use?", a: "Nano Banana Pro, Google's Gemini 3 Pro Image model, by default. You can pick from 16 other editing models, including GPT Image 2, Seedream 4.5, FLUX and Qwen, from the Model menu." },
    { q: "Will it change my face?", a: "It's instructed to keep people looking like themselves and to change only what you ask. Nano Banana Pro is especially good at this. If a face drifts, run the request again or add \"keep the face exactly the same\"." },
    { q: "Can I remove people from a photo?", a: "Yes. Type \"remove the person on the right\" or similar. For exact control over what disappears, the object remover lets you brush over it." },
    { q: "Can I change the background?", a: "Yes. Describe the new setting, such as a studio wall, a beach or an office, and the subject is relit to fit it." },
    { q: "Can I make several edits in a row?", a: "Yes. After each result, press Keep editing this and describe the next change. Each step builds on the previous result." },
    { q: "Is there a watermark?", a: "No. Edited photos download without a watermark, on any plan." },
    { q: "How long does an edit take?", a: "Usually around 20 to 40 seconds, depending on the model and the size of the photo." },
    { q: "Can I use the results commercially?", a: "Yes, for your own photos and products. Make sure you have the right to use the original photo, and don't use edits to mislead people about real people or events." },
  ],
};

export default page;
