import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ServicesGridProps = {
  compact?: boolean;
  showCta?: boolean;
};

export function ServicesGrid({ compact = false, showCta = true }: ServicesGridProps) {
  const bookingHref = getBookingHref();
  const services = compact ? siteConfig.services.slice(0, 3) : siteConfig.services;

  return (
    <section className={cn("py-16 sm:py-20", compact && "pb-10")}>
      <Container>
        <SectionHeading
          description="Explore the massage and wellness treatments currently offered by Mia Wellness Spa, each presented clearly and without invented pricing or extra claims."
          eyebrow="Services preview"
          title="Treatments designed for relief, recovery, and restorative calm"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="group rounded-[1.75rem] border border-white/70 bg-off-white/70 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-off-white"
              key={service.name}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl text-charcoal">{service.name}</h3>
                <span className="rounded-full bg-sage-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sage-900">
                  Mobile
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">{service.description}</p>
              <p className="mt-5 rounded-2xl border border-charcoal/8 bg-white/72 px-4 py-3 text-sm text-charcoal/68">
                {service.focus}
              </p>
            </article>
          ))}
        </div>
        {showCta ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.links.servicesPage} variant="secondary">
              View all treatments
            </ButtonLink>
            <ButtonLink href={bookingHref}>Book an appointment</ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
