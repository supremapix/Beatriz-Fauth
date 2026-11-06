import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { CONTACT_INFO, FAQS, BLOG_POSTS } from "../constants";
export const whatsapp = (
  text = "Olá, Beatriz! Gostaria de informações sobre o atendimento.",
) => `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
export function WhatsAppLink({
  children = "Conversar pelo WhatsApp",
  light = false,
}: {
  children?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-light" : ""}`}
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span className="button-text">{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Você está aqui">
          <Link to="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span>{label}</span>
        </nav>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section" id="duvidas">
      <div className="container faq-layout">
        <div>
          <p className="eyebrow">Antes do primeiro encontro</p>
          <h2>
            Espaço para <br />
            suas dúvidas.
          </h2>
          <p>
            Informações para escolher seus próximos passos com mais clareza.
          </p>
          <Link className="text-link" to="/contato">
            Fale com Beatriz <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <details key={f.question}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ArticleCards() {
  return (
    <div className="article-grid">
      {BLOG_POSTS.map((post) => (
        <article className="article-card" key={post.slug}>
          <Link to={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
            <img
              src={post.image}
              width="640"
              height="420"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="eyebrow">{post.category}</p>
          <h3>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
          <Link className="text-link" to={`/blog/${post.slug}`}>
            Ler orientação <ArrowUpRight size={17} />
            <span className="sr-only">: {post.title}</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function LocationCard() {
  return (
    <div className="location-card">
      <div className="location-mark">
        <MapPin size={32} strokeWidth={1.3} aria-hidden="true" />
      </div>
      <p className="eyebrow">Atendimento presencial</p>
      <h3>
        No Centro de
        <br />
        Balneário Camboriú.
      </h3>
      <p>{CONTACT_INFO.address}</p>
      <p className="small">
        Atendimento mediante agendamento. Confirme o horário antes de se
        deslocar.
      </p>
      <a
        className="text-link"
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver endereço no mapa <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
