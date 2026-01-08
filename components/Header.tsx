
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Stack', path: '/#oferta' },
    { name: 'Insights', path: '/blog' },
    { name: 'Projekty', path: '/galeria' },
    { name: 'Brief', path: '/kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 neo-gradient rounded-lg flex items-center justify-center text-slate-900 font-black text-xl transform group-hover:rotate-12 transition-transform">UA</div>
          <span className="text-2xl font-black tracking-tighter text-white">URBAN<span className="text-emerald-400">ARBOR</span></span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            item.path.startsWith('/#') ? (
              <HashLink
                key={item.name}
                to={item.path}
                smooth
                className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </HashLink>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
          <Link to="/kontakt" className="px-6 py-2 border-2 border-emerald-500/50 text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-slate-900 transition-all">
            Quick Brief
          </Link>
        </nav>

        <button className="md:hidden text-white text-3xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
