"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TrustpilotEvaluateLink } from "@/types/trustpilot";

const trustpilotGreenIconClassName =
  "[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(89%)_saturate(431%)_hue-rotate(115deg)_brightness(95%)_contrast(101%)]";

interface ReviewsTrustpilotInviteWidgetProps {
  links: readonly TrustpilotEvaluateLink[];
  isGlobal: boolean;
  className?: string;
}

/**
 * Compact Trustpilot invite above the Google reviews grid — not a full closing CTA band.
 */
function ReviewsTrustpilotInviteWidget({
  links,
  isGlobal,
  className,
}: ReviewsTrustpilotInviteWidgetProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <aside
      aria-label="Leave a Trustpilot review"
      className={cn(
        "flex flex-col items-center gap-3 border-b border-border/40 pt-12 pb-12 text-center md:gap-4 md:pt-16 md:pb-16",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-2.5",
          isGlobal && "max-w-2xl",
        )}
      >
        {links.map((studio) => {
          const label = isGlobal ? `Trustpilot — ${studio.studioName}` : "Review us on Trustpilot";

          return (
            <Link
              key={studio.region}
              href={studio.evaluateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-auto max-w-full gap-1.5 border-[#00b67a] bg-white text-[#191919]",
                "hover:bg-[#e8e8e8] hover:text-[#191919]",
                "focus-visible:ring-[#00b67a] focus-visible:ring-offset-surface",
              )}
              aria-label={`${label} (opens in a new tab)`}
            >
              {!isGlobal ? <span>Review us on</span> : null}
              <Image
                src="/trustpilot-svgrepo-com.svg"
                alt=""
                width={18}
                height={18}
                className={cn("size-[18px] shrink-0", trustpilotGreenIconClassName)}
                aria-hidden
              />
              <span>{isGlobal ? studio.studioName : "Trustpilot"}</span>
            </Link>
          );
        })}
      </div>

      <p className="max-w-[16rem] font-sans text-sm leading-relaxed text-muted-foreground md:max-w-xs md:text-base md:leading-snug">
        {isGlobal
          ? "Also leave a review on Trustpilot for the studio you visited."
          : "Happy with your session? You can also leave a short review on Trustpilot."}
      </p>
    </aside>
  );
}

export { ReviewsTrustpilotInviteWidget };
