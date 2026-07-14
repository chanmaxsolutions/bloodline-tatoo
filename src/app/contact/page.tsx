import type { Metadata } from "next";
import { ContactPageFormSection } from "@/components/sections/contact-page-form-section";
import { ContactPageIntroSection } from "@/components/sections/contact-page-intro-section";
import { JsonLd } from "@/components/seo/json-ld";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { getContactPageContent } from "@/lib/contact-page";
import { buildStudioEntitySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `Contact & Book | ${regionConfig.seo.siteName}`
      : `Contact & Book in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Book Bloodline Tattoo across Bangkok, Bali, and Phuket. Message us on WhatsApp, Instagram, or Facebook—appointments confirmed in DMs only."
      : `Book Bloodline Tattoo in ${regionConfig.regionName}. Message the studio on WhatsApp, Instagram, or Facebook to plan your session.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/contact",
    },
    regionConfig,
  );
}

export default async function ContactPage() {
  const { region, regionConfig } = await getRequestRegionContext();
  const content = getContactPageContent(region);

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={buildStudioEntitySchema(regionConfig, region)} />
      <ContactPageIntroSection
        intro={content.intro}
        introBackgroundVideoSrc={homepageHeroVideoSrc(region)}
        introBackgroundPoster={{
          src: homepageMediaPaths.heroPoster(region),
          alt: `${regionConfig.seo.siteName} studio atmosphere`,
        }}
        isGlobal={content.isGlobal}
        channels={content.channels}
        studios={content.studios}
      />
      <ContactPageFormSection
        whatsappForm={content.whatsappForm}
        isGlobal={content.isGlobal}
        regionName={content.regionName}
        whatsappPhoneDigits={content.whatsappPhoneDigits}
        whatsappStudioOptions={content.whatsappStudioOptions}
      />
    </div>
  );
}
