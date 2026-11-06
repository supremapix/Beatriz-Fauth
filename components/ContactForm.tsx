import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsapp } from "./UI";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState("Gostaria de orientação sobre a modalidade");
  const [format, setFormat] = useState("Ainda não tenho preferência");
  const [ready, setReady] = useState(false);
  const message = `Olá, Beatriz! ${name.trim() ? `Meu nome é ${name.trim()}. ` : ""}Gostaria de informações sobre atendimento. Modalidade: ${mode}. Formato: ${format}. Poderia informar disponibilidade e condições?`;
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setReady(true);
      }}
      onChange={() => setReady(false)}
    >
      <p className="eyebrow">Solicitação de informações</p>
      <h2>Prepare seu primeiro contato.</h2>
      <p>Sem cadastro e sem confirmação automática de consulta.</p>
      <label htmlFor="contact-name">
        Como prefere ser chamado? <span>(opcional)</span>
      </label>
      <input
        id="contact-name"
        name="name"
        autoComplete="given-name"
        maxLength={60}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu primeiro nome"
      />
      <label htmlFor="contact-mode">Sobre o que deseja saber?</label>
      <select
        id="contact-mode"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option>Gostaria de orientação sobre a modalidade</option>
        <option>Atendimento individual</option>
        <option>Terapia de casal e familiar</option>
        <option>Terapia de grupo</option>
        <option>Atendimento a jovens</option>
      </select>
      <label htmlFor="contact-format">Preferência de atendimento</label>
      <select
        id="contact-format"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
      >
        <option>Ainda não tenho preferência</option>
        <option>Presencial em Balneário Camboriú</option>
        <option>Online, a confirmar com a profissional</option>
      </select>
      <p className="small form-notice">
        Não inclua informações clínicas, documentos ou dados de outras pessoas.
        Seus campos ficam nesta página até você abrir o WhatsApp.{" "}
        <Link to="/privacidade">Saiba mais sobre privacidade.</Link>
      </p>
      <button type="submit" className="button">
        Preparar mensagem <ArrowUpRight size={18} />
      </button>
      {ready && (
        <div className="message-review" role="status">
          <strong>Confira sua mensagem</strong>
          <p>{message}</p>
          <a
            href={whatsapp(message)}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir WhatsApp e revisar <ArrowUpRight size={18} />
          </a>
          <p className="small">
            O WhatsApp receberá os dados acima ao abrir o link. Você ainda
            precisa enviar a mensagem e aguardar a confirmação da profissional.
          </p>
        </div>
      )}
    </form>
  );
}
