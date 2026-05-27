"use client";

import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import {
  ChannelBrandGlyph,
  channelBrandFromLabel,
  channelBrandAccentClassName,
} from "@/components/shared/channel-brand-glyphs";
import { cn } from "@/lib/utils";

interface ContactChannelTileMarkProps {
  channelLabel: string;
  className?: string;
}

const contactChannelIconWrapClassName = cn(
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border md:size-12",
  "border-white/10 bg-surface-elevated",
  channelBrandAccentClassName,
);

function ContactChannelTileMark({ channelLabel, className }: ContactChannelTileMarkProps) {
  const brand = channelBrandFromLabel(channelLabel);

  if (!brand) {
    return <TileLinkArrow className={className} />;
  }

  return (
    <span aria-hidden className={cn(contactChannelIconWrapClassName, className)}>
      <ChannelBrandGlyph brand={brand} className="size-5 md:size-6" />
    </span>
  );
}

export { ContactChannelTileMark, contactChannelIconWrapClassName };
