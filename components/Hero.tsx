import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F5] via-white to-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-100 rounded-full blur-[120px] opacity-30 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12">
          
          {/* Nova Headline Agressiva */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-[1.1] mb-8 tracking-tight uppercase">
            Pare de perder horas no Canva e <span className="text-[#D94668]">nunca mais diga "não"</span> para um tema difícil!
          </h1>

          {/* Nova Subheadline Focada em Benefício */}
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Enquanto suas concorrentes lutam para achar um tema no Pinterest, você gera topos de bolo profissionais e exclusivos em 30 segundos com o poder da Inteligência Artificial.
          </p>

          {/* Input Simulation Card */}
          <div className="max-w-2xl mx-auto relative z-20">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(217,70,104,0.15)] border border-rose-100 relative text-left transition-transform hover:scale-[1.01] duration-300">
                
                <div className="min-h-[100px] mb-2">
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                        Ex: Topper para aniversário de 5 anos com tema de unicórnio, cores pastel rosa e lilás...
                    </p>
                </div>

                <div className="flex justify-end pt-2">
                     <button className="bg-[#D94668] hover:bg-[#c03555] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-rose-200 transform hover:-translate-y-0.5 text-base">
                        <Sparkles size={18} className="fill-white/20" />
                        Gerar Topper
                        <ArrowRight size={18} />
                     </button>
                </div>
            </div>

            {/* Prova Social (Atualizada para não repetir a headline) */}
            <div className="mt-8 md:mt-10 animate-fade-in-up">
                <p className="text-[#D94668] font-bold text-sm md:text-base tracking-wide bg-rose-50 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rose-100 shadow-sm">
                    <Star size={18} className="fill-[#D94668] text-[#D94668]" />
                    Junte-se a +2.500 confeiteiras que já transformaram seus bolos.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;