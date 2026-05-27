import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbNavItem {
  label: string;
  href?: string;
}

const breadcrumbNavClassName =
  "flex flex-wrap items-center gap-x-2.5 gap-y-1 font-heading text-sm font-medium uppercase tracking-normal text-muted-foreground/55 md:text-base";

const breadcrumbLinkClassName =
  "motion-fast hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50";

const breadcrumbSeparatorClassName = "text-muted-foreground/25";

const breadcrumbCurrentClassName = "text-muted-foreground/70";

interface BreadcrumbNavProps {
  items: readonly BreadcrumbNavItem[];
  className?: string;
}

function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={breadcrumbNavClassName}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex flex-wrap items-center gap-x-2.5 gap-y-1"
            >
              {index > 0 ? (
                <span aria-hidden className={breadcrumbSeparatorClassName}>
                  ·
                </span>
              ) : null}
              {isLast || !item.href ? (
                <span aria-current="page" className={breadcrumbCurrentClassName}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={breadcrumbLinkClassName}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { BreadcrumbNav, breadcrumbNavClassName };
