import { cn } from "@/lib/utils";

type QuoteCardProps = {
  attribution?: string;
  className?: string;
  eyebrow?: string;
  quote: string;
};

export function QuoteCard({
  attribution,
  className,
  eyebrow = "Quote",
  quote,
}: QuoteCardProps) {
  return (
    <figure
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-off-white/78 p-6 shadow-soft backdrop-blur sm:p-7",
        className,
      )}
    >
      <figcaption className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
        {eyebrow}
      </figcaption>
      <blockquote className="mt-4 font-display text-2xl leading-relaxed text-charcoal sm:text-[1.9rem]">
        “{quote}”
      </blockquote>
      {attribution ? <p className="mt-5 text-sm text-charcoal/58">{attribution}</p> : null}
    </figure>
  );
}
