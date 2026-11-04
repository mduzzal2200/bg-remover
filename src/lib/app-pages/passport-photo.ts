import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Passport Photo Maker: ID Photo on a Plain Background",
  h1: "AI Passport Photo Maker",
  metaDescription: "Turn a selfie into a clean ID-style photo: plain white, grey or blue background, even light and a neutral look, for US, UK/EU, India, Schengen and more.",
  tagline: "Upload a selfie and get a clean ID-style photo: a plain white, light grey or light blue background, even light, a neutral expression and shoulders in frame, styled for the format you choose.",
  keywords: "ai passport photo maker, passport photo from selfie, id photo white background, visa photo maker, passport photo online, 2x2 photo maker, 35x45 photo",

  howToHeading: "How to make a passport-style photo from a selfie",
  howTo: [
    { t: "Upload a front-facing selfie", d: "Look straight at the camera with your whole head and the top of your shoulders in frame. No hat, no sunglasses." },
    { t: "Choose the format and background", d: "US 2×2in, UK/EU 35×45mm, India 2×2in, Schengen visa, Canada 50×70mm or China 33×48mm, and a white, light grey or light blue background." },
    { t: "Generate, then check the rules", d: "In under a minute you have a clean ID-style photo. Check it against your government's photo rules before you print or submit it." },
  ],
  exampleCaption: "A selfie of a woman with long dark hair in a bedroom becomes a clean ID-style photo: the same face with a neutral expression, front-facing, on a plain pure-white background, in a plain black blazer over a white top, evenly lit.",

  sections: [
    {
      heading: "What does the AI passport photo maker do?",
      paragraphs: [
        "It turns a normal selfie into a clean, ID-style portrait. The background becomes plain and even (white by default, or light grey or light blue), the lighting is evened out so there are no harsh shadows, and you're shown front-facing with a neutral expression and your shoulders visible. Unless you choose otherwise, it dresses you in a plain black blazer over a simple white top, which photographs well against a light background.",
        "Your face and identity are kept exactly as they are. The **Format** setting tells the app which document you're preparing for, so the framing and background follow that country's typical style.",
      ],
    },
    {
      heading: "Will a passport office accept an AI-edited photo?",
      paragraphs: [
        "Read this before you use any edited photo for an official document. **Rules differ by country, and many governments say passport photos must not be digitally altered.** That can include changing the background, the clothes or the lighting. Some offices check photos carefully and reject ones that look edited; a rejected photo can delay your application.",
        "This app is great for informal uses: job applications, student cards, gym memberships, company badges, online forms and many visa portals that simply ask for a photo on a plain background. For an actual passport, check your government's photo guidance first. If edits aren't allowed, the safest route is an unedited photo taken against a plain light wall, at a photo booth or by a friend; our [passport photo cutout](/remove-bg/passport-photo) guide has tips for taking one at home.",
      ],
    },
    {
      heading: "Which format should you choose?",
      table: {
        head: ["Format", "Size", "Typical background"],
        rows: [
          ["US — 2×2in", "51 × 51 mm, square", "Plain white"],
          ["UK / EU — 35×45mm", "35 × 45 mm", "Plain light grey or cream"],
          ["India — 2×2in", "51 × 51 mm, square", "Plain white"],
          ["Schengen visa", "35 × 45 mm, head 32–36 mm", "Plain light background"],
          ["Canada — 50×70mm", "50 × 70 mm, head 31–36 mm", "Plain white"],
          ["China — 33×48mm", "33 × 48 mm, ears visible", "Plain white"],
        ],
      },
      after: ["These are typical requirements; always confirm the current ones on your government's or embassy's website, because they change and some applications differ (for example online vs paper forms)."],
    },
    {
      heading: "Getting the size right for printing",
      paragraphs: [
        "The app shapes your photo for the format, but the final file is a digital image, not a print at an exact physical size. To print, place it on a 6 × 4 inch photo print at the right dimensions, or use a print service that offers passport-photo layouts. At 300 dots per inch, a 2 × 2 inch photo is 600 × 600 pixels and a 35 × 45 mm photo is about 413 × 531 pixels.",
        "For online applications, check the pixel and file-size limits on the form. The [resize tool](/resize-image) sets exact pixels, and the [compressor](/compress-image) gets the file under limits like 240 KB or 500 KB.",
      ],
    },
    {
      heading: "Who uses an ID-style photo?",
      items: [
        { t: "Job and university applicants", d: "Many application forms ask for a recent photo on a plain background." },
        { t: "Students and staff", d: "ID cards, library cards and staff badges usually need a simple, front-facing photo." },
        { t: "Online form fillers", d: "Exam registrations, licences and memberships often specify a white background." },
        { t: "Travellers", d: "Some visa portals accept a digital photo on a plain background; check whether edited photos are allowed." },
        { t: "Small offices and HR teams", d: "Create consistent badge photos for a whole team from their own selfies." },
      ],
    },
    {
      heading: "Tips for a photo that passes the checks",
      list: [
        "**Face the camera straight on.** No tilt, no turned head.",
        "**Neutral expression, mouth closed.** Most official photos don't allow a big smile.",
        "**Whole head and the top of your shoulders in frame.** Don't crop your hair or chin.",
        "**No hats, sunglasses or tinted glasses.** Religious head coverings are usually allowed if your face is fully visible.",
        "**Even light, no shadows.** Face a window rather than having it behind you.",
        "**Eyes open and visible.** Push hair away from your eyes and eyebrows.",
        "**Recent.** Most authorities want a photo taken in the last six months.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Guarantee acceptance.** Only the issuing authority decides, and some don't accept edited photos at all.",
        "**Print to exact physical size.** You get a digital image; print it at the right dimensions.",
        "**Measure head height precisely.** It follows each format's general framing; check the head size if your form specifies it.",
        "**Change your appearance.** Your face is kept as it is, which is exactly what ID photos need.",
      ],
    },
    {
      heading: "Passport photo app or background remover?",
      paragraphs: [
        "If you only need the background changed and nothing else, the [background remover](/remove-bg) keeps your original photo untouched and puts you on white, which is closer to an unaltered photo. Use this app when your selfie also needs better framing, lighting or plainer clothes for an ID-style result. Our [passport photo size guide](/blog/passport-photo-size-guide) lists more countries' sizes.",
      ],
    },
    {
      heading: "Taking a selfie that converts well",
      paragraphs: [
        "Stand about an arm's length from the phone, or prop it at eye level and use the timer, so your face isn't distorted by a close lens. Face a window in daylight, with nothing bright behind you. Tie long hair back from your face if it covers your eyebrows, take off glasses if your country requires it, and keep a neutral expression with your mouth closed.",
        "Take several and pick the one where you're straight on, eyes open and in focus. The app can even out the light and replace the background, but it can't fix a tilted head or closed eyes.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `An ID-style photo uses ${COST}, charged only when it's made. Packs from ${PACK_FROM} keep their credits indefinitely. Where a free trial runs, the box above the upload tells you.`,
        "Your selfie is sent to fal.ai's image models to make the photo and to nobody else. It's never sold or used to train AI. Because ID photos are personal, you can delete both the selfie and the result from My Creations as soon as you've downloaded them.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a passport photo from a selfie?", a: "Upload a front-facing selfie, choose your format and background, and press Generate. Then check it against your government's photo rules before using it." },
    { q: "Will the passport office accept it?", a: "It depends on the country. Many say passport photos must not be digitally altered. Check the official rules first; for strict offices, use an unedited photo on a plain wall." },
    { q: "Which formats are available?", a: "US 2×2in, UK/EU 35×45mm, India 2×2in, Schengen visa, Canada 50×70mm and China 33×48mm." },
    { q: "Can I choose the background colour?", a: "Yes: plain white, light grey or light blue." },
    { q: "Does it change my face?", a: "No. Your face and identity stay the same; the background, lighting, framing and clothes are tidied." },
    { q: "How do I print it at the right size?", a: "Place it at the correct dimensions on a 6 × 4 inch print, or use a print service with passport layouts. A 2 × 2 inch photo is 600 × 600 pixels at 300 dpi." },
    { q: "How much does it cost?", a: `${COST} per photo, only when it's made. Packs start at ${PACK_FROM}.` },
    { q: "Can I use it for a job application or ID card?", a: "Yes. Informal uses like applications, badges and online forms are where it's most useful." },
    { q: "Is there a watermark?", a: "No. The ID photo downloads without any mark, ready to print or upload." },
  ],
};

export default page;
