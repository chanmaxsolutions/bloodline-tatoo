"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/components/shared/motion/easing";
import { marqueeSpeedPxPerSec, motionDurations } from "@/components/shared/motion/motion-tokens";
import { revealFirmVariants } from "@/components/shared/motion/variants";
import { cn } from "@/lib/utils";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";

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
  onPointerEnterCard: () => void;
  onPointerLeaveCard: () => void;
  /** Mobile strip: center snap + horizontal pan hint (desktop marquee ignores). */
  mobileCarousel?: boolean;
}

/** One row; from `md` each card is 1/5 of the viewport minus gaps (`gap-5` × 4) and horizontal inset. */
const carouselCardWidthClassName =
  "w-[min(17.5rem,calc(100vw-2rem))] shrink-0 md:w-[calc((100vw-3rem-5rem)/5)]";

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

function GoogleReviewCardDark({
  item,
  businessProfileUrl,
  onPointerEnterCard,
  onPointerLeaveCard,
  mobileCarousel = false,
}: GoogleReviewCardDarkProps) {
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
        "rounded-xl border border-white/5 bg-surface-strong/95 p-3 shadow-md shadow-black/35 md:p-4",
        "motion-fast transition-[border-color,box-shadow]",
        "hover:border-white/15 hover:shadow-md hover:shadow-black/42",
        mobileCarousel && "snap-center touch-pan-x",
        carouselCardWidthClassName,
      )}
      onPointerEnter={onPointerEnterCard}
      onPointerLeave={onPointerLeaveCard}
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

interface TestimonialMarqueeRowProps {
  items: readonly HomepageTestimonial[];
  direction: "left" | "right";
  googleBusinessProfileUrl: string;
  onCardEnter: () => void;
  onCardLeave: () => void;
  pausedRef: MutableRefObject<boolean>;
  prefersReducedMotion: boolean | null;
  /** When false, RAF marquee is disabled (e.g. small viewports use manual scroll instead). */
  enabled: boolean;
  /** Row-specific key so translate resets when this row’s reviews change. */
  rowIdsKey: string;
  /**
   * Staggers the loop start in [0, 1) so the second row does not visually align with the first.
   */
  phaseRatio: number;
}

const MARQUEE_VIEWPORT_PAD_PX = 96;
const MARQUEE_REPEAT_MAX = 48;

function buildCycleItems(
  items: readonly HomepageTestimonial[],
  repeatsInHalf: number,
): HomepageTestimonial[] {
  const r = Math.max(1, Math.min(MARQUEE_REPEAT_MAX, repeatsInHalf));
  const out: HomepageTestimonial[] = [];
  for (let i = 0; i < r; i += 1) out.push(...items);
  return out;
}

function getInitialTranslateX(
  direction: "left" | "right",
  half: number,
  phaseRatio: number,
): number {
  if (half <= 0) return 0;
  const p = ((phaseRatio % 1) + 1) % 1;
  if (direction === "left") return -p * half;
  return -(1 - p) * half;
}

/**
 * Infinite horizontal marquee. Repeats the row’s reviews inside one period until the period is
 * wider than the viewport, then duplicates that period for a seamless loop.
 */
function TestimonialMarqueeRow({
  items,
  direction,
  googleBusinessProfileUrl,
  onCardEnter,
  onCardLeave,
  pausedRef,
  prefersReducedMotion,
  enabled,
  rowIdsKey,
  phaseRatio,
}: TestimonialMarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const translateXRef = useRef(0);
  const rafRef = useRef(0);

  const count = items.length;
  const [repeatsInHalf, setRepeatsInHalf] = useState(1);

  const cycleItems = useMemo(
    () => (count > 0 ? buildCycleItems(items, repeatsInHalf) : []),
    [items, count, repeatsInHalf],
  );
  const loopItems = cycleItems.length > 0 ? [...cycleItems, ...cycleItems] : [];

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || count === 0) return;

    const half = track.scrollWidth / 2;
    const needWidth = container.clientWidth + MARQUEE_VIEWPORT_PAD_PX;

    if (half > 32 && half < needWidth && repeatsInHalf < MARQUEE_REPEAT_MAX) {
      setRepeatsInHalf((n) => n + 1);
      return;
    }

    if (half <= 32) return;

    translateXRef.current = getInitialTranslateX(direction, half, phaseRatio);
    track.style.transform = `translate3d(${translateXRef.current}px,0,0)`;
  }, [count, direction, rowIdsKey, repeatsInHalf, phaseRatio, loopItems.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => {
      setRepeatsInHalf(1);
    });
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, [rowIdsKey]);

  useEffect(() => {
    if (count === 0 || !enabled) return;

    const mag = prefersReducedMotion ? marqueeSpeedPxPerSec.reduced : marqueeSpeedPxPerSec.default;
    const dirFactor = prefersReducedMotion
      ? marqueeSpeedPxPerSec.reducedReverseFactor
      : marqueeSpeedPxPerSec.defaultReverseFactor;
    const signedSpeedPxPerSec = direction === "left" ? -mag : mag * dirFactor;

    let last = performance.now();

    function tick(now: number) {
      const track = trackRef.current;
      const dtMs = Math.min(48, now - last);
      last = now;

      if (track && !pausedRef.current && !document.hidden) {
        const half = track.scrollWidth / 2;
        if (half > 32) {
          translateXRef.current += (signedSpeedPxPerSec * dtMs) / 1000;
          if (direction === "right") {
            if (translateXRef.current >= 0) translateXRef.current -= half;
          } else if (-translateXRef.current >= half) {
            translateXRef.current += half;
          }
          track.style.transform = `translate3d(${translateXRef.current}px,0,0)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [count, direction, enabled, prefersReducedMotion, rowIdsKey, pausedRef]);

  if (count === 0) return null;

  return (
    <div ref={containerRef} className="relative w-full min-w-0 overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max flex-nowrap items-stretch gap-5 px-6 py-1 will-change-transform"
      >
        {loopItems.map((item, i) => (
          <GoogleReviewCardDark
            key={`${direction}-${item.id}-${i}`}
            item={item}
            businessProfileUrl={googleBusinessProfileUrl}
            onPointerEnterCard={onCardEnter}
            onPointerLeaveCard={onCardLeave}
          />
        ))}
      </div>
    </div>
  );
}

interface HomepageTestimonialsMobileScrollerProps {
  sectionLabelId: string;
  /** Optional hint for scroll affordance (screen readers). */
  describedById?: string;
  testimonials: readonly HomepageTestimonial[];
  googleBusinessProfileUrl: string;
  onCardEnter: () => void;
  onCardLeave: () => void;
}

function HomepageTestimonialsMobileScroller({
  sectionLabelId,
  describedById,
  testimonials,
  googleBusinessProfileUrl,
  onCardEnter,
  onCardLeave,
}: HomepageTestimonialsMobileScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  /** Mouse / pen drag-to-scroll (touch uses native pan-x). */
  const pointerDragRef = useRef<{
    pointerId: number;
    startClientX: number;
    startScrollLeft: number;
  } | null>(null);

  const count = testimonials.length;

  const testimonialIdsKey = useMemo(() => testimonials.map((t) => t.id).join("|"), [testimonials]);

  /** Open on the 2nd card so a slice of the 1st and 3rd are visible (when there are enough reviews). */
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el || count < 2) return;
    const second = el.children[1] as HTMLElement | undefined;
    if (!second) return;
    second.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
  }, [count, testimonialIdsKey]);

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

  return (
    <div className="w-full min-w-0 md:hidden">
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
          paddingInline: MOBILE_CAROUSEL_CENTER_PAD,
          scrollPaddingInline: MOBILE_CAROUSEL_CENTER_PAD,
        }}
        className={cn(
          "flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-0",
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
            onPointerEnterCard={onCardEnter}
            onPointerLeaveCard={onCardLeave}
            mobileCarousel
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
  const prefersReducedMotion = useReducedMotion();
  const regionId = useId();
  const [marqueePaused, setMarqueePaused] = useState(false);
  const [isMdUp, setIsMdUp] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    function apply() {
      setIsMdUp(mq.matches);
    }
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
    };
  }, []);

  const count = testimonials.length;

  const testimonialIdsKey = useMemo(() => testimonials.map((t) => t.id).join("|"), [testimonials]);

  useEffect(() => {
    pausedRef.current = marqueePaused;
  }, [marqueePaused]);

  const onCardEnter = useCallback(() => {
    if (leaveTimerRef.current != null) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setMarqueePaused(true);
  }, []);

  const onCardLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setMarqueePaused(false);
      leaveTimerRef.current = null;
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current != null) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  if (count === 0) return null;

  const entranceDuration =
    prefersReducedMotion === true
      ? Math.min(0.06, motionDurations.fast * 0.25)
      : motionDurations.cinematicSlow;

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
        Reviews are in a horizontal row. Swipe sideways with one finger to see more.
      </p>
      <motion.div
        className="w-full min-w-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08, margin: "0px 0px 22% 0px" }}
        variants={revealFirmVariants}
        transition={{ duration: entranceDuration, ease: cinematicEase }}
      >
        <HomepageTestimonialsMobileScroller
          sectionLabelId={`${regionId}-label`}
          describedById={`${regionId}-reviews-scroll-hint`}
          testimonials={testimonials}
          googleBusinessProfileUrl={googleBusinessProfileUrl}
          onCardEnter={onCardEnter}
          onCardLeave={onCardLeave}
        />
        <div className="hidden min-w-0 md:block">
          <TestimonialMarqueeRow
            key={testimonialIdsKey}
            items={testimonials}
            direction="left"
            googleBusinessProfileUrl={googleBusinessProfileUrl}
            onCardEnter={onCardEnter}
            onCardLeave={onCardLeave}
            pausedRef={pausedRef}
            prefersReducedMotion={prefersReducedMotion}
            enabled={isMdUp}
            rowIdsKey={testimonialIdsKey}
            phaseRatio={0}
          />
        </div>
      </motion.div>
    </section>
  );
}

export { HomepageTestimonialsCarouselSection };
