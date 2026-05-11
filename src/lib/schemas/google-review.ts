import { z } from "zod";

/** Validates a single Google review object from cached JSON or API payloads. */
export const googleReviewRecordSchema = z.object({
  id: z.string().min(1).optional(),
  author: z.string().min(1),
  rating: z.number().min(1).max(5),
  text: z.string().min(1),
  date: z.string().min(1),
  region: z.enum(["bangkok", "bali", "phuket"]),
  profilePhoto: z.string().url().optional(),
  reviewUrl: z.string().url().optional(),
  source: z.literal("google"),
});

export const googleReviewsFileSchema = z.object({
  reviews: z.array(googleReviewRecordSchema),
});

export type ParsedGoogleReviewRecord = z.infer<typeof googleReviewRecordSchema>;
