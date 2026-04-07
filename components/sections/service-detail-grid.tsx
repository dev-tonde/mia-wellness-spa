import { ServiceDetailCard } from "@/components/ui/service-detail-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

export function ServiceDetailGrid() {
  const bookingHref = getBookingHref();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          description="Each treatment below includes a concise description, who it may suit best, and a direct path to booking. The layout also keeps space ready for future duration and pricing details."
          eyebrow="Available treatments"
          title="Choose the massage experience that feels most aligned with your needs"
        />
        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {siteConfig.services.map((service) => (
            <ServiceDetailCard bookingHref={bookingHref} key={service.name} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
