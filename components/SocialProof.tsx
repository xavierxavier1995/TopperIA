import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const notifications = [
  {
    name: "Ana de Curitiba, PR",
    action: "acabou de assinar o Plano Essencial 🧁",
    time: "Agora mesmo"
  },
  {
    name: "Carla de Salvador, BA",
    action: "gerou um topo de bolo do Stitch agora ✨",
    time: "Há 2 minutos"
  },
  {
    name: "Doceria da Lu, SP",
    action: "garantiu o Plano VIP 🚀",
    time: "Há 5 minutos"
  },
  {
    name: "Mariana de Minas Gerais",
    action: "criou um topo de Casamento 👰",
    time: "Agora mesmo"
  }
];

const SocialProof: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Scroll detection to start the sequence
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30 && !hasStarted) {
        setHasStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  // Cycle notifications
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
        // Move to next notification after hiding
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
        }, 500); // Wait for fade out animation
      }, 4000);

    }, 20000); // Every 20 seconds (15-20s rule)

    // Trigger the first one immediately after start
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 4000);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const current = notifications[currentIndex];

  return (
    <div 
      className={`fixed bottom-20 md:bottom-8 left-4 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white border border-rose-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-4 max-w-[300px] md:max-w-sm flex items-start gap-4 pr-8 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
        >
          <X size={14} />
        </button>
        
        <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
          <CheckCircle2 size={24} className="text-green-600" />
        </div>
        
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight mb-1">
            {current.name}
          </p>
          <p className="text-xs font-medium text-gray-600 leading-snug">
            {current.action}
          </p>
          <p className="text-[10px] text-gray-400 mt-1">
            {current.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;