import type {
  TattooStyleDetailContent,
  TattooStyleDetailProofImage,
} from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";

/** Shared approach-band fallback when a style has no dedicated asset yet. */
const defaultApproachBandImage = {
  src: "/images/homepage-authority/institution-craft.jpg",
  alt: "Close detail of tattoo work in a controlled Bloodline studio session",
} as const satisfies TattooStyleDetailProofImage;

const tattooStyleDetailBySlug: Record<TattooStyleSlug, TattooStyleDetailContent> = {
  realism: {
    slug: "realism",
    metaDescription:
      "Realistic tattoos with portrait depth, tonal control, and skin-aware pacing at Bloodline. Consultation-led custom work built to read at distance and up close.",
    lead: "Realism at Bloodline is built on observation, restraint, and tonal discipline—not photographic pasting on skin.",
    overview: [
      "Realistic tattoos here are consultation-led from first reference through healed result. We map light flow, anatomical movement, and greywash pacing before saturation so work reads at distance and keeps dimensional clarity once skin settles.",
      "Whether you are planning portraits, wildlife, or cinematic black and grey, the goal is custom realism built for longevity—not a race to photographic density on day one.",
    ],
    approachHeadline: "REALISM IS NOT ABOUT COPYING PHOTOS",
    approachIntro:
      "We approach realism through structure, depth, and controlled tonal balance — not surface imitation. Light flow, anatomical movement, and long-term contrast are considered before the first pass begins, allowing the work to maintain dimensional clarity well beyond the healing stage.",
    philosophyBullets: [
      "Reference and placement logic mapped before line or tone",
      "Tonal structure planned around depth, movement, and light",
      "Greywash paced for contrast that survives healing",
    ],
    idealForBullets: [
      "Portraits, wildlife, and cinematic realism compositions",
      "Black and grey work requiring tonal depth and softness",
      "Large placements where texture and negative space matter",
    ],
    sessionBullets: [
      "Consultation focused on scale, flow, and composition",
      "Stencil and tonal mapping approved before saturation",
      "Healing guidance adjusted to density and body area",
    ],
    proofEyebrow: "Black & grey realism",
    proofHeading: "REALISTIC WORK ON SKIN",
    proofDescription:
      "Selected frames from recent black-and-grey realism—tonal depth, placement logic, and work built to read after healing.",
  },
  portrait: {
    slug: "portrait",
    metaDescription:
      "Portrait tattoos focused on likeness, expression, and tonal structure. Bloodline approaches faces and figures with restraint so work stays true on skin.",
    lead: "Portrait work demands more than detail—it demands structure, likeness, and respect for how faces age on skin.",
    overview: [
      "Portrait tattoos are judged on likeness, expression, and how tone holds as skin ages—not on how sharp the reference looked in the studio.",
      "At Bloodline we prioritise facial structure and contrast restraint so memorial, family, and cultural portraits stay recognisable and emotionally true long after healing. If your piece depends on presence and softness as much as detail, this is the discipline we plan for from the first consultation.",
    ],
    approachHeadline: "PORTRAIT WORK DEMANDS PRESENCE AND LIKENESS",
    approachIntro:
      "Portrait work depends on emotional accuracy, not photographic duplication alone. Facial structure, contrast restraint, and placement flow are carefully balanced so the tattoo retains expression, softness, and recognisable detail long after the skin settles.",
    philosophyBullets: [
      "Expression and facial structure prioritized before detail",
      "Contrast controlled to preserve softness and likeness",
      "Placement aligned with natural body movement and flow",
    ],
    idealForBullets: [
      "Family portraits and memorial tattoo compositions",
      "Celebrity, cinematic, and cultural portrait references",
      "Black and grey realism focused on emotional depth",
    ],
    sessionBullets: [
      "Consultation used to refine reference clarity and scale",
      "Stencil positioning approved before tonal layering begins",
      "Session pacing designed for detail retention and healing",
    ],
    proofEyebrow: "Likeness & expression",
    proofHeading: "PORTRAITS ON SKIN",
    proofDescription:
      "Recent portrait sessions focused on likeness, expression, and greywash restraint—not reference sharpness alone.",
  },
  japanese: {
    slug: "japanese",
    metaDescription:
      "Japanese tattoos with irezumi discipline, negative space, and long-form composition. Bloodline builds bodysuits and panels with studio-standard structure.",
    lead: "Japanese work here follows composition first—flow, negative space, and long-term readability across the body.",
    overview: [
      "Japanese tattooing at Bloodline follows irezumi discipline: bold line weight, deliberate negative space, and compositions engineered to move with the body. Sleeves, panels, and bodysuits are planned as continuous narratives—not isolated flash placed without flow.",
      "Dragons, koi, masks, and mythological themes are built with studio-standard structure so the work stays readable at scale for years.",
    ],
    approachHeadline: "JAPANESE WORK DEMANDS FLOW AND MOVEMENT",
    approachIntro:
      "Japanese tattooing relies on movement, balance, and visual rhythm across the body. Every element — from background composition to subject placement — is structured to create continuity, readability, and long-term visual harmony at scale.",
    philosophyBullets: [
      "Composition designed around body flow and movement",
      "Background balance treated as part of the storytelling",
      "Contrast and spacing structured for long-term readability",
    ],
    idealForBullets: [
      "Sleeves, bodysuits, and large narrative compositions",
      "Dragons, koi, samurai, masks, and mythological themes",
      "Clients seeking strong flow and visual continuity",
    ],
    sessionBullets: [
      "Consultation focused on composition and body placement",
      "Layout planning completed before linework progression",
      "Sessions paced around saturation and structural balance",
    ],
    proofEyebrow: "Irezumi discipline",
    proofHeading: "JAPANESE WORK ON SKIN",
    proofDescription:
      "Sleeves, panels, and bodysuit progress with irezumi flow, bold negative space, and long-form composition.",
  },
  colour: {
    slug: "colour",
    metaDescription:
      "Colour tattoos with saturated palettes, clean packing, and healed clarity. Bloodline prioritizes colour that holds—not just pops on day one.",
    lead: "Colour work is governed by packing discipline, palette logic, and how pigment settles—not by chasing brightness alone.",
    overview: [
      "Colour tattoos should hold clarity and balance after healing, not only on the day they are finished. We plan palette hierarchy, contrast separation, and packing pace around how pigment settles on your skin tone and placement.",
      "Illustrative, neo-traditional, anime, and floral concepts get the same discipline—saturated when it matters, restrained where longevity depends on it.",
    ],
    approachHeadline: "COLOUR WORK DEMANDS CONTROLLED SATURATION",
    approachIntro:
      "Strong colour tattoos rely on balance, restraint, and skin-aware application rather than brightness alone. Tone hierarchy, contrast separation, and placement strategy are carefully planned to preserve clarity and vibrancy as the tattoo heals over time.",
    philosophyBullets: [
      "Colour hierarchy planned before saturation begins",
      "Contrast structured to preserve readability and balance",
      "Skin tone considered throughout the composition process",
    ],
    idealForBullets: [
      "Vibrant illustrative and neo-traditional compositions",
      "Anime, floral, fantasy, and cinematic colour concepts",
      "Clients seeking bold visual impact with long-term clarity",
    ],
    sessionBullets: [
      "Consultation used to map palette and tonal direction",
      "Saturation paced carefully across sensitive body areas",
      "Healing guidance adjusted for colour retention stability",
    ],
    proofEyebrow: "Saturated colour",
    proofHeading: "COLOUR ON SKIN",
    proofDescription:
      "Saturated palettes and healed clarity from recent colour work—balance and packing discipline, not day-one brightness alone.",
  },
  mandala: {
    slug: "mandala",
    metaDescription:
      "Mandala tattoos with radial symmetry, precise geometry, and balance for arms, backs, and chest. Bloodline engineers flow before line work.",
    lead: "Mandala work is geometry under restraint—symmetry, flow, and placement engineered for how the body moves.",
    overview: [
      "Mandala tattoos live or die on symmetry, spacing, and how radial patterns sit on moving anatomy. We engineer flow for chest, back, arm, and spine placements before line work—so ornament reads balanced up close and from a distance.",
      "Dotwork and geometric repetition are paced for consistency, not density for its own sake.",
    ],
    approachHeadline: "MANDALA WORK RELIES ON PRECISION AND BALANCE",
    approachIntro:
      "Mandala tattooing depends on symmetry, spacing, and controlled repetition across the skin. Every line, pattern, and geometric transition is carefully structured to maintain clarity, flow, and visual stability at both close range and distance.",
    philosophyBullets: [
      "Symmetry and spacing mapped before stencil placement",
      "Line precision prioritized over unnecessary density",
      "Geometric balance structured for long-term readability",
    ],
    idealForBullets: [
      "Ornamental compositions and spiritual design structures",
      "Chest, knee, elbow, and spine-centered placements",
      "Clients seeking balanced and highly structured artwork",
    ],
    sessionBullets: [
      "Consultation focused on placement alignment and scale",
      "Stencil symmetry approved before linework progression",
      "Session pacing controlled for consistency and precision",
    ],
    proofEyebrow: "Geometry & dotwork",
    proofHeading: "MANDALA WORK ON SKIN",
    proofDescription:
      "Radial symmetry, dotwork discipline, and placements engineered for chest, back, and flowing anatomy.",
  },
  chicano: {
    slug: "chicano",
    metaDescription:
      "Chicano tattoos with lettering, script, and black-and-grey narrative. Bloodline applies West Coast discipline to lettering, portraits, and fine greywash.",
    lead: "Chicano-influenced work here is black-and-grey narrative—script, symbolism, and greywash with classic discipline.",
    overview: [
      "Chicano-influenced tattooing at Bloodline is black-and-grey storytelling: script, religious and cultural symbolism, portraits, and fine greywash held to West Coast discipline. Atmosphere and negative space matter as much as line—mood should survive healing, not wash out into flat grey.",
      "Lettering, imagery, and placement are balanced so the narrative reads as one composed piece.",
    ],
    approachHeadline: "CHICANO WORK DEMANDS CONTRAST AND ATMOSPHERE",
    approachIntro:
      "Chicano tattooing depends on atmosphere, storytelling, and controlled black-and-grey depth. Fine tonal transitions, lettering balance, and negative space are carefully managed to preserve mood, readability, and visual identity over time.",
    philosophyBullets: [
      "Black and grey depth structured through tonal restraint",
      "Negative space used to preserve clarity and atmosphere",
      "Lettering and imagery balanced within the composition",
    ],
    idealForBullets: [
      "Religious, cultural, and street-influenced compositions",
      "Portraits, script work, and narrative black-grey concepts",
      "Clients seeking mood-driven and expressive artwork",
    ],
    sessionBullets: [
      "Consultation focused on storytelling and placement flow",
      "Tonal structure planned before saturation layering begins",
      "Healing guidance matched to density and tonal softness",
    ],
    proofEyebrow: "Narrative black-grey",
    proofHeading: "CHICANO WORK ON SKIN",
    proofDescription:
      "Black-and-grey narrative, script, and greywash—atmosphere and negative space held with West Coast discipline.",
  },
  bamboo: {
    slug: "bamboo",
    metaDescription:
      "Bamboo hand-tap tattoos with traditional rhythm and cultural line weight. Available at Bloodline Bangkok and Bloodline Phuket.",
    lead: "Bamboo tattooing is approached as cultural craft—hand-tap rhythm, line weight, and session pacing that respect the ritual.",
    overview: [
      "Bamboo tattoos are applied by hand-tap rhythm rather than machine speed—depth, spacing, and saturation follow traditional pacing. Available at Bloodline Bangkok and Phuket, sessions are planned for clients who want authentic cultural line weight and organic texture.",
      "Design, placement, and aftercare are aligned to how bamboo work heals differently from machine tattooing.",
    ],
    approachHeadline: "BAMBOO TATTOOS DEMAND HAND-TAP RHYTHM AND PACE",
    approachIntro:
      "Traditional bamboo tattooing follows a slower and more deliberate application process than machine work. Depth, spacing, and hand-driven rhythm are carefully controlled to create organic texture, balanced saturation, and distinctive character across the skin.",
    philosophyBullets: [
      "Hand rhythm and spacing guide saturation consistency",
      "Traditional pacing respected throughout the application",
      "Organic texture preserved through controlled repetition",
    ],
    idealForBullets: [
      "Traditional Asian-inspired and symbolic compositions",
      "Clients seeking hand-applied cultural tattoo experiences",
      "Designs that benefit from texture and softer transitions",
    ],
    sessionBullets: [
      "Consultation used to align design and placement intent",
      "Hand application paced gradually for tonal consistency",
      "Aftercare guidance adapted for bamboo healing response",
    ],
    proofEyebrow: "Traditional hand-tap",
    proofHeading: "BAMBOO WORK ON SKIN",
    proofDescription:
      "Hand-tap line work, rhythm, and organic texture from traditional bamboo sessions in Bangkok and Phuket.",
  },
  healed: {
    slug: "healed",
    metaDescription:
      "Healed tattoo documentation at Bloodline Bali—line integrity, tone stability, and craft read once skin has settled.",
    lead: "Healed work is how we prove the standard—lines settled, tone stable, and craft that still reads once skin has done its job.",
    overview: [
      "Healed tattoo documentation shows what actually lasts: line integrity, tonal stability, and contrast that still reads once skin has settled. We evaluate work beyond fresh-session brightness—saturation, placement, and pacing are chosen with recovery in mind.",
      "If you care how a tattoo looks at six months and beyond, this is the standard we hold our realism, black and grey, and detail-heavy work to.",
    ],
    approachHeadline: "HEALED TATTOOS REVEAL REAL CRAFT STANDARDS",
    approachIntro:
      "A tattoo should hold clarity, balance, and readability long after the initial session is complete. Healed work reflects the discipline behind saturation, contrast control, placement strategy, and the long-term thinking built into every stage of execution.",
    philosophyBullets: [
      "Tattoos evaluated beyond fresh studio appearance alone",
      "Contrast and saturation balanced for long-term stability",
      "Placement planned around skin movement and aging",
    ],
    idealForBullets: [
      "Clients focused on longevity and healed visual quality",
      "Black and grey, realism, and high-detail compositions",
      "Work requiring strong retention after full recovery",
    ],
    sessionBullets: [
      "Consultation includes long-term healing considerations",
      "Saturation levels adjusted for lasting tonal balance",
      "Aftercare guidance tailored to placement and density",
    ],
    proofEyebrow: "After settle",
    proofHeading: "HEALED WORK ON SKIN",
    proofDescription:
      "Work photographed after settle—line integrity, tonal stability, and contrast that still reads once skin has recovered.",
  },
};

export { defaultApproachBandImage, tattooStyleDetailBySlug };
