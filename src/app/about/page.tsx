import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { regionConfig } = await getRequestRegionContext();
  return {
    title: `About | ${regionConfig.seo.siteName}`,
    description: `Studio standards, hygiene, and craft positioning for Bloodline in ${regionConfig.regionName}.`,
  };
}

export default async function AboutPage() {
  const { regionConfig } = await getRequestRegionContext();

  return (
    <div className="bg-background section-space">
      <Container size="narrow" className="flex flex-col gap-6">
        <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
          About
        </p>
        <h1 className="text-heading-display text-4xl text-foreground md:text-5xl">
          Inside the studio
        </h1>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug">
          Long-form about content for {regionConfig.regionName} is in editorial. This placeholder
          keeps the approved route live for navigation, SEO structure, and prefetch without 404
          noise.
        </p>
      </Container>
    </div>
  );
}
