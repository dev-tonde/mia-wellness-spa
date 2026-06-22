import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  description: string;
  descriptionId?: string;
  eyebrow?: string;
  id?: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  as = "h2",
  description,
  descriptionId,
  eyebrow,
  id,
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
      <HeadingTag className="font-display text-3xl leading-tight text-charcoal sm:text-4xl" id={id}>
        {title}
      </HeadingTag>
      <p className="mt-4 text-base leading-7 text-charcoal/72 sm:text-lg" id={descriptionId}>
        {description}
      </p>
    </div>
  );
}
