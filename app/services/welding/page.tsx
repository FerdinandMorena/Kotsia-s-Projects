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
import { weldingKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Professional Welding Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Expert welding & steel fabrication in Limpopo & Gauteng. Security gates, burglar bars, structural welding & custom metalwork. Serving Polokwane, Johannesburg, Pretoria, Sandton & more. Get a free quote.",
  keywords: weldingKeywords,
  alternates: {
    canonical: "/services/welding",
  },
  openGraph: {
    title:
      "Professional Welding Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Expert welding, steel fabrication, security gates, and structural metalwork across Limpopo & Gauteng. Get a free quote today.",
    url: `${siteConfig.url}/services/welding`,
    siteName: "Kotsia's Projects",
    images: [{ url: `${siteConfig.url}/images/76.webp`, alt: "Welding services in Limpopo and Gauteng" }],
    type: "website",
    locale: "en_ZA",
  },
};

const weldingServices = [
  {
    title: "Security Gates & Burglar Bars",
    description:
      "Home security is a priority across South Africa. We design and fabricate custom security gates, burglar bars, and security doors that provide robust protection without compromising on appearance. Our products are powder-coated for weather resistance and available in various styles to suit your home.",
    features: [
      "Custom security gate design and fabrication",
      "Burglar bar installation for windows",
      "Security door manufacturing",
      "Powder coating for durability",
      "Slam lock and key lock options",
    ],
  },
  {
    title: "Structural Steel Welding",
    description:
      "We provide structural welding services for building and renovation projects, including steel frames, beams, and connection plates. Our structural welding meets industry standards and supports safe, long-lasting construction in Limpopo and Gauteng.",
    features: [
      "Steel frame construction and welding",
      "Beam and column connections",
      "Structural repair welding",
      "Lintel and support fabrication",
      "Industrial and commercial welding",
    ],
  },
  {
    title: "Custom Metal Fabrication",
    description:
      "Have a unique metalwork requirement? We fabricate custom steel and iron components to precise specifications, from decorative features to functional structural elements. Our workshop is equipped for cutting, bending, and welding a wide range of profiles.",
    features: [
      "Custom gate and fence fabrication",
      "Staircase and balustrade metalwork",
      "Decorative steel feature elements",
      "Brackets, supports, and fixings",
      "Precision cutting and bending",
    ],
  },
  {
    title: "Carports & Shade Structures",
    description:
      "We design, fabricate, and install steel carports, awnings, and shade structures for homes and businesses across Limpopo and Gauteng. Our steel structures are designed to withstand South African weather and are finished to resist rust and corrosion.",
    features: [
      "Single and double carport installation",
      "Steel awning and lean-to structures",
      "Shade sail support poles",
      "Patio and veranda steel frames",
      "Rust-resistant paint and coating",
    ],
  },
  {
    title: "Welding Repairs",
    description:
      "Broken gates, cracked frames, or failed welds on existing metalwork can be repaired efficiently by our team. We provide on-site and workshop repair services across our service areas, restoring damaged steel structures to full strength.",
    features: [
      "On-site gate and fence repair",
      "Crack and break re-welding",
      "Hinge, latch, and hardware replacement",
      "Rust removal and recoating",
      "Emergency welding callouts",
    ],
  },
];

export default function WeldingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Welding Services in Limpopo & Gauteng"
        description="Professional welding and steel fabrication services in Limpopo and Gauteng including security gates, burglar bars, structural welding, carports, and custom metalwork."
        url="/services/welding"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/76.webp"
            alt="Professional welding and steel fabrication in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Welding Services — Limpopo & Gauteng
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Professional Welding & Steel Fabrication in Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Security gates, burglar bars, structural welding, carports, and
              custom metalwork — serving Polokwane, Johannesburg, Pretoria, and
              surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I'd like a quote for welding services`}
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
                Skilled Welders Serving Limpopo & Gauteng
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kotsia&apos;s Projects offers skilled welding and metal
                  fabrication services across Limpopo and Gauteng. Whether you
                  need security gates in Polokwane, burglar bars in
                  Johannesburg, structural steel welding in Pretoria, or a
                  custom carport in Midrand — our experienced welders deliver
                  metalwork that is strong, durable, and well-finished.
                </p>
                <p>
                  We work with mild steel, galvanised steel, and iron profiles,
                  and offer powder coating or paint finishing on all fabricated
                  products. Our fabrication is done to the client&apos;s
                  specifications, with site measurements taken before any
                  cutting or welding begins.
                </p>
                <p>
                  Our welding services complement our broader construction
                  offering — from steel carports alongside timber decks to
                  security gates paired with custom wooden doors and frames.
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground font-medium">
                  Need steel and timber combined?{" "}
                  <Link href="/services/carpentry" className="text-primary hover:underline">
                    Our carpentry team →
                  </Link>{" "}
                  works alongside our welders to deliver complete construction
                  projects in Limpopo and Gauteng.
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
              Our Welding Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From security fabrication to structural welding and custom
              metalwork, we cover the full range of welding services in Limpopo
              and Gauteng.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {weldingServices.map((service, index) => (
              <AnimateOnScroll
                key={service.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="p-8 bg-background rounded-xl border border-border h-full">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welding Services Near You
            </h2>
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
              Need a Quote for Welding or Metal Fabrication?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Contact us for a free consultation. We serve Limpopo and Gauteng
              with professional welding and fabrication services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                <a href={`tel:${siteConfig.phoneRaw}`}><Phone className="mr-2 h-4 w-4" />Call Us Now</a>
              </Button>
              <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <a href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I need a welding quote`} target="_blank" rel="noopener noreferrer">
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

      <RelatedServices currentService="Welding" />
    </>
  );
}
