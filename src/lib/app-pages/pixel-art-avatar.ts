import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Pixel Art Avatar: Turn Your Photo Into an 8-Bit Scene",
  h1: "AI Pixel Art Avatar Maker",
  metaDescription: "Turn a photo into a retro video-game scene: visible square pixels, a bright limited palette and a PLAYER 1 HUD with hearts. Pick 8-bit, 16-bit or detailed.",
  tagline: "Upload a photo and turn it into a sunny retro video-game screen: you in square pixels, doing what you were doing, in a pixel-art world with a PLAYER 1 label and three hearts in the corner.",
  keywords: "pixel art avatar, photo to pixel art, 8 bit avatar maker, 16 bit pixel art from photo, pixel art generator, retro game avatar, pixel art profile picture",

  howToHeading: "How to turn your photo into pixel art",
  howTo: [
    { t: "Upload a photo with some life in it", d: "A selfie works, but a photo of you doing something, cycling, holding a drink, walking a dog, makes a far better game scene." },
    { t: "Choose a pixel size", d: "Auto picks for you. Chunky 8-bit is blocky and very retro, 16-bit is the classic console look, Detailed has a fine grid and smooth shading." },
    { t: "Generate and press start", d: "Your pixel scene arrives in under a minute, HUD and all. Run it again for a different game world." },
  ],
  exampleCaption: "A woman riding a bicycle with a basket of flowers through a sunny seaside street becomes a 16-bit pixel-art game scene: the same striped top, jeans and bike in square pixels, a colourful seaside town around her, and a PLAYER 1 label with three hearts in the corner.",

  sections: [
    {
      heading: "What does the pixel art avatar maker do?",
      paragraphs: [
        "It redraws your photo as a bright pixel-art video-game scene. Everything is built from visible square pixels in a cheerful, limited palette, and features are simplified the way game sprites are. Crucially, it keeps what you were doing: your clothes, your pose and your props come along, so if you were riding a bike, your character rides a bike.",
        "Your surroundings become a sunny pixel world based on where you were, like a colourful seaside town with flowers in our example. A small game HUD finishes it off: a **PLAYER 1** label with three hearts in the top corner. Your likeness stays recognisable in pixel form, from your hair to your outfit's colours.",
      ],
    },
    {
      heading: "What's the difference between 8-bit, 16-bit and detailed pixel art?",
      paragraphs: [
        "The names come from the generations of game consoles. **8-bit** machines of the 1980s could only show a handful of colours and very low resolution, so characters were chunky and simple. **16-bit** consoles of the early 1990s allowed many more colours and finer detail, which gave us the bright, rich pixel worlds many people picture when they think of retro games. Modern **detailed** pixel art, popular in indie games, uses a fine grid, smooth shading ramps and a broad palette while keeping the pixel look.",
      ],
      table: {
        head: ["Pixel size", "Looks like", "Best for"],
        rows: [
          ["Chunky 8-bit", "Big blocks, very few colours, instantly retro", "Tiny avatars and a bold, nostalgic look"],
          ["16-bit", "Finer grid, more colours, careful dithering", "The classic console look, as in our example"],
          ["Detailed", "Fine pixels, smooth shading, broad palette", "Prints, wallpapers and scenes with lots going on"],
          ["Auto", "The app picks to suit your photo", "When you're not sure"],
        ],
      },
    },
    {
      heading: "Who makes a pixel art avatar?",
      items: [
        { t: "Gamers", d: "A pixel avatar is perfect for Steam, Discord, Xbox and Twitch, and it reads clearly even at tiny sizes." },
        { t: "Streamers and creators", d: "Use your pixel character on a \"starting soon\" screen, in channel art or as an emote-style icon." },
        { t: "Developers and indie game makers", d: "Picture yourself as a sprite, or use the scene as a playful about-me image on a portfolio." },
        { t: "Retro fans", d: "Anyone who grew up with cartridge consoles will smile at a photo of themselves as PLAYER 1." },
        { t: "Friends and families", d: "Turn a holiday photo into a game level, or make a pixel-art birthday card with the birthday person as the hero." },
      ],
    },
    {
      heading: "Which photos make the best game scenes?",
      list: [
        "**Action beats posing.** Cycling, skating, holding an ice cream, walking a dog: the app keeps what you're doing, and it makes the scene a story.",
        "**Bold, distinct colours.** A striped top, a red jacket or bright trainers survive the limited palette and make your character recognisable.",
        "**Outdoor places make lovely worlds.** Streets, beaches, parks and markets turn into colourful pixel levels.",
        "**Keep your face clear.** Even in pixels, hair and face shape are what make the sprite look like you.",
        "**Plain backgrounds work too.** For a simple avatar, a plain background gives a clean arcade-style backdrop.",
      ],
    },
    {
      heading: "Using your pixel art as a profile picture",
      paragraphs: [
        "Pixel art is ideal for small profile pictures because its hard edges stay crisp. For a profile, crop the scene square around your character with the [crop tool](/crop-image), or make it round with the circle crop. Chunky 8-bit and 16-bit read best at icon size; Detailed is better for a banner or a wallpaper.",
        "Need it bigger? The result is already sized for screens. If you enlarge it, the [image upscaler](/upscale) in Normal mode keeps the pixel look but softens the square edges slightly. For perfectly hard-edged pixels, enlarge it by a whole number (2×, 3×, 4×) in a pixel-art editor with smoothing turned off.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Make a playable game.** It's one still image that looks like a game screen.",
        "**Copy a real game's characters or worlds.** It creates an original pixel scene in a retro style.",
        "**Make a sprite sheet or animation.** There's one pose per image; you'd need a pixel editor for frames.",
        "**Change the HUD.** The PLAYER 1 label and three hearts are part of the look; edit them afterwards if you want different text.",
      ],
    },
    {
      heading: "More game and cartoon looks",
      paragraphs: [
        "For a neon sci-fi gaming look, try the [cyberpunk avatar](/creative/cyberpunk-avatar). If you'd prefer to be a toy, the [Lego minifigure maker](/creative/lego-minifigure) and [Funko Pop yourself](/creative/funko-pop-figure) turn you into a boxed collectible. And for a smooth 3D cartoon, the [Pixar-style avatar maker](/creative/pixar-avatar) gives you animated-film eyes and soft light.",
      ],
    },
    {
      heading: "Shapes for gaming profiles and banners",
      table: {
        head: ["Where", "Shape", "Tip"],
        rows: [
          ["Discord, Steam, Xbox avatar", "1:1", "Use a selfie so your character fills the square"],
          ["Twitch or YouTube banner", "16:9", "Use a wide outdoor photo so the game world stretches across"],
          ["Phone wallpaper", "9:16", "A tall photo gives a tall pixel world"],
          ["A framed print", "4:5", "Choose Detailed for the most pixels of detail"],
        ],
      },
      after: ["The result takes the shape of your photo by default. Change the ratio before generating if you need a particular shape."],
    },
    {
      heading: "A tiny history of pixel art",
      paragraphs: [
        "Early home computers and consoles had so little memory that artists drew every character by hand, one square pixel at a time, with only a few colours to choose from. Those limits created a style of its own: bold shapes, clever shading with patterns of dots, and characters you could recognise from a dozen pixels. When graphics improved, pixel art didn't disappear; independent game makers brought it back because it's charming, readable and timeless.",
      ],
    },
    {
      heading: "Tips for a recognisable sprite",
      list: [
        "**Wear something memorable.** A striped top, a red cap or bright trainers is what people spot first at pixel size.",
        "**Keep your hair visible.** Hair shape and colour carry most of the likeness in a tiny character.",
        "**Choose 16-bit for avatars.** It balances detail and that unmistakable retro feel.",
        "**Make a few worlds.** Run the same photo two or three times; the game world around you changes each time.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each pixel scene uses ${COST}, and you're only charged when it's made. Credit packs from ${PACK_FROM} never expire. If your country has a free trial running, the box above the upload says so.`,
        "Your photo goes to fal.ai, the image-model service behind the app, only to draw the scene. We don't sell it or use it to train AI. Your pixel art stays in My Creations, where you can delete it any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn my photo into pixel art?", a: "Upload a photo, choose a pixel size or keep Auto, and press Generate. You get a retro game scene with a PLAYER 1 HUD in under a minute." },
    { q: "What's the difference between 8-bit and 16-bit?", a: "8-bit is chunkier with very few colours; 16-bit has a finer grid and more colours, the classic console look." },
    { q: "Will it look like me?", a: "Yes, in pixel form. Your hair, outfit colours and pose are kept, which is what makes the sprite recognisable." },
    { q: "Does it keep what I'm doing in the photo?", a: "Yes. If you're riding a bike or holding a drink, your pixel character does too." },
    { q: "Can I remove the PLAYER 1 text?", a: "It's part of the look. You can crop it out afterwards with the free crop tool." },
    { q: "Is it good for a Discord or Steam avatar?", a: "Yes. Crop it square around your character; pixel art stays crisp at small sizes." },
    { q: "How much does it cost?", a: `${COST} per image, only when it's made. Packs start at ${PACK_FROM}; where a free trial runs, your first is free.` },
    { q: "How do I make it bigger without blurring?", a: "Enlarge it by a whole number, such as 2× or 4×, in a pixel-art editor with smoothing off. The image upscaler works too, but softens the square edges slightly." },
    { q: "Can I turn a group photo into pixel art?", a: "Yes. Everyone in the photo becomes a pixel character, though smaller groups give each person more detail." },
    { q: "Is there a watermark?", a: "No. Your pixel art downloads at full size without a watermark." },
  ],
};

export default page;
