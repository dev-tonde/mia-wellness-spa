import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            description="The experience is framed around trusted house-call care, thoughtful treatment, and the comfort of receiving wellness support where you already feel most at ease."
            eyebrow="Why choose Mia"
            title="A calm, premium approach to house-call wellness"
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {siteConfig.reasons.map((reason) => (
              <article
                className="rounded-[1.75rem] border border-white/70 bg-off-white/72 p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-off-white"
                key={reason.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">
                  {reason.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-charcoal/72">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
