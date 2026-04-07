import Link from "next/link";

import { Container } from "@/components/ui/container";
import { routeConfig } from "@/lib/business-config";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="rounded-[2rem] border border-white/70 bg-off-white/80 px-6 py-14 text-center shadow-soft sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sage-800/78">404</p>
          <h1 className="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-charcoal/72">
            The page you are looking for does not exist. You can head back home or move to the booking
            page to continue exploring Mia Wellness Spa.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-off-white transition hover:-translate-y-0.5"
              href={routeConfig.home}
            >
              Return home
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-charcoal/10 bg-white/72 px-5 py-3 text-sm font-medium text-charcoal transition hover:-translate-y-0.5"
              href={routeConfig.booking}
            >
              Go to booking
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
