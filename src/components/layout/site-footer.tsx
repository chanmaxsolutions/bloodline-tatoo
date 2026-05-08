import Link from "next/link";
import { Container } from "@/components/layout/container";
import { desktopNavigationItems } from "@/config/navigation";

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container size="wide" className="py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="grid gap-3">
            <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
              Bloodline Platform Shell
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Shared platform navigation and layout foundation for multi-region rollout.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3">
            {desktopNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-heading-section text-xs text-muted-foreground motion-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
