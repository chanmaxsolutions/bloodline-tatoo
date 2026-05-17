"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/** Roughly six lines of body copy at reviews-page card width. */
const LONG_REVIEW_CHAR_THRESHOLD = 260;

interface GoogleReviewCardExpandableTextProps {
  text: string;
}

function GoogleReviewCardExpandableText({ text }: GoogleReviewCardExpandableTextProps) {
  const bodyId = useId();
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.trim().length > LONG_REVIEW_CHAR_THRESHOLD;
  const isCollapsed = isLong && !isExpanded;

  return (
    <div className="flex flex-col gap-2">
      <p
        id={bodyId}
        className={cn(
          "font-sans text-sm leading-relaxed text-foreground/88 text-pretty md:text-base",
          isCollapsed && "line-clamp-6",
        )}
      >
        {text}
      </p>
      {isLong ? (
        <button
          type="button"
          className="w-fit font-sans text-xs font-medium text-muted-foreground underline decoration-white/25 underline-offset-2 outline-none transition-colors motion-fast hover:text-foreground hover:decoration-white/40 focus-visible:ring-2 focus-visible:ring-ring/60"
          aria-expanded={isExpanded}
          aria-controls={bodyId}
          onClick={() => {
            setIsExpanded((value) => !value);
          }}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

export { GoogleReviewCardExpandableText, LONG_REVIEW_CHAR_THRESHOLD };
