import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { MobileStickyActionBar } from "@/components/sections/mobile-sticky-action-bar";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { PageHero } from "@/components/ui/page-hero";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { bookingIntent, contactIntent, getAnalyticsAttributes } from "@/lib/analytics";
import { getBookingHref } from "@/lib/booking";
import { businessConfig, routeConfig } from "@/lib/business-config";
import { getSafeExternalLinkAttributes } from "@/lib/security";
import { isPlaceholderLink, pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact Mia Wellness Spa",
  description:
    `Contact ${businessConfig.name} by WhatsApp or phone for service-area checks, treatment questions, or house-call appointment support in ${businessConfig.location}.`,
  path: routeConfig.contact,
});

export default function ContactPage() {
  const hasLiveSocials = businessConfig.socials.some((social) => !isPlaceholderLink(social.href));
  const bookingHref = getBookingHref();
  const contactVisual = siteConfig.imagery.contactInquiry;

  return (
    <>
      <div className="pb-24 md:pb-0">
        <PageHero
          description={siteConfig.contactPage.hero.description}
          eyebrow={siteConfig.contactPage.hero.eyebrow}
          title={siteConfig.contactPage.hero.title}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              analytics={contactIntent("contact_hero", "whatsapp", "whatsapp_mia_wellness_spa")}
              href={siteConfig.business.whatsappHref}
            >
              {siteConfig.contactPage.hero.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink
              analytics={contactIntent("contact_hero", "phone", "call_phone")}
              href={siteConfig.business.phoneHref}
              variant="secondary"
            >
              {siteConfig.contactPage.hero.secondaryCtaLabel}
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-charcoal/72 sm:grid-cols-3">
            <div className="rounded-2xl border border-charcoal/8 bg-white/72 px-4 py-3">
              Mobile house-call service
            </div>
            <div className="rounded-2xl border border-charcoal/8 bg-white/72 px-4 py-3">
              Based in {siteConfig.business.location}
            </div>
            <div className="rounded-2xl border border-charcoal/8 bg-white/72 px-4 py-3">
              By appointment, not a storefront
            </div>
          </div>
        </PageHero>
        <TrustStrip
          items={siteConfig.trustHighlights}
          links={[
            { href: routeConfig.services, label: "View treatments" },
            { href: routeConfig.booking, label: "Go to booking" },
          ]}
          title="Clear contact options support a calm, appointment-led mobile service"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              description="Use the contact route if you want to ask a question before booking, check whether your area is covered, or confirm which treatment may suit you best."
              eyebrow="Contact details"
              title="Clear ways to reach Mia Wellness Spa"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {siteConfig.contactPage.details.map((item) => (
                <InfoCard description={item.description} key={item.title} title={item.title}>
                  {item.href && item.linkLabel ? (
                    <div className="mt-1">
                      <a
                        className="inline-flex items-center text-sm font-medium text-charcoal underline-offset-4 transition hover:text-charcoal/72 hover:underline"
                        href={item.href}
                        {...getAnalyticsAttributes(
                          item.title === "WhatsApp"
                            ? contactIntent("contact_details", "whatsapp", "start_whatsapp_chat")
                            : item.title === "Phone"
                              ? contactIntent("contact_details", "phone", "phone_number_link")
                              : undefined,
                        )}
                        {...getSafeExternalLinkAttributes(item.href)}
                      >
                        {item.linkLabel}
                      </a>
                    </div>
                  ) : null}
                </InfoCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-6">
          <Container>
            <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-charcoal to-charcoal/92 px-6 py-8 text-off-white shadow-soft sm:px-8 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-off-white/60">
                Quick contact
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">
                {siteConfig.contactPage.contactActions.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-off-white/72 sm:text-base">
                {siteConfig.contactPage.contactActions.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  analytics={contactIntent("contact_quick_actions", "whatsapp", "whatsapp_mia_wellness_spa")}
                  href={siteConfig.business.whatsappHref}
                >
                  {siteConfig.contactPage.hero.primaryCtaLabel}
                </ButtonLink>
                <ButtonLink
                  analytics={contactIntent("contact_quick_actions", "phone", "call_phone")}
                  href={siteConfig.business.phoneHref}
                  variant="secondary"
                >
                  {siteConfig.contactPage.hero.secondaryCtaLabel}
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionHeading
                  description={siteConfig.contactPage.inquiry.description}
                  eyebrow="Before booking"
                  title={siteConfig.contactPage.inquiry.title}
                />
                <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72">
                  {siteConfig.contactPage.inquiry.note}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink
                    analytics={contactIntent("contact_inquiry", "whatsapp", "start_on_whatsapp")}
                    className="w-full sm:w-auto"
                    href={siteConfig.business.whatsappHref}
                  >
                    {siteConfig.contactPage.inquiry.primaryCtaLabel}
                  </ButtonLink>
                  <ButtonLink
                    analytics={contactIntent("contact_inquiry", "phone", "call_phone")}
                    className="w-full sm:w-auto"
                    href={siteConfig.business.phoneHref}
                    variant="secondary"
                  >
                    {siteConfig.contactPage.inquiry.secondaryCtaLabel}
                  </ButtonLink>
                  <ButtonLink
                    analytics={bookingIntent("contact_inquiry", "go_to_booking")}
                    className="w-full sm:w-auto"
                    href={bookingHref}
                    variant="ghost"
                  >
                    {siteConfig.contactPage.inquiry.bookingCtaLabel}
                  </ButtonLink>
                </div>
              </div>
              <div className="grid gap-4">
                <PlaceholderVisual
                  caption={contactVisual.caption}
                  eyebrow={contactVisual.eyebrow}
                  imageAlt={contactVisual.alt}
                  imageBadge={contactVisual.badge}
                  imagePosition={contactVisual.position}
                  imageSrc={contactVisual.src}
                  title={contactVisual.title}
                />
                {siteConfig.contactPage.inquiry.items.map((item) => (
                  <InfoCard description={item.description} key={item.title} title={item.title} />
                ))}
              </div>
            </div>
          </Container>
        </section>

        <ServiceAreasSection
          description="The contact page is often where location questions come up first. The service model stays simple: house calls only, by appointment, with coverage centred on Fourways and surrounding areas."
          showActions={false}
          title="Check whether your area fits the usual service range"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              align="center"
              description={siteConfig.contactPage.socialProfiles.description}
              eyebrow="Social profiles"
              title={siteConfig.contactPage.socialProfiles.title}
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {siteConfig.contactPage.socialProfiles.items.map((item, index) => {
                const social = businessConfig.socials[index];
                const liveHref = social?.href;

                return (
                  <InfoCard description={item.description} key={item.name} title={item.name}>
                    {!isPlaceholderLink(liveHref) && liveHref ? (
                      <a
                        className="inline-flex items-center text-sm font-medium text-charcoal underline-offset-4 transition hover:text-charcoal/72 hover:underline"
                        href={liveHref}
                        {...getSafeExternalLinkAttributes(liveHref)}
                      >
                        {siteConfig.contactPage.socialProfiles.liveLinkLabel}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-charcoal/52">
                        {siteConfig.contactPage.socialProfiles.pendingLabel}
                      </p>
                    )}
                  </InfoCard>
                );
              })}
            </div>
            {!hasLiveSocials ? (
              <p className="mt-6 text-center text-sm leading-7 text-charcoal/58">
                Official social URLs have not been approved yet, so none are linked publicly on the
                site.
              </p>
            ) : null}
          </Container>
        </section>

        <CtaBand
          description={siteConfig.contactPage.cta.description}
          title={siteConfig.contactPage.cta.title}
        />
      </div>

      <MobileStickyActionBar
        analytics={contactIntent("contact_mobile_sticky", "whatsapp", "whatsapp_now")}
        eyebrow="WhatsApp"
        primaryHref={siteConfig.business.whatsappHref}
        primaryLabel="WhatsApp now"
        subtitle="Quickest way to reach Mia Wellness Spa on mobile"
      />
    </>
  );
}
