import { SectionReveal } from "@/components/motion";
import { GalleryItemCard } from "@/components/gallery/gallery-item-card";
import { Container } from "@/components/layout/container";
import { galleryPageBandSubheadingClassName } from "@/lib/gallery-page-layout";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/gallery";

interface GalleryPageFeaturedSectionProps {
  items: GalleryItem[];
}

function GalleryPageFeaturedSection({ items }: GalleryPageFeaturedSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="portfolio-featured-heading"
      className={cn("bg-surface text-foreground", "pb-6 md:pb-8")}
    >
      <Container size="wide">
        <SectionReveal className="flex flex-col gap-6 md:gap-8">
          <h2
            id="portfolio-featured-heading"
            className={sectionRevealItemClass("none", galleryPageBandSubheadingClassName)}
          >
            FEATURED WORK
          </h2>
          <ul
            className={cn(
              "grid gap-5 md:gap-6",
              items.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2",
            )}
          >
            {items.map((item, index) => (
              <li key={item.id} className={sectionRevealStaggerClass(index, "min-w-0")}>
                <GalleryItemCard item={item} variant="featured" priority={index === 0} />
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { GalleryPageFeaturedSection };
