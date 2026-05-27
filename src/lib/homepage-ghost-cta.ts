import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Shared homepage secondary CTA (authority band, tattoo-styles catalog link). */
const homepageGhostCtaSurfaceClassName =
  "w-auto max-w-full rounded-full border border-border-strong bg-background/35 text-muted-foreground hover:bg-background/55 hover:text-foreground";

function homepageGhostCtaClassName(motionClassName?: string) {
  return cn(
    buttonVariants({ variant: "ghost", size: "lg" }),
    "rounded-full",
    homepageGhostCtaSurfaceClassName,
    motionClassName,
  );
}

export { homepageGhostCtaClassName, homepageGhostCtaSurfaceClassName };
