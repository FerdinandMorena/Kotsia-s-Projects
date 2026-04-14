import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Award, Clock, Shield, Users } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "We take pride in delivering superior quality in every project, using the best materials and techniques.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your time and ensure all projects are completed within agreed timelines.",
  },
  {
    icon: Shield,
    title: "Reliability & Trust",
    description:
      "Licensed, insured, and committed to transparent communication throughout your project.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience and dedication to every job.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            The Kotsia&apos;s Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stand apart through our unwavering commitment to excellence,
            reliability, and customer satisfaction.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimateOnScroll
              key={reason.title}
              animation="fade-up"
              delay={index * 100}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
