import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "Transparent Signature — Remove Background From a Signature",
  h1: "Signature Background Remover",
  metaDescription: "Turn a photo of your handwritten signature into a clean transparent PNG for documents, PDFs and email signatures. No white box around it.",
  subtitle: "Sign on paper, take a photo, and get your signature as a transparent PNG with no white box or paper texture around it, ready to drop into a document, a PDF or an email signature.",
  keywords: "transparent signature, signature background remover, remove background from signature, signature png, make signature transparent, digital signature image, signature for documents",
  sections: [
    {
      heading: "How do you make a transparent signature?",
      items: [
        { t: "1. Sign on plain white paper", d: "Use a black or dark blue pen with a firm line; a felt-tip or gel pen photographs better than a light ballpoint. Sign a little larger than usual." },
        { t: "2. Photograph it flat, in daylight", d: "Hold the phone straight above the page so the signature isn't skewed, with no shadow from your hand or phone across it. Crop close to the signature." },
        { t: "3. Remove the background and download", d: `Drop the photo here and press Remove background (${COST}). The paper disappears and you get just the ink as a transparent PNG, which you can place on any document.` },
      ],
    },
    {
      heading: "Why not just use a photo of your signature?",
      paragraphs: [
        "Because a photo brings the paper with it. In a Word document or PDF, a signature photo shows up as a grey or off-white rectangle with uneven light, often covering the line it's meant to sit on. A transparent PNG has no rectangle: only the strokes of ink, sitting cleanly over the signature line, the text or a coloured letterhead.",
      ],
    },
    {
      heading: "Where can you use a transparent signature?",
      items: [
        { t: "Letters and documents", d: "Insert the PNG into Word, Google Docs or Pages above your typed name. Resize it to look like a real pen signature, about the height of two lines of text." },
        { t: "PDF forms", d: "Most PDF readers (Adobe Acrobat Reader, Preview on Mac) let you add an image or a saved signature to a PDF. A transparent PNG drops in without covering the form." },
        { t: "Email signatures", d: "A small signature image under your name gives emails a personal touch. Keep it small so it loads quickly." },
        { t: "Certificates, invoices and branding", d: "Teachers, trainers and small businesses add a signature to certificates, quotes and invoices; designers place one on prints and artwork." },
      ],
    },
    {
      heading: "Is a signature image legally valid?",
      paragraphs: [
        "It depends on where you are and what you're signing. Many everyday documents accept a pasted signature, and many countries recognise electronic signatures in general. But for contracts, legal, banking and government forms, the other party may need a proper e-signature service that records who signed, when, and from where, or a wet-ink signature. If it matters, ask the organisation what they accept.",
      ],
    },
    {
      heading: "How do you keep your signature safe?",
      list: [
        "**Share the PDF, not the PNG.** Send signed documents as flattened PDFs rather than emailing the signature image itself.",
        "**Store the file privately**, not in a shared folder or a public cloud link.",
        "**Use it only where you'd sign by hand.** An image of your signature is easy to copy, so treat it like your pen.",
        "**Delete copies you no longer need**, including the original photo on your phone. The result in My Creations can be deleted there too.",
      ],
    },
    {
      heading: "Tips for a crisp result",
      list: [
        "**Thicker lines cut out better** than faint, scratchy ones.",
        "**Avoid lined or squared paper**; the lines can be read as part of the signature.",
        "**Light the page evenly.** A shadow across the paper can leave a grey patch.",
        "**Make it dark.** If the ink looks pale, use Adjust in the editor to raise the contrast before removing the background.",
        "**Make several versions**: a full signature and initials for forms that ask for both.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `Background removal uses an AI model, so it's ${COST} per image, charged only when it works. Packs start at ${PACK_FROM} and never expire. Cropping, rotating and adjusting the signature in the same editor are free. There's no watermark on the PNG.`,
        "For other transparency jobs, see [make a logo transparent](/remove-bg/logo) and the main [background remover](/remove-bg).",
      ],
    },
  ],
  faq: [
    { q: "How do I make my signature transparent?", a: "Sign on white paper, photograph it flat in daylight, then drop the photo here and press Remove background. Download the PNG; only the ink remains." },
    { q: "What pen should I use?", a: "A black or dark blue pen with a firm, even line, such as a felt-tip or gel pen. Faint ballpoint lines are harder to separate from the paper." },
    { q: "How do I add the signature to a Word document?", a: "Choose Insert, then Pictures, and pick the PNG. Set the picture to sit in front of the text so you can place it over the signature line." },
    { q: "Can I add it to a PDF?", a: "Yes. Most PDF readers, including Adobe Acrobat Reader and Preview on Mac, let you add an image or saved signature to a PDF form." },
    { q: "Is a pasted signature legally valid?", a: "Often for everyday documents, but not always. Contracts, banks and government forms may require an e-signature service or a wet-ink signature, so check what's accepted." },
    { q: "How much does it cost?", a: `${COST} per signature image, only when it works. There's no watermark.` },
    { q: "Why does my signature have grey patches?", a: "Usually from shadows or uneven light on the paper. Retake the photo in even daylight, or raise the contrast with Adjust before removing the background." },
    { q: "Is my signature stored?", a: "The result is saved in My Creations in your account so you can download it again, and you can delete it there at any time. Images aren't used to train AI models." },
  ],
};

export default page;
