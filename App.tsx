
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cream selection:bg-gold/20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
