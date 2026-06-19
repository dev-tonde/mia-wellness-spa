import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { bookingIntent, contactIntent } from "@/lib/analytics";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const bookingHref = getBookingHref();
  const heroVisual = siteConfig.imagery.homeHero;

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
            <div className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  analytics={bookingIntent("home_hero", "book_your_appointment")}
                  className="w-full sm:w-auto sm:min-w-[15.5rem]"
                  href={bookingHref}
                >
                  {siteConfig.home.hero.primaryCtaLabel}
                </ButtonLink>
                <ButtonLink
                  analytics={contactIntent("home_hero", "whatsapp", "chat_on_whatsapp")}
                  className="w-full border-sage-700/18 bg-sage-50 text-sage-900 hover:bg-sage-100 sm:w-auto sm:min-w-[13.5rem]"
                  href={siteConfig.business.whatsappHref}
                  variant="secondary"
                >
                  {siteConfig.home.hero.secondaryCtaLabel}
                </ButtonLink>
              </div>
              <div className="mt-3">
                <ButtonLink
                  className="justify-start px-1 py-2 text-left text-sm font-medium text-charcoal/68 hover:bg-transparent hover:text-charcoal hover:underline sm:px-2"
                  href={siteConfig.links.servicesPage}
                  variant="ghost"
                >
                  {siteConfig.home.hero.tertiaryCtaLabel}
                </ButtonLink>
              </div>
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
            caption={heroVisual.caption}
            eyebrow={heroVisual.eyebrow}
            imageAlt={heroVisual.alt}
            imageBadge={heroVisual.badge}
            imagePosition={heroVisual.position}
            imagePriority
            imageSrc={heroVisual.src}
            title={heroVisual.title}
            variant="hero"
          />
        </div>
      </Container>
    </section>
  );
}
