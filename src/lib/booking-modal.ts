import { globalBookingModalCopy, regionalBookingModalCopy } from "@/config/booking-modal";
import { regionsBySlug } from "@/config/regions";
import type {
  BookingModalChannelLink,
  BookingModalPayload,
  BookingModalStudioLink,
} from "@/types/booking-modal";
import { isTattooStyleAvailableInRegion } from "@/config/region-tattoo-style-availability";
import type { TattooStyleSlug } from "@/types/tattoo-style";
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

function studioUnavailableReason(regionSlug: RegionSlug): string {
  return `Not offered at ${regionsBySlug[regionSlug].regionName}`;
}

function applyStudioAvailabilityForTattooStyle(
  studioRegions: BookingModalStudioLink[],
  tattooStyleSlug: TattooStyleSlug,
): BookingModalStudioLink[] {
  return studioRegions.map((studio) => {
    const regionSlug = studio.id as RegionSlug;
    const isAvailable = isTattooStyleAvailableInRegion(tattooStyleSlug, regionSlug);

    return {
      ...studio,
      isAvailable,
      unavailableReason: isAvailable ? undefined : studioUnavailableReason(regionSlug),
    };
  });
}

function bookingModalPayloadForOpen(
  basePayload: BookingModalPayload,
  tattooStyleSlug?: TattooStyleSlug,
): BookingModalPayload {
  if (!tattooStyleSlug || basePayload.layout !== "studio-regions") {
    return basePayload;
  }

  return {
    ...basePayload,
    studioRegions: applyStudioAvailabilityForTattooStyle(
      basePayload.studioRegions,
      tattooStyleSlug,
    ),
  };
}

export {
  bookingModalPayloadForOpen,
  applyStudioAvailabilityForTattooStyle,
  studioUnavailableReason,
};
