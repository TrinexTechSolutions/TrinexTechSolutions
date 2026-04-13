import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValueStatement from './components/ValueStatement';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Schema from './components/Schema';
import Footer from './components/Footer';
import NarrativeBridge from './components/NarrativeBridge';
import TheTransformation from './components/TheTransformation';
import TheProblemSolution from './components/TheProblemSolution';
import Team from './pages/Team';
import { motion, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX: scrollYProgress }} 
      />
      
      <main id="main-content" className="relative z-10" role="main">
        <Hero />
        <article id="about-section">
          <About />
        </article>
        <ValueStatement />
        <NarrativeBridge />
        <TheProblemSolution />
        <TheTransformation />
        <section id="services-section">
          <Services />
        </section>
        <Technologies />
        <section id="portfolio-section">
          <Portfolio />
        </section>
        <WhyChooseUs />
        <Clients />
        <FAQ />
        <section id="contact-section">
          <Contact />
        </section>
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background font-sans selection:bg-black selection:text-white">
        <Schema />
        <Helmet>
          <title>Trinex Tech Solutions | Premium Web & Software Development</title>
          <meta name="description" content="Trinex Tech Solutions delivers high-performance web development, mobile apps, and SEO services to help businesses scale globally. Expert IT solutions for startups and enterprises." />
          <link rel="canonical" href="https://www.trinextechsolutions.site/" />
        </Helmet>

        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;