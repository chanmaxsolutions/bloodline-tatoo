import fs from "node:fs";
import path from "node:path";
import { unstable_cache } from "next/cache";
import { z } from "zod";
import {
  CONTENT_CACHE_REVALIDATE_SECONDS,
  CONTENT_CACHE_TAG_GALLERY,
} from "@/lib/content-cache-tags";
import { galleryItemSchema } from "@/lib/gallery-catalog-schema";
import type { GalleryItem } from "@/types/gallery";

function readGalleryCatalogFromDisk(): readonly GalleryItem[] {
  const filePath = path.join(process.cwd(), "src/data/gallery-catalog.json");
  const raw: unknown = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return z.array(galleryItemSchema).parse(raw);
}

const getGalleryCatalogFromProofs = unstable_cache(
  async () => readGalleryCatalogFromDisk(),
  ["gallery-catalog-json"],
  {
    tags: [CONTENT_CACHE_TAG_GALLERY],
    revalidate: CONTENT_CACHE_REVALIDATE_SECONDS,
  },
);

export { getGalleryCatalogFromProofs };
