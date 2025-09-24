import coffeeBeansImage from "@/assets/coffee-beans.jpg";

const Story = () => {
  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Nacimos para{" "}
                <span className="text-yellow-500">Acompañarte</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  En 2010, cuando nadie hablaba de "café al paso" en Mar del Plata, 
                  nosotros entendimos que la ciudad necesitaba un ritmo diferente. 
                  Fuimos los primeros en traer este concepto revolucionario que cambió 
                  para siempre la forma en que los marplatenses viven el café.
                </p>
                
                <p>
                  Lo que comenzó como una idea innovadora en una esquina, hoy es una 
                  red de 5 sucursales estratégicamente ubicadas en los puntos más 
                  dinámicos de la ciudad. Cada local cuenta la misma historia: 
                  <strong className="text-yellow-600"> calidad sin prisa, cercanía sin perder la excelencia</strong>.
                </p>
                
                <p>
                  Somos orgullosamente marplatenses y entendemos el alma de nuestra 
                  ciudad. Por eso, cada café que preparamos lleva el espíritu de 
                  quien sabe que el mejor momento del día puede estar a la vuelta 
                  de la esquina.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">2010</div>
                  <div className="text-sm text-gray-600">Año de fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">5</div>
                  <div className="text-sm text-gray-600">Sucursales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">1°</div>
                  <div className="text-sm text-gray-600">Café al paso</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={coffeeBeansImage}
                  alt="Granos de café premium de Go Company"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-4 rounded-xl shadow-lg transform rotate-3">
                <div className="text-center">
                  <div className="text-sm font-semibold">Pioneros en</div>
                  <div className="text-lg font-bold">CAFÉ AL PASO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;