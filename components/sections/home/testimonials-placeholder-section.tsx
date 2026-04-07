import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

export function TestimonialsPlaceholderSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          description={siteConfig.home.testimonials.description}
          eyebrow={siteConfig.home.testimonials.eyebrow}
          title={siteConfig.home.testimonials.title}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {siteConfig.home.testimonials.cards.map((item) => (
            <article
              className="rounded-[1.75rem] border border-dashed border-charcoal/15 bg-off-white/72 p-6 shadow-soft"
              key={item.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                Client feedback
              </p>
              <p className="mt-4 font-display text-2xl leading-tight text-charcoal">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
