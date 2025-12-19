
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, ArrowRight, Plus, Minus, BookOpen, Clock, ChevronRight, Share2, Tag } from 'lucide-react';
import { FAQS } from '../constants';

const Blog: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#duvidas') {
      const element = document.getElementById('duvidas');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const posts = [
    {
      id: 1,
      title: "O Papel da Psicanálise na Vida Contemporânea",
      excerpt: "Como uma teoria do século XIX ainda é a ferramenta mais eficaz para lidar com o estresse, a ansiedade digital e o esgotamento no século XXI em cidades em constante movimento.",
      date: "15 Junho, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=800",
      category: "Psicanálise"
    },
    {
      id: 2,
      title: "Construindo Diálogos Saudáveis em Família",
      excerpt: "A terapia familiar não serve para encontrar culpados, mas para entender como cada um pode contribuir para um ambiente mais harmônico e resiliente.",
      date: "05 Junho, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=800",
      category: "Família"
    },
    {
      id: 3,
      title: "A Crise da Adolescência: Quando Buscar Ajuda?",
      excerpt: "Entender a diferença entre o comportamento típico da idade e sinais de alerta que pedem uma escuta profissional especializada e acolhedora.",
      date: "28 Maio, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
      category: "Jovens"
    },
    {
      id: 4,
      title: "Maternidade e Carreira: O Equilíbrio Possível",
      excerpt: "A busca pela conciliação entre o papel materno e as ambições profissionais sob a ótica da saúde mental e do autocuidado genuíno.",
      date: "12 Maio, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1536640717440-c94fa12f360e?auto=format&fit=crop&q=80&w=800",
      category: "Saúde Mental"
    },
    {
      id: 5,
      title: "Lidando com o Luto na Era da Felicidade Compulsória",
      excerpt: "Como permitir-se viver as fases do luto em uma sociedade que exige produtividade e sorrisos constantes nas redes sociais.",
      date: "02 Maio, 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1516589174184-c6852b614b88?auto=format&fit=crop&q=80&w=800",
      category: "Reflexões"
    }
  ];

  return (
    <div className="pt-24 bg-sand min-h-screen">
      {/* Blog Hero */}
      <section className="py-20 bg-white border-b border-gold/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center shadow-2xl rotate-3">
              <BookOpen size={32} />
            </div>
          </div>
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Arquivo de Conhecimento</span>
          <h1 className="text-5xl md:text-7xl serif text-navy mb-8">Dúvidas & Reflexões</h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed italic">
            "A psicanálise é, em essência, um caminho para a verdade de cada um."
          </p>
        </div>
      </section>

      {/* Featured Article - Banner Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="group relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gold/5 flex flex-col lg:flex-row min-h-[500px] transition-all duration-700 hover:shadow-gold/20">
            <div className="lg:w-3/5 overflow-hidden">
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="lg:w-2/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gold/60 mb-6">
                <span className="bg-sand px-3 py-1 rounded-full text-gold">{posts[0].category}</span>
                <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
                <span>{posts[0].date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl serif text-navy mb-6 leading-tight group-hover:text-gold transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <button className="inline-flex items-center gap-3 text-navy font-black uppercase tracking-widest text-xs group-hover:text-gold transition-all border-b-2 border-navy/10 group-hover:border-gold pb-2">
                  Leia mais
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="text-gray-400 hover:text-gold transition-colors cursor-pointer">
                  <Share2 size={18} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* RECENT ARTICLES GRID SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Fique por dentro</span>
              <h2 className="text-4xl md:text-5xl serif text-navy leading-tight">Artigos Recentes</h2>
              <p className="text-gray-500 mt-4 font-light">Explore textos autorais sobre a mente humana e as relações sociais.</p>
            </div>
            <div className="hidden md:block">
              <div className="w-40 h-[1px] bg-gold/30"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.slice(1).map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:border-gold/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="overflow-hidden aspect-[16/10] relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
                    <Tag size={10} className="text-gold" />
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gold/60 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-gold/40" />
                      <span>{post.date}</span>
                    </div>
                    <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-gold/40" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl serif text-navy mb-4 leading-tight group-hover:text-gold transition-colors min-h-[3.5rem]">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3 mb-8">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <button className="flex items-center gap-2 text-navy font-bold text-[11px] uppercase tracking-widest group-hover:text-gold transition-all">
                      Leia mais
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Dúvidas Section */}
      <section className="py-24 bg-sand relative" id="duvidas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Central de Ajuda</span>
            <h2 className="text-4xl md:text-5xl serif text-navy mb-6">Perguntas Comuns</h2>
            <p className="text-gray-500 font-light text-lg">
              Informações úteis para quem está dando o primeiro passo em direção à análise e ao autoconhecimento.
            </p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`border rounded-[24px] transition-all duration-500 overflow-hidden ${openFaq === idx ? 'border-gold bg-white shadow-xl' : 'border-gray-200 bg-white/50 hover:bg-white hover:border-gold/30'}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-7 text-left outline-none"
                >
                  <span className={`font-bold md:text-lg transition-colors ${openFaq === idx ? 'text-gold' : 'text-navy'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-gold text-white rotate-180' : 'bg-sand text-gold'}`}>
                    {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div className={`px-7 transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="h-[1px] bg-gray-100 mb-6"></div>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
