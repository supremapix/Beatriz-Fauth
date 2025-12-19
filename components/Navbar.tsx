
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const PsiLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowParticles(true);
    onClick?.();
    setTimeout(() => setIsClicked(false), 800);
    setTimeout(() => setShowParticles(false), 1000);
  };

  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 360;
    const tx = Math.cos((angle * Math.PI) / 180) * 40;
    const ty = Math.sin((angle * Math.PI) / 180) * 40;
    return { id: i, tx, ty };
  });

  return (
    <div 
      className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-[#4A7C7E] to-[#5B8C8E] rounded-2xl cursor-pointer overflow-visible shadow-lg hover:shadow-xl transition-shadow"
      onClick={handleClick}
    >
      <span className={`psi-symbol text-white text-3xl md:text-4xl font-bold ${isClicked ? 'clicked' : ''}`}>
        Ψ
      </span>
      <div className={`psi-particles absolute inset-0 ${showParticles ? 'active' : ''}`}>
        {particles.map((p) => (
          <div
            key={p.id}
            className="psi-particle absolute top-1/2 left-1/2"
            style={{ '--tx': `${p.tx}px`, '--ty': `${p.ty}px` } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Mim', path: '/sobre' },
    { name: 'Terapias', path: '/servicos' },
    { name: 'Dúvidas', path: '/blog#duvidas' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname + location.hash === path;

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="header-glow"></div>
      </div>
      
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-white/80 backdrop-blur-sm text-gray-600 py-2 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4A7C7E] transition-colors">
              <Phone size={14} className="text-[#4A7C7E]" /> {CONTACT_INFO.phone}
            </a>
            <span className="text-gray-300">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-[#4A7C7E] transition-colors">
              <Mail size={14} className="text-[#4A7C7E]" /> {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-[#4A7C7E] font-semibold">{CONTACT_INFO.crp}</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center space-x-3">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#4A7C7E] transition-colors"><Instagram size={16} /></a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#4A7C7E] transition-colors"><Facebook size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-500 relative ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg' : 'bg-white py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 group">
              <PsiLogo />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-[#2C5364] group-hover:text-[#4A7C7E] transition-colors tracking-tight">
                  Beatriz <span className="text-gold">Fauth</span>
                </span>
                <span className="text-[10px] md:text-xs text-[#4A7C7E] font-medium tracking-wide">
                  Psicanálise & Psiquiatria
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`menu-link relative px-4 py-2 text-sm font-medium transition-colors ${isActive(link.path) ? 'text-[#4A7C7E]' : 'text-[#2C5364] hover:text-[#4A7C7E]'}`}
                >
                  <span>{link.name}</span>
                  <span className={`menu-link-underline ${isActive(link.path) ? 'transform scale-x-100' : ''}`}></span>
                </Link>
              ))}
              <a 
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar uma consulta`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Agendar Consulta
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="w-10 h-10 bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                <Phone size={18} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#2C5364] hover:text-[#4A7C7E] transition-colors relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Menu principal"
              >
                <span className={`w-6 h-0.5 bg-current rounded transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current rounded transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current rounded transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />
        
        <div className={`lg:hidden fixed top-0 right-0 w-[85%] max-w-sm h-full z-50 bg-white shadow-2xl transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full px-8 py-8 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-[#4A7C7E] transition-colors"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-4 mb-10 mt-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A7C7E] to-[#5B8C8E] rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>Ψ</span>
              </div>
              <span className="text-xl font-bold text-[#2C5364]">Beatriz Fauth</span>
            </div>
            
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg font-medium py-4 px-4 rounded-xl transition-all ${isActive(link.path) ? 'bg-[rgba(91,140,142,0.1)] text-[#4A7C7E]' : 'text-[#2C5364] hover:bg-[rgba(91,140,142,0.05)] hover:text-[#4A7C7E] hover:translate-x-2'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-8">
              <a 
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar uma consulta`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white font-semibold rounded-full shadow-lg mb-6"
              >
                Agendar Consulta
              </a>
              
              <p className="text-sm text-gray-500 mb-4">Entre em contato</p>
              <div className="flex space-x-4 text-gray-600 mb-6">
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#4A7C7E] transition-colors"><Instagram size={24} /></a>
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#4A7C7E] transition-colors"><Facebook size={24} /></a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#4A7C7E] transition-colors"><Mail size={24} /></a>
              </div>
              <p className="text-sm text-[#4A7C7E] font-semibold">{CONTACT_INFO.crp}</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
