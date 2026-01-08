
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-8">URBAN<span className="text-emerald-400">ARBOR</span></h3>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
              Profesjonalne zarządzanie drzewostanem miejskim. Wykorzystujemy technologię, by tworzyć bezpieczniejszą i bardziej zieloną przyszłość.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:text-emerald-400 transition-colors">FB</a>
              <a href="#" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:text-emerald-400 transition-colors">IG</a>
              <a href="#" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:text-emerald-400 transition-colors">LI</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-widest mb-8">Nawigacja</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link to="/#oferta" className="hover:text-white transition-colors">Stack usług</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Baza wiedzy</Link></li>
              <li><Link to="/galeria" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold uppercase tracking-widest mb-8">Kontakt</h4>
            <p className="text-white font-bold mb-2">+48 601 259 432</p>
            <p className="text-slate-400 mb-8 underline">kontakt@urbanarbor.pl</p>
            <p className="text-slate-500 text-sm">ul. Szczytowa 13a<br/>05-092 Łomianki</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} URBAN ARBOR PRO. ALL RIGHTS RESERVED.</p>
          <p>POWERED BY TECH & PASSION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
