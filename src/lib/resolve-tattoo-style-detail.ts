import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { tattooStyleFaqBySlug } from "@/config/tattoo-style-detail-faq";
import { getTattooStyleProofPool } from "@/config/tattoo-style-proof-pools";
import { defaultApproachBandImage } from "@/config/tattoo-style-detail";
import { tattooStyleDetailForRegion } from "@/config/tattoo-style-detail-regional";
import {
  isTattooStyleAvailableInRegion,
  tattooStyleSlugsForRegion,
} from "@/config/region-tattoo-style-availability";
import { getPortfolioHrefForTattooStyle } from "@/lib/tattoo-style-portfolio";
import {
  resolveTattooStyleApproachImage,
  resolveTattooStyleHeroImage,
  resolveTattooStyleProofGalleryImages,
} from "@/lib/tattoo-style-media";
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
  const detail = tattooStyleDetailForRegion(slug, region);

  const catalogFallback = { src: catalog.imageSrc, alt: catalog.imageAlt };

  const proofPool = getTattooStyleProofPool(slug, region);

  const proofImages = resolveTattooStyleProofGalleryImages(
    proofPool.length > 0 ? proofPool : detail.proofPool,
    detail.proofImages,
    catalogFallback,
  );

  const heroImage = detail.heroImage ?? resolveTattooStyleHeroImage(slug, region, catalog.imageAlt);

  const approachImage =
    detail.approachImage ??
    resolveTattooStyleApproachImage(slug, region, defaultApproachBandImage.alt);

  return {
    slug,
    title: catalog.title,
    shortDescription: catalog.shortDescription,
    heroImageSrc: heroImage.src,
    heroImageAlt: heroImage.alt,
    metaDescription: detail.metaDescription ?? detail.lead,
    lead: detail.lead,
    overview: detail.overview,
    approachHeadline: detail.approachHeadline,
    approachIntro: detail.approachIntro,
    philosophyBullets: detail.philosophyBullets,
    idealForBullets: detail.idealForBullets,
    sessionBullets: detail.sessionBullets,
    approachImageSrc: approachImage.src,
    approachImageAlt: approachImage.alt,
    proofEyebrow: detail.proofEyebrow,
    proofHeading: detail.proofHeading,
    proofDescription: detail.proofDescription,
    proofImages,
    proofPortfolioHref: getPortfolioHrefForTattooStyle(slug),
    relatedSlugs: relatedStyleSlugsForRegion(slug, region),
    relatedBlogLinks: detail.relatedBlogLinks ?? [],
    faqItems: tattooStyleFaqBySlug[slug],
  };
}

export { resolveTattooStyleDetailPage };
