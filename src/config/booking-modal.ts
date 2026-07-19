import type { BookingModalCopy } from "@/types/booking-modal";

const sharedBookingChannelBadges = {
  whatsappChannelBadge: "Fastest",
  whatsappChannelBadgeDesktop: "Fastest replies",
} as const;

export const regionalBookingModalCopy: BookingModalCopy = {
  title: "CHOOSE A CHANNEL TO BOOK",
  ...sharedBookingChannelBadges,
};

export const globalBookingModalCopy: BookingModalCopy = {
  title: "CHOOSE A STUDIO TO BOOK",
  ...sharedBookingChannelBadges,
};
