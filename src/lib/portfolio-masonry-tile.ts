import { cn } from "@/lib/utils";
import type { GalleryItemLayout } from "@/types/gallery";

/**
 * Reviews uses `columns-1` on mobile — portfolio matches that so tiles stay full-width,
 * then steps up at `sm` / `lg` / `xl`.
 */
const portfolioMasonryColumnsClassName =
  "columns-1 gap-4 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-6 xl:columns-4";

const portfolioMasonryItemClassName = "mb-4 w-full break-inside-avoid sm:mb-4 lg:mb-5 xl:mb-6";

/** One uniform tile height on mobile; layout variants from `sm` up (masonry columns). */
function portfolioMasonryTileHeightClassName(layout: GalleryItemLayout | undefined): string {
  const mobileUniformHeightClassName = "h-[min(16rem,52vw)]";

  if (layout === "tall") {
    return cn(
      mobileUniformHeightClassName,
      "sm:h-[min(20rem,36vh)]",
      "lg:h-[min(26rem,44vh)]",
      "xl:h-[min(28rem,48vh)]",
    );
  }

  if (layout === "wide") {
    return cn(mobileUniformHeightClassName, "sm:h-[min(14rem,28vh)]", "lg:h-[min(16rem,30vh)]");
  }

  return cn(mobileUniformHeightClassName, "sm:h-[min(18rem,34vh)]", "lg:h-[min(22rem,38vh)]");
}

export {
  portfolioMasonryColumnsClassName,
  portfolioMasonryItemClassName,
  portfolioMasonryTileHeightClassName,
};
