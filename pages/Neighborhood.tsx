import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, ArrowRight, Clock, Heart, Users, Brain, Sparkles } from 'lucide-react';
import { NEIGHBORHOODS_DATA, CONTACT_INFO } from '../constants';

const Neighborhood: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = NEIGHBORHOODS_DATA.find(n => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (neighborhood) {
      document.title = neighborhood.title;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', neighborhood.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = neighborhood.description;
        document.head.appendChild(meta);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', neighborhood.keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = neighborhood.keywords;
        document.head.appendChild(meta);
      }

      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }

      const schemaData = {
        "@context": "https://schema.org",
        "@type": "Psychologist",
        "name": "Beatriz Fauth",
        "description": neighborhood.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Balneário Camboriú",
          "addressRegion": "SC",
          "addressCountry": "BR",
          "streetAddress": CONTACT_INFO.address
        },
        "telephone": CONTACT_INFO.phone,
        "email": CONTACT_INFO.email,
        "areaServed": neighborhood.name,
        "priceRange": "$$",
        "image": `${window.location.origin}/images/beatriz-profile.jpg`,
        "url": window.location.href
      };

      schemaScript.textContent = JSON.stringify(schemaData);
    }
  }, [neighborhood]);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-cream">
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)' }}>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect rounded-full text-white text-sm font-medium mb-6">
            <MapPin size={16} className="text-gold" />
            <span>Atendimento em {neighborhood.name}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight serif">
            Psicóloga e Psicanalista no {neighborhood.name}
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Atendimento psicológico especializado em Balneário Camboriú com mais de 30 anos de experiência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta. Sou do bairro ${neighborhood.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white font-semibold rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(74,124,126,0.5)] transition-all duration-500 hover:-translate-y-1"
            >
              <span>Agendar Primeira Consulta</span>
              <ArrowRight size={20} />
            </a>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 glass-effect text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span>Conhecer Minha Abordagem</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 serif">
              Por que escolher atendimento no {neighborhood.name}?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
              {neighborhood.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              {[
                { icon: CheckCircle, text: 'Localização próxima e acessível' },
                { icon: Heart, text: 'Consultório confortável e sigiloso' },
                { icon: Users, text: 'Atendimento presencial e online' },
                { icon: Clock, text: 'Mais de 30 anos transformando vidas' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-sand hover:bg-rose/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <item.icon size={24} className="text-[#4A7C7E]" />
                  </div>
                  <span className="text-navy font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-navy mb-4 mt-12 serif">
              Principais queixas dos moradores do {neighborhood.name}
            </h3>
            <ul className="space-y-3 mb-10">
              {[
                'Ansiedade e estresse do dia a dia',
                'Depressão e tristeza profunda',
                'Dificuldades em relacionamentos',
                'Busca por autoconhecimento',
                'Transtornos emocionais',
                'Questões familiares'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600 font-light">
                  <CheckCircle size={20} className="text-[#4A7C7E] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
              <div key={index} className="text-center p-8 rounded-2xl bg-white hover:bg-rose/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sand flex items-center justify-center text-navy-light group-hover:bg-navy group-hover:text-white transition-all duration-300 shadow-md">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3 serif">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center serif">
            Como funciona a primeira consulta?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg font-light mb-10 text-center max-w-3xl mx-auto">
            Na primeira sessão, vamos conversar sobre suas necessidades e construir juntos um caminho terapêutico personalizado. O ambiente é acolhedor e todas as informações são confidenciais.
          </p>

          <div className="bg-gradient-to-br from-[#4A7C7E]/5 to-[#5B8C8E]/5 rounded-3xl p-8 md:p-12 border-2 border-[#4A7C7E]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#4A7C7E] flex items-center justify-center flex-shrink-0">
                <Heart size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2 serif">Depoimento de paciente do {neighborhood.name}</h3>
                <p className="text-gray-700 italic leading-relaxed font-light">
                  "{neighborhood.testimonial}"
                </p>
                <p className="text-gray-500 text-sm mt-3">- Paciente anônimo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 serif">
            Agende sua consulta no {neighborhood.name}
          </h2>
          <p className="text-gray-600 text-lg font-light mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo em direção ao seu bem-estar emocional. Entre em contato e agende sua primeira consulta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={20} className="text-[#4A7C7E]" />
              <span className="font-medium">{CONTACT_INFO.phone}</span>
            </div>
            <span className="hidden sm:block text-gray-300">|</span>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={20} className="text-[#4A7C7E]" />
              <span className="font-medium">{CONTACT_INFO.address}</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(`Olá! Gostaria de agendar minha primeira consulta. Sou do bairro ${neighborhood.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4A7C7E] to-[#5B8C8E] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            <Phone size={20} />
            <span>Agendar Primeira Consulta</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 text-center serif">
            Atendimento em outros bairros de Balneário Camboriú
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {NEIGHBORHOODS_DATA.filter(n => n.slug !== slug).map((n) => (
              <Link
                key={n.slug}
                to={`/bairro/${n.slug}`}
                className="p-4 bg-sand rounded-xl hover:bg-rose/30 hover:-translate-y-1 transition-all duration-300 text-center group shadow-sm hover:shadow-md"
              >
                <MapPin size={20} className="text-[#4A7C7E] mx-auto mb-2" />
                <span className="text-navy font-medium text-sm group-hover:text-[#4A7C7E] transition-colors">
                  {n.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neighborhood;
