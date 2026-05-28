import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

const services = [
  {
    title: "Dekoracje Balonowe",
    description: "Profesjonalne girlandy, ścianki i kompozycje, które odmienią każde wnętrze.",
    icon: "🎈",
    image: "imprezowe.jpg",
  },
  {
    title: "Kwiaty i Flower Boxy",
    description: "Eleganckie boxy i bukiety ze świeżych kwiatów, idealne na wyjątkowy prezent.",
    icon: "🌸",
    image: "kwiaty.jpg",
  },
  {
    title: "Bukiety Jadalne",
    description: "Słodkie i wytrawne kompozycje, które cieszą oko i podniebienie.",
    icon: "🍓",
    image: "jadalne.jpg",
  },
  {
    title: "Kartki i Upominki",
    description: "Ręcznie robione pamiątki i unikatowe prezenty na każdą okazję.",
    icon: "🎁",
    image: "karty.jpg",
  },
  {
    title: "Akcesoria Imprezowe",
    description: "Wszystko, czego potrzebujesz, aby zorganizować niezapomniane przyjęcie.",
    icon: "✨",
    image: "balony.jpg",
  },
  {
    title: "Personalizowane Projekty",
    description: "Tworzymy dekoracje dopasowane do Twoich indywidualnych potrzeb i marzeń.",
    icon: "🎨",
    image: "personalizowane.jpg",
  }
];

const Services: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.service-card-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="uslugi" className="py-24 bg-brand-pink-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Nasza Oferta</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            Łączymy artystyczne rzemiosło z nowoczesnymi trendami w dekoracjach. Kliknij w zdjęcie, aby je powiększyć.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card-trigger group bg-white rounded-2xl overflow-hidden border border-brand-pink/30 shadow-sm hover:shadow-xl transition-all duration-700 transform-gpu ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div 
                className="relative h-64 overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedImage(service.image)}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-accent/20 group-hover:bg-brand-accent/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Search className="text-white w-10 h-10" />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md z-10">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Powiększenie"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
