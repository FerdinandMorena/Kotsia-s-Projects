import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import {
  Hammer,
  Grid3X3,
  Paintbrush,
  Layers,
  Droplets,
  Wrench,
  ArrowRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    href: "/services/carpentry",
    isPrimary: true,
    description:
      "Our core specialty. Custom kitchen cupboards, built-in wardrobes, doors, roofing timber, and bespoke woodwork across Limpopo & Gauteng.",
  },
  {
    icon: Grid3X3,
    title: "Tiling",
    href: "/services/tiling",
    isPrimary: false,
    description:
      "Professional floor, bathroom, and wall tiling across Limpopo & Gauteng.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    href: "/services",
    isPrimary: false,
    description:
      "Interior and exterior painting to complement your woodwork and home improvements.",
  },
  {
    icon: Layers,
    title: "RhinoLite Plastering",
    href: "/services/rhinolite-plastering",
    isPrimary: false,
    description:
      "Smooth RhinoLite wall and ceiling plaster finishes in Limpopo & Gauteng.",
  },
  {
    icon: Droplets,
    title: "Stormwater Drainage",
    href: "/services/stormwater-drainage",
    isPrimary: false,
    description:
      "Effective drainage systems to protect your property across both provinces.",
  },
  {
    icon: Wrench,
    title: "Welding",
    href: "/services/welding",
    isPrimary: false,
    description:
      "Security gates, burglar bars, and custom steel fabrication in Limpopo & Gauteng.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Carpentry & Home Improvement Services in Limpopo & Gauteng
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carpentry is our primary specialty, supported by tiling, plastering,
            drainage, and welding — delivering complete home improvement
            solutions across Limpopo and Gauteng.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Link
                href={service.href}
                className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  {service.isPrimary && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Primary
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
