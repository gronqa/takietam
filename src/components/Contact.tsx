import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const mapsUrl = "https://www.google.com/maps/place/Takie+Tam+Art.Deco+Zabrze/@50.307713,18.7831016,17z/data=!3m1!4b1!4m6!3m5!1s0x471133d929128893:0x9ed65fd9aa614ebc!8m2!3d50.3077096!4d18.7856765!16s%2Fg%2F11xs3cnp8z?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D";
  const phone = "+48 505 664 819";
  const email = "kontakt@takietam.art";

  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-pink-light/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Zatrzymaj Chwilę</h2>
            <p className="text-slate-600 mb-12 text-lg leading-relaxed">
              Masz pytania dotyczące naszych dekoracji? Chcesz złożyć zamówienie na personalizowany flower box? 
              Zapraszamy do kontaktu lub odwiedzenia naszej pracowni w Zabrzu.
            </p>

            <div className="space-y-8">
              {/* Nasza Pracownia */}
              <div className="flex gap-6 items-start group">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-brand-pink rounded-2xl text-brand-accent group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <MapPin size={24} />
                </a>
                <div>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-1 group-hover:text-brand-accent transition-colors">Nasza Pracownia</h4>
                    <p className="text-slate-600 group-hover:text-brand-accent transition-colors">ul. Powstańców Śląskich 2, 41-800 Zabrze</p>
                  </a>
                </div>
              </div>

              {/* Zadzwoń do nas */}
              <div className="flex gap-6 items-start group">
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="p-4 bg-brand-pink rounded-2xl text-brand-accent group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Phone size={24} />
                </a>
                <div>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="block">
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-1 group-hover:text-brand-accent transition-colors">Zadzwoń do nas</h4>
                    <p className="text-slate-600 font-medium group-hover:text-brand-accent transition-colors">{phone}</p>
                  </a>
                </div>
              </div>

              {/* Godziny Otwarcia */}
              <div className="flex gap-6 items-start group">
                <div className="p-4 bg-brand-pink rounded-2xl text-brand-accent group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="block">
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-1 group-hover:text-brand-accent transition-colors">Godziny Otwarcia</h4>
                    <p className="text-slate-600 group-hover:text-brand-accent transition-colors">Wt - Pt: 10:00 - 16:00</p>
                    <p className="text-slate-600 group-hover:text-brand-accent transition-colors">Sobota: 09:00 - 14:00</p>
                    <p className="text-slate-600 group-hover:text-brand-accent transition-colors">Pon i Nd: Zamknięte</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Info Box */}
            <div className="mt-12 p-8 bg-brand-pink-light/80 rounded-3xl border border-brand-pink/50">
              <h4 className="font-serif font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Dane Firmowe</h4>
              <div className="text-xs text-slate-500 space-y-2 font-medium">
                <p>Agnieszka Derejczyk Takie Tam Art.Deco</p>
                <p>NIP: 9111838107</p>
                <p>REGON: 021957658</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[2rem] overflow-hidden art-deco-border shadow-2xl">
              <div className="w-full h-full bg-[url('/agnieszka.jpg')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 md:-bottom-10 left-4 md:-left-10 bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[240px] md:max-w-xs border border-brand-pink z-20">
              <p className="text-brand-accent font-serif italic text-base md:text-lg mb-2">"Wszystko zaczyna się od pomysłu..."</p>
              <p className="text-slate-500 text-sm italic">- Agnieszka Derejczyk</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
