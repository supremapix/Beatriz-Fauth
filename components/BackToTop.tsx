
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 z-50 w-12 h-12 bg-white border-2 border-navy-light text-navy-light rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-navy hover:text-white hover:border-navy hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
      aria-label="Voltar ao topo"
      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;
