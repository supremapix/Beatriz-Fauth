import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import topics from "../topics-content.json";
import { PageIntro } from "../components/UI";
import { NotFound } from "./Pages";
export function TopicCards() {
  return (
    <div className="topics-grid">
      {topics.map((t, i) => (
        <article className="topic-card" key={t.id}>
          <p className="eyebrow">
            0{i + 1} · {t.category}
          </p>
          <h3>
            <Link to={`/temas/${t.id}`}>{t.title}</Link>
          </h3>
          <p>{t.excerpt}</p>
          <Link className="text-link" to={`/temas/${t.id}`}>
            Explorar o tema <ArrowUpRight size={17} />
            <span className="sr-only">: {t.title}</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function Topics() {
  return (
    <>
      <PageIntro
        label="Temas em debate"
        title="Assuntos que pedem mais contexto."
        text="IA, diagnósticos nas redes, relações, medicamentos e atendimento online. Guias informativos com fontes públicas para conversar com mais cuidado, sem rótulos ou respostas prontas."
      />
      <section className="section">
        <div className="container">
          <TopicCards />
          <aside className="editorial-note">
            Estes guias apresentam informações gerais de fontes públicas. Não
            representam avaliação de uma pessoa ou indicação de tratamento. As
            fontes estão indicadas em cada página.
          </aside>
        </div>
      </section>
    </>
  );
}
export function Topic() {
  const { slug } = useParams();
  const topic = topics.find((t) => t.id === slug);
  if (!topic) return <NotFound />;
  return (
    <>
      <PageIntro
        label={topic.category}
        title={topic.title}
        text={topic.excerpt}
      />
      <article className="container article-body">
        <nav className="topic-related" aria-label="Nesta página">
          {topic.sections.map((s, i) => (
            <a className="text-link" key={s.heading} href={`#parte-${i + 1}`}>
              {s.heading}
            </a>
          ))}
        </nav>
        <aside className="topic-answer">
          <strong>Em poucas palavras</strong>
          <p>{topic.excerpt}</p>
        </aside>
        {topic.sections.map((s, i) => (
          <section id={`parte-${i + 1}`} key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.text}</p>
          </section>
        ))}
        <section>
          <h2>Perguntas sobre este tema</h2>
          <div className="faq-list">
            {topic.questions.map((q) => (
              <details key={q.question}>
                <summary>
                  {q.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{q.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section>
          <h2>Fontes e leitura complementar</h2>
          <p className="small">
            As fontes a seguir sustentam a orientação geral. Não foram usadas
            para diagnosticar ou avaliar casos individuais.
          </p>
          <ul className="source-list">
            {topic.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
        <aside className="editorial-note">
          Conteúdo educativo preparado a partir das fontes indicadas. Não
          substitui avaliação psicológica ou médica e não deve orientar mudanças
          de tratamento por conta própria.
        </aside>
        <Link className="text-link" to="/temas">
          Todos os temas em debate <ArrowUpRight size={18} />
        </Link>
      </article>
    </>
  );
}
