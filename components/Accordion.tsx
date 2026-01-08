
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  number?: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, number, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <div className="flex items-center">
          {number && <span className="text-[#76B852] font-mono mr-4 text-sm">{number}</span>}
          <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-[#2D5A27]' : 'text-gray-800 group-hover:text-[#2D5A27]'}`}>
            {title}
          </h3>
        </div>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#76B852]' : 'text-gray-400'}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <div className="text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
