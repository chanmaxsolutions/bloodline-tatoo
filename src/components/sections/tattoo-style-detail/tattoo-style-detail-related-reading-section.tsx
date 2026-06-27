import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

const relatedReadingTitleClassName =
  "w-full max-w-none text-balance text-3xl leading-[0.95] tracking-tight text-foreground md:text-4xl md:leading-[0.93]";

const relatedReadingDescriptionClassName = "mx-auto w-full max-w-2xl";

const relatedReadingCardClassName = cn(
  "group relative flex h-full w-full flex-col gap-3 rounded-md border border-border/40 bg-surface p-5 motion-fast md:gap-4 md:p-6",
  "hover:border-white/10 hover:bg-surface-elevated",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const relatedReadingCardTitleClassName =
  "pr-10 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-foreground md:text-xl";

interface TattooStyleDetailRelatedReadingSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailRelatedReadingSection({
  content,
}: TattooStyleDetailRelatedReadingSectionProps) {
  if (content.relatedBlogLinks.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="tattoo-style-related-reading-heading"
      className={cn("border-t border-border/30 bg-surface text-foreground", "py-10 md:py-12")}
    >
      <Container size="narrow">
        <SectionReveal className="flex flex-col gap-6 md:gap-8">
          <SectionHeading
            align="center"
            eyebrow="Related reading"
            heading="PLAN BEFORE YOU BOOK"
            description="Guides for travellers researching standards, booking, and pricing at this studio."
            headingId="tattoo-style-related-reading-heading"
            titleClassName={sectionRevealItemClass("none", relatedReadingTitleClassName)}
            descriptionClassName={sectionRevealItemClass("sm", relatedReadingDescriptionClassName)}
            className="w-full"
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {content.relatedBlogLinks.map((link, index) => (
              <li key={link.href} className={sectionRevealStaggerClass(index, "flex min-h-0")}>
                <Link href={link.href} className={relatedReadingCardClassName}>
                  <TileLinkArrow className="pointer-events-none absolute right-4 top-4 md:right-5 md:top-5" />
                  <span className={relatedReadingCardTitleClassName}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailRelatedReadingSection };
