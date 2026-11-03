import type { FacetGuide } from "./types";

export const IMAGE_STYLES: Record<string, FacetGuide> = {
  photography: {
    intro: [
      "Photographic prompts work best when they're written the way a photographer thinks: what's in front of the lens, where the light comes from, which lens and distance, and what the moment is. \"A beautiful photo of a woman\" gives a stock image; \"a 50 mm portrait at golden hour, backlit, shallow depth of field\" gives a photograph.",
      "Camera terms aren't magic words, but they carry real information about perspective, blur and mood that models have learned from millions of captioned photos.",
    ],
    ingredients: [
      { t: "Subject and action", d: "Who or what, doing what, with one detail that makes it specific." },
      { t: "Setting and time", d: "Where, and when: dawn, overcast noon, blue hour." },
      { t: "Light", d: "Direction and quality: soft window light, hard side light, backlight, neon." },
      { t: "Lens and distance", d: "35 mm environmental, 85 mm portrait, macro close-up, wide aerial." },
      { t: "Finish", d: "Film stock or texture: Kodak-like warmth, grain, true-to-life colour." },
    ],
    example: {
      prompt: "An 85 mm portrait of an elderly fisherman mending a net on a wooden jetty at dawn, soft backlight from the low sun catching the fibres of the net, shallow depth of field with the harbour softly blurred behind him. Natural weathered skin, muted blue and amber tones, fine film grain.",
      notes: [
        { t: "\"85 mm portrait\"", d: "Flattering compression and a blurred background." },
        { t: "\"Mending a net… at dawn\"", d: "An action and a time make it a moment, not a pose." },
        { t: "\"Backlight… catching the fibres\"", d: "Light described by what it does, not just its name." },
        { t: "\"Natural weathered skin\"", d: "Prevents the airbrushed AI look." },
      ],
    },
    models: "Seedream 4.5 and Nano Banana Pro both produce convincing photographic detail, and GPT Image 2 is strong when the scene has many specific elements. For photos of yourself, use a prompt that takes your photo so the face is yours rather than invented.",
    mistakes: [
      "Stacking praise words like \"ultra-realistic, 8K, masterpiece\" instead of describing light and lens.",
      "No light direction, so everything looks flat.",
      "Perfect, poreless skin that reads as AI.",
      "Mixing incompatible cues, such as a macro lens and a wide landscape.",
    ],
    faq: [
      { q: "Do camera settings in prompts actually work?", a: "Lens length and depth-of-field words reliably change the look; exact f-numbers matter less." },
      { q: "How do I avoid the \"AI look\"?", a: "Ask for natural skin texture, real-world light and small imperfections." },
      { q: "Can I make a photo of myself?", a: "Yes, with prompts that use your photo; Create Image will ask for it." },
      { q: "What's the best aspect ratio?", a: "3:2 for classic photos, 4:5 for portraits on social media, 16:9 for wide scenes." },
    ],
  },
  "cinematic-film-still": {
    intro: [
      "A film still looks like a frame paused from a movie: widescreen, deliberately lit, with colour grading and a sense that something just happened or is about to. Good cinematic prompts describe a shot, not a picture: the framing, the camera position and the mood of the scene.",
      "Genre helps a lot. \"A neo-noir thriller still\" and \"a warm 1970s family drama still\" set the colour, light and grain in a few words.",
    ],
    ingredients: [
      { t: "Aspect ratio", d: "2.39:1 anamorphic or 16:9 widescreen." },
      { t: "The shot", d: "Wide establishing shot, over-the-shoulder, low-angle close-up." },
      { t: "Story beat", d: "What's happening right now, and the emotion." },
      { t: "Lighting and grade", d: "Teal and orange, neon-soaked night, warm tungsten, cold overcast." },
      { t: "Film texture", d: "35 mm grain, anamorphic lens flare, shallow focus." },
    ],
    example: {
      prompt: "A 2.39:1 cinematic film still, low-angle medium shot of a woman in a red raincoat stopping in the middle of an empty rain-soaked street at night, looking back over her shoulder. Neon signs reflected in puddles, cool blue grade with red accents, anamorphic lens flare from a passing car, 35 mm film grain, tense mood.",
      notes: [
        { t: "\"2.39:1\"", d: "The widescreen shape instantly reads as cinema." },
        { t: "\"Stopping… looking back\"", d: "A story beat implies a before and after." },
        { t: "\"Cool blue grade with red accents\"", d: "A colour grade, not just colours." },
        { t: "\"Anamorphic lens flare\"", d: "A specific film-camera detail that sells the look." },
      ],
    },
    models: "Seedream 4.5 is strong at moody, high-resolution cinematic frames, and Nano Banana Pro handles complex scenes with people well. If you plan to animate the still into a video, keep the composition simple so the motion is believable.",
    mistakes: [
      "Square images that never feel cinematic.",
      "No story beat, so the still feels like a posed portrait.",
      "Over-the-top flare and glow that hides the subject.",
      "Naming a real film or actor, which models may refuse or imitate poorly.",
    ],
    faq: [
      { q: "What makes an image look cinematic?", a: "Widescreen framing, motivated light, a colour grade and a moment in a story." },
      { q: "What is 2.39:1?", a: "The widescreen anamorphic ratio used by many feature films." },
      { q: "Can I turn a still into a video?", a: "Yes, with a video model that accepts an image; see the video prompt categories." },
      { q: "Should I name a director's style?", a: "Describe the visual qualities instead; it's more reliable and avoids imitation issues." },
    ],
  },
  "anime-manga": {
    intro: [
      "Anime and manga prompts depend on naming the sub-style, because \"anime\" covers everything from soft slice-of-life to sharp action shonen. Describe the line quality, the colouring and the era: clean cel shading, painterly backgrounds, 1990s grain, or black-and-white screentone manga.",
      "When you turn a real photo into anime, the important part is keeping the person recognisable: hairstyle, hair colour, glasses and expression carry most of the likeness.",
    ],
    ingredients: [
      { t: "Sub-style", d: "Slice-of-life, shonen action, shojo, 90s retro anime, monochrome manga page." },
      { t: "Character", d: "Hair, eyes, outfit and expression, written briefly." },
      { t: "Scene", d: "Classroom at sunset, rainy train platform, rooftop at night." },
      { t: "Rendering", d: "Cel shading, soft gradients, painted background, speed lines." },
      { t: "Frame", d: "Anime screenshot 16:9, poster 2:3, or manga panel." },
    ],
    example: {
      prompt: "A 16:9 anime screenshot in a soft slice-of-life style: a girl with short black hair and a yellow raincoat waiting at a rural train platform in light rain, holding a clear umbrella. Clean cel-shaded character, painterly background of green hills and a small station, warm late-afternoon light breaking through clouds, gentle nostalgic mood.",
      notes: [
        { t: "\"Anime screenshot\"", d: "Signals a frame from a series, with matching composition." },
        { t: "\"Soft slice-of-life style\"", d: "Narrows anime to a specific look." },
        { t: "\"Cel-shaded character, painterly background\"", d: "The classic contrast between characters and scenery." },
        { t: "\"Nostalgic mood\"", d: "A mood word guides colour and light." },
      ],
    },
    models: "All the image models in this library handle anime well. For converting your own photo, Nano Banana Pro and GPT Image 2 keep likeness best; PixelShine's anime and Ghibli-style apps also do it in one tap without a prompt.",
    mistakes: [
      "Just writing \"anime style\" with no sub-style.",
      "Naming studios or franchises instead of describing the look.",
      "Overloaded detail that clashes with flat cel shading.",
      "Not stating what to keep when converting a real person.",
    ],
    faq: [
      { q: "How do I turn my photo into anime?", a: "Use a prompt that takes your photo, or the one-tap anime app; keep hair and glasses as in the photo." },
      { q: "What's the difference between anime and manga styles?", a: "Anime is coloured animation frames; manga is usually black-and-white comic pages with screentones." },
      { q: "Can I make a manga page?", a: "Yes. Ask for a monochrome manga page with a set number of panels." },
      { q: "Can I name a specific studio?", a: "It's better to describe the qualities you like: line, colour, backgrounds and mood." },
    ],
  },
  illustration: {
    intro: [
      "Illustration is the broadest style in the library: children's-book pictures, editorial art, flat vector graphics, gouache, digital painting. The key to a good prompt is naming the medium and the purpose, because a book cover, a blog header and a sticker need very different compositions.",
      "Describe texture as well as subject: visible brush strokes, grainy risograph, smooth vector shapes. That's what makes it read as illustration rather than a photo with a filter.",
    ],
    ingredients: [
      { t: "Medium", d: "Gouache, coloured pencil, flat vector, digital painting, linocut." },
      { t: "Purpose", d: "Book cover, editorial spot illustration, greeting card, blog header." },
      { t: "Subject and scene", d: "Kept simple and readable." },
      { t: "Palette", d: "Three to five named colours for a cohesive look." },
      { t: "Texture and finish", d: "Paper grain, brush texture, clean edges, halftone." },
    ],
    example: {
      prompt: "A children's-book illustration in gouache: a small fox in a knitted scarf reading a book under a mushroom while snow falls, cosy and quiet. Soft muted palette of rust, cream, forest green and pale blue. Visible brush texture and paper grain, gentle rounded shapes, plenty of empty snowy space at the top for a title.",
      notes: [
        { t: "\"Children's-book… gouache\"", d: "Purpose plus medium sets the whole approach." },
        { t: "\"Under a mushroom while snow falls\"", d: "A small, charming scene that reads at a glance." },
        { t: "\"Rust, cream, forest green and pale blue\"", d: "A defined palette keeps it cohesive." },
        { t: "\"Space at the top for a title\"", d: "Plans for how the image will be used." },
      ],
    },
    models: "Every image model here is capable of strong illustration. GPT Image 2 follows composition and layout instructions closely; Seedream 4.5 and Nano Banana Pro give rich texture. Try the same prompt in two models and keep the one whose brushwork you prefer.",
    mistakes: [
      "No medium named, so the result is a generic digital look.",
      "Photographic words like \"8K\" or \"realistic\" in an illustration prompt.",
      "Too many characters for a small spot illustration.",
      "Ignoring the final use, such as forgetting space for a book title.",
    ],
    faq: [
      { q: "Can AI imitate a specific illustrator?", a: "Describe the qualities instead (medium, palette, line); naming living artists is best avoided." },
      { q: "Which medium is easiest for AI?", a: "Flat vector and digital painting are the most consistent; real-media looks benefit from texture words." },
      { q: "Can I print these illustrations?", a: "Yes. Generate at the largest size and upscale before printing." },
      { q: "How do I make a set of illustrations?", a: "Reuse the medium, palette and texture words, changing only the scene." },
    ],
  },
  "sketch-line-art": {
    intro: [
      "Sketch and line-art prompts are about restraint: black or graphite lines, little or no colour, and a clear sense of how the drawing was made. The more you describe the line itself (thin and precise, loose and gestural, cross-hatched), the better the result.",
      "Line art is also useful raw material: colouring pages, tattoo concepts, logo drafts and designs you'll trace or colour yourself.",
    ],
    ingredients: [
      { t: "Tool", d: "Pencil, fine-liner pen, charcoal, ballpoint, technical pen." },
      { t: "Line quality", d: "Clean single-weight outline, loose gesture, cross-hatching, stippling." },
      { t: "Subject", d: "Kept clear, with a defined outline." },
      { t: "Colour", d: "Black on white, sepia, or one accent colour." },
      { t: "Background", d: "Plain paper, or white so it can be printed or coloured." },
    ],
    example: {
      prompt: "A clean black fine-liner line drawing of a corner café with an awning, two bistro chairs and potted plants, slight perspective from across the street. Single-weight outlines, no shading, no colour, pure white background, suitable as a colouring page.",
      notes: [
        { t: "\"Fine-liner\"", d: "Names the tool, which sets the line." },
        { t: "\"Single-weight outlines, no shading\"", d: "Exactly what a colouring page needs." },
        { t: "\"Slight perspective\"", d: "Adds depth without complex shading." },
        { t: "\"Pure white background\"", d: "Prints cleanly." },
      ],
    },
    models: "GPT Image 2 and Nano Banana Pro follow \"no shading, no colour\" instructions well. Models tend to add grey shading unless told not to, so say it explicitly. For crisp printing, upscale and convert to PNG.",
    mistakes: [
      "Forgetting \"no colour\" or \"no shading\", which models often add.",
      "Very fine detail that turns to mush when printed small.",
      "Off-white or textured backgrounds when you need clean white.",
      "Mixing line styles, such as clean outlines with heavy charcoal.",
    ],
    faq: [
      { q: "Can I make colouring pages?", a: "Yes. Ask for clean single-weight outlines, no shading and a white background." },
      { q: "Can I turn a photo into a sketch?", a: "Yes, with a prompt that uses your photo and describes the line style." },
      { q: "How do I get pencil texture?", a: "Name graphite pencil, visible strokes and light paper grain." },
      { q: "Is line art good for tattoos?", a: "As a concept, yes; a tattoo artist will redraw it for skin." },
    ],
  },
  "comic-graphic-novel": {
    intro: [
      "The comic and graphic-novel style is about bold inks, flat or limited colour and dramatic composition. Unlike the comic use-case prompts, which plan whole strips, style prompts here often make a single striking panel or a cover-like image in comic-book rendering.",
      "Say which tradition you mean: classic American superhero inks with halftone dots, European clear-line, gritty noir with heavy blacks, or modern webtoon colour.",
    ],
    ingredients: [
      { t: "Tradition", d: "Golden-age superhero, clear-line, noir, modern webtoon." },
      { t: "Ink style", d: "Bold outlines, heavy shadows, cross-hatching." },
      { t: "Colour", d: "Flat colours, halftone dots, limited palette, or black and white with one spot colour." },
      { t: "Dynamic framing", d: "Low angle, foreshortening, action lines." },
      { t: "Lettering", d: "Optional caption boxes or sound effects in quotes." },
    ],
    example: {
      prompt: "A single comic-book panel in gritty noir style: a detective in a trench coat lighting a match in a dark alley, face half in shadow. Heavy black inks, rough cross-hatching, rain streaks, only one spot colour, the orange flame. Low camera angle, caption box at the top reading \"The city never sleeps.\"",
      notes: [
        { t: "\"Gritty noir\"", d: "Names the tradition and its mood." },
        { t: "\"Heavy black inks… cross-hatching\"", d: "Describes the drawing, not just the scene." },
        { t: "\"Only one spot colour\"", d: "A classic, striking comic technique." },
        { t: "\"Caption box\"", d: "Short quoted text in a comic-style container." },
      ],
    },
    models: "Nano Banana Pro and GPT Image 2 render inked comic styles and short captions well. For multi-panel stories, see the comic and storyboard use case; for single dramatic panels, any model here works.",
    mistakes: [
      "Soft, painterly rendering when you wanted crisp inks.",
      "Long captions that come out garbled.",
      "Static, eye-level framing for an action panel.",
      "Naming trademarked heroes instead of describing your own character.",
    ],
    faq: [
      { q: "How do I get halftone dots?", a: "Ask for \"halftone dot shading\" or \"retro comic print texture\"." },
      { q: "Can I put myself in a comic?", a: "Yes, with a prompt that uses your photo; the comic book cover app does it in one tap." },
      { q: "What's clear-line style?", a: "A European style with even, clean outlines, flat colour and little shading." },
      { q: "Can I add sound effects?", a: "Yes. One short word in quotes, like \"BOOM\", renders well." },
    ],
  },
  watercolor: {
    intro: [
      "Watercolour has a recognisable look: soft edges where wet paint blooms, transparent layers, white paper showing through, and granulating pigment in the shadows. Prompts that describe those qualities get much closer than ones that just say \"watercolour\".",
      "It suits gentle subjects: travel sketches, botanicals, pets, invitations and quiet portraits.",
    ],
    ingredients: [
      { t: "Technique", d: "Wet-on-wet blooms, loose washes, fine dry-brush detail." },
      { t: "Paper", d: "Cold-pressed texture, white paper left unpainted for highlights." },
      { t: "Palette", d: "Three or four transparent colours, often warm against cool." },
      { t: "Subject", d: "Kept simple, with a clear focal point and a loose edge." },
      { t: "Finish", d: "Ink outlines, splatters, or pure washes without lines." },
    ],
    example: {
      prompt: "A loose watercolour painting of a lemon tree branch with three lemons and white blossoms, painted wet-on-wet with soft blooms in the leaves and crisp dry-brush detail on the fruit. Transparent layers, warm yellow against cool blue-green, lots of untouched white cold-pressed paper around the branch, a few small paint splatters.",
      notes: [
        { t: "\"Wet-on-wet… dry-brush\"", d: "Two techniques give the soft-and-crisp contrast of real watercolour." },
        { t: "\"Transparent layers\"", d: "Separates watercolour from opaque gouache or acrylic." },
        { t: "\"Untouched white paper\"", d: "The key to the airy watercolour look." },
        { t: "\"Small paint splatters\"", d: "A handmade touch." },
      ],
    },
    models: "Seedream 4.5 and Nano Banana Pro produce convincing paper texture and blooms. Turning a pet or travel photo into watercolour works well with a photo prompt; keep the subject's shape and markings.",
    mistakes: [
      "Heavy, opaque colour that looks like oil paint.",
      "Filling the whole page; watercolour needs white space.",
      "Hard digital outlines everywhere.",
      "Too many colours, which turn muddy.",
    ],
    faq: [
      { q: "Can I turn a photo into a watercolour?", a: "Yes, with a prompt that uses your photo and describes washes and paper texture." },
      { q: "What subjects suit watercolour?", a: "Flowers, landscapes, pets, travel scenes and soft portraits." },
      { q: "Can I print it as a card or invitation?", a: "Yes; upscale first and leave white space for text." },
      { q: "Why does my result look digital?", a: "Ask for paper texture, transparent layers and loose edges." },
    ],
  },
  "retro-vintage": {
    intro: [
      "Retro prompts work when they name a decade and a medium together. \"Vintage\" alone is vague; \"a 1970s Kodachrome snapshot\", \"a 1950s travel poster\" or \"an 1980s mall portrait with a laser background\" each carry a whole set of colours, textures and fashions.",
      "Small period details sell it: film borders, faded colour, era-correct clothes and hair, and the right kind of light and lens.",
    ],
    ingredients: [
      { t: "Decade", d: "1920s, 50s, 70s, 80s, 90s or Y2K." },
      { t: "Medium", d: "Film snapshot, screen-printed poster, magazine ad, VHS still, instant photo." },
      { t: "Period details", d: "Clothes, hair, objects and typography of the time." },
      { t: "Colour and wear", d: "Faded, warm, high-contrast, light leaks, dust and scratches." },
      { t: "Format", d: "Square instant-photo border, wide poster, magazine page." },
    ],
    example: {
      prompt: "A 1970s family snapshot on faded colour film: a family of four standing beside a mustard-yellow station wagon at a roadside viewpoint, flared trousers and patterned shirts, squinting in bright sun. Warm orange cast, soft focus, light leak on the left edge, white rounded-corner border.",
      notes: [
        { t: "\"1970s… faded colour film\"", d: "Decade and medium together." },
        { t: "\"Mustard-yellow station wagon\"", d: "One period object sets the scene." },
        { t: "\"Squinting in bright sun\"", d: "Honest, unposed snapshot energy." },
        { t: "\"Light leak… rounded-corner border\"", d: "Physical details of old prints." },
      ],
    },
    models: "All models here do convincing retro looks; Nano Banana Pro is reliable at keeping faces when you use your own photo. PixelShine's 90s yearbook, Polaroid and Old Hollywood apps give one-tap retro portraits without writing a prompt.",
    mistakes: [
      "\"Vintage\" with no decade.",
      "Modern clothes or phones creeping into an old scene.",
      "Overdone scratches that hide the subject.",
      "Mixing eras, like 1920s clothes with 1980s neon.",
    ],
    faq: [
      { q: "How do I make a photo look like the 90s?", a: "Name the decade, the medium (disposable camera, yearbook) and period clothes and hair." },
      { q: "Can I put myself in a retro photo?", a: "Yes, with a prompt that uses your photo or a one-tap retro app." },
      { q: "What are light leaks?", a: "Streaks of orange or red light on old film where light reached it by accident." },
      { q: "How do I make a vintage poster?", a: "Ask for a screen-print or lithograph look, a limited palette and period typography." },
    ],
  },
  "cyberpunk-sci-fi": {
    intro: [
      "Cyberpunk is high tech and low life: rain-slicked megacities, neon signs, crowded streets, cybernetic implants and corporate towers. Broader sci-fi stretches to clean spaceships, alien worlds and retro-futurism. The best prompts pick a lane and fill it with concrete details instead of stacking genre words.",
      "Light is everything here: mixed neon colours, reflections and haze carry most of the atmosphere.",
    ],
    ingredients: [
      { t: "Sub-genre", d: "Gritty cyberpunk, clean utopian sci-fi, space opera, retro-futurism, solarpunk." },
      { t: "Setting details", d: "Signs, vehicles, architecture, weather." },
      { t: "Characters and tech", d: "Clothing, implants, devices, described specifically." },
      { t: "Light", d: "Neon magenta and cyan, volumetric haze, holographic glow." },
      { t: "Camera", d: "Street-level wide shot, aerial, close portrait." },
    ],
    example: {
      prompt: "A street-level wide shot of a crowded night market in a rain-soaked cyberpunk city, stalls lit by magenta and cyan neon, steam rising from noodle stands, a delivery drone passing overhead. In the foreground a courier with a glowing cybernetic arm checks a holographic map. Reflections in puddles, light haze, cinematic 16:9.",
      notes: [
        { t: "\"Night market… noodle stands\"", d: "Everyday life in the future is more convincing than empty skylines." },
        { t: "\"Magenta and cyan neon\"", d: "The genre's classic colour pair." },
        { t: "\"Courier with a cybernetic arm\"", d: "One character gives the scene a focus." },
        { t: "\"Reflections in puddles, light haze\"", d: "Atmosphere that carries the neon." },
      ],
    },
    models: "Seedream 4.5 excels at dense, atmospheric city scenes, and Nano Banana Pro and GPT Image 2 handle detailed characters and readable signs. Keep any sign text short, or ask for unreadable glyphs.",
    mistakes: [
      "Only genre words (\"cyberpunk, futuristic, sci-fi\") with no actual scene.",
      "Too many neon colours at once, losing contrast.",
      "Empty streets that feel like a render rather than a world.",
      "Long text on signs, which comes out garbled.",
    ],
    faq: [
      { q: "What's the difference between cyberpunk and sci-fi?", a: "Cyberpunk is a gritty sub-genre about advanced tech in a decaying society; sci-fi is the broader category." },
      { q: "Can I make a cyberpunk portrait of myself?", a: "Yes, with a photo prompt, or the one-tap cyberpunk avatar app." },
      { q: "How do I get a good neon look?", a: "Describe two neon colours, wet reflective surfaces and haze." },
      { q: "What's solarpunk?", a: "An optimistic sci-fi style of green, sustainable cities full of plants and sunlight." },
    ],
  },
  minimalism: {
    intro: [
      "Minimalist images say a lot with very little: one subject, lots of empty space, a limited palette and a careful composition. The hard part is that models love to add detail, so minimal prompts must say clearly what should not be there.",
      "Minimalism works brilliantly for wallpapers, posters, book covers and backgrounds with space for text.",
    ],
    ingredients: [
      { t: "One subject", d: "A single object, figure or shape." },
      { t: "Negative space", d: "Say how much: \"subject small in the lower third, the rest empty\"." },
      { t: "Palette", d: "Two or three colours, often muted or monochrome." },
      { t: "Composition", d: "Rule of thirds, centred symmetry, a strong horizon line." },
      { t: "What to leave out", d: "\"No texture, no extra objects, no text\"." },
    ],
    example: {
      prompt: "A minimalist image: a single red rowing boat small in the lower third of the frame, on perfectly calm pale grey water that merges into a pale grey sky with no visible horizon. No other objects, no texture, no text. Soft, even light, two colours only, vertical 9:16 for a phone wallpaper.",
      notes: [
        { t: "\"Small in the lower third\"", d: "Places the subject and creates the empty space." },
        { t: "\"No visible horizon\"", d: "A bold choice that makes the image calm and abstract." },
        { t: "\"No other objects, no texture, no text\"", d: "The \"leave out\" list models need." },
        { t: "\"Two colours only\"", d: "Locks the palette." },
      ],
    },
    models: "GPT Image 2 is especially good at respecting what to leave out. Any model can do minimal images, but check the edges for stray details the model sneaked in, and remove them with the AI photo editor if needed.",
    mistakes: [
      "Not saying what to leave out, so clutter creeps in.",
      "Subject too big, leaving no breathing space.",
      "Too many colours.",
      "Busy texture on surfaces that should be flat.",
    ],
    faq: [
      { q: "Why does the AI keep adding things?", a: "Models fill space by default; list what must not appear and describe the empty space." },
      { q: "What are minimalist images good for?", a: "Wallpapers, posters, covers, slides and backgrounds with room for text." },
      { q: "Can I make a minimalist logo idea?", a: "Yes, as a concept; a designer should redraw it as a vector." },
      { q: "What ratio should I use for wallpaper?", a: "9:16 for phones, 16:9 for desktops." },
    ],
  },
};
