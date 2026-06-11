import {
  normalizeHostnameForAnalytics,
  resolveGaMeasurementIdFromHostname,
} from "@/config/google-analytics";
import { resolveRegionFromHostname } from "@/lib/region";
import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { BookingModalLayout } from "@/types/booking-modal";
import type { RegionSlug } from "@/types/region";

interface GtagConfig {
  page_path?: string;
  send_page_view?: boolean;
}

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: GtagCommand,
      targetId: string | Date,
      config?: GtagConfig | Record<string, unknown>,
    ) => void;
  }
}

type GaBookingChannel = "whatsapp" | "instagram" | "facebook";
type GaStudioRegion = Exclude<RegionSlug, "global">;
type GaGoogleReviewLinkType = "business_profile" | "individual_review";
type GaAppointmentEntryPoint = "booking_modal" | "contact_page";

interface GaCommonParams {
  page_path: string;
  page_location: string;
  domain: string;
  region: GaStudioRegion;
}

type GaEventParams = GaCommonParams & Record<string, string | undefined>;

function sendGaPageView(measurementId: string, pagePath: string): void {
  window.gtag?.("config", measurementId, {
    page_path: pagePath,
  });
}

function isGaCustomEventEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof window.gtag !== "function") return false;

  const measurementId = resolveGaMeasurementIdFromHostname(window.location.hostname);
  return measurementId !== null;
}

function getGaCommonParams(): GaCommonParams | null {
  if (typeof window === "undefined") return null;

  const domain = normalizeHostnameForAnalytics(window.location.hostname);
  const region = resolveRegionFromHostname(domain);

  if (region === "global") return null;
  if (!resolveGaMeasurementIdFromHostname(domain)) return null;

  return {
    page_path: `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
    domain,
    region,
  };
}

function trackGaEvent(eventName: string, params: Record<string, string | undefined>): void {
  if (!isGaCustomEventEnabled()) return;

  const common = getGaCommonParams();
  if (!common) return;

  const payload: GaEventParams = { ...common };

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      payload[key] = value;
    }
  }

  window.gtag?.("event", eventName, payload);
}

function bookingChannelFromLabel(label: string): GaBookingChannel | null {
  if (/whatsapp/i.test(label)) return "whatsapp";
  if (/instagram/i.test(label)) return "instagram";
  if (/facebook/i.test(label)) return "facebook";
  return null;
}

function sanitizeWhatsAppDestinationUrl(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete("text");
    return parsed.toString();
  } catch {
    const [base] = url.split("?");
    return base ?? url;
  }
}

interface TrackGenerateLeadInput {
  destinationUrl: string;
  studioRegion?: string;
}

function trackGenerateLead({ destinationUrl, studioRegion }: TrackGenerateLeadInput): void {
  trackGaEvent("generate_lead", {
    form_name: "contact_whatsapp_inquiry",
    channel: "whatsapp",
    component_name: "ContactPageWhatsAppForm",
    cta_text: "Continue to WhatsApp",
    destination_url: sanitizeWhatsAppDestinationUrl(destinationUrl),
    studio_region: studioRegion,
  });
}

interface TrackAppointmentChannelClickInput {
  channel: GaBookingChannel;
  destinationUrl: string;
  ctaText: string;
  componentName: string;
  entryPoint: GaAppointmentEntryPoint;
}

function trackAppointmentChannelClick({
  channel,
  destinationUrl,
  ctaText,
  componentName,
  entryPoint,
}: TrackAppointmentChannelClickInput): void {
  trackGaEvent("appointment_channel_click", {
    channel,
    destination_url: destinationUrl,
    cta_text: ctaText,
    component_name: componentName,
    entry_point: entryPoint,
    link_type: "booking_channel",
  });
}

interface TrackAppointmentModalOpenInput {
  componentName: string;
  ctaText?: string;
  modalLayout: BookingModalLayout;
  tattooStyleSlug?: TattooStyleSlug;
}

function trackAppointmentModalOpen({
  componentName,
  ctaText,
  modalLayout,
  tattooStyleSlug,
}: TrackAppointmentModalOpenInput): void {
  trackGaEvent("appointment_modal_open", {
    component_name: componentName,
    cta_text: ctaText,
    modal_layout: modalLayout,
    tattoo_style_slug: tattooStyleSlug,
  });
}

interface TrackGoogleReviewClickInput {
  componentName: string;
  linkType: GaGoogleReviewLinkType;
  destinationUrl: string;
  ctaText?: string;
  reviewId?: string;
  carouselContext?: string;
}

function trackGoogleReviewClick({
  componentName,
  linkType,
  destinationUrl,
  ctaText,
  reviewId,
  carouselContext,
}: TrackGoogleReviewClickInput): void {
  trackGaEvent("google_review_click", {
    component_name: componentName,
    link_type: linkType,
    destination_url: destinationUrl,
    cta_text: ctaText,
    review_id: reviewId,
    carousel_context: carouselContext,
  });
}

interface TrackSocialProfileClickInput {
  channel: GaBookingChannel;
  destinationUrl: string;
}

function trackSocialProfileClick({ channel, destinationUrl }: TrackSocialProfileClickInput): void {
  trackGaEvent("social_profile_click", {
    channel,
    destination_url: destinationUrl,
    component_name: "FooterSocialConnect",
    entry_point: "footer",
  });
}

export {
  bookingChannelFromLabel,
  getGaCommonParams,
  isGaCustomEventEnabled,
  sanitizeWhatsAppDestinationUrl,
  sendGaPageView,
  trackAppointmentChannelClick,
  trackAppointmentModalOpen,
  trackGenerateLead,
  trackGoogleReviewClick,
  trackSocialProfileClick,
};
export type { GaBookingChannel };
