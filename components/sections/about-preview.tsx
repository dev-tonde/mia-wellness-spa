import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

export function AboutPreview() {
  const bookingHref = getBookingHref();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PlaceholderVisual
            caption="This visual block holds the place of future lifestyle or treatment imagery while keeping the page polished today."
            eyebrow="About the brand"
            title="Future about imagery"
          />
          <div>
            <SectionHeading
              description="Mia Wellness Spa is positioned as a warm, trustworthy mobile wellness brand for clients who value both skilled treatment and the comfort of staying home."
              eyebrow="About"
              title="Wellness care shaped around comfort, privacy, and convenience"
            />
            <p className="mt-6 text-base leading-8 text-charcoal/72">
              Based in {siteConfig.business.location}, Mia Wellness Spa offers a more personal way to
              experience massage and wellness treatments. Instead of asking you to travel to a spa,
              the service is designed to meet you at home with a calm, respectful, and professional
              approach from start to finish.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.links.aboutPage} variant="secondary">
                Learn more about Mia Wellness Spa
              </ButtonLink>
              <ButtonLink href={bookingHref}>Book your appointment</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
