import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4" data-testid="footer-about-heading">
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Lapse Through Time is an interactive platform for exploring
              historical changes through visualizations and timelines.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-xl mb-4" data-testid="footer-links-heading">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="footer-link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("journey")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="footer-link-timeline"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection("explore")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="footer-link-explore"
              >
                Explore
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-xl mb-4" data-testid="footer-social-heading">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="GitHub"
                data-testid="social-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="Twitter"
                data-testid="social-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="LinkedIn"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © {new Date().getFullYear()} A Lapse Through Time. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
