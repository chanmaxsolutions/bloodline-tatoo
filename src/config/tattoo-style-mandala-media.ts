import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type MandalaStudioRegion = "bangkok" | "bali" | "phuket";

const mandalaImageRoot = "/images/tattoo-styles/mandala";

function isMandalaStudioRegion(studio: TattooStyleStudioRegion): studio is MandalaStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function mandalaProofSrc(studio: MandalaStudioRegion, filename: string): string {
  return `${mandalaImageRoot}/${studio}/proof/${filename}`;
}

const mandalaStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Large-scale mandala tattoo with radial symmetry and precise dotwork at Bloodline Tattoo Bangkok",
    approachAlt:
      "Geometric mandala composition with sacred geometry and fine line structure at Bloodline Tattoo Bangkok",
    cardAlt:
      "Mandala tattoo with balanced symmetry and ornamental dotwork detail at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Mandala back piece with radial geometry and ornamental dotwork at Bloodline Tattoo Bali",
    approachAlt:
      "Sacred geometry mandala tattoo with layered symmetry and fine linework at Bloodline Tattoo Bali",
    cardAlt:
      "Forearm mandala band with precise geometric repetition and dotwork at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Full-back mandala tattoo with radial symmetry and ornamental structure at Bloodline Tattoo Phuket",
    approachAlt:
      "Geometric mandala sleeve with dotwork bands and sacred geometry at Bloodline Tattoo Phuket",
    cardAlt:
      "Mandala tattoo with symmetrical linework and controlled negative space at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  MandalaStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const mandalaProofPoolsByStudio: Record<
  MandalaStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
  bangkok: [
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-15-3-26-4-27-56-pm-bloodline-bangkok.webp",
      ),
      alt: "Crown scalp mandala with layered lotus petals and stippled dotwork shading across the shaved head, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-1-bloodline-bangkok.webp",
      ),
      alt: "Dual forearm views of blackwork sleeves with Metatron's Cube, floral mandalas, and hexagonal star dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-2-bloodline-bangkok.webp",
      ),
      alt: "Shoulder mandala flowing into a honeycomb hex grid, each cell with a miniature geometric star in fine dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-21-bloodline-bangkok.webp",
      ),
      alt: "Dual-arm sacred geometry sleeves with Metatron's Cube, large floral mandalas, and Flower of Life hex patterns in stippled black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-35-bloodline-bangkok.webp",
      ),
      alt: "Large leg tattoo with angular blackwork panels of Polynesian-inspired geometric patterns, scales, and fine-line tribal ornament, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-13-bloodline-bangkok.webp",
      ),
      alt: "Triptych forearm sleeve with pointed-arch mandalas, peony florals, and dense dotwork shading in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-14-bloodline-bangkok.webp",
      ),
      alt: "Torso tattoo mixing chest mandala dotwork, geometric neck bands, and bold blackwork tribal patterns across both arms, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-16-bloodline-bangkok.webp",
      ),
      alt: "Dual full sleeves with overlapping mandalas, rose-window geometry, and honeycomb hex florals in stippled dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-18-bloodline-bangkok.webp",
      ),
      alt: "Dual-angle arm sleeve with floral mandalas, Flower of Life circles, and hexagonal tessellations in precision dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-19-bloodline-bangkok.webp",
      ),
      alt: "Black and grey realism sleeve with Zeus portrait, lightning, and armored Poseidon with trident in mythological shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-20-bloodline-bangkok.webp",
      ),
      alt: "Full-back tattoo with snarling bear biting a Flower of Life sphere, Metatron's Cube, and lower mandala dotwork in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-21-bloodline-bangkok.webp",
      ),
      alt: "Full arm sleeve with shoulder lotus mandala, spiraling black bands, hex grids, and Flower of Life dotwork sections, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-22-bloodline-bangkok.webp",
      ),
      alt: "Full-leg sleeve with large geometric mandalas framed by bold blackwork curves and stippled dotwork gradients, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-23-bloodline-bangkok.webp",
      ),
      alt: "Triptych limb views of a wraparound mandala with triangular geometry and wrist Flower of Life dotwork in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-24-bloodline-bangkok.webp",
      ),
      alt: "Forearm mandala with eight dark petals, arched geometric layers, and smooth stippled dotwork shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-25-bloodline-bangkok.webp",
      ),
      alt: "Triptych full-leg tattoo with Flower of Life panels, central lower-leg mandala, and architectural dotwork pathways, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-26-bloodline-bangkok.webp",
      ),
      alt: "Full sleeve blending ancient deity portrait, elbow mandala knot, honeycomb hex grid, and realistic skull in dotwork black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-27-bloodline-bangkok.webp",
      ),
      alt: "Full sleeve with shoulder mandala, negative-space bands, and interlocking 3D cube and hex dotwork patterns, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-30-bloodline-bangkok.webp",
      ),
      alt: "Arm tattoo with realistic lion portrait, compass rose forehead detail, metal chain, and large nautical compass in black and grey realism, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-31-bloodline-bangkok.webp",
      ),
      alt: "Dual-view sleeve merging realistic surreal portraits with mandala circles, honeycomb geometry, and Flower of Life dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-32-bloodline-bangkok.webp",
      ),
      alt: "Forearm tattoo with realistic top and bottom roses framing a central eight-point mandala star in geometric dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-33-bloodline-bangkok.webp",
      ),
      alt: "High-contrast ornamental blackwork sleeve using negative-space geometric lines, sunburst motifs, and filigree on saturated black fill, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-34-bloodline-bangkok.webp",
      ),
      alt: "Diagonal full-arm sleeve with shoulder mandala, mid-arm hex florals, forearm Flower of Life grid, and wrist mandala accents in dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-4-bloodline-bangkok.webp",
      ),
      alt: "Upper-leg mandala with layered geometric petals, stippled shading, and ornamental dotwork chandelier drops, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-5-1-bloodline-bangkok.webp",
      ),
      alt: "Front neck tattoo with central throat mandala flanked by Flower of Life grids across collarbones in dense dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-5-bloodline-bangkok.webp",
      ),
      alt: "Dual-limb black and grey piece with classical helmeted statue portrait, winged angel and shield, and flowing memorial script lettering, at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-02-06-25-14-56-46-bloodline-bali.webp"),
      alt: "Full leg ornamental mandala sleeve with lotus rosettes, layered dotwork petals, and flowing negative-space geometry from thigh to shin at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-02-07-24-21-50-15-bloodline-bali.webp"),
      alt: "Ornamental chest collar tattoo with lace-like mandala borders, micro dotwork detail, and necklace-style symmetry across the clavicles at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-02-10-23-18-41-37-bloodline-bali.webp"),
      alt: "Shoulder blackwork sleeve with a lotus mandala cap, hexagon bands, and radiating geometric flowerwork in dense dot shading at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-03-03-25-22-16-03-bloodline-bali.webp"),
      alt: "Geometric calf sleeve with Flower of Life hexagons, 3D cube tessellation, and crisp dotwork symmetry flowing from knee to ankle at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-03-03-25-22-16-04-1-bloodline-bali.webp"),
      alt: "Side leg sacred geometry with a giant rosette mandala, stacked cube tessellation, and fine-dot shading through the calf panels at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-03-03-25-22-16-04-bloodline-bali.webp"),
      alt: "Upper leg geometric piece with a large rosette mandala, interlocked 3D lattice, and blackout-backed dotwork tapering into the calf at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-05-10-23-22-02-32-bloodline-bali.webp"),
      alt: "Geometric chest panel with Japanese wave fill, sacred-geometry fields, and heavy blackwork contrast shaped cleanly across the pecs at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-06-07-23-00-48-41-bloodline-bali.webp"),
      alt: "Full torso Buddha composition with Flower of Life shoulders, ornamental crown work, and dot-shaded sacred geometry framed down the sternum at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-06-07-23-02-17-37-bloodline-bali.webp"),
      alt: "Upper-back blackwork with a coiled snake centerpiece, winged ornamental panels, and dense geometric patterning across both shoulders at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-07-08-23-21-07-45-bloodline-bali.webp"),
      alt: "Full sleeve with a shoulder mandala, Flower of Life panels, geometric hand rosette, and saturated blackout contrast through the arm at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-08-01-24-13-56-02-bloodline-bali.webp"),
      alt: "Symmetrical ornamental backpiece with compass-lotus detailing, layered petals, and soft dotwork shading tapering toward the lower back at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-09-05-24-22-52-30-bloodline-bali.webp"),
      alt: "Chest piece with mirrored guardian lions, a central mandala bloom, and Flower of Life shoulders rendered in smooth black-and-grey at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-09-05-25-15-04-43-bloodline-bali.webp"),
      alt: "Geometric calf sleeve with hexagon webbing, ornamental borders, and crisp dotwork panels that hold sharp negative-space separation at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-09-10-23-21-32-01-bloodline-bali.webp"),
      alt: "Sleeve with a shoulder mandala cap, black-and-grey peony shading, and a Flower of Life wrist panel balanced by bold negative space at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-10-10-24-22-08-56-bloodline-bali.webp"),
      alt: "Polynesian-inspired arm sleeve with woven chevrons, spearhead bands, and bold blackwork flow wrapping cleanly from shoulder to forearm at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-11-07-23-18-01-18-bloodline-bali.webp"),
      alt: "Upper-arm mandala cap with layered petals, a black-and-grey chrysanthemum, and ornamental wrist geometry finished in smooth dot shading at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-11-12-23-13-18-56-bloodline-bali.webp"),
      alt: "Full-back sacred geometry piece with an all-seeing eye, mirrored hands, hexagon fields, and petaled blackwork framing the spine at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-13-05-23-23-35-52-bloodline-bali.webp"),
      alt: "Polynesian-style script sleeve with ornamental tribal bands, interlocking triangle motifs, and smooth blackwork tapering down the forearm at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-13-05-23-23-35-53-bloodline-bali.webp"),
      alt: "Polynesian-style forearm section with interwoven tribal bands, fine triangle texture, and clean blackwork rhythm wrapping the arm at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-13-11-23-23-29-38-bloodline-bali.webp"),
      alt: "Calf piece with a skull, lotus bloom, compass dial, and geometric dotwork panels stacked into a sharp black-and-grey composition at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-13-11-24-10-54-53-bloodline-bali.webp"),
      alt: "Full-back black-and-grey Oni reveal with torn geometric framing, Flower of Life shoulders, and bold ornamental mandala work across the lower back at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-16-09-23-07-11-19-bloodline-bali.webp"),
      alt: "Symmetrical neck and upper-back tribal blackwork with spearhead geometry, chevron bands, and high-contrast negative space at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-16-10-23-21-26-48-bloodline-bali.webp"),
      alt: "Geometric shin piece with hexagon rosettes, cube accents, and stippled blackwork packed into a symmetrical lower-leg panel at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-18-07-23-00-55-10-bloodline-bali.webp"),
      alt: "Full-back sacred geometry suit with cube tessellation, lotus-based symmetry, and layered blackwork panels running shoulder to waist at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-18-08-23-21-16-01-1-bloodline-bali.webp"),
      alt: "Polynesian chest and shoulder coverage with flowing tribal bands, Greek-key details, and precise blackwork line rhythm across the pec and deltoid at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-18-08-23-21-16-01-bloodline-bali.webp"),
      alt: "Polynesian chest and shoulder work with a sun-disc roundel, woven linework, and tightly packed tribal bands rendered in crisp blackwork at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-19-09-23-17-47-39-bloodline-bali.webp"),
      alt: "Ornamental backpiece with a lotus neck crown, floral scrollwork, star-grid geometry, and heavy blackwork shaping through the mid-back at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-20-12-24-22-51-17-bloodline-bali.webp"),
      alt: "Black-and-grey sleeve with a Hannya mask, serpent details, Metatron-style geometry, and dense dotwork contrast from shoulder to hand at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-21-41-22-bloodline-bali.webp"),
      alt: "Full-back geometric piece with a central lotus mandala, 3D cube tessellation, and Flower of Life borders sweeping over both shoulders at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-06-23-12-45-07-bloodline-bali.webp"),
      alt: "Full sleeve with a shoulder lotus mandala, Flower of Life field, angular star geometry, and layered dotwork from upper arm to wrist at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-08-23-14-48-40-bloodline-bali.webp"),
      alt: "Geometric throat tattoo with a central rosette, Flower of Life texture, and 3D cube borders locking into the neck and upper chest at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-22-05-23-21-27-20-1-bloodline-bali.webp"),
      alt: "Full leg ornamental sleeve with oversized floral mandalas, Flower of Life panels, and bold negative-space bands wrapping the thigh and calf at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-22-05-23-21-27-20-2-bloodline-bali.webp"),
      alt: "Back-leg ornamental sleeve with stacked mandala blooms, lace-like dotwork panels, and strong negative-space dividers down the calf at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-22-05-23-21-27-20-bloodline-bali.webp"),
      alt: "Side leg mandala sleeve with layered floral rosettes, dotwork shading, and geometric lower-leg panels balanced by clean blackout bands at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-22-05-24-23-35-16-1-bloodline-bali.webp"),
      alt: "Geometric leg sleeve with a starburst thigh rosette, Flower of Life hexagons, and 3D cube tessellation stepping down the shin at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-22-05-24-23-35-16-bloodline-bali.webp"),
      alt: "Side leg sacred geometry with a large rosette fan, clustered Flower of Life cells, and cube-grid blackwork cut with clean negative space at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-22-05-24-23-35-17-bloodline-bali.webp"),
      alt: "Leg sleeve with a Hannya face, honeycomb tiles, wave fill, and Flower of Life geometry layered into smooth black-and-grey shading at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-26-07-24-23-26-29-1-bloodline-bali.webp"),
      alt: "Geometric calf sleeve with stacked cube tessellation, dual ornamental rosettes, and crisp dotwork hexagons anchored at the ankle at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-26-07-24-23-26-29-bloodline-bali.webp"),
      alt: "Sacred geometry calf piece with hexagon Flower of Life clusters, ornamental lotus framing, and 3D cube shading through the upper calf at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-27-04-24-23-51-07-bloodline-bali.webp"),
      alt: "Chest blackwork with a woman's face set inside a wide lotus mandala, heavy stippled shading, and petaled geometry spanning pec to pec at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-28-01-24-08-30-06-bloodline-bali.webp"),
      alt: "Floral black-and-grey sleeve with a shoulder mandala bloom, chrysanthemum center, and ornamental wrist rosettes balanced by negative space at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-29-02-24-23-24-16-bloodline-bali.webp"),
      alt: "Blackwork sleeve with a Celtic cross, spiral triskeles, and knotwork bands flowing from shoulder to forearm in clean high-contrast linework at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-30-10-24-22-08-56-bloodline-bali.webp"),
      alt: "Leg sleeve with a gothic skull, cathedral-style tracery, and Flower of Life geometry descending into the shin in smoky black-and-grey at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-31-07-23-22-41-29-bloodline-bali.webp"),
      alt: "Black-and-grey sleeve with a shoulder starburst mandala, peony bloom, and geometric dotwork running into ornamental wristwork at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-celtic-braid-knotwork-geometric-full-sleeve-bloodline-phuket.webp",
      ),
      alt: "Intricate Celtic braid and geometric knotwork full sleeve with bold outlines and woven negative-space patterns from shoulder to wrist, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-celtic-triquetra-knotwork-full-arm-sleeve-bloodline-phuket.webp",
      ),
      alt: "Black and grey Celtic knotwork full arm sleeve featuring a bold Triquetra on the shoulder and interlocking braided patterns down to the wrist, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-chest-mandala-all-seeing-eye-triangle-bloodline-phuket.webp",
      ),
      alt: "Symmetrical chest mandala tattoo pairing large pectoral lotus mandalas with a central all-seeing eye inside a triangle and stippled dotwork radiating outward, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-full-leg-sleeve-four-view-collage-bloodline-phuket.webp",
      ),
      alt: "Four-panel collage showcasing matching dual full leg mandala sleeves with honeycomb grids, knee lotus mandalas, and dense geometric dotwork from thigh to ankle, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-full-leg-sleeves-front-feet-symmetrical-bloodline-phuket.webp",
      ),
      alt: "Symmetrical front view of dual full leg mandala sleeves extending from the thighs over the knees and down to the tops of the feet in bold blackwork dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-all-seeing-eye-triangle-bloodline-phuket.webp",
      ),
      alt: "Symmetrical dual full leg mandala sleeves featuring thigh lotus mandalas, geometric honeycomb bands, and an all-seeing eye inside a triangle on the calf, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-back-mandala-3d-cube-bloodline-phuket.webp",
      ),
      alt: "Posterior dual full leg mandala work with upper-thigh lotus mandalas, isometric 3D cube blackwork on the calves, and Flower of Life dotwork near the ankles, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-flower-of-life-3d-cubes-bloodline-phuket.webp",
      ),
      alt: "Matching dual full leg mandala sleeves combining thigh lotus mandalas, Flower of Life shin panels, and isometric 3D cube geometry down to the feet, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-front-3d-cube-feet-dotwork-bloodline-phuket.webp",
      ),
      alt: "Front-facing dual full leg sleeves with thigh and knee mandalas, stacked 3D cube geometry on the shins, and fine dotwork covering the feet, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-honeycomb-knee-bloodline-phuket.webp",
      ),
      alt: "Front-facing full leg mandala sleeve with honeycomb thigh geometry, a bold knee lotus mandala, and flowing dotwork panels down to the ankle, inked at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-knee-peony-floral-bloodline-phuket.webp",
      ),
      alt: "Full leg mandala sleeve centered on a knee lotus mandala with honeycomb thigh grids and shaded peony florals wrapping the lower shin, completed at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-peony-rock-on-ankle-bloodline-phuket.webp",
      ),
      alt: "Intricate full leg geometric mandala sleeve with a knee lotus, peony florals on the calf, and a rock-on hand icon at the ankle band, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-head-back-mandala-flower-of-life-neck-bloodline-phuket.webp",
      ),
      alt: "Back-of-head and neck geometric mandala with a central occipital lotus, Flower of Life crown pattern, and bold symmetrical neck panels in dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-head-side-mandala-ear-flower-of-life-neck-bloodline-phuket.webp",
      ),
      alt: "Side-of-head mandala work with a large lotus framing the ear, Flower of Life temple geometry, and dense neck blackwork dotwork panels, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-head-side-mandala-geometric-neck-bloodline-phuket.webp",
      ),
      alt: "Side-profile head and neck mandala tattoo with a temple lotus mandala transitioning into layered geometric dotwork down the neck, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4166-bloodline-phuket.webp"),
      alt: "Black and grey mandala full sleeve with layered shoulder and forearm mandalas connected by Flower of Life dotwork grids at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4173-bloodline-phuket.webp"),
      alt: "Geometric mandala dotwork full sleeve with large elbow and wrist mandalas set in a repeating sacred-geometry star grid at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4232-bloodline-phuket.webp"),
      alt: "Chest and arm mandala tattoo with a large pectoral lotus mandala flowing into a honeycomb geometric forearm sleeve at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4238-bloodline-phuket.webp"),
      alt: "Chest mandala and full arm sleeve with dotwork lotus patterns, overlapping shoulder mandalas, and hexagonal forearm geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4241-bloodline-phuket.webp"),
      alt: "Blackwork mandala sleeve with a realistic skull bearing a forehead mandala, chest filigree, and star geometric wrist patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4296-bloodline-phuket.webp"),
      alt: "Dotwork mandala sleeve with a pointed shoulder mandala, Flower of Life mid-arm panels, and interlocking diamond forearm geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4300-bloodline-phuket.webp"),
      alt: "Mandala and geometric sleeve with shoulder lotus mandalas, a framed forearm skull, and honeycomb wrist patterns in black ink at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4304-bloodline-phuket.webp"),
      alt: "Black ink geometric mandala sleeve with a pointed shoulder mandala, Flower of Life upper arm fill, and a sunburst elbow focal point at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4733-bloodline-phuket.webp"),
      alt: "Full mandala sleeve with shoulder and forearm lotus mandalas, Flower of Life bands, and 3D cube dotwork near the wrist at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4867-bloodline-phuket.webp"),
      alt: "Full leg mandala blackwork with a radiating knee mandala, pointed lotus panels, geometric shin bands, and a foot mandala at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4870-bloodline-phuket.webp"),
      alt: "Geometric mandala leg sleeve with thigh 3D cube patterns, circular dotwork mandalas, and a foot mandala in high-contrast blackwork at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4874-bloodline-phuket.webp"),
      alt: "Front leg mandala tattoo with a thigh lotus mandala, a 3D geometric knee knot, and a skull set in a honeycomb shin grid at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4974-bloodline-phuket.webp"),
      alt: "Mandala dotwork sleeve with a large shoulder lotus, diagonal negative-space bands, and a dense hexagonal forearm pattern at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4979-bloodline-phuket.webp"),
      alt: "Geometric mandala sleeve with star-shaped upper arm mandalas, a sweeping negative-space curve, and stippled hexagonal wrist fill at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4980-bloodline-phuket.webp"),
      alt: "Black and grey mandala sleeve with dotwork shoulder and elbow mandalas separated by a hexagonal star band at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-6838-bloodline-phuket.webp"),
      alt: "Symmetrical ornamental back mandala with a diamond central motif, stippled dotwork shading, and large peony florals on the shoulder blades at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8078-bloodline-phuket.webp"),
      alt: "Leg tattoo combining a snarling tiger portrait with light eyes, hexagonal filler, and large knee and shin lotus mandalas at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8081-bloodline-phuket.webp"),
      alt: "Full leg mandala sleeve with a peeking tiger, honeycomb hexagon grids, Flower of Life panels, and a calf lotus mandala at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8083-bloodline-phuket.webp"),
      alt: "Stacked blackwork leg mandalas with a thigh lotus, a diamond-framed knee floral, and a circular shin mandala with ankle geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8283-bloodline-phuket.webp"),
      alt: "Panelled geometric mandala sleeve with a dotwork spiral shoulder, hexagonal grids, Flower of Life sections, and honeycomb forearm fill at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8285-bloodline-phuket.webp"),
      alt: "Geometric mandala sleeve with Asanoha triangle upper arm panels, a bold elbow band, and concentric 3D-shaded hexagons on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9433-bloodline-phuket.webp"),
      alt: "Upper-back symmetrical mandala with ornate swirling layers, bold black outlines, and fine stippled dotwork shading at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9499-bloodline-phuket.webp"),
      alt: "Dual-leg mandala blackwork with radiating knee mandalas, interlocking star shin bands, and bold symmetrical lower-leg geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9500-bloodline-phuket.webp"),
      alt: "Ornamental blackwork calf tattoo with a symmetrical diamond sunburst and mirrored blade-like geometric panels at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9738-bloodline-phuket.webp"),
      alt: "Full leg mandala sleeve with a thigh lotus mandala, ornamental scrollwork, 3D cube calf geometry, and Flower of Life ankle patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9743-bloodline-phuket.webp"),
      alt: "Egyptian-themed leg tattoo with blue-eyed Anubis, hieroglyphs, pyramid emblems, and Flower of Life geometric backgrounds at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9745-bloodline-phuket.webp"),
      alt: "Full leg geometric mandala sleeve with Flower of Life panels, honeycomb grids, and bold ornamental blackwork separators at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9827-bloodline-phuket.webp"),
      alt: "Back-of-head occipital lotus mandala flowing into a triangular neck geometric panel with stippled dotwork at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-skull-crown-mandala-geometric-full-sleeve-spiral-bloodline-phuket.webp",
      ),
      alt: "Full arm mandala sleeve anchored by an ornate skull and mini-skull crown on the shoulder, flowing through Flower of Life geometry and a negative-space spiral divider, at Bloodline Tattoo Phuket.",
    },
  ],
};

function getMandalaStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof mandalaStudioMediaByRegion)["bangkok"],
): string {
  if (!isMandalaStudioRegion(studio)) {
    return mandalaStudioMediaByRegion.bangkok[slot];
  }

  return mandalaStudioMediaByRegion[studio][slot];
}

function getMandalaProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isMandalaStudioRegion(studio)) {
    return [];
  }

  return mandalaProofPoolsByStudio[studio];
}

export {
  getMandalaProofPoolForStudio,
  getMandalaStudioMediaAlt,
  mandalaProofPoolsByStudio,
  mandalaStudioMediaByRegion,
};
