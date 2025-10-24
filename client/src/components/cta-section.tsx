import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="explore"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90"
        aria-hidden="true"
      />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif font-semibold text-3xl md:text-4xl text-white mb-6" data-testid="heading-cta">
          Ready to Explore?
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Start your journey through time and discover how the world has changed
          throughout the decades
        </p>
        <Button
          size="lg"
          className="rounded-full bg-white text-primary shadow-xl hover-elevate active-elevate-2"
          onClick={scrollToTop}
          data-testid="button-get-started"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
