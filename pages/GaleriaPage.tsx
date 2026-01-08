
import React, { useState } from 'react';

const IMAGES = [
  { id: 1, url: 'https://picsum.photos/seed/tree1/800/600', alt: 'Pracownicy na placu budowy' },
  { id: 2, url: 'https://picsum.photos/seed/tree2/800/600', alt: 'Wycinka sekcyjna dużego drzewa' },
  { id: 3, url: 'https://picsum.photos/seed/tree3/800/600', alt: 'Specjalistyczny podnośnik w akcji' },
  { id: 4, url: 'https://picsum.photos/seed/tree4/800/600', alt: 'Ścięty pień drzewa z piłą' },
  { id: 5, url: 'https://picsum.photos/seed/tree5/800/600', alt: 'Pielęgnacja drzew owocowych' },
  { id: 6, url: 'https://picsum.photos/seed/tree6/800/600', alt: 'Zrębkowanie gałęzi' },
  { id: 7, url: 'https://picsum.photos/seed/tree7/800/600', alt: 'Alpinistyczna wycinka drzewa' },
  { id: 8, url: 'https://picsum.photos/seed/tree8/800/600', alt: 'Prace w parku miejskim' },
  { id: 9, url: 'https://picsum.photos/seed/tree9/800/600', alt: 'Wycinanie suchych konarów' },
  { id: 10, url: 'https://picsum.photos/seed/tree10/800/600', alt: 'Prace wysokościowe' },
  { id: 11, url: 'https://picsum.photos/seed/tree11/800/600', alt: 'Wycinka przy linii energetycznej' },
  { id: 12, url: 'https://picsum.photos/seed/tree12/800/600', alt: 'Oczyszczony plac pod budowę' },
];

const GaleriaPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <div className="pt-40 pb-24 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-black uppercase tracking-widest mb-4">Realizacje</h2>
          <h1 className="text-5xl font-black text-white">Nasze Projekty</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImg(img.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card aspect-video border border-white/5"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Powiększ 🔍
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-16 right-0 text-white text-5xl hover:text-emerald-400 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            <div className="glass-card p-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={IMAGES.find(i => i.id === selectedImg)?.url}
                alt="Powiększone zdjęcie"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <p className="text-emerald-400 mt-6 text-center font-bold text-xl uppercase tracking-widest">
              {IMAGES.find(i => i.id === selectedImg)?.alt}
            </p>
            <div className="flex justify-between mt-8 absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:-mx-20 pointer-events-none">
               <button
                 className="pointer-events-auto w-16 h-16 glass-card rounded-full text-white text-4xl flex items-center justify-center hover:bg-emerald-500 hover:text-slate-900 transition-all border border-white/10"
                 onClick={() => setSelectedImg(prev => (prev! === 1 ? IMAGES.length : prev! - 1))}
               >
                 &#10094;
               </button>
               <button
                 className="pointer-events-auto w-16 h-16 glass-card rounded-full text-white text-4xl flex items-center justify-center hover:bg-emerald-500 hover:text-slate-900 transition-all border border-white/10"
                 onClick={() => setSelectedImg(prev => (prev! === IMAGES.length ? 1 : prev! + 1))}
               >
                 &#10095;
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaPage;
