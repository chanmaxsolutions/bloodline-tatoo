import type { ContactPageIntro, ContactPageWhatsAppFormCopy } from "@/types/contact-page";
import type { RegionSlug } from "@/types/region";

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

function contactPageContentForRegion(region: RegionSlug, regionName: string) {
  return {
    intro: contactIntroForRegion(region, regionName),
    whatsappForm: contactWhatsAppFormCopy,
  };
}

export { contactPageContentForRegion, contactWhatsAppFormCopy };
