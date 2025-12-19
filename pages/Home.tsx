
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Phone, MapPin, Clock, CheckCircle, Heart, Users, Brain, Sparkles } from 'lucide-react';
import SchedulingTool from '../components/SchedulingTool';
import { SCHEDULING_SERVICES, FAQS, BLOG_POSTS, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
      {/* Hero Section - Delicate & Welcoming */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-32 pb-20 hero-pattern bg-gradient-to-b from-white to-sand">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-5/12 animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-rose/50 to-navy/10 rounded-3xl blur-2xl opacity-50"></div>
                <img 
                  src="/images/logo-beatriz.jpeg" 
                  alt="Beatriz Fauth - Psicóloga e Psicanalista"
                  className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover mx-auto shadow-2xl border-4 border-white"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>
            
            {/* Text Side */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <p className="text-navy-light text-sm font-medium tracking-wide mb-4 animate-fade-in-up-delay-1">
                Psicanálise e Psiquiatria em Balneário Camboriú
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold serif text-navy mb-6 leading-tight animate-fade-in-up-delay-2" style={{ lineHeight: '1.2' }}>
                Um espaço seguro para seu cuidado emocional
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light mb-8 leading-relaxed animate-fade-in-up-delay-3" style={{ lineHeight: '1.7' }}>
                Há mais de 30 anos, acolho pessoas em sua jornada de autoconhecimento e bem-estar emocional. Meu compromisso é oferecer um ambiente de confiança, onde você possa se expressar livremente e encontrar caminhos para uma vida mais plena.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up-delay-4">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Olá! Gostaria de agendar uma consulta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white font-semibold px-10 py-4 rounded-full text-center flex items-center justify-center gap-3 animate-gentle-pulse"
                >
                  Agende sua primeira consulta
                  <ArrowRight size={18} />
                </a>
                <Link 
                  to="/sobre" 
                  className="btn-secondary border-2 border-navy text-navy font-semibold px-8 py-4 rounded-full text-center hover:bg-navy hover:text-white"
                >
                  Conheça minha abordagem
                </Link>
              </div>
            </div>
          </div>
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
              <div key={index} className="text-center p-8 rounded-2xl bg-sand hover:bg-rose/30 transition-all duration-300 group">
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
            {/* Timeline Line */}
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
              className="btn-primary text-white font-semibold px-10 py-4 rounded-full inline-flex items-center gap-3"
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
              Realizo atendimento psicológico online e presencial para pessoas acima de 8 anos com sintomas de depressão, angústia, ansiedade, dificuldades de relacionamento, entre outras questões.
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
              Tire suas dúvidas sobre o processo terapêutico. Caso não encontre sua resposta, entre em contato.
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
      <section className="py-24 bg-navy text-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
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
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-gold mb-6 serif">Informações de Contato</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Localização</p>
                      <p className="text-white/60 font-light">Rua 1021, 254, sala 3, em Balneário Camboriú.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Horário de Atendimento</p>
                      <p className="text-white/60 font-light">Segunda à sexta de 08:00 às 18:00<br/>Sábados de 08:00 às 12:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
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
