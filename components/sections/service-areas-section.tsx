import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBookingHref } from "@/lib/booking";
import { businessConfig } from "@/lib/business-config";
import { siteConfig } from "@/lib/site-config";

type ServiceAreasSectionProps = {
  description?: string;
  eyebrow?: string;
  showActions?: boolean;
  title?: string;
};

export function ServiceAreasSection({
  description = siteConfig.serviceAreas.description,
  eyebrow = siteConfig.serviceAreas.eyebrow,
  showActions = true,
  title = siteConfig.serviceAreas.title,
}: ServiceAreasSectionProps) {
  const bookingHref = getBookingHref();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.serviceAreas.items.map((item) => (
            <InfoCard description={item.description} key={item.title} title={item.title} />
          ))}
        </div>
        <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-off-white/72 px-6 py-6 shadow-soft sm:px-8">
          <p className="text-sm leading-7 text-charcoal/70">{siteConfig.serviceAreas.note}</p>
          <p className="mt-3 text-sm leading-7 text-charcoal/60">
            {businessConfig.name} remains a house-call service only and does not operate from a
            public spa premises.
          </p>
          {showActions ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.business.whatsappHref}>
                {siteConfig.serviceAreas.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink href={bookingHref} variant="secondary">
                {siteConfig.serviceAreas.secondaryCtaLabel}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
