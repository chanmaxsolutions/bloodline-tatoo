import { SectionReveal } from "@/components/motion";
import { PortfolioMasonryGallery } from "@/components/gallery/portfolio-masonry-gallery";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/gallery";

interface GalleryPageMasonrySectionProps {
  items: readonly GalleryItem[];
  showEmptyState?: boolean;
}

function GalleryPageMasonrySection({
  items,
  showEmptyState = false,
}: GalleryPageMasonrySectionProps) {
  return (
    <section
      aria-label="Portfolio gallery"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "pt-0 pb-(--homepage-section-band-padding-y-mobile) lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        {items.length === 0 && showEmptyState ? (
          <SectionReveal>
            <p
              className={sectionRevealItemClass(
                "sm",
                "mx-auto max-w-xl text-center font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl",
              )}
            >
              Portfolio pieces for this view are being updated. Message us on WhatsApp with your
              reference direction and placement ideas.
            </p>
          </SectionReveal>
        ) : (
          <SectionReveal>
            <PortfolioMasonryGallery
              key={items.map((item) => item.id).join("|")}
              items={items}
              galleryLabel="Bloodline tattoo portfolio"
            />
          </SectionReveal>
        )}
      </Container>
    </section>
  );
}

export { GalleryPageMasonrySection };
