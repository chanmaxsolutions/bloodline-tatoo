import { z } from "zod";

const serverEnvSchema = z.object({
  AIRTABLE_API_KEY: z.string().min(1).optional(),
  AIRTABLE_BASE_ID: z.string().min(1).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  OUTSCRAPER_API_KEY: z.string().min(1).optional(),
  SENTRY_AUTH_TOKEN: z.string().min(1).optional(),
  REGION_HOSTS_GLOBAL: z.string().min(1).optional(),
  REGION_HOSTS_BANGKOK: z.string().min(1).optional(),
  REGION_HOSTS_BALI: z.string().min(1).optional(),
  REGION_HOSTS_PHUKET: z.string().min(1).optional(),
});

const publicEnvSchema = z.object({
  NEXT_PUBLIC_GA_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_META_PIXEL_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_SITE_ENV: z.enum(["local", "preview", "production"]).default("local"),
});

export const env = {
  ...serverEnvSchema.parse({
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    OUTSCRAPER_API_KEY: process.env.OUTSCRAPER_API_KEY,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    REGION_HOSTS_GLOBAL: process.env.REGION_HOSTS_GLOBAL,
    REGION_HOSTS_BANGKOK: process.env.REGION_HOSTS_BANGKOK,
    REGION_HOSTS_BALI: process.env.REGION_HOSTS_BALI,
    REGION_HOSTS_PHUKET: process.env.REGION_HOSTS_PHUKET,
  }),
  ...publicEnvSchema.parse({
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    NEXT_PUBLIC_SITE_ENV: process.env.NEXT_PUBLIC_SITE_ENV,
  }),
};
