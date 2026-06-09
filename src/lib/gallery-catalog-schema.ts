import { z } from "zod";

const galleryItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  alt: z.string().min(1),
  imageSrc: z.string().min(1),
  imageWidth: z.number().int().positive(),
  imageHeight: z.number().int().positive(),
  category: z.enum([
    "realistic",
    "portrait",
    "japanese",
    "colour",
    "mandala",
    "chicano",
    "bamboo",
    "line-and-dot",
    "cover-up",
    "healed",
  ]),
  regions: z.array(z.enum(["global", "bangkok", "bali", "phuket"])).min(1),
  styleSlug: z
    .enum(["realism", "portrait", "japanese", "colour", "mandala", "chicano", "bamboo", "healed"])
    .optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().nonnegative(),
  uploadedAt: z.string().datetime(),
});

export { galleryItemSchema };
