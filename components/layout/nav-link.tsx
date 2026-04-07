"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-full px-3 py-2 text-sm transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive ? "bg-charcoal text-off-white" : "text-charcoal/70 hover:bg-charcoal/6 hover:text-charcoal",
      )}
      href={href}
    >
      {label}
    </Link>
  );
}
