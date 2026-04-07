import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FirstTimeBookingSection } from "@/components/sections/first-time-booking-section";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { routeConfig } from "@/lib/business-config";
import { pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "House-Call Massage FAQ",
  description:
    "Read answers about service areas, house-call setup, travel fees, booking, and first-time appointments at Mia Wellness Spa.",
  path: routeConfig.faq,
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        description={siteConfig.faqPage.hero.description}
        eyebrow={siteConfig.faqPage.hero.eyebrow}
        title={siteConfig.faqPage.hero.title}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={routeConfig.booking}>Go to booking</ButtonLink>
          <ButtonLink href={routeConfig.contact} variant="secondary">
            Contact Mia Wellness Spa
          </ButtonLink>
        </div>
      </PageHero>
      <TrustStrip
        items={siteConfig.trustHighlights}
        links={[
          { href: routeConfig.booking, label: "Book now" },
          { href: routeConfig.contact, label: "Ask a question" },
        ]}
        title="Questions are answered clearly so booking feels more informed and less rushed"
      />
      <FaqAccordion
        description={siteConfig.faqPage.section.description}
        title={siteConfig.faqPage.section.title}
      />
      <ServiceAreasSection
        description="Location and service-model questions are some of the most common before booking, so the site keeps them visible here as well."
        showActions={false}
        title="A quick reminder of how the service area works"
      />
      <FirstTimeBookingSection
        description="If you are reading the FAQ because this is your first mobile massage booking, the process is meant to feel straightforward and respectful."
        showActions={false}
        title="First-time house-call bookings should still feel easy to understand"
      />
      <CtaBand
        description={siteConfig.faqPage.cta.description}
        title={siteConfig.faqPage.cta.title}
      />
    </>
  );
}
