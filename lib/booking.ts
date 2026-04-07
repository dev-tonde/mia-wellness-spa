import { bookingConfig, routeConfig } from "@/lib/business-config";

function isPlaceholderBookingUrl(href: string) {
  return href.includes("replace-with") || href.startsWith("#");
}

function isAllowedCalendlyUrl(href: string) {
  try {
    const url = new URL(href);

    return url.protocol === "https:" && url.hostname === "calendly.com";
  } catch {
    return false;
  }
}

export function getCalendlyUrl() {
  return process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || bookingConfig.calendlyUrl;
}

export function hasLiveCalendlyUrl() {
  const calendlyUrl = getCalendlyUrl();

  return Boolean(calendlyUrl) && !isPlaceholderBookingUrl(calendlyUrl) && isAllowedCalendlyUrl(calendlyUrl);
}

export function getCalendlyEmbedUrl() {
  if (!hasLiveCalendlyUrl()) {
    return null;
  }

  const url = new URL(getCalendlyUrl());
  url.searchParams.set("hide_gdpr_banner", "1");

  return url.toString();
}

export function getBookingHref() {
  return hasLiveCalendlyUrl() ? getCalendlyUrl() : routeConfig.booking;
}

export function getExternalBookingHref() {
  return hasLiveCalendlyUrl() ? getCalendlyUrl() : null;
}

export function getBookingConfirmationHref() {
  return bookingConfig.confirmationPath;
}

export function getBookingState() {
  const calendlyUrl = getCalendlyUrl();
  const liveCalendly = hasLiveCalendlyUrl();

  return {
    calendlyUrl,
    liveCalendly,
    embedUrl: liveCalendly ? getCalendlyEmbedUrl() : null,
    primaryHref: liveCalendly ? calendlyUrl : bookingConfig.fallbackPath,
    externalHref: liveCalendly ? calendlyUrl : null,
    fallbackHref: bookingConfig.fallbackPath,
    confirmationHref: bookingConfig.confirmationPath,
    embedMinHeight: bookingConfig.embedMinHeight,
  };
}
