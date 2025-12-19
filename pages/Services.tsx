
import React, { useEffect } from 'react';
import { User, Users, Baby, ArrowRight, Monitor, UsersRound, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-24 bg-sand min-h-screen">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-gold/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-10 right-10 w-96 h-96 bg-gold rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">Abordagens Clínicas</span>
          <h1 className="text-5xl md:text-7xl serif text-navy mb-8">Especialidades e Cuidados</h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
            Oferecemos diferentes modalidades de atendimento adaptadas às necessidades específicas de cada fase da vida, sempre pautadas na ética e no rigor da escuta psicanalítica.
          </p>
        </div>
      </section>

      {/* Individual */}
      <section id="individual" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 text-gold mb-6">
                <User size={28} />
                <span className="uppercase tracking-[0.3em] font-black text-[10px]">Aprofundamento Subjetivo</span>
              </div>
              <h2 className="text-4xl md:text-5xl serif text-navy mb-8 leading-tight">Psicanálise Individual</h2>
              <div className="prose prose-lg text-gray-600 space-y-6 font-light">
                <p>A psicanálise individual é um convite para que o sujeito possa se defrontar com sua própria verdade. Através da fala livre, buscamos desvelar o que está por trás dos sintomas que causam sofrimento.</p>
                <p>É indicada para quem busca lidar com:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold rounded-full"></div> Ansiedade e Pânico</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold rounded-full"></div> Depressão e Apatia</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold rounded-full"></div> Inseguranças Profissionais</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold rounded-full"></div> Lutos e Separações</li>
                </ul>
                <p className="mt-8 italic text-gold font-medium">"Onde o isso era, o Eu deve advir." — Sigmund Freud</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gold/10 rounded-[40px] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[40px] shadow-2xl relative z-10 w-full" 
                alt="Consultório de Psicanálise Individual" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Familiar & Casal */}
      <section id="familiar" className="py-24 bg-sand scroll-mt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 text-gold mb-6">
                <Users size={28} />
                <span className="uppercase tracking-[0.3em] font-black text-[10px]">Vínculos e Relações</span>
              </div>
              <h2 className="text-4xl md:text-5xl serif text-navy mb-8 leading-tight">Terapia de Casal e Familiar</h2>
              <div className="space-y-8 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  As relações familiares são o berço de nossa subjetividade, mas também podem se tornar fontes de conflitos profundos. Nossa abordagem visa reestabelecer a fluidez do diálogo, permitindo que cada membro compreenda seu papel na dinâmica familiar.
                </p>
                <div className="bg-white/50 p-8 rounded-3xl border border-gold/10">
                   <h4 className="font-bold text-navy mb-4 serif text-xl">Para Casais:</h4>
                   <p className="text-sm">Trabalhamos a escuta do casal para além das queixas superficiais, buscando entender as projeções inconscientes que sabotam a parceria e o afeto.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[40px] shadow-2xl w-full" 
                alt="Terapia de Casal e Família" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grupo */}
      <section id="grupo" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <div className="flex items-center gap-3 text-gold mb-6">
                <UsersRound size={28} />
                <span className="uppercase tracking-[0.3em] font-black text-[10px]">Experiência Compartilhada</span>
              </div>
              <h2 className="text-4xl md:text-5xl serif text-navy mb-8 leading-tight">Terapia de Grupo</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                O grupo terapêutico funciona como um espelho múltiplo. A troca de experiências entre pessoas que atravessam desafios semelhantes, sob a mediação técnica do analista, potencializa o processo de cura e diminui a sensação de isolamento.
              </p>
              <div className="flex flex-wrap gap-4">
                 <span className="bg-sand px-4 py-2 rounded-full text-navy font-bold text-xs border border-gold/10">Ambiente Seguro</span>
                 <span className="bg-sand px-4 py-2 rounded-full text-navy font-bold text-xs border border-gold/10">Troca Ética</span>
                 <span className="bg-sand px-4 py-2 rounded-full text-navy font-bold text-xs border border-gold/10">Crescimento Coletivo</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg h-64 object-cover w-full" alt="Terapia de Grupo 1" />
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg h-64 object-cover w-full mt-8" alt="Terapia de Grupo 2" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jovens & Online */}
      <section id="jovens" className="py-24 bg-navy text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Jovens */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-gold mb-4">
                <Baby size={28} />
                <span className="uppercase tracking-widest font-black text-[10px]">Novas Gerações</span>
              </div>
              <h3 className="text-3xl md:text-4xl serif text-white">Atendimento a Jovens</h3>
              <p className="text-sand/60 text-lg leading-relaxed font-light">
                A adolescência é o tempo da construção da própria voz. Oferecemos um espaço onde o jovem pode falar sobre suas angústias sem a pressão do julgamento parental ou escolar, auxiliando na descoberta de sua identidade e vocação.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <p className="text-sm italic text-gold">"Escutar o jovem é validar sua existência em um mundo de cobranças excessivas."</p>
              </div>
            </div>

            {/* Online */}
            <div id="online" className="space-y-8 scroll-mt-24">
              <div className="flex items-center gap-3 text-gold mb-4">
                <Monitor size={28} />
                <span className="uppercase tracking-widest font-black text-[10px]">Sem Fronteiras</span>
              </div>
              <h3 className="text-3xl md:text-4xl serif text-white">Terapia Online</h3>
              <p className="text-sand/60 text-lg leading-relaxed font-light">
                Utilizando plataformas seguras de videoconferência, levamos a escuta analítica a pacientes de qualquer lugar do mundo. Esta modalidade oferece a mesma qualidade e rigor ético do presencial, com a conveniência do seu ambiente doméstico.
              </p>
              <ul className="space-y-3 text-sm text-sand/80">
                <li className="flex items-center gap-3"><Sparkles size={14} className="text-gold" /> Plataformas Criptografadas</li>
                <li className="flex items-center gap-3"><Sparkles size={14} className="text-gold" /> Flexibilidade de Horários</li>
                <li className="flex items-center gap-3"><Sparkles size={14} className="text-gold" /> Atendimento Nacional e Internacional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl serif text-navy mb-8">Escolha o seu caminho para o equilíbrio.</h2>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-3 bg-gold text-navy font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-gold/20"
          >
            Agendar Agora via WhatsApp
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
