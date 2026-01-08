
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { SERVICES, BENEFITS, STATS, TEAM, FAQS } from '../constants';
import Accordion from '../components/Accordion';

const Home: React.FC = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const intervals = STATS.map((stat, index) => {
      const target = parseInt(stat.value);
      const step = Math.max(1, Math.floor(target / 50));
      return setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          if (next[index] < target) {
            next[index] = Math.min(target, next[index] + step);
          }
          return next;
        });
      }, 30);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40" 
            alt="Arborysta tło" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-sm font-bold mb-6 tracking-widest uppercase">
            Arborystyka nowej generacji
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white">
            URBAN <span className="text-emerald-400 text-glow">ARBOR</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Młody zespół certyfikowanych ekspertów. Łączymy ekstremalną arborystykę z zaawansowaną diagnostyką dendrologiczną.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/kontakt" className="neo-gradient hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] text-slate-900 px-10 py-4 rounded-xl font-black transition-all transform hover:-translate-y-1">
              DARMOWA ANALIZA TECHNICZNA
            </Link>
            <HashLink to="/#oferta" smooth className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-black transition-all">
              NASZE USŁUGI
            </HashLink>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <div key={stat.id} className="glass-card p-8 rounded-3xl text-center">
                <div className="text-emerald-400 text-3xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2">
                  {counts[idx]}{stat.value.includes('%') ? '%' : '+'}
                </div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="oferta" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-emerald-400 font-black uppercase tracking-widest mb-4">Co robimy</h2>
              <p className="text-4xl md:text-6xl font-black text-white leading-tight">Zmieniamy oblicze miejskiej arborystyki.</p>
            </div>
            <p className="text-slate-400 text-lg max-w-sm">Dostarczamy precyzyjne rozwiązania tam, gdzie inni widzą tylko problem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <div key={service.id} className="glass-card p-10 rounded-[2rem] hover:bg-emerald-500/5 transition-colors group">
                <div className="text-emerald-500 font-mono text-xl mb-8">/{service.number}</div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Enhanced Accordion */}
      <section id="faq" className="py-32 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-black uppercase tracking-widest mb-4">Wiedza</h2>
            <p className="text-4xl font-black text-white">Często zadawane pytania</p>
          </div>
          <div className="space-y-4">
            {FAQS.map(faq => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`glass-card rounded-2xl transition-all duration-300 border ${isOpen ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/5'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 flex items-center justify-between text-left group"
                  >
                    <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-emerald-500 border-emerald-500 text-slate-900 rotate-180' : 'border-white/20 text-white'}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-20 font-bold">Pro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {TEAM.map(member => (
              <div key={member.id} className="group">
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 neo-gradient rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <img src={member.photo} alt={member.name} className="w-64 h-64 rounded-full mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-slate-800 group-hover:border-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 font-bold">{member.name}</h3>
                <p className="text-emerald-400 font-bold uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-slate-400 leading-relaxed text-lg italic px-8">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="neo-gradient p-16 md:p-24 rounded-[3rem] text-slate-900 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter font-bold uppercase">Masz drzewo do sprawdzenia?</h2>
              <p className="text-xl md:text-2xl font-bold mb-12 opacity-80">Bezpłatna wycena techniczna w 24h. Działamy w całej Warszawie.</p>
              <Link to="/kontakt" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform inline-block uppercase">
                Wyślij zgłoszenie
              </Link>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
