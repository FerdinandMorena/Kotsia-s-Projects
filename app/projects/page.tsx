"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "carpentry", label: "Carpentry" },
  { id: "tiling", label: "Tiling" },
  { id: "painting", label: "Painting" },
  { id: "plastering", label: "Plastering" },
  { id: "drainage", label: "Drainage" },
  { id: "welding", label: "Welding" },
];

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "carpentry",
    description: "Complete kitchen cabinet installation with custom woodwork.",
    location: "Sandton, Johannesburg",
    galleryImages: ["/images/service-carpentry.jpg", "/images/hero-home.jpg"],
  },
  {
    id: 2,
    title: "Bathroom Tile Installation",
    category: "tiling",
    description: "Full bathroom tiling with modern porcelain tiles.",
    location: "Pretoria East",
    galleryImages: ["/images/service-tiling.jpg", "/images/hero-services.jpg"],
  },
  {
    id: 3,
    title: "Residential Exterior Painting",
    category: "painting",
    description:
      "Complete exterior house painting with weather-resistant paint.",
    location: "Centurion",
    galleryImages: ["/images/service-painting.jpg", "/images/hero-home.jpg"],
  },
  {
    id: 4,
    title: "Office Wall Plastering",
    category: "plastering",
    description: "RhinoLite plastering for a commercial office space.",
    location: "Rosebank, Johannesburg",
    galleryImages: [
      "/images/service-plastering.jpg",
      "/images/hero-projects.jpg",
    ],
  },
  {
    id: 5,
    title: "Property Drainage System",
    category: "drainage",
    description:
      "Complete stormwater drainage installation for large property.",
    location: "Midrand",
    galleryImages: [
      "/images/service-drainage.jpg",
      "/images/hero-services.jpg",
    ],
  },
  {
    id: 6,
    title: "Security Gate Fabrication",
    category: "welding",
    description: "Custom security gate and burglar bar installation.",
    location: "Fourways",
    galleryImages: ["/images/service-welding.jpg", "/images/hero-projects.jpg"],
  },
  {
    id: 7,
    title: "Custom Built-in Wardrobes",
    category: "carpentry",
    description: "Floor-to-ceiling built-in wardrobes with sliding doors.",
    location: "Bryanston",
    galleryImages: ["/images/service-carpentry.jpg", "/images/hero-home.jpg"],
  },
  {
    id: 8,
    title: "Pool Area Tiling",
    category: "tiling",
    description: "Non-slip tile installation around swimming pool area.",
    location: "Randburg",
    galleryImages: ["/images/service-tiling.jpg", "/images/hero-services.jpg"],
  },
  {
    id: 9,
    title: "Commercial Interior Painting",
    category: "painting",
    description: "Interior painting for retail store with specialty finishes.",
    location: "Sandton City",
    galleryImages: ["/images/service-painting.jpg", "/images/hero-home.jpg"],
  },
  {
    id: 10,
    title: "New Build Plastering",
    category: "plastering",
    description: "Complete plastering for new residential development.",
    location: "Waterfall Estate",
    galleryImages: [
      "/images/service-plastering.jpg",
      "/images/hero-projects.jpg",
    ],
  },
  {
    id: 11,
    title: "French Drain Installation",
    category: "drainage",
    description: "French drain system to prevent basement flooding.",
    location: "Kyalami",
    galleryImages: [
      "/images/service-drainage.jpg",
      "/images/hero-services.jpg",
    ],
  },
  {
    id: 12,
    title: "Balustrade Installation",
    category: "welding",
    description: "Modern stainless steel balustrades for multi-story home.",
    location: "Dainfern",
    galleryImages: ["/images/service-welding.jpg", "/images/hero-projects.jpg"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryApi, setGalleryApi] = useState<CarouselApi | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!galleryApi) return;

    const updateIndex = () => {
      const index = galleryApi.selectedScrollSnap();
      setSelectedImageIndex(index);
    };

    galleryApi.on("select", updateIndex);
    updateIndex();

    return () => {
      galleryApi.off("select", updateIndex);
    };
  }, [galleryApi, selectedProject]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-projects.jpg"
            alt="Completed modern home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-up" className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Projects We&apos;re Proud Of
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our portfolio of completed projects showcasing our
              craftsmanship and attention to detail across all service areas.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <AnimateOnScroll animation="fade-up" className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border hover:border-primary/50",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const categoryData = categories.find(
                (c) => c.id === project.category,
              );

              return (
                <AnimateOnScroll
                  key={project.id}
                  animation="fade-up"
                  delay={(index % 6) * 100}
                >
                  <div className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="relative aspect-4/3 overflow-hidden bg-background">
                      <Image
                        src={project.galleryImages[0]}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProject(project);
                          setSelectedImageIndex(0);
                          setIsGalleryOpen(true);
                        }}
                        className="absolute inset-0 bg-primary/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-primary-foreground font-medium"
                      >
                        View Gallery
                      </button>
                      <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white">
                        {project.galleryImages.length} images
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {categoryData?.label}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.description}
                      </p>
                      <p className="text-muted-foreground text-xs mb-4">
                        {project.location}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProject(project);
                          setSelectedImageIndex(0);
                          setIsGalleryOpen(true);
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                      >
                        Open Gallery
                      </button>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Dialog
        open={isGalleryOpen}
        onOpenChange={(open) => {
          setIsGalleryOpen(open);
          if (!open) {
            setSelectedProject(null);
            setGalleryApi(null);
          }
        }}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {selectedProject?.title ?? "Project Gallery"}
            </DialogTitle>
            <DialogDescription>
              Browse the gallery for this completed project.
            </DialogDescription>
          </DialogHeader>

          {selectedProject?.galleryImages && (
            <>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {selectedImageIndex + 1} of{" "}
                  {selectedProject.galleryImages.length} images
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full bg-muted/20 px-3 py-1">
                    Swipe or click arrows
                  </span>
                </div>
              </div>
              <div className="relative mt-4">
                <Carousel opts={{ loop: true }} setApi={setGalleryApi}>
                  <CarouselContent className="h-90">
                    {selectedProject.galleryImages.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex}>
                        <div className="relative h-90 overflow-hidden rounded-2xl bg-background">
                          <Image
                            src={image}
                            alt={`${selectedProject.title} gallery ${imageIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                {selectedProject.galleryImages.map((image, imageIndex) => (
                  <button
                    key={imageIndex}
                    type="button"
                    onClick={() => {
                      setSelectedImageIndex(imageIndex);
                      galleryApi?.scrollTo(imageIndex);
                    }}
                    className={`relative h-20 min-w-30 overflow-hidden rounded-2xl border transition-all duration-200 ${
                      selectedImageIndex === imageIndex
                        ? "border-primary shadow-lg shadow-primary/10"
                        : "border-border"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} thumb ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-black/50 text-[11px] text-white text-center py-1">
                      {imageIndex + 1}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Let&apos;s discuss your vision and bring it to life. Contact us
              for a free consultation and quote.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
