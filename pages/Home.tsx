
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Phone, MapPin, Clock, CheckCircle, Heart, Users, Brain, Sparkles } from 'lucide-react';
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

      {/* How First Session Works */}
      <section className="py-24 bg-white section-reveal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Como funciona a primeira consulta</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Um primeiro passo acolhedor em direção ao seu bem-estar emocional.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-light via-gold to-navy-light transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                { step: '1', title: 'Agendamento', desc: 'Entre em contato via WhatsApp ou telefone. Escolhemos juntos o melhor horário.' },
                { step: '2', title: 'Acolhimento', desc: 'Na primeira sessão, você é acolhido em um ambiente seguro e sigiloso.' },
                { step: '3', title: 'Escuta', desc: 'Compartilhe suas questões no seu tempo. Não há julgamentos, apenas escuta.' },
                { step: '4', title: 'Caminho', desc: 'Juntos, traçamos um plano terapêutico personalizado para suas necessidades.' }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-semibold text-navy mb-2 serif">{item.title}</h3>
                    <p className="text-gray-600 font-light">{item.desc}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-navy-light to-navy flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a 
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar minha primeira consulta`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white font-semibold px-10 py-4 rounded-full inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Agendar minha consulta
              <ArrowRight size={18} />
            </a>
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
