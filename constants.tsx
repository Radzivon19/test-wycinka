
import React from 'react';
import { Service, Benefit, Stat, TeamMember, FAQItem, BlogPost } from './types';

export const COLORS = {
  primary: '#0F172A',
  secondary: '#10B981',
  accent: '#34D399',
};

export const SERVICES: Service[] = [
  {
    id: '001',
    number: '01',
    title: 'Diagnostyka Dronem i Laserem',
    description: 'Skanujemy statykę drzewa bezinwazyjnie, wykrywając puste przestrzenie i zagrożenia.',
    items: [
      'Tomografia akustyczna',
      'Analiza VTA expert',
      'Monitoring z powietrza (4K)',
      'Plany ochrony drzewostanu',
      'Ekspertyzy dendrologiczne'
    ]
  },
  {
    id: '002',
    number: '02',
    title: 'Arborystyka Wysokościowa',
    description: 'Praca w koronie przy użyciu technik linowych. Precyzja tam, gdzie nie wjedzie podnośnik.',
    items: [
      'Cięcia pielęgnacyjne',
      'Wycinka sekcyjna (alpinistyczna)',
      'Wiązania elastyczne korony',
      'Usuwanie jemioły',
      'Prace po wichurach'
    ]
  },
  {
    id: '003',
    number: '03',
    title: 'Eko-Inżynieria Terenu',
    description: 'Kompleksowe przygotowanie działki z naciskiem na recykling biomasy i ochronę gleby.',
    items: [
      'Frezowanie pni (karp)',
      'Rębakowanie gałęzi',
      'Nasadzenia kompensacyjne',
      'Przygotowanie pod budowę',
      'Transport drewna'
    ]
  }
];

export const BENEFITS: Benefit[] = [
  { id: 1, title: 'Technologia 2025', text: 'Używamy sensorów i dronów do oceny statyki drzew.', icon: '⚡' },
  { id: 2, title: 'Zero Waste', text: 'Każdy skrawek drewna zmieniamy w ściółkę lub biopaliwo.', icon: '♻️' },
  { id: 3, title: 'Bezpieczeństwo', text: 'Posiadamy OC na kwotę 1 000 000 PLN.', icon: '🛡️' },
  { id: 4, title: 'Szybkość', text: 'Wycena w 2h, realizacja często w tym samym tygodniu.', icon: '🚀' }
];

export const STATS: Stat[] = [
  { id: 1, value: '2500', label: 'Zdrowych drzew', icon: '🌳' },
  { id: 2, value: '100', label: '% eko sprzętu', icon: '🍃' },
  { id: 3, value: '24', label: 'h serwis awaryjny', icon: '⚡' },
  { id: 4, value: '15', label: 'Certyfikatów Pro', icon: '🎓' }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Radzivon Tsitko',
    role: 'Założyciel & Head Arborist',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Specjalista od trudnych wycinek i nowoczesnej diagnostyki. Wierzy, że każde drzewo zasługuje na drugą szansę dzięki technologii.'
  },
  {
    id: 2,
    name: 'Marek Nowak',
    role: 'Technik Wysokościowy',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Ekspert technik linowych SRT. Odpowiada za bezpieczne opuszczanie urobku w gęstej zabudowie miejskiej.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Ile kosztuje wycinka jednego drzewa?',
    answer: (
      <div>
        <p>Cena zależy od wysokości, stopnia trudności i otoczenia. Średnio koszt wycinki alpinistycznej zaczyna się od 500 PLN. Oferujemy darmową wycenę na podstawie zdjęć wysłanych przez formularz.</p>
      </div>
    )
  },
  {
    id: 2,
    question: 'Czy pomagacie z wnioskami do urzędu?',
    answer: (
      <div>
        <p>Tak, przygotowujemy pełną dokumentację dendrologiczną niezbędną do uzyskania pozwolenia na wycinkę drzew na terenach prywatnych i firmowych.</p>
      </div>
    )
  },
  {
    id: 3,
    question: 'Czy działacie w nagłych wypadkach (np. po burzy)?',
    answer: (
      <div>
        <p>Działamy w trybie 24/7 dla zgłoszeń awaryjnych, gdzie drzewo zagraża mieniu lub życiu. Prosimy o kontakt telefoniczny w takich sytuacjach.</p>
      </div>
    )
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Kiedy wycinka jest niezbędna? Sygnały ostrzegawcze',
    slug: 'kiedy-wycinka-niezbedna',
    date: '20 Lutego 2025',
    excerpt: 'Poznaj kluczowe objawy, które wskazują, że drzewo może zagrażać Twojemu domowi...',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800&h=400',
    content: (
      <div className="space-y-4">
        <p>Wiele drzew na pierwszy rzut oka wygląda zdrowo, ale ich statyka może być poważnie naruszona przez grzyby lub puste przestrzenie w pniu.</p>
        <h3 className="text-xl font-bold text-emerald-400 uppercase italic">Na co zwrócić uwagę?</h3>
        <ul className="list-disc ml-6">
          <li>Owocniki grzybów u podstawy pnia.</li>
          <li>Pionowe pęknięcia kory.</li>
          <li>Nagły przechył drzewa po ulewach.</li>
        </ul>
        <p>Nasza technologia tomografii komputerowej drzew pozwala zajrzeć do środka pnia bez jego uszkadzania.</p>
      </div>
    )
  }
];
