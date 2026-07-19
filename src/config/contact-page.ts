import type {
  ContactPageIntro,
  ContactPageNarrative,
  ContactPageWhatsAppFormCopy,
} from "@/types/contact-page";
import type { RegionSlug } from "@/types/region";

/**
 * Contact WhatsApp lead form (Or start here).
 * Kept in codebase via `ContactPageFormSection` / `ContactPageWhatsAppForm`.
 * Set `true` to show it again under the channel tiles on `/contact`.
 */
const contactPageWhatsAppFormEnabled = false;

const contactWhatsAppFormCopy: ContactPageWhatsAppFormCopy = {
  eyebrow: "Or start here",
  heading: "TELL US ABOUT YOUR TATTOO",
  description:
    "Share the basics below. We open WhatsApp with your message ready for you to review and send.",
  submitLabel: "Continue to WhatsApp",
  submitNote: "Nothing sends until you tap send in WhatsApp.",
  name: { label: "Name", placeholder: "Your name" },
  placement: { label: "Placement", placeholder: "e.g. Outer forearm" },
  size: { label: "Approximate size", placeholder: "e.g. Palm-sized" },
  travelDates: {
    label: "Travel dates",
    placeholder: "Optional: when are you visiting?",
  },
  details: {
    label: "About your tattoo",
    placeholder: "Style, references, cover-up or rework",
  },
  studio: { label: "Studio", placeholder: "Select a studio" },
};

/**
 * Location / welcome narrative under the contact channel tiles.
 * Add Bali / Bangkok / global entries when the client supplies copy.
 */
const contactPageNarrativeByRegion: Partial<Record<RegionSlug, ContactPageNarrative>> = {
  phuket: {
    heading: "CONTACT BLOODLINE TATTOO PHUKET",
    body: "Bloodline Tattoo Phuket is located in Patong, Phuket, one of Thailand’s most popular tourist destinations. Our studio is conveniently located for clients staying in Patong and travelling from across Phuket. Whether you’re visiting the island on holiday or travelling specifically for your tattoo, our Bloodline family is here to welcome you. Contact our team on WhatsApp or Instagram for directions, studio information and tattoo appointments.",
  },
};

function contactIntroForRegion(region: RegionSlug, regionName: string): ContactPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Book a session",
      heading: "MESSAGE THE STUDIO",
      description:
        "Pick Bangkok, Bali, or Phuket. Each studio books in DMs only. WhatsApp is usually fastest. We do not book over email.",
    };
  }

  return {
    eyebrow: "Book a session",
    heading: `CONTACT BLOODLINE ${regionName.toUpperCase()}`,
    description:
      "Appointments are confirmed in DMs, not email. Message us on WhatsApp for the quickest reply, or use Instagram or Facebook below.",
  };
}

function contactNarrativeForRegion(region: RegionSlug): ContactPageNarrative | null {
  return contactPageNarrativeByRegion[region] ?? null;
}

function contactPageContentForRegion(region: RegionSlug, regionName: string) {
  return {
    intro: contactIntroForRegion(region, regionName),
    narrative: contactNarrativeForRegion(region),
    whatsappForm: contactWhatsAppFormCopy,
  };
}

export { contactPageContentForRegion, contactPageWhatsAppFormEnabled, contactWhatsAppFormCopy };
