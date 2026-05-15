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
