export interface BookingModalChannelLink {
  href: string;
  label: string;
}

export interface BookingModalChannels {
  facebook: BookingModalChannelLink | null;
  instagram: BookingModalChannelLink | null;
  whatsapp: BookingModalChannelLink | null;
}

export interface BookingModalCopy {
  title: string;
  body: string;
  noteLabel: string;
  noteBody: string;
}

export interface BookingModalPayload {
  channels: BookingModalChannels;
  copy: BookingModalCopy;
}
