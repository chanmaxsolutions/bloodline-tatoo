import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { GalleryPageCategoryNav } from "@/components/sections/gallery-page-category-nav";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { GalleryCategorySlug } from "@/types/gallery";

interface GalleryPageFiltersSectionProps {
  categories: readonly GalleryCategorySlug[];
  activeCategory: GalleryCategorySlug | null;
}

function GalleryPageFiltersSection({ categories, activeCategory }: GalleryPageFiltersSectionProps) {
  return (
    <div className={cn("min-w-0 bg-background text-foreground", "pb-6 md:pb-8")}>
      <Container size="wide" className="min-w-0">
        <SectionReveal>
          <div className={sectionRevealItemClass("none", "min-w-0")}>
            <GalleryPageCategoryNav categories={categories} activeCategory={activeCategory} />
          </div>
        </SectionReveal>
      </Container>
    </div>
  );
}

export { GalleryPageFiltersSection };
