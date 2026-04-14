import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
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
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about working with us.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={testimonial.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="p-8 bg-card rounded-xl border border-border h-full flex flex-col">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
