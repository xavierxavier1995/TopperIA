import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Maria Cláudia",
      role: "Boleira há 12 anos",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      text: "Menina do céu, eu não sabia nem mexer no computador direito, minha neta que me mostrou. Agora faço os topos das minhas clientes tudo sozinha!! Imprimo na lan house aqui perto e fica lindo. Agradeço de coração, facilitou demais minha vida que já é corrida.",
      stars: 5
    },
    {
      name: "Jéssica Santos",
      role: "Confeiteira e Mãe",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Eu perdia umas 2 horas no canva tentando encaixar as imagens e nunca ficava bom, sempre cortava a cabeça do personagem kkkk. Aqui eu escrevi 'bolo do naruto' e saiu pronto em 1 minuto?? Tô chocada real. Minhas encomendas aumentaram pq agora entrego personalizado na hora.",
      stars: 5
    },
    {
      name: "Ana Paula S.",
      role: "Dona de Casa",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "Comecei fazendo pros bolos da família e agora as vizinhas tudo tão pedindo pra eu fazer os delas. O plano essencial vale cada centavo, só o que economizei de tempo e dor de cabeça já pagou o ano todo. Podem assinar sem medo meninas, é muito facil de usar.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffe4e6_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-rose-100 text-[#D94668] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
            Quem usa, recomenda
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Veja o que as confeiteiras estão falando
          </h2>
          <p className="text-gray-500 font-medium">
            Histórias reais de quem parou de sofrer com design e foca no que importa: fazer bolos deliciosos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full relative group hover:-translate-y-1 transition-transform duration-300">
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-rose-100 group-hover:text-rose-200 transition-colors">
                <Quote size={40} className="fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow font-medium text-[15px]">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-[#D94668] font-bold uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;