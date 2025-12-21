import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const NotFound: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Página Não Encontrada - Beatriz Fauth';
  }, []);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#4A7C7E] to-[#5B8C8E] mb-6 shadow-2xl">
            <span className="text-white text-7xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>
              Ψ
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-navy mb-4 serif">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4 serif">
            Página Não Encontrada
          </h2>
          <p className="text-gray-600 text-lg font-light mb-8 max-w-md mx-auto">
            A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Home size={20} />
            Voltar para Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy font-semibold rounded-full border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={20} />
            Voltar à Página Anterior
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-navy mb-4 serif">
            Você pode estar procurando por:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Link
              to="/sobre"
              className="p-4 rounded-xl bg-sand hover:bg-rose/30 transition-all duration-300 text-left group"
            >
              <h4 className="font-semibold text-navy group-hover:text-[#4A7C7E] transition-colors mb-1">
                Sobre Beatriz Fauth
              </h4>
              <p className="text-sm text-gray-600 font-light">
                Conheça a profissional e sua abordagem
              </p>
            </Link>

            <Link
              to="/servicos"
              className="p-4 rounded-xl bg-sand hover:bg-rose/30 transition-all duration-300 text-left group"
            >
              <h4 className="font-semibold text-navy group-hover:text-[#4A7C7E] transition-colors mb-1">
                Terapias
              </h4>
              <p className="text-sm text-gray-600 font-light">
                Conheça as modalidades de atendimento
              </p>
            </Link>

            <Link
              to="/bairro/centro"
              className="p-4 rounded-xl bg-sand hover:bg-rose/30 transition-all duration-300 text-left group"
            >
              <h4 className="font-semibold text-navy group-hover:text-[#4A7C7E] transition-colors mb-1">
                Atendimento por Bairro
              </h4>
              <p className="text-sm text-gray-600 font-light">
                Encontre atendimento no seu bairro
              </p>
            </Link>

            <Link
              to="/contato"
              className="p-4 rounded-xl bg-sand hover:bg-rose/30 transition-all duration-300 text-left group"
            >
              <h4 className="font-semibold text-navy group-hover:text-[#4A7C7E] transition-colors mb-1">
                Contato
              </h4>
              <p className="text-sm text-gray-600 font-light">
                Entre em contato conosco
              </p>
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-4 font-light">
              Precisa de ajuda para encontrar o que procura?
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Não consegui encontrar a página que procurava no site.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone size={20} />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8 font-light">
          Erro 404 - A página solicitada não foi encontrada
        </p>
      </div>
    </div>
  );
};

export default NotFound;
