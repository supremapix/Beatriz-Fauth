import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { BLOG_POSTS, CONTACT_INFO, NEIGHBORHOODS_DATA } from "../constants";
import topics from "../topics-content.json";
import { whatsapp } from "./UI";
import "./contact-section.css";

type ContactContent = {
  label: string;
  title: string;
  description: string;
  action: string;
};

type ContextCopy = Omit<ContactContent, "label">;

const pageContent: Record<string, ContactContent> = {
  "/": {
    label: "Um primeiro contato, no seu tempo",
    title: "Conheça as possibilidades de atendimento.",
    description:
      "Converse com Beatriz Fauth para consultar modalidades, valores e informações sobre o atendimento presencial em Balneário Camboriú ou online.",
    action: "Consultar informações de atendimento",
  },
  "/sobre": {
    label: "Sobre o trabalho de Beatriz",
    title: "Quer conhecer melhor a forma de trabalho?",
    description:
      "Consulte informações sobre a proposta de atendimento de Beatriz Fauth e a organização de uma primeira conversa com a profissional.",
    action: "Perguntar sobre a forma de trabalho",
  },
  "/servicos": {
    label: "Modalidades de atendimento",
    title: "Tire dúvidas sobre as modalidades.",
    description:
      "Pergunte sobre o atendimento individual, de casal e familiar, em grupo ou online. Condições, valores e disponibilidade são confirmados diretamente com a profissional.",
    action: "Consultar modalidades e condições",
  },
  "/contato": {
    label: "Contato direto com Beatriz",
    title: "Escolha como pedir informações.",
    description:
      "Você pode abrir uma conversa no WhatsApp ou ligar para o telefone profissional abaixo. O contato inicial serve para esclarecer dúvidas e não confirma um agendamento.",
    action: "Pedir informações pelo WhatsApp",
  },
  "/regiao": {
    label: "Localização e acesso",
    title: "Confirme os detalhes antes de se deslocar.",
    description:
      "Consulte o endereço no Centro de Balneário Camboriú, o acesso ao prédio e as condições de atendimento. Este é o único endereço presencial informado no site.",
    action: "Consultar endereço e acesso",
  },
  "/blog": {
    label: "Depois das orientações",
    title: "Ficou alguma dúvida sobre o atendimento?",
    description:
      "Os artigos apresentam informações gerais sobre a primeira consulta, o atendimento de casal e a modalidade online. Consulte com Beatriz os detalhes de funcionamento do consultório.",
    action: "Consultar detalhes do atendimento",
  },
  "/temas": {
    label: "Além dos guias informativos",
    title: "Conheça o atendimento profissional.",
    description:
      "Os temas em debate são educativos e não avaliam situações individuais. Para informações sobre a forma de trabalho de Beatriz Fauth, use os canais de contato abaixo.",
    action: "Pedir informações sobre o trabalho",
  },
  "/privacidade": {
    label: "Dúvidas sobre privacidade",
    title: "Peça esclarecimentos sobre seus dados.",
    description:
      "Consulte informações sobre os canais de contato e o uso de dados relacionado ao atendimento. Neste primeiro contato, evite enviar documentos, relatos clínicos ou informações de outras pessoas.",
    action: "Consultar informações de privacidade",
  },
};

const articleContent: Record<string, ContextCopy> = {
  "primeira-consulta-balneario-camboriu": {
    title: "Consulte os detalhes de uma primeira conversa.",
    description:
      "Para complementar estas orientações, pergunte sobre duração, valores, localização e organização do primeiro atendimento. Um horário só é reservado após confirmação da profissional.",
    action: "Consultar a primeira conversa",
  },
  "terapia-casal-balneario-camboriu": {
    title: "Informações sobre o atendimento de casal.",
    description:
      "Consulte com Beatriz Fauth a organização dessa modalidade, a participação no primeiro encontro e as condições de atendimento presencial ou online.",
    action: "Consultar a modalidade de casal",
  },
  "atendimento-online-regiao": {
    title: "Esclareça como funciona a modalidade online.",
    description:
      "Pergunte sobre plataforma, condições de privacidade e funcionamento do atendimento por videoconferência. A possibilidade dessa modalidade depende de conversa prévia com a profissional.",
    action: "Consultar o funcionamento online",
  },
};

const topicContent: Record<string, ContextCopy> = {
  "inteligencia-artificial-e-terapia": {
    title: "Informações profissionais, além das ferramentas digitais.",
    description:
      "Este guia discute possibilidades e limites da inteligência artificial. Para conhecer a proposta de atendimento de Beatriz Fauth, consulte informações diretamente com a profissional.",
    action: "Consultar a proposta de atendimento",
  },
  "autodiagnostico-nas-redes-sociais": {
    title: "Saiba como funciona o contato profissional.",
    description:
      "A leitura de conteúdos nas redes não permite concluir um diagnóstico. O canal abaixo oferece informações sobre o atendimento de Beatriz Fauth, sem exigir um relato pessoal no primeiro contato.",
    action: "Consultar o contato inicial",
  },
  "narcisismo-e-rotulos-nas-relacoes": {
    title: "Informações de atendimento, sem rótulos.",
    description:
      "O guia apresenta uma reflexão geral sobre a linguagem nas relações. Se quiser conhecer a forma de trabalho de Beatriz Fauth, pergunte sobre as modalidades e suas condições.",
    action: "Consultar a escuta e as modalidades",
  },
  "psicoterapia-e-medicamentos": {
    title: "Esclareça o funcionamento do atendimento psicológico.",
    description:
      "Este conteúdo é informativo. Use o contato para conhecer o trabalho psicológico de Beatriz Fauth; dúvidas sobre prescrição ou mudanças de medicação devem ser tratadas com o profissional responsável.",
    action: "Consultar o trabalho psicológico",
  },
  "terapia-online-e-privacidade": {
    title: "Consulte os cuidados do atendimento online.",
    description:
      "Pergunte sobre a plataforma utilizada, os combinados de privacidade e os requisitos da sessão online. Evite compartilhar dados sensíveis ao solicitar essas informações.",
    action: "Consultar privacidade na modalidade online",
  },
};

const notFoundContent: ContactContent = {
  label: "Um contato mesmo fora do caminho",
  title: "Não encontrou a informação que procurava?",
  description:
    "O endereço acessado não está disponível, mas os canais de Beatriz Fauth continuam aqui. Consulte informações sobre o consultório e as formas de atendimento.",
  action: "Pedir informações ao consultório",
};

export function getPageContactContent(pathname: string): ContactContent {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (pageContent[path]) return pageContent[path];

  const neighborhood = NEIGHBORHOODS_DATA.find(
    (place) => path === `/bairro/${place.slug}`,
  );
  if (neighborhood) {
    const isCenter = neighborhood.slug === "centro";
    return {
      label: `Localização · ${neighborhood.name}`,
      title: isCenter
        ? "Consulte o atendimento no Centro."
        : `Informações de acesso: ${neighborhood.name}.`,
      description: isCenter
        ? "Confirme o endereço do consultório, o acesso à sala e as condições de atendimento no Centro de Balneário Camboriú antes de se deslocar."
        : `Esta página orienta o deslocamento entre ${neighborhood.name} e o consultório no Centro de Balneário Camboriú. Consulte informações de acesso ou pergunte sobre a modalidade online; não há uma filial anunciada neste bairro.`,
      action: isCenter
        ? "Consultar acesso ao consultório no Centro"
        : `Consultar o trajeto: ${neighborhood.name}`,
    };
  }

  // The existing corpus identifies real pages. Unknown slugs use the 404 copy.
  const article = BLOG_POSTS.find((post) => path === `/blog/${post.slug}`);
  if (article) {
    return {
      label: `Orientações · ${article.category}`,
      ...(articleContent[article.slug] ?? {
        title: "Consulte informações após a leitura.",
        description: `O artigo “${article.title}” é informativo. Para esclarecer o funcionamento do atendimento, entre em contato com Beatriz Fauth.`,
        action: "Consultar informações após a orientação",
      }),
    };
  }

  const topic = topics.find((guide) => path === `/temas/${guide.id}`);
  if (topic) {
    return {
      label: `Temas em debate · ${topic.category}`,
      ...(topicContent[topic.id] ?? {
        title: "Conheça o trabalho por trás deste espaço informativo.",
        description: `O guia “${topic.title}” apresenta informações gerais, sem avaliar situações individuais. Consulte Beatriz Fauth para conhecer a forma de atendimento.`,
        action: "Consultar informações após o guia",
      }),
    };
  }

  return notFoundContent;
}

export default function PageContactSection() {
  const { pathname } = useLocation();
  const content = getPageContactContent(pathname);

  return (
    <section className="page-contact" aria-labelledby="page-contact-title">
      <div className="page-contact-inner">
        <img
          className="page-contact-image"
          src="/images/beatriz-contato.svg"
          alt="Identidade de Beatriz Fauth, psicologia e psicanálise."
          width="250"
          height="250"
          loading="lazy"
          decoding="async"
        />
        <div className="page-contact-content">
          <p className="page-contact-label">{content.label}</p>
          <h2 id="page-contact-title">{content.title}</h2>
          <p className="page-contact-description">{content.description}</p>
          <p className="page-contact-professional">
            Beatriz Fauth · Psicóloga e psicanalista · {CONTACT_INFO.crp}
          </p>
          <div className="page-contact-actions">
            <a
              className="page-contact-button"
              // Never include the page, reading topic, or an inferred condition
              // in this external URL. Contact begins with a neutral message.
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="page-contact-note"
            >
              <MessageCircle size={22} aria-hidden="true" />
              <span>{content.action}</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a
              className="page-contact-phone"
              href={`tel:+${CONTACT_INFO.phoneRaw}`}
            >
              <Phone size={20} aria-hidden="true" />
              <span>Ligar: {CONTACT_INFO.phone}</span>
            </a>
          </div>
          <p className="page-contact-note" id="page-contact-note">
            O WhatsApp abre em uma nova aba. Revise a mensagem antes de enviar.
            O contato não confirma um agendamento.
          </p>
        </div>
      </div>
    </section>
  );
}
