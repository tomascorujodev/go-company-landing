import { Coffee, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const locations = [
    "Av. Colón 2883",
    "Buenos Aires 2606", 
    "Córdoba 1628",
    "La Rioja 1936",
    "La Rioja 1743"
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Coffee className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold">Go Company</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Pioneros del café al paso en Mar del Plata. Desde 2010 acompañamos 
                tus mejores momentos con la calidad y rapidez que nos caracterizan.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/gocompanycafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/gocompanycafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Locations Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                Nuestras Sucursales
              </h3>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index}>
                    <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-left">
                      {location}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-300">(0223) 456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-300">hola@gocompany.com.ar</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-yellow-400 mt-1" />
                  <span className="text-gray-300">
                    Mar del Plata<br />
                    Buenos Aires, Argentina
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Horarios de Atención</h4>
                <div className="text-gray-300 space-y-1">
                  <p>Lunes a Domingo: 7:00 - 22:00</p>
                  <p className="text-sm text-gray-400">
                    *Los horarios pueden variar según la sucursal
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Información</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    Menú completo
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    Trabajá con nosotros
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    Franquicias
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Go Company. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;