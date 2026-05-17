import { SectionReveal } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TattooStyleTile } from "@/components/sections/tattoo-style-tile";
import { Container } from "@/components/layout/container";
import { homepageTattooStylesGridClassName } from "@/lib/homepage-tattoo-styles-grid";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { TattooStylesIndexIntro } from "@/config/tattoo-styles-index";
import type { TattooStyleHomepageTile } from "@/types/tattoo-style";

const tattooStylesIndexEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const tattooStylesIndexTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const tattooStylesIndexDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface TattooStylesIndexSectionProps {
  intro: TattooStylesIndexIntro;
  tiles: TattooStyleHomepageTile[];
}

function TattooStylesIndexSection({ intro, tiles }: TattooStylesIndexSectionProps) {
  return (
    <section
      aria-labelledby="tattoo-styles-index-heading"
      className={cn(
        "relative overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 pb-(--homepage-section-band-padding-y-mobile) md:pt-36",
        "lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,color-mix(in_oklab,var(--surface-elevated)_55%,transparent),transparent_72%)]"
      />

      <Container size="wide" className="relative">
        <SectionReveal className="flex flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            eyebrow={intro.eyebrow}
            heading={intro.heading}
            description={intro.description}
            headingId="tattoo-styles-index-heading"
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", tattooStylesIndexEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", tattooStylesIndexTitleClassName)}
            descriptionClassName={sectionRevealItemClass(
              "md",
              tattooStylesIndexDescriptionClassName,
            )}
          />

          <ul
            aria-label="Tattoo styles catalog"
            className={cn(homepageTattooStylesGridClassName(tiles.length), "lg:gap-6")}
          >
            {tiles.map((tile, index) => (
              <li key={tile.slug} className={sectionRevealStaggerClass(index, "min-w-0")}>
                <TattooStyleTile tile={tile} />
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStylesIndexSection };
