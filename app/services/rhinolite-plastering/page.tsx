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
import { plasteringKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "RhinoLite Plastering Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Professional RhinoLite plastering services in Limpopo & Gauteng. Interior wall plastering, ceiling finishes, skim coating & crack repair. Serving Polokwane, Johannesburg, Pretoria, Sandton & more. Get a free quote.",
  keywords: plasteringKeywords,
  alternates: {
    canonical: "/services/rhinolite-plastering",
  },
  openGraph: {
    title:
      "RhinoLite Plastering Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Expert RhinoLite wall and ceiling plastering services across Limpopo & Gauteng. Smooth finishes, skim coats, and crack repairs. Get a free quote.",
    url: `${siteConfig.url}/services/rhinolite-plastering`,
    siteName: "Kotsia's Projects",
    images: [{ url: `${siteConfig.url}/images/74.webp`, alt: "RhinoLite plastering services" }],
    type: "website",
    locale: "en_ZA",
  },
};

const plasteringServices = [
  {
    title: "Interior Wall Plastering",
    description:
      "We apply RhinoLite to interior walls and deliver consistently smooth, hard-wearing finishes that are ready for painting or wallpapering. Suitable for new builds and renovation projects across Limpopo and Gauteng.",
    features: [
      "RhinoLite application to new and existing walls",
      "Perfectly smooth, paint-ready finish",
      "Suitable for brick, blockwork, and drywall",
      "Large and small room plastering",
      "Consistent thickness and level surfaces",
    ],
  },
  {
    title: "Ceiling Plastering & Finishes",
    description:
      "A smooth, professionally plastered ceiling elevates any interior space. Our ceiling plastering service delivers a clean, uniform finish that eliminates blemishes and provides the ideal surface for decorating.",
    features: [
      "RhinoLite ceiling plaster application",
      "Cornice and coving preparation",
      "Smooth finish on concrete and board ceilings",
      "Repair of sagging or water-damaged ceilings",
      "Ready-for-paint final surface",
    ],
  },
  {
    title: "Skim Coating",
    description:
      "Skim coating is the ideal solution for walls that are rough, uneven, or showing their age. A thin layer of RhinoLite is applied over existing plaster to create a fresh, smooth surface — without the cost and disruption of full replastering.",
    features: [
      "Thin-coat skim over existing plaster",
      "Ideal for pre-painted and old walls",
      "Hides imperfections and surface damage",
      "Quick application and fast drying",
      "Cost-effective alternative to full replaster",
    ],
  },
  {
    title: "Crack Repair & Patching",
    description:
      "Cracks in plaster walls and ceilings are a common issue in both new and older properties. We diagnose the cause, repair the structural issue where necessary, and finish with a seamless RhinoLite patch that blends with the surrounding surface.",
    features: [
      "Hairline and structural crack repair",
      "Hole filling and surface patching",
      "Seamless blend with existing plaster",
      "Expansion crack management",
      "Pre-painting preparation",
    ],
  },
];

export default function RhinolitePlasteringPage() {
  return (
    <>
      <ServiceJsonLd
        name="RhinoLite Plastering Services in Limpopo & Gauteng"
        description="Professional RhinoLite interior wall plastering, ceiling finishes, skim coating, and crack repair across Limpopo and Gauteng."
        url="/services/rhinolite-plastering"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/74.webp"
            alt="RhinoLite plastering services in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Plastering Services — Limpopo & Gauteng
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              RhinoLite Plastering Services in Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Smooth, durable wall and ceiling plaster finishes for homes and
              commercial properties across Polokwane, Johannesburg, Pretoria,
              and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I'd like a quote for RhinoLite plastering`}
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
                What is RhinoLite & Why It Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RhinoLite is a premium gypsum-based finishing plaster that is
                  widely used across South Africa for its superior smooth
                  finish, fast drying time, and ease of application. It is the
                  industry standard for interior wall and ceiling finishing in
                  Limpopo and Gauteng, preferred by contractors and homeowners
                  who want lasting, professional results.
                </p>
                <p>
                  At Kotsia&apos;s Projects, our plasterers have extensive
                  experience applying RhinoLite in residential and commercial
                  settings across Polokwane, Johannesburg, Pretoria, Sandton,
                  and Midrand. We prepare surfaces meticulously and apply the
                  plaster in controlled layers to achieve the consistently flat,
                  hard finish that RhinoLite is known for.
                </p>
                <p>
                  Whether you need full-room plastering for a new build, a skim
                  coat over aging walls, or crack repairs before painting, we
                  deliver results that are ready for the next stage of your
                  project.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground font-medium">
                  Planning to install custom woodwork after plastering?{" "}
                  <Link
                    href="/services/carpentry"
                    className="text-primary hover:underline"
                  >
                    Our carpentry team →
                  </Link>{" "}
                  works seamlessly on plastered surfaces for built-in cupboards,
                  shelving, and more.
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
              Our Plastering Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From new wall plastering to skim coats and repairs, we offer
              comprehensive RhinoLite services across both provinces.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {plasteringServices.map((service, index) => (
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
              Plastering Services Near You
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
              Get a Quote for Plastering in Limpopo or Gauteng
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Contact us today for a free consultation and competitive quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call Us Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <a href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I need a plastering quote`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <RelatedServices currentService="RhinoLite Plastering" />
    </>
  );
}
