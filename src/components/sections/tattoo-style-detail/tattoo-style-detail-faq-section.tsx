import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { TattooStyleDetailFaqAccordion } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Matches proof / related band `SectionHeading` title scale. */
const faqTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const faqDescriptionClassName = "w-full max-w-none";

interface TattooStyleDetailFaqSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailFaqSection({ content }: TattooStyleDetailFaqSectionProps) {
  if (content.faqItems.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="tattoo-style-faq-heading"
      className={cn(
        "border-t border-border/50 bg-surface text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="flex flex-col gap-8 md:gap-10">
        <SectionReveal className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            align="center"
            eyebrow="Guidance"
            heading="WHAT CLIENTS USUALLY ASK"
            description="Clear guidance on planning, healing, placement, and preparing for the work."
            headingId="tattoo-style-faq-heading"
            titleClassName={faqTitleClassName}
            descriptionClassName={faqDescriptionClassName}
            className={sectionRevealItemClass("none", "w-full")}
          />
          <div className={sectionRevealItemClass("sm")}>
            <TattooStyleDetailFaqAccordion items={content.faqItems} />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailFaqSection };
