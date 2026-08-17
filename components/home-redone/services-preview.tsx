import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    href: "/services/carpentry",
    isPrimary: true,
    image: "/images/68.webp",
    description:
      "Our core specialty. Custom kitchen cupboards, built-in wardrobes, doors, roofing timber and bespoke woodwork, joined and finished by hand.",
  },
  {
    icon: Grid3X3,
    title: "Tiling",
    href: "/services/tiling",
    isPrimary: false,
    image: "/images/75.webp",
    description: "Floor, bathroom and wall tiling, laid true and level.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    href: "/services",
    isPrimary: false,
    image: "/images/67.webp",
    description: "Interior and exterior finishes that complement the woodwork.",
  },
  {
    icon: Layers,
    title: "RhinoLite Plastering",
    href: "/services/rhinolite-plastering",
    isPrimary: false,
    image: "/images/74.webp",
    description:
      "Smooth wall and ceiling plaster finishes, done right the first time.",
  },
  {
    icon: Droplets,
    title: "Stormwater Drainage",
    href: "/services/stormwater-drainage",
    isPrimary: false,
    image: "/images/70.webp",
    description:
      "Drainage systems that protect the structure you've invested in.",
  },
  {
    icon: Wrench,
    title: "Welding",
    href: "/services/welding",
    isPrimary: false,
    image: "/images/76.webp",
    description: "Security gates, burglar bars and custom steel fabrication.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="max-w-2xl mb-16">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-primary mt-4 mb-5 text-balance">
            One carpenter. Six trades. No handoffs.
          </h2>
          <p className="text-foreground/85 leading-relaxed">
            Carpentry is the specialty everything else is built around — tiling,
            plastering, drainage and welding exist to finish a project properly,
            not to pad a services page.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fade-up"
              delay={index * 90}
              className={service.isPrimary ? "md:col-span-2 md:row-span-2" : ""}
            >
              <Link
                href={service.href}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border bg-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${
                  service.isPrimary
                    ? "min-h-[420px] md:min-h-[500px]"
                    : "min-h-[240px]"
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} in Limpopo & Gauteng`}
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />

                <div className="relative z-10 p-6 md:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/15 backdrop-blur-sm">
                    <service.icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-serif font-semibold tracking-tight text-xl md:text-2xl text-white mb-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                    {service.title}
                  </h3>
                  <p
                    className={`text-accent text-sm leading-relaxed mb-4 font-medium [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] ${
                      service.isPrimary ? "max-w-md" : ""
                    }`}
                  >
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" className="text-center mt-14">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[190px] border-2 border-primary-foreground/70 bg-transparent text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground"
          >
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
