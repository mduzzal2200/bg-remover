import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "Product Photo Background Remover — White Background",
  h1: "Product Photo Background Remover",
  metaDescription: "Put product photos on a clean white background for Amazon, Shopify, Etsy and Flipkart listings. Cut out the product, then turn it pure white.",
  subtitle: "Cut a product out of any photo and put it on a pure white background, the way marketplaces want it. Shoot on a desk or a kitchen table; the listing looks like a studio shot.",
  keywords: "product photo background remover, white background product photo, amazon product photo white background, ecommerce background remover, remove background from product photo, product photo editor",
  sections: [
    {
      heading: "How do you get a white background on a product photo?",
      figure: creativeFigure("amazon-product-editor", "Amazon Product Editor", "Headphones photographed on a wooden desk, and the same headphones on a pure white background", "Headphones shot on a desk, then placed on pure white."),
      items: [
        { t: "1. Photograph the product in good light", d: "Any plain surface near a window works. Fill most of the frame with the product and keep it sharp." },
        { t: "2. Remove the background", d: `Drop the photo on this page, sign in, and press Remove background (${COST}). You get the product on a transparent background, with its own pixels kept exactly as you shot them.` },
        { t: "3. Make it white", d: "In the same editor, open **Convert** and choose **JPG**. A JPG can't be transparent, so the empty area is filled with pure white (#FFFFFF). That step is free. Download it and upload it to your listing." },
      ],
      after: [
        "Prefer to keep it transparent? Download the PNG instead and place it on any colour or scene in your store's design. For a styled scene rather than plain white (marble, wood, outdoors), the [AI product photography](/creative/ai-product-photography) app builds one around your product.",
      ],
    },
    {
      heading: "What do marketplaces ask for?",
      paragraphs: [
        "Rules differ by marketplace and change from time to time, so check the seller help pages before a big upload. The common ground is consistent:",
      ],
      table: {
        head: ["Requirement", "What it usually means", "How to meet it here"],
        rows: [
          ["White background", "Amazon asks for pure white (RGB 255, 255, 255) on the main image; many stores follow the same look", "Remove background, then convert to JPG"],
          ["Product fills the frame", "The item takes up most of the picture, not a small object in a big white square", "[Crop](/crop-image) to square with little margin"],
          ["Large enough to zoom", "Amazon recommends at least 1,000 pixels on the longest side for zoom", "Shoot at full camera resolution; [upscale](/upscale) small supplier photos"],
          ["Nothing extra", "No props, text or watermarks on the main image", "Keep extras for the secondary images"],
        ],
      },
    },
    {
      heading: "Who is a product background remover for?",
      items: [
        { t: "Small sellers shooting at home", d: "You don't need a lightbox. A window, a sheet of white card and your phone, followed by a cutout, gets you listing photos that sit alongside big brands." },
        { t: "Dropshippers and resellers", d: "Supplier photos often come with busy, inconsistent or branded backgrounds. Cut every product out and put them all on white so your catalogue looks like one store." },
        { t: "Handmade and craft shops", d: "Jewellery, candles, ceramics and prints look cleaner on white for the main image, while lifestyle shots can show them in use." },
        { t: "Social sellers on Instagram and WhatsApp", d: "A white-background catalogue image is easier to read in a small square; use the cutout for sale posts and stories too." },
      ],
    },
    {
      heading: "How do you shoot products so the cutout is clean?",
      list: [
        "**Use soft, even light.** A window on a cloudy day, or the product turned so the light falls across it, avoids hard shadows that can be read as part of the product.",
        "**Contrast with the surface.** A white mug on a white table is harder to separate than on a darker one.",
        "**Keep everything sharp.** Hold the phone steady or rest it on something; blurred edges make soft cutouts.",
        "**Shoot straight on and at eye level** for the main image, then add angles and details as extra photos.",
        "**Clean the product first.** Dust and fingerprints survive the cutout perfectly.",
      ],
    },
    {
      heading: "What about shadows, glass and jewellery?",
      paragraphs: [
        "The cutout removes everything that isn't the product, including the shadow under it, so a product on pure white can look as if it's floating. Many stores are happy with that; if you want a soft shadow, use Generate BG in the editor and ask for \"a pure white background with a soft natural shadow under the product\" (also " + COST + ").",
        "Clear glass, liquids and very fine chains are the hardest items for any background remover, because the background shows through them. They'll look good, and occasionally need a second try or a photo with more contrast behind the glass.",
      ],
    },
    {
      heading: "How much does it cost?",
      paragraphs: [
        `Removing the background costs ${COST} per photo, charged only when it works; converting to JPG for the white background is free. Credits come from a one-time pack (from ${PACK_FROM}; they never expire) or a monthly plan. There's no watermark on anything you download.`,
      ],
    },
  ],
  faq: [
    { q: "How do I make a product photo background white?", a: "Remove the background on this page, then open Convert in the editor and choose JPG. The transparent area becomes pure white (#FFFFFF), ready for a marketplace listing." },
    { q: "Is the white pure enough for Amazon?", a: "Yes. Converting the cutout to JPG fills the background with RGB 255, 255, 255, which is the pure white Amazon asks for on main images." },
    { q: "How much does it cost per product photo?", a: `${COST} for the background removal, only when it works. The conversion to white is free. Packs start at ${PACK_FROM}.` },
    { q: "Can I keep a transparent background instead?", a: "Yes. Download the PNG straight after the removal; it keeps the transparent background for your own designs." },
    { q: "Will it keep my product's colours and details?", a: "Yes. It cuts out your original pixels rather than redrawing the product, so colours, logos and textures stay exactly as photographed." },
    { q: "Does it work on glass and jewellery?", a: "Usually well, but clear glass and fine chains are the hardest cases. A darker background behind the item when you shoot helps a lot." },
    { q: "Can I add a shadow under the product?", a: `Yes. Use Generate BG in the editor and ask for a white background with a soft natural shadow. It costs ${COST}.` },
    { q: "What size should product photos be?", a: "Large enough for zoom: Amazon recommends at least 1,000 pixels on the longest side. Shoot at full resolution and crop to a square for most stores." },
  ],
};

export default page;
