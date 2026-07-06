import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0F172A] shadow-md py-3" : "bg-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, "#home")}
          className="text-2xl font-heading font-bold text-white flex items-center gap-1 tracking-tight"
          data-testid="link-logo"
        >
          <span className="text-primary">D</span>hruvMarkets
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="rounded-xl font-medium"
            onClick={(e) => {
              const target = document.querySelector("#contact");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-nav-cta"
          >
            Get a Free Consultation
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0F172A] border-t border-slate-800 shadow-xl py-6 px-6 md:hidden"
            data-testid="mobile-navbar"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="block text-lg font-medium text-slate-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  className="w-full rounded-xl mt-4"
                  onClick={(e) => {
                    const target = document.querySelector("#contact");
                    target?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get a Free Consultation
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
