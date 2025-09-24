// import { Instagram, Facebook, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Social = () => {
//   // Mock Instagram posts - in a real implementation, this would come from Instagram API
//   const instagramPosts = [
//     {
//       id: 1,
//       image: "/placeholder.svg",
//       caption: "El café perfecto para empezar la mañana ☀️ #GoCompanyCafe #CafeAlPaso",
//       likes: 127,
//       date: "2 días"
//     },
//     {
//       id: 2,
//       image: "/placeholder.svg", 
//       caption: "Latte art que enamora 💕 Nuestros baristas son verdaderos artistas",
//       likes: 89,
//       date: "4 días"
//     },
//     {
//       id: 3,
//       image: "/placeholder.svg",
//       caption: "Nueva sucursal, misma calidad de siempre 🏪 #NuevaApertura",
//       likes: 156,
//       date: "1 semana"
//     },
//     {
//       id: 4,
//       image: "/placeholder.svg",
//       caption: "Medialunas recién horneadas 🥐 El acompañamiento perfecto",
//       likes: 93,
//       date: "1 semana"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Comunidad{" "}
//               <span className="text-yellow-500">#GoCompanyCafe</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
//               Seguí nuestras redes sociales para estar al día con las novedades, 
//               promociones especiales y momentos únicos de la familia Go Company.
//             </p>
            
//             {/* Social Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 variant="outline_yellow"
//                 size="lg"
//                 className="inline-flex items-center gap-2"
//                 onClick={() => window.open('https://instagram.com/gocompanycafe', '_blank')}
//               >
//                 <Instagram className="h-5 w-5" />
//                 Seguinos en Instagram
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="inline-flex items-center gap-2"
//                 onClick={() => window.open('https://facebook.com/gocompanycafe', '_blank')}
//               >
//                 <Facebook className="h-5 w-5" />
//                 Encontranos en Facebook
//               </Button>
//             </div>
//           </div>

//           {/* Instagram Feed Simulation */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
//               Últimas publicaciones de Instagram
//             </h3>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {instagramPosts.map((post) => (
//                 <div
//                   key={post.id}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={post.image}
//                       alt="Instagram post"
//                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <Instagram className="h-8 w-8 text-white" />
//                     </div>
//                   </div>
                  
//                   <div className="p-4">
//                     <p className="text-gray-700 text-sm mb-3 line-clamp-2">
//                       {post.caption}
//                     </p>
//                     <div className="flex items-center justify-between text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <Heart className="h-3 w-3 text-red-500" />
//                         <span>{post.likes}</span>
//                       </div>
//                       <span>{post.date}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* User Generated Content CTA */}
//           <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center text-black">
//             <h3 className="text-2xl font-bold mb-4">
//               ¡Compartí tu momento Go!
//             </h3>
//             <p className="text-lg mb-6 opacity-90">
//               Usá el hashtag <strong>#GoCompanyCafe</strong> y etiquetanos para aparecer en nuestras historias
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
//               <span className="bg-black/10 px-3 py-1 rounded-full">#GoCompanyCafe</span>
//               <span className="bg-black/10 px-3 py-1 rounded-full">#CafeAlPaso</span>
//               <span className="bg-black/10 px-3 py-1 rounded-full">#MarDelPlata</span>
//               <span className="bg-black/10 px-3 py-1 rounded-full">#CafeDeCalidad</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Social;