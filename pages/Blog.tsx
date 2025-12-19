
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { FAQS, BLOG_POSTS, CONTACT_INFO } from '../constants';

const Blog: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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

  return (
    <div className="pt-24 bg-sand min-h-screen">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl serif mb-4">Blog Mente Saudável</h1>
          <p className="text-sand/70 text-lg max-w-2xl mx-auto">
            Artigos sobre Psicologia. Se mantenha informado com dicas, sugestões, notícias e artigos, para viver uma vida mental, psicológica e emocional mais equilibrada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
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
                  <h2 className="text-xl font-bold text-navy mb-3 serif">{post.title}</h2>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors">
                    Leia mais <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="py-20 bg-white scroll-mt-24">
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
                className="bg-sand rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between text-navy font-bold hover:bg-sand/80 transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown 
                    size={24} 
                    className={`transform transition-transform text-gold ${activeFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Estou no site *Beatriz Fauth: Psicologia e Psicanálise* e preciso de informações. Pode me ajudar?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Com dúvidas? Fale comigo!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
