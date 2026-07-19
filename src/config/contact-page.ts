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
 * Location / welcome narrative under the contact channel tiles (all regional sites).
 * Phuket body matches client-supplied copy; Bangkok / Bali / global follow the same pattern.
 */
const contactPageNarrativeByRegion: Record<RegionSlug, ContactPageNarrative> = {
  global: {
    heading: "CONTACT BLOODLINE TATTOO",
    body: "Bloodline Tattoo runs across Bangkok, Bali and Phuket as one studio house. Each location is appointment-only and ready to welcome travellers and locals who want serious custom work. Whether you’re booking in Thailand or Indonesia, our Bloodline family is here to help. Contact your studio on WhatsApp or Instagram for directions, studio information and tattoo appointments.",
  },
  bangkok: {
    heading: "CONTACT BLOODLINE TATTOO BANGKOK",
    body: "Bloodline Tattoo Bangkok is located on Sukhumvit 21 in Watthana, one of Bangkok’s most accessible neighbourhoods for travellers and expats. Our studio is conveniently located for clients staying around Sukhumvit and travelling from across the city. Whether you’re visiting Bangkok on holiday or travelling specifically for your tattoo, our Bloodline family is here to welcome you. Contact our team on WhatsApp or Instagram for directions, studio information and tattoo appointments.",
  },
  bali: {
    heading: "CONTACT BLOODLINE TATTOO BALI",
    body: "Bloodline Tattoo Bali is located in Kuta on Jalan Legian, in the heart of one of Bali’s most popular tourist areas. Our studio is conveniently located for clients staying in Kuta, Seminyak and travelling from across the island. Whether you’re visiting Bali on holiday or travelling specifically for your tattoo, our Bloodline family is here to welcome you. Contact our team on WhatsApp or Instagram for directions, studio information and tattoo appointments.",
  },
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

function contactNarrativeForRegion(region: RegionSlug): ContactPageNarrative {
  return contactPageNarrativeByRegion[region];
}

function contactPageContentForRegion(region: RegionSlug, regionName: string) {
  return {
    intro: contactIntroForRegion(region, regionName),
    narrative: contactNarrativeForRegion(region),
    whatsappForm: contactWhatsAppFormCopy,
  };
}

export { contactPageContentForRegion, contactPageWhatsAppFormEnabled, contactWhatsAppFormCopy };
