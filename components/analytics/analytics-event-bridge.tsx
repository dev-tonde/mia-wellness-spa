"use client";

import { useEffect } from "react";

import { trackAnalyticsEvent, type AnalyticsEventName } from "@/lib/analytics";

export function AnalyticsEventBridge() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-analytics-event]");

      if (!trackedElement) {
        return;
      }

      const { analyticsChannel, analyticsEvent, analyticsLabel, analyticsSource } =
        trackedElement.dataset;

      if (!analyticsEvent || !analyticsSource) {
        return;
      }

      const props = {
        source: analyticsSource,
        ...(analyticsChannel ? { channel: analyticsChannel } : {}),
        ...(analyticsLabel ? { label: analyticsLabel } : {}),
      };

      trackAnalyticsEvent(analyticsEvent as AnalyticsEventName, props);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
