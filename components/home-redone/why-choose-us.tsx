import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  Award,
  Clock,
  ShieldCheck,
  HandCoins,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Craftsmen",
    description:
      "A decade of custom woodwork, not general-contractor guesswork.",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Sourced for the piece, not the cheapest option on the shelf.",
  },
  {
    icon: BadgeCheck,
    title: "Precision Workmanship",
    description: "Joints, finishes and fittings checked before installation.",
  },
  {
    icon: HandCoins,
    title: "Transparent Pricing",
    description: "One quote, no hidden extras added once work has started.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Clear timelines, communicated and kept — start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Workmanship Warranty",
    description:
      "Every project stands behind the work long after it's installed.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="max-w-2xl mb-16">
          <span className="text-white text-xs font-medium tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-serif font-semibold tracking-tight text-3xl md:text-5xl text-gray-900 mt-4 mb-5 text-balance">
            The difference is in what you don't see
          </h2>
          <p className="text-gray-800 leading-relaxed font-medium">
            The parts done properly are usually the parts nobody notices — until
            something's built without them.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <AnimateOnScroll
              key={reason.title}
              animation="fade-up"
              delay={index * 80}
            >
              <div className="group flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-primary-foreground/[0.06]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/60 transition-colors group-hover:bg-accent/80">
                  <reason.icon
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-serif font-semibold tracking-tight text-lg text-gray-900 mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-gray-900 text-sm leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
