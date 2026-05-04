import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site-config";
import type { ServiceItem } from "@/lib/site-config";

type ServiceDetailCardProps = {
  bookingHref: string;
  service: ServiceItem;
};

export function ServiceDetailCard({ bookingHref, service }: ServiceDetailCardProps) {
  const headingId = `${service.name.toLowerCase().replace(/\s+/g, "-")}-title`;
  const durationValue = service.duration ?? siteConfig.servicesPage.serviceMeta.unavailableValue;
  const pricingValue = service.pricing ?? siteConfig.servicesPage.serviceMeta.unavailableValue;

  return (
    <article
      aria-labelledby={headingId}
      className="rounded-[1.85rem] border border-white/70 bg-off-white/74 p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-off-white sm:p-7"
    >
      <div className="relative mb-6 overflow-hidden rounded-[1.55rem] border border-white/70 bg-sand-100 shadow-sm">
        <div className="relative aspect-[4/3]">
          <Image
            alt={service.image.alt}
            className="object-cover"
            fill
            quality={86}
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
            src={service.image.src}
            style={
              service.image.objectPosition
                ? { objectPosition: service.image.objectPosition }
                : undefined
            }
          />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
            In-home treatment
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal" id={headingId}>
            {service.name}
          </h3>
        </div>
        <span className="rounded-full bg-sage-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sage-900">
          Mobile
        </span>
      </div>

      <p className="mt-5 text-base leading-8 text-charcoal/72">{service.description}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1.35rem] border border-charcoal/8 bg-white/78 p-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-charcoal/54">
            {siteConfig.servicesPage.serviceMeta.durationLabel}
          </p>
          <p className="mt-3 text-sm leading-7 text-charcoal/68">{durationValue}</p>
        </div>
        <div className="rounded-[1.35rem] border border-charcoal/8 bg-white/78 p-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-charcoal/54">
            {siteConfig.servicesPage.serviceMeta.pricingLabel}
          </p>
          <p className="mt-3 text-sm leading-7 text-charcoal/68">{pricingValue}</p>
        </div>
      </div>
      {!service.duration || !service.pricing ? (
        <p className="mt-3 text-xs leading-6 text-charcoal/52">
          {siteConfig.servicesPage.serviceMeta.unavailableNote}
        </p>
      ) : null}

      <div className="mt-6 rounded-[1.5rem] border border-charcoal/8 bg-white/78 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-800/78">
          Best for
        </p>
        <ul className="mt-4 space-y-3">
          {service.bestFor.map((item) => (
            <li className="flex gap-3 text-sm leading-7 text-charcoal/72" key={item}>
              <span
                aria-hidden="true"
                className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sage-700"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-charcoal/62">{service.focus}</p>
        <ButtonLink href={bookingHref} variant="secondary">
          Book this treatment
        </ButtonLink>
      </div>
    </article>
  );
}
