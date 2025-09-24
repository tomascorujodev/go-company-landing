import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee, Instagram, Facebook } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Inicio", id: "inicio" },
    { name: "Historia", id: "historia" },
    { name: "Nuestro Café", id: "cafe" },
    { name: "Menú", id: "menu" },
    { name: "Sucursales", id: "sucursales" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer min-w-0"
            onClick={() => scrollToSection("inicio")}
          >
            {/* Space reserved for logo image */}
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="src/assets/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
              Go Company
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors duration-200 whitespace-nowrap text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
            <button>
              <a
                href="https://www.fidebillapp.com.ar/gocompany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors duration-200 whitespace-nowrap text-sm lg:text-base"
                aria-label="Asociate"
              >
                {" "}
                Asociate
              </a>
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://instagram.com/gocompanycafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 p-1"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/gocompanycafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 p-1"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              {/* 👇 Agregamos el botón de Asociate en mobile también */}
      <a
        href="https://www.fidebillapp.com.ar/gocompany"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 transition-colors duration-200"
      >
        Asociate
      </a>
              <div className="border-t border-gray-200 pt-4 px-4 flex space-x-4">
                <a
                  href="https://instagram.com/gocompanycafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/gocompanycafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
