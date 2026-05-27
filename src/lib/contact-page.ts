import { contactPageContentForRegion } from "@/config/contact-page";
import { pageIntroBackgroundFor } from "@/config/page-intro-band";
import { buildBookingModalPayload } from "@/lib/booking-modal";
import { getRegionConfig } from "@/lib/region";
import { regionPublicUrl } from "@/lib/region-public-url";
import type {
  ContactPageContent,
  ContactPageStudioLink,
  ContactPageWhatsAppStudioOption,
} from "@/types/contact-page";
import type { RegionSlug } from "@/types/region";

const studioRegionOrder: Exclude<RegionSlug, "global">[] = ["bangkok", "phuket", "bali"];

function extractWhatsAppPhoneDigits(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  return digits.length > 0 ? digits : null;
}

function buildContactStudiosFromRegions(): readonly ContactPageStudioLink[] {
  return studioRegionOrder.map((region) => {
    const config = getRegionConfig(region);
    return {
      region,
      studioName: config.regionName,
      href: regionPublicUrl(region, "/contact"),
      label: config.regionName,
    };
  });
}

function buildWhatsAppStudioOptions(): readonly ContactPageWhatsAppStudioOption[] {
  return studioRegionOrder.flatMap((region) => {
    const config = getRegionConfig(region);
    const phoneDigits = extractWhatsAppPhoneDigits(config.contact.whatsappNumber);
    if (!phoneDigits) return [];

    return [
      {
        region,
        studioName: config.regionName,
        phoneDigits,
      },
    ];
  });
}

function getContactPageContent(region: RegionSlug): ContactPageContent {
  const regionConfig = getRegionConfig(region);
  const base = contactPageContentForRegion(region, regionConfig.regionName);
  const bookingPayload = buildBookingModalPayload(regionConfig);
  const whatsappPhoneDigits =
    region === "global" ? null : extractWhatsAppPhoneDigits(regionConfig.contact.whatsappNumber);

  return {
    ...base,
    introBackgroundImage: pageIntroBackgroundFor("contact"),
    isGlobal: region === "global",
    regionName: regionConfig.regionName,
    channels: bookingPayload.channels,
    studios: region === "global" ? buildContactStudiosFromRegions() : [],
    whatsappPhoneDigits,
    whatsappStudioOptions: region === "global" ? buildWhatsAppStudioOptions() : [],
  };
}

export { getContactPageContent };
