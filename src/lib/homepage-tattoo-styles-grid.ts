import { cn } from "@/lib/utils";

/**
 * Responsive grid for homepage style tiles when `featuredSlugs` count varies by region.
 */
function homepageTattooStylesGridClassName(tileCount: number): string {
  return cn(
    "grid grid-cols-1 gap-4 sm:gap-5",
    tileCount <= 1 && "mx-auto max-w-sm",
    tileCount === 2 && "md:grid-cols-2 lg:mx-auto lg:max-w-3xl",
    tileCount === 3 && "md:grid-cols-2 lg:grid-cols-3",
    tileCount === 4 && "md:grid-cols-2 lg:grid-cols-4",
    tileCount === 5 && "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    tileCount === 6 && "md:grid-cols-2 lg:grid-cols-3",
    tileCount === 7 && "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    tileCount >= 8 && "md:grid-cols-2 lg:grid-cols-4",
  );
}

export { homepageTattooStylesGridClassName };
