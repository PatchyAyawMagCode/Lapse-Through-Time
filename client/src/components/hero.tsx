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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-float">
          A Lapse Through Time
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience history through interactive visualizations. Navigate
          seamlessly through decades of change with smooth animations and
          rich storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full backdrop-blur-md bg-white/20 border-2 border-white/30 text-white shadow-xl hover-elevate active-elevate-2"
            onClick={() => scrollToSection("journey")}
            data-testid="button-start-exploring"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full backdrop-blur-md bg-white/10 border-2 border-white/40 text-white shadow-lg hover-elevate active-elevate-2"
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
