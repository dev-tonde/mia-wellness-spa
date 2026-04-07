import { businessConfig, routeConfig } from "@/lib/business-config";

type JsonLdNode = Record<string, unknown>;

type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

function isPublishedUrl(href?: string | null) {
  return Boolean(href && !href.includes("replace-with") && !href.startsWith("#"));
}

function getSameAsUrls() {
  return businessConfig.socials.map((social) => social.href).filter(isPublishedUrl);
}

function getAreaServed() {
  return {
    "@type": "Place",
    name: businessConfig.serviceAreaSummary,
  };
}

function getContactPoint() {
  return {
    "@type": "ContactPoint",
    telephone: businessConfig.phoneNumber,
    contactType: "customer support",
    url: `${businessConfig.baseUrl}${routeConfig.contact}`,
    areaServed: getAreaServed(),
  };
}

export function getOrganizationJsonLd(): JsonLdNode {
  const sameAs = getSameAsUrls();

  return {
    "@type": "Organization",
    "@id": `${businessConfig.baseUrl}#organization`,
    name: businessConfig.name,
    url: businessConfig.baseUrl,
    description: businessConfig.shortSummary,
    logo: `${businessConfig.baseUrl}${businessConfig.logoPath}`,
    contactPoint: [getContactPoint()],
    areaServed: getAreaServed(),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function getLocalBusinessJsonLd(): JsonLdNode {
  return {
    "@type": "LocalBusiness",
    "@id": `${businessConfig.baseUrl}#localbusiness`,
    name: businessConfig.name,
    url: businessConfig.baseUrl,
    description:
      `${businessConfig.name} is a mobile house-call massage and wellness service based in ${businessConfig.location}. ` +
      "Treatments are provided by appointment in the client's home, and there is no public spa premises.",
    telephone: businessConfig.phoneNumber,
    image: `${businessConfig.baseUrl}${businessConfig.logoPath}`,
    areaServed: getAreaServed(),
    parentOrganization: {
      "@id": `${businessConfig.baseUrl}#organization`,
    },
    contactPoint: [getContactPoint()],
  };
}

export function getBusinessStructuredData(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [getOrganizationJsonLd(), getLocalBusinessJsonLd()],
  };
}
