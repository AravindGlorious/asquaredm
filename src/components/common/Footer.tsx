import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          data-href="/blog"
          data-target="_blank">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">
              A Square Digital Marketing
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              UK-based performance-driven agency combining SEO, PPC and content to drive measurable growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter
                  className="h-5 w-5"
                  data-href="https://x.com/Asquare_Offical"
                  data-target="_blank" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram
                  className="h-5 w-5"
                  data-href="https://www.instagram.com/asquare_offical/"
                  data-target="_blank" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">SEO</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">PPC Advertising</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Content Marketing</Link></li>
              <li>Lead Generation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li>Portfolio</li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div data-href="">
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@asquaredigitalmarketing.com" className="hover:text-primary transition-colors">
                  info@asquaredigitalmarketing.com
                </a>
              </li>
              <li>United Kingdom</li>
              <li className="pt-4">
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{currentYear} A Square Digital Marketing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
