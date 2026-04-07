import Link from "next/link";
import type { ReactNode } from "react";

import { getAnalyticsAttributes, type AnalyticsLinkEvent } from "@/lib/analytics";
import { getSafeExternalLinkAttributes, isExternalHttpUrl } from "@/lib/security";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  analytics?: AnalyticsLinkEvent;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href: string;
  variant?: "ghost" | "primary" | "secondary";
};

const variants = {
  primary:
    "bg-charcoal text-off-white shadow-soft hover:-translate-y-0.5 hover:bg-charcoal/95",
  secondary:
    "border border-sage-900/10 bg-off-white/70 text-charcoal backdrop-blur hover:-translate-y-0.5 hover:bg-off-white",
  ghost: "text-charcoal hover:bg-charcoal/5",
};

export function ButtonLink({
  analytics,
  children,
  className,
  disabled = false,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    disabled && "cursor-not-allowed opacity-60",
    className,
  );
  const analyticsAttributes = getAnalyticsAttributes(analytics);

  if (disabled) {
    return (
      <span aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }

  const isExternal = isExternalHttpUrl(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        className={classes}
        href={href}
        {...analyticsAttributes}
        {...getSafeExternalLinkAttributes(href)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...analyticsAttributes}>
      {children}
    </Link>
  );
}
