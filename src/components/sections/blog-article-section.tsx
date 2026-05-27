import Image from "next/image";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { BlogQuickAnswer } from "@/components/blog/blog-quick-answer";
import { BlogArticleActionPanelAside } from "@/components/sections/blog-article-action-panel";
import { BlogArticleFaqSection } from "@/components/sections/blog-article-faq-section";
import { BlogArticleRelatedStylesSection } from "@/components/sections/blog-article-related-styles-section";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { formatBlogPublishedDate, getBlogArticleBreadcrumbTrail } from "@/lib/blog";
import { formatBlogReadingTime, toIso8601ReadingDuration } from "@/lib/blog-reading-time";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogArticleBodyBlock, ResolvedBlogPost } from "@/types/blog";

/** Fluid clamp via `.text-heading-authority-display` — avoid `text-balance` on long SEO titles. */
const blogArticleTitleClassName =
  "text-heading-authority-display w-full max-w-4xl text-pretty tracking-tight";

/** Matches `BreadcrumbNav` link tone (e.g. Home, Blog). */
const blogArticleHeaderMetaClassName =
  "shrink-0 font-heading text-sm font-medium uppercase tracking-normal text-muted-foreground/55 md:text-base";

const blogArticleHeaderMetaSeparatorClassName = "text-muted-foreground/25";

const proseParagraphClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug";

const proseHeadingClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

const blogArticleFigureClassName =
  "relative aspect-16/10 w-full overflow-hidden rounded-xl bg-surface-elevated";

const blogArticleCaptionClassName =
  "font-sans text-sm italic leading-relaxed text-muted-foreground/55 md:text-base";

interface BlogArticleSectionProps {
  post: ResolvedBlogPost;
  regionName: string;
  headerCtaLabel: string;
}

function renderBodyBlock(block: BlogArticleBodyBlock, index: number) {
  const revealDelay = index % 2 === 0 ? "sm" : "md";

  if (block.type === "image") {
    return (
      <figure
        key={`image-${index}`}
        className={sectionRevealItemClass(revealDelay, "flex flex-col gap-3")}
      >
        <div className={blogArticleFigureClassName}>
          <Image
            src={block.image.src}
            alt={block.image.alt}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            quality={75}
            className="object-cover object-center"
          />
        </div>
        {block.caption ? (
          <figcaption className={blogArticleCaptionClassName}>{block.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "heading") {
    const Tag = block.level === 3 ? "h3" : "h2";
    return (
      <Tag
        key={`heading-${index}`}
        className={sectionRevealItemClass(
          revealDelay,
          block.level === 3
            ? "font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl"
            : proseHeadingClassName,
        )}
      >
        {block.text}
      </Tag>
    );
  }

  return (
    <p
      key={`paragraph-${index}`}
      className={sectionRevealItemClass(revealDelay, proseParagraphClassName)}
    >
      {block.text}
    </p>
  );
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
                sizes="(min-width: 1024px) 720px, 100vw"
                quality={75}
                className="object-cover object-center"
              />
            </div>
          </figure>

          <div className="flex flex-col gap-6 md:gap-8">
            {post.body.map((block, index) => renderBodyBlock(block, index))}
          </div>

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

export { BlogArticleSection };
