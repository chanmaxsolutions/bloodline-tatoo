import { TattooStyleApproachStatementSection } from "@/components/sections/tattoo-style-detail/tattoo-style-approach-statement-section";
import { TattooStyleDetailBodySection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-body-section";
import { TattooStyleDetailCtaSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-cta-section";
import { TattooStyleDetailFaqSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-faq-section";
import { TattooStyleDetailHero } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-hero";
import { TattooStyleDetailOverviewSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-overview-section";
import { TattooStyleDetailProofSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-proof-section";
import { TattooStyleDetailRelatedSection } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-related-section";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

interface TattooStyleDetailPageProps {
  content: ResolvedTattooStyleDetailPage;
  headerCtaLabel: string;
  ctaUrgencyNote?: string;
}

function TattooStyleDetailPage({
  content,
  headerCtaLabel,
  ctaUrgencyNote,
}: TattooStyleDetailPageProps) {
  return (
    <div className="min-w-0 bg-background">
      <TattooStyleDetailHero content={content} />
      <TattooStyleDetailOverviewSection content={content} />
      <TattooStyleDetailBodySection content={content} />
      <TattooStyleApproachStatementSection content={content} />
      <TattooStyleDetailProofSection content={content} />
      <TattooStyleDetailRelatedSection content={content} />
      <TattooStyleDetailFaqSection content={content} />
      <TattooStyleDetailCtaSection
        content={content}
        headerCtaLabel={headerCtaLabel}
        ctaUrgencyNote={ctaUrgencyNote}
      />
    </div>
  );
}

export { TattooStyleDetailPage };
