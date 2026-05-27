import { z } from "zod";
import { portfolioMediaForIndex } from "@/config/portfolio-media";
import type { GalleryCategorySlug, GalleryItem } from "@/types/gallery";

const regionSlugSchema = z.enum(["global", "bangkok", "bali", "phuket"]);

const tattooStyleSlugSchema = z.enum([
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
  "healed",
]);

const galleryCategorySlugSchema = z.enum([
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
]);

const galleryItemLayoutSchema = z.enum(["default", "tall", "wide"]);

const galleryItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  alt: z.string().min(1),
  imageSrc: z.string().min(1),
  category: galleryCategorySlugSchema,
  regions: z.array(regionSlugSchema).min(1),
  styleSlug: tattooStyleSlugSchema.optional(),
  featured: z.boolean().optional(),
  layout: galleryItemLayoutSchema.optional(),
});

const allRegions = ["global", "bangkok", "bali", "phuket"] as const;

const galleryCatalogRaw: GalleryItem[] = [
  {
    id: "realism-tonal-sleeve",
    title: "Tonal realism sleeve",
    alt: "Black and grey realism sleeve tattoo with portrait depth and soft gradients",
    imageSrc: "/images/tattoo-styles/realism.jpg",
    category: "realistic",
    regions: allRegions,
    styleSlug: "realism",
    featured: true,
    layout: "wide",
  },
  {
    id: "portrait-likeness-chest",
    title: "Portrait likeness study",
    alt: "Portrait tattoo on chest with refined greywash and facial structure",
    imageSrc: "/images/tattoo-styles/fine-line.jpg",
    category: "portrait",
    regions: allRegions,
    styleSlug: "portrait",
    featured: true,
  },
  {
    id: "japanese-dragon-flow",
    title: "Japanese dragon flow",
    alt: "Japanese tattoo sleeve with dragon motif and high-contrast negative space",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    category: "japanese",
    regions: allRegions,
    styleSlug: "japanese",
    featured: true,
    layout: "wide",
  },
  {
    id: "colour-saturated-panel",
    title: "Saturated colour panel",
    alt: "Colour tattoo with clean pigment packing and healed clarity",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    category: "colour",
    regions: allRegions,
    styleSlug: "colour",
  },
  {
    id: "mandala-radial-back",
    title: "Radial mandala back piece",
    alt: "Mandala tattoo with precise dotwork symmetry across the upper back",
    imageSrc: "/images/tattoo-styles/blackwork.jpg",
    category: "mandala",
    regions: allRegions,
    styleSlug: "mandala",
    layout: "tall",
  },
  {
    id: "chicano-script-narrative",
    title: "Chicano script narrative",
    alt: "Chicano black and grey tattoo with lettering and fine greywash shading",
    imageSrc: "/images/tattoo-styles/realism.jpg",
    category: "chicano",
    regions: allRegions,
    styleSlug: "chicano",
  },
  {
    id: "bamboo-hand-tap-session",
    title: "Bamboo hand-tap session",
    alt: "Traditional bamboo tattoo line work during an authentic hand-tap session",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    category: "bamboo",
    regions: ["global", "bangkok", "bali"],
    styleSlug: "bamboo",
    layout: "tall",
  },
  {
    id: "fine-line-micro-composition",
    title: "Fine line micro composition",
    alt: "Fine line tattoo with delicate single-needle structure on forearm",
    imageSrc: "/images/tattoo-styles/fine-line.jpg",
    category: "line-and-dot",
    regions: allRegions,
    layout: "default",
  },
  {
    id: "cover-up-rework-panel",
    title: "Cover-up rework panel",
    alt: "Cover-up tattoo showing darker floral rework over faded legacy ink",
    imageSrc: "/images/tattoo-styles/blackwork.jpg",
    category: "cover-up",
    regions: allRegions,
  },
  {
    id: "healed-fine-line-settle",
    title: "Healed fine line settle",
    alt: "Healed fine line tattoo with clean settled lines after full recovery",
    imageSrc: "/images/tattoo-styles/fine-line.jpg",
    category: "healed",
    regions: allRegions,
    styleSlug: "healed",
    layout: "tall",
  },
  {
    id: "blackwork-negative-space",
    title: "Blackwork negative space",
    alt: "Bold blackwork tattoo using negative space and solid saturation",
    imageSrc: "/images/tattoo-styles/blackwork.jpg",
    category: "realistic",
    regions: allRegions,
    styleSlug: "realism",
  },
  {
    id: "bangkok-session-floor",
    title: "Bangkok session atmosphere",
    alt: "Tattoo artist working on a client inside the Bloodline Bangkok studio",
    imageSrc: "/images/homepage-authority/institution-craft.jpg",
    category: "realistic",
    regions: ["global", "bangkok"],
    layout: "wide",
  },
  {
    id: "bali-travel-healed",
    title: "Bali healed documentation",
    alt: "Healed tattoo work photographed after a Bali travel session",
    imageSrc: "/images/tattoo-styles/fine-line.jpg",
    category: "healed",
    regions: ["global", "bali"],
    styleSlug: "healed",
  },
  {
    id: "phuket-bold-sleeve",
    title: "Phuket bold sleeve progress",
    alt: "Large-scale sleeve tattoo in progress at Bloodline Phuket",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    category: "japanese",
    regions: ["global", "phuket"],
    styleSlug: "japanese",
    layout: "tall",
  },
  {
    id: "colour-floral-panel",
    title: "Colour floral panel",
    alt: "Colour floral tattoo with saturated petals and clean healed edges",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    category: "colour",
    regions: ["global", "bali", "phuket"],
    styleSlug: "colour",
  },
  {
    id: "portrait-profile-study",
    title: "Profile portrait study",
    alt: "Side-profile portrait tattoo with controlled contrast on upper arm",
    imageSrc: "/images/tattoo-styles/realism.jpg",
    category: "portrait",
    regions: allRegions,
    styleSlug: "portrait",
    layout: "default",
  },
  {
    id: "mandala-forearm-band",
    title: "Forearm mandala band",
    alt: "Geometric mandala band tattoo wrapping the forearm with dotwork",
    imageSrc: "/images/tattoo-styles/blackwork.jpg",
    category: "mandala",
    regions: allRegions,
    styleSlug: "mandala",
  },
  {
    id: "studio-craft-reference",
    title: "Studio craft reference",
    alt: "Close detail of tattoo lining inside a Bloodline studio session",
    imageSrc: "/images/homepage-authority/institution-craft.jpg",
    category: "healed",
    regions: allRegions,
    layout: "wide",
  },
];

const galleryCatalog = z.array(galleryItemSchema).parse(
  galleryCatalogRaw.map((item, index) => {
    const media = portfolioMediaForIndex(index);

    return {
      ...item,
      imageSrc: media.src,
      alt: media.alt,
    };
  }),
);

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategorySlug, string> = {
  realistic: "Realistic",
  portrait: "Portrait",
  japanese: "Japanese",
  colour: "Colour",
  mandala: "Mandala",
  chicano: "Chicano",
  bamboo: "Bamboo",
  "line-and-dot": "Line & dot",
  "cover-up": "Cover-up",
  healed: "Healed",
};

export const GALLERY_CATEGORY_ORDER: readonly GalleryCategorySlug[] = [
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
];

export { galleryCatalog };
