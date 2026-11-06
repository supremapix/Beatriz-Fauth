import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Instagram,
  Facebook,
  ArrowUpRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { whatsapp } from "./UI";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-contact">
            <h2>Entre em contato</h2>
            <a
              className="footer-contact-action"
              href={`tel:+${CONTACT_INFO.phoneRaw}`}
            >
              <Phone size={22} aria-hidden="true" />{" "}
              <span>Ligar: {CONTACT_INFO.phone}</span>
            </a>
            <a
              className="footer-contact-action"
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22} aria-hidden="true" />{" "}
              <span>Conversar no WhatsApp</span>
            </a>
            <p className="footer-address">
              <strong>Endereço do consultório</strong>
              <br />
              {CONTACT_INFO.address}
            </p>
            <Link className="footer-location-link" to="/regiao">
              Ver endereço e como chegar{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <p className="small">Consultas mediante agendamento.</p>
            <a className="email-link" href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="footer-navigation">
            <h2>Informações importantes</h2>
            <Link to="/sobre">Sobre Beatriz</Link>
            <Link to="/servicos">Modalidades de atendimento</Link>
            <Link to="/regiao">Balneário Camboriú e região</Link>
            <Link to="/blog">Orientações e dúvidas</Link>
            <Link to="/temas">Temas em debate</Link>
            <Link to="/privacidade">Privacidade</Link>
          </div>
          <div className="footer-intro">
            <Link className="brand" to="/">
              <span className="brand-symbol" aria-hidden="true">
                Ψ
              </span>
              <span>
                <strong>Beatriz Fauth</strong>
                <small>PSICOLOGIA & PSICANÁLISE</small>
              </span>
            </Link>
            <p>
              Um espaço de escuta, respeito e cuidado com a singularidade de
              cada pessoa.
            </p>
            <p className="small">Psicóloga · {CONTACT_INFO.crp}</p>
            <div className="social-row">
              <a
                aria-label="Instagram de Beatriz Fauth"
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                aria-label="Facebook de Beatriz Fauth"
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={22} aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-note">
          <p>
            Conteúdo informativo. Não substitui atendimento psicológico
            individualizado. O site e o WhatsApp de agendamento não são canais
            de urgência.
          </p>
          <p>
            © {new Date().getFullYear()} Beatriz Fauth. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="suprema-credit">
          <span>
            Desenvolvido com{" "}
            <Heart size={15} aria-label="amor" className="credit-heart" /> por
          </span>
          <a
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/suprema-logo.png"
              alt=""
              width="150"
              height="45"
              loading="lazy"
            />
            <span>Suprema Sites Express</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
