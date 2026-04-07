import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InfoCardProps = {
  as?: "h2" | "h3";
  children?: ReactNode;
  className?: string;
  description: string;
  eyebrow?: string;
  title: string;
};

export function InfoCard({
  as = "h3",
  children,
  className,
  description,
  eyebrow,
  title,
}: InfoCardProps) {
  const HeadingTag = as;

  return (
    <article
      className={cn(
        "rounded-[1.6rem] border border-white/70 bg-off-white/74 p-5 shadow-soft sm:p-6",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn("font-display text-2xl leading-tight text-charcoal", eyebrow ? "mt-3" : "")}
      >
        {title}
      </HeadingTag>
      <p className="mt-4 text-sm leading-7 text-charcoal/72">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
