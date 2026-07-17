import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { BlogQuickAnswer } from "@/components/blog/blog-quick-answer";
import { BlogArticleActionPanelAside } from "@/components/sections/blog-article-action-panel";
import { BlogArticleFaqSection } from "@/components/sections/blog-article-faq-section";
import { BlogArticleRelatedStylesSection } from "@/components/sections/blog-article-related-styles-section";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { formatBlogPublishedDate, getBlogArticleBreadcrumbTrail } from "@/lib/blog-format";
import { formatBlogReadingTime, toIso8601ReadingDuration } from "@/lib/blog-reading-time";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { CompiledBlogPost } from "@/types/blog";
import Image from "next/image";
import type { ReactNode } from "react";

/** Fluid clamp via `.text-heading-authority-display` — avoid `text-balance` on long SEO titles. */
const blogArticleTitleClassName =
  "text-heading-authority-display w-full max-w-4xl text-pretty tracking-tight";

/** Matches `BreadcrumbNav` link tone (e.g. Home, Blog). */
const blogArticleHeaderMetaClassName =
  "shrink-0 font-heading text-sm font-medium uppercase tracking-normal text-muted-foreground/55 md:text-base";

const blogArticleHeaderMetaSeparatorClassName = "text-muted-foreground/25";

const blogArticleFigureClassName =
  "relative aspect-16/10 w-full overflow-hidden rounded-xl bg-surface-elevated";

interface BlogArticleSectionProps {
  post: CompiledBlogPost;
  regionName: string;
  headerCtaLabel: string;
}

function BlogArticleSection({ post, regionName, headerCtaLabel }: BlogArticleSectionProps) {
  const breadcrumbNavItems = getBlogArticleBreadcrumbTrail(post).navSteps.map((step) => ({
    label: step.label,
    href: step.path,
  }));

  return (
    <article
      className={cn(
        "border-t border-border/50 bg-surface text-foreground",
        "pb-10 md:pb-12 lg:pb-14",
      )}
    >
      <Container size="narrow" className="pt-28 md:pt-36">
        <SectionReveal className="mx-auto flex w-full max-w-3xl flex-col gap-10 md:gap-12">
          <header className="flex flex-col gap-5 md:gap-6">
            <div
              className={sectionRevealItemClass(
                "none",
                "flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
              )}
            >
              <BreadcrumbNav items={breadcrumbNavItems} />
              <p className={blogArticleHeaderMetaClassName}>
                <time dateTime={post.publishedAt}>{formatBlogPublishedDate(post.publishedAt)}</time>
                <span aria-hidden className={blogArticleHeaderMetaSeparatorClassName}>
                  {" "}
                  ·{" "}
                </span>
                <time dateTime={toIso8601ReadingDuration(post.readingTimeMinutes)}>
                  {formatBlogReadingTime(post.readingTimeMinutes)}
                </time>
              </p>
            </div>
            <h1 className={sectionRevealItemClass("sm", blogArticleTitleClassName)}>
              {post.title}
            </h1>
            <p
              className={sectionRevealItemClass(
                "md",
                "font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug",
              )}
            >
              {post.description}
            </p>
            <BlogQuickAnswer answer={post.quickAnswer} className={sectionRevealItemClass("md")} />
          </header>

          <figure className={sectionRevealItemClass("md", "flex flex-col gap-3")}>
            <div className={blogArticleFigureClassName}>
              <Image
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 1400px, 100vw"
                quality={88}
                className="object-cover object-center"
              />
            </div>
          </figure>

          <BlogMdxArticleBody content={post.content} />

          {post.relatedStyles && post.relatedStyles.length > 0 ? (
            <BlogArticleRelatedStylesSection
              styles={post.relatedStyles}
              className={sectionRevealItemClass("md")}
            />
          ) : null}

          {post.faq && post.faq.length > 0 ? <BlogArticleFaqSection items={post.faq} /> : null}

          <div className={sectionRevealItemClass("md")}>
            <BlogArticleActionPanelAside regionName={regionName} headerCtaLabel={headerCtaLabel} />
          </div>
        </SectionReveal>
      </Container>
    </article>
  );
}

function BlogMdxArticleBody({ content }: { content: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:gap-8 [&_figure]:my-2 [&_h2:not(:first-child)]:mt-2 [&_h3:not(:first-child)]:mt-1">
      {content}
    </div>
  );
}

export { BlogArticleSection };
