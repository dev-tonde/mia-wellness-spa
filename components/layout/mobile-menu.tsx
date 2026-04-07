"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { bookingIntent, contactIntent } from "@/lib/analytics";
import { businessConfig, primaryNavigation, siteChromeConfig } from "@/lib/business-config";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  bookingHref: string;
};

export function MobileMenu({ bookingHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navigationId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    const closeButtonElement = closeButtonRef.current;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    closeButtonElement?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls={navigationId}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-off-white/80 text-charcoal transition hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <span className="sr-only">{siteChromeConfig.mobileNavLabel}</span>
        <span className="space-y-1.5">
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "translate-y-2 rotate-45")} />
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "-translate-y-2 -rotate-45")} />
        </span>
      </button>
      {open ? (
        <>
          <button
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-[1px]"
            onClick={() => setOpen(false)}
            tabIndex={-1}
            type="button"
          />
          <div
            aria-label={siteChromeConfig.mobileNavTitle}
            aria-modal="true"
            className="absolute inset-x-4 top-full z-50 mt-3 rounded-[2rem] border border-white/70 bg-off-white/95 p-5 shadow-soft backdrop-blur"
            id={navigationId}
            role="dialog"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                  Menu
                </p>
                <p className="mt-2 font-display text-2xl text-charcoal">
                  {siteChromeConfig.mobileNavTitle}
                </p>
              </div>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white/80 text-charcoal transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setOpen(false)}
                ref={closeButtonRef}
                type="button"
              >
                <span className="sr-only">Close navigation menu</span>
                <span aria-hidden="true" className="text-xl leading-none">
                  ×
                </span>
              </button>
            </div>
            <nav aria-label="Mobile" className="space-y-2">
              {primaryNavigation.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm transition",
                      active
                        ? "bg-charcoal text-off-white"
                        : "bg-white/70 text-charcoal/78 hover:bg-white hover:text-charcoal",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 grid gap-3">
              <ButtonLink
                analytics={bookingIntent("mobile_menu", "book_now")}
                className="w-full"
                href={bookingHref}
              >
                {siteChromeConfig.mobileBookingLabel}
              </ButtonLink>
              <ButtonLink
                analytics={contactIntent("mobile_menu", "whatsapp", "chat_on_whatsapp")}
                className="w-full"
                href={businessConfig.whatsappHref}
                variant="secondary"
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
