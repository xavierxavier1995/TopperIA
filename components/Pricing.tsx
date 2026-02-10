import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#FFF5F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-[#FFE4E6] text-[#D94668] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 inline-block">Preços</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Escolha o plano ideal para você</h2>
          <p className="text-gray-600">Comece grátis e escale conforme seu negócio crescer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
          
          {/* Básico */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col h-full min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Básico</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl font-black text-gray-900">R$ 7,90</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">Ideal para começar a criar</p>
            
            <ul className="space-y-4 mb-8 text-left flex-grow">
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> 8 Créditos por mês</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Downloads ilimitados</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Qualidade padrão</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Geração normal</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Atendimento padrão</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Com marca d'água</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-[#F3E8EB] text-gray-700 font-bold hover:bg-gray-200 transition-colors text-sm">
              Começar agora
            </button>
          </div>

          {/* Essencial - Popular */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#D94668] relative text-center flex flex-col h-full transform scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C05D75] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
              Mais Popular
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 mt-2">Essencial</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl font-black text-gray-900">R$ 19,90</span>
                <span className="text-sm text-gray-500">/mês</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">Para criadores frequentes</p>
            
            <ul className="space-y-4 mb-8 text-left flex-grow">
              <li className="flex items-center gap-3 text-gray-700 text-sm"><Check size={16} className="text-[#D94668]" /> 20 Créditos por mês</li>
              <li className="flex items-center gap-3 text-gray-700 text-sm"><Check size={16} className="text-[#D94668]" /> Downloads ilimitados</li>
              <li className="flex items-center gap-3 text-gray-700 text-sm"><Check size={16} className="text-[#D94668]" /> Qualidade superior</li>
              <li className="flex items-center gap-3 text-gray-700 text-sm"><Check size={16} className="text-[#D94668]" /> Geração prioritária</li>
              <li className="flex items-center gap-3 text-gray-700 text-sm"><Check size={16} className="text-[#D94668]" /> Atendimento prioritário</li>
              <li className="flex items-center gap-3 text-gray-700 text-sm"><Check size={16} className="text-[#D94668]" /> Sem marca d'água</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-[#C05D75] text-white font-bold hover:bg-[#a64d62] transition-colors shadow-md text-sm">
              Assinar agora
            </button>
          </div>

          {/* Profissional */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col h-full min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Profissional</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl font-black text-gray-900">R$ 49,90</span>
                <span className="text-sm text-gray-500">/mês</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">Para profissionais</p>
            
            <ul className="space-y-4 mb-8 text-left flex-grow">
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> 50 Créditos por mês</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Downloads ilimitados</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Qualidade máxima</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Geração rápida</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Atendimento VIP</li>
              <li className="flex items-center gap-3 text-gray-600 text-sm"><Check size={16} className="text-[#D94668]" /> Sem marca d'água</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-[#F3E8EB] text-gray-700 font-bold hover:bg-gray-200 transition-colors text-sm">
              Assinar agora
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;