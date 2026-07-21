import type { BookingModalCopy } from "@/types/booking-modal";

const sharedBookingNote = {
  noteLabel: "PLEASE NOTE",
  noteBody:
    "We do not book or negotiate over email. Instagram and Facebook are fine; WhatsApp is usually the fastest way to hear back.",
  whatsappChannelBadge: "Fastest",
  whatsappChannelBadgeDesktop: "Fastest replies",
} as const;

export const regionalBookingModalCopy: BookingModalCopy = {
  title: "CHOOSE A CHANNEL TO BOOK",
  body: "We confirm slots in DMs only—not over email. Tap a channel to open Instagram, Facebook, or WhatsApp and message us there.",
  ...sharedBookingNote,
};

export const globalBookingModalCopy: BookingModalCopy = {
  title: "CHOOSE A STUDIO TO BOOK",
  body: "Select Bangkok, Phuket, or Bali. You'll open that studio's site to message us on Instagram, Facebook, or WhatsApp.",
  ...sharedBookingNote,
};
