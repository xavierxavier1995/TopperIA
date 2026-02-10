import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past Hero (approx 600px)
      // Hide if user is very close to bottom (footer) to avoid overlap issues
      const isPastHero = window.scrollY > 600;
      setIsVisible(isPastHero);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 p-4 md:hidden bg-gradient-to-t from-white via-white to-transparent pt-8 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a 
        href="#pricing"
        className="flex items-center justify-center gap-2 w-full bg-[#D94668] text-white font-extrabold text-lg py-4 rounded-full shadow-lg shadow-rose-200 active:scale-95 transition-transform"
      >
        <span>GARANTIR MEU ACESSO VIP</span>
        <ArrowUpRight size={20} />
      </a>
    </div>
  );
};

export default FloatingActionButton;