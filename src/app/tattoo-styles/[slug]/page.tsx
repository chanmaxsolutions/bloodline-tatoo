import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TattooStyleDetailPage } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-page";
import { isTattooStyleSlug, TATTOO_STYLE_SLUGS } from "@/config/tattoo-style-catalog";
import { resolveTattooStyleDetailPage } from "@/lib/resolve-tattoo-style-detail";
import { getRequestRegionContext } from "@/lib/request-region";

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

  return {
    title,
    description: content.metaDescription,
  };
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

  return (
    <main className="min-w-0">
      <TattooStyleDetailPage
        content={content}
        headerCtaLabel={regionConfig.headerCta.label}
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
      />
    </main>
  );
}
