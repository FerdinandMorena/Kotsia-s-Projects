import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import {
  Hammer,
  Grid3X3,
  Paintbrush,
  Layers,
  Droplets,
  Wrench,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    description:
      "Custom woodwork, framing, and cabinetry crafted with precision and care.",
  },
  {
    icon: Grid3X3,
    title: "Tiling",
    description:
      "Expert tile installation for floors, walls, and backsplashes with flawless finishes.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Interior and exterior painting services that transform your spaces beautifully.",
  },
  {
    icon: Layers,
    title: "RhinoLite Plastering",
    description:
      "Smooth, durable plaster finishes for walls and ceilings that last.",
  },
  {
    icon: Droplets,
    title: "Stormwater Drainage",
    description:
      "Effective drainage solutions to protect your property from water damage.",
  },
  {
    icon: Wrench,
    title: "Welding",
    description:
      "Professional welding services for structural and decorative metalwork.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction and maintenance solutions tailored to meet
            your specific needs with the highest standards of quality.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
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
  )
}
