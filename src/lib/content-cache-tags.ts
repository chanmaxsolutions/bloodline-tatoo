/** ISR / on-demand revalidation tags for cached JSON content. */
const CONTENT_CACHE_TAG_GALLERY = "gallery";

const CONTENT_CACHE_TAG_REVIEWS = "reviews";
const CONTENT_CACHE_TAG_REVIEWS_BANGKOK = "reviews-bangkok";
const CONTENT_CACHE_TAG_REVIEWS_BALI = "reviews-bali";
const CONTENT_CACHE_TAG_REVIEWS_PHUKET = "reviews-phuket";

const CONTENT_CACHE_TAGS = [
  CONTENT_CACHE_TAG_GALLERY,
  CONTENT_CACHE_TAG_REVIEWS,
  CONTENT_CACHE_TAG_REVIEWS_BANGKOK,
  CONTENT_CACHE_TAG_REVIEWS_BALI,
  CONTENT_CACHE_TAG_REVIEWS_PHUKET,
] as const;

type ContentCacheTag = (typeof CONTENT_CACHE_TAGS)[number];

/** Default stale window for gallery + review JSON (24 hours). */
const CONTENT_CACHE_REVALIDATE_SECONDS = 86_400;

function isContentCacheTag(value: string): value is ContentCacheTag {
  return (CONTENT_CACHE_TAGS as readonly string[]).includes(value);
}

export {
  CONTENT_CACHE_REVALIDATE_SECONDS,
  CONTENT_CACHE_TAG_GALLERY,
  CONTENT_CACHE_TAG_REVIEWS,
  CONTENT_CACHE_TAG_REVIEWS_BALI,
  CONTENT_CACHE_TAG_REVIEWS_BANGKOK,
  CONTENT_CACHE_TAG_REVIEWS_PHUKET,
  CONTENT_CACHE_TAGS,
  isContentCacheTag,
  type ContentCacheTag,
};
