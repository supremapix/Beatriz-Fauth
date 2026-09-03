
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Neighborhood from './pages/Neighborhood';
import Seo from './components/Seo';
import Region from './pages/Region';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

export const AppContent: React.FC = () => {
  return (
    <>
      <Seo />
      <div className="flex flex-col min-h-screen bg-cream selection:bg-gold/20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/regiao" element={<Region />} />
            <Route path="/bairro/:slug" element={<Neighborhood />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </>
  );
};

const App: React.FC = () => <Router><AppContent /></Router>;
export default App;
