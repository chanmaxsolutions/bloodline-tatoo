import type { Metadata } from "next";
import { ContactPageSection } from "@/components/sections/contact-page-section";
import { getContactPageContent } from "@/lib/contact-page";
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
  const { region } = await getRequestRegionContext();
  const content = getContactPageContent(region);

  return (
    <div className="min-w-0 bg-background">
      <ContactPageSection content={content} />
    </div>
  );
}
