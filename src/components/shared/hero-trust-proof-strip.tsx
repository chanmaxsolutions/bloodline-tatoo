"use client";

import Link from "next/link";
import { trackGoogleReviewClick } from "@/lib/gtag";
import { buildGlobalHeroTrustProofChips } from "@/config/global-hero-trust-proof";
import { HeroTrustBrandMark } from "@/components/shared/hero-trust-brand-mark";
import { cn } from "@/lib/utils";
import type { GoogleBusinessProofPresentation } from "@/types/google-business-proof";
import type { GlobalHeroTrustProofBrand } from "@/types/global-hero-trust-proof";

type HeroTrustProofStripTone = "default" | "on-accent";
type HeroTrustProofStripVariant = "default" | "compact";
type HeroTrustProofChipsScope = "all" | "google-only";

interface HeroTrustProofStripProps {
  tone?: HeroTrustProofStripTone;
  /** `compact` — brand mark + metric only (no platform suffix copy). */
  variant?: HeroTrustProofStripVariant;
  /** Limit which chips render (e.g. closing CTA shows Google only). */
  chipsScope?: HeroTrustProofChipsScope;
  /** Set false for a metrics-only strip without platform marks. */
  showBrandMarks?: boolean;
  /** Region-aware Google proof with link target (hero / closing bands). */
  presentation?: GoogleBusinessProofPresentation;
  /** GA4 `component_name` for external Google review clicks. */
  analyticsComponentName?: string;
  className?: string;
}

const trustProofBrandAriaLabel: Record<GlobalHeroTrustProofBrand, string> = {
  google: "Google rating",
  instagram: "Instagram followers",
  youtube: "YouTube subscribers",
  facebook: "Facebook followers",
};

const toneClassNames: Record<
  HeroTrustProofStripTone,
  {
    metrics: string;
    accent: string;
    rest: string;
    suffix: string;
    star: string;
    brandMark?: string;
  }
> = {
  default: {
    metrics: "text-foreground",
    accent: "text-foreground",
    rest: "text-foreground",
    suffix: "text-muted-foreground",
    star: "text-amber-400",
    brandMark: undefined,
  },
  "on-accent": {
    metrics: "text-accent-foreground",
    accent: "text-accent-foreground",
    rest: "text-accent-foreground",
    suffix: "text-accent-foreground",
    star: "text-amber-800",
    brandMark: "drop-shadow-[0_1px_3px_rgba(11,11,13,0.32)]",
  },
};

const heroTrustProofLinkClassName = cn(
  "inline-flex rounded-sm outline-none transition-opacity motion-fast",
  "hover:opacity-90",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-strong",
);

function HeroTrustProofStrip({
  tone = "default",
  variant = "default",
  chipsScope = "all",
  showBrandMarks = true,
  presentation,
  analyticsComponentName = "HeroTrustProofStrip",
  className,
}: HeroTrustProofStripProps) {
  const trustChips = presentation
    ? [presentation.chip]
    : buildGlobalHeroTrustProofChips().filter(
        (chip) => chipsScope === "all" || chip.id === "google",
      );
  const colors = toneClassNames[tone];
  const isCompact = variant === "compact" || Boolean(presentation);
  const isSingleChip = trustChips.length === 1;
  const isGoogleOnlyExpanded =
    isCompact && isSingleChip && (chipsScope === "google-only" || Boolean(presentation));
  const googleExpandedCaptionClassName = "font-sans text-lg font-medium leading-none sm:text-xl";

  return (
    <ul
      aria-label="Trust and audience proof"
      className={cn(
        "list-none",
        "flex w-full max-w-full flex-nowrap items-center justify-center overflow-x-auto",
        isCompact ? "gap-0 py-1 sm:py-1.5" : "gap-4 py-0.5 sm:gap-6 md:gap-8",
        "scrollbar-none",
        className,
      )}
    >
      {trustChips.map((chip, chipIndex) => {
        const metricLabel = [chip.accent, chip.rest, chip.suffix, chip.suffixLabel]
          .filter(Boolean)
          .join("");
        const itemAriaLabel = `${metricLabel} ${trustProofBrandAriaLabel[chip.brand]}`;
        const isLastChip = chipIndex === trustChips.length - 1;
        const showSuffix =
          Boolean(chip.suffix || chip.suffixLabel) && (!isCompact || isGoogleOnlyExpanded);

        const metrics = (
          <span
            className={cn(
              "whitespace-nowrap",
              isGoogleOnlyExpanded
                ? "inline-flex items-baseline gap-x-0.5 font-heading text-lg font-semibold tabular-nums leading-none tracking-tight sm:text-xl"
                : isCompact
                  ? "font-heading text-lg font-semibold tabular-nums leading-none tracking-tight sm:text-xl"
                  : "font-sans text-base leading-snug md:leading-snug",
              colors.metrics,
            )}
          >
            <span className="inline-flex items-baseline gap-1">
              <span
                className={cn(
                  isCompact || isGoogleOnlyExpanded ? undefined : "font-heading font-semibold",
                  colors.accent,
                )}
              >
                {chip.accent}
              </span>
              {chip.rest ? (
                <span
                  className={cn(
                    !isGoogleOnlyExpanded && isCompact && "text-base sm:text-lg",
                    !isGoogleOnlyExpanded && !isCompact && "font-heading font-semibold",
                    chip.rest === "★" ? colors.star : colors.rest,
                  )}
                >
                  {chip.rest}
                </span>
              ) : null}
            </span>
            {showSuffix && chip.suffix ? (
              <span
                className={cn(
                  isGoogleOnlyExpanded && googleExpandedCaptionClassName,
                  colors.suffix,
                )}
              >
                {chip.suffix}
              </span>
            ) : null}
            {showSuffix && chip.suffixLabel ? (
              <span
                className={cn(
                  isGoogleOnlyExpanded ? googleExpandedCaptionClassName : "font-sans font-normal",
                  !isGoogleOnlyExpanded && "leading-snug",
                  colors.suffix,
                )}
              >
                {chip.suffixLabel}
              </span>
            ) : null}
          </span>
        );

        const brandMark = showBrandMarks ? (
          <HeroTrustBrandMark
            brand={chip.brand}
            className={cn(
              isGoogleOnlyExpanded
                ? "size-6 sm:size-7"
                : isCompact
                  ? "size-7 sm:size-8"
                  : "size-6 sm:size-7",
              colors.brandMark,
            )}
          />
        ) : null;

        const cluster = (
          <span
            className={cn(
              "inline-flex items-center",
              isGoogleOnlyExpanded ? "gap-2.5 sm:gap-3" : "gap-2.5 sm:gap-3",
            )}
          >
            {brandMark}
            {metrics}
          </span>
        );

        function handleExternalGoogleClick(): void {
          if (!presentation?.isExternalLink) return;

          trackGoogleReviewClick({
            componentName: analyticsComponentName,
            linkType: "business_profile",
            destinationUrl: presentation.href,
            ctaText: metricLabel,
          });
        }

        const linkedCluster =
          presentation && chip.id === "google" ? (
            presentation.isExternalLink ? (
              <a
                href={presentation.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalGoogleClick}
                className={heroTrustProofLinkClassName}
                aria-label={`${metricLabel} on Google — opens in a new tab`}
              >
                {cluster}
              </a>
            ) : (
              <Link
                href={presentation.href}
                className={heroTrustProofLinkClassName}
                aria-label={`${metricLabel} on Google`}
              >
                {cluster}
              </Link>
            )
          ) : (
            cluster
          );

        return (
          <li
            key={chip.id}
            aria-label={
              isCompact && !isGoogleOnlyExpanded && !presentation ? itemAriaLabel : undefined
            }
            className={cn(
              "flex shrink-0 items-center",
              isCompact &&
                !isSingleChip &&
                "px-4 sm:px-5 md:px-6 not-last:border-r not-last:border-border/35",
              isCompact && !isSingleChip && isLastChip && "pr-0",
              isCompact && !isSingleChip && chipIndex === 0 && "pl-0",
              !isCompact && chip.id !== "google" && "hidden md:flex",
            )}
          >
            {linkedCluster}
          </li>
        );
      })}
    </ul>
  );
}

export { HeroTrustProofStrip };
