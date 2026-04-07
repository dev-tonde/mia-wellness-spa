import type { Metadata } from "next";

import { TrustStrip } from "@/components/sections/trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessConfig, routeConfig } from "@/lib/business-config";
import { pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Booking Thank You",
    description:
      `Post-booking guidance for ${businessConfig.name}, a mobile house-call massage service in ${businessConfig.location}.`,
    path: routeConfig.bookingThankYou,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingThankYouPage() {
  return (
    <>
      <PageHero
        description={siteConfig.bookingThankYouPage.hero.description}
        eyebrow={siteConfig.bookingThankYouPage.hero.eyebrow}
        title={siteConfig.bookingThankYouPage.hero.title}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.business.whatsappHref}>Ask a question on WhatsApp</ButtonLink>
          <ButtonLink href={siteConfig.links.bookingPage} variant="secondary">
            Return to booking
          </ButtonLink>
        </div>
      </PageHero>

      <TrustStrip
        items={siteConfig.trustHighlights}
        links={[
          { href: routeConfig.services, label: "Review treatments" },
          { href: routeConfig.contact, label: "Contact Mia Wellness Spa" },
        ]}
        title="The service remains clear after booking: house-call only, by appointment, in Fourways and surrounding areas"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            description="This page stays intentionally grounded. It offers the clearest next steps after booking without inventing extra policies, promises, or confirmation language beyond what is already known."
            eyebrow="Next steps"
            title="What to keep in mind after booking"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {siteConfig.bookingThankYouPage.nextSteps.map((item) => (
              <InfoCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-charcoal to-charcoal/92 px-6 py-10 text-off-white shadow-soft sm:px-10 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-off-white/62">
              Need anything else?
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">
              {siteConfig.bookingThankYouPage.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-off-white/72 sm:text-base">
              {siteConfig.bookingThankYouPage.cta.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.business.whatsappHref}>WhatsApp Mia Wellness Spa</ButtonLink>
              <ButtonLink href={siteConfig.links.servicesPage} variant="secondary">
                Review treatments
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
