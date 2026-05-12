import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { regionConfig } = await getRequestRegionContext();
  return {
    title: `Tattoo blog | ${regionConfig.seo.siteName}`,
    description: `Education, traveler intent, and topical authority for ${regionConfig.regionName}.`,
  };
}

export default async function TattooBlogPage() {
  const { regionConfig } = await getRequestRegionContext();

  return (
    <div className="bg-background section-space">
      <Container size="narrow" className="flex flex-col gap-6">
        <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
          Blog
        </p>
        <h1 className="text-heading-display text-4xl text-foreground md:text-5xl">
          Tattoo education
        </h1>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug">
          MDX articles for {regionConfig.regionName} will publish here. The route is active so
          header navigation and RSC prefetch no longer hit 404 during audits or real sessions.
        </p>
      </Container>
    </div>
  );
}
