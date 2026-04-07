import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type HouseCallSetupSectionProps = {
  description?: string;
  eyebrow?: string;
  title?: string;
};

function ChecklistCard({
  items,
  title,
}: {
  items: readonly string[];
  title: string;
}) {
  return (
    <article className="rounded-[1.85rem] border border-white/70 bg-off-white/74 p-6 shadow-soft sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-800/78">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-7 text-charcoal/72" key={item}>
            <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sage-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function HouseCallSetupSection({
  description = siteConfig.houseCallSetup.description,
  eyebrow = siteConfig.houseCallSetup.eyebrow,
  title = siteConfig.houseCallSetup.title,
}: HouseCallSetupSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <ChecklistCard
            items={siteConfig.houseCallSetup.whatWeBring.items}
            title={siteConfig.houseCallSetup.whatWeBring.title}
          />
          <ChecklistCard
            items={siteConfig.houseCallSetup.whatYouPrepare.items}
            title={siteConfig.houseCallSetup.whatYouPrepare.title}
          />
        </div>
        <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/74 px-6 py-6 shadow-soft sm:px-8">
          <p className="text-sm leading-7 text-charcoal/68">{siteConfig.houseCallSetup.note}</p>
        </div>
      </Container>
    </section>
  );
}
