import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-background.gif')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 animate-float tracking-tight">
          A Lapse Through Time
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
          Experience history through interactive visualizations. Navigate
          seamlessly through decades of change with smooth animations and
          rich storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full backdrop-blur-xl bg-white/25 border border-white/40 text-white shadow-2xl hover-elevate active-elevate-2 min-w-[200px]"
            onClick={() => scrollToSection("journey")}
            data-testid="button-start-exploring"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full backdrop-blur-xl bg-white/10 border border-white/30 text-white shadow-xl hover-elevate active-elevate-2 min-w-[200px]"
            onClick={() => scrollToSection("video")}
            data-testid="button-learn-more"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
