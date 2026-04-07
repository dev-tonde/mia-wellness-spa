import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { ButtonLink } from "@/components/ui/button-link";
import { bookingIntent, contactIntent } from "@/lib/analytics";
import { Container } from "@/components/ui/container";
import { getBookingHref } from "@/lib/booking";
import { businessConfig, primaryNavigation, routeConfig, siteChromeConfig } from "@/lib/business-config";

export function SiteHeader() {
  const bookingHref = getBookingHref();

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-background/85 backdrop-blur-xl">
      <Container>
        <div className="relative flex min-h-20 items-center justify-between gap-4">
          <Link className="group min-w-0" href={routeConfig.home}>
            <p className="font-display text-2xl text-charcoal transition group-hover:text-charcoal/80">
              {businessConfig.name}
            </p>
            <p className="truncate text-xs uppercase tracking-[0.28em] text-charcoal/52">
              {siteChromeConfig.headerTagline}
            </p>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-white/60 bg-off-white/70 p-1 lg:flex">
            {primaryNavigation.map((item) => (
              <NavLink href={item.href} key={item.href} label={item.label} />
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink
              analytics={contactIntent("header", "whatsapp", "chat_on_whatsapp")}
              href={businessConfig.whatsappHref}
              variant="ghost"
            >
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink analytics={bookingIntent("header_nav", "book_now")} href={bookingHref}>
              {siteChromeConfig.primaryBookingLabel}
            </ButtonLink>
          </div>
          <MobileMenu bookingHref={bookingHref} />
        </div>
      </Container>
    </header>
  );
}
