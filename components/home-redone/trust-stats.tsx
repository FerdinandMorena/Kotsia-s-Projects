import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Hammer, Award, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Hammer, value: 10, suffix: "+", label: "Years as a Carpenter" },
  { icon: Award, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 100, suffix: "%", label: "Client Satisfaction" },
  { icon: ShieldCheck, value: 6, suffix: "", label: "Trades Under One Roof" },
];

export function TrustStats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="container mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll
              key={stat.label}
              animation="fade-up"
              delay={i * 80}
              className="flex flex-col items-center text-center md:items-start md:text-left md:border-l md:border-border md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <stat.icon
                className="w-5 h-5 text-accent mb-3"
                strokeWidth={1.5}
              />
              <div className="font-serif font-semibold tracking-tight text-3xl md:text-4xl text-primary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-foreground/80">
                {stat.label}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
