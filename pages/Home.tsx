
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Phone, MapPin, Clock, CheckCircle, Heart, Users, Brain, Sparkles, Calendar, Mic, HandHeart, Compass, Info } from 'lucide-react';
import SchedulingTool from '../components/SchedulingTool';
import { SCHEDULING_SERVICES, FAQS, BLOG_POSTS, CONTACT_INFO } from '../constants';

const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const useCountUp = (end: number, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, start, duration]);

  return { count, ref };
};

const particleData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: 12 + Math.random() * 8,
}));

const Particles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particleData.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const typewriterText = useTypewriter(['cura', 'transformação', 'acolhimento', 'autoconhecimento'], 120, 80, 2500);
  
  const counter1 = useCountUp(30, 2000);
  const counter2 = useCountUp(1000, 2500);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-reveal').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timelineVisible) {
          setTimelineVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => timelineObserver.disconnect();
  }, [timelineVisible]);

  return (
    <div className="bg-cream overflow-x-hidden">
      {/* CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)' }}>
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        {/* Floating Particles */}
        <Particles />
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Side */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
                <span className="animate-sparkle text-lg">✨</span>
                <span>+30 anos transformando vidas</span>
              </div>
              
              {/* Title with Typewriter */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white/80 text-lg md:text-xl font-light tracking-widest uppercase mb-4 animate-fade-in-up-delay-1">
                  Seu espaço de
                </span>
                <span className="block gradient-text serif animate-fade-in-up-delay-2">
                  {typewriterText}
                  <span className="typewriter-cursor"></span>
                </span>
              </h1>
              
              {/* Subtitle with Word Animation */}
              <p className="text-xl md:text-2xl text-white/80 font-light mb-6 animate-fade-in-up-delay-3">
                Psicanálise e Psiquiatria com escuta profunda
              </p>
              
              {/* Description with Blur Reveal */}
              <p className="text-lg text-white/60 font-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed blur-reveal" style={{ animationDelay: '1.5s' }}>
                Um ambiente acolhedor onde cada palavra importa. Juntos, exploraremos caminhos para o seu bem-estar emocional e autoconhecimento profundo.
              </p>
              
              {/* CTAs with Shimmer Effect */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up-delay-4">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar minha primeira consulta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer group bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white font-semibold px-10 py-5 rounded-full flex items-center justify-center gap-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(74,124,126,0.5)] transition-all duration-500 hover:-translate-y-1"
                >
                  <span>Agendar Primeira Consulta</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link 
                  to="/sobre"
                  className="glass-effect text-white font-medium px-8 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300"
                >
                  <span>Conhecer Minha Abordagem</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div ref={counter1.ref} className="text-center animate-fade-in-up" style={{ animationDelay: '2s' }}>
                  <div className="text-4xl font-bold text-white mb-1">{counter1.count}+</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Anos de Experiência</div>
                </div>
                <div ref={counter2.ref} className="text-center animate-fade-in-up" style={{ animationDelay: '2.2s' }}>
                  <div className="text-4xl font-bold text-white mb-1">{counter2.count}+</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Vidas Transformadas</div>
                </div>
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '2.4s' }}>
                  <div className="text-2xl text-gold mb-1">⭐⭐⭐⭐⭐</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Avaliação dos Pacientes</div>
                </div>
              </div>
            </div>
            
            {/* Image Side with 3D Effects */}
            <div className="relative order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative max-w-md mx-auto">
                {/* Image with Glow */}
                <div className="relative tilt-3d">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#4A7C7E] to-[#E8D5D5] rounded-3xl filter blur-xl opacity-50 image-glow-pulse"></div>
                  <img 
                    src="/images/logo-beatriz.jpeg" 
                    alt="Beatriz Fauth - Psicóloga e Psicanalista"
                    className="relative w-full rounded-3xl shadow-2xl border-2 border-white/20"
                  />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 md:-left-12 glass-effect rounded-2xl px-4 py-3 floating-card floating-card-1 hidden md:flex items-center gap-3 shadow-xl">
                  <span className="text-2xl">🧠</span>
                  <span className="text-white font-medium text-sm">Autoconhecimento</span>
                </div>
                
                <div className="absolute top-1/2 -right-4 md:-right-16 glass-effect rounded-2xl px-4 py-3 floating-card floating-card-2 hidden md:flex items-center gap-3 shadow-xl">
                  <span className="text-2xl">💚</span>
                  <span className="text-white font-medium text-sm">Bem-estar</span>
                </div>
                
                <div className="absolute -bottom-4 left-1/4 glass-effect rounded-2xl px-4 py-3 floating-card floating-card-3 hidden md:flex items-center gap-3 shadow-xl">
                  <span className="text-2xl">🌟</span>
                  <span className="text-white font-medium text-sm">Transformação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '3s' }}>
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel"></div>
          </div>
          <span className="text-white/50 text-sm tracking-widest uppercase">Role para descobrir</span>
        </div>
      </section>

      {/* Why Psychoanalysis Section */}
      <section className="py-24 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Por que escolher a psicanálise?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              A psicanálise oferece um caminho profundo para o autoconhecimento e transformação pessoal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: 'Autoconhecimento', desc: 'Descubra suas motivações inconscientes e padrões de comportamento.' },
              { icon: Heart, title: 'Alívio de Sintomas', desc: 'Trabalhe as causas profundas da ansiedade, depressão e angústias.' },
              { icon: Users, title: 'Melhores Relacionamentos', desc: 'Desenvolva conexões mais saudáveis e autênticas.' },
              { icon: Sparkles, title: 'Vida Plena', desc: 'Construa uma existência mais autêntica e significativa.' }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-sand hover:bg-rose/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center text-navy-light group-hover:bg-navy group-hover:text-white transition-all duration-300 shadow-md">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3 serif">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-sand section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Modalidades de Atendimento</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Oferecemos diferentes modalidades adaptadas às necessidades específicas de cada fase da vida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCHEDULING_SERVICES.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.id === 'grupo' ? '/images/terapia-grupo-large.jpg' : 
                         service.id === 'casal' ? '/images/terapia-casal-large.jpg' : 
                         service.id === 'individual' ? '/images/terapia-individual-large.jpg' : 
                         service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2 serif">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 font-light">{service.description}</p>
                  <Link 
                    to={`/servicos#${service.id}`}
                    className="inline-flex items-center gap-2 text-navy-light font-medium hover:text-navy transition-colors group/link"
                  >
                    Saiba mais 
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How First Session Works - Cinematographic Timeline */}
      <section ref={timelineRef} className="py-24 md:py-32 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden section-reveal">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="timeline-blob timeline-blob-1"></div>
          <div className="timeline-blob timeline-blob-2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[rgba(91,140,142,0.1)] border border-[rgba(91,140,142,0.2)] rounded-full text-[#4A7C7E] text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-[#4A7C7E] rounded-full badge-dot-pulse"></span>
              Processo simples e acolhedor
            </span>
            <h2 className="text-3xl md:text-5xl serif text-[#2C5364] mb-5 leading-tight">
              Como funciona a primeira consulta
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Um primeiro passo acolhedor em direção ao seu bem-estar emocional.
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-[60px] top-16 bottom-16 w-0.5 bg-[rgba(91,140,142,0.2)]">
              <div className={`timeline-progress-line w-full bg-gradient-to-b from-[#4A7C7E] to-[#5B8C8E] ${timelineVisible ? 'animate' : ''}`}></div>
            </div>
            
            {/* Steps */}
            <div className="space-y-8 md:space-y-12">
              {[
                { 
                  step: 1, 
                  title: 'Agendamento', 
                  desc: 'Entre em contato via WhatsApp ou telefone. Escolhemos juntos o melhor horário para você.',
                  details: ['Resposta rápida', 'Horários flexíveis'],
                  Icon: Calendar
                },
                { 
                  step: 2, 
                  title: 'Acolhimento', 
                  desc: 'Na primeira sessão, você é acolhido em um ambiente seguro e sigiloso. Sem pressa, sem julgamentos.',
                  details: ['Ambiente privado', 'Total sigilo'],
                  Icon: Heart
                },
                { 
                  step: 3, 
                  title: 'Escuta', 
                  desc: 'Compartilhe suas questões no seu tempo. Não há julgamentos, apenas escuta atenta e empática.',
                  details: ['Sem pressa', 'Escuta profunda'],
                  Icon: Mic
                },
                { 
                  step: 4, 
                  title: 'Caminho', 
                  desc: 'Juntos, traçamos um plano terapêutico personalizado para suas necessidades e objetivos.',
                  details: ['Plano personalizado', 'Objetivos claros'],
                  Icon: Compass
                }
              ].map((item, index) => (
                <div key={index} className={`timeline-step-reveal flex items-start gap-6 md:gap-10 group ${timelineVisible ? 'visible' : ''}`} style={{ transitionDelay: `${0.2 + index * 0.2}s` }}>
                  {/* Step Marker */}
                  <div className="relative flex-shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] flex items-center justify-center">
                    <div className="relative w-14 md:w-20 h-14 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:shadow-xl">
                      <div className="w-10 md:w-[60px] h-10 md:h-[60px] bg-gradient-to-br from-[#4A7C7E] to-[#5B8C8E] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg md:text-2xl">{item.step}</span>
                      </div>
                    </div>
                    <div className="absolute inset-[-10px] border-2 border-[#4A7C7E] rounded-full marker-pulse-ring"></div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="flex-1 relative bg-white rounded-3xl p-6 md:p-10 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden card-border-reveal">
                    {/* Icon with glow */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-[-10px] bg-[radial-gradient(circle,rgba(91,140,142,0.3)_0%,transparent_70%)] rounded-full icon-glow-pulse"></div>
                      <div className="relative w-16 h-16 bg-[rgba(91,140,142,0.1)] rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#4A7C7E] group-hover:to-[#5B8C8E] transition-all duration-300">
                        <item.Icon className="w-8 h-8 text-[#4A7C7E] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#2C5364] mb-3 serif">{item.title}</h3>
                    <p className="text-gray-500 font-light mb-5 leading-relaxed">{item.desc}</p>
                    
                    {/* Details */}
                    <div className="flex flex-wrap gap-3">
                      {item.details.map((detail, i) => (
                        <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(91,140,142,0.05)] rounded-full text-sm text-[#4A7C7E] font-medium">
                          <CheckCircle size={16} className="text-[#4A7C7E]" />
                          {detail}
                        </span>
                      ))}
                    </div>
                    
                    {/* Decorative number */}
                    <div className="absolute top-4 right-6 md:right-8 text-[80px] md:text-[120px] font-black text-[rgba(91,140,142,0.05)] leading-none pointer-events-none">
                      0{item.step}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 md:mt-20">
            <a 
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar minha primeira consulta`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer btn-ripple-effect inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 text-lg font-semibold text-white bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 mb-5"
            >
              <span>Agendar minha consulta</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Info size={16} className="text-[#4A7C7E]" />
              Primeira consulta sem compromisso de continuidade
            </p>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-24 bg-sand section-reveal" id="agendar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Agende sua sessão</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Realizo atendimento psicológico online e presencial para pessoas acima de 8 anos.
            </p>
          </div>
          <SchedulingTool />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Blog Mente Saudável</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Artigos sobre Psicologia para ajudar você a viver uma vida emocional mais equilibrada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group bg-sand rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-navy text-white text-xs px-3 py-1 rounded-full font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy mb-2 serif line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 font-light">{post.excerpt}</p>
                  <Link 
                    to="/blog"
                    className="inline-flex items-center gap-2 text-navy-light font-medium hover:text-navy transition-colors group/link"
                  >
                    Leia mais 
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-sand section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Tire suas dúvidas sobre o processo terapêutico.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between text-navy font-medium hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight 
                    size={20} 
                    className={`transform transition-transform duration-300 text-navy-light ${activeFaq === index ? 'rotate-90' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-600 font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre o atendimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Tire suas dúvidas comigo
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 section-reveal" style={{ background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 text-white">
              <p className="text-gold text-sm font-medium tracking-wide mb-4">Psicóloga e Psicanalista</p>
              <h2 className="text-3xl md:text-4xl serif text-white mb-6">Beatriz Fauth</h2>
              <p className="text-white/70 mb-6 leading-relaxed text-lg font-light">
                Está buscando um caminho para o autoconhecimento, bem-estar e realização pessoal? A psicóloga e psicanalista Beatriz Fauth, {CONTACT_INFO.crp}, te convida a embarcar nessa jornada.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed font-light">
                <strong className="text-white">Com experiência na área, por meio de vivência, formação e estudo em mais de 3 décadas</strong>, Beatriz oferece um espaço acolhedor e seguro para você explorar suas emoções, pensamentos e comportamentos.
              </p>
              
              <div className="space-y-4">
                {[
                  'Consultório bem localizado em Balneário Camboriú',
                  'Atendimento online para maior comodidade',
                  'Especialização em diversas áreas da psicanálise',
                  'Mais de três décadas de experiência clínica'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle size={20} className="text-gold flex-shrink-0" />
                    <span className="text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gold mb-6 serif">Informações de Contato</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div className="text-white">
                      <p className="font-medium mb-1">Localização</p>
                      <p className="text-white/60 font-light">Rua 1021, 254, sala 3, em Balneário Camboriú.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div className="text-white">
                      <p className="font-medium mb-1">Horário de Atendimento</p>
                      <p className="text-white/60 font-light">Segunda à sexta de 08:00 às 18:00<br/>Sábados de 08:00 às 12:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div className="text-white">
                      <p className="font-medium mb-1">WhatsApp</p>
                      <p className="text-white/60 font-light">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar uma consulta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
                >
                  Agendar minha consulta agora
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
