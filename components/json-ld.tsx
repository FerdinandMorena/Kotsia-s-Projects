import { siteConfig, allServiceCities } from "@/lib/site-config";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/siteIcon.png`,
  image: `${siteConfig.url}/images/53.webp`,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  foundingDate: "2014",
  priceRange: "$$",
  areaServed: allServiceCities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  address: [
    {
      "@type": "PostalAddress",
      addressRegion: "Limpopo",
      addressCountry: "ZA",
    },
    {
      "@type": "PostalAddress",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Carpentry & Building Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpentry Services",
          url: `${siteConfig.url}/services/carpentry`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tiling Services",
          url: `${siteConfig.url}/services/tiling`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RhinoLite Plastering Services",
          url: `${siteConfig.url}/services/rhinolite-plastering`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stormwater Drainage Services",
          url: `${siteConfig.url}/services/stormwater-drainage`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Welding Services",
          url: `${siteConfig.url}/services/welding`,
        },
      },
    ],
  },
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}

export function ServiceJsonLd({
  name,
  description,
  url,
  areaServed = allServiceCities,
}: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/contact`,
      servicePhone: siteConfig.phoneRaw,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  faqs: FaqItem[];
}

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
