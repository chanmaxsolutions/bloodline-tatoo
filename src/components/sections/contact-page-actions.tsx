"use client";

import Link from "next/link";
import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import { cn } from "@/lib/utils";
import type { BookingModalChannelLink, BookingModalChannels } from "@/types/booking-modal";
import type { ContactPageStudioLink } from "@/types/contact-page";

interface ContactPageActionsProps {
  isGlobal: boolean;
  channels: BookingModalChannels;
  studios: readonly ContactPageStudioLink[];
}

const tileGridClassName = "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5";

const tileBaseClassName = cn(
  "group relative flex min-h-[9.5rem] flex-col justify-between gap-5 rounded-xl border border-border/50 bg-surface-elevated/90 p-6 text-left md:min-h-[10.5rem] md:p-7",
  "motion-fast outline-none transition-[border-color,background-color]",
  "hover:border-white/15 hover:bg-surface-elevated",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

interface ContactStudioTileProps {
  studio: ContactPageStudioLink;
}

function ContactStudioTile({ studio }: ContactStudioTileProps) {
  return (
    <Link href={studio.href} className={tileBaseClassName}>
      <div className="flex w-full flex-col gap-2">
        <p className="font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-4xl">
          {studio.studioName}
        </p>
        <p className="max-w-sm font-sans text-base leading-relaxed text-muted-foreground">
          WhatsApp, Instagram, and Facebook for this studio.
        </p>
      </div>
      <TileLinkArrow className="ml-auto" />
    </Link>
  );
}

interface ContactChannelTileProps {
  channel: BookingModalChannelLink;
}

function contactChannelTileLabel(label: string): string {
  return label.replace(/^BOOK ON /i, "CONTACT ON ");
}

function channelTileDescription(displayLabel: string): string {
  const channelName = displayLabel.replace(/^CONTACT ON /i, "");
  return `Message the studio on ${channelName}.`;
}

function ContactChannelTile({ channel }: ContactChannelTileProps) {
  return (
    <Link
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={tileBaseClassName}
    >
      <div className="flex w-full flex-col gap-2">
        <p className="font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground md:text-3xl">
          {contactChannelTileLabel(channel.label)}
        </p>
        <p className="font-sans text-base leading-relaxed text-muted-foreground">
          {channelTileDescription(contactChannelTileLabel(channel.label))}
        </p>
      </div>
      <TileLinkArrow className="ml-auto" />
    </Link>
  );
}

function ContactPageActions({ isGlobal, channels, studios }: ContactPageActionsProps) {
  if (isGlobal) {
    return (
      <div className={tileGridClassName} role="list" aria-label="Studio locations">
        {studios.map((studio) => (
          <div key={studio.region} role="listitem" className="min-w-0">
            <ContactStudioTile studio={studio} />
          </div>
        ))}
      </div>
    );
  }

  const channelEntries: BookingModalChannelLink[] = [
    channels.whatsapp,
    channels.instagram,
    channels.facebook,
  ].filter((channel): channel is BookingModalChannelLink => channel !== null);

  return (
    <div
      className={cn(
        tileGridClassName,
        channelEntries.length === 1 && "mx-auto max-w-md",
        channelEntries.length === 2 && "lg:max-w-4xl lg:mx-auto",
      )}
      role="list"
      aria-label="Booking channels"
    >
      {channelEntries.map((channel) => (
        <div key={channel.label} role="listitem" className="min-w-0">
          <ContactChannelTile channel={channel} />
        </div>
      ))}
    </div>
  );
}

export { ContactPageActions };
