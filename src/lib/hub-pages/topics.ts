import { CREDIT_COST } from "@/lib/plans";
import type { HubPage } from "./types";

/** A written guide for each topic hub at /guides/{topic}, keyed by topic slug. */
export const TOPIC_GUIDES: Record<string, HubPage> = {
  "upscale-enhance": {
    sections: [
      {
        heading: "Upscaling in one minute",
        paragraphs: [
          "Upscaling makes an image bigger. A plain resize stretches the existing pixels, so edges go soft and faces look smeared. An **AI upscaler** predicts the missing detail instead, so hair, eyelashes, text edges and fabric stay crisp at the larger size. Whether you need it depends on where the image is going: a phone screen needs far fewer pixels than an A3 print or a 4K TV.",
          `PixelShine's [image upscaler](/upscale) has two modes. **Normal** enlarges 2× free in your browser with gentle sharpening, which suits images that are already sharp, such as screenshots, logos and clean product shots. **Pro AI** rebuilds detail on our servers for ${CREDIT_COST} credits, which suits soft phone photos, faces, video stills and old prints. Results can be up to 20,000 pixels on the longer side.`,
        ],
      },
      {
        heading: "How many pixels do you need?",
        table: {
          head: ["Destination", "Pixels to aim for"],
          rows: [
            ["Instagram post", "1080 wide"],
            ["YouTube thumbnail", "1280 × 720"],
            ["Full HD screen or slide", "1920 × 1080"],
            ["4K screen", "3840 × 2160"],
            ["6 × 4 inch print", "about 1800 × 1200"],
            ["10 × 8 inch print", "about 3000 × 2400"],
            ["A3 print", "about 4960 × 3508"],
          ],
        },
        after: ["Compare your image's width with the target, then upscale 2× or 4× to reach it. Going far beyond the target only makes the file bigger; it doesn't add sharpness anyone will see."],
      },
      {
        heading: "What upscaling can and can't fix",
        list: [
          "**Can:** small images, soft phone photos, compressed screenshots, video frames, AI art made at 1024 pixels, and old photos once they've been scanned.",
          "**Partly:** old prints with cracks (restore the damage first), small faces in group photos (check every likeness), and heavy JPEG blocks from images that were re-shared many times.",
          "**Can't:** strong motion blur, a badly out-of-focus shot, or text too small to read in the original. The AI will draw something plausible, but it can't recover information that was never captured.",
        ],
      },
      {
        heading: "A good upscaling routine",
        items: [
          { t: "Start from the best copy", d: "Use the original file from your camera or phone, not a screenshot or a version that's been through WhatsApp, which shrinks and recompresses photos." },
          { t: "Crop before you upscale", d: "Cut away what you don't need first. The upscaler then spends its pixels on the part that matters, and the file stays manageable." },
          { t: "Check at 100%", d: "View the result at full size, not zoomed out. Look at eyes, hair and any lettering; that's where an upscale succeeds or fails." },
          { t: "Then compress for the web", d: "A big upscaled photo can be several megabytes. If it's going online rather than to print, [compress](/compress-image) it afterwards." },
        ],
      },
      {
        heading: "Who uses upscaling most",
        paragraphs: [
          "**Online sellers** enlarge supplier photos so marketplace zoom works. **Creators** sharpen video frames for thumbnails and covers. **Families** enlarge scanned prints to frame or share. **Designers** bring AI art up to print size. And **job seekers** rescue a small profile photo before making it a headshot. The guides below cover each of these step by step.",
        ],
      },
    ],
    faq: [
      { q: "Is upscaling free?", a: `Normal 2× is free in your browser. Pro AI costs ${CREDIT_COST} credits per image, charged only when it works.` },
      { q: "Which mode should I use for faces?", a: "Pro AI, because it rebuilds eyes, hair and skin detail rather than sharpening what's there." },
      { q: "How big can results be?", a: "Up to 20,000 pixels on the longer side. Very large images may need 2× instead of 4×." },
      { q: "Does upscaling change the photo?", a: "Normal mode only enlarges and sharpens. Pro AI adds detail it predicts, so compare faces with the original." },
    ],
  },
  "background-removal": {
    sections: [
      {
        heading: "Remove, replace or blur?",
        paragraphs: ["Three different jobs often get called \"background removal\". Picking the right one first saves a lot of trial and error:"],
        items: [
          { t: "Remove it", d: `A transparent PNG of just the subject, for designs, stickers, slides and listings. Use the [background remover](/remove-bg) (${CREDIT_COST} credits).` },
          { t: "Replace it", d: "A new scene behind the subject, with light that matches. Use the [AI background changer](/creative/background-changer) for ready choices, or [change background](/ai-editor/change-background) to describe any place in your own words." },
          { t: "Blur it", d: "Keep the real place but soften the clutter, like a portrait lens. Choose Blur the original in the background changer." },
        ],
      },
      {
        heading: "Getting clean edges",
        list: [
          "**Contrast:** a subject that stands out from the background in colour and brightness. A black jumper against a dark sofa is the hardest case.",
          "**Focus:** sharp edges on hair and fingers. Blurry edges become blurry cut-outs.",
          "**Light:** even light, without deep shadows that merge subject and background.",
          "**Room:** keep the whole subject in frame; cut-off elbows and feet stay cut off.",
          "**Check:** view the cut-out on both a dark and a light background before using it; each shows different faults.",
        ],
      },
      {
        heading: "Hard cases, and how to handle them",
        table: {
          head: ["Subject", "What goes wrong", "What helps"],
          rows: [
            ["Curly or flyaway hair", "Strands vanish or keep a halo of old background", "A plain backdrop when shooting; check on a dark background"],
            ["Glass and bottles", "See-through parts turn solid or disappear", "Place on the new background rather than leaving it transparent"],
            ["Product shadows", "The shadow goes, so the product floats", "Replace on white with a soft shadow rather than a bare cut-out"],
            ["White product on white", "Edges merge with the background", "Shoot on grey or colour, then switch to white"],
            ["Groups", "Gaps between people fill in", "Leave a little space between people when you shoot"],
          ],
        },
      },
      {
        heading: "Which output format?",
        paragraphs: [
          "A cut-out needs a format that stores transparency. **PNG** is the safe choice and works everywhere. **WebP** is smaller and also transparent, good for websites. **JPG can't store transparency**, so saving a cut-out as JPG fills the background with white or black. If a marketplace asks for a white background, put the subject on white and save as JPG; the file will be much smaller than a PNG.",
        ],
      },
      {
        heading: "Special cases",
        paragraphs: [
          "Some jobs have their own guides: [product photos on white](/remove-bg/product-photos) for marketplaces, [logos](/remove-bg/logo) for transparent brand files, [signatures](/remove-bg/signature) for documents and [passport photos](/remove-bg/passport-photo), where official rules about edited photos matter.",
        ],
      },
      {
        heading: "Who uses background removal",
        paragraphs: [
          "Sellers put products on white for marketplaces, designers drop people into posters and slides, and job seekers clean up a messy room behind a profile photo.",
        ],
      },
    ],
    faq: [
      { q: "Can I remove a background for free?", a: `Phones and computers often have built-in options; our guide to free remove.bg alternatives lists them. PixelShine's AI remover costs ${CREDIT_COST} credits with no watermark.` },
      { q: "What format is a transparent image?", a: "PNG or WebP. JPG can't store transparency." },
      { q: "Can I put the subject on white?", a: "Yes. Choose a white background in the background changer, or place the transparent PNG on white." },
      { q: "Why does my cut-out have a halo?", a: "Usually a low-contrast edge. Reshoot against a plainer background, or replace the background instead of cutting out." },
    ],
  },
  "headshots-portraits": {
    sections: [
      {
        heading: "Choosing the right portrait for the job",
        table: {
          head: ["You need", "Best option"],
          rows: [
            ["A studio-style LinkedIn or company photo", "[AI headshot](/ai-headshot) or [LinkedIn headshot](/ai-headshot/linkedin)"],
            ["A small, clear avatar for Slack, Teams or email", "[Corporate avatar](/creative/corporate-avatar)"],
            ["A sharper version of a photo you already like", "[Profile picture upscaler](/upscale/profile-picture)"],
            ["A square or round crop", "[Crop tool](/crop-image)"],
            ["An ID-style photo on a plain background", "[Passport photo maker](/creative/passport-photo), checking official rules"],
            ["A creative portrait for social media", "The [AI photo apps](/creative), such as Old Hollywood or Polaroid"],
          ],
        },
      },
      {
        heading: "What makes a good portrait photo",
        list: [
          "**Light from the front,** like facing a window, rather than from above or behind.",
          "**Camera at eye level,** an arm's length or more away, so the face isn't stretched by the lens.",
          "**Face filling most of the frame** for profile pictures, which are shown tiny in lists and chats.",
          "**Plain or softly blurred background,** so nothing competes with the face.",
          "**Recent and recognisable:** the person colleagues will meet on a video call.",
        ],
      },
      {
        heading: "AI headshot or photographer?",
        paragraphs: [
          "A professional photographer gives you control: real clothes, real light, retakes on the spot and a photo you can use anywhere, including official documents. It costs more and takes an appointment. An AI headshot starts from a selfie, takes about a minute and costs a few credits, which makes it easy to try several looks and pick one. The trade-off is that it's a generated picture, so check every detail of your face, and don't use it where a real, unedited photo is required.",
          "Many people use both: an AI headshot for LinkedIn and email today, and a photographer when the company or a publication needs one.",
        ],
      },
      {
        heading: "Sizes that work everywhere",
        paragraphs: [
          "Most platforms show profile pictures as a circle cut from a square. A square around **1000 × 1000 pixels** looks sharp on LinkedIn, Instagram, WhatsApp, Slack and Teams, and isn't too big to upload. Keep the face in the middle third, so the circle doesn't clip the top of your head or your chin. Our [Instagram profile picture](/blog/instagram-profile-picture-size) guide covers the details for each platform.",
        ],
      },
      {
        heading: "Checking a headshot before you use it",
        list: [
          "Eyes, nose and mouth match yours, including any asymmetry.",
          "Glasses, facial hair, moles and hairline are as they really are.",
          "Skin tone and age look right; nothing has been smoothed into someone else.",
          "Hands, collars and earrings look natural if they're in shot.",
          "A friend recognises you instantly from the small version.",
        ],
      },
      {
        heading: "Keeping your profile photos consistent",
        paragraphs: [
          "Using the same photo on LinkedIn, your email signature, Slack and conference badges makes you easier to recognise. Update it every couple of years, or after a big change in how you look.",
        ],
      },
    ],
    faq: [
      { q: "How much does an AI headshot cost?", a: `${CREDIT_COST} credits per style, charged only when it's made.` },
      { q: "What size should a profile picture be?", a: "A square around 1000 × 1000 pixels works on almost every platform." },
      { q: "Can I use an AI photo for a passport?", a: "Many passport offices don't accept edited photos. Check your government's rules first." },
      { q: "What selfie works best?", a: "A sharp, front-facing photo in soft daylight, with no sunglasses or heavy filters." },
    ],
  },
  "restore-old-photos": {
    sections: [
      {
        heading: "The three steps to a restored photo",
        items: [
          { t: "1. Scan it well", d: "A flatbed scan at 600 dpi or more, or a careful phone photo straight above the print in daylight without glare." },
          { t: "2. Repair it", d: "Fix tears, scratches, spots and fading with [restore old photos](/creative/restore-old-photos); add colour to black-and-white with [colorize photo](/creative/colorize-photo)." },
          { t: "3. Enlarge it", d: "Upscale for printing or framing with [upscale old photos](/upscale/old-photos)." },
        ],
      },
      {
        heading: "Scanning without a scanner",
        list: [
          "Take the print out of its frame or album sleeve; glass and plastic add reflections.",
          "Lay it flat on a dark surface near a window, out of direct sun.",
          "Hold the phone directly above, parallel to the print, so the corners stay square.",
          "Turn off the flash and zoom; move closer instead.",
          "Take two or three shots and keep the sharpest.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "AI restoration rebuilds missing detail convincingly, but it's an estimate. Compare faces with the original, keep the untouched scan as your master copy, and run it again if a face looks unfamiliar. Colourisation is also a guess: the AI picks plausible colours for clothes and backgrounds, which may not match what was really worn. If you know a colour, say a uniform or a wedding dress, note it in the family records alongside the restored copy.",
        ],
      },
      {
        heading: "Sharing restored photos with family",
        paragraphs: [
          "Restored photos make good gifts: a framed print for a grandparent, a shared album for a reunion, or a slideshow for an anniversary. Label each file with names, places and approximate dates while someone still remembers them, and keep both the original scan and the restored version, so later generations can see what was repaired.",
        ],
      },
    ],
    faq: [
      { q: "How much does restoring a photo cost?", a: `${CREDIT_COST} credits per restoration, only when it works.` },
      { q: "Can I restore a photo from my phone?", a: "Yes. Photograph the print flat in daylight, avoiding glare, then upload it." },
      { q: "Will the colours be accurate?", a: "Colourisation picks plausible colours, not the real ones, so treat it as an interpretation." },
    ],
  },
  "resize-compress": {
    sections: [
      {
        heading: "Resize, crop or compress?",
        list: [
          "**Resize** changes the pixel dimensions of the whole image. Use the [resize tool](/resize-image) with the aspect ratio locked so nothing gets squashed.",
          "**Crop** changes the shape by cutting the edges. Use the [crop tool](/crop-image): Square, Portrait 4:5, Story 9:16, Wide 16:9, Classic 3:2 or Circle.",
          "**Compress** changes the file size in KB. Use the [compressor](/compress-image) with Target size.",
        ],
        after: ["Most upload problems need all three in that order: crop to the shape, resize to the pixels, compress to the KB limit. Doing them the other way round wastes quality, because each step works on less information."],
      },
      {
        heading: "Common targets",
        table: {
          head: ["Job", "Target"],
          rows: [
            ["Exam or government form photo", "Often 20–100 KB at a stated pixel size"],
            ["Signature for a form", "Often 10–50 KB, a wide strip"],
            ["Job application photo", "Often 100–200 KB"],
            ["Email attachment", "About 1600 px wide, 300–500 KB"],
            ["Website image", "About twice its display width, under 200 KB"],
            ["Instagram post", "1080 × 1350 (4:5)"],
            ["Story or reel cover", "1080 × 1920 (9:16)"],
          ],
        },
        after: ["Form rules vary, so always read the notice for the exact size and format; the numbers above are typical, not official."],
      },
      {
        heading: "Why a file is big in the first place",
        paragraphs: [
          "File size depends on three things: the **pixel count**, the **format** and the **detail** in the picture. A 12-megapixel phone photo has far more pixels than any website or form needs. PNG stores every pixel exactly, which is great for screenshots and terrible for photos. And a photo of grass, gravel or a crowd compresses less than a photo of a clear sky. So the fastest way to shrink a photo is usually to resize it, then save it as JPG or WebP at a sensible quality.",
        ],
      },
      {
        heading: "Mistakes that cause rejected uploads",
        list: [
          "Squashing a photo to the right pixels without locking the ratio, so faces look stretched.",
          "Compressing so hard that a face or signature turns blocky; reduce the dimensions instead.",
          "Renaming .png to .jpg; that changes the name, not the format. [Convert](/convert-image) it properly.",
          "Uploading a screenshot of a photo, which adds borders and lowers quality.",
          "Ignoring the minimum size: some forms reject files that are too small as well as too large.",
        ],
      },
      {
        heading: "On a phone",
        paragraphs: [
          "All three tools work in a phone browser, which is handy when a form only opens on mobile. Pick the photo from your gallery, set the size, and the result saves to Downloads or the Files app. Check the file size in your file manager's details before uploading.",
        ],
      },
    ],
    faq: [
      { q: "Are these tools free?", a: "Yes. Resizing, cropping and compressing are free in your browser with no watermark." },
      { q: "Will compressing make my photo blurry?", a: "Moderate compression looks the same on screen. Very small targets need smaller dimensions too, which the compressor handles automatically." },
      { q: "Can I do many images at once?", a: "Yes. The batch editor handles up to 100 images in your browser." },
      { q: "Does resizing reduce quality?", a: "Making an image smaller keeps it sharp. Making it bigger is where quality drops; use the upscaler for that." },
    ],
  },
  "tiktok-social": {
    sections: [
      {
        heading: "Getting images right for every feed",
        paragraphs: [
          "Social platforms crop and compress what you upload, so a little preparation goes a long way: crop to the platform's shape, keep text away from the edges where buttons and captions sit, and upload at the platform's own width rather than a huge original. Our [social media image sizes](/blog/best-image-sizes-for-social-media) guide lists every format.",
        ],
      },
      {
        heading: "The three shapes that cover most posts",
        table: {
          head: ["Shape", "Pixels", "Use it for"],
          rows: [
            ["Portrait 4:5", "1080 × 1350", "Instagram and Facebook feed posts; takes the most screen space"],
            ["Vertical 9:16", "1080 × 1920", "Stories, Reels, TikTok and Shorts covers"],
            ["Wide 16:9", "1280 × 720 or larger", "YouTube thumbnails, X and LinkedIn link images"],
          ],
        },
      },
      {
        heading: "Tools for social posts",
        items: [
          { t: "TikTok videos without the watermark", d: "Paste a link into the [TikTok downloader](/tiktok-watermark-remover) to save your own videos in HD when available, or the sound as MP3." },
          { t: "Memes", d: "Add bold top and bottom captions with the [meme generator](/meme-generator)." },
          { t: "Crops for posts and stories", d: "Square, 4:5 and 9:16 presets in the [crop tool](/crop-image)." },
          { t: "Sharper covers", d: "Pull a still from a video and [upscale](/upscale) it before using it as a thumbnail." },
          { t: "Eye-catching looks", d: "Trend styles like [Polaroid](/creative/polaroid-photo), [Y2K](/creative/y2k-aesthetic) and [action figures](/creative/3d-figurine) in the [AI photo apps](/creative)." },
        ],
      },
      {
        heading: "Reposting without losing reach",
        paragraphs: [
          "When the same video goes to TikTok, Reels and Shorts, upload a clean file to each app rather than sharing a link from another platform, and write a caption for each audience. A visible logo from a rival app can look careless and, on some platforms, may reduce how widely a video is shown.",
        ],
      },
      {
        heading: "Respecting other creators",
        paragraphs: [
          "Download tools make it easy to save anyone's public video, but saving is not the same as having the right to repost. Re-uploading another creator's video as your own breaks platform rules and usually copyright law. Share their original post, ask permission, or make your own version, and credit the creator whenever you use their work.",
        ],
      },
      {
        heading: "A quick checklist before you post",
        list: [
          "Is the image the right shape for this platform, with nothing important near the edges?",
          "Is any text big enough to read on a phone held at arm's length?",
          "Is the file a sensible size, roughly 1080 pixels wide, rather than a 4,000-pixel original?",
          "If it includes someone else's photo, video or sound, do you have permission or a licence?",
          "Have you written alt text or a caption that describes the image for people using screen readers?",
          "Have you looked at it on your own phone first, the way most of your followers will see it?",
        ],
      },
    ],
    faq: [
      { q: "Can I download TikTok videos without the watermark?", a: "Yes, with the TikTok downloader. Only download and reuse videos you made or have permission to use." },
      { q: "What size should stories be?", a: "1080 × 1920 pixels (9:16), with text kept away from the top and bottom." },
      { q: "Can I download private TikToks?", a: "No. Only public videos can be fetched." },
      { q: "What size is a meme?", a: "Any size works; a square or 4:5 image around 1080 pixels wide suits most feeds." },
    ],
  },
  "convert-pdf": {
    sections: [
      {
        heading: "Which format should you convert to?",
        table: {
          head: ["You have", "Convert to", "Why"],
          rows: [
            ["WebP that won't open", "[PNG](/convert/webp-to-png) or [JPG](/convert/webp-to-jpg)", "Works in every app"],
            ["Big PNG photo or screenshot", "[JPG](/convert/png-to-jpg)", "Much smaller"],
            ["Logo with transparency for a website", "[WebP](/convert/png-to-webp)", "Small and still transparent"],
            ["SVG logo for an app", "[PNG](/convert/svg-to-png)", "Accepted everywhere"],
            ["iPhone HEIC photo", "JPG (see the [HEIC guide](/blog/how-to-convert-heic-to-jpg))", "Opens on any device"],
            ["Photo of a document", "[PDF](/image-to-pdf)", "What forms and offices ask for"],
          ],
        },
      },
      {
        heading: "The four formats in plain words",
        items: [
          { t: "JPG", d: "The everyday photo format. Small files, opens everywhere, no transparency, and it loses a little detail each time it's saved." },
          { t: "PNG", d: "Exact, lossless pixels and transparency. Ideal for screenshots, logos and graphics; large for photos." },
          { t: "WebP", d: "A modern web format that does both jobs at smaller sizes. Some older apps still can't open it." },
          { t: "PDF", d: "A document format rather than an image format. Each image becomes a page, which is why offices and forms ask for it." },
        ],
      },
      {
        heading: "Converting without losing quality",
        list: [
          "Convert from the best original you have; converting can't restore lost detail.",
          "Avoid round trips through JPG, which loses a little each time.",
          "Use PNG or WebP when you need transparency; JPG fills it with white.",
          "Converting a JPG to PNG doesn't improve quality; it only makes the file bigger.",
          "For several pages in one PDF, use your computer's or phone's built-in tools; see [combining images into a PDF](/blog/how-to-combine-images-into-a-pdf).",
        ],
      },
      {
        heading: "PDFs for forms and offices",
        paragraphs: [
          "When a form asks for a PDF, photograph the document flat in good light, crop away the table around it, and rotate it upright before converting. PixelShine's [image to PDF](/image-to-pdf) tool makes each image a page the same size as the image, so a well-cropped photo becomes a clean page. If the PDF must be under a size limit, compress the image first; it's easier than shrinking a finished PDF.",
        ],
      },
      {
        heading: "Converting on a phone",
        paragraphs: [
          "Every converter here works in a phone browser. On iPhone, tap the upload box and choose **Photo Library** or **Choose File**; the converted file lands in the Files app under Downloads, and you can save an image to Photos from the share menu. Long-press the file to rename it before you upload it anywhere, so you can tell the converted copy from the original. On Android, pick the image from your gallery or Files, and the result appears in your Downloads folder. If an iPhone photo is HEIC, iOS usually hands the browser a JPG copy automatically, so you can often skip that conversion entirely.",
        ],
      },
    ],
    faq: [
      { q: "Is converting images free?", a: "Yes. The converters run in your browser, free, with no watermark." },
      { q: "Can I convert many images at once?", a: "Yes. The batch editor converts up to 100 images in one go." },
      { q: "Are my files uploaded when I convert?", a: "No. Conversion happens in your browser, on your device." },
      { q: "Can I turn a PDF back into an image?", a: "Not with these tools; most PDF viewers can export a page as an image or take a screenshot." },
    ],
  },
  "editing-basics": {
    sections: [
      {
        heading: "Everyday edits, done in seconds",
        items: [
          { t: "Rotate and flip", d: "Fix sideways photos for good, or mirror a selfie, with the [rotate tool](/rotate-image)." },
          { t: "Blur private details", d: "Hide faces, number plates, addresses and screens with the [blur tool](/blur-image), which blurs or pixelates the boxes you draw." },
          { t: "Add a watermark", d: "Put your name or \"Sample\" in a corner, the centre or tiled across with the [watermark tool](/watermark-image)." },
          { t: "Remove a watermark", d: "Erase date stamps, logos and text from your own photos with the [watermark remover](/watermark-remover)." },
          { t: "Make a QR code", d: "Turn a link or text into a QR code for menus, posters and cards with the [QR code generator](/qr-code-generator)." },
        ],
      },
      {
        heading: "Which edit for which problem?",
        table: {
          head: ["Problem", "Fix"],
          rows: [
            ["Photo appears sideways after upload", "Rotate it and save a new copy, so the pixels themselves are upright"],
            ["A stranger's face in a street photo", "Blur or pixelate the face before posting"],
            ["People reposting your photos without credit", "A semi-transparent watermark across part of the image"],
            ["A date stamp from an old camera", "Paint over it with the watermark remover"],
            ["Customers typing a long web address", "A QR code on the menu, flyer or packaging"],
          ],
        },
      },
      {
        heading: "Private by design",
        paragraphs: [
          "All of these tools run in your browser, so photos and documents aren't uploaded anywhere. That matters most for exactly the jobs they're used for: blurring sensitive details, preparing ID documents and editing family photos. It also means they work on slow connections once the page has loaded.",
        ],
      },
      {
        heading: "Small habits that keep edits safe",
        list: [
          "Keep the original file and save edits as a new copy.",
          "Blur a little wider than the thing you're hiding, and check the result at full size.",
          "For text you must hide, such as account numbers, cover it completely rather than lightly blurring it.",
          "Test a QR code with two different phones before printing hundreds of copies.",
          "Place watermarks over part of the subject, not in an empty corner that's easy to crop.",
        ],
      },
      {
        heading: "Doing the same edit to many photos",
        paragraphs: [
          "When a whole folder needs the same fix, such as rotating every scan, adding one watermark to a shoot or converting a batch of screenshots, the [batch editor](/batch-editor) applies it to up to 100 images at once in your browser. Set it up once, check the first result, then let it run, and keep the originals in a separate folder in case you need to start again. It's the quickest way to prepare a set of product photos, a client gallery or a term's worth of class notes without repeating yourself.",
        ],
      },
    ],
    faq: [
      { q: "Are these editing tools free?", a: "Yes, with no watermark. Guests get two edits; a free account makes them unlimited." },
      { q: "Is blurring safe for hiding information?", a: "Strong blur or pixelation works well for faces. For text, covering it completely is safest." },
      { q: "Can I undo a rotation?", a: "Yes. Rotate it back the other way; rotating in 90° steps doesn't lose quality." },
      { q: "Do QR codes expire?", a: "A QR code that holds a link works as long as the link does." },
    ],
  },
  "ai-photo-effects": {
    sections: [
      {
        heading: "How AI photo apps work",
        paragraphs: [
          `Each [AI photo app](/creative) carries a tuned description of one look: a Ghibli scene, a 90s yearbook portrait, a boxed action figure, a festival outfit. You upload a photo, adjust a couple of options if you like, and the app does the rest, with no prompt to write. Each result costs ${CREDIT_COST} credits, charged only when it's made, and the apps are built to keep your face recognisable.`,
        ],
      },
      {
        heading: "Popular styles to start with",
        items: [
          { t: "Animated looks", d: "[Ghibli style](/creative/ghibli-style), [Pixar-style avatar](/creative/pixar-avatar), [anime](/creative/anime-style), [claymation](/creative/claymation-portrait)." },
          { t: "Retro looks", d: "[90s yearbook](/creative/90s-yearbook-photo), [Polaroid](/creative/polaroid-photo), [Y2K](/creative/y2k-aesthetic), [Old Hollywood](/creative/old-hollywood-glamour)." },
          { t: "Toys and collectibles", d: "[Action figure](/creative/3d-figurine), [Barbie box](/creative/barbie-box), [Lego minifigure](/creative/lego-minifigure), [Funko Pop](/creative/funko-pop-figure)." },
          { t: "Occasions", d: "[Festival photoshoot](/creative/festival-photoshoot), [Christmas](/creative/christmas-photo), [graduation](/creative/graduation-photo), [prom](/creative/prom-photoshoot), and 40 festivals on the [festivals hub](/festivals)." },
          { t: "Makeovers", d: "[Hairstyle changer](/creative/hairstyle-changer), [outfit changer](/creative/outfit-generator) and [glow-up](/creative/glow-up-filter)." },
        ],
      },
      {
        heading: "Which photo suits which style?",
        table: {
          head: ["Style", "Best source photo"],
          rows: [
            ["Cartoon and anime looks", "A clear face, any background; expressive faces give livelier results"],
            ["Toys and figures", "Head and shoulders or half body, plain clothes"],
            ["Outfit and festival looks", "Full or half body, standing, so the clothes have room"],
            ["Retro portraits", "Face-on, looking at the camera, soft light"],
            ["Couple and family looks", "Everyone in one photo, faces clear and similar in size"],
          ],
        },
      },
      {
        heading: "Getting results that look like you",
        list: [
          "Use a clear, front-facing photo in soft, even light.",
          "Avoid sunglasses, hats, heavy filters and strong beauty modes.",
          "Run a look two or three times and keep the best; each run is a fresh attempt.",
          "If a detail matters, such as glasses or a beard, choose a photo where it's clearly visible.",
        ],
      },
      {
        heading: "Sharing AI photos responsibly",
        paragraphs: [
          "AI photos are great fun on social media and in group chats, but they aren't real photographs. Use photos of other people only with their permission, don't present an AI picture as a real event, and keep official documents to real, unedited photos. Many people add a small \"made with AI\" note when they post, which avoids confusion.",
        ],
      },
      {
        heading: "Ideas for using your results",
        paragraphs: [
          "A new look makes a fun profile picture for a week, but people find plenty of other uses: a printed toy-box portrait as a birthday gift, a cartoon version of the family for a holiday card, a retro yearbook photo for a reunion invite, or a festival portrait to send to relatives far away. Results download at full resolution with no watermark, so they print well on cards, mugs and canvases.",
        ],
      },
    ],
    faq: [
      { q: "How much do AI photo apps cost?", a: `${CREDIT_COST} credits per result, only when it's made. Where a free trial is running, a new account's first generation is free.` },
      { q: "Will the result look like me?", a: "Each app is built to keep your face recognisable; front-facing, well-lit photos work best." },
      { q: "Do I need to write a prompt?", a: "No. Each app has its look built in; you only upload a photo and pick options." },
      { q: "Can I use the results commercially?", a: "Your results are yours to use, subject to the usual rules about the people and brands in your photos." },
    ],
  },
};
