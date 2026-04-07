import { ButtonLink } from "@/components/ui/button-link";
import type { AnalyticsLinkEvent } from "@/lib/analytics";

type MobileStickyActionBarProps = {
  analytics?: AnalyticsLinkEvent;
  eyebrow: string;
  primaryHref: string;
  primaryLabel: string;
  subtitle: string;
};

export function MobileStickyActionBar({
  analytics,
  eyebrow,
  primaryHref,
  primaryLabel,
  subtitle,
}: MobileStickyActionBarProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-charcoal/10 bg-background/95 px-4 py-3 shadow-[0_-12px_30px_rgba(32,27,23,0.08)] backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sage-800/78">
            {eyebrow}
          </p>
          <p className="truncate text-sm text-charcoal/66">{subtitle}</p>
        </div>
        <ButtonLink analytics={analytics} className="shrink-0" href={primaryHref}>
          {primaryLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
