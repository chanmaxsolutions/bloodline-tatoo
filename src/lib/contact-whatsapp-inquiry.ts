import { z } from "zod";

const studioSlugs = ["bangkok", "phuket", "bali"] as const;

const studioRegionSchema = z.enum(studioSlugs);

interface ContactWhatsAppInquiryInput {
  regionName: string;
  name: string;
  placement: string;
  size?: string;
  travelDates?: string;
  details: string;
}

function studioFieldSchema(isGlobal: boolean) {
  if (!isGlobal) {
    return studioRegionSchema.optional();
  }

  return z
    .string()
    .trim()
    .min(1, "Select a studio.")
    .refine((value) => studioSlugs.includes(value as (typeof studioSlugs)[number]), {
      message: "Select a studio.",
    });
}

function createContactWhatsAppInquirySchema(isGlobal: boolean) {
  return z.object({
    name: z.string().trim().min(1, "Enter your name.").min(2, "Enter your name."),
    placement: z.string().trim().min(1, "Enter placement.").min(2, "Enter placement."),
    size: z.string().trim(),
    travelDates: z.string().trim(),
    details: z
      .string()
      .trim()
      .min(1, "Share a few details about your tattoo.")
      .min(10, "Share a few details about your tattoo."),
    studio: studioFieldSchema(isGlobal),
  });
}

type ContactWhatsAppInquiryValues = z.infer<ReturnType<typeof createContactWhatsAppInquirySchema>>;

function friendlyFieldError(field: keyof ContactWhatsAppInquiryValues, message: string): string {
  const normalized = message.toLowerCase();

  if (
    field === "studio" &&
    (normalized.includes("invalid option") ||
      normalized.includes("invalid enum") ||
      normalized.includes("expected"))
  ) {
    return "Select a studio.";
  }

  if (field === "name" && normalized.includes("expected")) {
    return "Enter your name.";
  }

  if (field === "placement" && normalized.includes("expected")) {
    return "Enter placement.";
  }

  if (field === "details" && normalized.includes("expected")) {
    return "Share a few details about your tattoo.";
  }

  return message;
}

function buildContactWhatsAppInquiryMessage(input: ContactWhatsAppInquiryInput): string {
  const size = input.size?.trim();
  const travelDates = input.travelDates?.trim();

  return [
    `Hi Bloodline Tattoo ${input.regionName},`,
    "",
    `Name: ${input.name.trim()}`,
    `Placement: ${input.placement.trim()}`,
    `Size: ${size && size.length > 0 ? size : "Not specified"}`,
    `Travel dates: ${travelDates && travelDates.length > 0 ? travelDates : "Not specified"}`,
    "",
    "About the tattoo:",
    input.details.trim(),
  ].join("\n");
}

function parseContactWhatsAppInquiry(
  isGlobal: boolean,
  values: Record<string, FormDataEntryValue>,
):
  | { success: true; data: ContactWhatsAppInquiryValues }
  | { success: false; fieldErrors: Partial<Record<keyof ContactWhatsAppInquiryValues, string>> } {
  const payload: Record<string, string | undefined> = {
    name: String(values.name ?? ""),
    placement: String(values.placement ?? ""),
    size: String(values.size ?? ""),
    travelDates: String(values.travelDates ?? ""),
    details: String(values.details ?? ""),
  };

  if (isGlobal) {
    payload.studio = String(values.studio ?? "");
  }

  const parsed = createContactWhatsAppInquirySchema(isGlobal).safeParse(payload);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactWhatsAppInquiryValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field as keyof ContactWhatsAppInquiryValues]) {
        fieldErrors[field as keyof ContactWhatsAppInquiryValues] = friendlyFieldError(
          field as keyof ContactWhatsAppInquiryValues,
          issue.message,
        );
      }
    }
    return { success: false, fieldErrors };
  }

  return { success: true, data: parsed.data };
}

export {
  buildContactWhatsAppInquiryMessage,
  createContactWhatsAppInquirySchema,
  parseContactWhatsAppInquiry,
  studioRegionSchema,
};
export type { ContactWhatsAppInquiryValues };
