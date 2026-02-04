import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import Cart from "@/components/Cart";
import klvoraLogo from "@/assets/klvora-logo.png";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={klvoraLogo} 
              alt="Klvora Fashion Hub" 
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`link-underline font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 h-9 bg-card border-border text-sm"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
            <Cart />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Cart />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-10 bg-card border-border"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-3xl text-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
