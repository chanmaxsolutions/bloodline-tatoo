import { buildGlobalHeroTrustProofChips } from "@/config/global-hero-trust-proof";
import { HeroTrustBrandMark } from "@/components/shared/hero-trust-brand-mark";
import { cn } from "@/lib/utils";

type HeroTrustProofStripTone = "default" | "on-accent";

interface HeroTrustProofStripProps {
  tone?: HeroTrustProofStripTone;
  /** Set false for a metrics-only strip without platform marks. */
  showBrandMarks?: boolean;
  className?: string;
}

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

function HeroTrustProofStrip({
  tone = "default",
  showBrandMarks = true,
  className,
}: HeroTrustProofStripProps) {
  const trustChips = buildGlobalHeroTrustProofChips();
  const colors = toneClassNames[tone];

  return (
    <ul
      aria-label="Trust and audience proof"
      className={cn(
        "list-none",
        "flex w-full max-w-full flex-nowrap items-center justify-center gap-4 overflow-x-auto py-0.5 sm:gap-6 md:gap-8",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {trustChips.map((chip) => {
        const metrics = (
          <span
            className={cn(
              "whitespace-nowrap font-sans text-base leading-snug md:leading-snug",
              colors.metrics,
            )}
          >
            <span className="inline-flex items-center gap-1">
              <span className={cn("font-heading font-semibold", colors.accent)}>{chip.accent}</span>
              {chip.rest ? (
                <span
                  className={cn(
                    "font-heading font-semibold",
                    chip.rest === "★" ? colors.star : colors.rest,
                  )}
                >
                  {chip.rest}
                </span>
              ) : null}
            </span>
            {chip.suffix ? <span className={colors.suffix}>{chip.suffix}</span> : null}
          </span>
        );

        const brandMark = showBrandMarks ? (
          <HeroTrustBrandMark
            brand={chip.brand}
            className={cn("size-6 sm:size-7", colors.brandMark)}
          />
        ) : null;

        const cluster = (
          <span className="flex items-center gap-2.5 sm:gap-3">
            {brandMark}
            {metrics}
          </span>
        );

        return (
          <li
            key={chip.id}
            className={cn(
              "shrink-0 items-center",
              chip.id === "google" ? "flex" : "hidden md:flex",
            )}
          >
            {cluster}
          </li>
        );
      })}
    </ul>
  );
}

export { HeroTrustProofStrip };
