import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

export function IntroSection() {
  const bookingHref = getBookingHref();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              description={siteConfig.home.intro.description}
              eyebrow={siteConfig.home.intro.eyebrow}
              title={siteConfig.home.intro.title}
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72">
              {siteConfig.home.intro.supportingCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={bookingHref}>{siteConfig.home.hero.primaryCtaLabel}</ButtonLink>
              <ButtonLink href={siteConfig.links.servicesPage} variant="secondary">
                {siteConfig.home.hero.secondaryCtaLabel}
              </ButtonLink>
            </div>
          </div>
          <PlaceholderVisual
            caption="This temporary editorial visual gives the section a calm, polished image treatment until final lifestyle photography is ready."
            eyebrow="At-home comfort"
            imageAlt="Editorial illustration of towels, tea, and soft botanical details arranged in a calm home setting."
            imageSrc="/images/mock/home-intro.svg"
            title="Comfort that already feels familiar"
          />
        </div>
      </Container>
    </section>
  );
}
