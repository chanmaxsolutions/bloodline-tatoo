import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/sections/section-shell";
import { TattooStyleTile } from "@/components/sections/tattoo-style-tile";
import { cn } from "@/lib/utils";
import type {
  RegionHomepageTattooStylesConfig,
  TattooStyleHomepageTile,
} from "@/types/tattoo-style";

interface TattooStylesSectionProps {
  config: RegionHomepageTattooStylesConfig;
  tiles: TattooStyleHomepageTile[];
}

/** Same eyebrow + display scale as `AuthoritySection` intro. */
const tattooStylesEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

/** Sizes + leading only; `SectionHeading` always prefixes `text-heading-display`. */
const tattooStylesTitleClassName =
  "text-5xl leading-[0.95] text-foreground md:text-6xl md:leading-[0.93] lg:text-7xl lg:leading-[0.9]";

const tattooStylesDescriptionClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug text-pretty";

function TattooStylesSection({ config, tiles }: TattooStylesSectionProps) {
  return (
    <SectionShell
      id="homepage-tattoo-styles"
      aria-labelledby="homepage-tattoo-styles-heading"
      spacing="default"
      surface="transparent"
      containerSize="wide"
      style={{
        backgroundImage: "linear-gradient(180deg, #1c1b1d 0%, #0b0b0d 100%)",
      }}
      className={cn("relative overflow-hidden text-foreground")}
    >
      <div className="relative z-10 flex flex-col gap-10 md:gap-12 lg:gap-14">
        <SectionHeading
          align="center"
          eyebrow={config.intro.eyebrow}
          heading={config.intro.heading}
          description={config.intro.description}
          headingId="homepage-tattoo-styles-heading"
          className="mx-auto max-w-3xl"
          eyebrowClassName={tattooStylesEyebrowClassName}
          titleClassName={tattooStylesTitleClassName}
          descriptionClassName={tattooStylesDescriptionClassName}
        />
        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {tiles.map((tile) => (
            <li key={tile.slug} className="min-w-0">
              <TattooStyleTile tile={tile} />
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

export { TattooStylesSection };
