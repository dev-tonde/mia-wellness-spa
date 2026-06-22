import Link from "next/link";
import type { ReactNode } from "react";

import { getAnalyticsAttributes, type AnalyticsLinkEvent } from "@/lib/analytics";
import { getSafeExternalLinkAttributes, isExternalHttpUrl } from "@/lib/security";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  analytics?: AnalyticsLinkEvent;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href: string;
  id?: string;
  variant?: "ghost" | "lightPrimary" | "primary" | "secondary";
};

const variants = {
  primary:
    "bg-charcoal text-off-white shadow-soft hover:-translate-y-0.5 hover:bg-charcoal/95 active:translate-y-0 active:bg-charcoal",
  lightPrimary:
    "border border-white/24 bg-off-white text-charcoal shadow-soft hover:-translate-y-0.5 hover:bg-off-white/92 active:translate-y-0 active:bg-off-white/88",
  secondary:
    "border border-sage-900/18 bg-off-white/82 text-charcoal backdrop-blur hover:-translate-y-0.5 hover:bg-off-white active:translate-y-0 active:bg-off-white/96",
  ghost: "text-charcoal hover:bg-charcoal/5",
};

export function ButtonLink({
  analytics,
  ariaDescribedBy,
  ariaLabel,
  children,
  className,
  disabled = false,
  href,
  id,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-4",
    variant === "lightPrimary"
      ? "focus-visible:ring-off-white focus-visible:ring-offset-charcoal"
      : "focus-visible:ring-sage-700/50 focus-visible:ring-offset-background",
    variants[variant],
    disabled && "cursor-not-allowed opacity-80",
    className,
  );
  const analyticsAttributes = getAnalyticsAttributes(analytics);

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        className={classes}
        id={id}
      >
        {children}
      </span>
    );
  }

  const isExternal = isExternalHttpUrl(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        className={classes}
        href={href}
        id={id}
        {...analyticsAttributes}
        {...getSafeExternalLinkAttributes(href)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      className={classes}
      href={href}
      id={id}
      {...analyticsAttributes}
    >
      {children}
    </Link>
  );
}
