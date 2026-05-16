import type { TattooStyleDetailContent } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";

const realismProof = [
  {
    src: "/images/tattoo-styles/realism.jpg",
    alt: "Realistic black and grey tattoo portrait on skin",
  },
  {
    src: "/images/tattoo-styles/realism.jpg",
    alt: "Tonal shading and depth in realistic tattoo work",
  },
  {
    src: "/images/tattoo-styles/realism.jpg",
    alt: "Studio session for realistic tattoo execution",
  },
] as const;

const japaneseProof = [
  {
    src: "/images/tattoo-styles/japanese.jpg",
    alt: "Japanese tattoo sleeve with dragon and wave motifs",
  },
  {
    src: "/images/tattoo-styles/japanese.jpg",
    alt: "Irezumi composition with bold negative space",
  },
  {
    src: "/images/tattoo-styles/japanese.jpg",
    alt: "Long-form Japanese tattoo work in progress",
  },
] as const;

const tattooStyleDetailBySlug: Record<TattooStyleSlug, TattooStyleDetailContent> = {
  realism: {
    slug: "realism",
    metaDescription:
      "Realistic tattoos with portrait depth, tonal control, and skin-aware pacing at Bloodline. Consultation-led custom work built to read at distance and up close.",
    lead: "Realism at Bloodline is built on observation, restraint, and tonal discipline—not photographic pasting on skin.",
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
    proofImages: realismProof,
  },
  portrait: {
    slug: "portrait",
    metaDescription:
      "Portrait tattoos focused on likeness, expression, and tonal structure. Bloodline approaches faces and figures with restraint so work stays true on skin.",
    lead: "Portrait work demands more than detail—it demands structure, likeness, and respect for how faces age on skin.",
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
    proofImages: realismProof,
  },
  japanese: {
    slug: "japanese",
    metaDescription:
      "Japanese tattoos with irezumi discipline, negative space, and long-form composition. Bloodline builds bodysuits and panels with studio-standard structure.",
    lead: "Japanese work here follows composition first—flow, negative space, and long-term readability across the body.",
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
    proofImages: japaneseProof,
  },
  colour: {
    slug: "colour",
    metaDescription:
      "Colour tattoos with saturated palettes, clean packing, and healed clarity. Bloodline prioritizes colour that holds—not just pops on day one.",
    lead: "Colour work is governed by packing discipline, palette logic, and how pigment settles—not by chasing brightness alone.",
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
    proofImages: japaneseProof,
  },
  mandala: {
    slug: "mandala",
    metaDescription:
      "Mandala tattoos with radial symmetry, precise geometry, and balance for arms, backs, and chest. Bloodline engineers flow before line work.",
    lead: "Mandala work is geometry under restraint—symmetry, flow, and placement engineered for how the body moves.",
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
    proofImages: [
      {
        src: "/images/tattoo-styles/blackwork.jpg",
        alt: "Mandala tattoo with precise geometric symmetry",
      },
      {
        src: "/images/tattoo-styles/blackwork.jpg",
        alt: "Radial dotwork and line discipline in mandala work",
      },
      {
        src: "/images/tattoo-styles/blackwork.jpg",
        alt: "Geometric tattoo composition on skin",
      },
    ],
  },
  chicano: {
    slug: "chicano",
    metaDescription:
      "Chicano tattoos with lettering, script, and black-and-grey narrative. Bloodline applies West Coast discipline to lettering, portraits, and fine greywash.",
    lead: "Chicano-influenced work here is black-and-grey narrative—script, symbolism, and greywash with classic discipline.",
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
    proofImages: realismProof,
  },
  bamboo: {
    slug: "bamboo",
    metaDescription:
      "Bamboo hand-tap tattoos with traditional rhythm and cultural line weight. Available at Bloodline Bangkok and Bloodline Phuket.",
    lead: "Bamboo tattooing is approached as cultural craft—hand-tap rhythm, line weight, and session pacing that respect the ritual.",
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
    proofImages: japaneseProof,
  },
  healed: {
    slug: "healed",
    metaDescription:
      "Healed tattoo documentation at Bloodline Bali—line integrity, tone stability, and craft read once skin has settled.",
    lead: "Healed work is how we prove the standard—lines settled, tone stable, and craft that still reads once skin has done its job.",
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
    proofImages: [
      {
        src: "/images/tattoo-styles/fine-line.jpg",
        alt: "Healed fine tattoo work with clean settled lines",
      },
      {
        src: "/images/tattoo-styles/fine-line.jpg",
        alt: "Settled tonal work on healed skin",
      },
      {
        src: "/images/tattoo-styles/realism.jpg",
        alt: "Healed realistic tattoo with stable grey tones",
      },
    ],
  },
};

export { tattooStyleDetailBySlug };
