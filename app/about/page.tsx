import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { EditorialSplitSection } from "@/components/sections/editorial-split-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { QuoteCard } from "@/components/ui/quote-card";
import { Container } from "@/components/ui/container";
import { businessConfig, routeConfig } from "@/lib/business-config";
import { pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "About the House-Call Experience",
  description:
    `Learn about the calm house-call philosophy behind ${businessConfig.name} and its mobile wellness approach in ${businessConfig.location}.`,
  path: routeConfig.about,
});

const mobileModelHighlights = [
  {
    title: "Comfort in your own space",
    description:
      "The appointment begins in an environment that already feels familiar, private, and easier to relax in.",
  },
  {
    title: "A calmer wellness rhythm",
    description:
      "There is no need to commute before your treatment or rush home immediately after it ends.",
  },
  {
    title: "Thoughtful convenience",
    description:
      "The service is designed for people who value skilled care without adding unnecessary friction to the day.",
  },
] as const;

export default function AboutPage() {
  const founderVisual = siteConfig.imagery.aboutFounder;

  return (
    <>
      <PageHero
        description={siteConfig.about.hero.description}
        eyebrow={siteConfig.about.hero.eyebrow}
        title={siteConfig.about.hero.title}
      >
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <QuoteCard
            attribution={siteConfig.about.quote.attribution}
            eyebrow={siteConfig.about.quote.eyebrow}
            quote={siteConfig.about.quote.text}
          />
          <div className="rounded-[1.75rem] border border-white/70 bg-white/72 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
              Mobile service
            </p>
            <p className="mt-4 text-base leading-7 text-charcoal/72">
              Mia Wellness Spa is a house-call massage and wellness business based in{" "}
              {siteConfig.business.location}. This page intentionally reinforces that the brand is
              built around bringing care to the client rather than operating from a spa premises.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routeConfig.services} variant="secondary">
                Explore treatments
              </ButtonLink>
              <ButtonLink href={routeConfig.booking}>Book your appointment</ButtonLink>
            </div>
          </div>
        </div>
      </PageHero>
      <TrustStrip
        items={siteConfig.trustHighlights}
        links={[
          { href: routeConfig.services, label: "Explore treatments" },
          { href: routeConfig.booking, label: "Go to booking" },
        ]}
        title="A personal story is supported by a clear, trustworthy service model"
      />

      <EditorialSplitSection
        aside={
          <PlaceholderVisual
            caption={founderVisual.caption}
            eyebrow={founderVisual.eyebrow}
            imageAlt={founderVisual.alt}
            imageBadge={founderVisual.badge}
            imagePosition={founderVisual.position}
            imageSrc={founderVisual.src}
            title={founderVisual.title}
          />
        }
        eyebrow={siteConfig.about.founderStory.eyebrow}
        intro={siteConfig.about.founderStory.intro}
        paragraphs={siteConfig.about.founderStory.paragraphs}
        title={siteConfig.about.founderStory.title}
      />

      <EditorialSplitSection
        aside={
          <QuoteCard
            attribution={siteConfig.business.name}
            eyebrow="Healing through touch"
            quote="The goal is not to overwhelm the body with noise, but to offer steady, respectful care that allows it to soften."
          />
        }
        eyebrow={siteConfig.about.philosophy.eyebrow}
        intro={siteConfig.about.philosophy.intro}
        paragraphs={siteConfig.about.philosophy.paragraphs}
        reverse
        title={siteConfig.about.philosophy.title}
      />

      <EditorialSplitSection
        aside={
          <div className="grid gap-4">
            {mobileModelHighlights.map((item) => (
              <article
                className="rounded-[1.5rem] border border-white/70 bg-off-white/76 p-5 shadow-soft"
                key={item.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-800/78">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-charcoal/72">{item.description}</p>
              </article>
            ))}
          </div>
        }
        eyebrow={siteConfig.about.mobileModel.eyebrow}
        intro={siteConfig.about.mobileModel.intro}
        paragraphs={siteConfig.about.mobileModel.paragraphs}
        title={siteConfig.about.mobileModel.title}
      />

      <section className="pb-4 pt-2 sm:pb-8">
        <Container>
          <div className="rounded-[1.75rem] border border-white/70 bg-off-white/70 px-6 py-6 shadow-soft sm:px-8">
            <p className="text-sm leading-7 text-charcoal/68">
              Based in {siteConfig.business.location}, Mia Wellness Spa continues to present itself as
              a mobile service first. The intention is simple: to offer a calm, premium experience that
              feels personal, grounded, and easy to welcome into the home.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        description={siteConfig.about.cta.description}
        title={siteConfig.about.cta.title}
      />
    </>
  );
}
