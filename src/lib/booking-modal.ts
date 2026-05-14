import { defaultBookingModalCopy } from "@/config/booking-modal";
import type { BookingModalChannelLink, BookingModalPayload } from "@/types/booking-modal";
import type { RegionConfig } from "@/types/region";

function isUsableHttpUrl(value: string): boolean {
  const t = value.trim();
  return t.startsWith("http://") || t.startsWith("https://");
}

function normalizeWhatsAppHref(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits.length) return null;
  return `https://wa.me/${digits}`;
}

function channelOrNull(href: string | null, label: string): BookingModalChannelLink | null {
  if (!href || !isUsableHttpUrl(href)) return null;
  return { href: href.trim(), label };
}

export function buildBookingModalPayload(regionConfig: RegionConfig): BookingModalPayload {
  const { contact } = regionConfig;

  const ig = contact.instagramUrl.trim();

  const facebookHref =
    contact.facebookBookUrl && isUsableHttpUrl(contact.facebookBookUrl)
      ? contact.facebookBookUrl.trim()
      : contact.messengerUrl && isUsableHttpUrl(contact.messengerUrl)
        ? contact.messengerUrl.trim()
        : null;

  const whatsappHref = normalizeWhatsAppHref(contact.whatsappNumber);

  return {
    copy: defaultBookingModalCopy,
    channels: {
      facebook: channelOrNull(facebookHref, "BOOK ON FACEBOOK"),
      instagram: channelOrNull(ig && isUsableHttpUrl(ig) ? ig : null, "BOOK ON INSTAGRAM"),
      whatsapp: channelOrNull(whatsappHref, "BOOK ON WHATSAPP"),
    },
  };
}
