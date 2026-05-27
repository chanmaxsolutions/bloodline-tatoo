import Image from "next/image";
import Link from "next/link";
import { GALLERY_CATEGORY_LABELS } from "@/config/gallery-catalog";
import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/gallery";

const galleryCardBaseClassName = cn(
  "group relative isolate flex flex-col overflow-hidden rounded-xl border border-border/35 bg-surface-elevated/90",
  "motion-fast transition-[border-color,background-color]",
  "hover:border-white/8 hover:bg-surface-elevated",
);

const galleryCardMediaClassName = "relative aspect-4/3 w-full shrink-0 overflow-hidden";

const galleryCardFooterClassName = "flex flex-col gap-2 p-4 md:p-5";

const galleryStyleLinkClassName = cn(
  "font-sans text-sm font-medium text-muted-foreground underline-offset-4 transition-colors motion-fast",
  "hover:text-accent hover:underline",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

interface GalleryItemCardProps {
  item: GalleryItem;
  variant?: "default" | "featured";
  priority?: boolean;
}

function GalleryItemCard({ item, variant = "default", priority = false }: GalleryItemCardProps) {
  const isFeatured = variant === "featured";
  const styleEntry = item.styleSlug ? getTattooStyleBySlug(item.styleSlug) : undefined;

  return (
    <article className={galleryCardBaseClassName}>
      <div className={galleryCardMediaClassName}>
        <Image
          src={item.imageSrc}
          alt={item.alt}
          fill
          priority={priority}
          sizes={
            isFeatured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          quality={70}
          className="object-cover object-center motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-visible:scale-[1.02]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/10"
        />
      </div>
      <div className={galleryCardFooterClassName}>
        <p className="font-sans text-xs font-medium uppercase tracking-wide text-accent">
          {GALLERY_CATEGORY_LABELS[item.category]}
        </p>
        <h3
          className={cn(
            "font-heading font-bold uppercase leading-none tracking-tight text-foreground",
            isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl",
          )}
        >
          {item.title}
        </h3>
        {styleEntry ? (
          <Link href={`/tattoo-styles/${item.styleSlug}`} className={galleryStyleLinkClassName}>
            Explore {styleEntry.title}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export { GalleryItemCard };
