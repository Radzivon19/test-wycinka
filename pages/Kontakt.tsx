
import React, { useState } from 'react';

const Kontakt: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Wykorzystujemy Formspree jako backend do obsługi maili
      const response = await fetch('https://formspree.io/f/radzivon.tsitko19@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      setStatus('ERROR');
    }
  };

  if (status === 'SUCCESS') {
    return (
      <div className="pt-48 pb-24 text-center bg-slate-900 min-h-screen">
        <div className="max-w-xl mx-auto p-16 glass-card rounded-[3rem] animate-in fade-in zoom-in duration-500">
          <div className="text-6xl mb-8">🚀</div>
          <h2 className="text-4xl font-black text-white mb-6">Brief wysłany pomyślnie!</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">Dziękujemy za kontakt. Twoje zgłoszenie trafiło do Radzivona. Odpowiemy tak szybko, jak to możliwe (zazwyczaj w ciągu 2h).</p>
          <button 
            onClick={() => setStatus('IDLE')} 
            className="neo-gradient text-slate-900 px-10 py-4 rounded-xl font-black hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            WYŚLIJ KOLEJNĄ WIADOMOŚĆ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="animate-in slide-in-from-left duration-700">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic">
            Zróbmy <span className="text-emerald-400 text-glow">Projekt</span>
          </h1>
          <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-light max-w-lg">
            Niezależnie od tego, czy potrzebujesz precyzyjnej wycinki, czy cyfrowej inwentaryzacji drzew — nasz zespół jest gotowy.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-emerald-400 text-2xl group-hover:neo-gradient group-hover:text-slate-900 transition-all duration-500 shadow-lg">📞</div>
              <div>
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">Infolinia 24/7</p>
                <a href="tel:+48601259432" className="text-3xl font-black text-white hover:text-emerald-400 transition-colors tracking-tight">+48 601 259 432</a>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-emerald-400 text-2xl group-hover:neo-gradient group-hover:text-slate-900 transition-all duration-500 shadow-lg">✉️</div>
              <div>
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">E-mail bezpośredni</p>
                <a href="mailto:radzivon.tsitko19@gmail.com" className="text-3xl font-black text-white underline decoration-emerald-500/50 hover:text-emerald-400 transition-colors tracking-tight">radzivon.tsitko19@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden animate-in slide-in-from-right duration-700">
          <div className="absolute top-0 right-0 w-32 h-32 neo-gradient opacity-10 blur-3xl rounded-full"></div>
          <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">Formularz Zgłoszeniowy</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">Imię i Nazwisko</label>
              <input 
                name="name"
                type="text" 
                placeholder="np. Jan Kowalski" 
                required 
                className="w-full bg-slate-800/50 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">E-mail</label>
                <input 
                  name="email"
                  type="email" 
                  placeholder="twoj@email.pl" 
                  required 
                  className="w-full bg-slate-800/50 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700" 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">Telefon</label>
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="+48 000 000 000" 
                  className="w-full bg-slate-800/50 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700" 
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">Typ Usługi</label>
              <select 
                name="service"
                required 
                className="w-full bg-slate-800/50 border border-white/10 p-5 rounded-2xl text-slate-300 focus:outline-none focus:border-emerald-500 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled selected>Wybierz kategorię...</option>
                <option>Analiza i Diagnostyka Dronem</option>
                <option>Wycinka Alpinistyczna</option>
                <option>Pielęgnacja Koron</option>
                <option>Wycinka pod inwestycje</option>
                <option>Inne</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">Wiadomość / Lokalizacja</label>
              <textarea 
                name="message"
                placeholder="Opisz krótko zakres prac oraz lokalizację (dzielnica/miasto)..." 
                required 
                className="w-full bg-slate-800/50 border border-white/10 p-5 rounded-2xl text-white h-40 focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700 resize-none"
              ></textarea>
            </div>
            
            <div className="flex items-start group cursor-pointer">
              <input type="checkbox" id="consent" required className="mt-1 mr-4 accent-emerald-500 w-5 h-5 cursor-pointer" />
              <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer group-hover:text-slate-400 transition-colors">
                Wyrażam zgodę na przetwarzanie danych osobowych w celu przygotowania oferty handlowej URBAN ARBOR.
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'SUBMITTING'}
              className="w-full neo-gradient text-slate-900 font-black py-5 rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-wait"
            >
              {status === 'SUBMITTING' ? 'PROCESOWANIE...' : 'WYŚLIJ ZGŁOSZENIE'}
            </button>

            {status === 'ERROR' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-red-400 text-center text-sm font-bold">
                  Błąd serwera. Spróbuj ponownie lub zadzwoń bezpośrednio pod numer: +48 601 259 432
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
