import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { whatsapp } from "./UI";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const location = useLocation();
  const lastPath = useRef(location.pathname);
  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const updateHeight = () => {
      element.style.setProperty("--header-height", `${element.offsetHeight}px`);
      element.classList.toggle(
        "header-is-tall",
        element.offsetHeight > window.innerHeight * 0.4,
      );
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    window.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("resize", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("resize", updateHeight);
    };
  }, []);
  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      const timer = window.setTimeout(
        () =>
          document
            .getElementById(decodeURIComponent(location.hash.slice(1)))
            ?.scrollIntoView(),
        40,
      );
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (lastPath.current !== location.pathname)
      document.getElementById("conteudo")?.focus({ preventScroll: true });
    lastPath.current = location.pathname;
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="topline">
        <div className="container">
          <span>Psicologia & Psicanálise · Balneário Camboriú</span>
          <span>{CONTACT_INFO.crp}</span>
        </div>
      </div>
      <div className="container navbar">
        <Link className="brand" to="/" aria-label="Beatriz Fauth, início">
          <span className="brand-symbol" aria-hidden="true">
            Ψ
          </span>
          <span>
            <strong>Beatriz Fauth</strong>
            <small>PSICOLOGIA & PSICANÁLISE</small>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span>{open ? "Fechar" : "Menu"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Navegação principal"
        >
          {[
            ["/", "Início"],
            ["/contato", "Contato"],
            ["/regiao", "Endereço"],
            ["/servicos", "Atendimentos"],
            ["/sobre", "Sobre Beatriz"],
            ["/blog", "Orientações"],
          ].map(([path, name]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              {name}
            </NavLink>
          ))}
          <a className="nav-phone" href={`tel:+${CONTACT_INFO.phoneRaw}`}>
            <Phone size={22} aria-hidden="true" />
            <span>Ligar: {CONTACT_INFO.phone}</span>
          </a>
          <a
            className="nav-cta"
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
