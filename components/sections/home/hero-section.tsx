import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { bookingIntent } from "@/lib/analytics";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const bookingHref = getBookingHref();

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(166,183,157,0.24),_transparent_60%)]" />
      <Container>
        <div className="grid gap-8 rounded-[2rem] border border-white/70 bg-off-white/78 px-6 py-8 shadow-soft backdrop-blur sm:px-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sage-800/78">
              {siteConfig.home.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {siteConfig.home.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal/72 sm:text-lg">
              {siteConfig.home.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                analytics={bookingIntent("home_hero", "book_your_appointment")}
                href={bookingHref}
              >
                {siteConfig.home.hero.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink href={siteConfig.links.servicesPage} variant="secondary">
                {siteConfig.home.hero.secondaryCtaLabel}
              </ButtonLink>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-charcoal/72 sm:grid-cols-3">
              {siteConfig.trustHighlights.map((item) => (
                <li
                  className="rounded-2xl border border-charcoal/8 bg-white/65 px-4 py-3 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/90"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PlaceholderVisual
            caption="A launch-ready editorial mock image keeps the premium tone in place while final brand photography is still being prepared."
            eyebrow="House-call calm"
            imageAlt="Editorial illustration of a calm in-home massage setup with a treatment table, soft light, and warm natural tones."
            imagePriority
            imageSrc="/images/mock/home-hero.svg"
            title="Warm, private wellness at home"
            variant="hero"
          />
        </div>
      </Container>
    </section>
  );
}
