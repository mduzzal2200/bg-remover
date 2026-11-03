import { CREDIT_COST, MONTHLY_PLANS, PACKS, formatInr } from "@/lib/plans";
import type { HubPage } from "./types";

const cheapestPack = PACKS[0];
const largestPack = PACKS[PACKS.length - 1];
const starter = MONTHLY_PLANS[0];
const studio = MONTHLY_PLANS[MONTHLY_PLANS.length - 1];
const perCredit = (inr: number, credits: number) => (inr / credits).toFixed(1);

/** The guide under the plans on /pricing. Its FAQ lives on the page itself. */
const page: HubPage = {
  sections: [
    {
      heading: "How do PixelShine credits work?",
      paragraphs: [
        `Credits pay for the AI tools, the ones that run on paid AI models on our servers. Every AI result costs **${CREDIT_COST} credits**: one image from an AI photo app, one AI edit, one background removal, one Pro AI upscale, one headshot style or one object removal. You're only charged when the result is made; if a generation fails, the credits stay in your account.`,
        "Everything else is free. Credits never pay for the browser tools, and nothing you download from PixelShine carries a watermark, whether it's free or paid.",
      ],
    },
    {
      heading: "Which tools are free, and which use credits?",
      table: {
        head: ["Free, in your browser", "Uses credits (AI on our servers)"],
        rows: [
          ["[Compress](/compress-image), [convert](/convert-image), [crop](/crop-image), [resize](/resize-image), [rotate](/rotate-image)", `[AI photo apps](/creative): ${CREDIT_COST} credits per result`],
          ["[Blur](/blur-image), [watermark](/watermark-image), [meme text](/meme-generator), [image to PDF](/image-to-pdf)", `[AI photo editor](/ai-editor): ${CREDIT_COST} credits per edit`],
          ["[QR codes](/qr-code-generator), [watermark remover](/watermark-remover), [invisible watermark remover](/invisible-watermark-remover)", `[Background remover](/remove-bg) and [object remover](/object-remover): ${CREDIT_COST} each`],
          ["[Upscaler](/upscale) Normal mode at 2×", `[Upscaler](/upscale) Pro AI and [AI headshots](/ai-headshot): ${CREDIT_COST} each`],
        ],
      },
      after: ["The free tools give guests two edits without an account; a free account makes them unlimited. The AI tools need an account so your credits and results are kept safe."],
    },
    {
      heading: "Monthly plan or add-on pack?",
      paragraphs: [
        `**Add-on packs** are one-time payments. Their credits **never expire**, so they suit occasional use: a few portraits for a festival, a batch of product cut-outs, a profile picture refresh. Packs start at ₹${formatInr(cheapestPack.inr)} (about $${cheapestPack.usd}) for ${cheapestPack.credits} credits, and the ${largestPack.label} pack gives the lowest price per credit of any one-time option.`,
        `**Monthly plans** renew each month with a fresh set of credits, at a lower price per credit than packs. They suit regular creators, sellers and anyone who edits every week. Plans run from ${starter.label} (₹${formatInr(starter.inr)} a month, ${starter.credits} credits) to ${studio.label} (₹${formatInr(studio.inr)} a month, ${studio.credits} credits, about ₹${perCredit(studio.inr, studio.credits)} per credit). Monthly credits reset at each renewal, and you can cancel any time from Settings.`,
        "You can hold both. The app spends monthly credits first, so the ones that would reset are used before your add-ons.",
      ],
    },
    {
      heading: "How many results will I get?",
      paragraphs: [
        `Divide the credits by ${CREDIT_COST}. A ${cheapestPack.credits}-credit pack makes ${cheapestPack.generations} AI results; the ${starter.label} plan's ${starter.credits} credits make ${starter.generations} a month. Most people try two or three versions of a look before keeping one, so plan for a few generations per finished image.`,
      ],
    },
    {
      heading: "Paying and currencies",
      paragraphs: [
        "Prices are charged in Indian rupees through Razorpay, which accepts UPI, cards and netbanking. The dollar figures shown are approximate, for visitors outside India; your bank converts the rupee amount at its own rate. Monthly plans store your card or UPI mandate with Razorpay for renewals; one-time packs store nothing.",
        "If a free trial is running in your country, new accounts get their first AI generation free; the box on each AI tool says so when it applies.",
      ],
    },
    {
      heading: "What do I own?",
      paragraphs: [
        "Your uploads and your results are yours. Full-resolution downloads come without a watermark and can be used commercially, for example on product listings or in marketing, subject to the usual rules about the people and brands that appear in your photos. Results are saved in My Creations, where you can download them again or delete them at any time.",
      ],
    },
  ],
  faq: [],
};

export default page;
