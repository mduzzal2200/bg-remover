import { seoMeta } from "@/lib/seo/brand";
import type { Metadata } from "next";
import { MONTHLY_PLANS, PACKS, formatInr } from "@/lib/plans";

const fromMonthly = `₹${formatInr(MONTHLY_PLANS[0].inr)}`;
const fromPack = `₹${formatInr(PACKS[0].inr)}`;

export const metadata: Metadata = seoMeta({
  title: { absolute: "Pricing — Pixel Shine Monthly Plans & Credit Packs" },
  description: `PixelShine pricing: monthly AI credit plans from ${fromMonthly}, cancel any time, or one-time packs from ${fromPack} that never expire. Free tools stay free.`,
  alternates: { canonical: "https://www.sjpt.io/pricing" },
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
