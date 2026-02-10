import React from 'react';

const Gallery: React.FC = () => {
  // Dados simulados baseados na imagem de referência
  // Usando URLs disponíveis ou placeholders lógicos para os 6 exemplos
  const cards = [
    {
      img: "https://topper.fabianopereiradev.com.br/example-2.webp", // Flamengo
      title: "Bolo do Flamengo Decorado",
      tags: ["Bolo Time Flamengo", "Vermelho, Preto, Branco"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-3.webp", // Stitch
      title: "Bolo do Stitch Infantil",
      tags: ["Bolo Temático Stitch", "Azul, Lilás, Rosa, Branco"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp", // Spider Man (usando url genérica disponível)
      title: "Bolo Homem-Aranha Infantil",
      tags: ["Homem-Aranha", "Vermelho, Azul, Preto, Branco"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp", // Branca de Neve (usando url genérica disponível)
      title: "Bolo Branca de Neve Decorado",
      tags: ["Branca de Neve", "Amarelo, Azul, Vermelho"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp", // Casamento
      title: "Topo de Bolo Casamento Personalizado",
      tags: ["Casamento", "Branco, Dourado, Rosé, Verde"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp", // Princesas
      title: "Bolo das Princesas Infantil",
      tags: ["Princesas", "Amarelo, Rosa, Lilás, Azul, Dourado"]
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 max-w-2xl mx-auto mb-2 text-sm md:text-base">
            De festas infantis a casamentos, o TopperAI cria designs para todas as ocasiões
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden flex flex-col p-4">
              {/* Image Area */}
              <div className="rounded-lg overflow-hidden aspect-square bg-white relative mb-4 flex items-center justify-center">
                 <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                 />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                        <span key={i} className={`text-[11px] font-semibold px-3 py-1 rounded-full ${i === 0 ? 'bg-[#FDF2F8] text-[#D94668]' : 'bg-gray-100 text-gray-500'}`}>
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;