import { cn } from "@/lib/utils";

/**
 * Native CSS columns masonry — browser packs tiles by height with even column balance.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/columns
 */
const portfolioMasonryContainerClassName = cn(
  "columns-1 gap-4 [column-fill:balance]",
  "sm:columns-2 lg:columns-3 xl:columns-4",
);

const portfolioMasonryItemClassName = "mb-4 break-inside-avoid";

const portfolioMasonryTileClassName = cn(
  "block w-full overflow-hidden rounded-md border border-border/50 bg-surface-elevated",
  "leading-[0]",
);

const portfolioMasonryImageClassName = "block h-auto w-full max-w-full";

export {
  portfolioMasonryContainerClassName,
  portfolioMasonryImageClassName,
  portfolioMasonryItemClassName,
  portfolioMasonryTileClassName,
};
