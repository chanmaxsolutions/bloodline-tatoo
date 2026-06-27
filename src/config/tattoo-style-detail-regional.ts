import { tattooStyleDetailBySlug } from "@/config/tattoo-style-detail";
import type { TattooStyleDetailContent } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

const tattooStyleDetailRegionalOverrides: Partial<
  Record<TattooStyleSlug, Partial<Record<RegionSlug, Partial<TattooStyleDetailContent>>>>
> = {
  realism: {
    bangkok: {
      metaDescription:
        "Realistic tattoos in Bangkok at Bloodline. Portrait depth, tonal control and skin-aware pacing for international clients and Bangkok expats. Appointment only.",
      lead: "Realism at Bloodline Bangkok is built for clients who want work that holds up long after they leave the city. Tonal discipline, consultation first and no shortcuts.",
      overview: [
        "Bangkok attracts some of the most well-travelled tattoo clients in Asia. We see references from all over the world and we approach each one through structure, depth and greywash pacing rather than chasing photographic density on day one.",
        "Whether you are visiting Bangkok for a week or based here long term, we plan realistic work around your timeline, your skin tone and your placement so the result reads clearly once you are home and fully healed.",
      ],
    },
    bali: {
      metaDescription:
        "Realistic tattoos in Bali at Bloodline. Portrait depth, tonal control and careful consultation for longer-stay visitors and travellers. Appointment only.",
      lead: "Realism at Bloodline Bali is built around the time you have on the island. Proper consultation, skin-aware pacing and work planned to heal well in a tropical climate.",
      overview: [
        "Bali attracts clients who are here for longer than a weekend. That time works in your favour when it comes to realism. We can consult properly, pace the session without rushing and give your skin the recovery time it needs before you move on.",
        "Whether you are a digital nomad with a flexible schedule or a traveller with two weeks on the island, we plan realistic work around your stay so you leave with something built to last.",
      ],
    },
    phuket: {
      metaDescription:
        "Realistic tattoos in Phuket at Bloodline. Portrait depth, tonal control and sterile practice for resort visitors and Phuket expats. Appointment only.",
      lead: "Realism at Bloodline Phuket is built on the same disciplined foundation as our other studios. Consultation first, no walk-in pressure and work planned to hold up once you are back home.",
      overview: [
        "Phuket has no shortage of tattoo shops but very few that approach realism with genuine tonal discipline. At Bloodline Phuket we run appointment only, consult on every piece and pace sessions so the work reads clearly at distance and up close after healing.",
        "Many of our Phuket realism clients are visiting from Australia, Europe or the UK. We plan the session with your travel timeline in mind, including aftercare guidance for the flight home and the weeks that follow.",
      ],
    },
    global: {
      metaDescription:
        "Realistic tattoos across Bloodline studios in Bangkok, Bali and Phuket. Portrait depth, tonal control and skin-aware pacing. Appointment only.",
      lead: "Realism at Bloodline runs across Bangkok, Bali and Phuket on the same disciplined foundation. Consultation first, tonal structure planned and work built to hold long after the session ends.",
      overview: [
        "Across all three Bloodline studios, realistic tattoos are approached through observation, greywash discipline and skin-aware pacing rather than chasing photographic density on day one. The city changes. The standard does not.",
        "Whether you are planning your piece before you travel or deciding which studio to visit, we align on reference, placement and tonal direction in the consultation so the work reads clearly once you are home and fully healed.",
      ],
    },
  },

  portrait: {
    bangkok: {
      metaDescription:
        "Portrait tattoos in Bangkok at Bloodline. Likeness, expression and tonal structure for memorial, family and cultural portraits. Appointment only.",
      lead: "Portrait work in Bangkok at Bloodline is approached with emotional accuracy first. Likeness, skin-aware contrast and placement that respects how faces settle on skin over time.",
      overview: [
        "Portrait tattoos are among the most personal pieces we do in Bangkok. Whether the reference is a family member, a cultural figure or a cinematic subject, we approach every face through structure and contrast restraint rather than surface sharpness alone.",
        "Bangkok clients often travel with one session in mind. We make that session count by planning placement, tonal flow and reference clarity in the consultation before anything touches skin.",
      ],
    },
    bali: {
      metaDescription:
        "Portrait tattoos in Bali at Bloodline. Likeness, expression and tonal structure for meaningful and memorial portrait work. Appointment only.",
      lead: "Portrait work at Bloodline Bali is approached with care and emotional accuracy. Faces are built through structure and tonal restraint, not surface detail alone.",
      overview: [
        "Bali is a place where people often make meaningful decisions. Portrait tattoos here tend to carry personal weight, whether they are memorial pieces, family portraits or cultural references. We approach every one with the same structural discipline and tonal restraint.",
        "Longer stays in Bali mean we can take the time to consult properly, refine the reference and pace the session without rushing. That time investment shows in how the portrait holds once the skin has fully settled.",
      ],
    },
    phuket: {
      metaDescription:
        "Portrait tattoos in Phuket at Bloodline. Likeness, expression and tonal structure for visitors and expats seeking serious portrait work. Appointment only.",
      lead: "Portrait work at Bloodline Phuket is built on structural discipline and tonal restraint. Faces are approached with emotional accuracy, not just photographic sharpness.",
      overview: [
        "Phuket visitors who book portrait work at Bloodline are typically serious tattoo collectors. They have done their research, they know what good portrait work looks like healed and they choose us because we approach every face through structure, not just surface detail.",
        "We plan placement, reference clarity and tonal flow in the consultation. Session day is focused and paced. You leave with a portrait built to hold likeness and expression long after the skin has settled.",
      ],
    },
    global: {
      metaDescription:
        "Portrait tattoos across Bloodline studios in Bangkok, Bali and Phuket. Likeness, expression and tonal structure for serious portrait work. Appointment only.",
      lead: "Portrait work at Bloodline is approached with emotional accuracy across every studio. Likeness, contrast restraint and placement logic that respects how faces settle on skin over time.",
      overview: [
        "Across Bangkok, Bali and Phuket, portrait tattoos at Bloodline are built through facial structure and tonal discipline rather than surface sharpness alone. Memorial pieces, family portraits and cultural references are all approached with the same care.",
        "If you are planning a portrait and deciding which studio to visit, the consultation process is the same across every Bloodline room. We refine the reference, agree on placement and map tonal flow before anything is committed to skin.",
      ],
    },
  },

  japanese: {
    bangkok: {
      metaDescription:
        "Japanese tattoos in Bangkok at Bloodline. Irezumi discipline, bold composition and long-form bodysuit planning. Appointment only.",
      lead: "Japanese work at Bloodline Bangkok follows irezumi discipline. Composition, flow and negative space planned before a single line is laid, whether you are starting a sleeve or continuing a bodysuit.",
      overview: [
        "Bangkok is one of the best cities in Asia to begin or progress a Japanese bodysuit. Sessions can be planned across multiple visits and we work with clients who travel specifically for long-form Japanese compositions.",
        "Dragons, koi, masks and mythological themes are built here with structural discipline. Background balance, body flow and long-term readability are treated as part of the design from the first consultation.",
      ],
    },
    bali: {
      metaDescription:
        "Japanese tattoos in Bali at Bloodline. Irezumi discipline, bold composition and long-form planning for serious collectors. Appointment only.",
      lead: "Japanese work at Bloodline Bali follows irezumi discipline. Flow, negative space and long-form composition planned from the first consultation for work built to move with the body.",
      overview: [
        "Bali suits long-form Japanese work well. Clients on extended stays can begin a sleeve or bodysuit and return across multiple visits without the pressure of rushing a single session. We plan around your time on the island.",
        "Dragons, koi, samurai and mythological themes are built with structural discipline here. Background balance and body flow are treated as part of the design from the start, not added as afterthoughts.",
      ],
    },
    phuket: {
      metaDescription:
        "Japanese tattoos in Phuket at Bloodline. Irezumi discipline, bold composition and structured planning for sleeves and larger work. Appointment only.",
      lead: "Japanese work at Bloodline Phuket follows irezumi discipline. Composition and negative space are planned before line work begins, whether you are starting fresh or adding to existing work.",
      overview: [
        "Phuket clients booking Japanese work at Bloodline tend to be serious collectors with clear direction. We work through composition, body flow and placement logic in the consultation so the layout is fully approved before the session begins.",
        "Sleeves, panels and partial bodysuits are all approached with the same structural discipline. Background balance and long-term readability are built into the design from the first conversation.",
      ],
    },
    global: {
      metaDescription:
        "Japanese tattoos across Bloodline studios in Bangkok, Bali and Phuket. Irezumi discipline, bold composition and long-form bodysuit planning. Appointment only.",
      lead: "Japanese work at Bloodline follows irezumi discipline across every studio. Composition, flow and negative space planned before line work begins, whether you are starting a sleeve in Bangkok, Bali or Phuket.",
      overview: [
        "Across all three Bloodline studios, Japanese tattooing is approached through composition first. Bold line weight, deliberate negative space and narratives engineered to move with the body. The city changes. The structural discipline does not.",
        "If you are planning a sleeve or bodysuit and considering which city to visit, we can advise on session planning across multiple trips. Bangkok, Bali and Phuket all support long-form Japanese compositions with the same irezumi foundation.",
      ],
    },
  },

  colour: {
    bangkok: {
      metaDescription:
        "Colour tattoos in Bangkok at Bloodline. Saturated palettes, clean packing and healed clarity for illustrative and neo-traditional work. Appointment only.",
      lead: "Colour work at Bloodline Bangkok is governed by packing discipline and palette logic. We plan for how pigment settles on your skin tone, not just how bright it looks on the day.",
      overview: [
        "Bangkok humidity and sun exposure affect how colour heals. We factor in your lifestyle, your planned aftercare and your skin tone when building a palette so the work holds clarity and balance well beyond the session.",
        "Illustrative, neo-traditional, anime and floral concepts all get the same discipline here. Saturated where it matters, restrained where longevity depends on it.",
      ],
    },
    bali: {
      metaDescription:
        "Colour tattoos in Bali at Bloodline. Saturated palettes, clean packing and healed clarity planned around island climate and longer stays. Appointment only.",
      lead: "Colour work at Bloodline Bali is planned around how pigment heals in a tropical climate. Palette logic, packing discipline and skin-aware application so the work holds long after you leave the island.",
      overview: [
        "Bali sun, humidity and ocean exposure all affect how colour tattoos heal. We build that into the consultation, advising on aftercare and activity restrictions so your work has the best possible chance of settling cleanly.",
        "Longer stays in Bali mean we can pace colour sessions properly and follow up if needed. Illustrative, neo-traditional and floral concepts are all approached with the same discipline, saturated where it matters and restrained where longevity depends on it.",
      ],
    },
    phuket: {
      metaDescription:
        "Colour tattoos in Phuket at Bloodline. Saturated palettes, clean packing and healed clarity for resort visitors and serious collectors. Appointment only.",
      lead: "Colour work at Bloodline Phuket is built for longevity, not just day-one brightness. Palette logic, packing discipline and aftercare guidance tailored to a holiday environment.",
      overview: [
        "Getting a colour tattoo on holiday in Phuket requires planning. Sun, salt water and resort pools all affect healing. We advise on timing, aftercare and activity restrictions in the consultation so the work heals cleanly before you head home.",
        "Illustrative, neo-traditional, anime and floral concepts are all handled with the same packing discipline here. We build the palette around your skin tone and your post-holiday lifestyle, not just the reference image.",
      ],
    },
    global: {
      metaDescription:
        "Colour tattoos across Bloodline studios in Bangkok, Bali and Phuket. Saturated palettes, clean packing and healed clarity. Appointment only.",
      lead: "Colour work at Bloodline is governed by packing discipline and palette logic across every studio. We plan for how pigment settles on your skin, not just how bright it looks on the day.",
      overview: [
        "Bangkok, Bali and Phuket each present different healing environments for colour tattoos. Across all three studios we factor in climate, skin tone and your planned aftercare when building a palette so the work holds clarity and balance well beyond the session.",
        "Illustrative, neo-traditional, anime and floral concepts are handled with the same discipline across every Bloodline room. Saturated where it matters, restrained where longevity depends on it.",
      ],
    },
  },

  mandala: {
    bangkok: {
      metaDescription:
        "Mandala tattoos in Bangkok at Bloodline. Radial symmetry, precise geometry and balanced placement for chest, back and arm work. Appointment only.",
      lead: "Mandala work at Bloodline Bangkok is geometry under control. Symmetry, spacing and radial flow are engineered before line work so the piece reads balanced at every scale.",
      overview: [
        "Bangkok clients booking mandala and ornamental work often come with strong reference direction. We work through placement logic and symmetry mapping in the consultation so the stencil is approved before anything is committed to skin.",
        "Dotwork and geometric repetition are paced for consistency across the full piece. Chest, back, arm and spine placements are all handled with the same structural discipline.",
      ],
    },
    bali: {
      metaDescription:
        "Mandala tattoos in Bali at Bloodline. Radial symmetry, precise geometry and balanced placement for ornamental and spiritual compositions. Appointment only.",
      lead: "Mandala work at Bloodline Bali is precision and balance. Symmetry and radial flow are mapped before line work begins so the piece holds geometric integrity at every scale.",
      overview: [
        "Bali draws clients with a strong connection to ornamental and spiritual design. We approach mandala work here with the same structural discipline as our other studios, engineering symmetry and spacing before the stencil is placed.",
        "Dotwork and geometric repetition are paced for consistency. Whether you are planning a chest piece, a back mandala or an arm placement, the approach stays the same. Precision first, execution second.",
      ],
    },
    phuket: {
      metaDescription:
        "Mandala tattoos in Phuket at Bloodline. Radial symmetry, precise geometry and structured placement for chest, back and arm work. Appointment only.",
      lead: "Mandala work at Bloodline Phuket is built on symmetry and structural discipline. Radial flow and spacing are engineered before line work so the piece reads balanced and clean.",
      overview: [
        "Phuket clients booking mandala work at Bloodline come for precision. We map symmetry and placement logic in the consultation, approve the stencil before committing and pace the dotwork for consistency across the full piece.",
        "Chest, back, arm and spine placements are all handled with the same geometric discipline. Nothing is rushed and nothing is approximated.",
      ],
    },
    global: {
      metaDescription:
        "Mandala tattoos across Bloodline studios in Bangkok, Bali and Phuket. Radial symmetry, precise geometry and balanced placement. Appointment only.",
      lead: "Mandala work at Bloodline is geometry under control across every studio. Symmetry, spacing and radial flow engineered before line work so the piece reads balanced at every scale.",
      overview: [
        "Across Bangkok, Bali and Phuket, mandala and ornamental work is approached through symmetry mapping and placement logic before the stencil is placed. Dotwork and geometric repetition are paced for consistency, not density for its own sake.",
        "If you are planning a chest piece, back mandala or arm placement and deciding which studio to visit, the structural approach is the same across every Bloodline room. Precision first, execution second.",
      ],
    },
  },

  chicano: {
    bangkok: {
      metaDescription:
        "Chicano tattoos in Bangkok at Bloodline. Script, narrative black and grey and fine greywash with West Coast discipline. Appointment only.",
      lead: "Chicano-influenced work at Bloodline Bangkok is black and grey storytelling. Script, cultural symbolism and fine greywash built with atmosphere and contrast, not just line.",
      overview: [
        "Bangkok has a strong international client base and Chicano-influenced work draws clients from across the Americas, Europe and Australia. We approach every piece through narrative and tonal depth, ensuring mood survives healing rather than washing into flat grey.",
        "Lettering, portraiture and symbolic imagery are balanced as one composed piece. Placement and reference direction are agreed in the consultation before tonal layering begins.",
      ],
    },
    bali: {
      metaDescription:
        "Chicano tattoos in Bali at Bloodline. Script, narrative black and grey and fine greywash for clients seeking atmosphere and tonal depth. Appointment only.",
      lead: "Chicano-influenced work at Bloodline Bali is black and grey narrative built with atmosphere. Script, symbolism and fine greywash approached through tonal depth, not surface line alone.",
      overview: [
        "Bali attracts clients with strong personal narratives and Chicano-influenced work fits that energy well. We approach every piece through storytelling and tonal structure, ensuring the mood reads clearly once the skin has settled.",
        "Lettering, portraiture and symbolic imagery are treated as one composed piece. Reference direction and placement are agreed in the consultation before any tonal layering begins.",
      ],
    },
    phuket: {
      metaDescription:
        "Chicano tattoos in Phuket at Bloodline. Script, narrative black and grey and fine greywash with disciplined tonal structure. Appointment only.",
      lead: "Chicano-influenced work at Bloodline Phuket is black and grey storytelling with tonal discipline. Script, symbolism and fine greywash built for atmosphere that survives healing.",
      overview: [
        "Phuket clients booking Chicano-influenced work at Bloodline tend to arrive with strong reference direction and a clear sense of what they want the piece to say. We work through narrative, placement and tonal structure in the consultation so the composition reads as one complete piece.",
        "Lettering and symbolic imagery are balanced carefully. Mood and atmosphere are built through greywash and negative space, not just line weight.",
      ],
    },
    global: {
      metaDescription:
        "Chicano tattoos across Bloodline studios in Bangkok, Bali and Phuket. Script, narrative black and grey and fine greywash with disciplined tonal structure. Appointment only.",
      lead: "Chicano-influenced work at Bloodline is black and grey storytelling across every studio. Script, symbolism and fine greywash built with atmosphere and tonal depth, not just line.",
      overview: [
        "Across Bangkok, Bali and Phuket, Chicano-influenced tattooing at Bloodline is approached through narrative and tonal structure. Mood should survive healing rather than washing into flat grey. That discipline is the same in every room.",
        "Lettering, portraiture and symbolic imagery are balanced as one composed piece regardless of which studio you visit. Reference direction and placement are agreed in the consultation before any tonal layering begins.",
      ],
    },
  },

  bamboo: {
    bangkok: {
      metaDescription:
        "Bamboo hand-tap tattoos in Bangkok at Bloodline. Traditional rhythm, cultural line weight and hand-applied texture. Appointment only.",
      lead: "Bamboo tattooing at Bloodline Bangkok is approached as cultural craft. Hand-tap rhythm, traditional pacing and organic line weight for clients who want something machine work cannot replicate.",
      overview: [
        "Bangkok is one of the most authentic cities in the world to receive a traditional bamboo tattoo. At Bloodline Bangkok we treat every bamboo session with cultural respect, applying hand-tap rhythm and traditional pacing rather than chasing machine speed.",
        "Design, placement and aftercare are all adapted for how bamboo work heals differently from machine tattooing. If you are visiting Bangkok specifically for a bamboo experience, we plan the session around your stay and recovery time.",
      ],
    },
    phuket: {
      metaDescription:
        "Bamboo hand-tap tattoos in Phuket at Bloodline. Traditional rhythm, cultural line weight and hand-applied texture for resort visitors. Appointment only.",
      lead: "Bamboo tattooing at Bloodline Phuket is cultural craft treated with respect. Hand-tap rhythm, organic line weight and traditional pacing for clients who want an authentic experience.",
      overview: [
        "Phuket has a long cultural connection to traditional tattooing and at Bloodline Phuket we honour that through proper bamboo technique. Every session is hand-tap applied with traditional pacing, not adapted for machine speed.",
        "If you are visiting Phuket and want a bamboo tattoo done properly, we plan the session around your stay and recovery time. Design, placement and aftercare are all adapted for how bamboo work heals differently from machine work.",
      ],
    },
    global: {
      metaDescription:
        "Bamboo hand-tap tattoos at Bloodline Bangkok and Bloodline Phuket. Traditional rhythm, cultural line weight and hand-applied texture. Appointment only.",
      lead: "Bamboo tattooing at Bloodline is cultural craft approached with respect. Available at our Bangkok and Phuket studios, each session runs on hand-tap rhythm and traditional pacing.",
      overview: [
        "Traditional bamboo tattooing is available at Bloodline Bangkok and Bloodline Phuket. Both studios approach every session with cultural respect, applying hand-tap rhythm and organic pacing rather than adapting the technique for machine speed.",
        "If you are planning a bamboo tattoo and deciding between Bangkok and Phuket, we can advise on design, placement and how the technique heals differently from machine work. The cultural discipline is the same across both studios.",
      ],
    },
  },

  healed: {
    bali: {
      metaDescription:
        "Healed tattoo documentation from Bloodline Bali. Line integrity, tonal stability and craft that holds once skin has fully settled in a tropical climate.",
      lead: "Healed work from Bloodline Bali shows what actually lasts once the island climate has done its work. Line integrity, stable tone and contrast that still reads after full recovery.",
      overview: [
        "Bali is a uniquely demanding healing environment. Humidity, sun and ocean exposure all test how well a tattoo was built. Our healed documentation from Bali clients shows work that was planned and executed with that environment in mind from the start.",
        "If you are planning a tattoo in Bali and care how it looks six months later, the healed gallery is where we prove what our consultation process, pacing decisions and aftercare guidance actually deliver.",
      ],
      relatedBlogLinks: [
        {
          label: "Tattoo in Bali — booking guide",
          href: "/tattoo-blog/tattoo-in-bali-guide-for-australian-travellers",
        },
        {
          label: "Tattoo prices in Bali",
          href: "/tattoo-blog/tattoo-prices-in-bali-guide-for-australians",
        },
      ],
    },
    bangkok: {
      metaDescription:
        "Healed tattoo documentation from Bloodline Bangkok. Line integrity, tonal stability and craft that holds once skin has fully settled.",
      lead: "Healed work from Bloodline Bangkok shows what actually lasts once the city climate has done its work. Line integrity, stable tone and contrast that still reads after full recovery.",
      overview: [
        "Bangkok's heat and humidity test how well a tattoo was built from the first week onward. Our healed documentation shows work planned and executed with that environment in mind from the start.",
        "If you are planning a tattoo in Bangkok and care how it looks six months later, the healed gallery is where we prove what our consultation process, pacing decisions and aftercare guidance actually deliver.",
      ],
      relatedBlogLinks: [
        {
          label: "Is it safe to get a tattoo in Bangkok",
          href: "/tattoo-blog/is-it-safe-to-get-a-tattoo-in-bangkok",
        },
        {
          label: "Bangkok tattoo price guide",
          href: "/tattoo-blog/tattoo-bangkok-price-guide-for-australians",
        },
      ],
    },
    phuket: {
      metaDescription:
        "Healed tattoo documentation from Bloodline Phuket. Line integrity, tonal stability and craft that holds once skin has fully settled.",
      lead: "Healed work from Bloodline Phuket shows what actually lasts once island sun and salt air have done their work. Line integrity, stable tone and contrast that still reads after full recovery.",
      overview: [
        "Phuket's sun, humidity and resort pace test how well a tattoo was built from day one. Our healed documentation shows work planned and executed with that environment in mind from the start.",
        "If you are planning a tattoo in Phuket and care how it looks six months later, the healed gallery is where we prove what our consultation process, pacing decisions and aftercare guidance actually deliver.",
      ],
      relatedBlogLinks: [
        {
          label: "Tattoo in Phuket — booking guide",
          href: "/tattoo-blog/tattoo-in-phuket-thailand-guide-for-australians",
        },
        {
          label: "Are tattoos safe in Phuket",
          href: "/tattoo-blog/are-tattoos-safe-in-phuket-guide-for-travellers",
        },
      ],
    },
    global: {
      metaDescription:
        "Healed tattoo documentation across Bloodline studios in Bangkok, Bali and Phuket. Line integrity, tonal stability and craft that holds once skin has fully settled.",
      lead: "Healed work from Bloodline shows what actually lasts across every studio. Line integrity, stable tone and contrast that still reads once skin has done its job, whether in Bangkok, Bali or Phuket.",
      overview: [
        "Across all three Bloodline studios we document healed results because we stand behind what we build, not just how it looks on session day. Bangkok, Bali and Phuket each present different healing environments and the work holds across all of them.",
        "If you are planning a tattoo and care how it looks six months later, the healed gallery is where we prove the discipline behind our saturation choices, placement decisions and aftercare guidance across every studio.",
      ],
    },
  },
};

function tattooStyleDetailForRegion(
  slug: TattooStyleSlug,
  region: RegionSlug,
): TattooStyleDetailContent {
  const base = tattooStyleDetailBySlug[slug];
  const regional = tattooStyleDetailRegionalOverrides[slug]?.[region];

  if (!regional) {
    return base;
  }

  return { ...base, ...regional };
}

export { tattooStyleDetailForRegion, tattooStyleDetailRegionalOverrides };
