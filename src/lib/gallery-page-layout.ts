import { cn } from "@/lib/utils";

/** In-page band subheading (featured grid, masonry grid). */
const galleryPageBandSubheadingClassName =
  "text-center font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

const galleryPageBandPaddingClassName =
  "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)";

const galleryPageIntroBottomSpacingClassName = "pb-10 md:pb-12 lg:pb-14";

/** Closing CTA on portfolio — no divider, stronger surface cap. */
const portfolioClosingCtaSectionClassName = cn(
  "border-0 bg-surface-strong text-foreground",
  galleryPageBandPaddingClassName,
);

export {
  galleryPageBandPaddingClassName,
  galleryPageBandSubheadingClassName,
  galleryPageIntroBottomSpacingClassName,
  portfolioClosingCtaSectionClassName,
};
