import { Moon, Sun, Menu, X, Home, Eye } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/logo.png" 
            alt="Lapse Through Time Logo" 
            className="w-8 h-8"
          />
          <h1 className="text-lg font-serif font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Lapse Through Time
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("home")}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent/50 group flex items-center gap-2"
              data-testid="link-home"
            >
              <Home className="h-4 w-4" />
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent/50 group flex items-center gap-2"
              data-testid="link-visualize"
            >
              <Eye className="h-4 w-4" />
              Visualize
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
            </button>
          </nav>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            className="rounded-lg hover:bg-accent/50 transition-all duration-200"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg hover:bg-accent/50 transition-all duration-200"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-2xl">
          <nav className="flex flex-col p-4 gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground px-4 py-3 rounded-lg transition-all duration-200 hover:bg-accent/50 flex items-center gap-2"
              data-testid="link-home-mobile"
            >
              <Home className="h-4 w-4" />
              Home
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground px-4 py-3 rounded-lg transition-all duration-200 hover:bg-accent/50 flex items-center gap-2"
              data-testid="link-visualize-mobile"
            >
              <Eye className="h-4 w-4" />
              Visualize
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
