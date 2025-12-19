
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote, Clock, MapPin, Users, ArrowRight, Phone, Instagram, Facebook, ChevronLeft } from 'lucide-react';
import SchedulingTool from '../components/SchedulingTool';
import { SPECIALTIES, NEIGHBORHOODS, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      text: "A Dra. Beatriz possui uma sensibilidade única. O processo analítico com ela me permitiu redescobrir sentidos e atravessar momentos de profunda angústia com dignidade e clareza.",
      author: "Mariana S. Luz",
      role: "Empresária",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "O trabalho realizado com meu filho adolescente foi divisor de águas em nossa família. A forma como ela conduz o diálogo com os jovens é firme, ética e extremamente acolhedora.",
      author: "Ricardo Fontes",
      role: "Arquiteto",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Encontrei no consultório da Dra. Beatriz um espaço de silêncio e escuta que eu não acreditava ser mais possível no caos de hoje. Uma profissional de excelência técnica admirável.",
      author: "Juliana M. Costa",
      role: "Advogada",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "A terapia de casal nos ajudou a reestabelecer pontes que pareciam quebradas. A mediação da Dra. Beatriz é pautada na imparcialidade e na busca pela verdade de cada um.",
      author: "Carlos & Ana",
      role: "Casal em Terapia",
      image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-sand overflow-x-hidden">
      {/* Refined Hero Section with Parallax and Enhanced Overlay */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background Layer with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Consultório minimalista e elegante em Balneário Camboriú" 
            className="w-full h-full object-cover animate-subtle-zoom will-change-transform"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px) scale(1.15)`
            }}
          />
          {/* Enhanced Overlay for Maximum Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/98 via-navy/85 to-navy/60 md:from-navy/95 md:via-navy/75 md:to-navy/50"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:pt-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/30 border border-gold/50 text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Psicanálise & Terapia Familiar
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold serif text-white mb-6 leading-tight md:leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              A escuta que <span className="text-gold italic">acolhe</span>,<br className="hidden md:block" />
              a palavra que <span className="text-gold italic">transforma</span>.
            </h1>
            <p className="text-base md:text-2xl text-sand font-light mb-10 leading-relaxed max-w-xl border-l-4 border-gold/60 pl-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Dra. Beatriz Fauth oferece um espaço de escuta ética e sigilosa para quem busca equilíbrio emocional e autoconhecimento em Balneário Camboriú.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
              <Link 
                to="/contato" 
                className="bg-gold hover:bg-gold/90 text-navy font-black px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all transform hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center gap-3 group shadow-2xl shadow-gold/30"
              >
                AGENDAR CONSULTA
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                to="/sobre" 
                className="group flex items-center justify-center sm:justify-start gap-3 text-white font-bold tracking-widest text-xs md:text-sm hover:text-gold transition-colors py-2 drop-shadow-sm"
              >
                <span className="hidden sm:block w-12 h-[1px] bg-white group-hover:bg-gold group-hover:w-16 transition-all duration-300"></span>
                CONHEÇA MINHA TRAJETÓRIA
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 p-8 hidden md:block opacity-40">
           <p className="text-white text-[10px] uppercase tracking-[0.5em] vertical-text">Balneário Camboriú • SC</p>
        </div>
      </section>

      {/* Specialties Intro */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">Nossas Terapias</span>
          <h2 className="text-3xl md:text-5xl serif text-navy mb-8">Cuidando de cada fase da vida</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12 md:mb-16 text-base md:text-lg">
            A psicanálise é um convite para olhar para si mesmo de forma autêntica, permitindo a descoberta de novos sentidos para a existência.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec, idx) => (
              <div key={idx} className="group bg-sand p-8 md:p-10 rounded-3xl border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-2xl transition-all duration-500 text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 && <Star size={28} />}
                  {idx === 1 && <Users size={28} />}
                  {idx === 2 && <Clock size={28} />}
                </div>
                <h3 className="text-xl md:text-2xl serif text-navy mb-4">{spec.title}</h3>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">{spec.description}</p>
                <Link to={spec.path} className="text-navy font-bold text-sm md:text-base flex items-center gap-2 group-hover:text-gold transition-all">
                  Saiba mais <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 md:py-24 bg-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 border-l-4 border-t-4 border-gold/30 rounded-tl-3xl"></div>
              <img 
                src="/images/logo-beatriz.jpeg" 
                alt="Dra Beatriz Fauth" 
                className="w-full rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-navy p-6 md:p-10 rounded-2xl text-white shadow-2xl z-20">
                <p className="serif text-3xl md:text-5xl mb-1 text-gold">30+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-sand/60">Anos de Clínica</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <span className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">Experiência & Ética</span>
              <h2 className="text-3xl md:text-6xl serif text-navy mb-6">Uma jornada dedicada ao bem-estar mental</h2>
              <p className="text-gray-600 mb-6 text-lg md:text-xl leading-relaxed italic font-light">
                "A psicanálise não é apenas uma profissão, é uma postura ética diante do sofrimento humano."
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                Beatriz Fauth construiu sua carreira em Balneário Camboriú pautada na escuta sensível e no estudo contínuo. Sua abordagem integra a profundidade teórica com a humanização do atendimento clínico individual e familiar.
              </p>
              <Link to="/sobre" className="w-full sm:w-auto bg-navy hover:bg-teal-900 text-white font-bold px-8 py-4 rounded-lg inline-flex items-center justify-center gap-3 transition-all shadow-xl shadow-navy/20">
                Conheça minha trajetória
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods SEO */}
      <section className="py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl serif mb-6 text-gold px-4 leading-tight">Atendimento Localizado em Balneário Camboriú</h2>
          <p className="max-w-3xl mx-auto text-sand/60 mb-10 md:mb-12 text-base md:text-lg px-4 font-light leading-relaxed">
            Meu consultório atende clientes de todos os bairros da cidade com total conveniência:
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {NEIGHBORHOODS.map((neighborhood) => (
              <span 
                key={neighborhood} 
                className="px-3 md:px-5 py-2 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-[10px] md:text-sm hover:border-gold/50 hover:bg-gold hover:text-navy transition-all duration-300 font-medium cursor-default"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonials Section */}
      <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">Experiências Reais</span>
            <h2 className="text-4xl md:text-6xl serif text-navy mb-4">O Que Nossos Pacientes Dizem</h2>
            <div className="w-24 h-1 bg-gold/30 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white text-navy rounded-full shadow-xl flex items-center justify-center hover:bg-gold hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-gold/10"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white text-navy rounded-full shadow-xl flex items-center justify-center hover:bg-gold hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-gold/10"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Card */}
            <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px]">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex flex-col items-center transition-all duration-700 ease-in-out transform ${
                    idx === activeTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-2xl shadow-gold/5 border border-gold/5 relative w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-gold rounded-full blur-lg opacity-20 animate-pulse"></div>
                      <img 
                        src={t.image} 
                        alt={t.author} 
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-sand relative z-10"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-navy p-2 rounded-full text-gold z-20">
                        <Quote size={16} fill="currentColor" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <div className="flex justify-center md:justify-start gap-1 text-gold mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 text-lg md:text-xl italic font-light leading-relaxed mb-6">
                        "{t.text}"
                      </p>
                      <div>
                        <h4 className="text-navy font-bold text-lg uppercase tracking-wider">{t.author}</h4>
                        <p className="text-gold text-sm font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === activeTestimonial ? 'w-10 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Connection Section */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">Conexão Digital</span>
            <h2 className="text-3xl md:text-4xl serif text-navy">Instagram & Facebook</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-sand rounded-[32px] md:rounded-[40px] p-8 border border-gold/5 flex flex-col items-center justify-center min-h-[350px] md:min-h-[400px] text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-navy/20">
                <Instagram size={28} />
              </div>
              <h4 className="text-xl md:text-2xl serif text-navy mb-4">Acompanhe no Instagram</h4>
              <p className="text-gray-500 mb-8 max-w-sm text-sm md:text-base">Conteúdos semanais sobre saúde mental e psicanálise.</p>
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-navy text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-gold transition-all"
              >
                Seguir no Instagram
              </a>
            </div>
            <div className="bg-navy rounded-[32px] md:rounded-[40px] p-8 border border-white/5 flex flex-col items-center justify-center min-h-[350px] md:min-h-[400px] text-center text-white">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-navy rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-white/10">
                <Facebook size={28} />
              </div>
              <h4 className="text-xl md:text-2xl serif text-gold mb-4">Página no Facebook</h4>
              <p className="text-sand/60 mb-8 max-w-sm text-sm md:text-base">Artigos e notícias sobre psicologia e terapias familiares.</p>
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gold text-navy px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all"
              >
                Curtir no Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-sand" id="contato">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl serif text-navy mb-6">Pronta para te ouvir</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base px-4">Use nossa ferramenta interativa abaixo para selecionar seu atendimento e entrar em contato diretamente.</p>
          </div>
          <SchedulingTool />
        </div>
      </section>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s infinite alternate ease-in-out;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default Home;
