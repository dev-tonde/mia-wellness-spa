import { businessConfig } from "./business-config";

export const analyticsEventNames = {
  bookingIntent: "booking_intent",
  contactIntent: "contact_intent",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEventNames)[keyof typeof analyticsEventNames];

export type AnalyticsLinkEvent = {
  channel?: string;
  label?: string;
  name: AnalyticsEventName;
  source: string;
};

function getOrigin(value?: string | null) {
  const safeValue = value?.trim();

  if (!safeValue) {
    return null;
  }

  try {
    return new URL(safeValue).origin;
  } catch {
    return null;
  }
}

export const analyticsConfig = {
  providerName: "Plausible",
  enabled: process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === "true",
  domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() || businessConfig.domain,
  scriptSrc:
    process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC?.trim() || "https://plausible.io/js/script.js",
  apiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST?.trim() || "",
  implementationNotePath: "/docs/analytics.md",
} as const;

export function getAnalyticsScriptOrigin() {
  return getOrigin(analyticsConfig.scriptSrc);
}

export function getAnalyticsApiOrigin() {
  return getOrigin(analyticsConfig.apiHost);
}

export function getPlausibleApiEndpoint() {
  const safeApiHost = analyticsConfig.apiHost?.trim();

  if (!safeApiHost) {
    return undefined;
  }

  try {
    const url = new URL(safeApiHost);

    if (url.pathname.endsWith("/api/event")) {
      return url.toString();
    }

    url.pathname = `${url.pathname.replace(/\/$/, "")}/api/event`;
    return url.toString();
  } catch {
    return undefined;
  }
}

export function getAnalyticsAttributes(event?: AnalyticsLinkEvent) {
  if (!event) {
    return {};
  }

  return {
    "data-analytics-event": event.name,
    "data-analytics-source": event.source,
    ...(event.channel ? { "data-analytics-channel": event.channel } : {}),
    ...(event.label ? { "data-analytics-label": event.label } : {}),
  };
}

export function bookingIntent(source: string, label?: string): AnalyticsLinkEvent {
  return {
    name: analyticsEventNames.bookingIntent,
    source,
    ...(label ? { label } : {}),
  };
}

export function contactIntent(
  source: string,
  channel: "phone" | "whatsapp",
  label?: string,
): AnalyticsLinkEvent {
  return {
    name: analyticsEventNames.contactIntent,
    source,
    channel,
    ...(label ? { label } : {}),
  };
}

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackAnalyticsEvent(eventName: AnalyticsEventName, props: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.plausible !== "function") {
    return;
  }

  window.plausible(eventName, { props });
}
