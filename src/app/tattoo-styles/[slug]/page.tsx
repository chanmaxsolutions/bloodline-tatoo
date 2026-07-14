import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { TattooStyleDetailPage } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-page";
import { isTattooStyleSlug, TATTOO_STYLE_SLUGS } from "@/config/tattoo-style-catalog";
import { resolveTattooStyleDetailPage } from "@/lib/resolve-tattoo-style-detail";
import { getRequestRegionContext } from "@/lib/request-region";
import { absoluteRegionalUrl, buildFaqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface TattooStylePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return TATTOO_STYLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TattooStylePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isTattooStyleSlug(slug)) {
    return { title: "Tattoo style | Bloodline Tattoo" };
  }

  const { region, regionConfig } = await getRequestRegionContext();
  const content = resolveTattooStyleDetailPage(slug, region);

  if (!content) {
    return { title: `Tattoo style | ${regionConfig.seo.siteName}` };
  }

  const title =
    region === "global"
      ? `${content.title} | ${regionConfig.seo.siteName}`
      : `${content.title} in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  return buildMetadata(
    {
      title,
      description: content.metaDescription,
      canonicalPath: `/tattoo-styles/${slug}`,
      ogImagePath: content.heroImageSrc,
    },
    regionConfig,
  );
}

export default async function TattooStyleRoutePage({ params }: TattooStylePageProps) {
  const { slug } = await params;
  const { region, regionConfig } = await getRequestRegionContext();

  if (!isTattooStyleSlug(slug)) {
    notFound();
  }

  const content = resolveTattooStyleDetailPage(slug, region);

  if (!content) {
    notFound();
  }

  const pageUrl = absoluteRegionalUrl(regionConfig, `/tattoo-styles/${slug}`);
  const structuredData =
    content.faqItems.length > 0 ? [buildFaqPageSchema(content.faqItems, pageUrl)] : [];

  return (
    <main className="min-w-0">
      {structuredData.length > 0 ? <JsonLd data={structuredData} /> : null}
      <TattooStyleDetailPage
        content={content}
        region={region}
        headerCtaLabel={regionConfig.headerCta.label}
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
      />
    </main>
  );
}
