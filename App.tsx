import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topics, Topic } from "./pages/Topics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import FloatingActions from "./components/FloatingActions";
import PageContactSection from "./components/PageContactSection";
import {
  Home,
  About,
  Services,
  Contact,
  Blog,
  Article,
  Region,
  Neighborhood,
  Privacy,
  NotFound,
} from "./pages/Pages";
export function AppContent() {
  return (
    <>
      <Seo />
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/temas" element={<Topics />} />
          <Route path="/temas/:slug" element={<Topic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/regiao" element={<Region />} />
          <Route path="/bairro/:slug" element={<Neighborhood />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PageContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
