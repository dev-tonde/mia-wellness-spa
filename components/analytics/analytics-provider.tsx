import Script from "next/script";

import { AnalyticsEventBridge } from "@/components/analytics/analytics-event-bridge";
import { analyticsConfig, getPlausibleApiEndpoint } from "@/lib/analytics";

export function AnalyticsProvider() {
  if (!analyticsConfig.enabled) {
    return null;
  }

  const apiEndpoint = getPlausibleApiEndpoint();

  return (
    <>
      <Script
        data-domain={analyticsConfig.domain}
        {...(apiEndpoint ? { "data-api": apiEndpoint } : {})}
        defer
        src={analyticsConfig.scriptSrc}
        strategy="lazyOnload"
      />
      <AnalyticsEventBridge />
    </>
  );
}
