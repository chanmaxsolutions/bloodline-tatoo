"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookingBrandChannelIcon } from "@/components/shared/channel-brand-glyphs";
import { cn } from "@/lib/utils";
import type { BookingModalChannelLink } from "@/types/booking-modal";

type ChannelVariant = "facebook" | "instagram" | "whatsapp";

const channelCardSkin = cn(
  "rounded-xl border border-white/5 bg-surface-strong/90",
  "motion-fast outline-none transition-[border-color,background-color]",
  "hover:border-white/10 hover:bg-surface-strong",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated",
);

const channelLinkLayout = cn(
  "group flex min-h-0 flex-row items-center justify-start gap-3 px-3 py-3",
  "sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:min-h-[9.75rem] sm:px-3 sm:py-5 md:min-h-[10.25rem]",
);

const packageBase = cn(channelCardSkin, channelLinkLayout);

interface BookingChannelLinkProps {
  channel: BookingModalChannelLink;
  channelVariant: ChannelVariant;
  channelBadge?: string;
  channelBadgeDesktop?: string;
}

function BookingChannelLink({
  channel,
  channelVariant,
  channelBadge,
  channelBadgeDesktop,
}: BookingChannelLinkProps) {
  const icon = <BookingBrandChannelIcon brand={channelVariant} />;

  const showMobileBadge = Boolean(channelBadge?.trim());
  const showDesktopBadge = Boolean(channelBadgeDesktop?.trim());

  return (
    <Link
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(packageBase, showDesktopBadge && "sm:relative sm:overflow-visible sm:pt-3")}
    >
      <span className="flex shrink-0 items-center justify-center">{icon}</span>
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-row items-center gap-2",
          "sm:flex-col sm:flex-none sm:items-center sm:justify-center sm:gap-2",
        )}
      >
        <span
          className={cn(
            "wrap-break-word text-left font-heading text-lg font-bold uppercase leading-snug tracking-tight text-foreground/88 max-[374px]:leading-tight min-[375px]:text-2xl sm:text-center sm:text-xl md:text-2xl",
            "min-w-0 sm:flex-none",
            showMobileBadge ? "min-w-0 shrink sm:shrink-0" : "min-w-0 max-sm:flex-1",
          )}
        >
          {channel.label}
        </span>
        {showMobileBadge ? (
          <span className="max-sm:inline-flex max-sm:shrink-0 rounded-full bg-accent px-2 py-0.5 font-heading text-xs font-semibold uppercase leading-tight tracking-normal text-background shadow-sm sm:hidden">
            {channelBadge}
          </span>
        ) : null}
      </div>
      <ArrowUpRight
        className="size-5 shrink-0 text-muted-foreground motion-fast group-hover:text-foreground sm:hidden"
        aria-hidden
      />
      {showDesktopBadge ? (
        <span className="pointer-events-none absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-accent px-2 py-0.5 font-heading text-sm font-semibold uppercase leading-tight tracking-normal text-background shadow-sm sm:inline-flex">
          {channelBadgeDesktop}
        </span>
      ) : null}
    </Link>
  );
}

function BookingChannelPlaceholder() {
  return (
    <div
      className={cn(
        channelCardSkin,
        "pointer-events-none flex min-h-16 flex-col items-center justify-center gap-2 border-dashed border-border bg-surface-strong/40 px-3 py-4 text-center text-muted-foreground sm:min-h-[9.75rem] sm:py-5 md:min-h-[10.25rem]",
      )}
      aria-hidden
    >
      <span className="font-heading text-xs uppercase tracking-widest">—</span>
    </div>
  );
}

export { BookingChannelLink, BookingChannelPlaceholder };
