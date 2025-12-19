
import React from 'react';
import { Award, BookOpen, Heart, CheckCircle, ShieldCheck, Sparkles, Coffee } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-sand min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 transform skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-900/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Uma trajetória de escuta e ética</span>
          <h1 className="text-5xl md:text-8xl serif mb-6 tracking-tight">Beatriz <span className="text-gold italic">Fauth</span></h1>
          <p className="text-xl md:text-2xl text-sand/80 max-w-3xl font-light leading-relaxed">
            Mais de três décadas de dedicação à clínica psicanalítica em Balneário Camboriú, integrando experiência acadêmica e sensibilidade humana.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-gold/30 rounded-full text-gold text-[10px] font-black uppercase tracking-widest">
              <CheckCircle size={14} /> {CONTACT_INFO.crp}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] font-black uppercase tracking-widest">
              <Sparkles size={14} /> Psicanálise & Transpessoal
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Bio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-gold/10 rounded-[40px] -z-10 translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-[40px] shadow-2xl group">
                <img 
                  src="/images/beatriz-profile.jpg" 
                  alt="Dra Beatriz Fauth - Psicanalista" 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-sand p-10 rounded-3xl shadow-xl hidden md:block">
                 <div className="text-center">
                    <p className="text-5xl font-bold text-navy serif leading-none mb-2">30+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gold">Anos de Prática Clínica</p>
                 </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10">
              <div>
                <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">Sobre a Profissional</span>
                <h2 className="text-4xl md:text-5xl serif text-navy leading-tight mb-8">O Compromisso com a Verdade do Sujeito</h2>
              </div>
              <div className="prose prose-lg text-gray-600 space-y-8 font-light leading-relaxed">
                <p>
                  Minha caminhada profissional iniciou-se há mais de três décadas, movida pelo desejo de compreender as profundezas da subjetividade humana. Ao longo deste percurso em Balneário Camboriú, consolidei uma escuta pautada no rigor da <strong>Psicanálise</strong>, mas sempre aberta às nuances da <strong>Psicologia Transpessoal</strong> e das novas demandas da alma contemporânea.
                </p>
                <p>
                  Atuar clinicamente por tanto tempo permitiu-me acompanhar gerações. Hoje, minha prática integra a escuta individual de adultos, o acompanhamento sensível de jovens em suas crises de identidade e a mediação de conflitos em dinâmicas familiares e de casais.
                </p>
                <p>
                  Cada atendimento é único. Meu papel não é dar respostas prontas ou conselhos, mas sim oferecer o suporte ético necessário para que cada paciente possa se escutar, reconhecer seus desejos e ressignificar sua história, aliviando o peso dos sintomas e da angústia.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-6 bg-sand rounded-2xl border border-gold/5 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Sigilo Ético</h4>
                    <p className="text-xs text-gray-500">Privacidade absoluta no atendimento.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-sand rounded-2xl border border-gold/5 transition-all hover:shadow-lg">
                   <div className="w-12 h-12 bg-gold text-navy rounded-xl flex items-center justify-center">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Acolhimento</h4>
                    <p className="text-xs text-gray-500">Espaço de escuta sem julgamentos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-6 block">Nossos Pilares</span>
          <h2 className="text-4xl md:text-6xl serif mb-16">Metodologia de Trabalho</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart />,
                title: "Humanização",
                text: "Tratar cada paciente como um ser singular, respeitando sua história, traumas e seu tempo subjetivo de cura."
              },
              {
                icon: <BookOpen />,
                title: "Rigor Teórico",
                text: "Formação contínua nas bases lacanianas e contemporâneas para uma direção de tratamento eficaz e ética."
              },
              {
                icon: <Sparkles />,
                title: "Transpessoal",
                text: "Abertura para as dimensões do ser que transcendem o ego, buscando um equilíbrio integral entre mente, corpo e espírito."
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl serif mb-6 text-gold">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl serif text-navy mb-8">Inicie sua jornada de autoconhecimento hoje.</h2>
          <p className="text-navy/70 text-lg md:text-xl mb-12 font-medium">
            Agende uma entrevista inicial e descubra como a psicanálise pode transformar sua percepção sobre a vida e seus relacionamentos.
          </p>
          <a 
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-navy text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-teal-900 transition-all shadow-2xl"
          >
            Agendar Consulta Online
            <Sparkles size={18} className="animate-pulse" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
