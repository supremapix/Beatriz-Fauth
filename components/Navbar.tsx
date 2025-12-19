
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
    { name: 'Sobre Mim', path: '/sobre' },
    { name: 'Terapias', path: '/servicos' },
    { name: 'Dúvidas', path: '/blog#duvidas' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Top Contact Bar - Hidden on Mobile */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-white/80 backdrop-blur-sm text-gray-600 py-2 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-light transition-colors">
              <Phone size={14} className="text-navy-light" /> {CONTACT_INFO.phone}
            </a>
            <span className="text-gray-300">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-navy-light transition-colors">
              <Mail size={14} className="text-navy-light" /> {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-navy-light font-semibold">{CONTACT_INFO.crp}</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center space-x-3">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-navy-light transition-colors"><Instagram size={16} /></a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-navy-light transition-colors"><Facebook size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-white py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-semibold serif text-navy group-hover:text-navy-light transition-colors tracking-tight">
                  Beatriz <span className="text-gold">Fauth</span>
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">
                  Psicóloga & Psicanalista
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium hover:text-navy-light transition-all duration-300 relative group py-2 ${location.pathname + location.hash === link.path ? 'text-navy-light' : 'text-gray-600'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-navy-light transform transition-transform duration-300 origin-left ${location.pathname + location.hash === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              <a 
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar uma consulta`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg"
              >
                Agendar Consulta
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                <Phone size={18} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-navy-light transition-colors"
                aria-label="Menu principal"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-sm h-full z-50 bg-white shadow-2xl transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full px-8 py-8 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-navy-light transition-colors"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
            
            <div className="mt-12 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg font-medium py-3 border-b border-gray-100 transition-colors ${location.pathname + location.hash === link.path ? 'text-navy-light' : 'text-gray-700 hover:text-navy-light'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-8">
              <p className="text-sm text-gray-500 mb-4">Entre em contato</p>
              <div className="flex space-x-4 text-gray-600 mb-6">
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-navy-light transition-colors"><Instagram size={24} /></a>
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-navy-light transition-colors"><Facebook size={24} /></a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-navy-light transition-colors"><Mail size={24} /></a>
              </div>
              <p className="text-sm text-navy-light font-semibold">{CONTACT_INFO.crp}</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
