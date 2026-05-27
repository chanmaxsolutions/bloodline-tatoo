import { BookAppointmentTrigger } from "@/components/cta";
import { cn } from "@/lib/utils";

const panelAsideClassName = "rounded-xl border border-border/40 bg-surface-elevated/90 p-6 md:p-8";

const panelEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const panelTitleClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

interface BlogArticleActionPanelAsideProps {
  regionName: string;
  headerCtaLabel: string;
}

function BlogArticleActionPanelAside({
  regionName,
  headerCtaLabel,
}: BlogArticleActionPanelAsideProps) {
  return (
    <aside className={panelAsideClassName} aria-label="Book a Bloodline session">
      <p className={panelEyebrowClassName}>Ready to plan?</p>
      <p className={cn(panelTitleClassName, "mt-3 text-balance")}>Message Bloodline {regionName}</p>
      <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
        Send placement photos, references, and travel dates on WhatsApp. We reply with honest
        feasibility before you book flights or lock a session.
      </p>
      <div className="mt-6">
        <BookAppointmentTrigger variant="primary" size="lg" className="w-full sm:w-auto">
          {headerCtaLabel}
        </BookAppointmentTrigger>
      </div>
    </aside>
  );
}

export { BlogArticleActionPanelAside };
