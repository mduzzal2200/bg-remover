import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Blur Image — Blur or Pixelate Part of a Photo Online",
  h1: "Free Blur Image Tool",
  metaDescription: "Hide a face, a licence plate, an address or a name before you share a photo. Drag a box to blur or pixelate it. Free, private, no sign-up.",
  subtitle: "Hide faces, licence plates, addresses and names before a photo goes online. Drag a box over anything private and it's blurred or pixelated, right in your browser.",
  keywords: "blur image, blur part of image, blur face in photo, pixelate image, censor image, blur license plate, hide information in photo, blur background",
  sections: [
    {
      heading: "How do you blur part of a picture?",
      items: [
        { t: "1. Add your photo", d: "Drop it into the tool above, or tap to choose one. Nothing is uploaded; the photo stays in your browser." },
        { t: "2. Choose Blur or Pixelate and drag a box", d: "Drag over each thing you want hidden: a face, a number plate, a screen, a house number. Every box is blurred the moment you let go. Use the slider to make it stronger, from a soft blur to a heavy one, or larger pixel blocks." },
        { t: "3. Check and download", d: "Undo the last box or reset if you went too far, then download a full-resolution PNG with no watermark." },
      ],
    },
    {
      heading: "Blur or pixelate: which hides better?",
      table: {
        head: ["", "Blur", "Pixelate"],
        rows: [
          ["Looks like", "A soft, out-of-focus patch", "A mosaic of coloured squares"],
          ["Feels", "Subtle and tidy; the photo still looks natural", "Obviously censored, like TV news"],
          ["Best for", "Bystanders' faces, background details, a cluttered desk", "Licence plates, text, screens, anything that must be unreadable"],
          ["Make it safe", "Use a strong setting so shapes can't be made out", "Use big blocks; small blocks can still hint at letters"],
        ],
      },
      after: [
        "For anything sensitive, such as an ID number, a signature, a bank detail or a child's face in a public post, use **strong** settings. A light blur over large, high-contrast text can sometimes still be guessed. When in doubt, also [crop](/crop-image) the detail out entirely.",
      ],
    },
    {
      heading: "Who blurs photos, and what do they hide?",
      items: [
        { t: "Parents and families", d: "Blur the faces of other people's children in school, party and sports photos before posting them. Many schools ask for exactly this." },
        { t: "People selling online", d: "A car listing shows the number plate; a flat listing shows the house number, the view from the window or family photos on the wall. Blur them before the ad goes live." },
        { t: "Anyone sharing a screenshot", d: "Hide names, phone numbers, email addresses, order numbers and profile pictures in chats or receipts before you share them as proof or ask for help." },
        { t: "Journalists, bloggers and researchers", d: "Protect the identity of people who didn't agree to be shown, and redact private details in documents you publish." },
        { t: "Travellers and street photographers", d: "Keep a great street scene, and blur the faces of strangers who happen to be in it." },
      ],
    },
    {
      heading: "Is it really private?",
      paragraphs: [
        "Yes, and for a tool you use on private things, that matters. The photo is opened and blurred entirely in your browser; it isn't uploaded, stored or seen by anyone. The file on your device isn't changed either; you download a new copy.",
        "One thing to know: blurring is permanent in the copy you download. The blurred pixels are replaced, not covered, so the hidden detail can't be un-blurred from that file. Keep your original if you might need it later.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Completely. There's no sign-up, no limit on photos or boxes, and no watermark. The download is a PNG at the same size as your photo.",
      ],
    },
    {
      heading: "Tips for a clean blur",
      list: [
        "**Draw the box a little larger** than the thing you're hiding, so no edge peeks out.",
        "**Blur each face separately** in a group photo; one big box over several people looks heavy-handed.",
        "**Zoom in on your phone** to check small text after blurring; it's easy to miss a line.",
        "**Use pixelate for text.** It reads clearly as \"hidden on purpose\" and leaves no letter shapes.",
        "**Need a blurred background** behind a person, like a portrait-mode effect? That's a different job; the [AI photo editor](/ai-editor) can soften the whole background while keeping the person sharp.",
      ],
    },
    {
      heading: "What can't the blur tool do?",
      list: [
        "Find faces or plates automatically. You choose what to hide, which also means nothing is hidden that you didn't intend.",
        "Blur video. It works on photos and screenshots.",
        "Remove the thing completely. Blurring hides it; to make an object or person disappear entirely, use the [object remover](/object-remover).",
        "Blur in any shape other than a rectangle. Draw several smaller boxes for an awkward shape.",
      ],
    },
  ],
  faq: [
    { q: "How do I blur part of a photo?", a: "Add the photo to the tool, choose Blur or Pixelate, and drag a box over the area you want hidden. Repeat for each area, then download the PNG." },
    { q: "Can I blur a face in a photo?", a: "Yes. Drag a box over the face and it's blurred instantly. Use a strong setting so the face can't be recognised." },
    { q: "Should I blur or pixelate a licence plate?", a: "Pixelate with large blocks is the safest choice for plates and text, because it leaves no readable letter shapes." },
    { q: "Is my photo uploaded?", a: "No. Everything happens in your browser, and the photo is never uploaded, stored or seen by anyone." },
    { q: "Can someone un-blur my photo?", a: "Not from the file you download, because the blurred pixels are replaced. Use strong settings for sensitive text, since a light blur over large text can sometimes be guessed." },
    { q: "Is the blur tool free?", a: "Yes, completely free, with no sign-up, no limit and no watermark." },
    { q: "Does it reduce the photo's quality?", a: "Only the areas you blur change. The rest of the photo is downloaded at its original size as a lossless PNG." },
    { q: "Can I blur the background of a photo?", a: "This tool blurs boxes you draw. To blur the whole background behind a person, use the AI photo editor and ask it to blur the background." },
  ],
};

export default page;
