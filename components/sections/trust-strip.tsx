import Link from "next/link";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type TrustLink = {
  href: string;
  label: string;
};

type TrustStripProps = {
  items: readonly string[];
  links?: readonly TrustLink[];
  title?: string;
};

export function TrustStrip({
  items,
  links = [],
  title = "Why people choose the mobile experience",
}: TrustStripProps) {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <div className="rounded-[1.75rem] border border-white/70 bg-off-white/72 px-5 py-5 shadow-soft sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                Reassurance
              </p>
              <p className="mt-2 text-base text-charcoal/72">{title}</p>
            </div>
            {links.length > 0 ? (
              <nav aria-label="Helpful links" className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <Link
                    className="rounded-full border border-charcoal/10 bg-white/76 px-4 py-2 text-sm text-charcoal transition hover:bg-white hover:text-charcoal/80"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {items.map((item) => (
              <li
                className={cn(
                  "rounded-2xl border border-charcoal/8 bg-white/76 px-4 py-3 text-sm text-charcoal/72",
                )}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
