import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Matches proof band `SectionHeading` title scale. */
const relatedTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const relatedDescriptionClassName = "mx-auto w-full max-w-2xl";

const relatedCardTitleClassName =
  "pr-12 font-heading text-xl font-bold uppercase leading-none tracking-tight text-foreground md:text-2xl";

const relatedCardDescriptionClassName =
  "line-clamp-3 font-sans text-base leading-relaxed text-muted-foreground text-pretty md:leading-relaxed";

const relatedCardClassName = cn(
  "group relative flex h-full w-full flex-col gap-4 rounded-md border border-border/40 bg-surface-strong p-6 motion-fast md:gap-5 md:p-7",
  "hover:border-white/10 hover:bg-surface-elevated",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const TATTOO_STYLES_INDEX_HREF = "/tattoo-styles";

function relatedSectionDescription(styleTitle: string): string {
  return `Other lanes clients compare when planning ${styleTitle.toLowerCase()}—placement, tone, and long-term readability on skin.`;
}

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
        "bg-background text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="flex flex-col gap-8 md:gap-10">
        <SectionReveal className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            align="center"
            eyebrow="Keep exploring"
            heading="EXPLORE OTHER LANES"
            description={relatedSectionDescription(content.title)}
            headingId="tattoo-style-related-heading"
            titleClassName={sectionRevealItemClass("none", relatedTitleClassName)}
            descriptionClassName={sectionRevealItemClass("sm", relatedDescriptionClassName)}
            className="w-full"
          />
          <ul className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {content.relatedSlugs.map((slug, index) => {
              const style = getTattooStyleBySlug(slug);
              return (
                <li key={slug} className={sectionRevealStaggerClass(index, "flex min-h-0")}>
                  <Link href={`/tattoo-styles/${slug}`} className={relatedCardClassName}>
                    <TileLinkArrow className="pointer-events-none absolute right-4 top-4 md:right-5 md:top-5" />
                    <span className={relatedCardTitleClassName}>{style.title}</span>
                    <span className={relatedCardDescriptionClassName}>
                      {style.shortDescription}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={sectionRevealItemClass("md", "flex w-full justify-center")}>
            <Link
              href={TATTOO_STYLES_INDEX_HREF}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-fit max-w-full")}
            >
              View all tattoo styles
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailRelatedSection };
