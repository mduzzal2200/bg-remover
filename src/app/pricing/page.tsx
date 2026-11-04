import { seoJson } from "@/lib/seo/brand";
import HubArticle from "@/app/_components/HubArticle";
import pricingHub from "@/lib/hub-pages/pricing";
import { PRICING_FAQS } from "@/lib/pricing-faq";
import PricingClient from "./PricingClient";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/** /pricing: the plans and packs (client), with the written guide and FAQ data rendered on the server. */
export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />
      <PricingClient>
        <HubArticle page={pricingHub} />
      </PricingClient>
    </>
  );
}
