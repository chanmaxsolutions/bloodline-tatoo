import Image from "next/image";
import Link from "next/link";
import { TileLinkArrow } from "@/components/shared/tile-link-arrow";
import { cn } from "@/lib/utils";
import type { TattooStyleHomepageTile } from "@/types/tattoo-style";

interface TattooStyleTileProps {
  tile: TattooStyleHomepageTile;
}

function TattooStyleTile({ tile }: TattooStyleTileProps) {
  return (
    <Link
      href={tile.href}
      className={cn(
        "group relative isolate flex aspect-16/10 overflow-hidden rounded-xl border border-white/5 bg-surface-elevated shadow-none",
        "md:aspect-3/4 md:min-h-[260px]",
        "motion-fast outline-none transition-[border-color]",
        "focus-visible:ring-2 focus-visible:ring-ring/50",
        "hover:border-white/10",
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
        <p className="font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground">
          {tile.title}
        </p>
        <p className="line-clamp-2 font-sans text-base leading-snug text-muted-foreground md:leading-relaxed">
          {tile.shortDescription}
        </p>
      </div>
    </Link>
  );
}

export { TattooStyleTile };
