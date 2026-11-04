import type { FacetExtras } from "./types";

export const IMAGE_EXTRAS: Record<string, FacetExtras> = {
  "profile-avatar": {
    audiences: [
      { t: "Job seekers", d: "A clean, friendly avatar for LinkedIn and CV sites when there's no recent professional photo." },
      { t: "Gamers and streamers", d: "A stylised version of themselves for Discord, Twitch and in-game profiles." },
      { t: "Remote teams", d: "Matching avatars across Slack, Teams and email so colleagues recognise each other." },
      { t: "Privacy-minded people", d: "An illustrated avatar that represents them without showing a real photo." },
    ],
    template: "Using my photo, create a square profile picture: [framing], [expression]. Keep my face, hair and [glasses/beard] exactly. [Style], [light direction], plain [colour] background.",
    variations: [
      { t: "Swap the background colour", d: "Match the brand colour of your company or channel for instant consistency." },
      { t: "Change \"relaxed smile\" to \"confident, closed-mouth smile\"", d: "A more formal look for corporate profiles." },
      { t: "Add \"3D animated character style\"", d: "Turns the photo into a friendly cartoon while keeping your features." },
      { t: "Try \"black and white, high contrast\"", d: "A timeless, editorial avatar." },
    ],
    faq: [
      { q: "Should my avatar match across platforms?", a: "Ideally yes; the same picture everywhere makes you easier to recognise." },
      { q: "Can I make an avatar for a team?", a: "Yes. Use the same prompt for everyone, changing only the photo, so the set matches." },
    ],
  },
  "social-media-post": {
    audiences: [
      { t: "Small businesses", d: "Weekly posts for offers, opening hours and new products without a designer on call." },
      { t: "Creators", d: "Quote cards, carousel covers and announcement graphics in a consistent style." },
      { t: "Community groups", d: "Event announcements and reminders that look professional on a tiny budget." },
      { t: "Marketers", d: "Fast concepts to test which visual direction gets the most engagement." },
    ],
    template: "A [ratio] [platform] post: [main subject and scene], [angle and light]. Leave clean space in the [position] for the text \"[up to six words]\" in a [font style]. [Two or three colours] palette.",
    variations: [
      { t: "Switch to 9:16", d: "The same idea as a story or reel cover; move the text away from the top and bottom." },
      { t: "Replace the photo scene with \"flat vector illustration\"", d: "A brighter, more graphic look." },
      { t: "Remove the headline", d: "Lets you add text in your own fonts later." },
      { t: "Add \"carousel cover, part 1 of 5\"", d: "Signals a series and invites swiping." },
    ],
    faq: [
      { q: "Can I make a carousel?", a: "Yes. Generate each slide with the same palette and layout words, changing the content." },
      { q: "Do platforms allow AI images?", a: "Generally yes; some ask you to label realistic AI content, so check each platform's policy." },
    ],
  },
  "infographic-edu-visual": {
    audiences: [
      { t: "Teachers", d: "Worksheet headers, process diagrams and classroom posters that explain one idea clearly." },
      { t: "Students", d: "Revision sheets and presentation slides that summarise a topic visually." },
      { t: "Content marketers", d: "Shareable how-to graphics for blogs, LinkedIn and Pinterest." },
      { t: "Trainers", d: "Step-by-step visuals for onboarding and safety instructions." },
    ],
    template: "A clean [vertical/horizontal] infographic titled \"[title]\". [Number] [steps/panels] in a [layout], each with a [icon style] and a short label: \"[label 1]\", \"[label 2]\", \"[label 3]\". [Palette] on a [background], [font style].",
    variations: [
      { t: "Change to \"hand-drawn notebook sketch style\"", d: "Friendlier and more informal for classrooms." },
      { t: "Make it \"a circular cycle diagram\"", d: "Better for processes that repeat, like the water cycle." },
      { t: "Switch to 16:9", d: "Ready to drop into a slide." },
      { t: "Ask for \"numbers in large circles\"", d: "Makes the order unmistakable." },
    ],
    faq: [
      { q: "Can I use these in a presentation?", a: "Yes. Generate at 16:9 and check every label before presenting." },
      { q: "What if a label is misspelled?", a: "Fix it with the AI photo editor, or ask for blank labels and type them yourself." },
    ],
  },
  "youtube-thumbnail": {
    audiences: [
      { t: "New YouTubers", d: "Professional-looking thumbnails before they can afford a designer." },
      { t: "Educators", d: "Clear, curiosity-driven thumbnails for tutorials and explainers." },
      { t: "Gaming channels", d: "Bold, high-energy thumbnails with characters and big reactions." },
      { t: "Podcasters", d: "Episode thumbnails with guest faces and a short hook." },
    ],
    template: "A 16:9 YouTube thumbnail: on the [left/right], [person or object] with [emotion], [lighting]. On the other side, \"[2–4 words]\" in huge [colour] letters with a thick [colour] outline. [Background colour or scene], high contrast.",
    variations: [
      { t: "Use an arrow or circle", d: "Ask for \"a red arrow pointing at the bonsai\" to direct the eye." },
      { t: "Before-and-after split", d: "Left half before, right half after, for transformation videos." },
      { t: "Swap blue for a dark background", d: "Stands out against YouTube's white interface." },
      { t: "Remove the text", d: "Some channels add titles in their own editor for perfect fonts." },
    ],
    faq: [
      { q: "Should my face be in every thumbnail?", a: "Faces with clear emotion often attract clicks, but a strong object or result works too." },
      { q: "Can I test two thumbnails?", a: "Yes. YouTube Studio can test thumbnails against each other on many channels." },
    ],
  },
  "comic-storyboard": {
    audiences: [
      { t: "Writers", d: "Rough visual drafts of a story idea before commissioning an artist." },
      { t: "Video makers", d: "Storyboards to plan shots for ads, short films and social videos." },
      { t: "Teachers", d: "Comic strips that make a lesson or a story memorable." },
      { t: "Brands", d: "Short comic posts that tell a customer story on social media." },
    ],
    template: "A [number]-panel [comic strip/storyboard] in a [grid], [art style]. Character: [fixed description]. Panel 1: [action, angle]. Panel 2: [action, angle]. Panel 3: [action]. Panel 4: [ending], speech bubble \"[1–3 words]\".",
    variations: [
      { t: "Switch to \"manga, black and white with screentones\"", d: "A Japanese comic look, read right to left if you ask." },
      { t: "Make it a storyboard", d: "Add camera notes like \"wide shot\" and \"close-up\" under each frame." },
      { t: "Empty speech bubbles", d: "Fill in dialogue later in any design app." },
      { t: "One wide panorama panel", d: "For a dramatic establishing scene." },
    ],
    faq: [
      { q: "What's the reading order?", a: "Left to right, top to bottom for Western comics; say \"right to left\" for manga." },
      { q: "Can I continue the story in another image?", a: "Yes. Repeat the character description and art style exactly in the next prompt." },
    ],
  },
  "product-marketing": {
    audiences: [
      { t: "Small brands", d: "Ad images and launch visuals without booking a studio shoot." },
      { t: "Marketplace sellers", d: "Lifestyle images for secondary listing photos and social ads." },
      { t: "Agencies", d: "Fast concept boards to agree a visual direction with clients." },
      { t: "Makers and crafters", d: "Atmospheric photos that show handmade products at their best." },
    ],
    template: "Using the [product] in my photo, create an ad image: the product on [surface], with [two or three props]. [Light quality and direction], [background colour], [mood] mood. Keep the label and shape exactly. Leave empty space on the [side].",
    variations: [
      { t: "Swap mint for citrus slices", d: "Changes the mood from cool and fresh to bright and energetic." },
      { t: "Try \"floating in mid-air with splashes\"", d: "A dynamic, high-energy ad look." },
      { t: "Change to soft overcast light", d: "Calmer and more natural for skincare and wellness." },
      { t: "Add a hand holding the product", d: "Shows scale and feels more human." },
    ],
    faq: [
      { q: "How many ad variations should I make?", a: "Three to five with different props or light gives you options to test." },
      { q: "Can I use these images on my website?", a: "Yes, as long as they represent the product accurately." },
    ],
  },
  "e-commerce-main-image": {
    audiences: [
      { t: "Amazon and Flipkart sellers", d: "Main images that meet white-background rules." },
      { t: "Etsy shops", d: "Clean first photos that look consistent across a whole shop." },
      { t: "Dropshippers", d: "Tidier versions of supplier photos, as long as they stay accurate." },
      { t: "Resellers", d: "Clean, honest shots of second-hand items on plain backgrounds." },
    ],
    template: "Using the [product] in my photo, create a marketplace main image: [angle] view, centred on a pure white background, filling about 85% of a square frame. Soft, even studio light, faint natural shadow. Keep [colours, details, logo] exactly. No text, no props.",
    variations: [
      { t: "Front view instead of three-quarter", d: "Best for boxes, books and flat products." },
      { t: "Add a second angle", d: "Make a matching side or back view for your extra images." },
      { t: "Light grey background", d: "For your own shop where white isn't required." },
      { t: "Ask for a soft reflection", d: "A premium look for electronics and jewellery." },
    ],
    faq: [
      { q: "How many listing photos do I need?", a: "Most marketplaces allow six or more: one main image plus angles, details, scale and lifestyle." },
      { q: "Can I add badges like \"bestseller\"?", a: "Not on main images for most marketplaces; keep those for your own shop or ads." },
    ],
  },
  "game-asset": {
    audiences: [
      { t: "Indie developers", d: "Placeholder and concept art for prototypes and pitches." },
      { t: "Game jam teams", d: "Quick sets of icons and items under time pressure." },
      { t: "Tabletop creators", d: "Item cards, tokens and character art for board and role-playing games." },
      { t: "Modders", d: "Concept ideas before modelling or painting final assets." },
    ],
    template: "A single game [icon/sprite/item] of [object with key details], [view], [art style] with [outline]. Light from the [direction]. Centred on a plain flat [colour] background, no text, no floor shadow.",
    variations: [
      { t: "Change \"hand-painted\" to \"pixel art, 32 × 32 look\"", d: "A retro sprite style; tidy it on a grid afterwards." },
      { t: "Make a set", d: "Swap the item name: mana potion, stamina potion, poison flask." },
      { t: "Add a rarity glow", d: "\"Faint purple glow\" for epic items, gold for legendary." },
      { t: "Isometric view", d: "For tiles and buildings in strategy games." },
    ],
    faq: [
      { q: "Can I get a sprite sheet?", a: "Models can lay out several frames, but animation frames rarely line up; treat them as reference." },
      { q: "What background is easiest to remove?", a: "A flat mid-grey or bright green with no shadow." },
    ],
  },
  "poster-flyer": {
    audiences: [
      { t: "Event organisers", d: "Gig, workshop and community event flyers that look designed." },
      { t: "Small venues and cafés", d: "Posters for open-mic nights, menus and seasonal offers." },
      { t: "Students and clubs", d: "Society events and campaign posters on no budget." },
      { t: "Artists", d: "Concepts for prints and exhibition posters." },
    ],
    template: "A portrait [ratio] poster in [design style] with [colours]. [Main image] fills the [top/centre]. The title \"[TITLE]\" in [letter style], and below it \"[place · date · time]\" in a smaller matching font. [Texture], generous margins.",
    variations: [
      { t: "Swiss minimal style", d: "Clean grid, bold sans-serif, lots of white space; great for talks and exhibitions." },
      { t: "Art deco", d: "Gold lines and geometric frames for elegant evening events." },
      { t: "Risograph look", d: "Two bright inks with slight misregistration, popular for gigs and zines." },
      { t: "Landscape 16:9", d: "The same poster for screens and social banners." },
    ],
    faq: [
      { q: "Can I print it at A3?", a: "Yes, after upscaling; A3 at 300 pixels per inch is about 3508 × 4960 pixels." },
      { q: "How much text can a flyer have?", a: "A title, one line of details and perhaps a short tagline; put the rest on a website or QR code." },
    ],
  },
  photography: {
    audiences: [
      { t: "Bloggers", d: "Header images that look like real photography rather than obvious AI." },
      { t: "Photographers", d: "Mood boards and lighting tests before a real shoot." },
      { t: "Designers", d: "Placeholder photos for mock-ups and presentations." },
      { t: "Writers", d: "Visual references for scenes and characters." },
    ],
    template: "A [lens] [shot type] of [subject doing an action] in [setting] at [time of day]. [Light direction and quality]. [Depth of field]. [Colour and texture], [film grain or clean digital].",
    variations: [
      { t: "Swap dawn for blue hour", d: "Cooler, moodier light with glowing harbour lamps." },
      { t: "Change 85 mm to 24 mm", d: "A wider environmental portrait that shows the whole jetty." },
      { t: "Black and white", d: "Emphasises texture and expression." },
      { t: "Add \"shot on a phone, candid\"", d: "A more casual, snapshot feel." },
    ],
    faq: [
      { q: "Can I edit an AI photo afterwards?", a: "Yes: crop, adjust or change details with the AI photo editor." },
      { q: "Should I say \"photorealistic\"?", a: "It helps a little, but describing real light and lens helps far more." },
    ],
  },
  "cinematic-film-still": {
    audiences: [
      { t: "Filmmakers", d: "Look development and pitch decks before a shoot." },
      { t: "Writers", d: "Mood frames that show the tone of a script or novel." },
      { t: "Musicians", d: "Album and single artwork with a movie feel." },
      { t: "Video creators", d: "Starting frames to animate with a video model." },
    ],
    template: "A [2.39:1/16:9] cinematic film still, [shot type] of [character] [action] in [setting] at [time]. [Grade and light], [lens detail], [film texture], [mood].",
    variations: [
      { t: "Change the genre to romance", d: "Warmer tones, softer light and a gentler moment." },
      { t: "Make it daytime", d: "Bright overcast light changes the thriller into a quiet drama." },
      { t: "Add fog", d: "Atmosphere and depth with very little effort." },
      { t: "Try an extreme wide shot", d: "A tiny figure in a vast scene for an epic feel." },
    ],
    faq: [
      { q: "Can I make a movie poster from a still?", a: "Yes: add a title in a design app or ask for short title text." },
      { q: "What's a motivated light?", a: "Light that seems to come from something in the scene, like a lamp or a window." },
    ],
  },
  "anime-manga": {
    audiences: [
      { t: "Anime fans", d: "Avatars and fan-style art of themselves and friends." },
      { t: "Writers", d: "Character and scene concepts for light novels and webcomics." },
      { t: "Streamers", d: "Anime-style overlays, emotes and banners." },
      { t: "Couples and friends", d: "Shared anime portraits as gifts." },
    ],
    template: "A [16:9 screenshot/2:3 poster] in a [sub-style] anime style: [character description] [action] in [scene], [time and light]. [Line and colour rendering], [mood].",
    variations: [
      { t: "1990s retro anime", d: "Grainier colours, softer lines and an old TV feel." },
      { t: "Action shonen", d: "Speed lines, dynamic angles and dramatic lighting." },
      { t: "Chibi", d: "Cute, small-bodied characters for stickers." },
      { t: "Monochrome manga page", d: "Black-and-white panels with screentone shading." },
    ],
    faq: [
      { q: "Can I make an anime couple picture?", a: "Yes, with a photo of the two of you and a couple-portrait prompt." },
      { q: "How do I keep my anime character the same?", a: "Reuse the exact character description and a reference image." },
    ],
  },
  illustration: {
    audiences: [
      { t: "Authors", d: "Cover concepts and chapter illustrations for books." },
      { t: "Bloggers and newsletters", d: "Editorial art that's friendlier than stock photos." },
      { t: "Shops", d: "Illustrated packaging and label ideas." },
      { t: "Parents and teachers", d: "Custom story pictures for children." },
    ],
    template: "A [purpose] illustration in [medium]: [subject and scene], [mood]. [Palette of three to five colours]. [Texture details], [shape language], [space for title or text].",
    variations: [
      { t: "Flat vector", d: "Crisp shapes and solid colours for web and icons." },
      { t: "Coloured pencil", d: "Soft, hand-made texture for cosy stories." },
      { t: "Linocut print", d: "Bold carved lines and two inks." },
      { t: "Night version", d: "Change the palette to deep blues with warm window lights." },
    ],
    faq: [
      { q: "Can I make a picture book?", a: "Yes: plan each page, keep characters consistent and use the same medium words throughout." },
      { q: "What resolution do books need?", a: "Print books need about 300 pixels per inch at the printed size; upscale before sending to print." },
    ],
  },
  "sketch-line-art": {
    audiences: [
      { t: "Parents and teachers", d: "Custom colouring pages on any theme." },
      { t: "Tattoo clients", d: "Concepts to discuss with an artist." },
      { t: "Designers", d: "Line-art drafts to trace and vectorise." },
      { t: "Artists", d: "Composition sketches before painting." },
    ],
    template: "A [tool] line drawing of [subject], [view]. [Line quality], [shading or none], [colour or black only], [background], suitable as [use].",
    variations: [
      { t: "Cross-hatched shading", d: "Classic pen-and-ink depth." },
      { t: "Charcoal", d: "Soft, smudgy, expressive tones." },
      { t: "Continuous single line", d: "A modern minimal drawing in one unbroken line." },
      { t: "Blueprint style", d: "White lines on blue for technical or architectural drawings." },
    ],
    faq: [
      { q: "How do I make thicker lines for young children?", a: "Ask for \"bold thick outlines, large simple shapes\"." },
      { q: "Can I turn line art into a vector?", a: "Yes, with a vectorising tool or by tracing it in a design app." },
      { q: "Can I get architectural line drawings?", a: "Yes: ask for a technical pen drawing with straight lines and simple perspective." },
    ],
  },
  "comic-graphic-novel": {
    audiences: [
      { t: "Comic writers", d: "Visual tests for a character or a world." },
      { t: "Gift givers", d: "A comic-cover portrait of a friend as a hero." },
      { t: "Bands and podcasters", d: "Graphic-novel artwork for covers and posters." },
      { t: "Game designers", d: "Bold comic-style key art." },
    ],
    template: "A single comic-book panel in [tradition] style: [character] [action] in [setting]. [Ink style], [colour approach]. [Camera angle]. [Optional caption or sound effect in quotes].",
    variations: [
      { t: "Classic superhero colours", d: "Primary colours, halftone dots and bold action." },
      { t: "Clear-line European", d: "Even outlines and flat colours for adventure stories." },
      { t: "Webtoon", d: "Soft gradients and bright colours in a tall vertical panel." },
      { t: "Comic cover layout", d: "A big title area and issue number for a mock cover." },
    ],
    faq: [
      { q: "Can I make myself a comic hero?", a: "Yes, with a photo prompt or the one-tap comic book cover app." },
      { q: "Are halftone dots possible?", a: "Yes; ask for halftone shading or a retro printed comic texture." },
    ],
  },
  watercolor: {
    audiences: [
      { t: "Couples", d: "Watercolour wedding invitations and save-the-dates." },
      { t: "Pet owners", d: "Soft watercolour portraits of their pets." },
      { t: "Travellers", d: "Paintings made from their holiday photos." },
      { t: "Small brands", d: "Gentle packaging and label art." },
    ],
    template: "A loose watercolour painting of [subject], [technique details]. [Transparent layers], [warm and cool colours], [amount of white paper], [paper texture], [finishing touches].",
    variations: [
      { t: "Add ink outlines", d: "A pen-and-wash look, popular for travel sketches." },
      { t: "Monochrome indigo", d: "One colour for an elegant, calm print." },
      { t: "Wet, dramatic sky", d: "Big blooms and drips for landscapes." },
      { t: "Botanical study", d: "Fine detail with labels, like an old field guide." },
    ],
    faq: [
      { q: "Can I paint my pet in watercolour?", a: "Yes, from a photo; say to keep markings and colours accurate." },
      { q: "What paper look should I ask for?", a: "Cold-pressed paper texture is the classic watercolour look." },
      { q: "What's the difference between watercolour and gouache?", a: "Watercolour is transparent and lets white paper glow through; gouache is opaque and flatter." },
      { q: "Can I make watercolour wedding invitations?", a: "Yes: generate florals or a venue painting, leave white space and add the text in a design app." },
      { q: "Why does my watercolour look too sharp?", a: "Ask for soft edges, wet-on-wet blooms and fewer hard outlines." },
      { q: "How do I get granulation in the shadows?", a: "Ask for granulating pigment, such as ultramarine settling into the paper texture, in the darker areas." },
    ],
  },
  "retro-vintage": {
    audiences: [
      { t: "Nostalgia lovers", d: "Photos of themselves in their favourite decade." },
      { t: "Event planners", d: "Themed invitations for decade parties and reunions." },
      { t: "Brands", d: "Throwback campaigns and retro packaging ideas." },
      { t: "Musicians", d: "Vintage-style album and single covers." },
    ],
    template: "A [decade] [medium]: [subject and scene] with [period details]. [Colour cast and wear], [lens or print quality], [border or format].",
    variations: [
      { t: "1990s disposable camera", d: "Direct flash, red-eye and date stamp." },
      { t: "1950s travel poster", d: "Flat bold shapes and screen-printed colours." },
      { t: "Victorian portrait", d: "Sepia tones, formal pose, studio backdrop." },
      { t: "Y2K", d: "Glossy, metallic, bright and digital." },
    ],
    faq: [
      { q: "What's a date stamp?", a: "The orange date that older cameras printed in the corner; ask for it to complete a 90s look." },
      { q: "Can I make a decade party invitation?", a: "Yes: pick the decade's poster style and add the event details as short text." },
      { q: "What's the 70s colour palette?", a: "Mustard, orange, brown, avocado green and cream, often slightly faded." },
    ],
  },
  "cyberpunk-sci-fi": {
    audiences: [
      { t: "Gamers", d: "Wallpapers and avatars in a neon future." },
      { t: "Writers", d: "Concept art for sci-fi stories and worlds." },
      { t: "Music producers", d: "Synthwave and electronic cover art." },
      { t: "Streamers", d: "Futuristic overlays and channel art." },
    ],
    template: "A [shot] of [setting] in a [sub-genre] world, [atmospheric details]. [Character or vehicle doing something]. [Light colours and haze], [ratio].",
    variations: [
      { t: "Solarpunk", d: "Swap neon for sunlight and greenery for a hopeful future." },
      { t: "Retro-futurism", d: "Chrome, rounded spaceships and 1950s optimism." },
      { t: "Space station interior", d: "Clean white corridors and a view of the planet." },
      { t: "Daylight cyberpunk", d: "Smoggy orange sunlight instead of night neon." },
    ],
    faq: [
      { q: "What colours define cyberpunk?", a: "Magenta and cyan neon against dark, wet streets, often with warm accents." },
      { q: "Can I make a sci-fi wallpaper?", a: "Yes: 16:9 for desktops, 9:16 for phones, with a calm area for icons." },
      { q: "Can I make a cyberpunk character portrait?", a: "Yes: describe implants, clothing and neon light on the face, with a city blurred behind." },
    ],
  },
  minimalism: {
    audiences: [
      { t: "Designers", d: "Clean backgrounds for presentations and websites." },
      { t: "Authors", d: "Simple, striking book cover concepts." },
      { t: "Phone users", d: "Calm wallpapers that keep icons readable." },
      { t: "Brands", d: "Elegant hero images with room for a tagline." },
    ],
    template: "A minimalist image: [single subject] [size and position] on [simple surface or space]. [What to leave out]. [Light], [two or three colours], [ratio].",
    variations: [
      { t: "Swap the boat for a single tree", d: "A classic minimal landscape." },
      { t: "Use a bold background colour", d: "A red object on a deep blue field is graphic and modern." },
      { t: "Centre the subject", d: "Calm symmetry instead of the rule of thirds." },
      { t: "Add soft shadow only", d: "A hint of depth without clutter." },
    ],
    faq: [
      { q: "How small should the subject be?", a: "Often 5–15% of the frame; the empty space is the point." },
      { q: "Is minimalism good for print?", a: "Yes; large areas of flat colour print cleanly at any size." },
      { q: "Can minimalist images be colourful?", a: "Yes: one bold colour field with a small contrasting subject is very minimal." },
      { q: "What subjects suit minimalism?", a: "Single objects, lone trees, boats, buildings, figures in vast space." },
    ],
  },
  "portrait-selfie": {
    audiences: [
      { t: "Social media users", d: "Fresh profile and post photos without a photoshoot." },
      { t: "Professionals", d: "Polished portraits for work profiles." },
      { t: "Trend followers", d: "Viral looks like retro yearbook, action figure or Ghibli-style portraits." },
      { t: "Gift makers", d: "Special portraits of family members for cards and frames." },
    ],
    template: "Using my selfie, create a [framing] [genre] portrait. Keep my face, skin tone, hairstyle and expression exactly. I'm wearing [outfit], [pose] in [setting]. [Light], [lens look], natural skin texture.",
    variations: [
      { t: "Studio backdrop", d: "Swap the street for a seamless grey background for a classic headshot." },
      { t: "Golden-hour field", d: "Warm, romantic outdoor light." },
      { t: "Black-and-white editorial", d: "Timeless, magazine-style drama." },
      { t: "Change the outfit only", d: "Keep everything else the same to try different looks." },
    ],
    faq: [
      { q: "Can I use an old photo?", a: "Yes, if it's sharp; very old or small photos may need upscaling first." },
      { q: "Why does my result look older or younger?", a: "Lighting and smoothing words change perceived age; ask to keep your age and natural skin texture." },
    ],
  },
  character: {
    audiences: [
      { t: "Writers", d: "Visualising the cast of a novel or screenplay." },
      { t: "Game and app makers", d: "Mascots and playable character concepts." },
      { t: "Brands", d: "Friendly mascots for social media and packaging." },
      { t: "Tabletop players", d: "Portraits of role-playing characters." },
    ],
    template: "A character [illustration/reference sheet] for [name and role]: [build], [signature accessory], [hair], [costume and colours], [personality expression]. [Views], [style], plain [colour] background.",
    variations: [
      { t: "Turn the sheet into an action pose", d: "Use the same description in a dynamic scene." },
      { t: "Try a different style", d: "The same character as anime, painted fantasy or flat vector." },
      { t: "Expression sheet", d: "Six faces: happy, sad, angry, surprised, sleepy, determined." },
      { t: "Outfit variations", d: "Winter, summer and formal versions of the same character." },
    ],
    faq: [
      { q: "What's a turnaround?", a: "Front, side and back views of a character, used by artists and animators." },
      { q: "Can I animate my character?", a: "Yes, with a video model that accepts a starting image." },
    ],
  },
  "group-couple": {
    audiences: [
      { t: "Couples", d: "Anniversary, engagement and Valentine's portraits." },
      { t: "Families", d: "Holiday cards and family portraits when everyone can't meet." },
      { t: "Friends", d: "Reunion pictures and group trip memories." },
      { t: "Teams", d: "Team photos for websites and announcements." },
    ],
    template: "Using our photo, create a portrait of [number] people [arrangement and action] in [setting]. Keep every face, hairstyle and height exactly as in the photo; no other people. [Outfits], [light], [lens and mood].",
    variations: [
      { t: "Studio family portrait", d: "Seated front row and standing back row on a plain backdrop." },
      { t: "Matching outfits", d: "Everyone in the same colours for a coordinated look." },
      { t: "Candid laughter", d: "A natural, unposed moment instead of a formal pose." },
      { t: "Festive version", d: "Christmas jumpers, Diwali silks or Eid clothes for the season." },
    ],
    faq: [
      { q: "Can pets join the group photo?", a: "Yes: include them in the photo and in the prompt's count." },
      { q: "Can I make a wedding-style portrait?", a: "Yes; describe the outfits and setting, and keep both faces exactly." },
    ],
  },
  product: {
    audiences: [
      { t: "Designers", d: "Concepts for new products before prototyping." },
      { t: "Sellers", d: "Clean studio-style shots of their items." },
      { t: "Marketers", d: "Hero images for websites and launch pages." },
      { t: "Students", d: "Portfolio pieces for product and packaging design." },
    ],
    template: "A studio product photo of [object with material, colour and finish], [angle], on [backdrop]. [Lighting setup]. [Reflections or shadows], crisp focus on [detail], true-to-life colour.",
    variations: [
      { t: "Exploded view", d: "Parts floating apart to show how it's made." },
      { t: "Coloured acrylic backdrop", d: "A bright, modern e-commerce look." },
      { t: "In use", d: "A hand holding or using the product." },
      { t: "Macro detail", d: "A close-up of texture, stitching or a mechanism." },
    ],
    faq: [
      { q: "Can I design packaging?", a: "Yes, as concepts; check any text and redraw logos in design software." },
      { q: "What angle is most flattering?", a: "Three-quarter views show the most shape for most products." },
      { q: "How do I make metal or glass look right?", a: "Describe reflections and highlights, and use a softbox or a gradient background behind glass." },
      { q: "Can I show the product's size?", a: "Include a hand or a familiar object nearby." },
    ],
  },
  "food-drink": {
    audiences: [
      { t: "Restaurants and cafés", d: "Social posts and specials boards." },
      { t: "Food bloggers", d: "Recipe headers and mood shots." },
      { t: "Home cooks", d: "Recipe cards and family cookbook pages." },
      { t: "Drink brands", d: "Cocktail and beverage concepts." },
    ],
    template: "A [angle] food photo of [dish with how it's cooked and served], [freshness cues], on [plate] on [surface]. [Light direction], [garnish], [depth of field], [colour mood].",
    variations: [
      { t: "Dark and moody", d: "Low-key light on a dark slate surface for rich dishes." },
      { t: "Bright and airy", d: "White marble and soft daylight for brunch and desserts." },
      { t: "Action shot", d: "A pour of syrup or a dusting of sugar mid-air." },
      { t: "Ingredients flat-lay", d: "Raw ingredients arranged around the finished dish." },
    ],
    faq: [
      { q: "Can I make a recipe card?", a: "Yes: generate the photo, then add the recipe text in a design app." },
      { q: "What colours make food look tasty?", a: "Warm tones and natural greens; avoid blue casts." },
    ],
  },
  "fashion-item": {
    audiences: [
      { t: "Fashion brands", d: "Lookbook concepts and campaign ideas." },
      { t: "Stylists", d: "Outfit mood boards for clients." },
      { t: "Shoppers", d: "Seeing a look on themselves before buying." },
      { t: "Design students", d: "Visualising garments and collections." },
    ],
    template: "A [full-length/detail] fashion photo of [model or flat-lay] in [garment: cut, fabric, colour], styled with [accessories], in [setting]. [Fabric behaviour], [light], [lens], [colour mood].",
    variations: [
      { t: "Studio flash", d: "Crisp, high-fashion catalogue look on a coloured backdrop." },
      { t: "Street style", d: "Candid city shot, mid-stride." },
      { t: "Flat-lay", d: "The whole outfit arranged from above." },
      { t: "Detail shot", d: "Close-up of fabric, buttons or stitching." },
    ],
    faq: [
      { q: "Can I design a whole collection?", a: "Yes: keep the palette and fabric words consistent across looks." },
      { q: "How do I show a garment on different bodies?", a: "Describe each model clearly, or use photos of real people with permission." },
      { q: "Can I make a lookbook?", a: "Yes: keep the model description, setting and light the same and change the outfit each time." },
      { q: "How do I show shoes or bags?", a: "Close product shots on a plinth, or worn by a model in a cropped full-length frame." },
    ],
  },
  "animal-creature": {
    audiences: [
      { t: "Pet owners", d: "Portraits, birthday cards and memorial pictures of their pets." },
      { t: "Teachers", d: "Wildlife pictures for lessons." },
      { t: "Fantasy writers", d: "Creature designs for stories and games." },
      { t: "Nature brands", d: "Wildlife visuals for campaigns." },
    ],
    template: "A [style] of [species or breed with colour and markings] [behaviour] in [habitat] at [time]. [Camera detail], sharp focus on the eyes, [light], [mood].",
    variations: [
      { t: "Royal pet portrait", d: "Your pet in a velvet cape in an oil-painting style." },
      { t: "Storybook", d: "A gentle illustrated animal in clothes for children's stories." },
      { t: "Macro", d: "Insects and small creatures in extreme close-up." },
      { t: "Fantasy hybrid", d: "Combine two animals with clear anatomy." },
    ],
    faq: [
      { q: "Can I make a memorial picture of a pet?", a: "Yes, from a favourite photo; gentle light and a peaceful setting suit it." },
      { q: "How do I keep markings accurate?", a: "Describe them precisely and start from a clear photo." },
      { q: "Can I make a fantasy creature for a story?", a: "Yes: combine features from real animals and describe how it moves and where it lives." },
    ],
  },
  vehicle: {
    audiences: [
      { t: "Car enthusiasts", d: "Dream builds and wallpapers." },
      { t: "Designers", d: "Concept vehicles and colour studies." },
      { t: "Dealers and detailers", d: "Mood images for social posts (real cars still need real photos)." },
      { t: "Gamers", d: "Racing-style art and liveries." },
    ],
    template: "A [angle] photo of a [era and type of vehicle] in [colour and finish] on [setting] at [time]. [Reflections], [motion blur], crisp focus on [detail], [colour mood].",
    variations: [
      { t: "Night city", d: "Wet streets and neon reflections." },
      { t: "Studio", d: "A dark studio with one long light strip across the body." },
      { t: "Desert dust", d: "A rally look with dust trails." },
      { t: "Concept sketch", d: "Marker-render style like a car designer's drawing." },
    ],
    faq: [
      { q: "Can I change my own car's colour?", a: "Yes, with a photo of your car and an edit prompt." },
      { q: "Why do reflections look strange?", a: "Reflections are complex; simpler backgrounds give cleaner results." },
      { q: "Can I design a custom livery?", a: "Yes: describe the colours, stripes and logo placement on a plain-coloured car." },
      { q: "What about bikes and boats?", a: "The same rules apply: describe type, era, material and a flattering angle." },
      { q: "How do I show a car at night?", a: "Wet streets, headlights on and reflections of city lights along the body." },
    ],
  },
  "architecture-interior": {
    audiences: [
      { t: "Homeowners", d: "Visualising a redesign before spending money." },
      { t: "Interior designers", d: "Mood boards and concepts for clients." },
      { t: "Architecture students", d: "Atmosphere studies and presentation images." },
      { t: "Hospitality businesses", d: "Concepts for cafés, hotels and shops." },
    ],
    template: "An [interior/exterior] photo of a [size] [style] [room or building]: [key furniture or features], [materials]. [Light and time], [camera position], straight vertical lines, [mood].",
    variations: [
      { t: "Evening version", d: "Warm lamps and a blue-hour window." },
      { t: "Different style", d: "The same room as mid-century modern or rustic farmhouse." },
      { t: "Exterior at dusk", d: "Glowing windows against a deep blue sky." },
      { t: "Detail vignette", d: "A close shot of a shelf or a corner with textures." },
    ],
    faq: [
      { q: "Can I change only the furniture in my room?", a: "Yes: use your room photo and say the walls, floor and windows stay." },
      { q: "What's the best lens for interiors?", a: "A wide angle at eye level with straight verticals." },
      { q: "Can I visualise a building's exterior?", a: "Yes: describe the facade materials, the surroundings and the time of day." },
    ],
  },
  "landscape-nature": {
    audiences: [
      { t: "Wallpaper lovers", d: "Calm or dramatic desktop and phone backgrounds." },
      { t: "Writers and gamers", d: "Settings for stories and game worlds." },
      { t: "Wellness brands", d: "Peaceful nature scenes for apps and posts." },
      { t: "Print sellers", d: "Concepts for wall art." },
    ],
    template: "A [lens] landscape photo of [main subject] at [time]: [foreground], [middle ground], [background]. [Weather], [light colours], [detail and depth].",
    variations: [
      { t: "Night sky", d: "Stars and the Milky Way over the same lake." },
      { t: "Autumn", d: "Red and gold trees reflected in the water." },
      { t: "Storm", d: "Dark clouds and a single beam of light." },
      { t: "Painterly", d: "The same scene as an oil painting." },
    ],
    faq: [
      { q: "Can I make a real place?", a: "You can name it, but details may differ; it's an interpretation, not a photo." },
      { q: "How do I make it calm?", a: "Still water, soft light, few elements and gentle colours." },
      { q: "What makes a landscape feel epic?", a: "A tiny human figure for scale, dramatic light and layers of depth." },
    ],
  },
  "cityscape-street": {
    audiences: [
      { t: "Travel bloggers", d: "Mood images for city guides." },
      { t: "Writers", d: "Settings for urban stories." },
      { t: "Illustrators", d: "Reference for city scenes." },
      { t: "Wallpaper fans", d: "Skyline backgrounds day and night." },
    ],
    template: "A [style] of [type of city] [viewpoint] at [time and weather]: [iconic element], [street life], [architecture details]. [Light], [lens], [mood].",
    variations: [
      { t: "Rainy night", d: "Neon reflections and umbrellas." },
      { t: "Rooftop skyline", d: "Golden hour over the whole city." },
      { t: "Travel poster", d: "Flat colours and a bold city name." },
      { t: "Snowy morning", d: "Quiet streets and soft white light." },
    ],
    faq: [
      { q: "Can I put myself in a city scene?", a: "Yes, with a photo prompt; keep yourself at a natural size in the street." },
      { q: "What makes a street photo feel authentic?", a: "Ordinary people, small details and natural, imperfect framing." },
      { q: "How do I get an aerial city view?", a: "Describe a drone shot at a specific height and time, such as dusk with lights coming on." },
    ],
  },
  "diagram-chart": {
    audiences: [
      { t: "Teachers", d: "Simple diagrams that explain a process." },
      { t: "Product teams", d: "Rough flow diagrams for presentations." },
      { t: "Students", d: "Revision mind maps and timelines." },
      { t: "Bloggers", d: "Illustrated explainers alongside posts." },
    ],
    template: "A [diagram type] on a [background] in [style]: [number] [nodes] labelled \"[label 1]\", \"[label 2]\", \"[label 3]\", connected by [arrows and direction]. [Colours], large legible font.",
    variations: [
      { t: "Mind map", d: "A central idea with branches." },
      { t: "Timeline", d: "Dates or stages along a horizontal line." },
      { t: "Whiteboard sketch", d: "Marker style for a friendly feel." },
      { t: "Isometric", d: "3D blocks for a modern tech look." },
    ],
    faq: [
      { q: "Can I export a diagram as a vector?", a: "Image models produce pixels; recreate the final version in a diagram tool for vectors." },
      { q: "How many nodes are too many?", a: "More than about eight gets crowded and error-prone." },
      { q: "Can I make an org chart?", a: "Simple ones with a few boxes work; for real teams, build it in a diagram tool." },
    ],
  },
  "text-typography": {
    audiences: [
      { t: "Social media creators", d: "Quote posts and word art." },
      { t: "Brands", d: "Logo and lettering concepts." },
      { t: "Event planners", d: "Names and dates in decorative lettering." },
      { t: "Teachers", d: "Classroom word posters." },
    ],
    template: "The word \"[WORD]\" in [letter style] made of [material], [layout] on a [background]. [Light and shadow], every letter clearly readable.",
    variations: [
      { t: "Neon sign", d: "Glowing tube letters on a brick wall." },
      { t: "Embroidered", d: "Letters stitched in thread on fabric." },
      { t: "Chrome", d: "Shiny metallic 3D letters with reflections." },
      { t: "Hand lettering", d: "Brush script on paper for invitations." },
    ],
    faq: [
      { q: "How many words can I use?", a: "One to five words is most reliable." },
      { q: "Can I use my brand font?", a: "Models can't use font files; describe the style, then set real text in your font later." },
      { q: "Can I make a quote poster?", a: "Yes, with a short quote; longer quotes are better set in a design app over an AI background." },
      { q: "How do I get gold or foil lettering?", a: "Ask for metallic gold foil letters with a soft highlight and a dark background." },
    ],
  },
  "abstract-background": {
    audiences: [
      { t: "Presenters", d: "Slide backgrounds that don't fight with text." },
      { t: "Web designers", d: "Hero sections and section backgrounds." },
      { t: "Social media managers", d: "Backgrounds for quote and announcement posts." },
      { t: "Everyone", d: "Phone and desktop wallpapers." },
    ],
    template: "An abstract [ratio] background of [shape language] in [colours], with [texture] and [light]. [Calm area position] for text, no objects, [mood].",
    variations: [
      { t: "Glassmorphism", d: "Frosted glass shapes with soft blur." },
      { t: "Paper cut layers", d: "Stacked paper shapes with soft shadows." },
      { t: "Gradient mesh", d: "Smooth colour blends with grain." },
      { t: "Geometric", d: "Clean grids, circles and lines." },
    ],
    faq: [
      { q: "Can I loop it as a moving background?", a: "Yes, with a video model that accepts images; ask for slow, seamless motion." },
      { q: "Will text be readable on it?", a: "Keep a calm, low-contrast area and choose text colour for contrast." },
      { q: "Can I make a seamless pattern?", a: "Ask for a repeating tile pattern; check the edges match before tiling it." },
    ],
  },
};
