import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-pink-light border-t border-brand-pink mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-widest text-brand-accent">TAKIE TAM</h3>
            <p className="text-sm text-slate-600 max-w-xs italic">
              "Artystyczne dekoracje z pasją. Sprawiamy, że Twoje ważne momenty stają się niezapomniane."
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/takietamartdecozabrze" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-brand-accent hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572610474013&locale=pl_PL" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-brand-accent hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-6 uppercase tracking-widest text-brand-accent/80">Nawigacja</h4>
            <ul className="space-y-3">
              <li><a href="/takietam/#o-nas" className="text-sm hover:text-brand-gold transition-colors">O nas</a></li>
              <li><a href="/takietam/#uslugi" className="text-sm hover:text-brand-gold transition-colors">Usługi</a></li>
              <li><a href="/takietam/#kontakt" className="text-sm hover:text-brand-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-semibold mb-6 uppercase tracking-widest text-brand-accent/80">Siedziba</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Takie+Tam+Art.Deco+Zabrze/@50.307713,18.7831016,17z/data=!3m1!4b1!4m6!3m5!1s0x471133d929128893:0x9ed65fd9aa614ebc!8m2!3d50.3077096!4d18.7856765!16s%2Fg%2F11xs3cnp8z?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-brand-accent transition-colors"
                >
                  ul. Powstańców Śląskich 2<br />
                  41-800 Zabrze
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-gold" />
                <a href="tel:+48505664819" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">+48 505 664 819</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-pink/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Takie Tam Art.Deco. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <a href="/takietam/polityka-prywatnosci" className="text-xs text-slate-500 hover:text-brand-accent transition-colors">Polityka prywatności</a>
            <span className="text-slate-300">|</span>
            <p className="text-xs text-slate-500">
              Strona stworzona przez <a href="https://gronqa.pl" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-accent/70 hover:text-brand-gold transition-colors underline decoration-brand-pink underline-offset-4">gronqa.pl</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
