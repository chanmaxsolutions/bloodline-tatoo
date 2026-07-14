import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { FaqPageStyleGroup } from "@/lib/faq-page";
import type { StudioFaqItem } from "@/config/studio-faq";

const groupTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const groupDescriptionClassName = "mx-auto w-full max-w-2xl";

interface FaqPageContentSectionProps {
  studioFaqs: readonly StudioFaqItem[];
  styleGroups: readonly FaqPageStyleGroup[];
}

function FaqPageContentSection({ studioFaqs, styleGroups }: FaqPageContentSectionProps) {
  return (
    <div className="bg-background text-foreground">
      <section
        aria-labelledby="faq-studio-heading"
        className={cn(
          "bg-surface text-foreground",
          "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
        )}
      >
        <Container size="wide" className="flex flex-col gap-8 md:gap-10">
          <SectionReveal className="flex flex-col gap-8 md:gap-10">
            <SectionHeading
              align="center"
              eyebrow="Studio"
              heading="BOOKING AND HOUSE STANDARD"
              description="How Bloodline books, prepares sessions, and stays consistent across studios."
              headingId="faq-studio-heading"
              titleClassName={sectionRevealItemClass("none", groupTitleClassName)}
              descriptionClassName={sectionRevealItemClass("sm", groupDescriptionClassName)}
              className="w-full"
            />
            <div
              className={sectionRevealItemClass(
                "md",
                "mx-auto flex w-full max-w-3xl flex-col gap-5 md:gap-6",
              )}
            >
              <FaqAccordion items={studioFaqs} />
            </div>
          </SectionReveal>
        </Container>
      </section>

      {styleGroups.map((group, index) => {
        const headingId = `faq-style-${group.slug}-heading`;
        const surfaceClassName = index % 2 === 0 ? "bg-background" : "bg-surface";

        return (
          <section
            key={group.slug}
            aria-labelledby={headingId}
            className={cn(
              surfaceClassName,
              "text-foreground",
              "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
            )}
          >
            <Container size="wide" className="flex flex-col gap-8 md:gap-10">
              <SectionReveal className="flex flex-col gap-8 md:gap-10">
                <SectionHeading
                  align="center"
                  eyebrow="Style"
                  heading={group.title.toUpperCase()}
                  description={`Common questions for ${group.title.toLowerCase()}. Full approach and proof live on the style page.`}
                  headingId={headingId}
                  titleClassName={sectionRevealItemClass("none", groupTitleClassName)}
                  descriptionClassName={sectionRevealItemClass("sm", groupDescriptionClassName)}
                  className="w-full"
                />
                <div
                  className={sectionRevealItemClass(
                    "md",
                    "mx-auto flex w-full max-w-3xl flex-col gap-5 md:gap-6",
                  )}
                >
                  <FaqAccordion items={group.items} />
                  <p className="text-center font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                    <Link
                      href={group.href}
                      className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:text-accent focus-visible:underline"
                    >
                      View {group.title}
                    </Link>
                  </p>
                </div>
              </SectionReveal>
            </Container>
          </section>
        );
      })}
    </div>
  );
}

export { FaqPageContentSection };
