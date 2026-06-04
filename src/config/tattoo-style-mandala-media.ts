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
        "mandala-tattoo-photo-15-3-26-4-27-56-pm-bloodline-bangkok.jpg",
      ),
      alt: "Crown scalp mandala with layered lotus petals and stippled dotwork shading across the shaved head, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-1-bloodline-bangkok.jpg",
      ),
      alt: "Dual forearm views of blackwork sleeves with Metatron's Cube, floral mandalas, and hexagonal star dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-2-bloodline-bangkok.jpg",
      ),
      alt: "Shoulder mandala flowing into a honeycomb hex grid, each cell with a miniature geometric star in fine dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-21-bloodline-bangkok.jpg",
      ),
      alt: "Dual-arm sacred geometry sleeves with Metatron's Cube, large floral mandalas, and Flower of Life hex patterns in stippled black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-38-30-am-35-bloodline-bangkok.jpg",
      ),
      alt: "Large leg tattoo with angular blackwork panels of Polynesian-inspired geometric patterns, scales, and fine-line tribal ornament, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-13-bloodline-bangkok.jpg",
      ),
      alt: "Triptych forearm sleeve with pointed-arch mandalas, peony florals, and dense dotwork shading in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-14-bloodline-bangkok.jpg",
      ),
      alt: "Torso tattoo mixing chest mandala dotwork, geometric neck bands, and bold blackwork tribal patterns across both arms, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-16-bloodline-bangkok.jpg",
      ),
      alt: "Dual full sleeves with overlapping mandalas, rose-window geometry, and honeycomb hex florals in stippled dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-18-bloodline-bangkok.jpg",
      ),
      alt: "Dual-angle arm sleeve with floral mandalas, Flower of Life circles, and hexagonal tessellations in precision dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-19-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey realism sleeve with Zeus portrait, lightning, and armored Poseidon with trident in mythological shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-20-bloodline-bangkok.jpg",
      ),
      alt: "Full-back tattoo with snarling bear biting a Flower of Life sphere, Metatron's Cube, and lower mandala dotwork in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-21-bloodline-bangkok.jpg",
      ),
      alt: "Full arm sleeve with shoulder lotus mandala, spiraling black bands, hex grids, and Flower of Life dotwork sections, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-22-bloodline-bangkok.jpg",
      ),
      alt: "Full-leg sleeve with large geometric mandalas framed by bold blackwork curves and stippled dotwork gradients, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-23-bloodline-bangkok.jpg",
      ),
      alt: "Triptych limb views of a wraparound mandala with triangular geometry and wrist Flower of Life dotwork in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-24-bloodline-bangkok.jpg",
      ),
      alt: "Forearm mandala with eight dark petals, arched geometric layers, and smooth stippled dotwork shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-25-bloodline-bangkok.jpg",
      ),
      alt: "Triptych full-leg tattoo with Flower of Life panels, central lower-leg mandala, and architectural dotwork pathways, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-26-bloodline-bangkok.jpg",
      ),
      alt: "Full sleeve blending ancient deity portrait, elbow mandala knot, honeycomb hex grid, and realistic skull in dotwork black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-27-bloodline-bangkok.jpg",
      ),
      alt: "Full sleeve with shoulder mandala, negative-space bands, and interlocking 3D cube and hex dotwork patterns, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-30-bloodline-bangkok.jpg",
      ),
      alt: "Arm tattoo with realistic lion portrait, compass rose forehead detail, metal chain, and large nautical compass in black and grey realism, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-31-bloodline-bangkok.jpg",
      ),
      alt: "Dual-view sleeve merging realistic surreal portraits with mandala circles, honeycomb geometry, and Flower of Life dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-32-bloodline-bangkok.jpg",
      ),
      alt: "Forearm tattoo with realistic top and bottom roses framing a central eight-point mandala star in geometric dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-33-bloodline-bangkok.jpg",
      ),
      alt: "High-contrast ornamental blackwork sleeve using negative-space geometric lines, sunburst motifs, and filigree on saturated black fill, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-34-bloodline-bangkok.jpg",
      ),
      alt: "Diagonal full-arm sleeve with shoulder mandala, mid-arm hex florals, forearm Flower of Life grid, and wrist mandala accents in dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-4-bloodline-bangkok.jpg",
      ),
      alt: "Upper-leg mandala with layered geometric petals, stippled shading, and ornamental dotwork chandelier drops, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-5-1-bloodline-bangkok.jpg",
      ),
      alt: "Front neck tattoo with central throat mandala flanked by Flower of Life grids across collarbones in dense dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-photo-19-5-2026-11-58-32-am-5-bloodline-bangkok.jpg",
      ),
      alt: "Dual-limb black and grey piece with classical helmeted statue portrait, winged angel and shield, and flowing memorial script lettering, at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-hannya-mask-torn-flower-of-life-full-back-bloodline-bali.jpg",
      ),
      alt: "Full-back black and grey piece with a Hannya mask tearing through layered Flower of Life geometry and a pointed lower mandala in dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-back-lotus-ornamental-dotwork-mandala-bloodline-bali.jpg",
      ),
      alt: "Symmetrical full-back ornamental mandala with neck mandala, lotus petal panels, and dense stippled dotwork tapering to the lower back, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-buddha-crown-mandala-lotus-full-torso-front-bloodline-bali.jpg",
      ),
      alt: "Front torso mandala tattoo centered on a serene Buddha portrait with crown geometry, sacred geometry panels, and a glowing lotus base in dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-leg-mandala-greek-key-3d-cubes-triptych-bloodline-bali.jpg",
      ),
      alt: "Triptych view of a full leg mandala sleeve with Greek key bands, 3D cube geometry, honeycomb filler, and layered floral mandalas in black and grey, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-flower-of-life-mandala-full-arm-sleeve-dual-view-bloodline-bali.jpg",
      ),
      alt: "Dual-angle full arm sleeve with Flower of Life geometry, hexagonal mandalas, and stippled dotwork bands in ornamental black and grey, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-48-bloodline-bali.jpg"),
      alt: "Dual-angle full arm sleeves with layered mandalas, Flower of Life hex grids, and shaded chrysanthemum florals in black and grey dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-52-bloodline-bali.jpg"),
      alt: "Full sleeve pairing hexagonal dotwork grids, sunburst mandalas, and a shaded chrysanthemum in ornamental black and grey, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-56-1-bloodline-bali.jpg"),
      alt: "Symmetrical full-back mandala tattoo with upper floral geometry, isometric dotwork cubes on the shoulders, and a honeycomb hex grid across the lower back, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-56-bloodline-bali.jpg"),
      alt: "Full arm sleeve with angular upper mandala, Flower of Life hex grid, and rounded elbow mandala in stippled dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-57-1-bloodline-bali.jpg"),
      alt: "Neck and chest geometric tattoo with throat mandala, 3D cube dotwork bands, and a bold upper-chest mandala in black and grey stippling, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-57-bloodline-bali.jpg"),
      alt: "Dual-arm geometric sleeves with layered mandalas, Flower of Life grids, and hexagonal floral dotwork in high-contrast black and grey, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-59-1-bloodline-bali.jpg"),
      alt: "Triptych full sleeve with Hannya mask, sunburst mandalas, isometric cubes, and honeycomb dotwork in black and grey, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-58-59-bloodline-bali.jpg"),
      alt: "Full-back tattoo with realistic central eye framed by shadowed hands, upper mandala, and hexagonal Flower of Life panels in dense dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-59-03-bloodline-bali.jpg"),
      alt: "Full chest mandala integrating a surreal woman's portrait with concentric geometric petals and stippled dotwork shading, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc("bali", "mandala-tattoo-photo-21-04-25-13-59-07-bloodline-bali.jpg"),
      alt: "Full sleeve with layered mandalas, 3D cube optical patterns, and repeating hexagonal sacred geometry in black and grey dotwork, at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-full-leg-sleeve-four-view-collage-bloodline-phuket.jpg",
      ),
      alt: "Four-panel collage showcasing matching dual full leg mandala sleeves with honeycomb grids, knee lotus mandalas, and dense geometric dotwork from thigh to ankle, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-honeycomb-knee-bloodline-phuket.jpg",
      ),
      alt: "Front-facing full leg mandala sleeve with honeycomb thigh geometry, a bold knee lotus mandala, and flowing dotwork panels down to the ankle, inked at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-all-seeing-eye-triangle-bloodline-phuket.jpg",
      ),
      alt: "Symmetrical dual full leg mandala sleeves featuring thigh lotus mandalas, geometric honeycomb bands, and an all-seeing eye inside a triangle on the calf, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-knee-peony-floral-bloodline-phuket.jpg",
      ),
      alt: "Full leg mandala sleeve centered on a knee lotus mandala with honeycomb thigh grids and shaded peony florals wrapping the lower shin, completed at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-peony-rock-on-ankle-bloodline-phuket.jpg",
      ),
      alt: "Intricate full leg geometric mandala sleeve with a knee lotus, peony florals on the calf, and a rock-on hand icon at the ankle band, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-skull-crown-mandala-geometric-full-sleeve-spiral-bloodline-phuket.jpg",
      ),
      alt: "Full arm mandala sleeve anchored by an ornate skull and mini-skull crown on the shoulder, flowing through Flower of Life geometry and a negative-space spiral divider, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-full-leg-sleeves-front-feet-symmetrical-bloodline-phuket.jpg",
      ),
      alt: "Symmetrical front view of dual full leg mandala sleeves extending from the thighs over the knees and down to the tops of the feet in bold blackwork dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-flower-of-life-3d-cubes-bloodline-phuket.jpg",
      ),
      alt: "Matching dual full leg mandala sleeves combining thigh lotus mandalas, Flower of Life shin panels, and isometric 3D cube geometry down to the feet, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-back-mandala-3d-cube-bloodline-phuket.jpg",
      ),
      alt: "Posterior dual full leg mandala work with upper-thigh lotus mandalas, isometric 3D cube blackwork on the calves, and Flower of Life dotwork near the ankles, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-front-3d-cube-feet-dotwork-bloodline-phuket.jpg",
      ),
      alt: "Front-facing dual full leg sleeves with thigh and knee mandalas, stacked 3D cube geometry on the shins, and fine dotwork covering the feet, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-chest-mandala-all-seeing-eye-triangle-bloodline-phuket.jpg",
      ),
      alt: "Symmetrical chest mandala tattoo pairing large pectoral lotus mandalas with a central all-seeing eye inside a triangle and stippled dotwork radiating outward, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-head-back-mandala-flower-of-life-neck-bloodline-phuket.jpg",
      ),
      alt: "Back-of-head and neck geometric mandala with a central occipital lotus, Flower of Life crown pattern, and bold symmetrical neck panels in dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-head-side-mandala-geometric-neck-bloodline-phuket.jpg",
      ),
      alt: "Side-profile head and neck mandala tattoo with a temple lotus mandala transitioning into layered geometric dotwork down the neck, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-head-side-mandala-ear-flower-of-life-neck-bloodline-phuket.jpg",
      ),
      alt: "Side-of-head mandala work with a large lotus framing the ear, Flower of Life temple geometry, and dense neck blackwork dotwork panels, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4166-bloodline-phuket.jpg"),
      alt: "Black and grey mandala full sleeve with layered shoulder and forearm mandalas connected by Flower of Life dotwork grids at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4173-bloodline-phuket.jpg"),
      alt: "Geometric mandala dotwork full sleeve with large elbow and wrist mandalas set in a repeating sacred-geometry star grid at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4232-bloodline-phuket.jpg"),
      alt: "Chest and arm mandala tattoo with a large pectoral lotus mandala flowing into a honeycomb geometric forearm sleeve at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4238-bloodline-phuket.jpg"),
      alt: "Chest mandala and full arm sleeve with dotwork lotus patterns, overlapping shoulder mandalas, and hexagonal forearm geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4241-bloodline-phuket.jpg"),
      alt: "Blackwork mandala sleeve with a realistic skull bearing a forehead mandala, chest filigree, and star geometric wrist patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4296-bloodline-phuket.jpg"),
      alt: "Dotwork mandala sleeve with a pointed shoulder mandala, Flower of Life mid-arm panels, and interlocking diamond forearm geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4300-bloodline-phuket.jpg"),
      alt: "Mandala and geometric sleeve with shoulder lotus mandalas, a framed forearm skull, and honeycomb wrist patterns in black ink at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4304-bloodline-phuket.jpg"),
      alt: "Black ink geometric mandala sleeve with a pointed shoulder mandala, Flower of Life upper arm fill, and a sunburst elbow focal point at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4733-bloodline-phuket.jpg"),
      alt: "Full mandala sleeve with shoulder and forearm lotus mandalas, Flower of Life bands, and 3D cube dotwork near the wrist at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4867-bloodline-phuket.jpg"),
      alt: "Full leg mandala blackwork with a radiating knee mandala, pointed lotus panels, geometric shin bands, and a foot mandala at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4870-bloodline-phuket.jpg"),
      alt: "Geometric mandala leg sleeve with thigh 3D cube patterns, circular dotwork mandalas, and a foot mandala in high-contrast blackwork at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4874-bloodline-phuket.jpg"),
      alt: "Front leg mandala tattoo with a thigh lotus mandala, a 3D geometric knee knot, and a skull set in a honeycomb shin grid at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4974-bloodline-phuket.jpg"),
      alt: "Mandala dotwork sleeve with a large shoulder lotus, diagonal negative-space bands, and a dense hexagonal forearm pattern at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4979-bloodline-phuket.jpg"),
      alt: "Geometric mandala sleeve with star-shaped upper arm mandalas, a sweeping negative-space curve, and stippled hexagonal wrist fill at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-4980-bloodline-phuket.jpg"),
      alt: "Black and grey mandala sleeve with dotwork shoulder and elbow mandalas separated by a hexagonal star band at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-6838-bloodline-phuket.jpg"),
      alt: "Symmetrical ornamental back mandala with a diamond central motif, stippled dotwork shading, and large peony florals on the shoulder blades at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8078-bloodline-phuket.jpg"),
      alt: "Leg tattoo combining a snarling tiger portrait with light eyes, hexagonal filler, and large knee and shin lotus mandalas at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8081-bloodline-phuket.jpg"),
      alt: "Full leg mandala sleeve with a peeking tiger, honeycomb hexagon grids, Flower of Life panels, and a calf lotus mandala at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8083-bloodline-phuket.jpg"),
      alt: "Stacked blackwork leg mandalas with a thigh lotus, a diamond-framed knee floral, and a circular shin mandala with ankle geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8283-bloodline-phuket.jpg"),
      alt: "Panelled geometric mandala sleeve with a dotwork spiral shoulder, hexagonal grids, Flower of Life sections, and honeycomb forearm fill at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-8285-bloodline-phuket.jpg"),
      alt: "Geometric mandala sleeve with Asanoha triangle upper arm panels, a bold elbow band, and concentric 3D-shaded hexagons on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9433-bloodline-phuket.jpg"),
      alt: "Upper-back symmetrical mandala with ornate swirling layers, bold black outlines, and fine stippled dotwork shading at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9499-bloodline-phuket.jpg"),
      alt: "Dual-leg mandala blackwork with radiating knee mandalas, interlocking star shin bands, and bold symmetrical lower-leg geometry at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9500-bloodline-phuket.jpg"),
      alt: "Ornamental blackwork calf tattoo with a symmetrical diamond sunburst and mirrored blade-like geometric panels at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9738-bloodline-phuket.jpg"),
      alt: "Full leg mandala sleeve with a thigh lotus mandala, ornamental scrollwork, 3D cube calf geometry, and Flower of Life ankle patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9743-bloodline-phuket.jpg"),
      alt: "Egyptian-themed leg tattoo with blue-eyed Anubis, hieroglyphs, pyramid emblems, and Flower of Life geometric backgrounds at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9745-bloodline-phuket.jpg"),
      alt: "Full leg geometric mandala sleeve with Flower of Life panels, honeycomb grids, and bold ornamental blackwork separators at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc("phuket", "mandala-tattoo-img-9827-bloodline-phuket.jpg"),
      alt: "Back-of-head occipital lotus mandala flowing into a triangular neck geometric panel with stippled dotwork at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-celtic-triquetra-knotwork-full-arm-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey Celtic knotwork full arm sleeve featuring a bold Triquetra on the shoulder and interlocking braided patterns down to the wrist, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-celtic-braid-knotwork-geometric-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Intricate Celtic braid and geometric knotwork full sleeve with bold outlines and woven negative-space patterns from shoulder to wrist, at Bloodline Tattoo Phuket.",
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
