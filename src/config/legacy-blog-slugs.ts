/**
 * Old WordPress top-level blog post slugs (not under /blog/).
 * Redirect to /tattoo-blog until articles are migrated into the new catalog.
 */

const LEGACY_TOP_LEVEL_BLOG_SLUGS = [
  "7-most-high-profile-japan-martial-arts",
  "an-analysis-of-the-tattoo-art-in-the-bangkok",
  "authentic-tattoos-inspired-by-balis-energy",
  "capturing-essence-on-skin-mastering-portrait-tattoos-in-bangkok",
  "chicano-tattoo-styles-and-techniques",
  "chicano-tattoo-styles-techniques",
  "guide-to-choosing-the-perfect-realistic-tattoo-design",
  "lorem-ipsum-dolor-sit-amet-consectetur-suspendisse",
  "tattoo-history-in-past-and-modern-world",
  "tattoo-history-in-past-modern-world",
  "the-role-of-young-people-in-tattoos-increasing-desires",
] as const;

/** Single-segment paths with explicit redirects — must not hit blog-slug middleware. */
const LEGACY_SINGLE_SEGMENT_ALLOWLIST = new Set<string>([
  "about",
  "about-us",
  "bamboo",
  "bamboo-tattoos",
  "blog",
  "bloodline-tv",
  "bloodlinetv",
  "contact",
  "contact-us",
  "galleries",
  "guesthouse",
  "homev1-1",
  "hygiene",
  "hygiene-tattoos",
  "jp",
  "portfolio",
  "privacy-policy",
  "reviews",
  "terms-and-conditions",
  "videos",
  ...LEGACY_TOP_LEVEL_BLOG_SLUGS,
]);

function isLegacyTopLevelBlogSlug(segment: string): boolean {
  if (
    LEGACY_TOP_LEVEL_BLOG_SLUGS.includes(segment as (typeof LEGACY_TOP_LEVEL_BLOG_SLUGS)[number])
  ) {
    return true;
  }

  if (LEGACY_SINGLE_SEGMENT_ALLOWLIST.has(segment)) {
    return false;
  }

  const hyphenCount = (segment.match(/-/g) ?? []).length;
  return hyphenCount >= 2 || segment.length >= 28;
}

export { isLegacyTopLevelBlogSlug, LEGACY_SINGLE_SEGMENT_ALLOWLIST, LEGACY_TOP_LEVEL_BLOG_SLUGS };
