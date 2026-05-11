import Image from "next/image";
import Link from "next/link";
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
        "group relative isolate flex aspect-3/4 min-h-[260px] overflow-hidden rounded-xs border border-border bg-surface-strong",
        "motion-fast outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        "hover:border-border-strong",
      )}
    >
      <Image
        src={tile.imageSrc}
        alt={tile.imageAlt}
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 100vw"
        className={cn(
          "object-cover object-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/20"
      />
      <div className="relative z-10 mt-auto flex flex-col gap-2 p-5 md:gap-2.5 md:p-6">
        <p className="font-heading text-lg font-semibold uppercase leading-none tracking-tight text-foreground md:text-xl">
          {tile.title}
        </p>
        <p className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base md:leading-snug">
          {tile.shortDescription}
        </p>
      </div>
    </Link>
  );
}

export { TattooStyleTile };
