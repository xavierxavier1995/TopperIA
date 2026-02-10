import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img 
              src="https://topper.fabianopereiradev.com.br/logo-dark.svg" 
              alt="TopperAI Logo" 
              className="h-8 md:h-10 w-auto"
            />
        </div>
        <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                Como Funciona
            </a>
            <a href="#gallery" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                Exemplos
            </a>
            <a href="#pricing" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-rose-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                VER PLANOS
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;