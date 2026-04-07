import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqItem } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

type FaqAccordionProps = {
  description?: string;
  items?: readonly FaqItem[];
  limit?: number;
  title?: string;
};

export function FaqAccordion({
  description = "The FAQ keeps core service truths explicit so visitors understand that Mia Wellness Spa is a mobile offering and not a fixed-location spa.",
  items = siteConfig.faqs,
  limit,
  title = "Questions people are likely to ask before booking",
}: FaqAccordionProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" description={description} eyebrow="FAQ" title={title} />
        <Accordion
          className="mx-auto mt-10 max-w-4xl"
          items={visibleItems.map((item, index) => ({
            id: `faq-${index}`,
            title: item.question,
            content: <p>{item.answer}</p>,
          }))}
        />
      </Container>
    </section>
  );
}
