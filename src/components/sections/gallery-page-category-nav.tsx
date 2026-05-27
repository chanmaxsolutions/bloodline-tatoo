import Link from "next/link";
import { GALLERY_CATEGORY_LABELS } from "@/config/gallery-catalog";
import { cn } from "@/lib/utils";
import type { GalleryCategorySlug } from "@/types/gallery";

const categoryNavClassName = cn(
  "flex items-center gap-2 md:flex-wrap md:justify-center md:gap-2.5",
  "max-w-full overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "snap-x snap-mandatory px-1 md:overflow-visible md:px-0 md:pb-0",
);

const categoryNavLinkClassName = "shrink-0 snap-start";

const categoryLinkBaseClassName = cn(
  "rounded-md border px-3 py-2 font-heading text-xs font-semibold uppercase tracking-tight transition-colors motion-fast md:text-sm",
  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

function categoryLinkClassName(isActive: boolean): string {
  return cn(
    categoryLinkBaseClassName,
    isActive
      ? "border-accent/40 bg-accent/10 text-accent"
      : "border-border/50 bg-surface-strong/80 text-muted-foreground hover:border-white/10 hover:bg-surface-elevated hover:text-foreground",
  );
}

interface GalleryPageCategoryNavProps {
  categories: readonly GalleryCategorySlug[];
  activeCategory: GalleryCategorySlug | null;
}

function GalleryPageCategoryNav({ categories, activeCategory }: GalleryPageCategoryNavProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Filter portfolio by category" className={categoryNavClassName}>
      <Link
        href="/portfolio"
        className={cn(categoryNavLinkClassName, categoryLinkClassName(activeCategory === null))}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`/portfolio?category=${category}`}
          className={cn(
            categoryNavLinkClassName,
            categoryLinkClassName(activeCategory === category),
          )}
          aria-current={activeCategory === category ? "true" : undefined}
        >
          {GALLERY_CATEGORY_LABELS[category]}
        </Link>
      ))}
    </nav>
  );
}

export { GalleryPageCategoryNav };
