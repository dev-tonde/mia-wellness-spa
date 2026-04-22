import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { EditorialSplitSection } from "@/components/sections/editorial-split-section";
import { ServiceDetailGrid } from "@/components/sections/service-detail-grid";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { QuoteCard } from "@/components/ui/quote-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessConfig, routeConfig } from "@/lib/business-config";
import { pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Massage Treatments",
  description:
    `Explore Swedish, Sports, Deep Tissue, Reflexology, Hot Stone, and Cupping treatments offered as house-call appointments in ${businessConfig.location}.`,
  path: routeConfig.services,
});

export default function ServicesPage() {
  const servicesVisual = siteConfig.imagery.servicesOverview;

  return (
    <>
      <PageHero
        description={siteConfig.servicesPage.hero.description}
        eyebrow={siteConfig.servicesPage.hero.eyebrow}
        title={siteConfig.servicesPage.hero.title}
      >
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-white/70 bg-white/74 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
              In-home experience
            </p>
            <p className="mt-4 text-base leading-8 text-charcoal/72">
              All treatments are offered as part of a mobile house-call service, which means your
              appointment takes place in the comfort of your home rather than at a spa location.
            </p>
            <p className="mt-4 text-sm leading-7 text-charcoal/62">
              Duration and pricing are not published yet, and the page layout is already prepared to
              accommodate them cleanly once those details are confirmed for the website.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routeConfig.booking}>Go to booking</ButtonLink>
              <ButtonLink href={routeConfig.faq} variant="secondary">
                Read common questions
              </ButtonLink>
            </div>
          </div>
          <PlaceholderVisual
            caption={servicesVisual.caption}
            eyebrow={servicesVisual.eyebrow}
            imageAlt={servicesVisual.alt}
            imageBadge={servicesVisual.badge}
            imagePosition={servicesVisual.position}
            imageSrc={servicesVisual.src}
            title={servicesVisual.title}
          />
        </div>
      </PageHero>
      <TrustStrip
        items={siteConfig.trustHighlights}
        links={[
          { href: routeConfig.booking, label: "Book now" },
          { href: routeConfig.faq, label: "View FAQ" },
        ]}
        title="Clear treatment options supported by calm, mobile-first booking guidance"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <SectionHeading
                description={siteConfig.servicesPage.intro.description}
                eyebrow={siteConfig.servicesPage.intro.eyebrow}
                title={siteConfig.servicesPage.intro.title}
              />
              <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72">
                {siteConfig.servicesPage.intro.supportingCopy}
              </p>
            </div>
            <QuoteCard
              attribution={siteConfig.business.name}
              eyebrow="Service guidance"
              quote="The goal is to help clients choose with clarity, feel at ease in their own space, and move toward booking with confidence."
            />
          </div>
        </Container>
      </section>

      <ServiceDetailGrid />

      <EditorialSplitSection
        aside={
          <div className="grid gap-4">
            <QuoteCard
              attribution={siteConfig.business.name}
              eyebrow="Personal approach"
              quote="A treatment feels more meaningful when it reflects the person receiving it, not just the name of the service."
            />
            <div className="rounded-[1.6rem] border border-white/70 bg-off-white/76 p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                House-call advantage
              </p>
              <p className="mt-3 text-sm leading-7 text-charcoal/72">
                Home appointments create more space for comfort, communication, and a slower pace
                before and after the treatment.
              </p>
            </div>
          </div>
        }
        eyebrow={siteConfig.servicesPage.personalisedCare.eyebrow}
        intro={siteConfig.servicesPage.personalisedCare.intro}
        paragraphs={siteConfig.servicesPage.personalisedCare.paragraphs}
        reverse
        title={siteConfig.servicesPage.personalisedCare.title}
      />

      <CtaBand
        description={siteConfig.servicesPage.cta.description}
        title={siteConfig.servicesPage.cta.title}
      />
    </>
  );
}
