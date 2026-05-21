/** Shared closing / conversion band shell (reviews Google CTA, about book CTA). */
const pageClosingCtaBandSectionClassName =
  "border-t border-border/50 bg-surface text-foreground py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)";

/** Sizes only — pair with `text-heading-display` via `clsx`, not `cn` (merge drops the display preset). */
const pageClosingCtaBandTitleClassName =
  "w-full max-w-4xl text-balance text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl md:leading-[0.9] lg:text-8xl";

const pageClosingCtaBandDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const pageClosingCtaBandActionsClassName =
  "flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center max-w-xl";

export {
  pageClosingCtaBandActionsClassName,
  pageClosingCtaBandDescriptionClassName,
  pageClosingCtaBandSectionClassName,
  pageClosingCtaBandTitleClassName,
};
