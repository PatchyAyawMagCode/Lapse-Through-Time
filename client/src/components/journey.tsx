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
      <Card className="p-8 rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
        <div className="mb-6 text-primary" data-testid={`icon-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Icon className="h-12 w-12" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-semibold mb-4" data-testid={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-base text-foreground/80 leading-relaxed" data-testid={`description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </Card>
    </div>
  );
}

export function Journey() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="journey" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif font-semibold text-3xl md:text-4xl mb-4" data-testid="heading-journey">
            Journey Through Time
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we bring history to life through innovative technology
            and thoughtful design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
