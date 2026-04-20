"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "custom-tv-unit", label: "Custom TV Unit Installation" },
  { id: "custom-wardrobe", label: "Custom Wardrobe Installation" },
  { id: "welding", label: "Welding" },
  { id: "bathroom-tiling", label: "Bathroom Tiling & Installation" },
  { id: "floor-tiling", label: "Floor Tiling" },
  { id: "wall-tiling", label: "Wall Tiling" },
  { id: "kitchen-renovation", label: "Kitchen Renovation" },
  { id: "ceiling-installation", label: "Ceiling Installation" },
  { id: "custom-carpentry", label: "Custom Carpentry" },
  { id: "painting", label: "Painting" },
];

const projects = [
  {
    id: 1,
    title: "Custom TV Unit Installation",
    category: "custom-tv-unit",
    description: "Bespoke TV unit with integrated storage and modern design.",
    location: "Sandton, Johannesburg",
    galleryImages: [
      "/images/29.webp",
      "/images/30.webp",
      "/images/31.webp",
      "/images/32.webp",
      "/images/56.webp",
      "/images/71.webp",
      "/images/72.webp",
      "/images/73.webp",
      "/images/85.webp",
      "/images/86.webp",
      "/images/87.webp",
    ],
  },
  {
    id: 2,
    title: "Custom Wardrobe Installation",
    category: "custom-wardrobe",
    description:
      "Floor-to-ceiling custom wardrobe with sliding doors and organizers.",
    location: "Bryanston, Johannesburg",
    galleryImages: [
      "/images/1.webp",
      "/images/3.webp",
      "/images/5.webp",
      "/images/11.webp",
      "/images/12.webp",
      "/images/20.webp",
      "/images/21.webp",
      "/images/36.webp",
      "/images/41.webp",
      "/images/43.webp",
      "/images/54.webp",
      "/images/55.webp",
      "/images/59.webp",
      "/images/63.webp",
      "/images/64.webp",
      "/images/65.webp",
      "/images/66.webp",
      "/images/78.webp",
      "/images/82.webp",
      "/images/90.webp",
    ],
  },
  {
    id: 3,
    title: "Welding",
    category: "welding",
    description:
      "Custom security gates and burglar bars with intricate designs.",
    location: "Fourways, Johannesburg",
    galleryImages: [
      "/images/2.webp",
      "/images/4.webp",
      "/images/39.webp",
      "/images/77.webp",
      "/images/79.webp",
    ],
  },
  {
    id: 4,
    title: "Bathroom Tiling & Installation",
    category: "bathroom-tiling",
    description: "Complete bathroom tiling with premium tiles and fixtures.",
    location: "Pretoria East",
    galleryImages: [
      "/images/13.webp",
      "/images/15.webp",
      "/images/18.webp",
      "/images/22.webp",
    ],
  },
  {
    id: 5,
    title: "Modern Floor Tiling",
    category: "floor-tiling",
    description: "Large format porcelain tiles for contemporary living spaces.",
    location: "Centurion",
    galleryImages: [
      "/images/16.webp",
      "/images/23.webp",
      "/images/24.webp",
      "/images/25.webp",
      "/images/34.webp",
      "/images/60.webp",
      "/images/61.webp",
      "/images/62.webp",
      "/images/77.webp",
    ],
  },
  {
    id: 6,
    title: "Feature Wall Tiling",
    category: "wall-tiling",
    description:
      "Decorative wall tiling with mosaic patterns and backsplash designs.",
    location: "Randburg",
    galleryImages: ["/images/14.webp", "/images/15.webp", "/images/18.webp"],
  },
  {
    id: 7,
    title: "Complete Kitchen Renovation",
    category: "kitchen-renovation",
    description:
      "Full kitchen makeover with custom cabinetry and modern finishes.",
    location: "Sandton, Johannesburg",
    galleryImages: [
      "/images/6.webp",
      "/images/7.webp",
      "/images/9.webp",
      "/images/17.webp",
      "/images/26.webp",
      "/images/27.webp",
      "/images/33.webp",
      "/images/35.webp",
      "/images/38.webp",
      "/images/42.webp",
      "/images/57.webp",
      "/images/58.webp",
      "/images/80.webp",
      "/images/81.webp",
      "/images/89.webp",
    ],
  },
  {
    id: 8,
    title: "Ceiling Installation & Design",
    category: "ceiling-installation",
    description:
      "Custom ceiling installations with modern materials and finishes.",
    location: "Midrand",
    galleryImages: [
      "/images/19.webp",
      "/images/28.webp",
      "/images/34.webp",
      "/images/37.webp",
      "/images/39.webp",
      "/images/77.webp",
      "/images/84.webp",
      "/images/88.webp",
    ],
  },
  {
    id: 9,
    title: "Custom Furniture & Carpentry",
    category: "custom-carpentry",
    description: "Bespoke furniture pieces and custom woodwork craftsmanship.",
    location: "Rosebank, Johannesburg",
    galleryImages: [
      "/images/5.webp",
      "/images/8.webp",
      "/images/10.webp",
      "/images/20.webp",
      "/images/36.webp",
      "/images/40.webp",
      "/images/41.webp",
      "/images/43.webp",
      "/images/44.webp",
      "/images/54.webp",
      "/images/55.webp",
      "/images/63.webp",
      "/images/66.webp",
      "/images/78.webp",
      "/images/83.webp",
    ],
  },
  {
    id: 10,
    title: "Interior/Exterior Painting Services",
    category: "painting",
    description:
      "Professional interior painting with premium finishes and preparation.",
    location: "Waterfall Estate",
    galleryImages: ["/images/28.webp", "/images/34.webp", "/images/88.webp"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(18);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setVisibleCount(18);
    setSelectedImageIndex(0);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const filteredImages = filteredProjects.flatMap((project) =>
    project.galleryImages.map((imageSrc, imageIndex) => ({
      project,
      imageSrc,
      imageIndex,
    })),
  );

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleOpenImage = (index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };

  function ImageModalViewer({
    images,
    index,
    setIndex,
    onClose,
  }: {
    images: any[];
    index: number;
    setIndex: (i: number) => void;
    onClose: () => void;
  }) {
    const current = images[index];
    const swipeStartX = useRef<number | null>(null);
    const SWIPE_THRESHOLD = 50;

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
        if (e.key === "Escape") onClose();
      };

      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [index]);

    const isDragging = useRef(false);

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      // Only track primary button (left-click / touch)
      if (e.button !== 0 && e.pointerType === "mouse") return;
      // Don't interfere with button clicks
      if ((e.target as HTMLElement).closest("button")) return;
      swipeStartX.current = e.clientX;
      isDragging.current = false;
      // Capture pointer so pointerup always fires on this element
      e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (swipeStartX.current === null) return;
      if (Math.abs(e.clientX - swipeStartX.current) > 5) {
        isDragging.current = true;
      }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      if (swipeStartX.current === null) return;
      const delta = swipeStartX.current - e.clientX;
      if (isDragging.current && Math.abs(delta) >= SWIPE_THRESHOLD) {
        delta > 0 ? next() : prev();
      }
      swipeStartX.current = null;
      isDragging.current = false;
    };

    return (
      <div
        className="relative w-full h-screen bg-white flex items-center justify-center touch-pan-y select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDragStart={(e) => e.preventDefault()}
      >
        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {current && (
            <Image
              src={current.imageSrc}
              alt="Project image"
              fill
              draggable={false}
              className="object-contain p-6"
              priority
            />
          )}
        </div>

        {/* Top Info */}
        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur">
          {current?.project.title} • {index + 1}/{images.length}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
        >
          ✕
        </button>

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
        >
          ›
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/46.webp"
            alt="Carpenters planning custom woodwork projects"
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

          {/* Image count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {visibleImages.length} of {filteredImages.length} images
              {activeCategory !== "all" &&
                ` for ${categories.find((c) => c.id === activeCategory)?.label}`}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((item, index) => (
              <AnimateOnScroll
                key={`${item.project.id}-${item.imageIndex}-${index}`}
                animation="fade-up"
                delay={(index % 6) * 100}
              >
                <button
                  type="button"
                  onClick={() =>
                    handleOpenImage(
                      filteredImages.findIndex(
                        (i) =>
                          i.project.id === item.project.id &&
                          i.imageSrc === item.imageSrc &&
                          i.imageIndex === item.imageIndex,
                      ),
                    )
                  }
                  aria-label={`Open ${item.project.title} image ${item.imageIndex + 1}`}
                  className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/60 w-full"
                >
                  <div
                    className="relative overflow-hidden bg-slate-950/5 w-full"
                    style={{ paddingTop: "75%" }}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={`${item.project.title} image ${item.imageIndex + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No images found in this category.
              </p>
            </div>
          )}

          {/* Load More — below the grid */}
          {filteredImages.length > visibleImages.length && (
            <div className="mt-10 flex justify-center">
              <AnimateOnScroll
                animation="fade-up"
                className="text-center max-w-3xl mx-auto"
              >
                <Button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + 18)}
                  className="px-8 py-6 rounded-sm bg-primary text-primary-foreground shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Load More
                </Button>
              </AnimateOnScroll>
            </div>
          )}
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen mt-2 p-0 overflow-hidden bg-black [&>button]:hidden">
          <DialogTitle className="sr-only">Project Image Viewer</DialogTitle>

          <DialogDescription className="sr-only">
            View project images in fullscreen viewer
          </DialogDescription>

          <ImageModalViewer
            images={filteredImages}
            index={selectedImageIndex}
            setIndex={setSelectedImageIndex}
            onClose={() => setIsDialogOpen(false)}
          />
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
