import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Matches proof / approach band `SectionHeading` title scale. */
const relatedTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

/** Matches approach pointer card titles. */
const relatedCardTitleClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground";

/** Matches approach pointer card body lines. */
const relatedCardDescriptionClassName =
  "flex-1 font-sans text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed text-pretty";

const relatedCardClassName = cn(
  "flex h-full w-full flex-col gap-5 rounded-xl border border-border/50 bg-surface-elevated p-6 motion-fast md:gap-6 md:p-7",
  "hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
);

interface TattooStyleDetailRelatedSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailRelatedSection({ content }: TattooStyleDetailRelatedSectionProps) {
  if (content.relatedSlugs.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="tattoo-style-related-heading"
      className={cn(
        "border-t border-border/50 bg-background text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="flex flex-col gap-8 md:gap-10">
        <SectionHeading
          align="center"
          eyebrow="Related styles"
          heading="EXPLORE OTHER LANES"
          headingId="tattoo-style-related-heading"
          titleClassName={relatedTitleClassName}
          className="w-full"
        />
        <ul className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {content.relatedSlugs.map((slug) => {
            const style = getTattooStyleBySlug(slug);
            return (
              <li key={slug} className="flex min-h-0">
                <Link href={`/tattoo-styles/${slug}`} className={relatedCardClassName}>
                  <span className={relatedCardTitleClassName}>{style.title}</span>
                  <span className={relatedCardDescriptionClassName}>{style.shortDescription}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export { TattooStyleDetailRelatedSection };
