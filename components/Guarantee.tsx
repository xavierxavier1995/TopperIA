import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
                <div className="bg-green-500/20 p-5 rounded-full ring-4 ring-green-500/10">
                    <ShieldCheck size={56} className="text-green-400" />
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Garantia Blindada</h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                "Teste por 7 dias. Se você não criar os topos mais incríveis da sua região e não economizar horas de sono, eu devolvo cada centavo. O risco é todo meu."
            </p>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                100% DE SATISFAÇÃO GARANTIDA
            </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;