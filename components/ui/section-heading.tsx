import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  description: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  as = "h2",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-sage-800/80">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
        {title}
      </HeadingTag>
      <p className="mt-4 text-base leading-7 text-charcoal/72 sm:text-lg">{description}</p>
    </div>
  );
}
