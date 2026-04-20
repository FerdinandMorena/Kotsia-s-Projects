import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  currentService: string;
  services?: RelatedService[];
}

const allServices: RelatedService[] = [
  {
    title: "Carpentry",
    href: "/services/carpentry",
    description:
      "Custom woodwork, kitchen cupboards, doors, and structural timber in Limpopo & Gauteng.",
  },
  {
    title: "Tiling",
    href: "/services/tiling",
    description:
      "Professional floor, wall, and bathroom tiling services across Limpopo & Gauteng.",
  },
  {
    title: "RhinoLite Plastering",
    href: "/services/rhinolite-plastering",
    description:
      "Smooth, durable wall and ceiling plaster finishes in Limpopo & Gauteng.",
  },
  {
    title: "Stormwater Drainage",
    href: "/services/stormwater-drainage",
    description:
      "Effective drainage systems to protect your property in Limpopo & Gauteng.",
  },
  {
    title: "Welding",
    href: "/services/welding",
    description:
      "Security gates, burglar bars, and custom steel fabrication in Limpopo & Gauteng.",
  },
];

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const filtered = allServices.filter((s) => s.title !== currentService);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Explore More
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-4">
            Related Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a full range of building and construction services across
            Limpopo and Gauteng. Explore our other offerings below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        {currentService !== "Carpentry" && (
          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Looking for our primary specialty?
            </p>
            <Link
              href="/services/carpentry"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View Carpentry Services — Our Core Expertise{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
