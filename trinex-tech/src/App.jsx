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
import TheProblemSolution from './components/TheProblemSolution';
import TransitionWaves from './components/TransitionWaves';
import Team from './pages/Team';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = React.useState(true);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide while scrolling
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true); // Show when stopped
      }, 1500); // 1.5s delay after stopping
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const finalOpacity = useTransform(scrollYProgress, [0.96, 0.99], [1, 0]);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      style={{ opacity: isVisible ? finalOpacity : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-12 right-6 md:right-12 z-[100] flex flex-col items-center gap-4"
    >
      {/* High-Visibility Precision Mouse */}
      <div className="w-[32px] h-[52px] border-[2px] border-[#FFC533] rounded-[22px] relative bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,197,51,0.2)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-4 bg-[#FFC533]/40" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-5 rounded-full border border-[#FFC533]/20 bg-[#FFC533]/5">
          <motion.div 
            animate={{ 
              y: [2, 12, 2],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 bg-[#FFC533] rounded-full absolute left-1/2 -translate-x-1/2 shadow-[0_0_12px_#FFC533]"
          />
        </div>
        <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[#FFC533]/10 rounded-full" />
        <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[#FFC533]/10 rounded-full" />
      </div>
      
      <div className="flex flex-col items-center">
         <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#FFC533] drop-shadow-sm">Scroll</span>
         <div className="w-8 h-[1px] bg-[#FFC533]/30 mt-1" />
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <ScrollIndicator />
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
        <TransitionWaves />
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
      <div className="min-h-screen bg-background font-sans selection:bg-black selection:text-white relative">
        <Schema />
        <Helmet>
          <title>Trinex Tech Solutions | Premium Web & Software Development</title>
          <meta name="description" content="Trinex Tech Solutions delivers high-performance web development, mobile apps, and SEO services to help businesses scale globally. Expert IT solutions for startups and enterprises." />
          <link rel="canonical" href="https://www.trinextechsolutions.site/" />
        </Helmet>

        {/* Global Scroll Indicator */}
        <ScrollIndicator />

        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/team" element={
            <>
              <Navbar />
              <Team />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;