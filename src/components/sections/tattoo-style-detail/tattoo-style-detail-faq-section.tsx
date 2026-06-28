import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Matches proof / related band `SectionHeading` title scale. */
const faqTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const faqDescriptionClassName = "mx-auto w-full max-w-2xl";

function faqSectionDescription(styleTitle: string): string {
  return `Straight answers on sessions, references, healing, and placement for ${styleTitle.toLowerCase()}—so you can plan the trip with confidence.`;
}

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
        "bg-surface text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="flex flex-col gap-8 md:gap-10">
        <SectionReveal className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            align="center"
            eyebrow="Before you book"
            heading="COMMON QUESTIONS"
            description={content.faqSectionDescription ?? faqSectionDescription(content.title)}
            headingId="tattoo-style-faq-heading"
            titleClassName={sectionRevealItemClass("none", faqTitleClassName)}
            descriptionClassName={sectionRevealItemClass("sm", faqDescriptionClassName)}
            className="w-full"
          />
          <div
            className={sectionRevealItemClass(
              "md",
              "mx-auto flex w-full max-w-3xl flex-col gap-5 md:gap-6",
            )}
          >
            <FaqAccordion items={content.faqItems} />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailFaqSection };
