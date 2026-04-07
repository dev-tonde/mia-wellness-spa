import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

type FirstTimeBookingSectionProps = {
  description?: string;
  eyebrow?: string;
  showActions?: boolean;
  title?: string;
};

export function FirstTimeBookingSection({
  description = siteConfig.firstTimeBooking.description,
  eyebrow = siteConfig.firstTimeBooking.eyebrow,
  showActions = true,
  title = siteConfig.firstTimeBooking.title,
}: FirstTimeBookingSectionProps) {
  const bookingHref = getBookingHref();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.firstTimeBooking.items.map((item) => (
            <InfoCard description={item.description} key={item.title} title={item.title} />
          ))}
        </div>
        {showActions ? (
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.business.whatsappHref}>
              {siteConfig.firstTimeBooking.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink href={bookingHref} variant="secondary">
              {siteConfig.firstTimeBooking.secondaryCtaLabel}
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
