import { z } from "zod";
import {
  tattooStyleStudioRegionsForSlug,
  type TattooStyleStudioRegion,
} from "@/config/tattoo-style-image-regions";
import { globalStyleSlugs } from "@/config/region-tattoo-style-availability";
import { getTattooStyleProofPoolForStudio } from "@/config/tattoo-style-proof-pools";
import { readLocalImageMetadata } from "@/lib/read-local-image-dimensions";
import { tattooStyleToGalleryCategory } from "@/lib/tattoo-style-portfolio";
import type { GalleryCategorySlug, GalleryItem } from "@/types/gallery";
import type { RegionSlug } from "@/types/region";
import type { TattooStyleSlug } from "@/types/tattoo-style";

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

function studioToRegions(studio: TattooStyleStudioRegion): readonly RegionSlug[] {
  return ["global", studio];
}

function proofFilenameFromSrc(src: string): string {
  const segments = src.split("/");
  return segments[segments.length - 1] ?? src;
}

function proofFilenameToId(
  filename: string,
  styleSlug: TattooStyleSlug,
  studio: TattooStyleStudioRegion,
): string {
  const base = filename.replace(/\.[a-z0-9]+$/i, "");
  return `${styleSlug}-${studio}-${base}`;
}

function proofFilenameToTitle(filename: string): string {
  const slug = filename
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^[a-z]+-tattoo-/i, "")
    .replace(/-bloodline-(bangkok|bali|phuket)$/i, "");

  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildGalleryCatalog(): readonly GalleryItem[] {
  const items: GalleryItem[] = [];
  let catalogSortOrder = 0;

  for (const styleSlug of globalStyleSlugs) {
    const category: GalleryCategorySlug = tattooStyleToGalleryCategory[styleSlug];
    const studios = tattooStyleStudioRegionsForSlug(styleSlug);

    for (const studio of studios) {
      const proofs = getTattooStyleProofPoolForStudio(styleSlug, studio);

      proofs.forEach((proof, index) => {
        const filename = proofFilenameFromSrc(proof.src);
        const {
          width: imageWidth,
          height: imageHeight,
          uploadedAt: fileUploadedAt,
        } = readLocalImageMetadata(proof.src);

        items.push({
          id: proofFilenameToId(filename, styleSlug, studio),
          title: proofFilenameToTitle(filename),
          alt: proof.alt,
          imageSrc: proof.src,
          imageWidth,
          imageHeight,
          category,
          regions: studioToRegions(studio),
          styleSlug,
          featured: index === 0,
          sortOrder: proof.sortOrder ?? catalogSortOrder,
          uploadedAt: proof.uploadedAt ?? fileUploadedAt,
        });

        catalogSortOrder += 1;
      });
    }
  }

  return z.array(galleryItemSchema).parse(items);
}

export { buildGalleryCatalog };
