import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Wedding Invitation Photo: Elegant Couple Portrait",
  h1: "AI Wedding Invitation Photo Maker",
  metaDescription: "Turn a couple selfie into an elegant wedding portrait for your invitation: a tux and an ivory lace gown under a rose arch in golden light. Still you two.",
  tagline: "Upload a photo of the two of you and get an elegant portrait for your invitation or save-the-date: a tuxedo and an ivory lace gown, a bouquet of roses and an arch of white flowers in golden-hour light.",
  keywords: "wedding invitation photo, ai wedding photo, save the date photo ai, couple wedding portrait ai, wedding invite photo maker, engagement photo ai, wedding card photo",

  howToHeading: "How to make a wedding invitation photo",
  howTo: [
    { t: "Upload a photo of you both", d: "Any clear photo where both faces are visible and close together. A selfie on a holiday works perfectly." },
    { t: "Add your names, or leave it blank", d: "Type names and a date into Text on the image if you want them on the picture. Leave it empty for a clean photo to place in your own invitation design." },
    { t: "Generate and choose", d: "In under a minute you have a wedding portrait. Make a few and pick the one with the calmest space for text." },
  ],
  exampleCaption: "A couple's cheek-to-cheek selfie by a city waterfront becomes an elegant wedding portrait: the same faces and pose, now in a black tuxedo with a bow tie and a white boutonnière and an ivory lace gown with a bouquet of white and blush roses, under an arch of white roses in warm golden-hour light.",

  sections: [
    {
      heading: "What does the wedding invitation photo maker do?",
      paragraphs: [
        "It turns an ordinary photo of the two of you into the kind of portrait you'd put on a wedding invitation. It keeps your pose and how close you are, so if you're cheek to cheek in the selfie, you're cheek to cheek in the portrait, and dresses each of you in wedding attire that suits you: by default a black tuxedo with a bow tie and a white boutonnière, and an ivory lace gown with a bouquet of white and blush roses.",
        "You're placed in a garden under an arch of white roses with warm golden-hour sun behind you. Both faces and identities stay exactly the same. Unless you type text, the picture has no words on it, so it's ready to drop into any invitation template.",
      ],
    },
    {
      heading: "Why use AI for an invitation photo?",
      paragraphs: [
        "Save-the-dates and invitations often go out months before the wedding, sometimes before you've booked a photographer, let alone had an engagement shoot. A professional session just for one invitation image is expensive and hard to schedule, especially for couples living apart or planning from abroad.",
        "With this app you can use a photo you already love, a holiday selfie, a picture from a friend's wedding, and get a portrait that looks the part. It's also a lovely way to preview the look of a tux and gown together, before the real outfits are chosen.",
      ],
    },
    {
      heading: "Adding your names and date",
      paragraphs: [
        "The **Text on the image** box lets you put a short line on the portrait, such as \"Aisha & Daniel · 14.06.2027\" or \"Save the date\". Keep it short: two names and a date read and spell best. The app places the words where they suit the composition.",
        "Want full control of fonts and layout? Leave the box empty and add your text afterwards in the [free photo editor](/editor) or in your invitation design app. A clean photo with no text is also more flexible: you can use it for the invite, the wedding website and a welcome sign.",
        "AI lettering occasionally slips a letter. Always check names and dates carefully before printing, and run it again if anything looks wrong.",
      ],
    },
    {
      heading: "Who uses it?",
      items: [
        { t: "Couples planning a wedding", d: "Make the save-the-date image months ahead without booking a shoot." },
        { t: "Couples planning from different cities", d: "Long-distance couples can use a favourite photo from a visit instead of meeting a photographer together." },
        { t: "Anniversary and vow renewals", d: "Celebrating ten years? Turn a recent photo into an elegant portrait for the renewal invite." },
        { t: "Wedding planners and stationers", d: "Show clients a mock-up of their invitation with their own faces before the real photos exist." },
        { t: "Friends making a surprise", d: "Make an engagement announcement graphic or a party sign for the couple, with their permission." },
      ],
    },
    {
      heading: "Tips for a beautiful portrait",
      list: [
        "**Both faces clearly visible.** Turned heads and sunglasses weaken the likeness.",
        "**Close together.** Cheek to cheek or shoulder to shoulder gives the most romantic composition, and the app keeps your closeness.",
        "**Even light on both of you.** If one face is in shadow, the result can look uneven.",
        "**A simple original background.** It helps the garden and the rose arch look natural.",
        "**Make several versions.** Each run changes the light, the bouquet and the framing slightly; choose the calmest one for text.",
        "**Pick the right shape.** Use a tall 4:5 or 3:4 for a printed card, or 1:1 for a social announcement.",
      ],
    },
    {
      heading: "Printing your invitation",
      paragraphs: [
        "For printed invitations, enlarge the portrait 2× in the [image upscaler](/upscale) before placing it in your design, so it stays crisp at 5 × 7 inches. Most printers ask for images at about 300 pixels per inch; a 5 × 7 inch card needs roughly 1500 × 2100 pixels.",
        "If you're sending a digital invitation by WhatsApp or email, the standard download is plenty. Compress a copy for email with the [image compressor](/compress-image) if your file is large.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Copy your real wedding outfits.** It designs a classic tux and lace gown. For a specific lehenga, suit or dress, describe it in the [outfit changer](/creative/outfit-generator) first.",
        "**Show your real venue.** The rose garden is invented.",
        "**Add people who aren't in the photo.** It uses the two of you as you appear.",
        "**Design the whole invitation.** It makes the photo; your invitation app or stationer handles the layout.",
      ],
    },
    {
      heading: "More photos for your wedding season",
      paragraphs: [
        "For a relaxed, cinematic engagement look instead of formal wedding attire, try the [couple photoshoot](/creative/couple-photoshoot) on the same photo. For a romantic 90s film-still feel, the [retro Bollywood photo editor](/creative/retro-bollywood) works for couples too. And when the big day comes, the [group photo maker](/group-photo) can bring family members from separate photos into one picture.",
      ],
    },
    {
      heading: "Save-the-date, invitation or wedding website?",
      paragraphs: [
        "One portrait can do all three jobs if you plan for it. For a **save-the-date**, a square or 4:5 image with your names and date works on WhatsApp and Instagram. For a **printed invitation**, keep the photo text-free and let your stationer or template handle the type. For a **wedding website**, a wide crop of the same portrait makes a lovely header; leave space at the top for your names.",
        "Make the portrait once without text, then add different words for each use. That way every piece matches.",
      ],
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `Each wedding portrait uses ${COST}, taken only once the portrait is ready. Credit packs from ${PACK_FROM} don't expire, which suits planning that stretches over months. If your country has a free trial, you'll find it above the upload.`,
        "The photo of you both goes to fal.ai's image models to create the portrait and isn't shared with anyone else, sold or used for AI training. Your portraits are kept in My Creations, where either of you can delete them from your account at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a wedding invitation photo with AI?", a: "Upload a clear photo of you both, add names and a date in Text on the image if you like, and press Generate. You get an elegant wedding portrait in under a minute." },
    { q: "Will our faces stay the same?", a: "Yes. Both faces and identities are kept, and so is your pose and how close you are." },
    { q: "What will we be wearing?", a: "By default a black tuxedo with a bow tie and boutonnière, and an ivory lace gown with a bouquet of white and blush roses." },
    { q: "Can I add our names and date?", a: "Yes. Type them into Text on the image. Keep it short, and check the spelling before you print." },
    { q: "Can I get a photo without text?", a: "Yes. Leave Text on the image empty; the portrait comes back with no words, ready for your invitation design." },
    { q: "Can we choose traditional outfits?", a: "Not in this app. Use the outfit changer to describe a specific outfit first, then make the portrait." },
    { q: "How much does it cost?", a: `${COST} per portrait, only when it's made. Packs start at ${PACK_FROM}.` },
    { q: "Can I print it?", a: "Yes. Upscale it 2× first, then place it in a 5 × 7 inch invitation design." },
    { q: "Is there a watermark?", a: "No. Your portrait downloads at full size without any mark." },
  ],
};

export default page;
