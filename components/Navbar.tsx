
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Beatriz Psicóloga', path: '/sobre' },
    { name: 'Terapias', path: '/servicos' },
    { name: 'Dúvidas', path: '/blog#duvidas' },
    { name: 'Agendar Sessão', path: '/contato' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Contact Bar - Hidden on Mobile */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-navy text-sand/60 py-2 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-bold">
          <div className="flex items-center space-x-8">
            <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={12} className="text-gold" /> {CONTACT_INFO.phone}
            </a>
            <span className="opacity-20">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-gold transition-colors lowercase tracking-normal">
              <Mail size={12} className="text-gold" /> {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-gold/50">{CONTACT_INFO.crp}</span>
            <span className="opacity-20">|</span>
            <div className="flex items-center space-x-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Instagram size={14} /></a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Facebook size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 shadow-xl ${scrolled ? 'bg-navy/95 backdrop-blur-md py-3 border-b border-gold/10' : 'bg-navy py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-bold serif text-white group-hover:text-gold transition-colors tracking-tight">Beatriz <span className="text-gold">Fauth</span></span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">Psicóloga & Psicanalista</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] xl:text-xs font-black uppercase tracking-widest hover:text-gold transition-all duration-300 relative group py-2 ${location.pathname + location.hash === link.path ? 'text-gold' : 'text-white'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 ${location.pathname + location.hash === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              <a 
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold text-navy px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95"
              >
                Consulta Online
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="w-9 h-9 bg-gold text-navy rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                <Phone size={16} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-gold transition-colors"
                aria-label="Menu principal"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 top-[68px] z-40 bg-navy transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="flex flex-col h-full px-8 py-8 space-y-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-serif border-b border-white/5 pb-3 ${location.pathname + location.hash === link.path ? 'text-gold' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 flex flex-col space-y-6">
              <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-black">Entre em contato</p>
              <div className="flex space-x-6 text-white">
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Instagram size={28} /></a>
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Facebook size={28} /></a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors"><Mail size={28} /></a>
              </div>
              <div className="mt-4 text-white/40 text-[10px] uppercase tracking-widest">
                {CONTACT_INFO.crp}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
