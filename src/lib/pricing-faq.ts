import { CREDIT_COST, MONTHLY_PLANS, PACKS, formatInr, inrPerCredit } from "@/lib/plans";

/**
 * The questions on /pricing, shared by the page (visible answers) and its
 * FAQPage data, so the two can never drift apart.
 */
const cheapest = (list: typeof PACKS) => Math.min(...list.map(inrPerCredit));
/** How much less a credit costs on the best monthly plan than on the best add-on. */
const MONTHLY_SAVING = Math.round((1 - cheapest(MONTHLY_PLANS) / cheapest(PACKS)) * 100);
const lowest = (list: typeof PACKS) => list.reduce((a, b) => (a.inr / a.credits <= b.inr / b.credits ? a : b));

export const PRICING_FAQS: { q: string; a: string }[] = [
  { q: "What's the difference between a monthly plan and an add-on pack?", a: `A monthly plan renews every month and gives you a fresh set of credits each time — up to ${MONTHLY_SAVING}% less per credit than a pack. An add-on pack is a single payment whose credits never expire. You can have both, and even several monthly plans at once.` },
  { q: "How do I cancel a monthly plan?", a: "Open Settings → Your plans and press Cancel plan. Razorpay stops the subscription, so you are not charged again, and the credits for the month you already paid for stay usable until it ends." },
  { q: "Do unused monthly credits carry over?", a: "No — each renewal resets the plan's monthly credits to the full amount, and any left from the month before expire. Add-on credits never expire, and the app always spends monthly credits first so the ones that would expire are used up before your add-ons." },
  { q: "How many credits does one image cost?", a: `Every AI generation costs ${CREDIT_COST} credits. The ${lowest(MONTHLY_PLANS).label} plan's ${lowest(MONTHLY_PLANS).credits} monthly credits make ${lowest(MONTHLY_PLANS).generations} generations; a ₹${formatInr(PACKS[0].inr)} add-on is ${PACKS[0].generations}.` },
  { q: "Is anything still free?", a: "Yes. Compress, convert, crop, resize, rotate, blur, watermark, meme text, image-to-PDF, the QR generator and normal upscaling all stay free, with no watermark. Guests get two edits without an account, and a free account makes them unlimited. Credits are only for the AI tools." },
  { q: "How am I charged?", a: "In Indian rupees, through Razorpay — UPI, cards and netbanking. The dollar figures are approximate. Monthly plans save your card or UPI mandate with Razorpay for the renewals; add-on packs store nothing." },
];
