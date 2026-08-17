"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Hammer,
  Grid3X3,
  Paintbrush,
  Layers,
  Droplets,
  Wrench,
  Grid3X3 as Grid3X3Icon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  href: string;
  description: string;
  image: string;
  isPrimary?: boolean;
  features: string[];
}

const services: Service[] = [
  {
    icon: Hammer,
    title: "Custom Carpentry",
    href: "/services/carpentry",
    description:
      "Our core specialty. Bespoke kitchen cupboards, built-in wardrobes, solid wood doors, roofing timber, and custom woodwork crafted with precision across Limpopo & Gauteng.",
    image: "/images/services/carpentry.webp",
    isPrimary: true,
    features: [
      "Custom kitchen cabinets",
      "Built-in wardrobes",
      "Solid wood doors",
      "Roofing timber",
      "Bespoke furniture",
    ],
  },
  {
    icon: Grid3X3,
    title: "Professional Tiling",
    href: "/services/tiling",
    description:
      "Expert floor, bathroom, and wall tiling with meticulous attention to alignment, grout lines, and waterproofing across both provinces.",
    image: "/images/services/tiling.webp",
    features: [
      "Floor tiling",
      "Bathroom walls",
      "Kitchen splashbacks",
      "Outdoor paving",
      "Waterproofing",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior & Exterior Painting",
    href: "/services/painting",
    description:
      "Premium painting services to complement your woodwork and transform your spaces with flawless finishes and colour expertise.",
    image: "/images/services/painting.webp",
    features: [
      "Interior painting",
      "Exterior painting",
      "Wood staining",
      "Varnishing",
      "Colour consultation",
    ],
  },
  {
    icon: Layers,
    title: "RhinoLite Plastering",
    href: "/services/rhinolite-plastering",
    description:
      "Smooth RhinoLite wall and ceiling plaster finishes that create the perfect canvas for your interiors across Limpopo & Gauteng.",
    image: "/images/services/plastering.webp",
    features: [
      "RhinoLite skimming",
      "Ceiling finishes",
      "Wall plastering",
      "Crack repairs",
      "Smooth finishes",
    ],
  },
  {
    icon: Droplets,
    title: "Stormwater Drainage",
    href: "/services/stormwater-drainage",
    description:
      "Effective drainage systems designed to protect your property from water damage across both provinces.",
    image: "/images/services/drainage.webp",
    features: [
      "French drains",
      "Channel drains",
      "Downpipe connections",
      "Sump installations",
      "Waterproofing",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Welding",
    href: "/services/welding",
    description:
      "Security gates, burglar bars, and custom steel fabrication with the same attention to detail as our woodwork.",
    image: "/images/services/welding.webp",
    features: [
      "Security gates",
      "Burglar bars",
      "Custom gates",
      "Steel fabrication",
      "Repairs & maintenance",
    ],
  },
];

const GOLD = "#c9a227";
const GOLD_LIGHT = "#d9b64e";
const DARK_BG = "#1c1712";

export function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLElement | null)[]>([]);
  const wordsRefs = useRef<HTMLElement[][]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(".service-card", { opacity: 0, y: 60 });
      gsap.set(".service-image", { scale: 1.15 });
      gsap.set(".service-image img", { scale: 1.1 });
      gsap.set(".service-content > *", { opacity: 0, y: 30 });
      gsap.set(".service-feature", { opacity: 0, x: -20 });
      gsap.set(".service-cta", { opacity: 0, y: 20 });

      // Section entrance - staggered card reveals with image scaling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 0.8,
        },
      });

      // Animate cards in sequence with scrub
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        });

        cardTl.to(
          card,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0,
        );
        cardTl.to(
          card.querySelector(".service-image"),
          { scale: 1, duration: 1.5, ease: "power3.out" },
          0,
        );
        cardTl.to(
          card.querySelector(".service-image img"),
          { scale: 1, duration: 2, ease: "power3.out" },
          0,
        );

        // Stagger content reveal
        const contentEls = card.querySelectorAll(".service-content > *");
        contentEls.forEach((el, i) => {
          cardTl.to(
            el,
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            0.3 + i * 0.1,
          );
        });

        // Features stagger
        const features = card.querySelectorAll(".service-feature");
        features.forEach((feat, i) => {
          cardTl.to(
            feat,
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            0.6 + i * 0.08,
          );
        });

        // CTA
        cardTl.to(
          card.querySelector(".service-cta"),
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          0.8,
        );
      });

      // Parallax background elements
      gsap.to(".service-bg-accent-1", {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
        y: -200,
        rotation: 10,
        scale: 1.1,
      });

      gsap.to(".service-bg-accent-2", {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
        y: 200,
        rotation: -10,
        scale: 1.1,
      });

      // Gold line accent animation
      gsap.fromTo(
        ".service-gold-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
      );

      // Word-by-word text reveal for section header
      const headerWords = section.querySelectorAll(".section-header-word");
      if (headerWords.length) {
        gsap.fromTo(
          headerWords,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: ".services-header",
              start: "top 80%",
              end: "top 50%",
              scrub: 0.5,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
          },
        );
      }

      // Magnetic button effect on CTA buttons
      const magneticButtons = section.querySelectorAll(".magnetic-btn");
      magneticButtons.forEach((btn) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const handleMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          });
        };
        btn.addEventListener("mousemove", handleMouseMove as EventListener);
        btn.addEventListener("mouseleave", handleMouseLeave as EventListener);
      });

      // Image hover zoom effect
      const cards = section.querySelectorAll(".service-card");
      cards.forEach((card) => {
        const image = card.querySelector(".service-image img");
        if (!image) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.08, duration: 0.8, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0.8, ease: "power2.out" });
        });
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Luxury background accents */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="service-bg-accent-1">
          <div className="absolute top-1/4 right-1/6 w-[600px] h-[600px] bg-gradient-to-br from-[#c9a227]/5 to-[#b8863b]/2 rounded-full mix-blend-screen filter blur-3xl" />
        </div>
        <div className="service-bg-accent-2">
          <div className="absolute bottom-1/4 left-1/6 w-[600px] h-[600px] bg-gradient-to-br from-[#b8863b]/5 to-[#c9a227]/2 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'url("/grid.svg")' }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header with word-by-word animation */}
        <div className="services-header text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Our Core Services
          </div>
          <h2
            id="services-heading"
            className="mx-auto max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            <span className="section-header-word inline-block">Expert</span>{" "}
            <span className="section-header-word inline-block">Carpentry</span>{" "}
            <span className="section-header-word inline-block">&</span>{" "}
            <span className="section-header-word inline-block">Home</span>{" "}
            <span className="section-header-word inline-block">
              Improvement
            </span>
          </h2>

          {/* Gold decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="service-gold-line h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
            <svg
              className="w-8 h-8 text-[#c9a227]/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
            <div className="service-gold-line h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
          </div>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Carpentry is our primary specialty, supported by tiling, plastering,
            drainage, and welding — delivering complete home improvement
            solutions across Limpopo and Gauteng.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="service-card group relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image Section */}
              <div
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                className="service-image relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Primary badge */}
                {service.isPrimary && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c9a227]/90 backdrop-blur-sm text-[#1c1712] text-xs font-semibold rounded-full">
                      <span className="w-1.5 h-1.5 bg-[#1c1712] rounded-full" />
                      Primary Service
                    </span>
                  </div>
                )}

                {/* Hover overlay with icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center transform group-hover:scale-100 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="service-content p-8 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 border-t border-border/50 pt-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="service-feature flex items-center gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-[#c9a227] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="outline"
                  className="service-cta magnetic-btn w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <Link href={service.href}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}

          {/* View All Services Card */}
          <article
            className="service-card group relative bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            style={{ gridColumn: "span 1" }}
          >
            <div className="service-image relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                  <Grid3X3Icon className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>

            <div className="service-content p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  All Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore our complete range of carpentry and home improvement
                  services across Limpopo & Gauteng.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="service-cta magnetic-btn w-full bg-gradient-to-r from-[#d9b64e] to-[#b8863b] text-[#1c1712] border-0 hover:from-[#e8c56d] hover:to-[#c9a227] shadow-lg shadow-[#c9a227]/30 transition-all duration-300"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
