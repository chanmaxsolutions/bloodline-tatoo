import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ContactPageFormSection } from "@/components/sections/contact-page-form-section";
import { ContactPageIntroSection } from "@/components/sections/contact-page-intro-section";
import { ContactPageNarrativeSection } from "@/components/sections/contact-page-narrative-section";
import { JsonLd } from "@/components/seo/json-ld";
import { contactPageWhatsAppFormEnabled } from "@/config/contact-page";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { getContactPageContent } from "@/lib/contact-page";
import { buildStudioEntitySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  if (region === "global") {
    return buildMetadata(
      {
        title: regionConfig.seo.defaultTitle,
        description: regionConfig.seo.defaultDescription,
        canonicalPath: "/",
        ogImagePath: homepageMediaPaths.heroPoster(region),
      },
      regionConfig,
    );
  }

  const title = `Contact & Book in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;
  const description = `Book Bloodline Tattoo in ${regionConfig.regionName}. Message the studio on WhatsApp, Instagram, or Facebook to plan your session.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/contact",
      ogImagePath: homepageMediaPaths.heroPoster(region),
    },
    regionConfig,
  );
}

export default async function ContactPage() {
  const { region, regionConfig } = await getRequestRegionContext();

  if (region === "global") {
    redirect("/");
  }

  const content = getContactPageContent(region);
  const hasContentBelow = true;

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
        hasContentBelow={hasContentBelow}
      />
      <ContactPageNarrativeSection narrative={content.narrative} />
      {contactPageWhatsAppFormEnabled ? (
        <ContactPageFormSection
          whatsappForm={content.whatsappForm}
          isGlobal={content.isGlobal}
          regionName={content.regionName}
          whatsappPhoneDigits={content.whatsappPhoneDigits}
          whatsappStudioOptions={content.whatsappStudioOptions}
        />
      ) : null}
    </div>
  );
}
