import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionDisplayHeadingClassName } from "@/lib/section-display-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ContactPageNarrative } from "@/types/contact-page";

const narrativeDescriptionClassName =
  "mx-auto max-w-3xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface ContactPageNarrativeSectionProps {
  narrative: ContactPageNarrative;
}

function ContactPageNarrativeSection({ narrative }: ContactPageNarrativeSectionProps) {
  return (
    <section
      aria-labelledby="contact-narrative-heading"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        <SectionReveal className="flex w-full flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            heading={narrative.heading}
            description={narrative.body}
            headingId="contact-narrative-heading"
            headingLevel={2}
            className="mx-auto w-full max-w-4xl"
            titleClassName={sectionRevealItemClass("sm", sectionDisplayHeadingClassName)}
            descriptionClassName={sectionRevealItemClass("md", narrativeDescriptionClassName)}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ContactPageNarrativeSection };
