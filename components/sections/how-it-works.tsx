import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          description="The house-call process is intentionally simple, helping visitors understand what happens from booking to post-treatment rest."
          eyebrow="How it works"
          title="How house-call appointments work"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {siteConfig.howItWorks.map((item) => (
            <li className="rounded-[1.75rem] border border-white/70 bg-white/72 p-6 shadow-soft" key={item.step}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-800/80">
                Step {item.step}
              </p>
              <h3 className="mt-4 font-display text-2xl text-charcoal">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
