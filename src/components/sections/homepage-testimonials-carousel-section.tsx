"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";

/** Interval between gentle auto-scroll steps (one card width). */
const TESTIMONIALS_AUTO_SCROLL_MS = 3000;

interface HomepageTestimonialsCarouselSectionProps {
  testimonials: readonly HomepageTestimonial[];
  /** Region’s Google Business / Maps listing (“View more” when copy is clamped). */
  googleBusinessProfileUrl: string;
}

const GOOGLE_STAR = "#FBBC04";
const GOOGLE_STAR_EMPTY = "rgba(255,255,255,0.14)";

function getInitials(author: string): string {
  const cleaned = author.replace(/\./g, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  const first = parts[0]![0] ?? "";
  const last = parts[parts.length - 1]![0] ?? "";
  return `${first}${last}`.toUpperCase();
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4 shrink-0", className)}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function GoogleStarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-px" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-3.5 shrink-0 md:size-4" aria-hidden>
          <path
            fill={i < rating ? GOOGLE_STAR : GOOGLE_STAR_EMPTY}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}

interface GoogleReviewCardDarkProps {
  item: HomepageTestimonial;
  businessProfileUrl: string;
}

/**
 * Desktop: **four** cards across the row (`gap-5` × 3 = 3.75rem; horizontal inset `px-6` = 3rem).
 * With a full row of four, there is often little or no horizontal overflow, so “open on the 2nd
 * card” may clamp to the start — that is a layout trade-off for a true 4-up grid.
 */
const carouselCardWidthClassName =
  "w-[min(17.5rem,calc(100vw-2rem))] shrink-0 md:w-[calc((100vw-3rem-3.75rem)/4)]";

/**
 * Symmetric inset so `snap-center` cards sit in the middle of the viewport with a sliver of
 * neighbors visible (must stay in sync with `carouselCardWidthClassName` mobile width).
 */
const MOBILE_CAROUSEL_CENTER_PAD = "max(1rem, calc(50% - min(17.5rem, calc(100vw - 2rem)) / 2))";

function isRemotePhotoUrl(url: string | undefined): url is string {
  if (!url) return false;
  return url.startsWith("https://");
}

/** ~3 lines at card width; `line-clamp` breaks scroll overflow checks, so length gates “View more”. */
const VIEW_MORE_CHAR_THRESHOLD = 92;

function GoogleReviewCardDark({ item, businessProfileUrl }: GoogleReviewCardDarkProps) {
  const avatarSrc = item.profilePhotoUrl;
  const showAvatar = isRemotePhotoUrl(avatarSrc);

  /**
   * With Tailwind `line-clamp`, overflow detection via scroll metrics is unreliable; use length
   * as a proxy for “past three lines” at this card width.
   */
  const showViewMoreLink = item.text.trim().length > VIEW_MORE_CHAR_THRESHOLD;

  return (
    <article
      className={cn(
        "group flex h-full min-h-[216px] flex-col md:min-h-[232px]",
        "rounded-xl border border-white/5 bg-surface-strong/95 p-3 shadow-review-card md:p-4",
        "motion-fast transition-[border-color,box-shadow]",
        "hover:border-white/10 hover:shadow-review-card-hover",
        "snap-center touch-pan-x",
        carouselCardWidthClassName,
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
            {getInitials(item.author)}
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
          <div className="mt-1.5">
            <div className="shrink-0">
              <GoogleStarRow rating={item.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex min-h-0 flex-1 flex-col gap-1.5">
        <p className="line-clamp-3 min-h-0 font-sans text-[13px] leading-relaxed text-foreground/88 md:text-sm">
          {item.text}
        </p>
        {showViewMoreLink ? (
          <a
            href={businessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-sans text-xs font-medium text-muted-foreground underline decoration-white/25 underline-offset-2 outline-none transition-colors motion-fast hover:text-foreground hover:decoration-white/40 focus-visible:ring-2 focus-visible:ring-ring/60"
            aria-label="View full review on Google Business Profile"
          >
            View more
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

interface HomepageTestimonialsScrollStripProps {
  sectionLabelId: string;
  describedById?: string;
  testimonials: readonly HomepageTestimonial[];
  googleBusinessProfileUrl: string;
}

/**
 * Horizontal reviews strip: native scroll + touch pan, mouse/pen drag on pointer devices,
 * and gentle timed auto-scroll (paused on hover; off when `prefers-reduced-motion`).
 */
function HomepageTestimonialsScrollStrip({
  sectionLabelId,
  describedById,
  testimonials,
  googleBusinessProfileUrl,
}: HomepageTestimonialsScrollStripProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pointerDragRef = useRef<{
    pointerId: number;
    startClientX: number;
    startScrollLeft: number;
  } | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [useCompactPadding, setUseCompactPadding] = useState(false);
  const [stepPx, setStepPx] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const count = testimonials.length;

  const testimonialIdsKey = useMemo(() => testimonials.map((t) => t.id).join("|"), [testimonials]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767.98px)");
    function apply() {
      setUseCompactPadding(mq.matches);
    }
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  /**
   * Center the **second** card in the scrollport (sliver of 1st + 3rd). Uses viewport deltas +
   * `scrollLeft` only (not `scrollIntoView`, which can move the page on iOS). Re-runs on resize /
   * card size changes so desktop overflow and avatars settling don’t leave us stuck on card 1.
   */
  useLayoutEffect(() => {
    function measureStepPx(el: HTMLDivElement): number {
      if (el.children.length < 2) return 0;
      const first = el.children[0] as HTMLElement;
      const second = el.children[1] as HTMLElement;
      const step = second.offsetLeft - first.offsetLeft;
      return step > 0 ? step : 0;
    }

    function centerSecondCard(el: HTMLDivElement): void {
      if (count < 2) return;
      const second = el.children[1] as HTMLElement | undefined;
      if (!second) return;
      if (el.clientWidth < 1) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll < 2) return;

      const er = el.getBoundingClientRect();
      const sr = second.getBoundingClientRect();
      const delta = sr.left + sr.width / 2 - (er.left + er.width / 2);
      const next = el.scrollLeft + delta;
      el.scrollLeft = Math.max(0, Math.min(maxScroll, Math.round(next)));
    }

    function syncLayout(): void {
      const el = scrollerRef.current;
      if (!el) return;
      centerSecondCard(el);
      setStepPx(measureStepPx(el));
    }

    syncLayout();
    requestAnimationFrame(() => {
      syncLayout();
    });

    const deferredId = window.setTimeout(syncLayout, 400);

    if (typeof ResizeObserver === "undefined") {
      return () => {
        window.clearTimeout(deferredId);
      };
    }
    const ro = new ResizeObserver(() => {
      syncLayout();
    });
    const el = scrollerRef.current;
    if (el) {
      ro.observe(el);
      for (let i = 0; i < Math.min(6, el.children.length); i += 1) {
        const child = el.children[i];
        if (child instanceof HTMLElement) ro.observe(child);
      }
    }
    return () => {
      window.clearTimeout(deferredId);
      ro.disconnect();
    };
  }, [count, testimonialIdsKey, useCompactPadding]);

  const onStripPointerEnter = useCallback(() => {
    if (leaveTimerRef.current != null) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setAutoplayPaused(true);
  }, []);

  const onStripPointerLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setAutoplayPaused(false);
      leaveTimerRef.current = null;
    }, 160);
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current != null) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  const reduceMotion = prefersReducedMotion === true;
  const autoplayOn = count >= 2 && stepPx > 0 && !reduceMotion && !autoplayPaused;

  useEffect(() => {
    if (!autoplayOn) return;

    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || document.hidden) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll < 4) return;
      const step = stepPx;
      const atEnd = el.scrollLeft >= maxScroll - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "auto" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, TESTIMONIALS_AUTO_SCROLL_MS);

    return () => window.clearInterval(id);
  }, [autoplayOn, stepPx, testimonialIdsKey]);

  const onScrollerPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    if (e.button !== 0) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest("a, button, input, textarea, select")) return;
    const el = scrollerRef.current;
    if (!el) return;
    pointerDragRef.current = {
      pointerId: e.pointerId,
      startClientX: e.clientX,
      startScrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  }, []);

  const onScrollerPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const d = pointerDragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    e.preventDefault();
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = d.startScrollLeft - (e.clientX - d.startClientX);
  }, []);

  const onScrollerPointerUpOrCancel = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const d = pointerDragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    pointerDragRef.current = null;
    const el = scrollerRef.current;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* capture already released */
      }
    }
  }, []);

  const onScrollerLostPointerCapture = useCallback(() => {
    pointerDragRef.current = null;
  }, []);

  if (count === 0) return null;

  const padInline = useCompactPadding ? MOBILE_CAROUSEL_CENTER_PAD : "1.5rem";

  return (
    <div
      className="w-full min-w-0 md:py-1"
      onPointerEnter={onStripPointerEnter}
      onPointerLeave={onStripPointerLeave}
    >
      <div
        ref={scrollerRef}
        aria-labelledby={sectionLabelId}
        {...(describedById ? { "aria-describedby": describedById } : {})}
        onPointerDown={onScrollerPointerDown}
        onPointerMove={onScrollerPointerMove}
        onPointerUp={onScrollerPointerUpOrCancel}
        onPointerCancel={onScrollerPointerUpOrCancel}
        onLostPointerCapture={onScrollerLostPointerCapture}
        style={{
          paddingInline: padInline,
          scrollPaddingInline: padInline,
        }}
        className={cn(
          /* `overflow-x-auto` uses a scrollport that clips Y as well; reserve space so card
           * `box-shadow` is not sheared off at the bottom (was `pb-0`). */
          "flex snap-x snap-proximity gap-5 overflow-x-auto overscroll-x-contain pb-8",
          "touch-pan-x [-webkit-overflow-scrolling:touch] cursor-grab active:cursor-grabbing",
          "scroll-smooth motion-reduce:scroll-auto",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {testimonials.map((item) => (
          <GoogleReviewCardDark
            key={item.id}
            item={item}
            businessProfileUrl={googleBusinessProfileUrl}
          />
        ))}
      </div>
    </div>
  );
}

function HomepageTestimonialsCarouselSection({
  testimonials,
  googleBusinessProfileUrl,
}: HomepageTestimonialsCarouselSectionProps) {
  const regionId = useId();
  const count = testimonials.length;

  if (count === 0) return null;

  return (
    <section
      id="homepage-testimonials"
      aria-labelledby={`${regionId}-label`}
      className={cn(
        "w-full min-w-0 max-w-none overflow-x-hidden bg-band-charcoal text-foreground",
        "py-8 md:py-10",
      )}
    >
      <h2 id={`${regionId}-label`} className="sr-only">
        Google reviews from clients
      </h2>
      <p id={`${regionId}-reviews-scroll-hint`} className="sr-only">
        Drag, swipe, or wait for the row to advance automatically. Pauses while you hover over the
        reviews.
      </p>
      <div className="w-full min-w-0">
        <HomepageTestimonialsScrollStrip
          sectionLabelId={`${regionId}-label`}
          describedById={`${regionId}-reviews-scroll-hint`}
          testimonials={testimonials}
          googleBusinessProfileUrl={googleBusinessProfileUrl}
        />
      </div>
    </section>
  );
}

export { HomepageTestimonialsCarouselSection };
