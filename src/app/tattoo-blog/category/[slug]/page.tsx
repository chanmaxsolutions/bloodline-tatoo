import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { BlogCategoryHubIntroSection } from "@/components/sections/blog-category-hub-intro-section";
import { BlogPageFiltersSection } from "@/components/sections/blog-page-filters-section";
import { BlogPageGridSection } from "@/components/sections/blog-page-grid-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { BLOG_CATEGORY_ORDER } from "@/config/blog-catalog";
import { blogPageClosingForRegion, blogPageIntroForRegion } from "@/config/blog-page";
import { pageIntroBandBackgroundImage } from "@/config/page-intro-band";
import {
  getBlogCategoryBreadcrumbSteps,
  getBlogCategoryPageContent,
  getBlogCategoryPath,
  isBlogCategorySlug,
} from "@/lib/blog-category";
import { buildBlogCategoryMetadata } from "@/lib/blog-seo";
import {
  buildBlogCategoryCollectionPageSchema,
  buildBlogCategoryItemListSchema,
  buildBreadcrumbListSchema,
} from "@/lib/schema";
import { getRequestRegionContext } from "@/lib/request-region";

interface TattooBlogCategoryPageProps {
  params: Promise<{ slug: string }>;
}

const categoryHubHeadingId = "blog-category-hub-heading";

export function generateStaticParams(): { slug: string }[] {
  return BLOG_CATEGORY_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TattooBlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isBlogCategorySlug(slug)) {
    return {
      title: "Blog category | Bloodline Tattoo",
      robots: { index: false, follow: false },
    };
  }

  const { region, regionConfig } = await getRequestRegionContext();
  const content = getBlogCategoryPageContent(region, slug);

  return buildBlogCategoryMetadata(slug, content.intro, region, regionConfig, {
    indexable: content.posts.length > 0,
  });
}

export default async function TattooBlogCategoryPage({ params }: TattooBlogCategoryPageProps) {
  const { slug } = await params;

  if (!isBlogCategorySlug(slug)) {
    notFound();
  }

  const { region, regionConfig } = await getRequestRegionContext();
  const content = getBlogCategoryPageContent(region, slug);
  const closing = blogPageClosingForRegion(region, regionConfig.regionName);
  const breadcrumbSteps = getBlogCategoryBreadcrumbSteps(slug);
  const categoryPath = getBlogCategoryPath(slug);

  const breadcrumbSchemaItems = breadcrumbSteps.map((step) => ({
    name: step.label,
    path: step.path,
  }));

  const structuredData: Record<string, unknown>[] = [
    buildBreadcrumbListSchema(breadcrumbSchemaItems, regionConfig),
    buildBlogCategoryCollectionPageSchema(
      content.intro.heading,
      content.intro.description,
      categoryPath,
      regionConfig,
    ),
  ];

  if (content.posts.length > 0) {
    structuredData.push(buildBlogCategoryItemListSchema(content.posts, regionConfig));
  }

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={structuredData} />
      <BlogCategoryHubIntroSection
        blogEyebrow={blogPageIntroForRegion(region).eyebrow}
        heading={content.intro.heading}
        description={content.intro.description}
        introBackgroundImage={pageIntroBandBackgroundImage}
        headingId={categoryHubHeadingId}
      />
      <BlogPageFiltersSection categories={content.categories} activeCategory={content.category} />
      <BlogPageGridSection posts={[...content.posts]} showEmptyState />
      <PageClosingCtaSection
        content={closing}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="blog-category-closing-cta-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
      />
    </div>
  );
}
