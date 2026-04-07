"use client";

import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { bookingIntent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type CalendlyEmbedPanelProps = {
  calendlyUrl: string;
  confirmationHref: string;
  embedUrl: string;
  minHeight: number;
};

export function CalendlyEmbedPanel({
  calendlyUrl,
  confirmationHref,
  embedUrl,
  minHeight,
}: CalendlyEmbedPanelProps) {
  const [loaded, setLoaded] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [shouldMountIframe, setShouldMountIframe] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldMountIframe) {
      return;
    }

    const element = containerRef.current;

    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const frame = globalThis.requestAnimationFrame(() => {
        setShouldMountIframe(true);
      });

      return () => {
        globalThis.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMountIframe(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "320px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldMountIframe]);

  return (
    <div className="rounded-[2rem] border border-white/70 bg-off-white/78 p-3 shadow-soft sm:p-4">
      <div className="mb-4 flex flex-col gap-3 px-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm leading-7 text-charcoal/68">
            Book directly below or open Calendly in a new tab if you prefer a more direct external
            booking path.
          </p>
          <p className="mt-1 text-xs leading-6 text-charcoal/56">
            If the embedded calendar does not appear, the external booking button remains available.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            analytics={bookingIntent("booking_embed_external", "open_calendly_new_tab")}
            href={calendlyUrl}
            variant="secondary"
          >
            Open Calendly in a new tab
          </ButtonLink>
          <ButtonLink href={confirmationHref} variant="ghost">
            View thank-you page
          </ButtonLink>
        </div>
      </div>

      {embedFailed ? (
        <div className="rounded-[1.5rem] border border-dashed border-charcoal/15 bg-white/88 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
            Embedded booking unavailable
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal">
            Continue through the direct Calendly link
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/72">
            The on-page calendar could not be displayed just now, but the booking link is still
            available and remains the same source used across the site.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              analytics={bookingIntent("booking_embed_fallback", "open_calendly_booking")}
              href={calendlyUrl}
            >
              Open Calendly booking
            </ButtonLink>
            <ButtonLink href={confirmationHref} variant="secondary">
              View thank-you page
            </ButtonLink>
          </div>
        </div>
      ) : (
        <div
          className="relative overflow-hidden rounded-[1.5rem] border border-charcoal/8 bg-white"
          ref={containerRef}
          style={{ minHeight: `${minHeight}px` }}
        >
          {!loaded ? (
            <div
              aria-hidden="true"
              className="absolute inset-0 flex animate-pulse flex-col gap-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,239,232,0.96))] p-6"
            >
              <div className="h-6 w-40 rounded-full bg-charcoal/8" />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-12 rounded-2xl bg-charcoal/7" />
                <div className="h-12 rounded-2xl bg-charcoal/7" />
              </div>
              <div className="h-14 rounded-2xl bg-charcoal/7" />
              <div className="h-14 rounded-2xl bg-charcoal/7" />
              <div className="h-40 rounded-[1.5rem] bg-charcoal/7" />
              <div className="h-40 rounded-[1.5rem] bg-charcoal/7" />
            </div>
          ) : null}
          {!shouldMountIframe ? (
            <div className="relative z-10 flex h-full min-h-[inherit] items-end p-6">
              <div className="max-w-xl rounded-[1.5rem] border border-charcoal/10 bg-white/92 p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                  Deferred booking embed
                </p>
                <h2 className="mt-3 font-display text-2xl leading-tight text-charcoal">
                  The in-page calendar loads when you reach this section
                </h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/68">
                  This keeps the booking page lighter on mobile while preserving the same direct
                  external Calendly path above.
                </p>
                <div className="mt-5">
                  <button
                    className="inline-flex items-center justify-center rounded-full border border-sage-900/10 bg-off-white/70 px-5 py-3 text-sm font-medium text-charcoal backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={() => setShouldMountIframe(true)}
                    type="button"
                  >
                    Load booking calendar now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className={cn(
                "w-full border-0 transition-opacity duration-300",
                loaded ? "opacity-100" : "opacity-0",
              )}
              loading="lazy"
              onError={() => setEmbedFailed(true)}
              onLoad={() => setLoaded(true)}
              referrerPolicy="strict-origin-when-cross-origin"
              src={embedUrl}
              style={{ minHeight: `${minHeight}px` }}
              title="Calendly booking form for Mia Wellness Spa"
            />
          )}
        </div>
      )}
    </div>
  );
}
