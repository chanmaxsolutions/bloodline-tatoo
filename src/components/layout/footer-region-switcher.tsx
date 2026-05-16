"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RegionFlagMark } from "@/components/shared/region-flag-mark";
import {
  buildFooterRegionSwitcherOptions,
  footerRegionSwitcherTitle,
} from "@/config/footer-region-switcher";
import { cn } from "@/lib/utils";
import type { RegionSlug } from "@/types/region";

const studioSwitcherTitleClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const studioSwitcherTitleCenteredClassName = cn(studioSwitcherTitleClassName, "text-center");

const studioListItemClassName = cn(
  "group flex w-full items-center gap-3 py-0.5 motion-fast outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const studioListFlagClassName = cn(
  "size-7 shrink-0 sm:size-8",
  "opacity-80 motion-fast group-hover:opacity-100 group-focus-visible:opacity-100",
);

const studioListLabelClassName = cn(
  "font-heading text-lg font-bold uppercase leading-none tracking-tight text-muted-foreground motion-fast md:text-xl",
  "group-hover:text-foreground group-focus-visible:text-foreground",
);

const studioChipSharedClassName = cn(
  "flex flex-col items-center justify-center gap-1.5 rounded-lg border px-1.5 py-2 motion-fast outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const studioChipCenteredClassName = cn(
  studioChipSharedClassName,
  "size-16 shrink-0 border-border/50 bg-surface-elevated/80 sm:size-18",
  "hover:border-white/12 hover:bg-surface-elevated",
);

const studioChipFlagClassName = "size-8 sm:size-9";

const studioChipLabelClassName =
  "font-heading text-sm font-bold uppercase leading-none tracking-tight text-foreground";

interface FooterRegionSwitcherProps {
  currentRegion: RegionSlug;
  /** `column` — vertical list with flag + label. `centered` — compact chip row. */
  layout?: "column" | "centered";
}

function FooterRegionSwitcher({ currentRegion, layout = "column" }: FooterRegionSwitcherProps) {
  const pathname = usePathname();
  const options = buildFooterRegionSwitcherOptions(pathname, currentRegion);
  const isColumnLayout = layout === "column";

  if (options.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-col",
        isColumnLayout ? "items-start gap-4 md:gap-6" : "items-center gap-3 md:gap-4",
      )}
    >
      <p
        className={
          isColumnLayout ? studioSwitcherTitleClassName : studioSwitcherTitleCenteredClassName
        }
      >
        {footerRegionSwitcherTitle()}
      </p>
      <ul
        className={cn(
          "m-0 list-none p-0",
          isColumnLayout
            ? "flex w-full flex-col gap-2.5 md:gap-4"
            : "flex flex-wrap justify-center gap-2.5 sm:gap-3",
        )}
        aria-label="Visit another Bloodline regional site"
      >
        {options.map((option) => {
          if (isColumnLayout) {
            return (
              <li key={option.slug} className="w-full">
                <Link href={option.href} className={studioListItemClassName}>
                  <RegionFlagMark flag={option.flag} className={studioListFlagClassName} />
                  <span className={studioListLabelClassName}>{option.label}</span>
                </Link>
              </li>
            );
          }

          return (
            <li key={option.slug} className="shrink-0">
              <Link href={option.href} className={studioChipCenteredClassName}>
                <RegionFlagMark flag={option.flag} className={studioChipFlagClassName} />
                <span className={studioChipLabelClassName}>{option.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { FooterRegionSwitcher };
