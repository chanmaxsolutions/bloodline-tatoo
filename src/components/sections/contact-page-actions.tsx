"use client";

import Link from "next/link";
import { ContactChannelTileMark } from "@/components/shared/contact-channel-tile-mark";
import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import { bookingChannelFromLabel, trackAppointmentChannelClick } from "@/lib/gtag";
import { cn } from "@/lib/utils";
import type { BookingModalChannelLink, BookingModalChannels } from "@/types/booking-modal";
import type { ContactPageStudioLink } from "@/types/contact-page";

interface ContactPageActionsProps {
  isGlobal: boolean;
  channels: BookingModalChannels;
  studios: readonly ContactPageStudioLink[];
}

const tileGridClassName =
  "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6";

const channelTileClassName = cn(
  "group relative flex h-full flex-col gap-5 rounded-xl border border-border/50 bg-surface-elevated/90 p-6 text-left md:gap-6 md:p-7",
  "motion-fast outline-none transition-[border-color,background-color]",
  "hover:border-white/8 hover:bg-surface-elevated",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const studioTileClassName = cn(channelTileClassName, "min-h-[9.5rem] md:min-h-[10.5rem]");

interface ContactStudioTileProps {
  studio: ContactPageStudioLink;
}

function ContactStudioTile({ studio }: ContactStudioTileProps) {
  return (
    <Link href={studio.href} className={studioTileClassName}>
      <TileLinkArrow className="pointer-events-none absolute right-6 top-6 z-10 md:right-7 md:top-7" />
      <div className="flex w-full flex-col gap-2 pr-14 md:pr-16">
        <p className="font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-4xl">
          {studio.studioName}
        </p>
        <p className="max-w-sm font-sans text-base leading-relaxed text-muted-foreground">
          WhatsApp, Instagram, and Facebook for this studio.
        </p>
      </div>
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
  const displayLabel = contactChannelTileLabel(channel.label);

  function handleChannelClick(): void {
    const bookingChannel = bookingChannelFromLabel(channel.label);
    if (!bookingChannel) return;

    trackAppointmentChannelClick({
      channel: bookingChannel,
      destinationUrl: channel.href,
      ctaText: displayLabel,
      componentName: "ContactPageActions",
      entryPoint: "contact_page",
    });
  }

  return (
    <Link
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleChannelClick}
      className={channelTileClassName}
    >
      <ContactChannelTileMark channelLabel={displayLabel} />
      <div className="flex flex-col gap-2 md:gap-2.5">
        <p className="font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground md:text-3xl">
          {displayLabel}
        </p>
        <p className="font-sans text-base leading-relaxed text-pretty text-muted-foreground">
          {channelTileDescription(displayLabel)}
        </p>
      </div>
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
