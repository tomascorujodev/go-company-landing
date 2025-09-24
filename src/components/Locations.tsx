import { MapPin, Clock, Phone } from "lucide-react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const Locations = () => {
  const locations = [
    {
      id: 1,
      address: "Av. Colón 2883",
      neighborhood: "Centro",
      hours: "Lun a Dom: 7:00 - 22:00",
      phone: "(0223) 456-7890",
      isMain: true,
    },
    {
      id: 2,
      address: "Buenos Aires 2606",
      neighborhood: "Centro",
      hours: "Lun a Dom: 7:00 - 21:00",
      phone: "(0223) 456-7891",
    },
    {
      id: 3,
      address: "Córdoba 1628",
      neighborhood: "Centro",
      hours: "Lun a Dom: 7:00 - 21:00",
      phone: "(0223) 456-7892",
    },
    {
      id: 4,
      address: "La Rioja 1936",
      neighborhood: "La Perla",
      hours: "Lun a Dom: 7:30 - 20:30",
      phone: "(0223) 456-7893",
    },
    {
      id: 5,
      address: "La Rioja 1743",
      neighborhood: "La Perla",
      hours: "Lun a Dom: 7:30 - 20:30",
      phone: "(0223) 456-7894",
    },
  ];

  return (
    <section id="sucursales" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Siempre hay un <span className="text-yellow-500">Go</span> Cerca
              Tuyo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              5 sucursales estratégicamente ubicadas en los puntos más dinámicos
              de Mar del Plata para que nunca estés lejos de tu café perfecto.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`w-full max-w-sm p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  location.isMain
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-gray-200 bg-white hover:border-yellow-200"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-yellow-500" />
                      <h3 className="text-lg font-bold text-gray-900">
                        {location.address}
                      </h3>
                      {location.isMain && (
                        <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                          PRINCIPAL
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{location.neighborhood}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ubicaciones Estratégicas
                </h3>
                <p className="text-gray-600 text-sm">
                  En el centro y La Perla, siempre cerca de donde estés.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Horarios Amplios
                </h3>
                <p className="text-gray-600 text-sm">
                  Abierto todos los días desde temprano hasta tarde.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Contacto Directo
                </h3>
                <p className="text-gray-600 text-sm">
                  Llamá a cualquier sucursal para consultas o pedidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
