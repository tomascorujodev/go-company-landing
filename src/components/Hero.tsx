import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barista preparando café al paso en Go Company"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          El café que mueve{" "}
          <span className="text-yellow-400">Mar del Plata</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-2 max-w-2xl mx-auto leading-relaxed">
          Pioneros en café al paso. Calidad y rapidez en cada esquina de la ciudad.
        </p>
        
        <p className="text-lg md:text-xl text-yellow-400 mb-8 font-semibold">
          #TheOriginalTakeAway
        </p>
        
        <Button
          variant="hero"
          size="lg"
          onClick={() => scrollToSection('sucursales')}
          className="text-lg px-8 py-4 h-auto"
        >
          Encontrá tu Go más cercano
        </Button>
      </div>
      
    </section>
  );
};

export default Hero;