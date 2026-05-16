import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui";
import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { tattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import { getRequestRegionContext } from "@/lib/request-region";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();
  const description =
    region === "global"
      ? "Browse tattoo styles offered across Bloodline studios in Bangkok, Bali, and Phuket."
      : `Browse tattoo styles available at Bloodline in ${regionConfig.regionName}.`;

  return {
    title: `Tattoo styles | ${regionConfig.seo.siteName}`,
    description,
  };
}

export default async function TattooStylesIndexPage() {
  const { region, regionConfig } = await getRequestRegionContext();
  const availableSlugs = tattooStyleSlugsForRegion(region);

  return (
    <div className="bg-background section-space">
      <Container size="narrow" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
            Tattoo styles
          </p>
          <h1 className="text-heading-display text-4xl text-foreground md:text-5xl">
            {region === "global"
              ? "Styles across Bloodline Asia"
              : `Styles at Bloodline ${regionConfig.regionName}`}
          </h1>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug">
            {region === "global"
              ? "Every style below is offered at one or more Bloodline studios. Open a lane for approach, placement, and execution. Availability varies by location."
              : `Each style below is available at Bloodline ${regionConfig.regionName}. Open a lane for approach, placement, and disciplined execution.`}
          </p>
        </div>
        <ul className="grid gap-3">
          {availableSlugs.map((slug) => {
            const style = getTattooStyleBySlug(slug);
            return (
              <li key={slug}>
                <Link
                  href={`/tattoo-styles/${slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full justify-between sm:w-auto",
                  )}
                >
                  <span className="font-heading text-lg font-semibold uppercase tracking-tight">
                    {style.title}
                  </span>
                  <span aria-hidden className="text-muted-foreground">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
