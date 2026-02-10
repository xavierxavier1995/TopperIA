import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
                <img 
                  src="https://topper.fabianopereiradev.com.br/logo-dark.svg" 
                  alt="TopperAI Logo" 
                  className="h-8 mb-6"
                />
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    A plataforma líder em geração de topos de bolo com Inteligência Artificial. Simplificando a vida de milhares de confeiteiras pelo Brasil.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-gray-900 mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
                    <li><a href="#features" className="hover:text-primary transition-colors">Como Funciona</a></li>
                    <li><a href="#pricing" className="hover:text-primary transition-colors">Preços</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Login</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} TopperAI. Todos os direitos reservados.</p>
            <p>Feito com ❤️ para confeiteiras.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;