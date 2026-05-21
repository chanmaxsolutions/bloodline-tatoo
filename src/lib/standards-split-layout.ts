/** Shared split-band grid rhythm (about splits + editorial homepage bands). */
const standardsSplitEditorialGridClassName =
  "grid items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-12 xl:gap-16";

/** Tattoo style detail approach band: text left ~56%, image right ~44%. */
const tattooStyleDetailApproachGridClassName =
  "grid items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-12 xl:gap-16";

/** Homepage standards split: text left ~40%, image right ~60%. */
const homepageStandardsApproachGridClassName =
  "grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,1.2fr)] lg:gap-12 xl:gap-16";

const standardsSplitBalancedGridClassName =
  "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16";

const standardsSplitEditorialMediaClassName =
  "relative min-h-[min(52vh,400px)] w-full overflow-hidden rounded-md border border-white/5 lg:min-h-[min(60vh,520px)]";

const standardsSplitBalancedMediaClassName =
  "relative aspect-4/5 min-h-[min(52vh,420px)] w-full overflow-hidden rounded-xl border border-white/5 lg:min-h-[min(64vh,520px)]";

/** Homepage session path only: image left ~60%, text right ~40%. */
const homepageSessionPathApproachGridClassName =
  "grid items-center gap-10 lg:grid-cols-[minmax(280px,1.2fr)_minmax(0,0.8fr)] lg:gap-12 xl:gap-16";

export {
  homepageSessionPathApproachGridClassName,
  homepageStandardsApproachGridClassName,
  standardsSplitBalancedGridClassName,
  standardsSplitBalancedMediaClassName,
  standardsSplitEditorialGridClassName,
  standardsSplitEditorialMediaClassName,
  tattooStyleDetailApproachGridClassName,
};
