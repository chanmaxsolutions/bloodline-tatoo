import { cn } from "@/lib/utils";

/** Shared footer navigation typography (site footer + connect column). */
const footerColumnTitleClassName =
  "font-heading text-lg font-bold uppercase leading-none tracking-tight text-accent md:text-2xl";

const footerLinkClassName =
  "font-heading text-lg font-bold uppercase leading-none tracking-tight text-muted-foreground motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:text-xl";

/** Row layout aligned with footer region switcher links. */
const footerListRowClassName = cn(
  "group flex w-full min-h-7 items-center gap-2.5 py-0 motion-fast outline-none sm:min-h-8",
  "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const footerListItemClassName = "w-full";

const footerListRowIconShellClassName = cn(
  "flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface-strong p-1 shadow-sm ring-1 ring-black/20",
  "size-6 shrink-0 p-1 sm:size-7",
  "opacity-80 motion-fast group-hover:opacity-100 group-focus-visible:opacity-100",
);

const footerListRowLabelClassName = cn(
  "font-heading text-lg font-bold uppercase leading-none tracking-tight text-muted-foreground motion-fast md:text-xl",
  "group-hover:text-foreground group-focus-visible:text-foreground",
);

const footerColumnStackClassName = "flex flex-col gap-4 md:gap-6";

const footerListClassName = "m-0 flex w-full list-none flex-col gap-1.5 p-0 md:gap-2";

const footerTriggerClassName = "w-full cursor-pointer border-0 bg-transparent p-0 text-left";

export {
  footerColumnStackClassName,
  footerColumnTitleClassName,
  footerLinkClassName,
  footerListClassName,
  footerListItemClassName,
  footerListRowClassName,
  footerListRowIconShellClassName,
  footerListRowLabelClassName,
  footerTriggerClassName,
};
