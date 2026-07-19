import type { BookingModalChannels } from "@/types/booking-modal";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";
import type { RegionSlug } from "@/types/region";

export interface ContactPageIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

/** Studio location / welcome copy shown under the contact channel tiles. */
export interface ContactPageNarrative {
  heading: string;
  body: string;
}

export interface ContactPageFormFieldCopy {
  label: string;
  placeholder: string;
}

export interface ContactPageWhatsAppFormCopy {
  eyebrow: string;
  heading: string;
  description: string;
  submitLabel: string;
  submitNote: string;
  name: ContactPageFormFieldCopy;
  placement: ContactPageFormFieldCopy;
  size: ContactPageFormFieldCopy;
  travelDates: ContactPageFormFieldCopy;
  details: ContactPageFormFieldCopy;
  studio: ContactPageFormFieldCopy;
}

export interface ContactPageWhatsAppStudioOption {
  region: Exclude<RegionSlug, "global">;
  studioName: string;
  phoneDigits: string;
}

export interface ContactPageStudioLink {
  region: Exclude<RegionSlug, "global">;
  studioName: string;
  href: string;
  label: string;
}

export interface ContactPageContent {
  intro: ContactPageIntro;
  introBackgroundImage: PageIntroBandBackgroundImage;
  isGlobal: boolean;
  regionName: string;
  channels: BookingModalChannels;
  studios: readonly ContactPageStudioLink[];
  /** Regional studio location copy under the channel tiles. */
  narrative: ContactPageNarrative;
  whatsappForm: ContactPageWhatsAppFormCopy;
  whatsappPhoneDigits: string | null;
  whatsappStudioOptions: readonly ContactPageWhatsAppStudioOption[];
}
