import Image from "next/image";
import { GoogleReviewCardExpandableText } from "@/components/shared/google-review-card-expandable-text";
import {
  getReviewAuthorInitials,
  GoogleMark,
  GoogleStarRow,
} from "@/components/shared/google-review-primitives";
import { cn } from "@/lib/utils";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";

const READ_MORE_CHAR_THRESHOLD = 92;

const carouselCardWidthClassName =
  "w-[min(17.5rem,calc(100vw-2rem))] shrink-0 md:w-[calc((100vw-3rem-3.75rem)/4)]";

function isRemotePhotoUrl(url: string | undefined): url is string {
  if (!url) return false;
  return url.startsWith("https://");
}

interface GoogleReviewCardProps {
  item: HomepageTestimonial;
  /** Google Business / Maps listing fallback for footer when a review has no direct URL. */
  googleBusinessProfileUrl: string;
  variant?: "carousel" | "page";
  studioName?: string;
  className?: string;
}

function GoogleReviewCard({
  item,
  googleBusinessProfileUrl,
  variant = "carousel",
  studioName,
  className,
}: GoogleReviewCardProps) {
  const avatarSrc = item.profilePhotoUrl;
  const showAvatar = isRemotePhotoUrl(avatarSrc);
  const isCarousel = variant === "carousel";
  const showReadMoreLink =
    isCarousel && item.text.trim().length > READ_MORE_CHAR_THRESHOLD && Boolean(item.reviewUrl);

  return (
    <article
      className={cn(
        "group flex flex-col",
        isCarousel && "h-full",
        "rounded-xl border border-white/5 bg-surface-strong/95 shadow-review-card",
        "motion-fast transition-[border-color,box-shadow]",
        "hover:border-white/10 hover:shadow-review-card-hover",
        isCarousel
          ? cn(
              "min-h-[240px] p-3 md:min-h-[260px] md:p-4",
              "snap-center touch-pan-x",
              carouselCardWidthClassName,
            )
          : "min-h-0 p-5 md:p-6",
        className,
      )}
    >
      <div className="flex shrink-0 gap-3">
        {showAvatar ? (
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-muted/20">
            <Image src={avatarSrc} alt="" fill sizes="48px" className="object-cover" />
          </div>
        ) : (
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-muted/25 font-sans text-sm font-semibold tracking-tight text-foreground"
            aria-hidden
          >
            {getReviewAuthorInitials(item.author)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="truncate font-heading text-base font-semibold uppercase leading-tight tracking-tight text-foreground md:text-lg">
              {item.author}
            </p>
            {item.dateIso ? (
              <time
                className="shrink-0 font-sans text-[11px] tabular-nums text-muted-foreground md:text-xs"
                dateTime={item.dateIso}
              >
                {item.timeLabel}
              </time>
            ) : (
              <span className="shrink-0 font-sans text-[11px] text-muted-foreground md:text-xs">
                {item.timeLabel}
              </span>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <GoogleStarRow rating={item.rating} />
            {studioName ? (
              <span className="font-heading text-[11px] font-medium uppercase tracking-normal text-muted-foreground md:text-xs">
                {studioName}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div className={cn("flex min-h-0 flex-1 flex-col gap-1.5", isCarousel ? "mt-3" : "mt-4")}>
        {isCarousel ? (
          <p className="line-clamp-4 min-h-0 font-sans text-sm leading-relaxed text-foreground/88 text-pretty md:text-base">
            {item.text}
          </p>
        ) : (
          <GoogleReviewCardExpandableText text={item.text} />
        )}
        {showReadMoreLink && item.reviewUrl ? (
          <a
            href={item.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-sans text-xs font-medium text-muted-foreground underline decoration-white/25 underline-offset-2 outline-none transition-colors motion-fast hover:text-foreground hover:decoration-white/40 focus-visible:ring-2 focus-visible:ring-ring/60"
            aria-label="Read this review on Google"
          >
            Read more
          </a>
        ) : null}
      </div>
      <div className="mt-auto flex shrink-0 items-center gap-2 border-t border-border/50 pt-3">
        {item.reviewUrl ? (
          <a
            href={item.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xs font-sans text-xs text-muted-foreground underline-offset-2 outline-none transition-colors motion-fast hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <GoogleMark />
            <span>View on Google</span>
          </a>
        ) : (
          <p className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
            <GoogleMark />
            <span>Posted on Google</span>
          </p>
        )}
      </div>
    </article>
  );
}

export { GoogleReviewCard, carouselCardWidthClassName, READ_MORE_CHAR_THRESHOLD };
