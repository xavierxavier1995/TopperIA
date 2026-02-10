import React from 'react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF0F5] flex items-center justify-center px-4 py-24">
      <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-md p-8 md:p-12 relative overflow-hidden border border-rose-100">
        
        {/* Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-50"></div>

        <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#D94668] mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Voltar para o início
        </Link>

        <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Bem-vinda de volta!</h1>
            <p className="text-gray-500">Acesse sua conta para baixar seus topos.</p>
        </div>

        <form className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="email" 
                        placeholder="seu@email.com"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94668] focus:border-transparent transition-all"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Senha</label>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D94668] focus:border-transparent transition-all"
                    />
                </div>
                <div className="flex justify-end mt-2">
                    <a href="#" className="text-xs text-[#D94668] font-bold hover:underline">Esqueci minha senha</a>
                </div>
            </div>

            <button className="w-full bg-[#D94668] hover:bg-[#c03555] text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                ENTRAR NO SISTEMA
            </button>
        </form>

        <div className="mt-8 text-center pt-8 border-t border-gray-100">
            <p className="text-gray-600 text-sm">
                Ainda não tem conta? <a href="/#pricing" className="text-[#D94668] font-bold hover:underline">Assinar agora</a>
            </p>
        </div>

      </div>
    </div>
  );
};

export default Login;