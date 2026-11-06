import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Check,
  Copy,
  MessageCircle,
  Phone,
  Share2,
  X,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { CONTACT_INFO } from "../constants";
import { SITE_URL } from "../seo";
import { whatsapp } from "./UI";
export const SHARE_TEXTS = [
  "Conheça o trabalho de Beatriz Fauth, psicóloga e psicanalista em Balneário Camboriú.",
  "Um espaço de escuta em Balneário Camboriú. Conheça Beatriz Fauth e as modalidades de atendimento.",
  "Procurando informações sobre atendimento psicológico? Consulte o site de Beatriz Fauth.",
  "Beatriz Fauth: psicologia e psicanálise, com atendimento mediante agendamento.",
  "Saiba como solicitar uma primeira conversa com a psicóloga Beatriz Fauth.",
  "Conheça as informações sobre atendimento presencial no Centro de Balneário Camboriú.",
  "Dúvidas antes da primeira consulta? Veja as orientações no site de Beatriz Fauth.",
  "Psicanálise individual: conheça a proposta de trabalho da psicóloga Beatriz Fauth.",
  "Terapia de casal: consulte informações e disponibilidade com Beatriz Fauth.",
  "Atendimento online: converse com Beatriz Fauth sobre a adequação dessa modalidade.",
  "Para moradores de Balneário Camboriú e região: veja como entrar em contato com Beatriz Fauth.",
  "Escolher um acompanhamento começa por conhecer a profissional. Saiba mais sobre Beatriz Fauth.",
  "Conheça o endereço e os canais de contato da psicóloga Beatriz Fauth.",
  "Informação e acolhimento: consulte as perguntas frequentes sobre o atendimento de Beatriz Fauth.",
  "No seu tempo, um primeiro contato. Conheça o site de Beatriz Fauth, psicóloga em Balneário Camboriú.",
];
export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(false);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const scroll = () => setTop(window.scrollY > 300);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const timer = window.setInterval(() => {
      if (
        document.visibilityState === "visible" &&
        document.activeElement !== textRef.current
      )
        setIndex((i) => (i + 1) % SHARE_TEXTS.length);
    }, 15000);
    return () => {
      window.removeEventListener("scroll", scroll);
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    setOpen(false);
    setFeedback("");
  }, [pathname]);
  useEffect(() => {
    setFeedback("");
  }, [index]);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>(".share-links a")?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (
        !panel.current?.contains(e.target as Node) &&
        !toggle.current?.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  const url =
    SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/+$/, ""));
  const text = `${SHARE_TEXTS[index]} ${CONTACT_INFO.crp}. Contato: ${CONTACT_INFO.phone}. ${url}`;
  const enc = encodeURIComponent;
  const links = [
    ["WhatsApp", `https://wa.me/?text=${enc(text)}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`],
    ["X", `https://twitter.com/intent/tweet?text=${enc(text)}`],
    [
      "Pinterest",
      `https://pinterest.com/pin/create/button/?url=${enc(url)}&media=${enc(SITE_URL + "/images/og-beatriz.png")}&description=${enc(text)}`,
    ],
    [
      "LinkedIn",
      `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    ],
    ["Threads", `https://www.threads.net/intent/post?text=${enc(text)}`],
  ];
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setFeedback("Texto e link copiados!");
    } catch {
      textRef.current?.focus();
      textRef.current?.select();
      setFeedback("Selecione e copie o texto acima pelo seu dispositivo.");
    }
  }
  return (
    <aside className="floating-actions" aria-label="Contato e compartilhamento">
      {open && (
        <div className="share-panel" ref={panel} id="share-panel">
          <div className="share-heading">
            <h2>Compartilhar esta página</h2>
            <button
              onClick={() => {
                setOpen(false);
                toggle.current?.focus();
              }}
              aria-label="Fechar compartilhamento"
            >
              <X size={19} />
            </button>
          </div>
          <p className="small">Escolha a rede e revise antes de publicar.</p>
          <div className="share-links">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Compartilhar no ${name} (abre nova aba)`}
              >
                {name}
              </a>
            ))}
          </div>
          <label htmlFor="share-text">Sugestão de mensagem</label>
          <textarea
            ref={textRef}
            id="share-text"
            value={text}
            readOnly
            rows={4}
          />
          <button className="copy-button" onClick={copy}>
            {feedback.startsWith("Texto") ? (
              <Check size={17} />
            ) : (
              <Copy size={17} />
            )}{" "}
            Copiar texto e link
          </button>
          <p className="copy-feedback" role="status">
            {feedback}
          </p>
          <p className="small">
            Sugestão alternada a cada 15 segundos. Algumas redes usam apenas o
            link; a prévia depende da plataforma.
          </p>
        </div>
      )}
      <button
        className="float-button share-toggle"
        ref={toggle}
        onClick={() => {
          setOpen(!open);
          setFeedback("");
        }}
        aria-label={
          open ? "Fechar opções de compartilhamento" : "Compartilhar página"
        }
        aria-expanded={open}
        aria-controls={open ? "share-panel" : undefined}
      >
        <Share2 size={21} />
      </button>
      <a
        className="float-button call-button"
        href={`tel:+${CONTACT_INFO.phoneRaw}`}
        aria-label={`Ligar para Beatriz Fauth: ${CONTACT_INFO.phone}`}
      >
        <Phone size={21} />
      </a>
      <a
        className="float-button whatsapp-button"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Beatriz Fauth no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      {top && (
        <button
          className="float-button top-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={21} />
        </button>
      )}
    </aside>
  );
}
