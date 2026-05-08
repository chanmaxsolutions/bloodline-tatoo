import { SectionShell } from "@/components/sections/section-shell";

interface TrustProofItem {
  label: string;
  value: string;
}

interface TrustProofBarSectionProps {
  items: TrustProofItem[];
}

function TrustProofBarSection({ items }: TrustProofBarSectionProps) {
  return (
    <SectionShell spacing="tight" containerSize="wide" className="pt-6 pb-8 md:pt-8 md:pb-10">
      <div className="border-y border-border bg-surface/70 px-0 py-3 md:py-4">
        <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.label} className="grid gap-0.5 px-2 md:px-3">
              <p className="text-heading-section text-lg text-foreground md:text-xl">
                {item.value}
              </p>
              <p className="text-xs uppercase tracking-tight text-muted-foreground md:text-sm">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

export { TrustProofBarSection };
export type { TrustProofItem };
