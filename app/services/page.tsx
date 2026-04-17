import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Carpentry & Home Improvement Services | Kotsia's Projects",
  description:
    "Expert carpentry services including custom furniture, built-in cabinetry, doors, windows, and structural woodwork. Supporting services for complete home improvement projects.",
};

const services = [
  {
    imageSrc: "/images/68.webp",
    title: "Carpentry",
    description:
      "As a skilled carpenter specializing in custom woodwork, I bring precision and artistry to every project. From bespoke furniture pieces to complete home renovations, my craftsmanship transforms spaces with quality that stands the test of time.",
    features: [
      "Custom furniture design and construction",
      "Built-in cupboards and cabinetry",
      "Doors and window frames",
      "Roofing timber and structural woodwork",
      "Wood repairs and restoration",
      "Deck and patio construction",
      "Interior trim and moldings",
      "Kitchen and bathroom vanities",
    ],
  },
  {
    imageSrc: "/images/75.webp",
    title: "Tiling",
    description:
      "Professional tile installation services to complement your carpentry and home improvement projects.",
    features: [
      "Floor tile installation",
      "Wall and backsplash tiling",
      "Bathroom and shower tiling",
      "Tile repair and replacement",
    ],
  },
  {
    imageSrc: "/images/67.webppp",
    title: "Painting",
    description:
      "Quality painting services to enhance and protect your woodwork and home improvements.",
    features: [
      "Interior wall painting",
      "Exterior house painting",
      "Specialty finishes",
      "Surface preparation and repair",
    ],
  },
  {
    imageSrc: "/images/74.webp",
    title: "RhinoLite Plastering",
    description:
      "Smooth, durable wall finishes to prepare surfaces for your custom woodwork installations.",
    features: [
      "Wall plastering",
      "Ceiling finishes",
      "Skim coating",
      "Crack repair",
    ],
  },
  {
    imageSrc: "/images/70.webp",
    title: "Stormwater Drainage",
    description:
      "Effective drainage solutions to protect your property and preserve your woodwork investments.",
    features: [
      "Drainage system design",
      "Gutter and downspout systems",
      "Grading and sloping",
      "Drainage maintenance",
    ],
  },
  {
    imageSrc: "/images/76.webp",
    title: "Welding",
    description:
      "Metal fabrication and repairs to support your carpentry and construction projects.",
    features: [
      "Structural steel welding",
      "Security gates and burglar bars",
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
            src="/images/48.webp"
            alt="Carpenter sawing wood with precision tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Carpentry Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Custom Woodwork & Home Improvement
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Specializing in precision carpentry with supporting services to
              bring your vision to life. From custom furniture to structural
              repairs, we deliver craftsmanship that lasts.
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
              Need Custom Woodwork?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Every project is unique. Contact me to discuss your custom
              carpentry requirements and let&apos;s create something special
              together.
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
