import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { TattooStyleTile } from "@/components/sections/tattoo-style-tile";
import { homepageTattooStylesGridClassName } from "@/lib/homepage-tattoo-styles-grid";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { TattooStyleHomepageTile } from "@/types/tattoo-style";

interface TattooStylesIndexGridSectionProps {
  tiles: TattooStyleHomepageTile[];
  showTileDescription?: boolean;
}

function TattooStylesIndexGridSection({
  tiles,
  showTileDescription = true,
}: TattooStylesIndexGridSectionProps) {
  return (
    <section
      aria-label="Tattoo styles catalog"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "pb-10 md:pb-12 lg:pb-14",
      )}
    >
      <Container size="wide" className="relative">
        <SectionReveal>
          <ul className={cn(homepageTattooStylesGridClassName(tiles.length), "lg:gap-6")}>
            {tiles.map((tile, index) => (
              <li key={tile.slug} className={sectionRevealStaggerClass(index, "min-w-0")}>
                <TattooStyleTile tile={tile} showDescription={showTileDescription} />
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStylesIndexGridSection };
