import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Kotsia's Projects",
  description:
    "Explore our comprehensive construction and maintenance services including carpentry, tiling, painting, RhinoLite plastering, stormwater drainage, and welding.",
};

const services = [
  {
    imageSrc: "/images/service-carpentry.jpg",
    title: "Carpentry",
    description:
      "From custom furniture to structural framing, our skilled carpenters bring precision and artistry to every woodworking project.",
    features: [
      "Custom cabinetry and shelving",
      "Door and window installation",
      "Deck and patio construction",
      "Structural framing",
      "Wood repairs and restoration",
    ],
  },
  {
    imageSrc: "/images/service-tiling.jpg",
    title: "Tiling",
    description:
      "Transform your spaces with expertly installed tiles. We handle everything from bathroom renovations to large-scale commercial flooring.",
    features: [
      "Floor tile installation",
      "Wall and backsplash tiling",
      "Bathroom and shower tiling",
      "Outdoor and patio tiles",
      "Tile repair and replacement",
    ],
  },
  {
    imageSrc: "/images/service-painting.jpg",
    title: "Painting",
    description:
      "Give your property a fresh look with our professional painting services. We use premium paints and techniques for lasting results.",
    features: [
      "Interior wall painting",
      "Exterior house painting",
      "Commercial painting",
      "Specialty finishes",
      "Surface preparation and repair",
    ],
  },
  {
    imageSrc: "/images/service-plastering.jpg",
    title: "RhinoLite Plastering",
    description:
      "Achieve smooth, durable wall finishes with our RhinoLite plastering services. Perfect for both new construction and renovation projects.",
    features: [
      "Wall plastering",
      "Ceiling finishes",
      "Skim coating",
      "Crack repair",
      "Textured finishes",
    ],
  },
  {
    imageSrc: "/images/service-drainage.jpg",
    title: "Stormwater Drainage",
    description:
      "Protect your property from water damage with our effective drainage solutions designed to handle even the heaviest rainfall.",
    features: [
      "Drainage system design",
      "French drain installation",
      "Gutter and downspout systems",
      "Grading and sloping",
      "Drainage maintenance",
    ],
  },
  {
    imageSrc: "/images/service-welding.jpg",
    title: "Welding",
    description:
      "Our certified welders deliver high-quality metalwork for both structural and decorative applications across residential and commercial projects.",
    features: [
      "Structural steel welding",
      "Security gates and burglar bars",
      "Balustrades and railings",
      "Custom metal fabrication",
      "Repair and maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-services.jpg"
            alt="Craftsman at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From carpentry to welding, we offer a full range of professional
              services to meet all your construction and maintenance needs.
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
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={service.imageSrc}
                        alt={`${service.title} service`}
                        fill
                        className="object-cover"
                      />
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
                    <Button asChild>
                      <Link href="/contact">
                        Request a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      <Image
                        src={service.imageSrc}
                        alt={`${service.title} service image`}
                        fill
                        className="object-cover"
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
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Every project is unique. Contact us to discuss your specific
              requirements and we&apos;ll create a tailored solution that fits
              your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-secondary-foreground"
              >
                <Link href="/contact">
                  Get in Touch
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
