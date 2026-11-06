import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Monitor,
  MapPin,
  Leaf,
  Users,
  UserRound,
} from "lucide-react";
import { BLOG_POSTS, CONTACT_INFO, NEIGHBORHOODS_DATA } from "../constants";
import {
  WhatsAppLink,
  PageIntro,
  ContactBand,
  FAQ,
  ArticleCards,
  LocationCard,
} from "../components/UI";
import { TopicCards } from "./Topics";
import ContactForm from "../components/ContactForm";
const services = [
  {
    id: "individual",
    label: "01",
    title: "Atendimento individual",
    text: "Um espaço para falar sobre sentimentos, relações, dúvidas e experiências que fazem parte da sua história.",
    image: "/images/terapia-individual-large.jpg",
    icon: UserRound,
  },
  {
    id: "casal",
    label: "02",
    title: "Terapia de casal e familiar",
    text: "Escuta das relações, da convivência e das questões que o casal ou a família deseja trabalhar.",
    image: "/images/terapia-casal-large.jpg",
    icon: Users,
  },
  {
    id: "grupo",
    label: "03",
    title: "Terapia de grupo",
    text: "Um espaço de escuta e troca, mediado pela profissional, para trabalhar questões e relações em grupo.",
    image: "/images/terapia-grupo-large.jpg",
    icon: MessageCircle,
  },
  {
    id: "online",
    label: "04",
    title: "Atendimento online",
    text: "Encontros por videoconferência, com adequação, privacidade e condições combinadas antes da consulta.",
    image: "/images/terapia-online.jpg",
    icon: Monitor,
  },
];
function ServiceCards() {
  return (
    <div className="services-grid">
      {services.map((s) => (
        <article className="service-card" key={s.id}>
          <div className="service-top">
            <s.icon size={26} strokeWidth={1.3} aria-hidden="true" />
            <span>{s.label}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <Link to={`/servicos#${s.id}`} className="text-link">
            Conhecer atendimento <ArrowUpRight size={17} />
            <span className="sr-only">: {s.title}</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Psicóloga em Balneário Camboriú
            </p>
            <h1>
              Um espaço para
              <br />
              se escutar.
              <br />
              <em>No seu tempo.</em>
            </h1>
            <p className="hero-description">
              Psicologia e psicanálise com Beatriz Fauth. Uma escuta acolhedora
              para suas questões, sua história e seu momento de vida.
            </p>
            <div className="hero-actions">
              <WhatsAppLink>Solicitar uma conversa</WhatsAppLink>
              <Link className="text-link" to="/sobre">
                Conheça Beatriz <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="hero-facts">
              <span>
                <MapPin size={17} />
                Presencial no Centro de BC
              </span>
              <span>
                <Monitor size={17} />
                Online, sob consulta
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-orbit" aria-hidden="true" />
            <figure className="portrait-frame">
              <img
                src="/images/logo-beatriz.jpeg"
                alt="Beatriz Fauth, psicóloga e psicanalista"
                width="497"
                height="755"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption>
                <span>Beatriz Fauth</span>
                <small>PSICÓLOGA · {CONTACT_INFO.crp}</small>
              </figcaption>
            </figure>
            <div className="portrait-note">
              <Leaf size={22} strokeWidth={1.4} />
              <span>
                Escuta que respeita
                <br />
                <strong>a sua singularidade.</strong>
              </span>
            </div>
            <span className="vertical-caption" aria-hidden="true">
              PSICOLOGIA · PSICANÁLISE · ACOLHIMENTO
            </span>
          </div>
        </div>
      </section>
      <section className="intro-strip">
        <div className="container">
          <p>
            Não é preciso ter todas as respostas
            <br />
            <em>para começar uma conversa.</em>
          </p>
          <span>
            O primeiro encontro é um espaço para apresentar suas questões,
            conhecer a abordagem e combinar os próximos passos.
          </span>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Formas de estar junto</p>
              <h2>
                Um cuidado que considera
                <br />
                cada história.
              </h2>
            </div>
            <Link className="text-link" to="/servicos">
              Ver modalidades <ArrowUpRight size={18} />
            </Link>
          </div>
          <ServiceCards />
        </div>
      </section>
      <section className="section about-home">
        <div className="container about-grid">
          <div className="quote-visual">
            <span aria-hidden="true">Ψ</span>
            <p>
              Escutar é abrir espaço
              <br />
              para o que faz sentido
              <br />
              <em>para você.</em>
            </p>
            <small>PSICOLOGIA & PSICANÁLISE</small>
          </div>
          <div>
            <p className="eyebrow">Conheça a profissional</p>
            <h2>Beatriz Fauth.</h2>
            <p className="lead">
              Psicóloga e psicanalista.
              <br />
              {CONTACT_INFO.crp}
            </p>
            <p>
              O atendimento parte da escuta da pessoa e de suas experiências. Um
              espaço para conversar sobre emoções, vínculos e questões do
              cotidiano, respeitando o tempo de cada percurso.
            </p>
            <p>
              No consultório em Balneário Camboriú ou na modalidade online, as
              condições do acompanhamento são combinadas com a profissional.
            </p>
            <Link className="text-link" to="/sobre">
              Conheça a forma de trabalho <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Do primeiro contato ao primeiro encontro</p>
          <h2>Começar pode ser simples.</h2>
          <div className="steps">
            {[
              [
                "Entre em contato",
                "Fale pelo WhatsApp, tire dúvidas e informe a modalidade de seu interesse.",
              ],
              [
                "Combine os detalhes",
                "Confirme disponibilidade, valores, duração e formato diretamente com Beatriz.",
              ],
              [
                "Encontre seu espaço de fala",
                "Na primeira consulta, apresente suas questões no seu tempo e converse sobre a continuidade.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="small">
            Uma solicitação pelo site não confirma horário. Aguarde o retorno da
            profissional.
          </p>
        </div>
      </section>
      <section className="section region-home">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Perto de você</p>
            <h2>
              Balneário Camboriú
              <br />e região.
            </h2>
            <p>
              O atendimento presencial acontece em um único endereço, no Centro
              de Balneário Camboriú. Para quem mora em outros bairros, Camboriú,
              Itajaí ou Itapema, é possível consultar as opções presencial e
              online.
            </p>
            <Link className="text-link" to="/regiao">
              Como chegar e se organizar <ArrowUpRight size={18} />
            </Link>
          </div>
          <LocationCard />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Informação com cuidado</p>
              <h2>Antes de agendar.</h2>
            </div>
            <Link className="text-link" to="/blog">
              Todas as orientações <ArrowUpRight size={18} />
            </Link>
          </div>
          <ArticleCards />
        </div>
      </section>
      <section className="section soft-bg">
        <div className="container">
          <p className="eyebrow">Temas em debate</p>
          <h2>Mais contexto, menos rótulos.</h2>
          <p>
            Guias sobre IA, diagnósticos nas redes, relações, medicamentos e
            privacidade, com fontes para aprofundar a conversa.
          </p>
          <Link className="text-link" to="/temas">
            Explorar todos os temas <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <FAQ />
      <ContactBand />
    </>
  );
}
export function About() {
  return (
    <>
      <PageIntro
        label="Sobre Beatriz"
        title="Uma escuta para a sua história."
        text="Conheça a proposta de trabalho de Beatriz Fauth, psicóloga e psicanalista em Balneário Camboriú."
      />
      <section className="section">
        <div className="container about-grid">
          <figure className="about-portrait">
            <img
              src="/images/logo-beatriz.jpeg"
              alt="Beatriz Fauth"
              width="497"
              height="755"
            />
            <figcaption>
              Beatriz Fauth · Psicóloga · {CONTACT_INFO.crp}
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">Psicologia & Psicanálise</p>
            <h2>Beatriz Fauth.</h2>
            <p className="lead">
              A pessoa, suas experiências e suas questões no centro da escuta.
            </p>
            <p>
              O trabalho com a psicanálise convida à fala e à investigação de
              sentimentos, pensamentos e modos de se relacionar. Cada
              acompanhamento considera a singularidade da pessoa e aquilo que a
              levou a buscar atendimento.
            </p>
            <p>
              A primeira conversa permite conhecer a profissional, apresentar
              dúvidas sobre a abordagem e combinar as condições para os
              encontros. Não é necessário chegar com uma explicação pronta.
            </p>
            <p>
              O atendimento presencial acontece no Centro de Balneário Camboriú.
              A possibilidade de atendimento online é conversada e avaliada
              previamente.
            </p>
            <WhatsAppLink />
          </div>
        </div>
      </section>
      <section className="section soft-bg">
        <div className="container">
          <p className="eyebrow">Compromissos do atendimento</p>
          <h2>Cuidado também está na forma de escutar.</h2>
          <div className="steps">
            {[
              [
                "Singularidade",
                "Respeito à história, ao contexto e ao tempo de cada pessoa.",
              ],
              [
                "Ética profissional",
                "Sigilo profissional conforme o Código de Ética da Psicologia e suas disposições.",
              ],
              [
                "Clareza no processo",
                "Modalidade, frequência, valores e condições combinados diretamente com a profissional.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
export function Services() {
  return (
    <>
      <PageIntro
        label="Atendimento"
        title="Diferentes encontros. Uma escuta singular."
        text="Conheça as modalidades de atendimento. A indicação e a organização de cada acompanhamento são conversadas com Beatriz."
      />
      <section className="section compact">
        <div className="container service-jump">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
              <ArrowRight size={15} />
            </a>
          ))}
        </div>
      </section>
      {services.map((s, i) => (
        <section
          className={`section service-detail ${i % 2 ? "soft-bg" : ""}`}
          id={s.id}
          key={s.id}
        >
          {s.id === "casal" && <span id="familiar" />}
          <div
            className={`container about-grid ${i % 2 ? "reverse-grid" : ""}`}
          >
            <img
              src={s.image}
              alt={`Imagem ilustrativa de ${s.title.toLowerCase()}`}
              width="640"
              height="480"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="eyebrow">Modalidade {s.label}</p>
              <h2>{s.title}</h2>
              <p className="lead">{s.text}</p>
              <p>
                {s.id === "individual"
                  ? "O encontro individual permite conversar sobre questões pessoais, relações, mudanças, perdas e situações que despertam sofrimento ou dúvidas. Os objetivos e o ritmo são construídos ao longo do acompanhamento, sem promessas de resultados."
                  : s.id === "casal"
                    ? "A proposta é oferecer espaço para falar e escutar diferentes perspectivas sobre a relação. A participação no primeiro encontro e o formato das sessões são combinados previamente."
                    : s.id === "grupo"
                      ? "A composição, a disponibilidade e as condições de participação no grupo devem ser confirmadas com a profissional. Os acordos de convivência e de confidencialidade fazem parte da organização do trabalho."
                      : "Para participar, é necessário um ambiente reservado, conexão estável e um dispositivo com câmera e microfone. A plataforma, as condições de privacidade e a adequação da modalidade ao caso são avaliadas antes do atendimento."}
              </p>
              <WhatsAppLink>Consultar esta modalidade</WhatsAppLink>
            </div>
          </div>
        </section>
      ))}
      <section className="section" id="jovens">
        <div className="container narrow">
          <p className="eyebrow">Momentos da vida</p>
          <h2>Atendimento a jovens.</h2>
          <p>
            Um espaço para conversar sobre relações, mudanças, identidade e
            questões vividas na juventude. A participação dos responsáveis, os
            limites do sigilo e as condições de atendimento são tratados de
            acordo com cada situação e as normas profissionais.
          </p>
          <p>
            Consulte diretamente a profissional sobre a faixa etária atendida e
            a modalidade indicada. Valores, duração e disponibilidade também são
            informados no contato inicial.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
export function Contact() {
  return (
    <>
      <PageIntro
        label="Contato"
        title="O primeiro passo pode ser uma conversa."
        text="Tire dúvidas e consulte a disponibilidade. O agendamento é confirmado diretamente por Beatriz."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <LocationCard />
            <div className="contact-details">
              <h2>Prefere falar diretamente?</h2>
              <a href={`tel:+${CONTACT_INFO.phoneRaw}`}>{CONTACT_INFO.phone}</a>
              <a className="email-link" href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </a>
              <p>
                Atendimento presencial e online, mediante combinação prévia.
                Este canal não é destinado a urgências.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <FAQ />
    </>
  );
}
export function Blog() {
  return (
    <>
      <PageIntro
        label="Orientações"
        title="Informação para seus próximos passos."
        text="Dúvidas práticas sobre a primeira consulta, as modalidades e a organização do atendimento. Conteúdo informativo, sem substituir uma avaliação individual."
      />
      <section className="section">
        <div className="container">
          <ArticleCards />
        </div>
      </section>
      <section className="section soft-bg">
        <div className="container">
          <p className="eyebrow">Guias para aprofundar a conversa</p>
          <h2>Temas em debate.</h2>
          <TopicCards />
        </div>
      </section>
      <FAQ />
      <ContactBand />
    </>
  );
}
export function Article() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  return (
    <>
      <PageIntro label={post.category} title={post.title} text={post.excerpt} />
      <article className="container article-body">
        <img
          className="article-cover"
          src={post.image}
          alt={`Imagem ilustrativa: ${post.category.toLowerCase()}`}
          width="900"
          height="500"
        />
        <p className="article-context">
          Orientações de atendimento · Beatriz Fauth · {CONTACT_INFO.crp}
        </p>
        {post.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.text}</p>
          </section>
        ))}
        <aside className="editorial-note">
          Este conteúdo é informativo e não substitui atendimento psicológico.
          Horários, condições e adequação da modalidade são confirmados com a
          profissional.
        </aside>
        <Link className="text-link" to="/blog">
          Ver outras orientações <ArrowUpRight size={18} />
        </Link>
      </article>
      <ContactBand />
    </>
  );
}
export function Region() {
  return (
    <>
      <PageIntro
        label="Localização"
        title="Um consultório em Balneário Camboriú."
        text="O atendimento presencial acontece no Centro. Conheça o endereço e veja como se organizar se você mora em outro bairro ou cidade."
      />
      <section className="section">
        <div className="container about-grid">
          <LocationCard />
          <div>
            <p className="eyebrow">Antes de sair de casa</p>
            <h2>Seu encontro começa com organização.</h2>
            <p>
              Confirme a data, o horário e o endereço com Beatriz. Se você vem
              de Camboriú, Itajaí ou Itapema, considere o trânsito e o tempo de
              deslocamento no dia do atendimento.
            </p>
            <p>
              Para saber sobre estacionamento, acesso ao prédio ou necessidades
              de acessibilidade, pergunte antes de ir. Não há outras unidades de
              atendimento anunciadas neste site.
            </p>
            <WhatsAppLink>Consultar disponibilidade</WhatsAppLink>
          </div>
        </div>
      </section>
      <section className="section soft-bg">
        <div className="container">
          <p className="eyebrow">Bairros de Balneário Camboriú</p>
          <h2>De onde você vem?</h2>
          <p>
            As páginas abaixo orientam o acesso ao mesmo consultório do Centro.
            Elas não representam filiais em cada bairro.
          </p>
          <div className="neighborhood-links">
            {NEIGHBORHOODS_DATA.map((n) => (
              <Link key={n.slug} to={`/bairro/${n.slug}`}>
                {n.name}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Uma alternativa a conversar</p>
          <h2>E se o deslocamento for difícil?</h2>
          <p>
            A modalidade online pode ser considerada após a avaliação de sua
            adequação. Confirme a plataforma, os requisitos de privacidade e as
            condições para participar.
          </p>
          <Link className="text-link" to="/servicos#online">
            Entenda o atendimento online <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
export function Neighborhood() {
  const { slug } = useParams();
  const place = NEIGHBORHOODS_DATA.find((n) => n.slug === slug);
  if (!place) return <NotFound />;
  return (
    <>
      <PageIntro
        label={place.name}
        title={
          place.slug === "centro"
            ? "Psicóloga no Centro de Balneário Camboriú."
            : `Atendimento para quem mora em ${place.name}.`
        }
        text={place.intro}
      />
      <section className="section">
        <div className="container about-grid">
          <LocationCard />
          <div>
            <h2>O mesmo endereço, uma escuta singular.</h2>
            <p>
              Consulte os horários disponíveis, reserve tempo para o
              deslocamento e confirme os detalhes antes de sair. O endereço
              presencial permanece no Centro de Balneário Camboriú.
            </p>
            <p>
              Se preferir, converse sobre a modalidade online. Ela depende de
              avaliação e combinação prévia com a profissional.
            </p>
            <Link className="text-link" to="/regiao">
              Informações de toda a região <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
export function Privacy() {
  return (
    <>
      <PageIntro
        label="Privacidade"
        title="Clareza sobre seus dados."
        text="Entenda o funcionamento desta versão do site e os cuidados ao entrar em contato."
      />
      <div className="container article-body">
        <section>
          <h2>Informações do formulário</h2>
          <p>
            O formulário prepara uma mensagem no seu navegador. Não exige
            telefone, e-mail, documentos ou relato clínico. Os campos não são
            enviados por este site para um banco de dados e não são salvos em
            armazenamento local.
          </p>
          <p>
            Ao abrir o WhatsApp, as informações preenchidas passam a compor o
            endereço de destino e são transmitidas para essa plataforma. Você
            ainda precisa revisar e enviar a mensagem. Evite registrar
            informações sensíveis nesse contato inicial.
          </p>
        </section>
        <section>
          <h2>Serviços externos</h2>
          <p>
            Links para WhatsApp, redes sociais e Google Maps direcionam a
            serviços externos, sujeitos às políticas de cada plataforma. Os
            botões de compartilhamento só abrem o destino quando acionados. Não
            incluímos pixels de publicidade, ferramentas de análise de audiência
            ou mapas incorporados no código desta versão.
          </p>
        </section>
        <section>
          <h2>Dados técnicos da navegação</h2>
          <p>
            A infraestrutura de hospedagem e os serviços externos podem
            processar dados técnicos, como endereço IP e registros de acesso.
            Este aviso não substitui as políticas desses fornecedores nem os
            documentos profissionais que regulam o atendimento.
          </p>
        </section>
        <section>
          <h2>Contato sobre privacidade</h2>
          <p>
            Para esclarecer dúvidas ou solicitar informações sobre o tratamento
            de dados relacionado ao atendimento, entre em contato com Beatriz
            Fauth pelo e-mail{" "}
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
          </p>
        </section>
      </div>
    </>
  );
}
export function NotFound() {
  return (
    <section className="section not-found">
      <div className="container narrow">
        <p className="eyebrow">Página não encontrada · 404</p>
        <h1>
          Vamos encontrar
          <br />
          outro caminho.
        </h1>
        <p>
          Este endereço não está disponível. Você pode voltar ao início ou
          acessar as informações de contato.
        </p>
        <Link className="button" to="/">
          Voltar ao início <ArrowUpRight size={18} />
        </Link>
        <Link className="text-link" to="/contato">
          Contato com Beatriz
        </Link>
      </div>
    </section>
  );
}
