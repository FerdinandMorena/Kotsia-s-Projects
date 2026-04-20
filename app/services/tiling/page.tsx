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
import { tilingKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Professional Tiling Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Expert tile installation services in Limpopo & Gauteng. Floor tiling, bathroom tiling, wall tiling & tile repairs. Serving Polokwane, Johannesburg, Pretoria, Centurion, Sandton & more. Get a free quote.",
  keywords: tilingKeywords,
  alternates: {
    canonical: "/services/tiling",
  },
  openGraph: {
    title:
      "Professional Tiling Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Expert floor, bathroom, and wall tiling services across Limpopo & Gauteng. Competitive pricing, quality materials. Get a free quote today.",
    url: `${siteConfig.url}/services/tiling`,
    siteName: "Kotsia's Projects",
    images: [{ url: `${siteConfig.url}/images/75.webp`, alt: "Tiling services in Limpopo and Gauteng" }],
    type: "website",
    locale: "en_ZA",
  },
};

const tilingServices = [
  {
    title: "Floor Tiling",
    description:
      "Transform your floors with professional tile installation. We work with large-format porcelain tiles, ceramic tiles, and natural stone to create stunning floor finishes for homes, kitchens, bathrooms, and commercial spaces across Limpopo and Gauteng. Proper floor preparation, levelling, and waterproofing are included in every installation.",
    features: [
      "Large-format porcelain and ceramic floor tiles",
      "Natural stone and slate installation",
      "Subfloor preparation and levelling",
      "Waterproofing for wet areas",
      "Expansion joint and grout finishing",
    ],
  },
  {
    title: "Bathroom Tiling",
    description:
      "Our bathroom tiling contractors specialize in full bathroom renovations and shower surrounds. We handle everything from waterproofing membranes to the final tile and grout finish, ensuring your bathroom is both visually stunning and fully waterproofed.",
    features: [
      "Full bathroom tile installation",
      "Shower cubicle and surround tiling",
      "Wet room waterproofing and tiling",
      "Feature walls and mosaic accents",
      "Toilet and vanity area tiling",
    ],
  },
  {
    title: "Wall Tiling & Backsplashes",
    description:
      "Add character and practicality to your kitchen or bathroom with professional wall tiling. Our kitchen backsplash and wall tile installations create visual impact while being hygienic and easy to maintain.",
    features: [
      "Kitchen backsplash tile installation",
      "Feature and accent wall tiling",
      "Mosaic and decorative tile work",
      "Grouting and sealing to industry standard",
      "Tile cutting and custom shapes",
    ],
  },
  {
    title: "Tile Repair & Replacement",
    description:
      "Have cracked, hollow, or loose tiles? Our tile repair and replacement service restores your floor or wall surfaces to their original condition. We source matching tiles wherever possible to ensure a seamless repair.",
    features: [
      "Cracked and chipped tile replacement",
      "Hollow tile re-bonding",
      "Grout repair and recolouring",
      "Matching tile sourcing",
      "Partial floor and wall tile repairs",
    ],
  },
];

export default function TilingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Tiling Services in Limpopo & Gauteng"
        description="Professional floor, bathroom, and wall tiling services across Limpopo and Gauteng. Includes tile repair, waterproofing, and grouting."
        url="/services/tiling"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/75.webp"
            alt="Professional tiling services in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Tiling Services — Limpopo & Gauteng
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Professional Tiling Services in Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Floor tiling, bathroom tiling, and wall tile installation done
              right — serving Polokwane, Johannesburg, Pretoria, and surrounding
              areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I'd like a quote for tiling services`}
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
                Trusted Tiling Contractors in Limpopo & Gauteng
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Kotsia&apos;s Projects, we provide expert tile installation
                  services across Limpopo and Gauteng. Professional tiling is
                  about more than laying tiles — it&apos;s about achieving clean
                  lines, perfect grout joints, and a finish that lasts for years
                  without cracking or lifting.
                </p>
                <p>
                  Our experienced tilers work with all tile types, from ceramic
                  and porcelain to natural stone and mosaic. We serve
                  homeowners, renovators, and contractors in Polokwane,
                  Johannesburg, Pretoria, Sandton, Midrand, and surrounding
                  areas in both provinces.
                </p>
                <p>
                  Every tiling project begins with proper surface preparation —
                  including levelling, waterproofing where required, and
                  adhesive selection matched to the tile type and substrate.
                  This foundation is what separates a lasting installation from
                  one that fails prematurely.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground font-medium">
                  Looking for a complete home improvement?{" "}
                  <Link
                    href="/services/carpentry"
                    className="text-primary hover:underline"
                  >
                    Our carpentry services →
                  </Link>{" "}
                  complement tiling perfectly — from kitchen cupboards to custom
                  bathroom vanities.
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
              Our Tiling Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From floor and bathroom tiling to repairs and restorations, we
              cover all your tiling needs across Limpopo and Gauteng.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {tilingServices.map((service, index) => (
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
              Tiling Services Near You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our tiling contractors operate across Limpopo and Gauteng.
            </p>
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
                    <h3 className="text-lg font-bold text-foreground">
                      {area.province}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {area.cities.map((city) => (
                      <li
                        key={city}
                        className="flex items-center gap-2 text-muted-foreground text-sm"
                      >
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
          <AnimateOnScroll
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Start Your Tiling Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Get in touch for a free quote on tiling services in Limpopo or
              Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600"
              >
                <a
                  href={`https://wa.me/${siteConfig.phoneWhatsApp}?text=Hi, I need a quote for tiling`}
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

      <RelatedServices currentService="Tiling" />
    </>
  );
}
