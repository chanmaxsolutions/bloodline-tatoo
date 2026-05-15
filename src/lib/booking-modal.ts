import { globalBookingModalCopy, regionalBookingModalCopy } from "@/config/booking-modal";
import { regionsBySlug } from "@/config/regions";
import type {
  BookingModalChannelLink,
  BookingModalPayload,
  BookingModalStudioLink,
} from "@/types/booking-modal";
import type { RegionConfig, RegionSlug } from "@/types/region";

const studioRegionOrder: RegionSlug[] = ["bangkok", "phuket", "bali"];

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

function buildSocialChannelsPayload(regionConfig: RegionConfig): BookingModalPayload {
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
    layout: "social-channels",
    copy: regionalBookingModalCopy,
    studioRegions: [],
    channels: {
      facebook: channelOrNull(facebookHref, "BOOK ON FACEBOOK"),
      instagram: channelOrNull(ig && isUsableHttpUrl(ig) ? ig : null, "BOOK ON INSTAGRAM"),
      whatsapp: channelOrNull(whatsappHref, "BOOK ON WHATSAPP"),
    },
  };
}

function buildGlobalStudioRegionsPayload(): BookingModalPayload {
  const studioRegions: BookingModalStudioLink[] = studioRegionOrder.map((slug) => {
    const config = regionsBySlug[slug];
    return {
      id: slug,
      href: `https://${config.studioBookingHost ?? config.domain}`,
      label: `BOOK ON ${config.regionName.toUpperCase()}`,
    };
  });

  return {
    layout: "studio-regions",
    copy: globalBookingModalCopy,
    studioRegions,
    channels: {
      facebook: null,
      instagram: null,
      whatsapp: null,
    },
  };
}

export function buildBookingModalPayload(regionConfig: RegionConfig): BookingModalPayload {
  if (regionConfig.slug === "global") {
    return buildGlobalStudioRegionsPayload();
  }

  return buildSocialChannelsPayload(regionConfig);
}
