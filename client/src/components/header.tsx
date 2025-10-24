import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-serif font-semibold">
            Lapse Through Time
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-foreground px-3 py-2 rounded-md hover-elevate active-elevate-2"
            data-testid="link-home"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            className="text-sm font-medium text-foreground px-3 py-2 rounded-md hover-elevate active-elevate-2"
            data-testid="link-timeline"
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection("explore")}
            className="text-sm font-medium text-foreground px-3 py-2 rounded-md hover-elevate active-elevate-2"
            data-testid="link-explore"
          >
            Explore
          </button>
        </nav>

        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
