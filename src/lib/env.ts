import { z } from "zod";

/** `.env` entries like `KEY=` load as `""` — treat as unset for optional vars. */
function optionalEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}

const optionalNonEmptyString = z.string().min(1).optional();

const serverEnvSchema = z.object({
  AIRTABLE_API_KEY: optionalNonEmptyString,
  AIRTABLE_BASE_ID: optionalNonEmptyString,
  RESEND_API_KEY: optionalNonEmptyString,
  OUTSCRAPER_API_KEY: optionalNonEmptyString,
  SENTRY_AUTH_TOKEN: optionalNonEmptyString,
  REVALIDATE_SECRET: optionalNonEmptyString,
  REGION_HOSTS_GLOBAL: optionalNonEmptyString,
  REGION_HOSTS_BANGKOK: optionalNonEmptyString,
  REGION_HOSTS_BALI: optionalNonEmptyString,
  REGION_HOSTS_PHUKET: optionalNonEmptyString,
});

const publicEnvSchema = z.object({
  NEXT_PUBLIC_META_PIXEL_ID: optionalNonEmptyString,
  NEXT_PUBLIC_SITE_ENV: z.enum(["local", "preview", "production"]).default("local"),
});

export const env = {
  ...serverEnvSchema.parse({
    AIRTABLE_API_KEY: optionalEnv(process.env.AIRTABLE_API_KEY),
    AIRTABLE_BASE_ID: optionalEnv(process.env.AIRTABLE_BASE_ID),
    RESEND_API_KEY: optionalEnv(process.env.RESEND_API_KEY),
    OUTSCRAPER_API_KEY: optionalEnv(process.env.OUTSCRAPER_API_KEY),
    SENTRY_AUTH_TOKEN: optionalEnv(process.env.SENTRY_AUTH_TOKEN),
    REVALIDATE_SECRET: optionalEnv(process.env.REVALIDATE_SECRET),
    REGION_HOSTS_GLOBAL: optionalEnv(process.env.REGION_HOSTS_GLOBAL),
    REGION_HOSTS_BANGKOK: optionalEnv(process.env.REGION_HOSTS_BANGKOK),
    REGION_HOSTS_BALI: optionalEnv(process.env.REGION_HOSTS_BALI),
    REGION_HOSTS_PHUKET: optionalEnv(process.env.REGION_HOSTS_PHUKET),
  }),
  ...publicEnvSchema.parse({
    NEXT_PUBLIC_META_PIXEL_ID: optionalEnv(process.env.NEXT_PUBLIC_META_PIXEL_ID),
    NEXT_PUBLIC_SITE_ENV: optionalEnv(process.env.NEXT_PUBLIC_SITE_ENV) ?? "local",
  }),
};
