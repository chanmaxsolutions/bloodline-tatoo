/**
 * Section band H2 scale (about video, homepage authority, tattoo styles, etc.).
 * Always pair with `text-heading-display` on the `h2` (font-heading, bold, uppercase).
 * Do not pass these classes through `cn()` with `text-heading-display` — merge drops the preset.
 */
const sectionDisplayHeadingClassName =
  "w-full max-w-none text-balance font-heading font-bold uppercase tracking-tight text-4xl leading-[0.95] text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

/** For raw `h2` elements outside `SectionHeading` (e.g. homepage authority). */
const sectionDisplayHeadingWithPresetClassName = `text-heading-display ${sectionDisplayHeadingClassName}`;

export { sectionDisplayHeadingClassName, sectionDisplayHeadingWithPresetClassName };
