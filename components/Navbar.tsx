import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Helper para scroll suave apenas se estiver na home, senão vai para home
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <Link to="/">
                <img 
                  src="https://topper.fabianopereiradev.com.br/logo-dark.svg" 
                  alt="TopperAI Logo" 
                  className="h-8 md:h-10 w-auto"
                />
            </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
            {isHome ? (
                <>
                    <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                        Como Funciona
                    </a>
                    <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                        Exemplos
                    </a>
                </>
            ) : (
                <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                    Voltar ao Início
                </Link>
            )}
            
            {/* Link temporário para visualização da Copy - Corrigido para Rosa */}
            <Link to="/copy" className="text-sm font-bold text-[#D94668] hover:text-[#b02e4b] transition-colors border border-rose-200 px-3 py-1 rounded-md bg-rose-50">
                NOVA COPY
            </Link>
            
            <Link to="/login" className="text-sm font-bold text-[#D94668] hover:text-[#b02e4b] transition-colors">
                ENTRAR
            </Link>

            <a href="/#pricing" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-rose-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                VER PLANOS
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;