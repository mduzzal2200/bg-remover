import type { FacetGuide } from "./types";

export const IMAGE_USE_CASES: Record<string, FacetGuide> = {
  "profile-avatar": {
    intro: [
      "A profile picture is seen tiny: a circle in a comment thread, a square in a chat list. So a good avatar prompt is about one face, clearly lit, filling most of the frame, with a background that stays out of the way. Everything else is style.",
      "Most avatar prompts work from your own photo. The model needs to know which features to keep and which to change, so the best prompts say both, for example \"keep my face, hair and glasses exactly; change the clothes and background\".",
    ],
    ingredients: [
      { t: "Who and how close", d: "Head and shoulders, centred, face filling about half the frame, so a circular crop doesn't cut the chin." },
      { t: "What to keep", d: "Face shape, skin tone, hairline, eye colour, glasses or beard: name what must not change." },
      { t: "The look", d: "A style word or two: studio headshot, 3D cartoon, anime, watercolour, Pixar-like." },
      { t: "Light and background", d: "Soft front light and a plain or gently blurred background in one colour." },
      { t: "Format", d: "Square, 1:1, at around 1024 pixels or more." },
    ],
    example: {
      prompt: "Using my photo, create a square profile picture: head and shoulders, centred, looking at the camera with a relaxed smile. Keep my face, hair and glasses exactly as they are. Soft window light from the left, a plain muted teal background, subtle film grain, natural skin texture.",
      notes: [
        { t: "\"Square… centred\"", d: "Sets the crop for platforms that show a circle." },
        { t: "\"Keep my face… exactly\"", d: "Tells the model what's off-limits, the most important line in any avatar prompt." },
        { t: "\"Plain muted teal\"", d: "One background colour keeps the small thumbnail readable." },
        { t: "\"Natural skin texture\"", d: "Stops the plastic, over-smoothed look." },
      ],
    },
    models: "For avatars made from your own photo, Nano Banana Pro and GPT Image 2 are both strong at keeping a likeness; on PixelShine, the \"Generate this\" button opens Create Image with the prompt loaded so you can try either. For stylised avatars with no photo, any of the image models in this library work well.",
    mistakes: [
      "Asking for a full-body pose; it becomes a speck in a circle.",
      "Busy backgrounds like city streets, which compete with the face at small sizes.",
      "Forgetting to say what to keep, so the model \"improves\" your face into someone else's.",
      "Strong rim light or hard shadows that hide one side of the face.",
    ],
    faq: [
      { q: "What size should a profile picture be?", a: "A square of about 1000 × 1000 pixels works on almost every platform." },
      { q: "Can I use these prompts with my own photo?", a: "Yes. Prompts marked as needing a photo ask for one in Create Image before they run." },
      { q: "How do I keep the result looking like me?", a: "Use a clear, front-facing photo and say exactly which features to keep." },
      { q: "Can I make a cartoon avatar?", a: "Yes. Swap the style words, for example \"3D animated character\" or \"flat vector illustration\"." },
    ],
  },
  "social-media-post": {
    intro: [
      "A social post has about one second to stop a thumb. Good prompts for feed images aim for one clear idea, strong colour contrast and a shape that suits the platform: tall 4:5 for Instagram and Facebook feeds, 9:16 for stories and reels covers.",
      "Many of these prompts also include a short line of text. Image models are now decent at lettering, but they do best with a few words in quotes, placed somewhere specific.",
    ],
    ingredients: [
      { t: "The single idea", d: "One subject or message, not a collage of everything you want to say." },
      { t: "Platform shape", d: "State the ratio: 4:5 portrait for feeds, 9:16 for stories, 1:1 for a classic square." },
      { t: "Words, in quotes", d: "Up to about six words, with the font style and position: \"bold sans-serif headline at the top\"." },
      { t: "Brand colours", d: "Name two or three colours so posts look like a set." },
      { t: "Safe margins", d: "Ask for empty space where the app puts buttons and captions." },
    ],
    example: {
      prompt: "A 4:5 Instagram post: a flat-lay of a cappuccino, a croissant and an open notebook on a pale oak table, shot from directly above in soft morning light. Leave clean space in the top third for the headline \"Slow Sunday\" in a bold cream serif font. Warm, muted palette of cream, caramel and sage.",
      notes: [
        { t: "\"4:5 Instagram post\"", d: "The tallest shape the feed shows uncropped." },
        { t: "\"From directly above\"", d: "Flat-lays read instantly on a phone." },
        { t: "\"Headline \"Slow Sunday\"\"", d: "Short quoted text with a font and position gives the cleanest lettering." },
        { t: "\"Cream, caramel and sage\"", d: "A named palette keeps a series consistent." },
      ],
    },
    models: "GPT Image 2 and Nano Banana Pro are the strongest here at clean, correctly spelled lettering. Seedream 4.5 is a good choice when the post is mostly image and mood with little or no text. Always zoom in on the words before posting.",
    mistakes: [
      "Long sentences of text; they come out misspelled or crammed.",
      "Square images for a feed that rewards tall ones.",
      "Text right at the edges, where profile icons and buttons cover it.",
      "Too many colours, so a series of posts never looks like one brand.",
    ],
    faq: [
      { q: "What ratio should a social post be?", a: "4:5 (1080 × 1350) for Instagram and Facebook feeds, 9:16 for stories and reels." },
      { q: "Can the AI add text to the image?", a: "Yes, short text works well when you quote it exactly and say where it goes; check the spelling." },
      { q: "How do I make a consistent series?", a: "Reuse the same palette, lighting words and layout in every prompt, changing only the subject." },
      { q: "Can I edit a post after it's made?", a: "Yes. Open it in the AI photo editor and describe the change, or crop it to another ratio." },
    ],
  },
  "infographic-edu-visual": {
    intro: [
      "Infographic prompts are the most structured in the library because the model has to lay out information, not just paint a scene. The best ones describe the layout like a designer's brief: a title, a set number of panels or steps, what goes in each, and a consistent visual style.",
      "Keep the facts in the prompt short and correct; the model will draw whatever you give it. For anything that must be accurate, such as numbers, labels or a process, check every word in the result.",
    ],
    ingredients: [
      { t: "Title", d: "The heading in quotes, and where it sits." },
      { t: "Structure", d: "\"Four numbered steps in a vertical column\" or \"a 2 × 3 grid of icons with labels\"." },
      { t: "The content", d: "Each label or step written out briefly, in order." },
      { t: "Visual style", d: "Flat vector icons, isometric, hand-drawn, chalkboard or a clean corporate look." },
      { t: "Colour and background", d: "A limited palette and a plain background so text stays legible." },
    ],
    example: {
      prompt: "A clean vertical infographic titled \"How a Seed Becomes a Tree\" at the top. Four numbered stages in a column, each with a simple flat illustration and a two-word label: \"Seed planted\", \"Roots grow\", \"Shoot appears\", \"Young tree\". Soft green and brown palette on an off-white background, rounded sans-serif font, generous spacing.",
      notes: [
        { t: "\"Titled… at the top\"", d: "Fixes the heading and its place in the layout." },
        { t: "\"Four numbered stages\"", d: "A set count stops the model inventing extra steps." },
        { t: "\"Two-word label\"", d: "Short labels are spelled correctly far more often." },
        { t: "\"Generous spacing\"", d: "Keeps the layout from looking crowded." },
      ],
    },
    models: "GPT Image 2 is especially good at following long, structured instructions and placing text where you ask. Nano Banana Pro also handles labels and diagrams well. For visuals with dense text, generate the layout and add the final wording in a design app if accuracy matters.",
    mistakes: [
      "Paragraphs of text inside the image; keep each label to a few words.",
      "No set number of items, so the model adds or drops steps.",
      "Mixing styles, such as photos and flat icons, in one graphic.",
      "Not checking facts and spelling before sharing in a lesson or report.",
    ],
    faq: [
      { q: "Can AI make an accurate infographic?", a: "It can lay one out well, but it doesn't check facts. Write correct content in the prompt and proofread the result." },
      { q: "What ratio suits an infographic?", a: "Tall 2:3 or 9:16 for phones and Pinterest; 16:9 for slides." },
      { q: "How many steps can one image hold?", a: "About four to six reads well; more becomes cramped and error-prone." },
      { q: "Can I use these for teaching?", a: "Yes, as long as you check the content; they work well as worksheet headers and slide visuals." },
    ],
  },
  "youtube-thumbnail": {
    intro: [
      "A YouTube thumbnail is a tiny advert. It's shown at 1280 × 720 at most and often much smaller, beside a dozen others, so good thumbnail prompts ask for a big, expressive face or a single bold object, high contrast and at most three or four words of huge text.",
      "Leave room on one side for the text and keep the bottom-right corner clear, where YouTube shows the video length.",
    ],
    ingredients: [
      { t: "16:9 frame", d: "Always state it; thumbnails are wide." },
      { t: "The hook", d: "A strong emotion (shock, joy, curiosity) or one striking object." },
      { t: "Big text", d: "Two to four words in quotes, very large, with a thick outline or shadow." },
      { t: "Contrast", d: "A bright subject against a darker or complementary background." },
      { t: "Composition", d: "Subject on one side, text on the other, nothing important bottom right." },
    ],
    example: {
      prompt: "A 16:9 YouTube thumbnail: on the left, a surprised young man holding a tiny bonsai tree up to the camera, sharply lit with a warm key light. On the right, the words \"10 YEARS OLD?!\" in huge yellow block letters with a thick black outline. Deep blue gradient background, high contrast, slight glow around the subject.",
      notes: [
        { t: "\"Surprised… holding up\"", d: "Emotion plus a clear object explains the video at a glance." },
        { t: "\"Huge yellow block letters\"", d: "Yellow on blue is one of the most readable pairs at small sizes." },
        { t: "\"Thick black outline\"", d: "Keeps the text legible over any background." },
        { t: "\"Subject on the left, text on the right\"", d: "A simple split that reads instantly." },
      ],
    },
    models: "Nano Banana Pro and GPT Image 2 handle big, bold thumbnail text best. If you're putting your own face on the thumbnail, use a photo prompt and Create Image, then upscale if the result looks soft before uploading.",
    mistakes: [
      "Whole sentences of text that become unreadable on a phone.",
      "Low-contrast colours that blend into YouTube's white or dark interface.",
      "Placing key text where the duration badge covers it.",
      "Several faces and objects competing for attention.",
    ],
    faq: [
      { q: "What size is a YouTube thumbnail?", a: "1280 × 720 pixels (16:9), under 2 MB." },
      { q: "How many words should a thumbnail have?", a: "Two to four, large enough to read on a phone." },
      { q: "Can I put my own face in it?", a: "Yes. Choose a prompt that uses your photo; Create Image will ask for it." },
      { q: "My thumbnail looks blurry. What can I do?", a: "Upscale it to at least 1280 pixels wide with the image upscaler before uploading." },
    ],
  },
  "comic-storyboard": {
    intro: [
      "Comic and storyboard prompts ask the model to tell a short story across panels, which means planning like a writer: how many panels, what happens in each, and what stays the same, above all the characters' looks.",
      "Consistency is the challenge. Describe each character once in detail (hair, clothes, colours) and refer to them the same way in every panel, so the model doesn't redesign them halfway through.",
    ],
    ingredients: [
      { t: "Panel layout", d: "\"A four-panel comic strip in a 2 × 2 grid\" or \"six storyboard frames in two rows\"." },
      { t: "Character sheet", d: "A short, fixed description of each character." },
      { t: "Panel by panel", d: "One line per panel: action, camera angle, any speech." },
      { t: "Speech bubbles", d: "Very short lines in quotes; or ask for empty bubbles to fill in later." },
      { t: "Art style", d: "Manga, newspaper strip, graphic novel, rough storyboard pencil." },
    ],
    example: {
      prompt: "A four-panel comic strip in a 2 × 2 grid, clean line art with flat pastel colours. Character: a small orange cat with a blue collar. Panel 1: the cat stares at a full food bowl. Panel 2: close-up, the cat looks at the camera. Panel 3: the cat pushes the bowl off the table. Panel 4: the cat sits proudly, speech bubble \"Better.\"",
      notes: [
        { t: "\"2 × 2 grid\"", d: "Fixes the panel count and reading order." },
        { t: "\"Orange cat with a blue collar\"", d: "A short, repeatable character description." },
        { t: "\"Panel 1… Panel 4\"", d: "One clear action per panel keeps the story readable." },
        { t: "\"Better.\"", d: "One short word in a bubble is far more reliable than a sentence." },
      ],
    },
    models: "Nano Banana Pro is notably good at keeping a character consistent across panels. GPT Image 2 follows panel-by-panel instructions closely. For longer stories, make two or three panels per image and keep the character description identical each time.",
    mistakes: [
      "Long dialogue in bubbles; it comes out garbled.",
      "Describing a character differently in different panels.",
      "Too many panels in one image, so each is tiny.",
      "No camera direction, so every panel is the same mid shot.",
    ],
    faq: [
      { q: "How do I keep characters consistent?", a: "Describe them once in detail and repeat that exact description; a reference image helps further." },
      { q: "How many panels can one image hold?", a: "Four to six works best; split longer stories across several images." },
      { q: "Can I add my own dialogue later?", a: "Yes. Ask for empty speech bubbles and fill them in a design app." },
      { q: "What's the difference between a comic and a storyboard?", a: "A storyboard plans shots for a video, with camera notes; a comic tells the story itself, with dialogue." },
    ],
  },
  "product-marketing": {
    intro: [
      "Product marketing images sell a feeling as well as an object: a skincare bottle on wet stone suggests freshness, a watch beside a leather notebook suggests craftsmanship. Good prompts describe the product precisely, then build a small scene and lighting around the mood you want.",
      "If you have a real product photo, use it as a reference so the shape, label and colour stay true; buyers notice when an ad doesn't match the item.",
    ],
    ingredients: [
      { t: "The product", d: "Exact shape, material, colour and any label, or \"use the product in my photo\"." },
      { t: "Props and surface", d: "Two or three props that support the story, and the surface it stands on." },
      { t: "Light", d: "Soft daylight, a hard sunbeam, studio rim light, or dramatic low key." },
      { t: "Mood words", d: "Fresh, luxurious, playful, minimal, rugged." },
      { t: "Space for copy", d: "Ask for empty space on one side if a headline will be added." },
    ],
    example: {
      prompt: "Using the bottle in my photo, create an ad image: the bottle standing on a wet slab of grey stone, a few drops of water on the glass, sprigs of fresh mint beside it. Hard morning sunlight from the left casting a crisp shadow, pale sage background, fresh and clean mood. Keep the label and bottle shape exactly. Leave empty space on the right.",
      notes: [
        { t: "\"Using the bottle in my photo\"", d: "Keeps the real product, not a guess at it." },
        { t: "\"Wet slab… drops of water\"", d: "Props and texture carry the \"fresh\" message." },
        { t: "\"Hard morning sunlight… crisp shadow\"", d: "Specific light is what makes it look like a real shoot." },
        { t: "\"Keep the label… exactly\"", d: "Protects branding the model might otherwise redraw." },
      ],
    },
    models: "Nano Banana Pro and GPT Image 2 are good at placing a real product from your photo into a new scene. Seedream 4.5 suits high-resolution, atmospheric hero images. Check labels and logos closely; small text on packaging can come out altered.",
    mistakes: [
      "Describing the product loosely, so the ad shows a different bottle or box.",
      "Too many props competing with the product.",
      "Generic light words like \"good lighting\" instead of a direction and quality.",
      "Forgetting space for the headline you plan to add.",
    ],
    faq: [
      { q: "Can I use my real product?", a: "Yes. Choose a prompt that uses your photo and say to keep the label and shape exactly." },
      { q: "Are AI product images allowed in ads?", a: "Generally yes, but the image must show the product honestly; check the ad platform's rules." },
      { q: "What background works best?", a: "Plain or softly blurred, in a colour that contrasts with the product." },
      { q: "How do I make a matching set?", a: "Reuse the same light, surface and palette words, changing only the product or props." },
    ],
  },
  "e-commerce-main-image": {
    intro: [
      "The main image on a marketplace listing has stricter rules than an ad. Amazon, for example, asks for a pure white background with the product filling most of the frame, and most marketplaces favour a clean, honest shot without added text or badges.",
      "So these prompts are about accuracy: the real product, centred, evenly lit, on white or a very plain background, with natural shadows so it doesn't look pasted in. Lifestyle scenes belong in the extra images.",
    ],
    ingredients: [
      { t: "The real product", d: "Use your photo as the reference and ask to keep every detail." },
      { t: "Background", d: "Pure white (RGB 255, 255, 255) or the marketplace's required background." },
      { t: "Framing", d: "Centred, filling about 85% of the frame, nothing cut off." },
      { t: "Light", d: "Soft, even studio light from the front and sides, with a gentle contact shadow." },
      { t: "Square format", d: "1:1 at 2000 pixels or more so zoom works." },
    ],
    example: {
      prompt: "Using the sneaker in my photo, create a marketplace main image: the shoe in a three-quarter side view, centred on a pure white background, filling about 85% of a square frame. Soft, even studio lighting with a faint natural shadow under the sole. Keep the colours, stitching and logo exactly as in the photo. No text, no props.",
      notes: [
        { t: "\"Three-quarter side view\"", d: "The most informative angle for shoes and most products." },
        { t: "\"Pure white… 85%\"", d: "Matches common marketplace main-image rules." },
        { t: "\"Faint natural shadow\"", d: "Grounds the product so it doesn't float." },
        { t: "\"No text, no props\"", d: "Main images should show only the product." },
      ],
    },
    models: "For main images, accuracy matters more than style: Nano Banana Pro and GPT Image 2 are good at keeping a real product's details from your photo. Compare the result with the actual item side by side, and for perfectly clean white backgrounds the background remover is often faster.",
    mistakes: [
      "Adding props, text or badges to the main image, which many marketplaces reject.",
      "Letting the model \"improve\" the product, changing colours or details.",
      "Off-white or grey backgrounds where pure white is required.",
      "Small products floating in a big empty frame.",
    ],
    faq: [
      { q: "What background does Amazon require?", a: "Pure white for the main image, with the product filling about 85% of the frame; check the category's current rules." },
      { q: "Can I use AI images for listings?", a: "Yes, if they show the real product accurately; misleading images lead to returns and policy problems." },
      { q: "What size should a main image be?", a: "Square, at least 1000 pixels on the longest side for zoom; 2000 or more is better." },
      { q: "Is a background remover easier?", a: "For a plain white main image, often yes; use AI scenes for the secondary lifestyle images." },
    ],
  },
  "game-asset": {
    intro: [
      "Game-asset prompts produce sprites, icons, items, character concepts and tiles. Unlike a scene, an asset usually needs to stand alone: a single object, a consistent angle, a plain or transparent-friendly background, and a style that matches the rest of the game.",
      "Think in sets. If you need ten potion icons, write one prompt that fixes the angle, outline, lighting and palette, then change only the item each time.",
    ],
    ingredients: [
      { t: "The asset", d: "One item or character, named precisely: \"a round red health potion with a cork stopper\"." },
      { t: "View", d: "Front view, three-quarter isometric, top-down or side-on, the same for every asset." },
      { t: "Style", d: "Pixel art, hand-painted fantasy, low-poly 3D, flat mobile-game icon." },
      { t: "Background", d: "Plain, single-colour background that's easy to remove." },
      { t: "Set rules", d: "Outline thickness, light direction and palette, repeated in every prompt." },
    ],
    example: {
      prompt: "A single game inventory icon of a round red health potion with a cork stopper and a small glowing heart inside, three-quarter view, hand-painted fantasy style with a soft dark outline. Light from the top left. Centred on a plain flat grey background, no text, no shadow on the floor.",
      notes: [
        { t: "\"Single game inventory icon\"", d: "Tells the model it's an isolated asset, not a scene." },
        { t: "\"Three-quarter view\"", d: "Repeat this for every icon in the set." },
        { t: "\"Light from the top left\"", d: "Consistent light makes a set feel unified." },
        { t: "\"Plain flat grey background\"", d: "Easy to remove for a transparent PNG." },
      ],
    },
    models: "Any of the image models can make strong concept art; Nano Banana Pro and GPT Image 2 follow set rules such as view and outline closely. For true pixel-art sprites, generate at a larger size and clean up the pixels in a sprite editor, because image models don't draw on a fixed pixel grid.",
    mistakes: [
      "Changing the view or light between assets, so a set looks mismatched.",
      "Busy backgrounds that make cut-outs hard.",
      "Expecting exact pixel grids; AI pixel art needs tidying.",
      "Several items in one image when you need them separately.",
    ],
    faq: [
      { q: "Can I get a transparent background?", a: "Generate on a plain background, then use the background remover for a transparent PNG." },
      { q: "Can I use AI assets in a commercial game?", a: "Check the terms of the model you use and the platform you publish on; rules vary." },
      { q: "How do I keep a set consistent?", a: "Fix the view, light, outline and palette words, and change only the item name." },
      { q: "Is AI pixel art game-ready?", a: "Usually not straight away; clean it up on a true pixel grid first." },
    ],
  },
  "poster-flyer": {
    intro: [
      "Posters and flyers combine a strong image with a hierarchy of text: a big title, a few supporting details, and enough empty space to breathe. Good prompts describe the layout from top to bottom and keep every piece of text short and quoted.",
      "Decide the use first. An event flyer needs a date and place that people can read from across a room, while a movie-style poster can be almost all image with a single title.",
    ],
    ingredients: [
      { t: "Format", d: "Portrait 2:3 or A-series proportions for print, 4:5 for social sharing." },
      { t: "Main image", d: "One striking illustration or photo concept." },
      { t: "Title", d: "The headline in quotes, its style and position." },
      { t: "Supporting text", d: "Date, place or tagline, each a few words, in quotes." },
      { t: "Design style", d: "Swiss minimal, retro screen print, risograph, art deco, bold grunge." },
    ],
    example: {
      prompt: "A portrait 2:3 poster in retro screen-print style with three ink colours, orange, teal and cream. A large sun setting over a calm sea fills the top two thirds. Below it, the title \"SUMMER JAZZ\" in tall condensed letters, and beneath that \"Harbour Steps · 21 June · 7 pm\" in a smaller matching font. Slight paper texture, generous margins.",
      notes: [
        { t: "\"Three ink colours\"", d: "A limited palette gives the authentic screen-print look." },
        { t: "\"Top two thirds\"", d: "Sets the layout so the image and text don't fight." },
        { t: "\"SUMMER JAZZ\"", d: "A short, capitalised title renders cleanly." },
        { t: "\"Harbour Steps · 21 June · 7 pm\"", d: "Supporting details kept to one short line." },
      ],
    },
    models: "GPT Image 2 and Nano Banana Pro are the most reliable for poster typography and layouts. For posters you'll print large, generate at the highest size available and upscale before sending to the printer; proofread dates and places letter by letter.",
    mistakes: [
      "Too much text; a poster is not a leaflet.",
      "No hierarchy, so the title and details are the same size.",
      "Dates and places spelled wrong and printed anyway.",
      "Low resolution files sent to print.",
    ],
    faq: [
      { q: "What size should a poster be?", a: "Design in a 2:3 or A-series ratio, and upscale to around 300 pixels per inch at the print size." },
      { q: "Can AI get the text right?", a: "Usually for short text; always check every letter before printing." },
      { q: "Can I edit the text afterwards?", a: "Yes. Ask for space without text and add it in a design app, or fix words with the AI photo editor." },
      { q: "What styles work best?", a: "Bold, simple styles such as screen print, Swiss minimal and art deco read best from a distance." },
    ],
  },
};
