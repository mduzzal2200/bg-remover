import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "QR Code Generator — Free, No Sign-Up, Never Expires",
  h1: "Free QR Code Generator",
  metaDescription: "Make a QR code for a link, Wi-Fi details, text or a phone number. Custom colours, PNG or SVG download. Static codes that never expire. Free.",
  subtitle: "Turn a link or any text into a QR code in your browser. Pick the colours and size, then download a PNG for screens or an SVG for print. The code never expires and isn't tracked.",
  keywords: "qr code generator, free qr code generator, make a qr code, qr code for link, qr code svg, qr code maker, static qr code, qr code no sign up",
  sections: [
    {
      heading: "How do you make a QR code?",
      items: [
        { t: "1. Paste a link or type your text", d: "A website address, a menu link, a form, a payment page, a phone number or plain text. The code updates as you type." },
        { t: "2. Choose colours, size and error correction", d: "Set the foreground and background colours, a size from 128 to 1,024 pixels, and how much damage the code can survive (Low, Medium, Quartile or High)." },
        { t: "3. Download PNG or SVG", d: "PNG for screens, documents and slides. SVG for printing at any size, because it stays perfectly sharp however large it's printed." },
      ],
    },
    {
      heading: "What can you put in a QR code?",
      items: [
        { t: "A website or page", d: "The most common use. Paste the full address, starting with https://, so every phone opens it as a link." },
        { t: "A menu, form or booking page", d: "Restaurants, salons and events link a table card or poster to a menu, a sign-up form or a booking page. Update the page later and the same code keeps working." },
        { t: "Contact details", d: "A phone number written as tel:+44 20 7946 0000 opens the dialler when scanned; an email address written as mailto:hello@example.com starts an email." },
        { t: "Wi-Fi details", d: "Text in the format WIFI:T:WPA;S:NetworkName;P:Password;; lets most phones join the network by scanning, which is handy for guests and cafés." },
        { t: "Plain text", d: "A short message, a code, a serial number or instructions. Keep it short; long text makes a dense code that's harder to scan." },
      ],
    },
    {
      heading: "Who uses a QR code generator?",
      items: [
        { t: "Small businesses and shops", d: "Put a code on the counter, a flyer, a receipt or packaging that links to reviews, a loyalty sign-up, an online store or a payment page." },
        { t: "Event organisers and teachers", d: "Link a poster or a slide to the registration form, the schedule, a feedback survey or the class materials, so nobody has to type a long address." },
        { t: "Restaurants and cafés", d: "Table cards that open the menu, and a Wi-Fi code by the till so guests stop asking for the password." },
        { t: "Creators and job seekers", d: "Add a code to a business card, CV or portfolio print that opens your website, LinkedIn profile or showreel." },
      ],
    },
    {
      heading: "Which error correction level should you pick?",
      table: {
        head: ["Level", "Can lose", "Use it for"],
        rows: [
          ["Low (L)", "about 7%", "Clean screens and documents where the code won't be damaged; makes the simplest code"],
          ["Medium (M)", "about 15%", "The default, and right for most uses"],
          ["Quartile (Q)", "about 25%", "Printed items that might get scuffed: flyers, packaging, outdoor posters"],
          ["High (H)", "about 30%", "Codes on stickers, worn surfaces, or where something might partly cover the code"],
        ],
      },
      after: [
        "Higher levels make the code denser, so they need a bit more printed size to scan easily. For most links, Medium is the right balance.",
      ],
    },
    {
      heading: "Do these QR codes expire?",
      paragraphs: [
        "No. They're **static** codes: the link or text is written directly into the pattern. There's no redirect through our servers, no account to keep paying for, and no tracking of who scans it. The code works for as long as the thing it points to exists.",
        "That's different from \"dynamic\" QR codes sold by some services, which point to their own short link first. Those let you change the destination later and count scans, but they stop working if the subscription lapses. If you want to change where a static code goes, point it at a page you control and update the page.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes, with no sign-up, no limit and no watermark or logo in the code. The code is generated in your browser, so whatever you type isn't sent anywhere.",
      ],
    },
    {
      heading: "How do you make sure a QR code scans?",
      list: [
        "**Keep strong contrast.** Dark code on a light background scans best. Light-on-dark and pale colours often fail on older phones.",
        "**Leave the quiet zone.** The white margin around the code is part of it; don't crop it or print right against a busy pattern.",
        "**Print it big enough.** About 2 × 2 cm is a sensible minimum for something scanned at arm's length; bigger for posters read from further away.",
        "**Use SVG for print** so it stays sharp at any size.",
        "**Test it** with two different phones before printing a thousand flyers.",
        "**Shorten long text.** The more characters, the denser the code; a short link scans faster than a long one.",
      ],
    },
    {
      heading: "What can't static QR codes do?",
      list: [
        "Track scans or change the link after printing. Static codes are fixed; use a page you control if you'll need to change it.",
        "Put a logo in the middle. You can choose colours, but not embed an image.",
        "Make a payment QR for a bank. Payment apps generate their own codes for your account; use theirs.",
      ],
    },
  ],
  faq: [
    { q: "How do I make a QR code for a link?", a: "Paste the full link, starting with https://, into the box. The QR code appears instantly; choose colours and size, then download it as PNG or SVG." },
    { q: "Is the QR code generator free?", a: "Yes, with no sign-up, no limit and no watermark. The code is made in your browser." },
    { q: "Do the QR codes expire?", a: "No. They're static codes with the link written into the pattern, so they work for as long as the link does. There's no subscription and no tracking." },
    { q: "Should I download PNG or SVG?", a: "PNG for screens, documents and slides. SVG for anything printed, because it stays perfectly sharp at any size." },
    { q: "Can I change the colours?", a: "Yes. Set the foreground and background colours. Keep strong contrast, ideally dark on light, so every phone can scan it." },
    { q: "Can I make a Wi-Fi QR code?", a: "Yes. Type WIFI:T:WPA;S:YourNetworkName;P:YourPassword;; and most phones will offer to join the network when they scan it." },
    { q: "Can I add a logo to the QR code?", a: "Not in this tool. You can choose the colours, but not embed an image in the middle." },
    { q: "Can I track how many people scan it?", a: "No. Static codes go straight to your link without passing through us, which is why they never expire. Use your website's analytics to see visits." },
  ],
};

export default page;
