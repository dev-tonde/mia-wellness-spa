export const routeConfig = {
  home: "/",
  about: "/about",
  services: "/services",
  booking: "/booking",
  bookingThankYou: "/booking/thank-you",
  faq: "/faq",
  contact: "/contact",
} as const;

export const bookingConfig = {
  providerName: "Calendly",
  calendlyUrl: "https://calendly.com/nomiamercy",
  fallbackPath: routeConfig.booking,
  confirmationPath: routeConfig.bookingThankYou,
  embedMinHeight: 780,
} as const;

export const businessConfig = {
  name: "Mia Wellness Spa",
  phoneNumber: "+27 65 847 3176",
  phoneHref: "tel:+27658473176",
  whatsappHref: "https://wa.me/27658473176",
  serviceAreaSummary: "Fourways and surrounding areas",
  location: "Fourways, Johannesburg",
  domain: "miawellness.co.za",
  baseUrl: "https://miawellness.co.za",
  logoPath: "/icon.svg",
  serviceModel: "Mobile house-call massage and wellness service",
  shortSummary: "Wellness treatments brought to your home with calm, professional care.",
  footerSummary:
    "A premium mobile massage experience based in Fourways, Johannesburg, built for clients who value comfort, convenience, and a softer rhythm of care.",
  appointmentStyle: "By appointment, in the client's home.",
  socials: [
    {
      name: "Instagram",
      href: "",
    },
    {
      name: "Facebook",
      href: "",
    },
  ] as const,
} as const;

export const primaryNavigation = [
  { href: routeConfig.home, label: "Home" },
  { href: routeConfig.about, label: "About" },
  { href: routeConfig.services, label: "Services" },
  { href: routeConfig.booking, label: "Booking" },
  { href: routeConfig.faq, label: "FAQ" },
  { href: routeConfig.contact, label: "Contact" },
] as const;

export const siteChromeConfig = {
  headerTagline: `Mobile wellness in ${businessConfig.location}`,
  primaryBookingLabel: "Book Now",
  mobileBookingLabel: "Book Now",
  mobileNavLabel: "Open site menu",
  mobileNavTitle: "Browse Mia Wellness Spa",
  footerSummaryTitle: businessConfig.name,
  footerQuickLinksTitle: "Quick links",
  footerContactTitle: "Contact",
  footerSocialTitle: "Social profiles",
} as const;
