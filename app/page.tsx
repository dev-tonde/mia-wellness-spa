import type { Metadata } from "next";

import { AboutPreview } from "@/components/sections/about-preview";
import { CtaBand } from "@/components/sections/cta-band";
import { FirstTimeBookingSection } from "@/components/sections/first-time-booking-section";
import { HouseCallSetupSection } from "@/components/sections/house-call-setup-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { IntroSection } from "@/components/sections/home/intro-section";
import { TestimonialsPlaceholderSection } from "@/components/sections/home/testimonials-placeholder-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { routeConfig } from "@/lib/business-config";
import { pageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Massage in Fourways",
  description:
    "Discover calm, premium mobile massage and wellness treatments in Fourways and surrounding areas, with house-call care brought to your home.",
  path: routeConfig.home,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WhyChooseUs />
      <ServicesGrid showCta />
      <HowItWorks />
      <ServiceAreasSection />
      <HouseCallSetupSection />
      <AboutPreview />
      <TestimonialsPlaceholderSection />
      <FirstTimeBookingSection />
      <CtaBand
        description={siteConfig.home.finalCta.description}
        title={siteConfig.home.finalCta.title}
      />
    </>
  );
}
