import Image from "next/image";
import Link from "next/link";
import { BLOG_CATEGORY_LABELS } from "@/config/blog-categories";
import { formatBlogPublishedDate } from "@/lib/blog-format";
import { formatBlogReadingTime, toIso8601ReadingDuration } from "@/lib/blog-reading-time";
import { cn } from "@/lib/utils";
import type { BlogPostListing } from "@/types/blog";

const blogCardLinkClassName = cn(
  "group relative isolate flex h-full min-h-[320px] flex-col overflow-hidden rounded-xl border border-border/35 bg-surface-elevated/90",
  "motion-fast outline-none transition-[border-color,background-color]",
  "hover:border-white/8 hover:bg-surface-elevated",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const blogCardImageWrapClassName = "relative aspect-16/10 w-full shrink-0 overflow-hidden";

const blogCardBodyClassName = "flex min-h-0 flex-1 flex-col gap-3 p-5 md:p-6";

const blogCardTitleClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground md:text-3xl";

const blogCardCategoryClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const blogCardMetaClassName =
  "font-heading text-base font-light uppercase tracking-normal text-muted-foreground/65 md:text-lg";

const blogCardCtaClassName =
  "mt-auto shrink-0 font-sans text-sm font-medium text-foreground transition-colors group-hover:text-accent";

const blogBentoOverlayClassName =
  "pointer-events-none absolute inset-0 bg-linear-to-t from-surface-elevated from-35% via-surface-elevated/95 via-55% to-transparent";

const blogBentoOverlayBodyClassName =
  "relative z-10 flex w-full shrink-0 flex-col gap-3 p-5 md:gap-4 md:p-6 md:pb-7";

const blogBentoDesktopOverlayClassName =
  "relative hidden min-h-0 flex-1 flex-col justify-end lg:flex";

const blogBentoMobileStandardClassName = "flex min-h-0 flex-1 flex-col lg:hidden";

interface BlogArticleCardProps {
  post: BlogPostListing;
  variant?: "default" | "featured" | "bentoLead" | "bentoSecondary";
}

interface BlogArticleCardBodyProps {
  post: BlogPostListing;
  isBentoSecondary?: boolean;
  overlay?: boolean;
}

function BlogArticleCardBody({
  post,
  isBentoSecondary = false,
  overlay = false,
}: BlogArticleCardBodyProps) {
  return (
    <div
      className={cn(
        overlay ? blogBentoOverlayBodyClassName : blogCardBodyClassName,
        isBentoSecondary && !overlay && "gap-2.5 p-4 md:gap-3 md:p-5",
      )}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className={blogCardCategoryClassName}>{BLOG_CATEGORY_LABELS[post.category]}</span>
        <span
          className={cn("inline-flex flex-wrap items-baseline gap-x-1.5", blogCardMetaClassName)}
        >
          <time dateTime={post.publishedAt}>{formatBlogPublishedDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <time dateTime={toIso8601ReadingDuration(post.readingTimeMinutes)}>
            {formatBlogReadingTime(post.readingTimeMinutes)}
          </time>
        </span>
      </div>
      <h2 className={cn(blogCardTitleClassName, "line-clamp-2 shrink-0")}>{post.title}</h2>
      <p
        className={cn(
          "font-sans text-base leading-relaxed text-muted-foreground",
          overlay ? "line-clamp-2 shrink-0" : "line-clamp-3 min-h-0 flex-1",
          !overlay && isBentoSecondary && "line-clamp-2",
        )}
      >
        {post.description}
      </p>
      <span className={cn(blogCardCtaClassName, overlay && "mt-0")}>Read article</span>
    </div>
  );
}

function BlogArticleCardStandardMedia({
  post,
  imageSizes,
}: {
  post: BlogPostListing;
  imageSizes: string;
}) {
  return (
    <div className={blogCardImageWrapClassName}>
      <Image
        src={post.featuredImage.src}
        alt={post.featuredImage.alt}
        fill
        sizes={imageSizes}
        quality={68}
        className="object-cover object-center transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"
      />
    </div>
  );
}

function BlogArticleCardBentoDesktopOverlay({
  post,
  imageSizes,
  isBentoSecondary,
}: {
  post: BlogPostListing;
  imageSizes: string;
  isBentoSecondary: boolean;
}) {
  return (
    <div className={blogBentoDesktopOverlayClassName}>
      <Image
        src={post.featuredImage.src}
        alt={post.featuredImage.alt}
        fill
        sizes={imageSizes}
        quality={68}
        className="object-cover object-center transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
      />
      <div aria-hidden className={blogBentoOverlayClassName} />
      <BlogArticleCardBody post={post} isBentoSecondary={isBentoSecondary} overlay />
    </div>
  );
}

function BlogArticleCard({ post, variant = "default" }: BlogArticleCardProps) {
  const href = `/tattoo-blog/${post.slug}`;
  const isBentoLead = variant === "bentoLead";
  const isBentoSecondary = variant === "bentoSecondary";
  const isBentoOverlay = isBentoLead || isBentoSecondary;
  const isFeatured = variant === "featured" || isBentoLead;

  const imageSizes = isBentoLead
    ? "(min-width: 1024px) 55vw, 100vw"
    : isBentoSecondary
      ? "(min-width: 1024px) 40vw, 100vw"
      : isFeatured
        ? "(min-width: 1024px) 50vw, 100vw"
        : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

  return (
    <article className="flex h-full min-h-0 w-full">
      <Link
        href={href}
        className={cn(
          blogCardLinkClassName,
          isBentoOverlay && "lg:h-full lg:min-h-0 lg:flex-col lg:justify-end lg:p-0",
        )}
      >
        {isBentoOverlay ? (
          <>
            <div className={blogBentoMobileStandardClassName}>
              <BlogArticleCardStandardMedia post={post} imageSizes={imageSizes} />
              <BlogArticleCardBody post={post} />
            </div>
            <BlogArticleCardBentoDesktopOverlay
              post={post}
              imageSizes={imageSizes}
              isBentoSecondary={isBentoSecondary}
            />
          </>
        ) : (
          <>
            <BlogArticleCardStandardMedia post={post} imageSizes={imageSizes} />
            <BlogArticleCardBody post={post} />
          </>
        )}
      </Link>
    </article>
  );
}

export { BlogArticleCard };
