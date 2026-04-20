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
import { carpentryKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Professional Carpentry Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Expert carpentry services in Limpopo & Gauteng. Custom kitchen cupboards, built-in wardrobes, doors, frames, roofing structures & repairs. Serving Polokwane, Johannesburg, Pretoria, Sandton, Centurion & more. Get a free quote today.",
  keywords: carpentryKeywords,
  alternates: {
    canonical: "/services/carpentry",
  },
  openGraph: {
    title:
      "Professional Carpentry Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Custom kitchen cupboards, built-in wardrobes, doors, frames, roofing structures & wood repairs in Limpopo & Gauteng. Get a free quote from our expert carpenter.",
    url: `${siteConfig.url}/services/carpentry`,
    siteName: "Kotsia's Projects",
    images: [
      {
        url: `${siteConfig.url}/images/68.webp`,
        alt: "Carpentry services by Kotsia's Projects",
      },
    ],
    type: "website",
    locale: "en_ZA",
  },
};

const carpentryServices = [
  {
    title: "Kitchen Cupboards & Built-In Cabinetry",
    description:
      "Custom kitchen cupboard installation is one of our most in-demand carpentry services. We design and build fitted kitchen units that maximize storage, complement your aesthetic, and are built to last decades. From modern handleless designs in Sandton to traditional family kitchens in Polokwane, our kitchen carpentry is tailored to your exact requirements and budget.",
    features: [
      "Custom kitchen cupboard design and installation",
      "Built-in pantry and storage units",
      "Kitchen island construction",
      "Cabinet painting, staining, and finishing",
      "Countertop and hardware fitting",
    ],
  },
  {
    title: "Doors & Frames",
    description:
      "We specialize in the manufacture, installation, and repair of all types of wooden doors and frames. Whether you need a solid hardwood entrance door, internal room doors, or custom-fitted frames for a renovation — we deliver quality door carpentry across Gauteng and Limpopo.",
    features: [
      "Solid wood and engineered door installation",
      "Custom door frame fitting and replacement",
      "Bifold and sliding interior door systems",
      "Exterior door installation and security upgrades",
      "Door hardware and lockset fitting",
    ],
  },
  {
    title: "Roofing Carpentry Structures",
    description:
      "Structural woodwork is at the heart of every sound building. Our roofing carpentry services ensure your home or commercial property is built on a solid timber foundation. We construct and repair roof structures, trusses, and all related woodwork for new builds and renovations across Limpopo and Gauteng.",
    features: [
      "Timber roof truss construction and replacement",
      "Fascia board and barge board installation",
      "Purlins, battens, and roof decking",
      "Veranda and patio roof frames",
      "Roof structure inspections and repairs",
    ],
  },
  {
    title: "Wood Repairs & Restoration",
    description:
      "Not every project requires a full build. We offer professional wood repair and restoration services that breathe new life into existing woodwork. From repairing damaged floorboards and rotting window frames to restoring antique furniture, our expertise ensures a finish that closely matches the original material.",
    features: [
      "Wooden floor repair and restoration",
      "Window and door frame rot repair",
      "Furniture repair and refurbishment",
      "Wood filler, sanding, and refinishing",
      "Structural timber repairs",
    ],
  },
  {
    title: "Custom Woodwork & Furniture",
    description:
      "Beyond standard installations, we design and build bespoke furniture and custom woodwork pieces that reflect your personal style. From custom wardrobes and entertainment units to home offices, bookshelves, and unique accent pieces — if you can envision it, we can craft it with skill and precision.",
    features: [
      "Custom built-in wardrobes and bedroom units",
      "Bespoke entertainment and TV units",
      "Home office furniture and shelving",
      "Custom bar and entertainment furniture",
      "Unique accent and statement pieces",
    ],
  },
];

const whyChooseUs = [
  "Over 8 years of dedicated carpentry experience",
  "Personal service — work directly with the craftsman",
  "Competitive, affordable pricing with no hidden costs",
  "Quality materials for lasting beauty and durability",
  "Serving Limpopo and Gauteng with reliable scheduling",
  "Free consultations and detailed project quotes",
];

export default function CarpentryPage() {
  return (
    <>
      <ServiceJsonLd
        name="Carpentry Services in Limpopo & Gauteng"
        description="Professional carpentry services including custom kitchen cupboards, built-in wardrobes, doors, frames, roofing structures, and wood repairs in Limpopo and Gauteng, South Africa."
        url="/services/carpentry"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 min-h-[65vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/68.webp"
            alt="Professional carpenter crafting custom woodwork in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Primary Service — Limpopo & Gauteng
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance leading-tight">
              Professional Carpentry Services in Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Custom woodwork, kitchen cupboards, doors, built-in cabinetry, and
              roofing structures — crafted with skill and delivered across
              Polokwane, Johannesburg, Pretoria, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I'd like to get a quote for carpentry services`}
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
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Our Carpentry
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                Skilled Carpenter Serving Limpopo & Gauteng
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  At Kotsia&apos;s Projects, carpentry is our core specialty.
                  With over 8 years of hands-on experience, our skilled
                  carpenter delivers exceptional woodwork across Limpopo and
                  Gauteng — from custom kitchen cupboards in Polokwane to
                  built-in wardrobes in Johannesburg, Pretoria, and Sandton.
                </p>
                <p>
                  We believe that great carpentry is about more than just
                  working with wood — it&apos;s about creating functional,
                  beautiful spaces that reflect your personal style and stand
                  the test of time. Every joint is measured twice, every finish
                  is hand-inspected, and every project is treated with the
                  personal attention it deserves.
                </p>
                <p>
                  Whether you&apos;re looking for an affordable carpenter in
                  Pretoria, a specialist for kitchen cupboard installation in
                  Polokwane, or a reliable contractor for roofing timber work in
                  Midrand — Kotsia&apos;s Projects brings the same level of
                  precision and dedication to every job, large or small.
                </p>
                <p>
                  Our carpentry services span residential and light commercial
                  projects. We work with homeowners, property developers, and
                  contractors who need dependable, high-quality woodwork
                  completed on time and within budget.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Carpentry Services Breakdown */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              Our Carpentry Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From kitchen cupboards and custom furniture to structural roofing
              and wood repairs, we cover the full scope of carpentry services in
              Limpopo and Gauteng.
            </p>
          </AnimateOnScroll>

          <div className="space-y-16">
            {carpentryServices.map((service, index) => (
              <AnimateOnScroll
                key={service.title}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
                      <Image
                        src={
                          index === 0
                            ? "/images/7.webp"
                            : index === 1
                              ? "/images/9.webp"
                              : index === 2
                                ? "/images/19.webp"
                                : index === 3
                                  ? "/images/8.webp"
                                  : "/images/5.webp"
                        }
                        alt={`${service.title} by Kotsia's Projects in Limpopo and Gauteng`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                {index !== carpentryServices.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-right">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                Your Trusted Carpenter in Limpopo & Gauteng
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                When you hire a carpenter in Limpopo or Gauteng, you want
                someone you can trust to deliver quality work, on time, at a
                fair price. Here&apos;s what sets Kotsia&apos;s Projects apart
                from the competition.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "8+", label: "Years as a Carpenter" },
                  { stat: "500+", label: "Custom Projects Completed" },
                  { stat: "2", label: "Provinces Served" },
                  { stat: "100%", label: "Client Satisfaction" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 bg-card rounded-xl border border-border text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {item.stat}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Where We Work
            </span>
            <h2 className="text-3xl font-bold text-foreground mt-3 mb-4">
              Carpentry Services Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide professional carpentry services across two provinces in
              South Africa.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="p-8 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="text-xl font-bold text-foreground">Limpopo</h3>
                </div>
                <ul className="space-y-2">
                  {serviceAreas.limpopo.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {city}
                    </li>
                  ))}
                  <li className="text-muted-foreground text-sm mt-2 pt-2 border-t border-border">
                    And surrounding areas
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="p-8 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="text-xl font-bold text-foreground">Gauteng</h3>
                </div>
                <ul className="space-y-2">
                  {serviceAreas.gauteng.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {city}
                    </li>
                  ))}
                  <li className="text-muted-foreground text-sm mt-2 pt-2 border-t border-border">
                    And surrounding areas
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimateOnScroll
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Start Your Carpentry Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              Contact our skilled carpenter today for a free consultation and
              quote. We serve Limpopo and Gauteng with reliable, affordable
              carpentry services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 min-w-[160px]"
              >
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 min-w-[160px]"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I need a quote for carpentry services`}
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
                className="bg-transparent border-white/30 text-white hover:bg-white/10 min-w-[160px]"
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

      <RelatedServices currentService="Carpentry" />
    </>
  );
}
