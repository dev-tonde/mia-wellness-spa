import { CalendlyEmbedPanel } from "@/components/sections/calendly-embed-panel";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactIntent } from "@/lib/analytics";
import { getBookingState } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

export function BookingSchedulerSection() {
  const bookingState = getBookingState();

  return (
    <section className="py-16 sm:py-20" id="booking-options">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              description={
                bookingState.liveCalendly
                  ? siteConfig.bookingPage.scheduler.liveDescription
                  : siteConfig.bookingPage.scheduler.placeholderDescription
              }
              eyebrow="Calendly booking"
              title={
                bookingState.liveCalendly
                  ? siteConfig.bookingPage.scheduler.liveTitle
                  : siteConfig.bookingPage.scheduler.placeholderTitle
              }
            />
            <div className="mt-6 grid gap-4">
              <InfoCard
                description="The booking path is intended for planned house-call appointments rather than same-moment requests, helping the experience stay organised and calm."
                eyebrow="Booking note"
                title="House-call only, by appointment"
              />
              <InfoCard
                description="If you are not sure which service fits best, it is completely fine to ask before choosing a treatment or confirming your location in the booking flow."
                eyebrow="Need guidance?"
                title="You can contact Mia Wellness Spa first"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    analytics={contactIntent("booking_scheduler", "whatsapp", "whatsapp_first")}
                    href={siteConfig.business.whatsappHref}
                    variant="secondary"
                  >
                    WhatsApp first
                  </ButtonLink>
                  <ButtonLink
                    analytics={contactIntent("booking_scheduler", "phone", "call_phone")}
                    href={siteConfig.business.phoneHref}
                    variant="ghost"
                  >
                    Call {siteConfig.business.phoneDisplay}
                  </ButtonLink>
                </div>
              </InfoCard>
              <InfoCard
                description={siteConfig.bookingPage.confirmation.description}
                eyebrow="After booking"
                title={siteConfig.bookingPage.confirmation.title}
              >
                <ButtonLink href={siteConfig.links.bookingThankYouPage} variant="ghost">
                  {siteConfig.bookingPage.confirmation.linkLabel}
                </ButtonLink>
              </InfoCard>
            </div>
          </div>

          {bookingState.liveCalendly && bookingState.embedUrl && bookingState.externalHref ? (
            <CalendlyEmbedPanel
              calendlyUrl={bookingState.externalHref}
              confirmationHref={bookingState.confirmationHref}
              embedUrl={bookingState.embedUrl}
              minHeight={bookingState.embedMinHeight}
            />
          ) : (
            <div className="rounded-[2rem] border border-dashed border-charcoal/15 bg-off-white/78 p-6 shadow-soft sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sage-800/78">
                Booking fallback
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                A live Calendly booking link still needs to be connected
              </h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">
                {siteConfig.bookingPage.scheduler.placeholderNote}
              </p>
              <p className="mt-4 text-sm leading-7 text-charcoal/62">
                Until then, the booking page stays usable by guiding visitors to WhatsApp or phone
                instead of leaving an empty or broken calendar area.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  analytics={contactIntent("booking_fallback", "whatsapp", "ask_before_booking")}
                  href={siteConfig.business.whatsappHref}
                >
                  Ask before booking
                </ButtonLink>
                <ButtonLink href={siteConfig.links.contactPage} variant="secondary">
                  Go to contact page
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
