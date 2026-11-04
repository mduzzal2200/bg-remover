import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI LinkedIn Banner Maker: Professional Cover From Your Photo",
  h1: "AI LinkedIn Banner Maker",
  metaDescription: "Make a professional LinkedIn banner from your photo: you on one side in a navy blazer, a deep blue design with a city view, and space for your headline.",
  tagline: "Upload a photo and get a polished LinkedIn cover: you on the left in a navy blazer, a deep blue gradient with light streaks and a city skyline on the right, and clear space for a headline.",
  keywords: "linkedin banner maker, linkedin background photo, linkedin cover photo ai, linkedin banner generator, professional linkedin banner, linkedin header image, linkedin background image",

  howToHeading: "How to make a LinkedIn banner with AI",
  howTo: [
    { t: "Upload a photo of yourself", d: "Chest up and facing the camera works best. A casual selfie at home is fine; the blazer and the background are added." },
    { t: "Add a headline and pick a look", d: "Type a short line into Text on the image, or leave it empty. Choose Bold, Clean or Dark mode, or keep Auto." },
    { t: "Generate and upload to LinkedIn", d: "You get a wide banner in under a minute. Upload it from your profile and drag it into position." },
  ],
  exampleCaption: "A casual selfie in a dark sweater at home becomes a LinkedIn banner: the same man on the left in a navy blazer over a white T-shirt, smiling, with a deep blue gradient, diagonal light streaks and a city skyline through office glass filling the right side.",

  sections: [
    {
      heading: "What does the LinkedIn banner maker create?",
      paragraphs: [
        "It turns your photo into a wide, professional cover image. You appear on the left third, framed from the chest up, smiling and dressed in a navy blazer over a white T-shirt or shirt. The rest of the banner opens out into a deep blue gradient with soft diagonal light streaks and subtle geometric shapes, blending into a softly blurred city skyline seen through office glass.",
        "The right side is deliberately calm, leaving space for a headline: your role, your promise, or nothing at all. Your face and identity stay exactly the same, so the banner matches your profile photo.",
      ],
    },
    {
      heading: "Why your LinkedIn banner matters",
      paragraphs: [
        "The banner is the largest image on your profile, and most people leave it as the default grey-blue pattern. A considered banner tells visitors who you are before they read a word, and makes your profile look complete and intentional, which matters to recruiters, clients and anyone you've just met at an event.",
        "A designer would charge for something like this, and template sites leave you assembling stock photos. This app gives you a finished banner with your own face in a professional setting, in one step.",
      ],
    },
    {
      heading: "LinkedIn banner size and where it's cropped",
      paragraphs: [
        "LinkedIn shows profile banners in a very wide shape, about **4:1**, with a recommended size of **1584 × 396 pixels**. The app makes a 16:9 image so there's room to adjust; when you upload it, LinkedIn lets you zoom and drag to choose the strip it shows.",
        "Two things cover parts of the banner. On a computer, your **round profile photo** sits over the lower left. On a phone, the banner is shorter and the profile photo sits in the middle. So keep your headline in the right half, slightly above centre, and check both views after uploading. If your face in the banner ends up behind the profile photo, drag the banner up a little.",
      ],
    },
    {
      heading: "Choosing a look",
      table: {
        head: ["Look", "Style", "Good for"],
        rows: [
          ["Auto", "The deep blue corporate look in our example", "Most professionals"],
          ["Bold", "Punchy colour, strong contrast, a clear focal point", "Sales, marketing, founders, creators"],
          ["Clean", "A restrained palette and lots of space", "Consultants, finance, law, design"],
          ["Dark mode", "A dark background with a bright accent", "Tech, engineering, gaming, product"],
        ],
      },
    },
    {
      heading: "What should your banner headline say?",
      paragraphs: [
        "Keep it to five or six words that answer \"what do you do for people?\" Examples:\n\n- \"Helping SaaS teams hire faster\"\n- \"Product designer · Accessibility first\"\n- \"Data analyst turning numbers into decisions\"\n- \"Open to roles in UX research\"\n\nAvoid repeating your job title word for word (LinkedIn already shows it under your name) and skip long lists of skills. If you'd rather design the text yourself, leave the box empty and add it in a design app. Check spelling carefully; AI lettering can occasionally slip.",
      ],
    },
    {
      heading: "Who makes AI LinkedIn banners?",
      items: [
        { t: "Job seekers", d: "A professional banner with an \"Open to\" line makes a profile look ready and active." },
        { t: "Consultants and freelancers", d: "Your banner is a free billboard: one line about who you help and how." },
        { t: "Founders and team leads", d: "A consistent look across the leadership team's profiles makes a company look established." },
        { t: "Speakers and creators", d: "Use a Bold or Dark mode banner that matches your talk slides or channel art." },
        { t: "Students and graduates", d: "A polished banner helps a new profile stand out among first-job applicants." },
      ],
    },
    {
      heading: "A complete LinkedIn refresh in one sitting",
      paragraphs: [
        "A banner looks best next to a matching profile photo. Make a studio-style portrait with the [professional headshot](/creative/professional-headshot) app or a clean icon with the [corporate avatar maker](/creative/corporate-avatar), using the same selfie, so your face, colours and clothing match across the profile.",
        "Keep the same blazer colour and a background tone close to the banner's blue, and your profile will look like it was shot in one session.",
      ],
    },
    {
      heading: "Tips for the best banner",
      list: [
        "**Chest-up photo, facing the camera.** It gives the app a clean shape to place on the left.",
        "**Good light on your face.** It keeps your features natural against the dramatic blue light.",
        "**Short headline.** Five or six words read clearly even on a phone.",
        "**Generate two or three.** Pick the calmest one with the most space for text.",
        "**Check desktop and mobile.** Both crop differently.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Add your company logo.** Add a logo afterwards in an editing app if your employer allows it.",
        "**Use your real office.** The office view and skyline are invented.",
        "**Make the exact 4:1 shape.** It gives a wide 16:9 image that you position in LinkedIn's uploader.",
        "**Change your face.** Your features stay the same, so the banner matches your profile photo.",
      ],
    },
    {
      heading: "Banner ideas by profession",
      items: [
        { t: "Sales and business development", d: "Bold look, headline about the result you deliver: \"Helping clinics fill their calendars\"." },
        { t: "Engineering and data", d: "Dark mode with a clean line naming your stack or speciality." },
        { t: "HR and recruiting", d: "Clean look with \"We're hiring\" or the teams you recruit for." },
        { t: "Creative roles", d: "Leave the text off and let the design and your portrait speak; link your portfolio in the profile itself." },
      ],
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `A banner uses ${COST}, and you aren't charged if it fails. One-time packs start at ${PACK_FROM} and the credits never expire. A trial, where offered in your country, is shown above the upload.`,
        "Your photo is used by fal.ai's image models to build the banner and isn't passed to anyone else, sold or used to train AI. Banners and photos stay in My Creations until you delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a LinkedIn banner with AI?", a: "Upload a chest-up photo, add a short headline if you like, choose a look and press Generate. Then upload the banner on your LinkedIn profile." },
    { q: "What size is a LinkedIn banner?", a: "About 4:1, with 1584 × 396 pixels recommended. The app makes a wide 16:9 image that you position in LinkedIn's uploader." },
    { q: "Will my profile photo cover part of the banner?", a: "Yes, on desktop it sits over the lower left. Keep text on the right and check the preview after uploading." },
    { q: "Can I add my own headline?", a: "Yes. Type it into Text on the image, or leave it empty and add text later in a design app." },
    { q: "Will it look like me?", a: "Yes. Your face and identity are kept, so the banner matches your profile photo." },
    { q: "Which look should I choose?", a: "Auto for a classic corporate blue, Clean for minimal, Bold for punchy colour, Dark mode for tech." },
    { q: "How much does it cost?", a: `${COST} per banner, only when it's made. Packs start at ${PACK_FROM}.` },
    { q: "Can I use it on X or YouTube too?", a: "It's designed for LinkedIn's shape. For a YouTube banner, see our YouTube banner size guide." },
    { q: "Can I make a banner without my photo?", a: "This app builds the banner around you. For a design without a person, describe the scene you want in the AI image generator and choose a wide shape." },
    { q: "How often should I update my banner?", a: "Whenever your role, focus or offer changes. A banner that matches your current headline keeps your profile consistent." },
    { q: "Is there a watermark?", a: "No. The banner downloads at full size without a watermark." },
  ],
};

export default page;
