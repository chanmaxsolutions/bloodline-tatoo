import type { TattooStyleSlug } from "@/types/tattoo-style";

export interface BookingModalChannelLink {
  href: string;
  label: string;
}

export interface BookingModalChannels {
  facebook: BookingModalChannelLink | null;
  instagram: BookingModalChannelLink | null;
  whatsapp: BookingModalChannelLink | null;
}

export interface BookingModalStudioLink {
  id: string;
  href: string;
  label: string;
  /** When false, tile is shown but not clickable (global site + style filter). */
  isAvailable?: boolean;
  /** Shown below the tile and in a hover tooltip when unavailable. */
  unavailableReason?: string;
}

export type BookingModalLayout = "social-channels" | "studio-regions";

export interface BookingModalCopy {
  title: string;
  body: string;
  noteLabel: string;
  noteBody: string;
  /** WhatsApp tile: short badge on narrow viewports (inline before arrow). */
  whatsappChannelBadge: string;
  /** WhatsApp tile: pill on top border from `sm` up (longer copy). */
  whatsappChannelBadgeDesktop: string;
}

export interface BookingModalPayload {
  layout: BookingModalLayout;
  channels: BookingModalChannels;
  studioRegions: BookingModalStudioLink[];
  copy: BookingModalCopy;
}

export interface BookingModalOpenOptions {
  /** On the global site, limits studio tiles to regions that offer this style. */
  tattooStyleSlug?: TattooStyleSlug;
  /** GA4: UI surface that opened the booking modal. */
  componentName?: string;
  /** GA4: visible CTA label on the trigger control. */
  ctaText?: string;
}
