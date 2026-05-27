import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { BlogPageFeaturedSection } from "@/components/sections/blog-page-featured-section";
import { BlogPageFiltersSection } from "@/components/sections/blog-page-filters-section";
import { BlogPageGridSection } from "@/components/sections/blog-page-grid-section";
import { BlogPageIntroSection } from "@/components/sections/blog-page-intro-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { pageIntroBackgroundFor } from "@/config/page-intro-band";
import { blogPageClosingForRegion } from "@/config/blog-page";
import { pageClosingCtaBandBorderlessSectionClassName } from "@/lib/page-closing-cta-band";
import { homepageClosingCtaBandClassName } from "@/lib/homepage-section-surfaces";
import { cn } from "@/lib/utils";
import { getBlogCategoryHref, isBlogCategorySlug } from "@/lib/blog-category";
import { getBlogPageContent, parseCategoryFilter } from "@/lib/blog";
import { buildBlogIndexMetadata } from "@/lib/blog-seo";
import {
  buildBlogCategoryItemListSchema,
  buildBlogIndexBlogSchema,
  buildBreadcrumbListSchema,
} from "@/lib/schema";
import { getRequestRegionContext } from "@/lib/request-region";

interface TattooBlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();
  return buildBlogIndexMetadata(region, regionConfig);
}

export default async function TattooBlogPage({ searchParams }: TattooBlogPageProps) {
  const { category: categoryParam } = await searchParams;
  const activeCategory = parseCategoryFilter(categoryParam);

  if (activeCategory && isBlogCategorySlug(activeCategory)) {
    redirect(getBlogCategoryHref(activeCategory));
  }

  const { region, regionConfig } = await getRequestRegionContext();
  const content = getBlogPageContent(region);
  const closing = blogPageClosingForRegion(region, regionConfig.regionName);

  const hasAnyPosts = content.featuredPosts.length > 0 || content.gridPosts.length > 0;
  const showFeaturedBand = content.featuredPosts.length > 0;
  const allListings = [...content.featuredPosts, ...content.gridPosts];
  const structuredData: Record<string, unknown>[] = [
    buildBreadcrumbListSchema(
      [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/tattoo-blog" },
      ],
      regionConfig,
    ),
    buildBlogIndexBlogSchema(content.intro, regionConfig),
  ];

  if (allListings.length > 0) {
    structuredData.push(buildBlogCategoryItemListSchema(allListings, regionConfig));
  }

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={structuredData} />
      <BlogPageIntroSection
        intro={content.intro}
        introBackgroundImage={pageIntroBackgroundFor("blog")}
      />
      <BlogPageFiltersSection
        categories={content.categories}
        activeCategory={content.activeCategory}
      />
      {showFeaturedBand ? <BlogPageFeaturedSection posts={content.featuredPosts} /> : null}
      <BlogPageGridSection posts={content.gridPosts} showEmptyState={!hasAnyPosts} />
      <PageClosingCtaSection
        content={closing}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="tattoo-blog-index-cta-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        sectionClassName={cn(
          pageClosingCtaBandBorderlessSectionClassName,
          homepageClosingCtaBandClassName,
        )}
      />
    </div>
  );
}
