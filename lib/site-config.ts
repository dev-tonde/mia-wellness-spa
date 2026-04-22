import type { Metadata } from "next";

import { bookingConfig, businessConfig, primaryNavigation, routeConfig } from "@/lib/business-config";

export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  bestFor: string[];
  description: string;
  duration?: string;
  focus: string;
  image: {
    alt: string;
    objectPosition?: string;
    sourceLabel: string;
    sourcePage: string;
    src: string;
  };
  name: string;
  pricing?: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type BenefitItem = {
  description: string;
  title: string;
};

export type StepItem = {
  description: string;
  step: string;
  title: string;
};

export type EditorialSectionContent = {
  eyebrow: string;
  intro: string;
  paragraphs: string[];
  title: string;
};

export type InfoItem = {
  description: string;
  title: string;
};

export type LinkCardItem = {
  description: string;
  href?: string;
  linkLabel?: string;
  title: string;
};

export type SocialPlaceholderItem = {
  description: string;
  name: string;
};

export type ChecklistGroup = {
  items: string[];
  title: string;
};

export type SiteVisual = {
  alt: string;
  badge: string;
  caption: string;
  eyebrow: string;
  position?: string;
  src: string;
  title: string;
};

export const siteConfig = {
  business: {
    name: businessConfig.name,
    domain: businessConfig.domain,
    baseUrl: businessConfig.baseUrl,
    phoneDisplay: businessConfig.phoneNumber,
    phoneHref: businessConfig.phoneHref,
    whatsappHref: businessConfig.whatsappHref,
    location: businessConfig.location,
    serviceAreaSummary: businessConfig.serviceAreaSummary,
    serviceModel: businessConfig.serviceModel,
    appointmentStyle: businessConfig.appointmentStyle,
    strapline: businessConfig.shortSummary,
    footerSummary: businessConfig.footerSummary,
  },
  seo: {
    defaultTitle: "Mia Wellness Spa",
    titleTemplate: "%s | Mia Wellness Spa",
    description:
      `Premium mobile massage and wellness treatments in ${businessConfig.location}. Book a calming house-call experience with ${businessConfig.name}.`,
  },
  links: {
    homePage: routeConfig.home,
    bookingPage: routeConfig.booking,
    bookingThankYouPage: routeConfig.bookingThankYou,
    contactPage: routeConfig.contact,
    servicesPage: routeConfig.services,
    faqPage: routeConfig.faq,
    aboutPage: routeConfig.about,
    // TODO: Add approved social profile URLs once they are ready for publication.
    instagram: businessConfig.socials[0].href,
    facebook: businessConfig.socials[1].href,
  },
  navigation: primaryNavigation satisfies readonly NavItem[],
  trustHighlights: [
    "House-call service only",
    `Based in ${businessConfig.location}`,
    "By appointment",
  ],
  imagery: {
    homeHero: {
      alt: "Mia Wellness Spa therapist standing beside a prepared treatment table on a balcony during a house-call massage setup.",
      badge: "Real house-call setup",
      caption:
        "A mobile appointment begins with a prepared treatment space, fresh linens, and a calm professional arrival.",
      eyebrow: "House-call calm",
      position: "44% 36%",
      src: "/images/photos/home-hero-house-call-real.jpg",
      title: "Wellness set up in the comfort of home",
    } satisfies SiteVisual,
    homeIntro: {
      alt: "Close-up of Mia Wellness Spa towels, massage products, and hot stone tools arranged on a prepared treatment table.",
      badge: "Treatment details",
      caption:
        "Fresh linens, treatment tools, and a polished setup help the appointment feel calm, clean, and easy to welcome into your space.",
      eyebrow: "At-home comfort",
      position: "50% 48%",
      src: "/images/photos/home-intro-details-real.jpg",
      title: "Thoughtful details that make the experience feel personal",
    } satisfies SiteVisual,
    aboutPreview: {
      alt: "Mia Wellness Spa therapist standing beside a treatment table outdoors before a house-call massage appointment.",
      badge: "Meet Mia Wellness Spa",
      caption:
        "Mia Wellness Spa is built around warmth, trust, and the reassurance of welcoming skilled care into a familiar environment.",
      eyebrow: "About the brand",
      position: "50% 28%",
      src: "/images/photos/about-preview-table-real.jpg",
      title: "A calm professional presence from arrival",
    } satisfies SiteVisual,
    aboutFounder: {
      alt: "Founder of Mia Wellness Spa standing beside a prepared massage table in a garden setting.",
      badge: "Founder story",
      caption:
        "The brand is rooted in a personal approach to care, presence, and creating a calm experience from the very first hello.",
      eyebrow: "Founder story",
      position: "50% 24%",
      src: "/images/photos/about-founder-portrait-real.jpg",
      title: "The person behind Mia Wellness Spa",
    } satisfies SiteVisual,
    servicesOverview: {
      alt: "Mia Wellness Spa therapist holding a hot stone set beside a prepared massage table.",
      badge: "Treatment preparation",
      caption:
        "From hot stone sessions to restorative bodywork, the service arrives with the essentials needed for a professional in-home treatment.",
      eyebrow: "Treatment overview",
      position: "50% 22%",
      src: "/images/photos/services-hot-stone-real.jpg",
      title: "Treatments delivered with care and preparation",
    } satisfies SiteVisual,
    bookingSetup: {
      alt: "Prepared massage table on a balcony with Mia Wellness Spa towels and treatment essentials ready for a house-call appointment.",
      badge: "Ready for arrival",
      caption:
        "Before the treatment begins, the space is set with fresh linens and the essentials needed for a calm appointment at home.",
      eyebrow: "Booking atmosphere",
      position: "50% 42%",
      src: "/images/photos/booking-setup-ready-real.jpg",
      title: "A simple, prepared house-call experience",
    } satisfies SiteVisual,
    contactInquiry: {
      alt: "Mia Wellness Spa therapist providing a treatment beside a private outdoor home setup.",
      badge: "Real appointment",
      caption:
        "If you would like to ask a question first, the contact path stays personal, straightforward, and grounded in the real home-visit experience.",
      eyebrow: "House-call reassurance",
      position: "36% 50%",
      src: "/images/photos/contact-treatment-in-progress-real.jpg",
      title: "A respectful experience in your own space",
    } satisfies SiteVisual,
  },
  home: {
    hero: {
      eyebrow: `Mobile massage in ${businessConfig.serviceAreaSummary}`,
      title: "Wellness, Relaxation, and Relief — Brought to Your Home",
      description:
        `${businessConfig.name} offers professional mobile massage treatments in ${businessConfig.serviceAreaSummary}, giving you the comfort of a personalised wellness experience without leaving your home.`,
      primaryCtaLabel: "Book Your Appointment",
      secondaryCtaLabel: "View Our Treatments",
    },
    intro: {
      eyebrow: "A more personal way to experience wellness",
      title: "Professional care, personalised attention, and the ease of staying in your own space",
      description:
        "Mia Wellness Spa brings massage and wellness treatments directly to your home, creating a calmer and more private experience from the very beginning. Instead of planning travel around your treatment, you can settle into a space that already feels comfortable, familiar, and restful.",
      supportingCopy:
        "That house-call model makes wellness feel more personal. Each appointment is shaped around your comfort, preferred pressure, and treatment goals, with a warm, respectful approach that keeps the experience both premium and approachable.",
    },
    testimonials: {
      eyebrow: "Client feedback",
      title: "Approved client feedback will be added here when it is ready to publish",
      description:
        "This section stays live so approved client reviews can be added later without redesigning the homepage. Until then, Mia Wellness Spa intentionally avoids publishing invented quotes, names, or star ratings.",
      cards: [
        {
          title: "No invented testimonials",
          description:
            "The site does not use sample quotes or placeholder names just to simulate trust.",
        },
        {
          title: "Approval comes first",
          description:
            "Real client feedback can be added here once wording and permission are ready.",
        },
        {
          title: "Layout already prepared",
          description:
            "This section is designed to accept future testimonials cleanly without changing the page structure.",
        },
      ],
    },
    finalCta: {
      title: "Bring wellness home with a calm, professional booking experience",
      description:
        "If you are ready to enjoy massage and wellness treatments without the extra effort of travelling, the next step is simple: choose your treatment, book your appointment, and let Mia Wellness Spa come to you.",
    },
  },
  about: {
    hero: {
      eyebrow: "About Mia Wellness Spa",
      title: "A personal approach to healing, care, and calm home-based wellness",
      description:
        "Mia Wellness Spa was shaped around a simple idea: massage and wellness treatments can feel more personal, more grounding, and more restorative when they come to you. The brand exists to offer a thoughtful mobile experience rooted in trust, presence, and premium care.",
    },
    founderStory: {
      eyebrow: "Founder story",
      title: "A simple belief became the foundation of the brand",
      intro:
        "My journey into massage therapy started with a simple belief — that true healing does not always require machines or complicated treatments. Sometimes, the most powerful form of relief comes from human connection, skilled hands, and a calm environment where the body can finally let go of tension...",
      paragraphs: [
        "That belief continues to shape Mia Wellness Spa today. The intention is to create treatments that feel attentive, grounded, and genuinely caring rather than rushed or impersonal.",
        "At the heart of the brand is a clear mission: to bring thoughtful massage and wellness treatments into the home in a way that feels polished, respectful, and deeply personal.",
      ],
    } satisfies EditorialSectionContent,
    philosophy: {
      eyebrow: "Philosophy of touch",
      title: "Healing can begin with presence, attentiveness, and skilled human touch",
      intro:
        "Touch can be reassuring in a way that words often are not. When it is offered with care, focus, and skill, it can help the body soften, the breath deepen, and the nervous system begin to slow down.",
      paragraphs: [
        "Mia Wellness Spa approaches each appointment as more than a checklist of techniques. The aim is to create a calm, respectful experience where clients feel safe enough to release tension and settle into a gentler pace.",
        "This philosophy keeps the service grounded. The focus is not on dramatic promises, but on thoughtful treatment, steady presence, and the restorative value of healing through touch.",
      ],
    } satisfies EditorialSectionContent,
    mobileModel: {
      eyebrow: "Why the mobile model matters",
      title: "The house-call approach protects the calm a treatment is meant to create",
      intro:
        "For many people, the hardest part of prioritising wellness is making space for it. A mobile house-call model removes some of that friction by bringing the treatment to your home instead of asking you to fit it around travel.",
      paragraphs: [
        "Receiving care at home can feel more private, more comfortable, and more natural. It allows the experience to begin in a familiar setting and continue after the appointment ends.",
        "That matters because the calm created during a treatment does not have to be interrupted by driving, parking, or stepping straight back into a busy routine. Mia Wellness Spa is designed around that kind of thoughtful convenience.",
      ],
    } satisfies EditorialSectionContent,
    quote: {
      eyebrow: "Founder note",
      text: "The most meaningful kind of wellness care is often the kind that helps people feel safe, seen, and able to let go.",
      attribution: "Mia Wellness Spa",
    },
    cta: {
      title: "If this slower, more personal approach feels right, booking is the next gentle step",
      description:
        "Choose a treatment and appointment time through the booking flow when the Calendly link is live, or reach out on WhatsApp if you would prefer to ask a question first.",
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Services",
      title: "Mobile massage and wellness treatments delivered with calm, professional care",
      description:
        "Explore the available treatments from Mia Wellness Spa and find the approach that feels right for your body, your routine, and the comfort of receiving care at home.",
    },
    intro: {
      eyebrow: "Choosing your treatment",
      title: "Clear, thoughtful options for a more personal home wellness experience",
      description:
        "Each service is presented to help you understand the difference between treatments without overcomplication. The focus is on what each option is generally suited for, how it may feel, and how it fits into a calm house-call experience.",
      supportingCopy:
        "Because Mia Wellness Spa is a mobile service, every appointment happens in the client's home. That makes comfort, communication, and personalised care central to the experience from the moment you book.",
    },
    personalisedCare: {
      eyebrow: "Personalised care",
      title: "The treatment is tailored to the person, not treated like a one-size-fits-all routine",
      intro:
        "No two clients arrive with exactly the same needs, preferences, or pace. Mia Wellness Spa approaches each booking with the understanding that comfort, pressure, and focus areas can vary from person to person.",
      paragraphs: [
        "That is why the service experience is designed to feel responsive and attentive rather than rushed. Whether you are looking for deeper pressure, a gentler pace, or a more restorative treatment style, the goal is to create care that feels considered.",
        "The mobile model supports that approach especially well. When treatment takes place at home, the experience can feel more settled, more private, and easier to personalise from start to finish.",
      ],
    } satisfies EditorialSectionContent,
    cta: {
      title: "When you know which treatment feels right, booking is the next calm step",
      description:
        "Choose your appointment through the booking page when the Calendly link is live, or reach out on WhatsApp if you would like guidance before you book.",
    },
    serviceMeta: {
      durationLabel: "Duration",
      pricingLabel: "Pricing",
      unavailableValue: "Not published yet",
      unavailableNote:
        "These details can be added once confirmed for publication without changing the card layout.",
    },
  },
  bookingPage: {
    hero: {
      eyebrow: "Booking",
      title: "Book your mobile massage appointment with clarity and ease",
      description:
        `${businessConfig.name} is a house-call service only, offered by appointment in ${businessConfig.serviceAreaSummary}. Booking is designed for planned home visits through ${bookingConfig.providerName}, with a calmer, clearer path from enquiry to arrival.`,
      primaryCtaLabel: "Open Calendly booking",
      fallbackCtaLabel: "View booking options",
      secondaryCtaLabel: "Ask before booking",
    },
    bookingInformation: [
      {
        title: "House-call service only",
        description:
          "Mia Wellness Spa does not operate as a walk-in spa location. Treatments are delivered in the client's home by appointment.",
      },
      {
        title: "By appointment",
        description:
          "Appointments are intended to be scheduled ahead of time through Calendly rather than requested as immediate call-outs.",
      },
      {
        title: businessConfig.serviceAreaSummary,
        description:
          "Appointments are offered in Fourways and surrounding areas, with location checks available before booking if needed.",
      },
      {
        title: "Travel outside standard areas",
        description:
          "Travel outside the standard service area may carry an additional fee depending on the location.",
      },
      {
        title: "Need help choosing a treatment?",
        description:
          "If you are unsure which treatment to select, you can contact the business first before completing your booking.",
      },
    ] satisfies InfoItem[],
    policy: {
      eyebrow: "Cancellation and rescheduling",
      title: "Policy wording is still being prepared for publication",
      description:
        "Formal cancellation and rescheduling terms have not been published on the site yet. If you need to change an appointment, the best approach is to contact Mia Wellness Spa as early as possible so the next step can be discussed clearly.",
      note:
        "Exact notice periods, fees, or cut-off times are intentionally not shown because they have not been finalised for the website.",
    },
    scheduler: {
      liveTitle: "Choose your appointment through Calendly",
      liveDescription:
        "Use the embedded booking section below for a calmer in-page experience, or open Calendly in a separate tab if you prefer a direct external booking path.",
      placeholderTitle: "Booking link not live yet",
      placeholderDescription:
        "The booking flow is ready for a live Calendly link, but the production URL has not been connected yet. The page still keeps the next step clear so visitors are not left in a broken state.",
      placeholderNote:
        "Once the live Calendly link is added in the booking config or via NEXT_PUBLIC_CALENDLY_URL, this section will switch to the real booking experience without rewriting the page.",
    },
    confirmation: {
      title: "A calm next step after booking",
      description:
        "A dedicated thank-you page is ready for the post-booking experience, so Calendly can redirect visitors back to the site cleanly once that setting is configured.",
      linkLabel: "View the thank-you page",
    },
    finalCta: {
      title: "If you are ready to plan ahead, booking is designed to be the easiest part",
      description:
        "Use the Calendly path when it is live, or message Mia Wellness Spa first if you need help deciding on the right treatment or checking service-area fit.",
    },
  },
  serviceAreas: {
    eyebrow: "Service area",
    title: "House-call appointments are offered in Fourways and surrounding areas",
    description:
      `${businessConfig.name} is based in ${businessConfig.location} and works as a house-call service only. There is no public spa premises, and appointments are arranged in the client's home.`,
    items: [
      {
        title: "Core coverage",
        description:
          "Fourways and surrounding areas are the main service range for planned home appointments.",
      },
      {
        title: "House calls only",
        description:
          "Treatments are delivered in the client's home rather than from a public spa location.",
      },
      {
        title: "By appointment",
        description:
          "Visits are arranged ahead of time so the experience can stay calm, organised, and personal.",
      },
      {
        title: "Travel note",
        description:
          "Travel outside the standard service area may carry an additional fee depending on the location.",
      },
    ] satisfies InfoItem[],
    note:
      "If you are unsure whether your address falls within the usual coverage area, checking first on WhatsApp or by phone is completely fine.",
    primaryCtaLabel: "Check my area on WhatsApp",
    secondaryCtaLabel: "Go to booking",
  },
  houseCallSetup: {
    eyebrow: "What to expect at home",
    title: "What Mia Wellness Spa brings and what you prepare",
    description:
      "The house-call setup is designed to feel simple and low-friction. The therapist brings the essentials needed for the appointment, while you only need a calm indoor space and a little room to settle in.",
    whatWeBring: {
      title: "What Mia Wellness Spa brings",
      items: [
        "The essential setup needed for the treatment you booked",
        "A professional, organised house-call treatment setup",
        "A calm approach to arrival, setup, treatment, and pack-down",
      ],
    } satisfies ChecklistGroup,
    whatYouPrepare: {
      title: "What you prepare at home",
      items: [
        "A quiet, comfortable indoor space",
        "Enough room for the treatment setup to fit comfortably",
        "Clear location or access details if they are needed",
      ],
    } satisfies ChecklistGroup,
    note:
      "If you have questions about space, access, or which treatment to choose, it is completely fine to ask before booking.",
  },
  firstTimeBooking: {
    eyebrow: "First time booking?",
    title: "A first house-call appointment can still feel simple, private, and reassuring",
    description:
      "If you have never booked a mobile massage before, the process is designed to feel clear from the moment you enquire to the moment the therapist arrives.",
    items: [
      {
        title: "Professional house-call service",
        description:
          "The appointment is handled with a calm, respectful, and organised approach from booking through departure.",
      },
      {
        title: "Privacy and comfort",
        description:
          "You receive care in your own space rather than travelling to a public spa setting.",
      },
      {
        title: "Simple home setup",
        description:
          "You only need a quiet indoor area and enough room for the appointment to be set up comfortably.",
      },
      {
        title: "Clear arrival process",
        description:
          "After booking and confirming the practical details, the therapist arrives with the essentials needed for your treatment.",
      },
    ] satisfies InfoItem[],
    primaryCtaLabel: "Ask before booking",
    secondaryCtaLabel: "Go to booking",
  },
  bookingThankYouPage: {
    hero: {
      eyebrow: "Thank you",
      title: "Thank you for booking with Mia Wellness Spa",
      description:
        "If you have just completed your appointment booking, this page offers a calm next step. Mia Wellness Spa remains a house-call service only, with appointments arranged in Fourways and surrounding areas.",
    },
    nextSteps: [
      {
        title: "Keep your booking details handy",
        description:
          "Hold on to the booking information provided through Calendly so your appointment time and treatment choice stay easy to reference.",
      },
      {
        title: "Share location details clearly",
        description:
          "If anything about your location needs clarification, it is best to confirm that directly so the house-call visit can be planned smoothly.",
      },
      {
        title: "Reach out if you are unsure about anything",
        description:
          "If you need to ask about your service area, treatment choice, or home setup, WhatsApp and phone remain the clearest ways to follow up.",
      },
    ] satisfies InfoItem[],
    cta: {
      title: "If you need anything before the appointment, support stays simple",
      description:
        "You can return to the booking page, review treatments, or contact Mia Wellness Spa directly without guessing about the next step.",
    },
  },
  faqPage: {
    hero: {
      eyebrow: "Frequently asked questions",
      title: "Helpful answers for a calm, informed booking experience",
      description:
        "This page answers common questions about Mia Wellness Spa while keeping the service model clear: treatments are mobile, home-based, and designed to feel simple, respectful, and easy to understand.",
    },
    section: {
      title: "Everything here is aligned to the mobile house-call experience",
      description:
        "The FAQ is written to give visitors grounded, practical guidance without inventing policies, exact service zones, or outcomes that have not been confirmed.",
    },
    cta: {
      title: "If you still have questions, you do not need to guess before booking",
      description:
        "You can reach out first if you are unsure about the right treatment, your location, or how the mobile booking flow works.",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Reach Mia Wellness Spa in the way that feels easiest for you",
      description:
        `${businessConfig.name} is a mobile house-call service based in ${businessConfig.location}. If you would like to ask a question, check whether your area is covered, or move toward booking, WhatsApp and phone are the clearest ways to get in touch.`,
      primaryCtaLabel: "WhatsApp Mia Wellness Spa",
      secondaryCtaLabel: `Call ${businessConfig.phoneNumber}`,
    },
    details: [
      {
        title: "WhatsApp",
        description:
          "A simple way to ask questions, check treatment fit, or get clarity before booking.",
        href: businessConfig.whatsappHref,
        linkLabel: "Start a WhatsApp chat",
      },
      {
        title: "Phone",
        description:
          "Call directly if you would rather speak to someone about appointments or service questions.",
        href: businessConfig.phoneHref,
        linkLabel: businessConfig.phoneNumber,
      },
      {
        title: "Based in",
        description:
          `${businessConfig.location}. ${businessConfig.name} operates as a mobile service by appointment rather than from a storefront location.`,
      },
      {
        title: "Website",
        description:
          "Use the website to explore treatments, booking details, and the mobile service model.",
        href: businessConfig.baseUrl,
        linkLabel: businessConfig.domain,
      },
    ] satisfies LinkCardItem[],
    contactActions: {
      title: "WhatsApp is the easiest option on mobile, but phone is always available too",
      description:
        "If you are not sure which treatment to choose, or you want to check whether your location falls within the usual service area, it is perfectly fine to ask before booking.",
    },
    inquiry: {
      title: "Prefer to enquire before booking?",
      description:
        "The website does not use a submitting contact form at the moment. For a real response, WhatsApp is the clearest path, and phone is available if you would rather call.",
      note:
        "If you want to make the conversation easier, it helps to share your preferred treatment, your general area, and any question about timing, setup, or service fit.",
      items: [
        {
          title: "Best for quick questions",
          description:
            "WhatsApp is ideal if you want to check treatment fit, service-area coverage, or a practical house-call question before booking.",
        },
        {
          title: "Helpful details to include",
          description:
            "Share your preferred treatment, your general location, and whether you are choosing between services so the next step can be clearer.",
        },
        {
          title: "No dead-end web form",
          description:
            "To avoid a misleading experience, the site does not pretend to accept web enquiries through a form that is not actually connected.",
        },
      ] satisfies InfoItem[],
      primaryCtaLabel: "Start on WhatsApp",
      secondaryCtaLabel: `Call ${businessConfig.phoneNumber}`,
      bookingCtaLabel: "Go to booking",
    },
    socialProfiles: {
      title: "Social profiles are being prepared",
      description:
        "Official social profile URLs have not been confirmed, so the contact page stays honest by keeping this section reserved rather than showing guessed links.",
      pendingLabel: "Profile in preparation",
      liveLinkLabel: "Open profile",
      items: [
        {
          name: businessConfig.socials[0].name,
          description: "Instagram can be linked here once the approved profile URL is ready.",
        },
        {
          name: businessConfig.socials[1].name,
          description: "Facebook can be linked here once the approved profile URL is ready.",
        },
      ] satisfies SocialPlaceholderItem[],
    },
    cta: {
      title: "When you are ready, the next step can still be booking",
      description:
        "If you already know the treatment you want, head to the booking page. If not, WhatsApp and phone are here to help you decide first.",
    },
  },
  reasons: [
    {
      title: "Professional house-call service",
      description:
        "A polished mobile service designed to bring trusted massage care directly to your home.",
    },
    {
      title: "Personalised treatments",
      description:
        "Each appointment is guided by your preferences, focus areas, and the type of relief you need.",
    },
    {
      title: "Relaxation with convenience",
      description:
        "Experience wellness without commuting, parking, or disrupting the calm that the treatment creates.",
    },
    {
      title: "Healing through human touch",
      description:
        "Treatments are centred on attentive, hands-on care that supports rest, relief, and reconnection.",
    },
    {
      title: "Calm, respectful, professional experience",
      description:
        "From arrival to aftercare, the experience is intended to feel warm, discreet, and thoughtfully managed.",
    },
  ] satisfies BenefitItem[],
  howItWorks: [
    {
      step: "1",
      title: "Choose treatment and time through Calendly",
      description:
        "Select the treatment that suits you best and choose an appointment time through the booking flow.",
    },
    {
      step: "2",
      title: "Share location details",
      description:
        "Provide the practical details needed for your house-call appointment after booking or during follow-up.",
    },
    {
      step: "3",
      title: "Therapist arrives with essentials",
      description:
        "Your appointment is brought to your home with the essentials needed for a smooth, professional visit.",
    },
    {
      step: "4",
      title: "Enjoy the treatment at home",
      description:
        "Settle into your own environment and enjoy a more private, comfortable wellness experience.",
    },
    {
      step: "5",
      title: "Relax afterwards with no travel needed",
      description:
        "When the session ends, you can continue resting right where you are instead of rushing back into traffic.",
    },
  ] satisfies StepItem[],
  services: [
    {
      name: "Swedish Massage",
      description:
        "A soothing, flowing massage designed to encourage relaxation, gentle tension release, and an overall sense of calm in the comfort of your home.",
      focus: "Ideal for winding down and restoring calm.",
      image: {
        alt: "A therapist using smooth gliding strokes across a client's back during a Swedish massage.",
        objectPosition: "50% 46%",
        sourceLabel: "Kaboompics.com via Pexels",
        sourcePage: "https://www.pexels.com/photo/a-woman-getting-a-back-massage-6629608/",
        src: "/images/services/swedish-massage.jpg",
      },
      bestFor: [
        "Clients who want a calming, full-body treatment",
        "Periods of everyday stress and general tension",
        "A lighter to medium-pressure massage experience",
      ],
    },
    {
      name: "Sports Massage",
      description:
        "A more focused treatment style that supports active lifestyles by working into overused areas and everyday muscular tightness.",
      focus: "Well suited to movement-focused recovery and tension release.",
      image: {
        alt: "A therapist applying targeted sports massage work to a client's leg in a gym recovery setting.",
        objectPosition: "50% 32%",
        sourceLabel: "Jonathan Borba via Pexels",
        sourcePage: "https://www.pexels.com/photo/a-woman-getting-a-massage-in-a-gym-27730475/",
        src: "/images/services/sports-massage.jpg",
      },
      bestFor: [
        "Active routines and exercise recovery support",
        "Repeated muscular tightness from training or movement",
        "Clients who want more targeted bodywork",
      ],
    },
    {
      name: "Deep Tissue Massage",
      description:
        "A firmer-pressure massage intended for areas that feel especially tight, heavy, or resistant to lighter treatment styles.",
      focus: "Best for concentrated relief in tense or tight areas.",
      image: {
        alt: "A therapist using firm pressure along a client's lower back during a deep tissue massage session.",
        objectPosition: "50% 52%",
        sourceLabel: "KoolShooters via Pexels",
        sourcePage: "https://www.pexels.com/photo/a-woman-having-a-massage-6628649/",
        src: "/images/services/deep-tissue-massage.jpg",
      },
      bestFor: [
        "Stubborn tension in areas like the back, shoulders, or legs",
        "Clients who prefer firmer pressure",
        "Dense muscular tightness that needs focused attention",
      ],
    },
    {
      name: "Reflexology",
      description:
        "A focused foot-based treatment using pressure-point techniques to create a grounded, restorative, and deeply calming experience.",
      focus: "A calming option for clients who want restorative, focused care.",
      image: {
        alt: "A therapist holding and applying pressure to a client's foot during a reflexology session.",
        objectPosition: "50% 56%",
        sourceLabel: "Ron Lach via Pexels",
        sourcePage: "https://www.pexels.com/photo/foot-massage-9146382/",
        src: "/images/services/reflexology.jpg",
      },
      bestFor: [
        "Clients who enjoy focused foot-based treatment",
        "A quieter, restorative wellness session",
        "A sense of calm and grounded relaxation",
      ],
    },
    {
      name: "Hot Stone Massage",
      description:
        "A warming massage experience that combines smooth heated stones with hands-on treatment for softness, comfort, and a more deeply relaxing feel.",
      focus: "Great for clients seeking warmth, softness, and stress relief.",
      image: {
        alt: "A client resting with smooth heated stones placed during a hot stone massage treatment.",
        objectPosition: "50% 38%",
        sourceLabel: "Sergey Torbik via Pexels",
        sourcePage: "https://www.pexels.com/photo/a-woman-having-a-hot-stone-massage-7365404/",
        src: "/images/services/hot-stone-massage.jpg",
      },
      bestFor: [
        "Clients who enjoy warmth during treatment",
        "A softer, deeply soothing massage experience",
        "Stress-heavy periods where relaxation is the main goal",
      ],
    },
    {
      name: "Cupping Massage",
      description:
        "A targeted session that combines massage with cupping techniques to work into areas of tension in a more focused way.",
      focus: "Useful when specific tension patterns need extra attention.",
      image: {
        alt: "A cupping massage session with glass cups placed on a client's back while a therapist prepares the treatment.",
        objectPosition: "38% 48%",
        sourceLabel: "RDNE Stock project via Pexels",
        sourcePage: "https://www.pexels.com/photo/a-person-having-a-cupping-massage-8312822/",
        src: "/images/services/cupping-massage.jpg",
      },
      bestFor: [
        "Specific areas of tightness needing focused work",
        "Clients open to a combined massage and cupping approach",
        "A treatment plan with a more targeted feel",
      ],
    },
  ] satisfies ServiceItem[],
  faqs: [
    {
      question: "Do you have a physical spa location?",
      answer:
        "No. Mia Wellness Spa is a mobile house-call massage service only, so treatments are brought to the client rather than delivered from a fixed spa premises.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        `${businessConfig.name} serves ${businessConfig.serviceAreaSummary} as a mobile house-call service. If you are unsure whether your location falls within the usual service range, it is best to get in touch before booking.`,
    },
    {
      question: "Do you bring your own equipment?",
      answer:
        "The service is designed as a mobile appointment, so the essential setup items needed for the treatment are brought to your home. If you have any questions about space or setup, you can ask before booking.",
    },
    {
      question: "What do I need to prepare?",
      answer:
        "A quiet, comfortable indoor space is the main thing to prepare. A calm environment helps the appointment begin smoothly and makes it easier to relax into the treatment.",
    },
    {
      question: "How do I book?",
      answer:
        "Appointments are booked through Calendly and are intended for advance booking. If you are unsure which treatment to choose, you can contact Mia Wellness Spa first before completing your booking.",
    },
    {
      question: "Which massage is best for relaxation?",
      answer:
        "Swedish Massage is often a strong choice for relaxation because it is designed to feel soothing and calming. Hot Stone Massage may also appeal if you enjoy warmth and want a softer, more indulgent treatment experience.",
    },
    {
      question: "Which massage is best for deep tension?",
      answer:
        "Deep Tissue Massage is usually the clearest option for concentrated areas of deeper tension. Sports Massage may also be worth considering if the tightness is linked to activity, movement, or repeated muscular strain.",
    },
    {
      question: "Is there a travel fee?",
      answer:
        "Travel within the standard service area is expected to follow the normal booking arrangement. Travel outside the usual Fourways-area coverage may carry an additional fee depending on the location.",
    },
    {
      question: "What happens if I need to cancel or reschedule?",
      answer:
        "Formal cancellation and rescheduling terms are not published on the site yet. If you need to change an appointment, the best approach is to contact Mia Wellness Spa as early as possible so the next step can be discussed clearly.",
    },
  ] satisfies FaqItem[],
} as const;

export function isPlaceholderLink(href?: string | null) {
  return !href || href.includes("replace-with") || href.startsWith("#");
}

export function getFeaturedFaqs(limit = 4) {
  return siteConfig.faqs.slice(0, limit);
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  description: string;
  path: string;
  title: string;
}): Metadata {
  const canonicalUrl = path ? `${siteConfig.business.baseUrl}${path}` : siteConfig.business.baseUrl;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: siteConfig.business.name,
      locale: "en_ZA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
