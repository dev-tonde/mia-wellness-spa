// Third-party origins used by the live site.
// Calendly is embedded in an iframe on the booking page.
// WhatsApp and future social profiles are plain outbound links and do not require CSP allowances.
import { analyticsConfig, getAnalyticsApiOrigin, getAnalyticsScriptOrigin } from "./analytics";

const CALENDLY_FRAME_ORIGIN = "https://calendly.com";

export const securityConfig = {
  thirdPartyOrigins: {
    calendlyFrame: CALENDLY_FRAME_ORIGIN,
  },
} as const;

function serializeDirective(name: string, values: string[]) {
  return values.length > 0 ? `${name} ${values.join(" ")}` : name;
}

export function buildContentSecurityPolicy() {
  const analyticsScriptOrigin = analyticsConfig.enabled ? getAnalyticsScriptOrigin() : null;
  const analyticsApiOrigin = analyticsConfig.enabled
    ? getAnalyticsApiOrigin() || analyticsScriptOrigin
    : null;

  const directives = {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
    "object-src": ["'none'"],
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      ...(analyticsScriptOrigin ? [analyticsScriptOrigin] : []),
    ],
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", "data:", "blob:"],
    "font-src": ["'self'", "data:"],
    "connect-src": ["'self'", ...(analyticsApiOrigin ? [analyticsApiOrigin] : [])],
    "frame-src": [securityConfig.thirdPartyOrigins.calendlyFrame],
    "manifest-src": ["'self'"],
    ...(process.env.NODE_ENV === "production"
      ? { "upgrade-insecure-requests": [] as string[] }
      : {}),
  };

  return Object.entries(directives)
    .map(([name, values]) => serializeDirective(name, values))
    .join("; ");
}

export function getSecurityHeaders() {
  const headers = [
    {
      key: "Content-Security-Policy",
      value: buildContentSecurityPolicy(),
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
    {
      key: "Permissions-Policy",
      value:
        "accelerometer=(), autoplay=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=(), browsing-topics=()",
    },
    {
      key: "X-DNS-Prefetch-Control",
      value: "off",
    },
    {
      key: "X-Permitted-Cross-Domain-Policies",
      value: "none",
    },
  ];

  if (process.env.NODE_ENV === "production") {
    headers.push({
      key: "Strict-Transport-Security",
      value: "max-age=31536000",
    });
  }

  return headers;
}

export function isExternalHttpUrl(href: string) {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function getSafeExternalLinkAttributes(href: string) {
  return isExternalHttpUrl(href)
    ? {
        rel: "noopener noreferrer",
        target: "_blank",
      }
    : {};
}
