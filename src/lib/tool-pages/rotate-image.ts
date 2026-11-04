import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Rotate Image Online — Rotate 90°, 180° or Flip a Photo",
  h1: "Rotate and Flip Image",
  metaDescription: "Turn a sideways photo the right way up, or mirror a selfie, in one tap. Rotate 90° left or right, 180°, flip horizontally or vertically. Free.",
  subtitle: "Fix a sideways or upside-down photo in one tap, or mirror a selfie so the writing reads the right way. Rotate 90° left or right, turn 180°, or flip horizontally or vertically.",
  keywords: "rotate image, rotate photo, flip image, mirror image, rotate picture 90 degrees, flip photo horizontally, rotate image online, mirror selfie",
  alt: { hero: "A photo that was saved sideways, shown next to the same photo rotated the right way up" },
  sections: [
    {
      heading: "How do you rotate a picture?",
      items: [
        { t: "1. Drop the photo here", d: "Choose a JPG, PNG or WebP. The editor opens with the Rotate & Flip buttons ready." },
        { t: "2. Tap the turn you need", d: "**Rotate Left** and **Rotate Right** turn it a quarter (90°). **180°** turns it upside down. **Flip H** mirrors it left to right; **Flip V** mirrors it top to bottom. Tap again to keep turning; undo puts it back." },
        { t: "3. Download", d: "The photo is saved the right way round, so it stays that way in every app and on every device." },
      ],
    },
    {
      heading: "Why do photos upload sideways?",
      paragraphs: [
        "Your phone camera always records the picture the same way, and writes a small note inside the file saying which way up you were holding it. Your phone's gallery reads that note and shows the photo correctly. Some websites, forms, older software and printers ignore the note, so the photo appears sideways or upside down there, even though it looks fine on your phone.",
        "Rotating the photo here redraws it the right way up, so the pixels themselves are correct. It then displays properly everywhere, whether the site reads the note or not.",
      ],
    },
    {
      heading: "Rotate or flip: what's the difference?",
      table: {
        head: ["Action", "What happens", "Use it when"],
        rows: [
          ["Rotate left or right (90°)", "The picture turns a quarter; width and height swap", "A photo or scan is lying on its side"],
          ["Rotate 180°", "The picture turns upside down", "A photo or document was taken or scanned upside down"],
          ["Flip horizontal", "A mirror image, left becomes right", "A selfie shows writing backwards, or you want a face to look the other way in a layout"],
          ["Flip vertical", "Top becomes bottom, like a reflection in water", "Reflection effects, or fixing a scan fed in the wrong way"],
        ],
      },
      after: [
        "A flip is not the same as a 180° turn. Flipping a photo with text in it makes the text read backwards; rotating it 180° keeps the text readable, just upside down.",
      ],
    },
    {
      heading: "Who uses a rotate tool?",
      items: [
        { t: "Anyone uploading to a form or website", d: "A sideways ID photo, a receipt or a signed document gets rejected or looks careless. Turn it the right way up before uploading, then [crop](/crop-image) or [convert it to PDF](/image-to-pdf) if the form asks." },
        { t: "Selfie takers", d: "Front cameras often save a mirrored image, so a T-shirt slogan or a shop sign behind you reads backwards. Flip H puts it right." },
        { t: "Students and office workers scanning pages", d: "Photos of notes and documents taken from above often come out rotated. Fix each page's orientation before combining them or sharing them." },
        { t: "Designers and creators", d: "Flip a photo so the person faces into the page rather than out of it, or mirror an object to make a symmetrical layout for a thumbnail or poster." },
      ],
    },
    {
      heading: "Does rotating a photo lose quality?",
      paragraphs: [
        "Turning by 90° or 180° and flipping move pixels without changing them, so nothing is blurred or resampled. A PNG stays a lossless PNG. A JPG is saved again at high quality (92%), which keeps it visually the same; if you rotate the same JPG many times over, it's better to undo back to the original and rotate once.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. Turning and mirroring happen on your device, so they cost nothing, with no cap and no watermark. As a guest you get two; a free account makes it unlimited. The [batch editor](/batch-editor) can rotate up to 100 images the same way at once.",
      ],
    },
    {
      heading: "Tips for rotating photos",
      list: [
        "**Check the orientation where it matters**, such as the form's preview, not just on your phone; that's where the problem shows.",
        "**Rotate first, then crop.** Cropping to a portrait or landscape shape only makes sense once the photo is the right way up.",
        "**Use Flip only on purpose.** Mirroring a portrait changes how familiar a face looks to people who know it, and flips any text.",
        "**Straighten a tilted horizon** with the [AI photo editor](/ai-editor) by asking it to level the photo; this tool turns in quarter steps only.",
      ],
    },
    {
      heading: "What can't the rotate tool do?",
      list: [
        "Rotate by a small angle such as 3° to level a horizon. It turns in 90° steps.",
        "Change which way a person is facing in 3D. Flipping mirrors the whole photo; it doesn't turn a head.",
        "Fix the hidden orientation note in a file you don't download from here. Download the rotated copy and use that.",
      ],
    },
    {
      heading: "Is it private?",
      paragraphs: [
        "Your browser turns the photo itself; nothing is uploaded to rotate it. Account holders also find the rotated copy in My Creations, deletable at any time.",
      ],
    },
  ],
  faq: [
    { q: "How do I rotate a picture 90 degrees?", a: "Drop the photo on this page and tap Rotate Left or Rotate Right. Each tap turns it 90°. Then download it." },
    { q: "How do I flip a photo horizontally?", a: "Tap Flip H. The photo is mirrored left to right, which fixes backwards writing in selfies." },
    { q: "Why does my photo look sideways on a website but fine on my phone?", a: "Phones store which way up a photo was taken in a note inside the file, and some websites ignore it. Rotating here redraws the photo the right way up so it shows correctly everywhere." },
    { q: "Does rotating reduce quality?", a: "No visible loss. Quarter turns and flips don't resample the photo. PNGs stay lossless, and JPGs are saved again at high quality." },
    { q: "Can I rotate by any angle?", a: "No, it rotates in 90° steps and flips. To level a slightly tilted photo, ask the AI photo editor to straighten it." },
    { q: "Is the rotate tool free?", a: "Yes. There's no watermark, and no limit once you have a free account; two rotations work before you need one." },
    { q: "Can I rotate a PDF?", a: "No, this rotates images. Rotate the photo first, then turn it into a PDF with the image to PDF tool." },
    { q: "Can I rotate many photos at once?", a: "Yes, the batch editor rotates up to 100 images the same way in one go." },
  ],
};

export default page;
