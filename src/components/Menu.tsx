import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import takeawayCoffeeImage from "@/assets/takeaway-coffee.jpg";
import croissantImage from "@/assets/croissant.jpg";
import latteArtImage from "@/assets/latte-art.jpg";
import sandwichImage from "@/assets/sandwich.jpg";

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const menuItems = [
    {
      id: 1,
      title: "Café al Paso",
      description:
        "Nuestro clásico café en vaso térmico con nuestro blend exclusivo. Perfecto para llevar.",
      image: takeawayCoffeeImage,
      category: "Bebidas",
      featured: true,
    },
    {
      id: 2,
      title: "Medialuna Perfecta",
      description:
        "Medialuna artesanal horneada cada mañana. Crujiente por fuera, tierna por dentro.",
      image: croissantImage,
      category: "Panadería",
      featured: true,
    },
    {
      id: 3,
      title: "Latte Art",
      description:
        "Café con leche cremoso decorado por nuestros baristas expertos. Una obra de arte en cada taza.",
      image: latteArtImage,
      category: "Especialidades",
      featured: true,
    },
    {
      id: 4,
      title: "Sándwich Gourmet",
      description:
        "Ingredientes premium en pan artesanal. La opción perfecta para un almuerzo rápido y delicioso.",
      image: sandwichImage,
      category: "Comidas",
      featured: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tu Momento del <span className="text-yellow-500">Día</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada producto está pensado para acompañarte en los mejores
              momentos. Desde el primer café de la mañana hasta el break
              perfecto de la tarde.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative mb-8">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {menuItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="bg-white">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {menuItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
      <a
        href="https://menu.fu.do/gocompany"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button
          variant="outline_yellow"
          size="lg"
          className="inline-flex items-center gap-2"
        >
          Ver Menú Completo
          <ExternalLink className="h-4 w-4" />
        </Button>
      </a>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
