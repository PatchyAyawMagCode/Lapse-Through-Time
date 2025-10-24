import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-20 bg-gradient-to-br from-card to-card/50 border-t border-card-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="font-serif font-semibold text-xl mb-5 tracking-tight" data-testid="footer-about-heading">
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Lapse Through Time is an interactive platform for exploring
              historical changes through visualizations and timelines.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-xl mb-5 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  data-testid="link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("journey")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  data-testid="link-visualize"
                >
                  Visualize
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-xl mb-5 tracking-tight" data-testid="footer-social-heading">
              Connect
            </h3>
            <div className="flex gap-5">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
                aria-label="GitHub"
                data-testid="social-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
                aria-label="Twitter"
                data-testid="social-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
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