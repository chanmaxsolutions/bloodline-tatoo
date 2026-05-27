import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { BlogArticleSection } from "@/components/sections/blog-article-section";
import { BlogArticleRelatedSection } from "@/components/sections/blog-article-related-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { blogPageClosingForRegion } from "@/config/blog-page";
import { BLOG_CATEGORY_LABELS } from "@/config/blog-catalog";
import { pageClosingCtaBandBorderlessSectionClassName } from "@/lib/page-closing-cta-band";
import { homepageClosingCtaBandClassName } from "@/lib/homepage-section-surfaces";
import { cn } from "@/lib/utils";
import {
  getAllBlogSlugs,
  getBlogArticleBreadcrumbTrail,
  getBlogCategoryHref,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  isPostVisibleInRegion,
} from "@/lib/blog";
import { resolveBlogPost } from "@/lib/blog-display";
import { buildBlogArticleMetadata, buildBlogArticleNotFoundMetadata } from "@/lib/blog-seo";
import {
  absoluteRegionalUrl,
  buildBlogPostingSchema,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/schema";
import { getRequestRegionContext } from "@/lib/request-region";

interface TattooBlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TattooBlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { region, regionConfig } = await getRequestRegionContext();
  const post = getBlogPostBySlug(slug);

  if (!post || !isPostVisibleInRegion(post, region)) {
    return buildBlogArticleNotFoundMetadata(slug, regionConfig);
  }

  return buildBlogArticleMetadata(post, regionConfig);
}

export default async function TattooBlogArticlePage({ params }: TattooBlogArticlePageProps) {
  const { slug } = await params;
  const { region, regionConfig } = await getRequestRegionContext();
  const rawPost = getBlogPostBySlug(slug);

  if (!rawPost || !isPostVisibleInRegion(rawPost, region)) {
    notFound();
  }

  const post = resolveBlogPost(rawPost);
  const related = getRelatedBlogPosts(post, region);
  const closing = blogPageClosingForRegion(region, regionConfig.regionName);
  const breadcrumbSchemaItems = getBlogArticleBreadcrumbTrail(post).schemaSteps.map((step) => ({
    name: step.label,
    path: step.path,
  }));
  const articleUrl = absoluteRegionalUrl(regionConfig, `/tattoo-blog/${post.slug}`);
  const structuredData: Record<string, unknown>[] = [
    buildBreadcrumbListSchema(breadcrumbSchemaItems, regionConfig),
    buildBlogPostingSchema(post, regionConfig),
  ];

  if (post.faq && post.faq.length > 0) {
    structuredData.push(buildFaqPageSchema(post.faq, articleUrl));
  }

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={structuredData} />
      <BlogArticleSection
        post={post}
        regionName={regionConfig.regionName}
        headerCtaLabel={regionConfig.headerCta.label}
      />
      <BlogArticleRelatedSection
        posts={related}
        categoryLabel={BLOG_CATEGORY_LABELS[post.category]}
        categoryHref={getBlogCategoryHref(post.category)}
      />
      <PageClosingCtaSection
        content={closing}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="tattoo-blog-article-cta-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        sectionClassName={cn(
          pageClosingCtaBandBorderlessSectionClassName,
          homepageClosingCtaBandClassName,
        )}
      />
    </div>
  );
}
