import React from 'react';
import { AlertCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full text-primary mb-6">
                <AlertCircle size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                A rotina de uma confeiteira é assar, rechear e decorar... <br className="hidden md:block"/>
                <span className="text-primary">por que você ainda perde tempo tentando ser designer?</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                "A busca pelo topo perfeito acaba aqui. Sem arquivos de baixa qualidade, sem marcas d'água de terceiros e sem precisar de um curso de design. <span className="text-gray-900 font-bold bg-rose-50 px-1">Digite o que deseja, e a mágica acontece.</span>"
            </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;