import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 border transition-all duration-300 rounded-2xl bg-white ${isOpen ? 'border-[#D94668] shadow-md' : 'border-rose-100 hover:border-rose-300'}`}>
      <button 
        className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#D94668]' : 'text-gray-800'}`}>
            {question}
        </span>
        {isOpen ? <ChevronUp className="text-[#D94668]" /> : <ChevronDown className="text-gray-400" />}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-6 px-6 text-gray-600 leading-relaxed font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como funciona a geração de toppers com IA?",
      answer: "Você descreve o topper que deseja (tema, cores, estilo) e nossa inteligência artificial cria designs únicos em segundos. É só baixar e imprimir!"
    },
    {
      question: "Posso usar os toppers comercialmente?",
      answer: "Sim! Todos os planos pagos incluem licença comercial completa. Você pode usar os toppers para vender seus bolos e produtos de confeitaria."
    },
    {
      question: "Em quais formatos posso baixar os toppers?",
      answer: "No plano gratuito você baixa em PNG. Nos planos pagos, você tem acesso a PNG em alta resolução (300 DPI), SVG vetorial e PDF pronto para impressão."
    },
    {
      question: "Preciso ter conhecimento em design?",
      answer: "Não! O TopperAI foi feito para ser simples. Basta descrever o que você quer em português e a IA faz todo o trabalho de design para você."
    },
    {
      question: "Posso cancelar a assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura quando quiser, sem multas ou taxas. Seu acesso continua até o final do período já pago."
    },
    {
      question: "Os toppers ficam salvos na minha conta?",
      answer: "Sim! Todos os toppers que você gerar ficam salvos no seu histórico. Você pode acessar, baixar novamente ou usar como base para novas criações."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="bg-[#FFE4E6] text-[#D94668] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 inline-block">Dúvidas?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-500 font-medium">Tudo o que você precisa saber antes de começar</p>
        </div>
        
        <div className="space-y-2">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;