import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { RelatedServices } from "@/components/related-services";
import { ServiceJsonLd, FaqJsonLd, type FaqItem } from "@/components/json-ld";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { siteConfig, serviceAreas } from "@/lib/site-config";
import { drainageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Stormwater Drainage Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Professional stormwater drainage installation & maintenance in Limpopo & Gauteng. Drainage systems, gutters, French drains & more. Serving Polokwane, Johannesburg, Pretoria, Sandton & more. Free quotes.",
  keywords: drainageKeywords,
  alternates: {
    canonical: "/services/stormwater-drainage",
  },
  openGraph: {
    title:
      "Stormwater Drainage Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Expert stormwater drainage installation and maintenance across Limpopo & Gauteng. Protect your property from water damage. Get a free quote.",
    url: `${siteConfig.url}/services/stormwater-drainage`,
    siteName: "Kotsia's Projects",
    images: [{ url: `${siteConfig.url}/images/70.webp`, alt: "Stormwater drainage services" }],
    type: "website",
    locale: "en_ZA",
  },
};

const drainageServices = [
  {
    title: "Stormwater Drainage Systems",
    description:
      "We design and install complete stormwater drainage systems for residential and commercial properties across Limpopo and Gauteng. Our installations channel surface water effectively away from buildings, driveways, and gardens, protecting your property investment.",
    features: [
      "Surface drainage channel installation",
      "Underground drainage pipe systems",
      "Catch basins and sump installations",
      "Driveway and paving drainage",
      "Compliant with South African building standards",
    ],
  },
  {
    title: "Gutters & Downpipes",
    description:
      "Gutters and downpipes are the first line of defence against roof water damage. We install, repair, and maintain guttering systems that protect your roof edges, walls, and foundations from water ingress.",
    features: [
      "Aluminium and PVC gutter installation",
      "Downpipe installation and routing",
      "Gutter bracket replacement and repair",
      "Leaf guard and gutter protection systems",
      "Regular gutter cleaning and maintenance",
    ],
  },
  {
    title: "French Drains",
    description:
      "French drains are an effective subsurface drainage solution for waterlogged gardens, wet areas around building foundations, and sloping properties prone to water pooling. We design and install French drain systems tailored to each property.",
    features: [
      "Subsurface French drain excavation and installation",
      "Geotextile fabric lining",
      "Gravel and perforated pipe systems",
      "Garden and lawn drainage",
      "Foundation waterlogging solutions",
    ],
  },
  {
    title: "Drainage Maintenance & Repairs",
    description:
      "Blocked or damaged drainage systems can cause serious property damage if left unaddressed. We provide inspection, unblocking, repair, and maintenance services to keep your stormwater system functioning effectively year-round.",
    features: [
      "Drainage blockage inspection and clearing",
      "Pipe repair and replacement",
      "Catch basin and sump cleaning",
      "Post-storm drainage assessment",
      "Annual maintenance contracts available",
    ],
  },
];

const damageRisks = [
  "Foundation damage from water saturation",
  "Damp walls and rising moisture",
  "Flooding of garages, basements, and living areas",
  "Soil erosion and garden damage",
  "Structural damage to paving and driveways",
];

export default function StormwaterDrainagePage() {
  return (
    <>
      <ServiceJsonLd
        name="Stormwater Drainage Services in Limpopo & Gauteng"
        description="Professional stormwater drainage system installation and maintenance across Limpopo and Gauteng. Services include drainage channels, gutters, French drains, and repairs."
        url="/services/stormwater-drainage"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/70.webp"
            alt="Stormwater drainage installation in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Drainage Services — Limpopo & Gauteng
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Stormwater Drainage Installation & Services in Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Protect your property from water damage with professional drainage
              systems, gutters, and French drains — serving Polokwane,
              Johannesburg, Pretoria, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I need a drainage system quote`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Why Proper Drainage Matters for Your Property
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Poor stormwater management is one of the most overlooked
                  causes of property damage in South Africa. Without an
                  effective drainage system, water from rain and runoff can
                  accumulate around your home or business, causing damage that
                  is both costly and difficult to reverse.
                </p>
                <p>
                  At Kotsia&apos;s Projects, we provide comprehensive
                  stormwater drainage solutions across Limpopo and Gauteng. Our
                  team assesses your property, identifies drainage problems, and
                  designs an effective system that diverts water safely away
                  from your building.
                </p>
              </div>

              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Risks of Poor Drainage
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {damageRisks.map((risk) => (
                    <li key={risk} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground font-medium">
                  Protect your woodwork investment too —{" "}
                  <Link href="/services/carpentry" className="text-primary hover:underline">
                    our carpentry services →
                  </Link>{" "}
                  pair well with drainage work to ensure your property is fully
                  protected inside and out.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Drainage Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From full drainage system installations to gutter repairs and
              French drains — we cover all stormwater needs in Limpopo and
              Gauteng.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {drainageServices.map((service, index) => (
              <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 100}>
                <div className="p-8 bg-background rounded-xl border border-border h-full">
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Drainage Services Near You</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { province: "Limpopo", cities: serviceAreas.limpopo },
              { province: "Gauteng", cities: serviceAreas.gauteng },
            ].map((area) => (
              <AnimateOnScroll key={area.province} animation="fade-up">
                <div className="p-8 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-5">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">{area.province}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Protect Your Property with Professional Drainage
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Contact us for a free site assessment and drainage quote anywhere
              in Limpopo or Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                <a href={`tel:${siteConfig.phoneRaw}`}><Phone className="mr-2 h-4 w-4" />Call Us Now</a>
              </Button>
              <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <a href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I need a drainage system quote`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <RelatedServices currentService="Stormwater Drainage" />
    </>
  );
}
