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
            caption="A soft editorial visual block is reserved here so approved imagery can be added later without changing the homepage layout."
            eyebrow="Future imagery"
            title="Reserved lifestyle imagery"
          />
        </div>
      </Container>
    </section>
  );
}
