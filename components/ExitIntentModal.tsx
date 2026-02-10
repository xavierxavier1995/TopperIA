import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const canShowRef = useRef(false);

  useEffect(() => {
    // Check if already shown in this session
    const sessionShown = sessionStorage.getItem('exitIntentShown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    // Timer: Enable the trigger only after 15 seconds
    const timer = setTimeout(() => {
      canShowRef.current = true;
    }, 15000);

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 && canShowRef.current && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const closeModal = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full relative border-4 border-rose-100 overflow-hidden transform transition-all scale-100">
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="text-4xl mb-4">🎂</div>
          
          <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
            Ei, não deixe o seu bolo <span className="text-[#D94668]">solar!</span>
          </h3>
          
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            Você está prestes a abandonar o segredo que vai te economizar horas de sono. Garanta seus topos exclusivos antes de sair!
          </p>

          <a 
            href="#pricing" 
            onClick={closeModal}
            className="block w-full bg-[#D94668] hover:bg-[#c03555] text-white font-bold text-lg py-4 rounded-full shadow-[0_4px_14px_0_rgba(217,70,104,0.39)] hover:shadow-[0_6px_20px_rgba(217,70,104,0.23)] hover:-translate-y-1 transition-all"
          >
            QUERO MEU ACESSO AGORA
          </a>
          
          <button 
            onClick={closeModal}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline"
          >
            Não, prefiro continuar perdendo tempo no Canva
          </button>
        </div>
        
        {/* Decorative bottom strip */}
        <div className="h-2 w-full bg-gradient-to-r from-[#D94668] to-rose-300"></div>
      </div>
    </div>
  );
};

export default ExitIntentModal;