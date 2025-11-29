import { Link } from "react-router-dom";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-background border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Icons.sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h2 className="text-lg font-bold text-foreground">AstroAI</h2>
            </Link>

            <h1 className="text-muted-foreground mt-4">
              Built for the{" "}
              <span className="text-primary">
                Cosmic Community
              </span>
            </h1>
            <div className="mt-4">
              <a href="https://twitter.com/intent/tweet?text=Check%20out%20AstroAI%20for%20amazing%20astrology%20insights!" target="_blank" rel="noopener noreferrer">
                <Button variant='secondary' size="sm" className="gap-2">
                  Share Your Thoughts
                  <Icons.twitter className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              © {new Date().getFullYear()} AstroAI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0">
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-16 items-center justify-center">
          <h1 className="text-center text-4xl md:text-6xl lg:text-[9rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5 select-none">
            AstroAI
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
