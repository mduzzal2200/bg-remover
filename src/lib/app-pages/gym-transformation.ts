import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Gym Transformation Photo: See Your Fitness Goal Self",
  h1: "AI Gym Transformation Photo",
  metaDescription: "See a motivating gym version of yourself: lightly toned, athletic or muscular, in training gear in a modern gym. Motivation art, not a prediction.",
  tagline: "Upload a photo and see a motivating gym version of yourself: lightly toned, athletic or muscular, in a black training tank and shorts, in a modern gym under dramatic lighting.",
  keywords: "ai gym transformation, fitness transformation photo, ai body transformation, gym photo ai, muscle photo generator, fitness goal photo, workout motivation photo",

  howToHeading: "How to make a gym transformation photo",
  howTo: [
    { t: "Upload a clear photo", d: "Standing, facing the camera, with your body visible from at least the waist up. Everyday clothes are fine." },
    { t: "Choose a build", d: "Lightly toned, Athletic or Muscular. Lightly toned is the gentlest change; Muscular is the full bodybuilder look." },
    { t: "Generate and save it", d: "Your gym photo is ready in under a minute. Make it your lock screen or pin it to a vision board." },
  ],
  exampleCaption: "A man in a navy T-shirt and joggers standing in his bedroom becomes a gym photo of the same person in the same pose: a black training tank, a visibly fit, muscular build, and a modern gym with dumbbell racks and a \"Discipline builds freedom\" sign behind him.",

  sections: [
    {
      heading: "What does the gym transformation app do?",
      paragraphs: [
        "It makes a fitness-motivation photo of you. Keeping your face, pose and framing, it gives you a toned, athletic or muscular physique, dresses you in a black training tank top and shorts, and places you in a modern gym with dumbbell racks and equipment behind you, under dramatic gym lighting.",
        "Your face and identity are kept exactly the same, so it's clearly you, just in the shape you might be working towards. It's a **style edit for motivation**, not a medical or fitness prediction: it can't tell you what your body will look like after any programme.",
      ],
    },
    {
      heading: "Why a \"future you\" photo can help",
      paragraphs: [
        "Many people find it easier to stick with a goal when they can picture it. Athletes use visualisation; coaches use goal photos and vision boards. Seeing a version of yourself that looks strong and confident can be a small spark on the days when going to the gym feels hard.",
        "It's also fun. Friends make them to laugh at, couples make them before starting a programme together, and gyms use the idea for challenges. The key is to treat it as encouragement, not as a standard you must meet.",
      ],
    },
    {
      heading: "Choosing a build",
      table: {
        head: ["Build", "What you'll see", "Good for"],
        rows: [
          ["Lightly toned", "Light, natural muscle tone, like someone who trains now and then", "A realistic first goal, everyday fitness"],
          ["Athletic", "Clear but natural definition, a sporty, capable look", "Runners, footballers, gym regulars"],
          ["Muscular", "A heavily muscular, gym-trained build with pronounced definition, still anatomically possible", "Strength training goals, bodybuilding motivation"],
        ],
      },
      after: ["Start with Lightly toned or Athletic. A goal that feels reachable tends to motivate more than one that feels impossible."],
    },
    {
      heading: "Who uses it?",
      items: [
        { t: "People starting a fitness journey", d: "Make a goal photo on day one and look at it when motivation dips. Pair it with a real plan." },
        { t: "Personal trainers and gyms", d: "Run a fun \"meet your future self\" moment at the start of a challenge, with clients' permission and a clear note that it's not a promise." },
        { t: "Friends and gym partners", d: "Make one each, then compare after twelve weeks of real training, real photo next to the AI one." },
        { t: "Content creators", d: "Fitness creators use \"AI vs reality\" posts to start conversations about honest progress." },
      ],
    },
    {
      heading: "Tips for a natural-looking result",
      list: [
        "**Stand facing the camera.** A front-facing pose with arms relaxed gives the clearest shape to work with.",
        "**Show your body.** Waist-up at least; full body gives the most complete result.",
        "**Good, even light.** Bright, soft light keeps the face natural under dramatic gym lighting.",
        "**Plain clothes are fine.** The app replaces them with training gear.",
        "**Try two builds.** Seeing Lightly toned next to Athletic helps you choose a goal.",
      ],
    },
    {
      heading: "A healthy way to use AI fitness photos",
      paragraphs: [
        "AI can make any body in seconds; real change takes months and depends on genetics, sleep, food, health and time. Please don't compare yourself harshly with a generated image, and don't share someone else's transformation photo without asking them.",
        "If you're starting a new exercise programme, especially after a long break, an injury or with a health condition, talk to a doctor or a qualified trainer first. Use the photo for what it's good at: a smile, a spark and a reminder of why you started.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Predict your results.** It doesn't know your body, genes or habits.",
        "**Make a training or diet plan.** For that, see a qualified professional.",
        "**Keep your clothes.** It dresses you in a black training tank and shorts.",
        "**Change your face.** Your face and identity stay the same.",
        "**Show a real gym.** The gym is invented.",
      ],
    },
    {
      heading: "Ideas for your gym photo",
      items: [
        { t: "A lock-screen reminder", d: "Crop it to 9:16 with the [crop tool](/crop-image) and set it as your phone wallpaper." },
        { t: "A progress pair", d: "Post the AI photo now and a real photo after twelve weeks. Honest comparisons get great reactions." },
        { t: "A challenge kick-off", d: "Teams and clubs can make one each to launch a group fitness challenge." },
      ],
      after: ["Prefer a polished portrait for your profile? The [professional headshot](/creative/professional-headshot) app makes a studio-style photo for work."],
    },
    {
      heading: "Turning the photo into a real plan",
      paragraphs: [
        "A goal photo works best with a plan behind it. Write down one or two habits you'll actually keep, like three short strength sessions a week or a daily walk, and put the photo where you'll see it before you'd normally skip. Take a real photo of yourself on day one in the same spot and the same pose, so in a few months you can compare real progress with real progress.",
        "If you're new to training, a beginner programme from a qualified coach, a gym induction or a physiotherapist's advice will keep you safe. The AI picture is only the poster on the wall; the work and the patience are yours.",
      ],
    },
    {
      heading: "Gym photo, glow-up or headshot?",
      paragraphs: [
        "This app changes your build, clothes and setting for a fitness look. The [glow-up filter](/creative/glow-up-filter) keeps your body and outfit but polishes the whole photo, skin, light and hair, like a great day. And the [professional headshot](/creative/professional-headshot) gives you a studio portrait for work. Use the one that fits what you want to show.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `A gym photo uses ${COST}, and nothing is charged if the image isn't made. Packs start at ${PACK_FROM}, and credits stay valid with no expiry. If a trial is running where you live, the box above the upload says so.`,
        "fal.ai's image models receive your photo only to create the gym version. It isn't shared further, used to train AI or sold. Your photos sit in My Creations until you delete them, which you can do at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a gym transformation photo?", a: "Upload a clear, front-facing photo, choose Lightly toned, Athletic or Muscular, and press Generate. You get a gym version of yourself in under a minute." },
    { q: "Is it a real prediction of how I'll look?", a: "No. It's a motivational style edit. Real results depend on your body, training, food, sleep and health." },
    { q: "Will my face change?", a: "No. Your face and identity stay the same; your build, clothes and setting change." },
    { q: "Which build should I pick?", a: "Lightly toned or Athletic for a reachable goal, Muscular for a strength-training look." },
    { q: "Does it work for women?", a: "Yes. Anyone can make a gym transformation photo; the build options apply to everyone." },
    { q: "Can I use it to advertise a fitness programme?", a: "Don't present it as a real result. If you use it at all, label it clearly as an AI-generated motivation image." },
    { q: "How much does it cost?", a: `${COST} per photo, only when it's made. Packs start at ${PACK_FROM}.` },
    { q: "What photo works best?", a: "Standing, facing the camera, body visible from the waist up or more, in good light." },
    { q: "Can I make one for a friend?", a: "Only with their permission. Body-transformation pictures can be sensitive, so ask before you make or share one of someone else." },
    { q: "Does it work with a full-length mirror selfie?", a: "Yes. Stand straight, keep the phone away from your face and make sure the mirror is clean. The app keeps your pose and swaps the room for a gym." },
    { q: "Can I change the gym or the clothes?", a: "The app always uses a modern gym and black training gear. For a different outfit or setting, describe it in the AI photo editor afterwards." },
    { q: "Is there a watermark?", a: "No. The gym photo downloads at full size without a mark." },
  ],
};

export default page;
