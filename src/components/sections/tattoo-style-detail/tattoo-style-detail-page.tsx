import { TattooStyleDetailBodySection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-body-section";
import { TattooStyleDetailCtaSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-cta-section";
import { TattooStyleDetailFaqSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-faq-section";
import { TattooStyleDetailHero } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-hero";
import { TattooStyleDetailProofSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-proof-section";
import { TattooStyleDetailRelatedSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-related-section";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

interface TattooStyleDetailPageProps {
  content: ResolvedTattooStyleDetailPage;
  ctaUrgencyNote?: string;
}

function TattooStyleDetailPage({ content, ctaUrgencyNote }: TattooStyleDetailPageProps) {
  return (
    <div className="min-w-0 bg-background">
      <TattooStyleDetailHero content={content} />
      <TattooStyleDetailBodySection content={content} />
      <TattooStyleDetailProofSection content={content} />
      <TattooStyleDetailRelatedSection content={content} />
      <TattooStyleDetailFaqSection content={content} />
      <TattooStyleDetailCtaSection content={content} ctaUrgencyNote={ctaUrgencyNote} />
    </div>
  );
}

export { TattooStyleDetailPage };
