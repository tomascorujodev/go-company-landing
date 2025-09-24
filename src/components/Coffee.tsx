import { Award, Clock, Users, Heart } from "lucide-react";
import latteArtImage from "@/assets/latte-art.jpg";

const Coffee = () => {
  const features = [
    {
      icon: Award,
      title: "Granos Seleccionados",
      description: "Importamos directamente de las mejores fincas de América Latina, garantizando calidad premium en cada taza."
    },
    {
      icon: Users,
      title: "Baristas Expertos",
      description: "Nuestro equipo está capacitado en las técnicas más avanzadas de preparación y latte art profesional."
    },
    {
      icon: Clock,
      title: "Molienda al Momento",
      description: "Molemos cada grano justo antes de la preparación para preservar todos los aromas y sabores."
    },
    {
      icon: Heart,
      title: "Pasión Marplatense",
      description: "Cada café lleva el amor por nuestra ciudad y el compromiso con la excelencia que nos caracteriza."
    }
  ];

  return (
    <section id="cafe" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pasión en{" "}
              <span className="text-yellow-400">Cada Grano</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Desde la selección del grano hasta la preparación final, cada paso 
              está pensado para ofrecerte la experiencia de café perfecta que mereces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-yellow-400 text-black group-hover:bg-yellow-300 transition-colors duration-300">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coffee Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={latteArtImage}
                  alt="Latte art perfecto de Go Company"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Quality Badge */}
              <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xs font-semibold">CALIDAD</div>
                  <div className="text-sm font-bold">PREMIUM</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 bg-white text-black p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">15+</div>
                  <div className="text-xs font-semibold">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;