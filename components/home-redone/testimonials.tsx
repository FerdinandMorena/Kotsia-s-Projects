import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Sandton",
    content:
      "Kotsia's Projects transformed our kitchen with beautiful custom cabinetry. Their attention to detail is exceptional, and the team was professional from start to finish.",
    rating: 5,
  },
  {
    name: "David Nkosi",
    role: "Property Manager",
    content:
      "We've used them for multiple projects across our properties. Their reliability and quality of work have made them our go-to contractor for all maintenance needs.",
    rating: 5,
  },
  {
    name: "Lisa van der Berg",
    role: "Business Owner",
    content:
      "The welding work they did for our storefront was outstanding. They completed the job on time and the craftsmanship exceeded our expectations.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="max-w-2xl mb-16">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-primary mt-4 mb-5 text-balance">
            What clients say, unedited
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={testimonial.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <Quote
                  className="w-8 h-8 text-accent/30 mb-5"
                  strokeWidth={1.5}
                />
                <p className="flex-grow font-serif font-medium text-lg leading-relaxed text-foreground/95 mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-foreground/75 text-xs mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
