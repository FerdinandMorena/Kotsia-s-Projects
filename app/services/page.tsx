import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { servicesPageKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
  description:
    "Professional carpentry and building services in Limpopo & Gauteng. Custom woodwork, tiling, RhinoLite plastering, stormwater drainage, and welding. Serving Polokwane, Johannesburg, Pretoria, Sandton, Centurion & more.",
  keywords: servicesPageKeywords,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Carpentry & Building Services in Limpopo & Gauteng | Kotsia's Projects",
    description:
      "Full range of carpentry and building services across Limpopo & Gauteng. Carpentry is our primary specialty, supported by tiling, plastering, drainage, and welding.",
    url: `${siteConfig.url}/services`,
    images: [{ url: `${siteConfig.url}/images/48.webp`, alt: "Carpentry and building services in Limpopo and Gauteng" }],
  },
};

const services = [
  {
    imageSrc: "/images/68.webp",
    title: "Carpentry",
    badge: "Primary Service",
    href: "/services/carpentry",
    description:
      "Our core specialty. We deliver precision custom woodwork across Limpopo and Gauteng — from kitchen cupboards and built-in wardrobes to doors, frames, roofing structures, and bespoke furniture.",
    features: [
      "Custom kitchen cupboards and cabinetry",
      "Built-in wardrobes and bedroom units",
      "Doors, frames, and structural woodwork",
      "Roofing timber and trusses",
      "Wood repairs and restoration",
      "Custom furniture and woodwork",
    ],
    isPrimary: true,
  },
  {
    imageSrc: "/images/75.webp",
    title: "Tiling",
    href: "/services/tiling",
    description:
      "Professional tile installation services for floors, walls, and bathrooms across Limpopo and Gauteng. We work with all tile types and ensure a lasting, quality finish.",
    features: [
      "Floor tile installation",
      "Bathroom and shower tiling",
      "Wall and backsplash tiling",
      "Tile repair and replacement",
    ],
    isPrimary: false,
  },
  {
    imageSrc: "/images/67.webp",
    title: "Painting",
    href: "/services",
    description:
      "Quality interior and exterior painting services to enhance and protect your woodwork and home improvements.",
    features: [
      "Interior wall painting",
      "Exterior house painting",
      "Specialty finishes",
      "Surface preparation and repair",
    ],
    isPrimary: false,
  },
  {
    imageSrc: "/images/74.webp",
    title: "RhinoLite Plastering",
    href: "/services/rhinolite-plastering",
    description:
      "Smooth, durable RhinoLite wall and ceiling finishes across Limpopo and Gauteng — perfect preparation for painting or custom woodwork installations.",
    features: [
      "Interior wall plastering",
      "Ceiling finishes",
      "Skim coating",
      "Crack repair and patching",
    ],
    isPrimary: false,
  },
  {
    imageSrc: "/images/70.webp",
    title: "Stormwater Drainage",
    href: "/services/stormwater-drainage",
    description:
      "Effective stormwater drainage solutions that protect your property from water damage across Limpopo and Gauteng.",
    features: [
      "Drainage system design and installation",
      "Gutter and downpipe systems",
      "French drain installation",
      "Drainage maintenance and repairs",
    ],
    isPrimary: false,
  },
  {
    imageSrc: "/images/76.webp",
    title: "Welding",
    href: "/services/welding",
    description:
      "Professional welding and steel fabrication for security, structural, and custom metalwork projects in Limpopo and Gauteng.",
    features: [
      "Security gates and burglar bars",
      "Structural steel welding",
      "Custom metal fabrication",
      "Carports and shade structures",
    ],
    isPrimary: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/48.webp"
            alt="Professional carpentry and building services in Limpopo and Gauteng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              All Services — Limpopo & Gauteng
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Carpentry & Building Services in Limpopo & Gauteng
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Carpentry is our primary specialty, backed by tiling, plastering,
              stormwater drainage, and welding — delivering complete home
              improvement solutions across both provinces.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={service.title}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      {service.isPrimary && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          <Star className="w-3 h-3" />
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {service.href !== "/services" && (
                        <Button asChild variant="outline">
                          <Link href={service.href}>
                            View {service.title} Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      <Button asChild>
                        <Link href="/contact">
                          Request a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      <Image
                        src={service.imageSrc}
                        alt={`${service.title} services in Limpopo and Gauteng`}
                        fill
                        className="object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </div>
                {index !== services.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimateOnScroll
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
              Need a Carpenter in Limpopo or Gauteng?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Every project is unique. Contact us to discuss your carpentry or
              building requirements and get a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-secondary-foreground"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
