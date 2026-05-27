/**
 * Section band H2 scale (homepage authority, tattoo styles, standards split, reviews, etc.).
 * Always pair with `text-heading-display` on the `h2` via `clsx` — never `cn()`, or merge drops the preset.
 */
const sectionDisplayHeadingClassName =
  "w-full max-w-none text-balance font-heading font-bold uppercase tracking-tight text-4xl leading-[0.95] text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

/** `text-heading-display` + {@link sectionDisplayHeadingClassName} — use with `clsx` on raw `h2` elements. */
function sectionDisplayHeadingPresetClassName(...extra: string[]): string {
  return ["text-heading-display", sectionDisplayHeadingClassName, ...extra]
    .filter(Boolean)
    .join(" ");
}

/** @deprecated Use {@link sectionDisplayHeadingPresetClassName} with `clsx` instead of string concat + `cn`. */
const sectionDisplayHeadingWithPresetClassName = `text-heading-display ${sectionDisplayHeadingClassName}`;

export {
  sectionDisplayHeadingClassName,
  sectionDisplayHeadingPresetClassName,
  sectionDisplayHeadingWithPresetClassName,
};
