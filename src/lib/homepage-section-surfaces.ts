/** Solid homepage section backgrounds (no gradients). Alternates depth down the page. */
const homepageAuthorityBandClassName = "bg-surface";
const homepageTattooStylesBandClassName = "bg-background";
const homepageStandardsSplitBandClassName = "bg-surface-elevated";
const homepageSessionPathBandClassName = "bg-background";
const homepageTestimonialsBandClassName = "bg-surface-elevated";
const homepageClosingCtaBandClassName = "bg-surface-strong";

/** Approach bands (standards split + session path): tighter mobile bottom than symmetric `py` bands. */
const homepageApproachBandPaddingClassName =
  "pt-(--homepage-section-band-padding-y-mobile) pb-12 md:pb-16 lg:py-(--homepage-section-band-padding-y-desktop)";

const homepageApproachBandContainerClassName =
  "relative flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16";

const homepageStandardsSplitBandSurfaceClassNames = {
  default: homepageSessionPathBandClassName,
  surface: "bg-surface",
  elevated: homepageStandardsSplitBandClassName,
  charcoal: homepageTestimonialsBandClassName,
  strong: homepageClosingCtaBandClassName,
} as const;

type HomepageStandardsSplitBandSurface = keyof typeof homepageStandardsSplitBandSurfaceClassNames;

function resolveHomepageStandardsSplitBandClassName(
  bandSurface: HomepageStandardsSplitBandSurface | undefined,
): string {
  return homepageStandardsSplitBandSurfaceClassNames[bandSurface ?? "default"];
}

export {
  homepageApproachBandContainerClassName,
  homepageApproachBandPaddingClassName,
  homepageAuthorityBandClassName,
  homepageClosingCtaBandClassName,
  homepageSessionPathBandClassName,
  homepageStandardsSplitBandClassName,
  homepageStandardsSplitBandSurfaceClassNames,
  homepageTattooStylesBandClassName,
  homepageTestimonialsBandClassName,
  resolveHomepageStandardsSplitBandClassName,
};

export type { HomepageStandardsSplitBandSurface };
