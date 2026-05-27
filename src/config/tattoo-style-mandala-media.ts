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
        "mandala-tattoo-geometric-dotwork-full-sleeve-flower-of-life-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey full arm sleeve pairing large shoulder and forearm mandalas with dense Flower of Life hexagonal dotwork and negative-space bands, inked at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-multi-mandala-dotwork-full-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Intricate full sleeve with three layered mandalas from shoulder to wrist, connected by stippled Flower of Life geometry and sharp blackwork contrast, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-chest-mandala-hexagon-geometric-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Large chest mandala flowing into a right full sleeve of floral filigree, interlocking hexagons, and wrist dotwork in black and grey, completed at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-chest-honeycomb-mandala-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Left chest and full arm sleeve combining overlapping floral mandalas with honeycomb hexagon panels and precise dotwork shading, crafted at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-skull-mandala-geometric-chest-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Realistic shoulder skull above a dark mandala and geometric honeycomb full sleeve extending onto the chest in black and grey dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-flower-of-life-scale-pattern-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full arm sleeve anchored by a shoulder mandala and layered Flower of Life stars, semi-circular scale geometry, and wrist arch dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-skull-honeycomb-mandala-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full sleeve blending a dotwork shoulder mandala with a forearm skull set inside honeycomb geometry and angular blackwork symbols, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-elbow-mandala-kaleidoscope-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "High-contrast full sleeve with a shoulder mandala, hexagonal grid bicep band, and elbow kaleidoscope mandala radiating diamond and triangle dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-3d-cubes-flower-of-life-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Geometric full arm sleeve featuring a shoulder mandala, Flower of Life elbow panel, 3D cube wrist motifs, and a bold upper-arm blackwork band, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-sunburst-lotus-full-leg-sleeve-foot-mandala-bloodline-bangkok.jpg",
      ),
      alt: "Full leg sleeve with a thigh sunburst mandala, lotus-shaped knee geometry, dense shin dotwork bands, and a matching foot mandala in blackwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-flower-of-life-honeycomb-full-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Comprehensive leg sleeve layering Flower of Life circles, honeycomb hexagons, and overlapping arc geometry down to the ankle and foot, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-thigh-mandala-skull-honeycomb-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full leg piece with a layered thigh mandala, geometric knot above the knee, realistic shin skull, and honeycomb dotwork tapering to an ankle band, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-shoulder-mandala-honeycomb-spiral-bands-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Shoulder mandala full sleeve divided by diagonal negative-space spirals over honeycomb hexagons and stippled star panels, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-crystalline-star-negative-space-curve-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Geometric full arm sleeve with crystalline six-point star lattices, a sweeping negative-space curve, and forearm hexagon dotwork panels, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-lotus-chrysanthemum-flower-of-life-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full sleeve combining a dotwork shoulder mandala, realistic chrysanthemum forearm bloom, hexagonal bands, and a Flower of Life wrist panel, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-polynesian-tribal-geometric-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Bold Polynesian-inspired tribal full sleeve with shoulder mask motif, chevron shark-tooth bands, and flowing geometric blackwork from shoulder to wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-chrysanthemum-mandala-dotwork-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey full sleeve linking a stippled shoulder mandala to a large chrysanthemum and wrist mandala geometry in fine dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-all-seeing-eye-hands-full-back-neck-bloodline-bangkok.jpg",
      ),
      alt: "Massive back and neck piece centered on an all-seeing eye held by dark hands, framed by hexagonal stars and layered mandala dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-loyalty-respect-strength-script-geometric-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full sleeve integrating bold Loyalty, Respect, and Strength script with ornamental geometric and dotwork mandala filler down to the hand, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-ornamental-geometric-polynesian-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Ornamental full sleeve wrapping the arm in Polynesian-inspired geometric arcs, triangular motifs, and mandala-like circular bands in blackwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-skull-compass-mandala-geometric-calf-bloodline-bangkok.jpg",
      ),
      alt: "Calf tattoo stacking a semi-circular mandala, ornate skull portrait, compass rose triangle, and Flower of Life dotwork tapering toward the ankle, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-hannya-mask-flower-of-life-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Full back black and grey piece with a realistic Hannya mask tearing through lotus and Flower of Life mandala geometry across the shoulders and lower back, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-geometric-tribal-neck-upper-back-blackwork-bloodline-bangkok.jpg",
      ),
      alt: "Symmetrical neck and upper back blackwork with a diamond monogram, scaled triangle centerpiece, and tribal geometric chevron bands, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-hexagon-3d-cubes-shin-calf-geometric-bloodline-bangkok.jpg",
      ),
      alt: "Lower leg geometric tattoo of interlocking hexagons filled with dotwork stars and 3D cube illusions running from knee to ankle, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-mandala-3d-cubes-blackwork-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Full back blackwork vest framing a central spine mandala, isometric cube shoulder panels, and honeycomb dotwork across the lower back, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-polynesian-mandala-shoulder-chest-half-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Polynesian-inspired chest and shoulder piece with a circular mandala cap, sunburst core, and layered tribal geometric bands on the upper arm, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-polynesian-geometric-chest-shoulder-piece-side-bloodline-bangkok.jpg",
      ),
      alt: "Side-view Polynesian geometric tattoo spanning the left chest and shoulder with chevron, wave, and mandala-like circular motifs in bold blackwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-lotus-sacred-geometry-heart-full-back-blackwork-bloodline-bangkok.jpg",
      ),
      alt: "Symmetrical full back blackwork with a neck lotus, heart-shaped sacred geometry centerpiece, floral grid, and ornamental scrollwork tapering at the waist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-chrysanthemum-hexagon-dotwork-mandala-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full sleeve alternating a 12-point dotwork mandala and nested hexagons with realistic chrysanthemum blooms and geometric mesh forearm panels, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-dual-sleeve-chrysanthemum-hexagon-mandala-bloodline-bangkok.jpg",
      ),
      alt: "Matching dual full sleeves pairing large dotwork mandalas and hexagonal star grids with dark chrysanthemum florals in black and grey, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-flower-of-life-floral-mandala-full-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full arm sleeve weaving a star mandala, Flower of Life dotwork band, and layered floral mandala petals with ornamental blackwork filler, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-mandala-3d-cubes-honeycomb-dotwork-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Architectural full back tattoo with a central mandala, 3D cube shoulder grids, fan-shaped dotwork panels, and honeycomb lower-back geometry in blackwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: mandalaProofSrc(
        "bangkok",
        "mandala-tattoo-throat-chest-geometric-dotwork-mandala-bloodline-bangkok.jpg",
      ),
      alt: "Throat and chest geometric piece with a dotwork floral mandala, 3D cube neck panels, Flower of Life band, and bold chest mandala in black and grey, at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-mandala-geometric-dotwork-full-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Intricate black and grey mandala and geometric dotwork full arm sleeve with floral mandalas, star bands, and overlapping circular patterns, inked at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-back-floral-lotus-shield-mandala-bloodline-bali.jpg",
      ),
      alt: "Large symmetrical back piece combining a spine-centered shield mandala, peony-style florals, and dense dotwork ornamental patterns across both shoulder blades, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-snarling-tiger-mandala-geometric-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey full leg sleeve pairing a realistic snarling tiger on the thigh with a knee mandala and hexagonal geometric dotwork down the shin, completed at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-tiger-hexagon-flower-of-life-mandala-bloodline-bali.jpg",
      ),
      alt: "Complex full leg tattoo blending a tiger portrait, interlocking hexagon mandalas, Flower of Life geometry, and a bold calf mandala in dotwork blackwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-sleeve-mandala-geometric-dotwork-bloodline-bali.jpg",
      ),
      alt: "Stacked mandala and geometric dotwork full leg sleeve with a diamond-framed knee lotus, thigh mandala layers, and a floral shin mandala tapering to the ankle, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-geometric-full-sleeve-spiral-dotwork-negative-space-bloodline-bali.jpg",
      ),
      alt: "Geometric full arm sleeve divided by bold negative-space bands, featuring a stippled shoulder spiral, hexagonal grids, and nested star and hexagon dotwork panels, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-geometric-full-sleeve-asanoha-hexagon-dotwork-bloodline-bali.jpg",
      ),
      alt: "Precision geometric full sleeve with a dotwork shoulder mandala, Asanoha star lattice on the upper arm, honeycomb hexagons on the forearm, and wrist star motifs, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-large-ornamental-upper-back-mandala-bloodline-bali.jpg",
      ),
      alt: "Expansive ornamental upper back mandala with layered floral cores, scrollwork, scalloped edges, and stippled dotwork shading spanning shoulder to shoulder, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-dual-leg-mandala-geometric-blackwork-knees-bloodline-bali.jpg",
      ),
      alt: "Bold dual-leg mandala work with saturated blackwork knee mandalas, geometric star bands, and triangular dotwork grids covering both shins, crafted at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-ornamental-blackwork-geometric-calf-bloodline-bali.jpg",
      ),
      alt: "Symmetrical ornamental blackwork tattoo on the back of the calf with a central diamond starburst, gothic curves, and sharp geometric negative-space flourishes, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-mandala-honeycomb-flower-of-life-dotwork-bloodline-bali.jpg",
      ),
      alt: "Full leg sleeve anchored by an eight-point thigh mandala, flowing into dark scrollwork, 3D honeycomb geometry, and Flower of Life dotwork down to the ankle, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-egyptian-anubis-pyramid-geometric-full-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Full back-of-leg sleeve fusing Egyptian Anubis portraiture, pyramid scenes, hieroglyphics, and dense Flower of Life mandala dotwork from thigh to ankle, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-sacred-geometry-flower-of-life-sleeve-bloodline-bali.jpg",
      ),
      alt: "Comprehensive full leg sacred geometry sleeve with Flower of Life panels, tribal blackwork dividers, honeycomb hexagons, and ankle mandala dotwork, inked at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-head-neck-geometric-mandala-v-shape-bloodline-bali.jpg",
      ),
      alt: "Striking head and neck geometric mandala with stippled dotwork gradients framed by a bold V-shape extending from the occiput down the neck, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-overlapping-mandala-geometric-dotwork-bloodline-bali.jpg",
      ),
      alt: "High-contrast full right leg mandala sleeve with overlapping circular motifs and a matching partial geometric dotwork design on the left shin, completed at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-ornate-collar-chest-geometric-dotwork-bloodline-bali.jpg",
      ),
      alt: "Symmetrical ornamental collar chest tattoo with concentric geometric mandala bands, diamond lattices, and fine dotwork framing the neck and collarbones, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-shoulder-mandala-honeycomb-geometric-sleeve-bloodline-bali.jpg",
      ),
      alt: "Outer arm geometric sleeve led by a bold shoulder mandala, transitioning through honeycomb hexagons and a Flower of Life band down the forearm, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-geometric-3d-cube-mandala-back-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Posterior full leg sleeve with isometric 3D cube blackwork on the thigh, woven mid-leg geometry, and dense mandala star dotwork on the calf and ankle, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-mandala-isometric-cube-pattern-bloodline-bali.jpg",
      ),
      alt: "Full leg mandala tattoo pairing a radial thigh mandala with an extended isometric cube geometric grid and ankle floral dotwork, performed at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-leg-mandala-3d-cube-geometric-front-bloodline-bali.jpg",
      ),
      alt: "Front-facing full leg sleeve combining a large thigh mandala, 3D stacked cube geometry, a knee floral mandala, and repeating dotwork patterns to the ankle, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-intricate-geometric-chest-waves-dotwork-bloodline-bali.jpg",
      ),
      alt: "Shield-shaped full chest blackwork piece mixing stylized wave motifs, hexagonal grids, Flower of Life geometry, and heavy dotwork shading, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-buddha-full-torso-mandala-lotus-dotwork-bloodline-bali.jpg",
      ),
      alt: "Massive full torso mandala composition centered on a serene Buddha face with Flower of Life crown geometry, side panels, and a lotus base in dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-snake-geometric-wings-upper-back-mandala-bloodline-bali.jpg",
      ),
      alt: "Upper back geometric mandala with a coiled snake in a diamond frame flanked by symmetrical wing panels of chevrons, triangles, and stippled dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-sleeve-mandala-geometric-hand-dotwork-bloodline-bali.jpg",
      ),
      alt: "Complete left arm mandala sleeve from shoulder to hand with eight-point stars, Flower of Life sections, hexagonal geometry, and a circular hand mandala, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-back-intricate-geometric-mandala-bloodline-bali.jpg",
      ),
      alt: "Full back mandala tattoo with a central floral sun motif, V-shaped geometric spine panel, and layered lotus scrollwork in bold blackwork and dotwork, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-foo-dog-chest-mandala-flower-of-life-bloodline-bali.jpg",
      ),
      alt: "Large chest piece featuring mirrored Foo Dog heads around a central dotwork mandala and Flower of Life geometric background across both pectorals, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-mandala-geometric-dotwork-lower-leg-shin-bloodline-bali.jpg",
      ),
      alt: "Lower leg mandala tattoo with a V-shaped knee frame, central star mandala, honeycomb dotwork grid, and ornamental filigree panels on the shin, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-celtic-cross-knotwork-spiral-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey full sleeve with a detailed Celtic cross on the shoulder, triple spiral motifs on the bicep, and bold interlocking knotwork wrapping the forearm, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-skull-gothic-arch-snake-geometric-full-leg-bloodline-bali.jpg",
      ),
      alt: "Full leg sleeve merging a gothic cathedral skull with a snake on the thigh into ornamental geometric mandala and Flower of Life dotwork down the calf, at Bloodline Tattoo Bali.",
    },
    {
      src: mandalaProofSrc(
        "bali",
        "mandala-tattoo-full-sleeve-mandala-floral-peony-geometric-bloodline-bali.jpg",
      ),
      alt: "Elegant full arm sleeve blending shoulder and wrist mandalas with shaded peony florals and a Flower of Life geometric forearm band in dotwork, at Bloodline Tattoo Bali.",
    },
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
        "mandala-tattoo-buddha-crown-mandala-lotus-full-torso-front-bloodline-bali.jpg",
      ),
      alt: "Front torso mandala tattoo centered on a serene Buddha portrait with crown geometry, sacred geometry panels, and a glowing lotus base in dotwork, at Bloodline Tattoo Bali.",
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
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-hannya-snake-sacred-geometry-white-line-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Full arm sleeve merging a detailed Hannya mask and coiled snake with white-line sacred geometry, Metatron's Cube motifs, and blackout negative space to the hand, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-full-leg-sleeves-mandala-geometric-collage-bloodline-phuket.jpg",
      ),
      alt: "Collage view of dual full leg mandala sleeves packed with radiating lotus mandalas, honeycomb grids, and high-contrast geometric dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-back-eye-reaching-hands-mandala-bloodline-phuket.jpg",
      ),
      alt: "Large full back mandala piece centered on a realistic eye with stylized reaching hands, surrounded by Flower of Life geometry and layered dotwork lotus panels, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-hannya-geometric-mandala-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Full leg mandala sleeve integrating a Hannya mask on the thigh with radial sun mandalas, isometric cube geometry, and honeycomb dotwork wrapping the leg, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-geometric-face-chest-mandala-dotwork-bloodline-phuket.jpg",
      ),
      alt: "Surrealist chest mandala tattoo embedding a woman's face with closed eyes and shaded lips into a symmetrical geometric dotwork lattice across both pectorals, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-dual-leg-sleeves-3d-cube-mandala-dotwork-bloodline-phuket.jpg",
      ),
      alt: "Dual full leg mandala sleeves combining thigh lotus mandalas, isometric 3D cube panels, honeycomb grids, and stippled dotwork gradients on both legs, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-back-3d-cube-optical-mandala-bloodline-phuket.jpg",
      ),
      alt: "Expansive full back mandala tattoo with an isometric 3D cube optical-illusion field, central shoulder lotus, Flower of Life side panels, and a lower-back floral mandala, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-sleeve-shoulder-mandala-geometric-triangles-bloodline-phuket.jpg",
      ),
      alt: "Full arm mandala sleeve opening with a large shoulder lotus, cascading into crystalline triangle lattices and overlapping wrist mandalas in dotwork blackwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-neck-chest-flower-of-life-3d-cube-bloodline-phuket.jpg",
      ),
      alt: "Neck and chest geometric mandala tattoo with Flower of Life throat bands, isometric 3D cube panels on the neck sides, and a bold pectoral lotus mandala, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-mandala-geometric-front-bloodline-phuket.jpg",
      ),
      alt: "Front-facing full leg mandala sleeve with layered thigh lotus mandalas, architectural geometric linework, and a dense Flower of Life band down the shin, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-side-honeycomb-mandala-bloodline-phuket.jpg",
      ),
      alt: "Side-view full leg mandala sleeve led by honeycomb hexagon grids on the thigh and stacked lotus mandalas flowing down the shin in dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-back-mandala-flower-of-life-bloodline-phuket.jpg",
      ),
      alt: "Back-of-leg full mandala sleeve with an upper-thigh lotus mandala, Flower of Life geometry at the knee, and a radial calf mandala tapering to the ankle, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-geometric-mandala-knee-cube-bloodline-phuket.jpg",
      ),
      alt: "Right leg full geometric mandala sleeve with a radiating thigh mandala, isometric cube knee panel, honeycomb shin grids, and ankle floral dotwork, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-radiating-mandala-isometric-cube-bloodline-phuket.jpg",
      ),
      alt: "Left leg full mandala sleeve featuring a radiating thigh lotus, sacred geometry knee bands, and extended isometric cube dotwork down the calf, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-hannya-asanoha-seigaiha-kikkō-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Full leg sleeve blending a Hannya mask on the thigh with Asanoha stars, Seigaiha waves, Kikkō hexagons, and mandala geometry wrapping the leg, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-back-3d-hexagon-flower-of-life-bloodline-phuket.jpg",
      ),
      alt: "Posterior full leg mandala sleeve pairing upper-thigh 3D hexagon blackwork with a dense Flower of Life dotwork grid down the calf and ankle, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-leg-sleeve-front-mandala-knee-3d-cubes-bloodline-phuket.jpg",
      ),
      alt: "Front full leg mandala sleeve with bold thigh geometry, a stippled knee lotus mandala, and stacked isometric 3D cube panels on the lower shin, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-woman-face-surrealist-mandala-chest-peonies-bloodline-phuket.jpg",
      ),
      alt: "Surrealist chest mandala tattoo of a woman's serene face emerging from layered geometric dotwork, framed by dark peony florals on the collarbones, at Bloodline Tattoo Phuket.",
    },
    {
      src: mandalaProofSrc(
        "phuket",
        "mandala-tattoo-full-arm-sleeve-mandala-floral-chrysanthemum-dotwork-bloodline-phuket.jpg",
      ),
      alt: "Full arm mandala sleeve for a woman combining a shoulder lotus mandala, shaded chrysanthemum florals at the elbow, and geometric wrist dotwork bands, at Bloodline Tattoo Phuket.",
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
