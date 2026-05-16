import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { tattooStyleFaqBySlug } from "@/config/tattoo-style-detail-faq";
import { tattooStyleDetailBySlug } from "@/config/tattoo-style-detail";
import {
  isTattooStyleAvailableInRegion,
  tattooStyleSlugsForRegion,
} from "@/config/region-tattoo-style-availability";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

const RELATED_STYLE_LIMIT = 3;

function relatedStyleSlugsForRegion(
  slug: TattooStyleSlug,
  region: RegionSlug,
): readonly TattooStyleSlug[] {
  return tattooStyleSlugsForRegion(region)
    .filter((candidate) => candidate !== slug)
    .slice(0, RELATED_STYLE_LIMIT);
}

function resolveTattooStyleDetailPage(
  slug: TattooStyleSlug,
  region: RegionSlug,
): ResolvedTattooStyleDetailPage | null {
  if (!isTattooStyleAvailableInRegion(slug, region)) {
    return null;
  }

  const catalog = getTattooStyleBySlug(slug);
  const detail = tattooStyleDetailBySlug[slug];

  const proofImages =
    detail.proofImages && detail.proofImages.length > 0
      ? detail.proofImages
      : [{ src: catalog.imageSrc, alt: catalog.imageAlt }];

  return {
    slug,
    title: catalog.title,
    shortDescription: catalog.shortDescription,
    heroImageSrc: catalog.imageSrc,
    heroImageAlt: catalog.imageAlt,
    metaDescription: detail.metaDescription ?? detail.lead,
    lead: detail.lead,
    approachHeadline: detail.approachHeadline,
    approachIntro: detail.approachIntro,
    philosophyBullets: detail.philosophyBullets,
    idealForBullets: detail.idealForBullets,
    sessionBullets: detail.sessionBullets,
    proofImages,
    relatedSlugs: relatedStyleSlugsForRegion(slug, region),
    faqItems: tattooStyleFaqBySlug[slug],
  };
}

export { resolveTattooStyleDetailPage };
