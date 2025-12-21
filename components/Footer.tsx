
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO, NEIGHBORHOODS_DATA } from '../constants';

const FooterPsi: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="footer-psi-wrapper relative w-16 h-16 md:w-[70px] md:h-[70px] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>
        Ψ
      </span>
      <div className={`psi-ripple ${isHovered ? 'animate' : ''}`}></div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#2C5364] to-[#1e3840] text-white pt-32 mt-24">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#4A7C7E', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#5B8C8E', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#4A7C7E', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6 text-center">Atendimento em Balneário Camboriú</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
            {NEIGHBORHOODS_DATA.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                to={`/bairro/${neighborhood.slug}`}
                className="footer-link text-white/60 hover:text-gold transition-colors text-sm text-center py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10"
              >
                {neighborhood.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <FooterPsi />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Beatriz Fauth</span>
                <span className="text-sm text-white/60">{CONTACT_INFO.crp}</span>
              </div>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Psicanalista clínica com mais de 30 anos de experiência, oferecendo um espaço de escuta ética e acolhedora em Balneário Camboriú.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-footer w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-footer w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="footer-link text-white/70 hover:text-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="footer-link text-white/70 hover:text-gold transition-colors">Sobre Beatriz</Link></li>
              <li><Link to="/servicos" className="footer-link text-white/70 hover:text-gold transition-colors">Especialidades</Link></li>
              <li><Link to="/blog" className="footer-link text-white/70 hover:text-gold transition-colors">Blog & Artigos</Link></li>
              <li><Link to="/blog#duvidas" className="footer-link text-white/70 hover:text-gold transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link to="/contato" className="footer-link text-white/70 hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gold" />
                </div>
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold" />
                </div>
                <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="hover:text-gold transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-xs mb-6">Redes Sociais</h4>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-white/60 italic mb-5 leading-relaxed">
                Acompanhe reflexões diárias sobre psicanálise e saúde mental.
              </p>
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-btn inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg"
              >
                <Instagram size={18} />
                Ver Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Beatriz Fauth. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5">
            <span>Desenvolvido com</span>
            <Heart className="text-red-500 fill-red-500 animate-heartbeat" size={14} />
            <span>por</span>
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold hover:text-gold/80 hover:underline ml-1 font-medium"
            >
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
