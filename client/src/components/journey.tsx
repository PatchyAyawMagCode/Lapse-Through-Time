import { Clock, Sparkles, Database } from "lucide-react";
import { Card } from "./ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Clock,
    title: "Interactive Timeline",
    description:
      "Navigate through years and decades with an intuitive slider that responds to your touch and provides instant visual feedback.",
  },
  {
    icon: Sparkles,
    title: "Smooth Animations",
    description:
      "Experience seamless transitions between eras with carefully crafted animations that bring history to life.",
  },
  {
    icon: Database,
    title: "Rich Content",
    description:
      "Explore diverse datasets including technology evolution, fashion trends, urban development, and more.",
  },
  {
    icon: Sparkles,
    title: "Immersive Visualization",
    description:
      "Dive into stunning timelapse sequences that showcase the evolution of landscapes, cities, and cultures in breathtaking detail.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Clock;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="p-10 rounded-3xl border border-card-border/50 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 h-full group">
        <div className="mb-8 text-primary transition-transform duration-500 group-hover:scale-110" data-testid={`icon-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Icon className="h-14 w-14" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-semibold mb-5 tracking-tight" data-testid={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed" data-testid={`description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </Card>
    </div>
  );
}

export function Journey() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="journey" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-6 tracking-tight" data-testid="heading-journey">
            Journey Through Time
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how we bring history to life through innovative technology
            and thoughtful design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
