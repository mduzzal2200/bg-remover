import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Comic Book Cover Maker: Put Yourself on a Comic Cover",
  h1: "AI Comic Book Cover Maker",
  metaDescription: "Turn your photo into a bold comic book cover: ink lines, halftone shading, an original hero costume, an issue box and your own title. Five comic styles.",
  tagline: "Upload a photo and star on the cover of your own comic: thick ink lines, halftone shading and vivid colour, an original hero costume, a title at the top, an issue box and a caption burst with your words.",
  keywords: "comic book cover maker, turn photo into comic, ai comic book cover, superhero comic portrait, comic cover from photo, comic book style photo, comic cover generator",

  howToHeading: "How to make a comic book cover of yourself",
  howTo: [
    { t: "Upload a photo with a confident pose", d: "Facing the camera, shoulders back. The app turns your stance into a cover pose." },
    { t: "Add your words and pick a style", d: "Type a title or a caption into Text on the image, or leave it empty. Choose Superhero, Noir, Manga, Golden age or Indie, or keep Auto." },
    { t: "Generate your cover", d: "In under a minute you have a tall 3:4 comic cover. Run it again for a new pose and colour palette." },
  ],
  exampleCaption: "A selfie in a black top in a bedroom becomes a comic book cover: the same woman drawn as an original superhero in a red, gold and blue armoured costume with a tiara and a flowing cape, a city skyline behind her, an issue #1 box in the corner and a caption burst reading \"Same girl, bigger stories\".",

  sections: [
    {
      heading: "What does the comic book cover maker do?",
      paragraphs: [
        "It illustrates you as the star of a comic and lays it out like a real cover. The art has thick ink outlines, dramatic halftone shading and vivid colour. Unless you pick another style, you become an **original superhero**: a red, gold and blue costume of your own design, an armoured suit or bodice, a tiara or mask and a flowing cape, standing confidently in front of a city skyline.",
        "Around the art is classic cover trade dress: a title area at the top, a small issue box in one corner and a bold caption burst. Your likeness stays recognisable in illustrated form, so friends will know who the hero is at a glance.",
      ],
    },
    {
      heading: "What goes on a classic comic cover?",
      paragraphs: [
        "Comic covers have a language of their own, built to grab attention on a crowded shelf. The **masthead**, the comic's title, runs across the top in huge letters. A small **corner box** shows the issue number, often with a tiny portrait. A **caption burst** or speech balloon shouts a teaser line. The hero is drawn big and mid-action, usually from a slightly low angle so they look powerful.",
        "The art itself uses **ink lines** to define every shape and **halftone dots**, the tiny dots of the old printing process, for shading and colour. This app recreates all of it, so your cover reads as a comic instantly, even as a thumbnail.",
      ],
    },
    {
      heading: "Five comic styles",
      table: {
        head: ["Comic style", "Looks like", "Good for"],
        rows: [
          ["Superhero", "Bold inks, dynamic angles, saturated primaries", "The classic hero cover, as in our example"],
          ["Noir", "Heavy black shadows, rain, near-monochrome", "A moody detective or anti-hero look"],
          ["Manga", "Screentone shading, expressive lines, speed lines", "Anime and manga fans"],
          ["Golden age", "Limited flat colour, visible halftone dots, period lettering", "A vintage 1940s–50s comic feel"],
          ["Indie", "Looser lines, muted colour, a quieter layout", "Something arty and personal"],
          ["Auto", "The app picks; usually the superhero look", "When you're not sure"],
        ],
      },
    },
    {
      heading: "Adding your own title or caption",
      paragraphs: [
        "Type up to a short line into **Text on the image** and the app letters it on the cover, usually as the title or the caption burst. Short works best: a name (\"Captain Priya\"), a theme (\"The Birthday Issue\") or a joke (\"Coffee first, then heroics\"). Two to five words are easiest to read and most likely to be spelled perfectly.",
        "Leave the box empty and the app fills the cover's text areas itself. If a word comes out misspelled, which AI lettering occasionally does, run it again, or keep the art and fix the text in the [free photo editor](/editor).",
      ],
    },
    {
      heading: "Who makes comic book covers?",
      items: [
        { t: "Birthday and gift makers", d: "A cover starring the birthday person, titled with their name and age, makes a brilliant card, poster or cake image." },
        { t: "Comic and superhero fans", d: "See yourself on a cover of your own series, in the style you grew up reading." },
        { t: "Teams and teachers", d: "\"Hero of the month\" covers for colleagues, or a class of student covers for a reading week." },
        { t: "Creators and streamers", d: "A comic cover makes a bold thumbnail, channel banner or announcement graphic." },
        { t: "Writers and artists", d: "Mock up a cover concept for your own comic idea with yourself as the lead." },
      ],
    },
    {
      heading: "Tips for a great cover",
      list: [
        "**A confident, visible pose.** Shoulders and arms in the photo give the app something heroic to work with.",
        "**Face the camera.** It keeps your likeness strongest in illustrated form.",
        "**Simple backgrounds.** The city skyline replaces them, and a plain original gives a cleaner composition.",
        "**Short text.** Two to five words fit the cover best.",
        "**Re-run for variety.** Poses, palettes and layouts change every time.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Draw an existing character or publisher's logo.** The costume and masthead are original, not a real comic's.",
        "**Make the inside pages.** It creates one cover, not a comic strip or a full issue.",
        "**Change the shape.** Covers come out tall (3:4) like a real comic, whatever shape your photo is.",
        "**Guarantee perfect lettering.** Check your text and run it again if a letter slips.",
      ],
    },
    {
      heading: "Comic cover or superhero photo?",
      paragraphs: [
        "Both make you a hero; they look different. This app gives you an **illustrated cover** with ink and halftone. The [superhero costume maker](/creative/superhero-costume) gives you a **realistic photo** in an original costume and cape, like a film still. For other illustrated looks, try the [anime style](/creative/anime-style) app or the [cartoon generator](/creative/cartoon-generator).",
      ],
    },
    {
      heading: "Ideas for your cover text",
      items: [
        { t: "Birthdays", d: "\"The Amazing Maya, Issue 30\", or \"Thirty Never Looked This Heroic\"." },
        { t: "New jobs and promotions", d: "\"Captain Spreadsheet\" or \"The New Manager Returns\"." },
        { t: "Graduations", d: "\"Class of 2026: The Origin Story\"." },
        { t: "Couples and anniversaries", d: "\"Ten Years of Adventures\". Make one cover each and print them as a pair." },
        { t: "Teams", d: "\"The Support Squad\" for a cover per teammate, posted as a series." },
      ],
      after: ["Keep it to two to five words; long sentences get squeezed and are more likely to be misspelled."],
    },
    {
      heading: "Printing your cover like a real comic",
      paragraphs: [
        "Upscale the cover 2× or 4× in the [image upscaler](/upscale) first, so the ink lines stay crisp. Real comic books are a little taller and slimmer than 3:4, roughly 6.6 × 10.2 inches, so either print at 3:4 with a slim white border, or trim a little off the sides. Glossy paper makes the colours pop; matte looks more like an old newsprint comic, which suits the Golden age style.",
      ],
    },
    {
      heading: "Which comic style suits which occasion?",
      paragraphs: [
        "**Superhero** is the safe, crowd-pleasing choice for birthdays, kids and team awards. **Noir** suits a moody portrait, a detective-themed party or anyone who loves dark crime comics. **Manga** is the pick for anime fans and makes a striking profile picture. **Golden age** gives a charming vintage gift for someone who grew up on old comics, especially printed on matte paper. **Indie** is the most personal and arty, good for a creative portfolio or a thoughtful gift.",
        "Not sure? Make the same photo in two styles. Each run costs the same, and choosing between covers is half the fun.",
      ],
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `Each cover uses ${COST}, and you're only charged when it's made. Credit packs start at ${PACK_FROM} and never expire. Where a free trial is running, it shows above the upload.`,
        "Your photo goes to fal.ai, the image-model service we use, only to draw the cover. It's not used for AI training and not sold. Your covers are stored in My Creations, where you can delete them when you like.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn my photo into a comic book cover?", a: "Upload a clear photo, add a short title in Text on the image if you like, pick a comic style or keep Auto, and press Generate. Your cover is ready in under a minute." },
    { q: "Can I put my name on the cover?", a: "Yes. Type it into Text on the image. Short text of two to five words reads and spells best." },
    { q: "Which comic styles are there?", a: "Superhero, Noir, Manga, Golden age and Indie. Auto usually gives the superhero look." },
    { q: "Will it look like me?", a: "Yes, in illustrated form. A clear, front-facing photo gives the strongest likeness." },
    { q: "Can I be a famous superhero?", a: "No. The hero and costume are always original, not an existing character." },
    { q: "What size is the cover?", a: "A tall 3:4 shape, like a real comic, whatever shape your photo is." },
    { q: "How much does it cost?", a: `${COST} per cover, only when it's made. Packs start at ${PACK_FROM}; a free trial, where available, covers your first.` },
    { q: "Can I print it?", a: "Yes. Upscale it 2× or 4× first, then print it as a poster or a card." },
    { q: "Can two people share a cover?", a: "The app is built for one hero per cover. For a duo, make a cover each and print them side by side as issues one and two." },
    { q: "Is there a watermark?", a: "No. Your cover downloads at full size without a watermark." },
  ],
};

export default page;
