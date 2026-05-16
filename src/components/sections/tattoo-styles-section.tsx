import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/sections/section-shell";
import { TattooStyleTile } from "@/components/sections/tattoo-style-tile";
import { homepageGhostCtaClassName } from "@/lib/homepage-ghost-cta";
import { homepageTattooStylesGridClassName } from "@/lib/homepage-tattoo-styles-grid";
import { cn } from "@/lib/utils";
import type {
  RegionHomepageTattooStylesConfig,
  TattooStyleHomepageTile,
} from "@/types/tattoo-style";

interface TattooStylesSectionProps {
  config: RegionHomepageTattooStylesConfig;
  tiles: TattooStyleHomepageTile[];
}

/** Same eyebrow treatment as `AuthoritySection` */
const tattooStylesEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const tattooStylesTitleClassName = "text-heading-authority-display";

const tattooStylesDescriptionClassName =
  "mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

function TattooStylesSection({ config, tiles }: TattooStylesSectionProps) {
  return (
    <SectionShell
      id="homepage-tattoo-styles"
      aria-labelledby="homepage-tattoo-styles-heading"
      spacing="none"
      surface="transparent"
      containerSize="wide"
      className={cn(
        "border-t border-border/50 bg-surface relative overflow-hidden text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <div className="relative z-10 flex flex-col gap-10 md:gap-12 lg:gap-14">
        <SectionHeading
          align="center"
          eyebrow={config.intro.eyebrow}
          heading={config.intro.heading}
          description={config.intro.description}
          headingId="homepage-tattoo-styles-heading"
          className="mx-auto max-w-3xl"
          eyebrowClassName={cn(tattooStylesEyebrowClassName, "hero-reveal-motion")}
          titleClassName={cn(
            tattooStylesTitleClassName,
            "hero-reveal-motion hero-reveal-motion-delay-sm",
          )}
          descriptionClassName={cn(
            tattooStylesDescriptionClassName,
            "hero-reveal-motion hero-reveal-motion-delay-md",
          )}
        />
        <div className="hero-reveal-motion hero-reveal-motion-delay-lg flex flex-col gap-8 md:gap-10">
          <ul
            aria-label="Featured tattoo styles"
            className={cn(homepageTattooStylesGridClassName(tiles.length), "lg:gap-6")}
          >
            {tiles.map((tile) => (
              <li key={tile.slug} className="min-w-0">
                <TattooStyleTile tile={tile} />
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <Link href={config.catalogCta.href} className={homepageGhostCtaClassName()}>
              {config.catalogCta.label}
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export { TattooStylesSection };
