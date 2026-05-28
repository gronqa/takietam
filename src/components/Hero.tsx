import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white px-6">
      {/* Delicate Floral Background Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Artistic Gradient Overlays for depth and smooth transition */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none" />

      {/* Artistic Background Blur Elements */}
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-[#fdf2f8] rounded-full blur-3xl opacity-60 z-0" 
      />
      <div 
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#fdf2f8] rounded-full blur-3xl opacity-50 z-0" 
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto overflow-visible pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-visible"
        >
          <span className="inline-block px-4 py-1 bg-[#fbcfe8]/80 text-[#9d174d] text-xs font-bold tracking-widest uppercase rounded-full mb-6 backdrop-blur-sm shadow-sm">
            Artystyczne Dekoracje • Zabrze
          </span>

          <h1 className="text-6xl md:text-9xl font-serif font-bold text-slate-900 leading-none relative z-10">
            Takie Tam
          </h1>

          <div className="relative -mt-16 md:-mt-24 flex justify-center items-center z-20 overflow-visible">
            {/* Handwriting with DRAWING animation */}
            <motion.div
              initial={{ clipPath: 'inset(-100% 100% -100% -100%)' }}
              animate={{ clipPath: 'inset(-100% -100% -100% -100%)' }}
              transition={{ 
                delay: 0.6, 
                duration: 1.8, 
                ease: [0.45, 0, 0.55, 1]
              }}
              style={{ lineHeight: '1.2', overflow: 'visible' }}
              className="text-7xl md:text-[10rem] font-handwriting text-[#9d174d] italic relative z-30 py-10 px-4"
            >
              Art.Deco
            </motion.div>
            
            {/* Subtle Elegant Glow behind handwriting */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1.2 }}
              className="absolute inset-0 bg-[#fbcfe8]/40 blur-3xl -z-10 rounded-full"
            />
          </div>

          {/* Simple Gold Line revealing from background - Responsive width */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-40 md:max-w-xs mx-auto -mt-12 mb-10 h-[1px] bg-[#d4af37] z-20"
          />

          <p className="text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-light leading-relaxed z-20 relative">
            Tworzymy piękno z pasją - od eleganckich flower boxów po spektakularne dekoracje balonowe. <br className="hidden md:block" />
            Nadajemy Twoim uroczystościom artystyczny wymiar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative z-20">
            <a 
              href="#uslugi" 
              className="btn-floral btn-floral-primary btn-floral-inverted"
            >
              Nasze Usługi
            </a>
            <a 
              href="#kontakt" 
              className="btn-floral btn-floral-secondary"
            >
              Znajdź Nas
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/art-deco.png')`,
          backgroundRepeat: 'repeat'
        }} 
      />
    </section>
  );
};

export default Hero;
