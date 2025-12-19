
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl serif mb-4">Beatriz Fauth</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Psicanálise clínica com mais de 30 anos de experiência, oferecendo um espaço de escuta ética e acolhedora em Balneário Camboriú.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Beatriz</Link></li>
              <li><Link to="/servicos" className="hover:text-gold transition-colors">Especialidades</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog & Artigos</Link></li>
              <li><Link to="/blog#duvidas" className="hover:text-gold transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-3 mt-1 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold mr-3 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-3 shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Feed Placeholder */}
          <div className="col-span-1">
            <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6">Redes Sociais</h4>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-xs text-gray-400 italic mb-4">Acompanhe reflexões diárias sobre psicanálise e saúde mental.</p>
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold/80 text-white px-4 py-2 rounded text-xs transition-colors"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Beatriz Fauth. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido</span>
            <span className="inline-block mx-1">
              <Heart className="text-red-500 fill-red-500 animate-heartbeat" size={14} />
            </span>
            <span>por</span>
            <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline ml-1">
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;