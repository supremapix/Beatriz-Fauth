
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import SchedulingTool from '../components/SchedulingTool';
import { SCHEDULING_SERVICES, FAQS, BLOG_POSTS, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-sand overflow-x-hidden">
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 bg-navy"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/logo-beatriz.jpeg" 
                alt="Beatriz Fauth - Psicóloga e Psicanalista"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto border-4 border-gold/30 shadow-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-gold text-sm uppercase tracking-widest mb-4">Beatriz Fauth Psicologia e Psicanálise</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold serif text-white mb-6 leading-tight">
                Terapias para uma vida melhor
              </h1>
              <p className="text-lg md:text-xl text-sand/80 font-light mb-8 leading-relaxed">
                Por meio de experiência pessoal e estudos na área da psicologia, ajudarei você a alcançar bem-estar emocional e mental. Ofereço um ambiente acolhedor e seguro para explorar suas preocupações e trabalhar em conjunto para superar desafios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/contato" 
                  className="bg-gold hover:bg-gold/90 text-navy font-black px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-3"
                >
                  AGENDAR CONSULTA
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-8 py-4 rounded-lg transition-all text-center"
                >
                  FALE COMIGO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Nossas Terapias</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Oferecemos diferentes modalidades de atendimento adaptadas às necessidades específicas de cada fase da vida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCHEDULING_SERVICES.map((service) => (
              <div key={service.id} className="group bg-sand rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.id === 'grupo' ? '/images/terapia-grupo-large.jpg' : 
                         service.id === 'casal' ? '/images/terapia-casal-large.jpg' : 
                         service.id === 'individual' ? '/images/terapia-individual-large.jpg' : 
                         service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2 serif">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <Link 
                    to={`/servicos#${service.id}`}
                    className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors"
                  >
                    Saiba mais <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand" id="agendar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Agendar sessão!</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Realizo atendimento psicológico online às pessoas de idade superior a 8 anos com sintomas de depressão, angústia, ansiedade, tristeza, dificuldades no relacionamento, entre outras situações que estejam lhe incomodando.
            </p>
          </div>
          <SchedulingTool />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Blog Mente Saudável</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Artigos sobre Psicologia. Se mantenha informado com dicas, sugestões, notícias e artigos, para viver uma vida mental, psicológica e emocional mais equilibrada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group bg-sand rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2 serif line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    to="/blog"
                    className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors"
                  >
                    Leia mais <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif text-navy mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Abaixo você tem acesso as dúvidas mais frequentes, relatadas pelos meus pacientes, caso não encontre a sua resposta, por favor, entre em contato comigo.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-navy font-bold hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight 
                    size={20} 
                    className={`transform transition-transform ${activeFaq === index ? 'rotate-90' : ''}`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Estou no site *Beatriz Fauth: Psicologia e Psicanálise* e preciso de informações. Pode me ajudar?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Com dúvidas? Fale comigo!
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <p className="text-gold text-sm uppercase tracking-widest mb-4">Psicóloga e Psicanalista</p>
              <h2 className="text-3xl md:text-4xl serif text-white mb-6">Beatriz Fauth</h2>
              <p className="text-sand/80 mb-6 leading-relaxed">
                Está buscando um caminho para o autoconhecimento, bem-estar e realização pessoal? A psicóloga e psicanalista Beatriz Fauth, {CONTACT_INFO.crp}, te convida a embarcar nessa jornada.
              </p>
              <p className="text-sand/80 mb-8 leading-relaxed">
                <strong>Com experiência na área, por meio de vivência, formação e estudo em mais de 3 décadas</strong>, Beatriz oferece um espaço acolhedor e seguro para você explorar suas emoções, pensamentos e comportamentos, buscando entender suas raízes e construir uma vida mais plena e autêntica.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gold" />
                  <span>Consultório bem localizado para os pacientes presenciais</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gold" />
                  <span>Atendo online, tornando mais fácil e prática a terapia ao paciente</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gold" />
                  <span>Especializado em diferentes áreas</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gold" />
                  <span>Mais de duas décadas de atendimentos psicológicos</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-gold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-gold mt-1" />
                    <div>
                      <p className="font-bold">Localização</p>
                      <p className="text-sand/70">Rua 1021, 254, sala 3, em Balneário Camboriú.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-gold mt-1" />
                    <div>
                      <p className="font-bold">Horário de Atendimento</p>
                      <p className="text-sand/70">Segunda à sexta de 08:00 às 18:00.<br/>Aos sábados de 08:00 às 12:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-gold mt-1" />
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <p className="text-sand/70">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/contato"
                  className="mt-8 w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  Agende uma Consulta Agora
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
