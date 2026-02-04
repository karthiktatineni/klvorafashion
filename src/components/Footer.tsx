import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Collections", href: "/collections" },
      { name: "Best Sellers", href: "/collections" },
      { name: "Sale", href: "/collections" },
    ],
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Press", href: "/contact" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "Shipping", href: "/contact" },
      { name: "Returns", href: "/contact" },
      { name: "Size Guide", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl tracking-wide text-foreground">
              KLVORA
            </Link>
            <p className="font-body text-muted-foreground mt-6 max-w-sm leading-relaxed">
              Redefining contemporary men's fashion with timeless elegance 
              and uncompromising quality since 2025.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-foreground mb-6">
              Shop
            </h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-foreground mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 Klvora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
