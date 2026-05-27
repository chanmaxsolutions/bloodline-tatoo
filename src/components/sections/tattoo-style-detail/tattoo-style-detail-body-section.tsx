import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { StyleApproachSpecStrip } from "@/components/shared/style-approach-spec-strip";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

interface TattooStyleDetailBodySectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailBodySection({ content }: TattooStyleDetailBodySectionProps) {
  return (
    <section
      aria-labelledby="tattoo-style-approach-details-heading"
      className={cn(
        "relative overflow-hidden bg-background text-foreground",
        "pt-(--homepage-section-band-padding-y-mobile) pb-0 lg:pt-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        <h2 id="tattoo-style-approach-details-heading" className="sr-only">
          How we approach {content.title.toLowerCase()}
        </h2>

        <SectionReveal className="w-full">
          <StyleApproachSpecStrip
            philosophyBullets={content.philosophyBullets}
            idealForBullets={content.idealForBullets}
            sessionBullets={content.sessionBullets}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailBodySection };
