import { seoJson, seoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import GuidesBlock from "@/app/_components/GuidesBlock";
import type { Metadata } from "next";
import VideoWatermarkRemover from "./VideoWatermarkRemover";
import { toolPage } from "@/lib/tool-pages";
import AppArticle from "@/app/creative/[slug]/AppArticle";

const BASE = "https://www.sjpt.io";
const URL = `${BASE}/tiktok-watermark-remover`;

/** The page's words: lib/tool-pages/tiktok-watermark-remover.ts. */
const TP = toolPage("tiktok-watermark-remover")!;

export const metadata: Metadata = seoMeta({
  title: { absolute: brandedTitle(TP.title) },
  description: TP.metaDescription,
  keywords: TP.keywords,
  openGraph: {
    title: TP.title,
    description: TP.metaDescription,
    url: URL,
    type: "website",
    siteName: "Pixel Shine",
  },
  twitter: {
    card: "summary_large_image",
    title: TP.title,
    description: TP.metaDescription,
  },
  alternates: { canonical: URL },
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // The same list the page shows (VideoWatermarkRemover renders TP.faq).
  mainEntity: TP.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Free TikTok Watermark Remover",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: URL,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />
      <VideoWatermarkRemover article={<AppArticle sections={TP.sections} />} faqs={TP.faq} subtitle={TP.subtitle} />
      <GuidesBlock path="/tiktok-watermark-remover" />
    </>
  );
}
