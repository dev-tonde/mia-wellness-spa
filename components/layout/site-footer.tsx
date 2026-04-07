import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { bookingIntent, contactIntent, getAnalyticsAttributes } from "@/lib/analytics";
import { getBookingHref } from "@/lib/booking";
import { businessConfig, primaryNavigation, siteChromeConfig } from "@/lib/business-config";
import { getSafeExternalLinkAttributes } from "@/lib/security";
import { isPlaceholderLink } from "@/lib/site-config";

export function SiteFooter() {
  const bookingHref = getBookingHref();
  const socialComingSoon = businessConfig.socials.every((social) => isPlaceholderLink(social.href));

  return (
    <footer className="border-t border-charcoal/8 bg-charcoal text-off-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-off-white/60">
              {siteChromeConfig.footerSummaryTitle}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              {businessConfig.shortSummary}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-off-white/72 sm:text-base">
              {businessConfig.footerSummary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink analytics={bookingIntent("footer", "book_now")} href={bookingHref}>
                {siteChromeConfig.primaryBookingLabel}
              </ButtonLink>
              <ButtonLink
                analytics={contactIntent("footer", "whatsapp", "chat_on_whatsapp")}
                href={businessConfig.whatsappHref}
                variant="secondary"
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-off-white">{siteChromeConfig.footerQuickLinksTitle}</p>
              <ul className="mt-4 space-y-3 text-sm text-off-white/72">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link className="transition hover:text-off-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-off-white">{siteChromeConfig.footerContactTitle}</p>
              <ul className="mt-4 space-y-3 text-sm text-off-white/72">
                <li>{businessConfig.location}</li>
                <li>
                  <a
                    className="transition hover:text-off-white"
                    href={businessConfig.phoneHref}
                    {...getAnalyticsAttributes(contactIntent("footer", "phone", "phone_number_link"))}
                  >
                    {businessConfig.phoneNumber}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-off-white"
                    href={businessConfig.whatsappHref}
                    {...getAnalyticsAttributes(contactIntent("footer", "whatsapp", "whatsapp_text_link"))}
                    {...getSafeExternalLinkAttributes(businessConfig.whatsappHref)}
                  >
                    WhatsApp chat
                  </a>
                </li>
                <li>{businessConfig.domain}</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-off-white">{siteChromeConfig.footerSocialTitle}</p>
              <ul className="mt-4 space-y-3 text-sm text-off-white/72">
                {businessConfig.socials.map((social) => (
                  <li key={social.name}>
                    {isPlaceholderLink(social.href) ? (
                      <span aria-disabled="true" className="cursor-default text-off-white/55">
                        {social.name} in preparation
                      </span>
                    ) : (
                      <a
                        className="transition hover:text-off-white"
                        href={social.href}
                        {...getSafeExternalLinkAttributes(social.href)}
                      >
                        {social.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-6 text-off-white/55">
                {socialComingSoon
                  ? "Social profile URLs have not been confirmed yet, so this section stays intentionally unpublished."
                  : "Available profiles are linked here, and any unpublished profiles remain intentionally unlinked."}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
