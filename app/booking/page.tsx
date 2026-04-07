import type { Metadata } from "next";

import { BookingSchedulerSection } from "@/components/sections/booking-scheduler-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FirstTimeBookingSection } from "@/components/sections/first-time-booking-section";
import { HouseCallSetupSection } from "@/components/sections/house-call-setup-section";
import { MobileStickyActionBar } from "@/components/sections/mobile-sticky-action-bar";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { PageHero } from "@/components/ui/page-hero";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { bookingIntent, contactIntent } from "@/lib/analytics";
import { getBookingState } from "@/lib/booking";
import { routeConfig } from "@/lib/business-config";
import { pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Book a House-Call Massage",
  description:
    "Book a house-call massage appointment with clear service-area guidance, home-setup notes, and a calm mobile booking path in Fourways and surrounding areas.",
  path: routeConfig.booking,
});

export default function BookingPage() {
  const bookingState = getBookingState();
  const heroPrimaryHref = bookingState.liveCalendly ? bookingState.primaryHref : "#booking-options";
  const heroPrimaryLabel = bookingState.liveCalendly
    ? siteConfig.bookingPage.hero.primaryCtaLabel
    : siteConfig.bookingPage.hero.fallbackCtaLabel;
  const stickyPrimaryHref = bookingState.liveCalendly ? bookingState.primaryHref : "#booking-options";
  const stickyPrimaryLabel = bookingState.liveCalendly
    ? siteConfig.bookingPage.hero.primaryCtaLabel
    : siteConfig.bookingPage.hero.fallbackCtaLabel;

  return (
    <>
      <div className="pb-24 md:pb-0">
        <PageHero
          description={siteConfig.bookingPage.hero.description}
          eyebrow={siteConfig.bookingPage.hero.eyebrow}
          title={siteConfig.bookingPage.hero.title}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink analytics={bookingIntent("booking_hero", heroPrimaryLabel)} href={heroPrimaryHref}>
              {heroPrimaryLabel}
            </ButtonLink>
            <ButtonLink
              analytics={contactIntent("booking_hero", "whatsapp", "ask_before_booking")}
              href={siteConfig.business.whatsappHref}
              variant="secondary"
            >
              {siteConfig.bookingPage.hero.secondaryCtaLabel}
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {siteConfig.bookingPage.bookingInformation.slice(0, 3).map((item) => (
              <InfoCard
                className="bg-white/72"
                description={item.description}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </PageHero>
        <TrustStrip
          items={siteConfig.trustHighlights}
          links={[
            { href: routeConfig.services, label: "View treatments" },
            { href: routeConfig.contact, label: "Contact first" },
          ]}
          title="Booking stays simple because the service model is clear from the start"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div>
                <SectionHeading
                  description="Everything on this page is designed to make advance booking feel clear and low-friction while staying honest about what is already confirmed and what is not yet published."
                  eyebrow="Booking information"
                  title="What to know before you book"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {siteConfig.bookingPage.bookingInformation.map((item) => (
                    <InfoCard description={item.description} key={item.title} title={item.title} />
                  ))}
                </div>
              </div>
              <PlaceholderVisual
                caption="This reserved visual area can later hold branded booking imagery, treatment setup photography, or a service-area graphic without changing the page structure."
                eyebrow="Future booking image"
                title="Reserved booking imagery"
              />
            </div>
          </Container>
        </section>

        <ServiceAreasSection
          description="Before you confirm a treatment time, it helps to know exactly how the service area works. The home-visit model stays clear: house calls only, by appointment, with location checks welcome."
          title="Check the service area before you book"
        />

        <BookingSchedulerSection />

        <HouseCallSetupSection
          description="The home-visit setup is designed to feel straightforward, private, and easy to prepare for before arrival."
          eyebrow="What we bring and what you prepare"
          title="A calm setup on both sides of the appointment"
        />

        <section className="pb-16 sm:pb-20">
          <Container>
            <SectionHeading
              description="A few practical notes remain visible here so the booking path stays reassuring without overcomplicating the experience."
              eyebrow="Practical notes"
              title="A few final points to keep in mind"
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <InfoCard
                description={siteConfig.bookingPage.policy.description}
                eyebrow={siteConfig.bookingPage.policy.eyebrow}
                title={siteConfig.bookingPage.policy.title}
              >
                <p className="text-sm leading-7 text-charcoal/58">
                  {siteConfig.bookingPage.policy.note}
                </p>
              </InfoCard>
              <InfoCard
                description="If your location falls outside the standard Fourways-area coverage, travel may involve an additional fee. It is best to check first if you are unsure."
                eyebrow="Service area note"
                title="Travel outside standard areas may cost extra"
              />
            </div>
          </Container>
        </section>

        <FirstTimeBookingSection
          description="If this is your first time arranging a mobile massage, the next step should still feel calm, private, and easy to follow."
          showActions={false}
          title="First-time house-call bookings should still feel reassuring"
        />

        <CtaBand
          description={siteConfig.bookingPage.finalCta.description}
          title={siteConfig.bookingPage.finalCta.title}
        />
      </div>

      <MobileStickyActionBar
        analytics={bookingIntent("booking_mobile_sticky", stickyPrimaryLabel)}
        eyebrow="Booking"
        primaryHref={stickyPrimaryHref}
        primaryLabel={stickyPrimaryLabel}
        subtitle="House-call only, by appointment in Fourways and surrounding areas"
      />
    </>
  );
}
