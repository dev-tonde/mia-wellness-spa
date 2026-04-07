import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getBookingHref } from "@/lib/booking";
import { siteConfig } from "@/lib/site-config";

type CtaBandProps = {
  description: string;
  title: string;
};

export function CtaBand({ description, title }: CtaBandProps) {
  const bookingHref = getBookingHref();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-charcoal to-charcoal/92 px-6 py-10 text-off-white shadow-soft sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-off-white/62">Ready to book</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-off-white/72 sm:text-base">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={bookingHref}>Book Your Appointment</ButtonLink>
            <ButtonLink href={siteConfig.business.whatsappHref} variant="secondary">
              Ask a question on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
