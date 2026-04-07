import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  children?: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
};

export function PageHero({ children, description, eyebrow, title }: PageHeroProps) {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[2rem] border border-white/60 bg-off-white/80 px-6 py-12 shadow-soft backdrop-blur sm:px-10 sm:py-16">
          <SectionHeading as="h1" description={description} eyebrow={eyebrow} title={title} />
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
