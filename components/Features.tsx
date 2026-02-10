import React from 'react';
import { Crown, FileDown, Printer, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const benefits = [
    {
      icon: <Crown className="w-8 h-8 text-white" />,
      title: "EXCLUSIVIDADE TOTAL",
      desc: "Chega de usar o mesmo topo que todo mundo. Crie designs únicos que valorizam seu bolo em até 40%."
    },
    {
      icon: <FileDown className="w-8 h-8 text-white" />,
      title: "FORMATOS PROFISSIONAIS",
      desc: "Baixe em PNG (fundo transparente), PDF ou SVG pronto para sua Silhouette ou tesoura."
    },
    {
      icon: <Printer className="w-8 h-8 text-white" />,
      title: "QUALIDADE DE IMPRESSÃO",
      desc: "Arquivos em alta resolução para cores vivas que saltam aos olhos da cliente."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "VELOCIDADE RELÂMPAGO",
      desc: "De 'tive uma ideia' para 'está na impressora' em 30 segundos cronometrados."
    }
  ];

  return (
    <section id="features" className="py-24 bg-bgLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-white border border-rose-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-sm">
            O Poder da IA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Tudo o que você precisa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-soft border border-rose-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6 bg-gradient-to-br from-primary to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200">
                {item.icon}
              </div>
              <h3 className="text-lg font-black mb-3 text-gray-900 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;