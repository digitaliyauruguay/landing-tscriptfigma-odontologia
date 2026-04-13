import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useMobileDetection } from "../../hooks/useMobileDetection";

interface NavbarProps {
  brand: { name: string; logo: string };
  theme: { primary: string; light: string };
}

export function Navbar({ brand, theme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobileDetection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {brand.logo}
            </span>
            <span
              className="text-xl tracking-tight transition-colors"
              style={{ color: theme.primary }}
            >
              {brand.name}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {["servicios", "nosotros", "testimonios", "preguntas-frecuentes", "contacto"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:opacity-70 transition-opacity capitalize cursor-pointer hover:scale-105"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-6 py-2.5 rounded-full text-white transition-all hover:scale-105 cursor-pointer"
              style={{ backgroundColor: theme.primary }}
            >
              Reservar ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 cursor-pointer hover:scale-110 transition-transform"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t">
            {["servicios", "nosotros", "testimonios", "preguntas-frecuentes", "contacto"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 capitalize rounded cursor-pointer hover:scale-102 transition-transform"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection("contacto")}
              className="w-full px-6 py-3 rounded-full text-white font-medium cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: theme.primary }}
            >
              Reservar ahora
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
