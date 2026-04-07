import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type EditorialSplitSectionProps = {
  aside?: ReactNode;
  eyebrow: string;
  intro: string;
  paragraphs?: string[];
  reverse?: boolean;
  title: string;
};

export function EditorialSplitSection({
  aside,
  eyebrow,
  intro,
  paragraphs = [],
  reverse = false,
  title,
}: EditorialSplitSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
            <SectionHeading description={intro} eyebrow={eyebrow} title={title} />
            {paragraphs.length > 0 ? (
              <div className="mt-6 space-y-5 text-base leading-8 text-charcoal/72">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
          {aside ? (
            <aside className={cn(reverse ? "lg:order-1" : "lg:order-2")}>{aside}</aside>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
