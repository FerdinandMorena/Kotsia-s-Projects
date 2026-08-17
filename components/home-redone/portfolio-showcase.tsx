"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { JoineryFrame } from "@/components/ui/joinery-mark";
import { X } from "lucide-react";

type Category =
  | "All"
  | "Kitchens"
  | "Wardrobes"
  | "Decking & Staircases"
  | "Tiling & Finishes";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  image: string;
  tall?: boolean;
};

// Replace `image` with real project photography — these currently reuse the
// same placeholder so the layout can be reviewed before assets are ready.
const projects: Project[] = [
  {
    title: "Walnut Kitchen Cupboards",
    category: "Kitchens",
    location: "Polokwane",
    image: "/images/53.webp",
    tall: true,
  },
  {
    title: "Built-in Bedroom Wardrobes",
    category: "Wardrobes",
    location: "Sandton",
    image: "/images/53.webp",
  },
  {
    title: "Timber Deck & Pergola",
    category: "Decking & Staircases",
    location: "Midrand",
    image: "/images/53.webp",
  },
  {
    title: "Floating Oak Shelving",
    category: "Wardrobes",
    location: "Pretoria",
    image: "/images/53.webp",
  },
  {
    title: "Bathroom Tiling & Finishes",
    category: "Tiling & Finishes",
    location: "Centurion",
    image: "/images/53.webp",
    tall: true,
  },
  {
    title: "Kitchen Island & Cabinetry",
    category: "Kitchens",
    location: "Johannesburg",
    image: "/images/53.webp",
  },
  {
    title: "Solid Wood Staircase",
    category: "Decking & Staircases",
    location: "Polokwane",
    image: "/images/53.webp",
  },
  {
    title: "Study Wardrobe & Desk Unit",
    category: "Wardrobes",
    location: "Sandton",
    image: "/images/53.webp",
  },
];

const categories: Category[] = [
  "All",
  "Kitchens",
  "Wardrobes",
  "Decking & Staircases",
  "Tiling & Finishes",
];

export function PortfolioShowcase() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="max-w-2xl mb-10">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-primary mt-4 mb-5 text-balance">
            A record of finished work
          </h2>
          <p className="text-foreground/85 leading-relaxed">
            A selection of custom carpentry and finishing work across Limpopo
            and Gauteng.
          </p>
        </AnimateOnScroll>

        {/* Filters */}
        <AnimateOnScroll
          animation="fade-up"
          delay={100}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimateOnScroll>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {filtered.map((project, i) => (
            <button
              key={project.title}
              onClick={() => setLightboxIndex(i)}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-border text-left break-inside-avoid ${
                project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <JoineryFrame className="m-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src={project.image}
                alt={`${project.title} — ${project.location}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[11px] uppercase tracking-[0.25em] text-accent">
                  {project.category}
                </p>
                <p className="mt-1 font-serif font-semibold tracking-tight text-lg text-primary-foreground">
                  {project.title}
                </p>
                <p className="text-primary-foreground/85 text-xs mt-0.5">
                  {project.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-primary p-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent">
                {filtered[lightboxIndex].category}
              </p>
              <p className="mt-1 font-serif font-semibold tracking-tight text-xl text-primary-foreground">
                {filtered[lightboxIndex].title}
              </p>
              <p className="text-primary-foreground/85 text-sm mt-0.5">
                {filtered[lightboxIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
