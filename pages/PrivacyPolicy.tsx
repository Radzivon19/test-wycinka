
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-slate-900 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-black text-white mb-12 tracking-tighter italic uppercase">
          Polityka <span className="text-emerald-400">Prywatności</span>
        </h1>
        <div className="glass-card p-10 rounded-[2rem] border border-white/5 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-emerald-400">1. Administrator Danych</h2>
            <p>Administratorem Twoich danych osobowych jest zespół Urban Arbor (URBAN ARBOR PRO), działający na terenie Warszawy i okolic. Kontakt: kontakt@urbanarbor.pl.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-emerald-400">2. Zakres i cel zbierania danych</h2>
            <p>Twoje dane (imię, e-mail, telefon) zbierane za pośrednictwem formularza kontaktowego służą wyłącznie do:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Przygotowania darmowej wyceny technicznej i kosztorysu prac.</li>
              <li>Kontaktu w celu umówienia wizji lokalnej.</li>
              <li>Realizacji usług arborystycznych i administracyjnych (np. wnioski o wycinkę).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-emerald-400">3. Przechowywanie danych</h2>
            <p>Dane są przetwarzane bezpiecznie i nie są udostępniane podmiotom trzecim w celach marketingowych. Korzystamy z bezpiecznych protokołów szyfrowania (SSL).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-emerald-400">4. Twoje Prawa</h2>
            <p>Masz prawo do wglądu w swoje dane, ich poprawienia lub żądania całkowitego usunięcia z naszej bazy. W tym celu napisz do nas na powyższy adres e-mail.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
