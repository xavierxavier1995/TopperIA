import React from 'react';
import { Sparkles, ArrowRight, Star, Check, Zap, Palette, FileDown, Crown, LayoutGrid } from 'lucide-react';
import ExitIntentModal from './ExitIntentModal';
import SocialProof from './SocialProof';
import FloatingActionButton from './FloatingActionButton';

const CopyPage: React.FC = () => {
  
  // Dados da Galeria Específicos
  const galleryItems = [
    {
      img: "https://topper.fabianopereiradev.com.br/example-2.webp",
      title: "Bolo do Flamengo Decorado",
      desc: "Bolo decorado com tema do Flamengo, com escudo do time, elementos esportivos e cores vermelho e preto, ideal para festas de aniversário de torcedores.",
      tags: ["Bolo Time Flamengo", "Vermelho, Preto, Branco"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-3.webp",
      title: "Bolo do Stitch Infantil",
      desc: "Bolo infantil com tema Stitch, decorado com o personagem, flores e elementos tropicais em tons de azul e lilás, ideal para festas divertidas e criativas.",
      tags: ["Bolo Temático Stitch", "Azul, Lilás, Rosa, Branco"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp",
      title: "Bolo Homem-Aranha Infantil",
      desc: "Bolo infantil decorado com tema Homem-Aranha, com elementos do personagem, teias e cores vermelha e azul, ideal para festas de aniversário de crianças.",
      tags: ["Homem-Aranha", "Vermelho, Azul, Preto, Branco"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp", 
      title: "Bolo Branca de Neve Decorado",
      desc: "Bolo infantil com tema Branca de Neve, decorado com a personagem, maçã, coração e cores clássicas do conto, perfeito para festas delicadas e temáticas.",
      tags: ["Branca de Neve", "Amarelo, Azul, Vermelho"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp",
      title: "Topo de Bolo Casamento Personalizado",
      desc: "Topo de bolo de casamento personalizado com elementos românticos como alianças, corações e flores, ideal para decoração de bolos de casamento e bodas.",
      tags: ["Casamento", "Branco, Dourado, Rosé, Verde"]
    },
    {
      img: "https://topper.fabianopereiradev.com.br/example-1.webp",
      title: "Bolo das Princesas Infantil",
      desc: "Bolo infantil com tema princesas, decorado com coroas, castelo e vestidos, em cores suaves e douradas, ideal para festas de aniversário elegantes.",
      tags: ["Princesas", "Amarelo, Rosa, Lilás, Azul, Dourado"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Elementos de Conversão */}
      <ExitIntentModal />
      <SocialProof />
      <FloatingActionButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8FAFC] relative overflow-hidden">
        {/* Background Decoration Suave */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100 rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Tag Grátis (Verde conforme screenshot) */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Grátis • Sem cartão de crédito
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6 leading-tight tracking-tight">
              Toppers de Bolo,<br/>
              <span className="text-[#D94668]">Personalizados com IA</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 font-medium">
              Não acredita? — Digite sua ideia e veja a mágica acontecer.
            </p>

            {/* Input Simulator */}
            <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-[0_10px_40px_-10px_rgba(217,70,104,0.2)] border border-rose-100 mb-12 transform hover:scale-[1.01] transition-transform">
              <div className="flex flex-col md:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Ex: Topper para aniversário de 5 anos com tema de unicórnio, cores pastel rosa e lilás..." 
                  className="flex-grow p-4 rounded-xl bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-[#D94668] placeholder-gray-400"
                  readOnly
                />
                <button className="bg-[#D94668] hover:bg-[#b02e4b] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-200">
                  <Sparkles size={18} />
                  Gerar Topper
                </button>
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${i + 40}.jpg`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold text-gray-700">
                    <span className="text-[#D94668]">+2.500</span> confeiteiras
                  </p>
                </div>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

              <div className="text-center">
                 <p className="text-2xl font-black text-[#0F172A]">4.9/5</p>
                 <p className="text-sm text-gray-500 font-medium">avaliação média</p>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

              <div className="text-center">
                 <p className="text-2xl font-black text-[#0F172A]">30s</p>
                 <p className="text-sm text-gray-500 font-medium">tempo médio de geração</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">
              Por que confeiteiras amam o TopperAI?
            </h2>
            <p className="text-gray-600 text-lg">
              Economize tempo e encante suas clientes com toppers personalizados e profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Sparkles className="text-[#D94668]" />, title: "Geração com IA", desc: "Descreva sua ideia e nossa IA cria designs únicos instantaneamente" },
              { icon: <Palette className="text-[#D94668]" />, title: "Personalização Total", desc: "Escolha cores, temas e estilos para combinar com qualquer festa" },
              { icon: <FileDown className="text-[#D94668]" />, title: "Arquivos Prontos", desc: "Baixe em PNG, SVG ou PDF prontos para impressão" },
              { icon: <Zap className="text-[#D94668]" />, title: "Rápido e Fácil", desc: "De ideia a design pronto em menos de 30 segundos" },
              { icon: <Crown className="text-[#D94668]" />, title: "Designs Exclusivos", desc: "Cada topper é único e criado especialmente para você" },
              { icon: <LayoutGrid className="text-[#D94668]" />, title: "Múltiplos Formatos", desc: "Toppers para cupcakes, bolos redondos, quadrados e mais" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FFF5F7] hover:bg-white border border-transparent hover:border-rose-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform border border-rose-100">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#FFF5F7]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 max-w-6xl mx-auto gap-4">
            <div>
              <span className="text-[#D94668] font-bold uppercase tracking-wider text-sm mb-2 block">Inspiração</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Veja o que você pode criar</h2>
              <p className="text-gray-600">De festas infantis a casamentos, o TopperAI cria designs para todas as ocasiões</p>
            </div>
            <a href="#pricing" className="text-[#D94668] font-bold hover:text-[#b02e4b] flex items-center gap-2">
              Ver mais topos de bolo <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="aspect-square bg-gray-100 relative overflow-hidden group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <p className="text-white text-center text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#0F172A] mb-3">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold bg-gray-50 text-gray-600 px-3 py-1 rounded-full border border-gray-100">
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

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D94668] font-bold uppercase tracking-wider text-sm mb-2 block">Preços</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Escolha o plano ideal para você</h2>
            <p className="text-gray-600">Comece grátis e escale conforme suas encomendas aumentarem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            
            {/* Básico */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-bold text-lg text-gray-500 mb-2">Básico</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-[#0F172A]">R$ 7,90</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Ideal para começar a criar</p>
              <ul className="space-y-4 mb-8">
                {[
                  "8 Créditos por mês", "Downloads ilimitados", "Qualidade padrão", 
                  "Geração normal", "Atendimento padrão", "Com marca d'água"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-[#D94668] flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
                Começar agora
              </button>
            </div>

            {/* Essencial */}
            <div className="p-8 rounded-2xl border-2 border-[#D94668] bg-white shadow-xl relative transform scale-105 z-10">
              <div className="absolute top-0 right-0 left-0 bg-[#D94668] text-white text-xs font-bold text-center py-1.5 uppercase tracking-wide rounded-t-lg">
                Mais Popular
              </div>
              <h3 className="font-bold text-lg text-[#D94668] mb-2 mt-4">Essencial</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-[#0F172A]">R$ 19,90</span>
                <span className="text-gray-500 text-sm">/mês</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Para criadores frequentes</p>
              <ul className="space-y-4 mb-8">
                {[
                  "20 Créditos por mês", "Downloads ilimitados", "Qualidade superior", 
                  "Geração prioritária", "Atendimento prioritário", "Sem marca d'água"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#0F172A] font-medium">
                    <Check size={16} className="text-[#D94668] flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-[#D94668] hover:bg-[#b02e4b] text-white font-bold transition-all shadow-lg shadow-rose-200">
                Assinar agora
              </button>
            </div>

            {/* Profissional */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Profissional</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-[#0F172A]">R$ 49,90</span>
                <span className="text-gray-500 text-sm">/mês</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Para profissionais</p>
              <ul className="space-y-4 mb-8">
                {[
                  "50 Créditos por mês", "Downloads ilimitados", "Qualidade máxima", 
                  "Geração rápida", "Atendimento VIP", "Sem marca d'água"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-[#D94668] flex-shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
                Assinar agora
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#D94668] font-bold uppercase tracking-wider text-sm mb-2 block">Dúvidas</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">Tudo que você precisa saber sobre o TopperAI</p>
          </div>

          <div className="space-y-4">
            {[
              "Como funciona a geração de toppers com IA?",
              "Posso usar os toppers comercialmente?",
              "Em quais formatos posso baixar os toppers?",
              "Preciso ter conhecimento em design?",
              "Posso cancelar a assinatura a qualquer momento?"
            ].map((q, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#0F172A]">{q}</h3>
              </div>
            ))}
            {/* Resposta Expandida Específica do Pedido */}
            <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h3 className="font-bold text-[#D94668] mb-2">Os toppers ficam salvos na minha conta?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Sim! Todos os toppers que você gerar ficam salvos no seu histórico. Você pode acessar, baixar novamente ou usar como base para novas criações.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Pronto para criar toppers incríveis?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Junte-se a mais de 2.500 confeiteiras que já estão economizando tempo e encantando clientes
            </p>
            <button className="bg-[#D94668] hover:bg-[#b02e4b] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-rose-500/30 transition-all transform hover:-translate-y-1 mb-4">
                Começar Grátis
            </button>
            <p className="text-sm text-gray-400 font-medium">
                Sem cartão de crédito • 2 toppers grátis
            </p>
        </div>
      </section>

    </div>
  );
};

export default CopyPage;