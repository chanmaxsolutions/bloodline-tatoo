import Image from "next/image";
import Link from "next/link";
import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import { cn } from "@/lib/utils";
import type { TattooStyleHomepageTile } from "@/types/tattoo-style";

interface TattooStyleTileProps {
  tile: TattooStyleHomepageTile;
  showDescription?: boolean;
}

function TattooStyleTile({ tile, showDescription = true }: TattooStyleTileProps) {
  return (
    <Link
      href={tile.href}
      className={cn(
        "group relative isolate flex aspect-5/6 overflow-hidden rounded-xl border border-border/35 bg-surface-elevated/90 shadow-none",
        "md:aspect-2/3 md:min-h-[280px]",
        "motion-fast outline-none transition-[border-color,background-color]",
        "hover:border-white/8 hover:bg-surface-elevated",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
      )}
    >
      <Image
        src={tile.imageSrc}
        alt={tile.imageAlt}
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 100vw"
        quality={68}
        className="object-cover object-center shadow-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/90 to-background/25 md:via-background/80 md:to-background/20"
      />
      <TileLinkArrow className="pointer-events-none absolute right-3 top-3 z-20" />
      <div className="relative z-10 mt-auto flex flex-col gap-2 p-5 md:gap-2.5 md:p-6">
        <p className="font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground md:text-3xl">
          {tile.title}
        </p>
        {showDescription ? (
          <p className="line-clamp-2 font-sans text-base leading-relaxed text-muted-foreground">
            {tile.shortDescription}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export { TattooStyleTile };
