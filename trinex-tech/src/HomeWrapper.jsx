import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Components
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
import NarrativeBridge from './components/NarrativeBridge';
import TheProblemSolution from './components/TheProblemSolution';
import TransitionWaves from './components/TransitionWaves';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = React.useState(true);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
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
      </div>
      <div className="flex flex-col items-center">
         <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#FFC533] drop-shadow-sm">Scroll</span>
         <div className="w-8 h-[1px] bg-[#FFC533]/30 mt-1" />
      </div>
    </motion.div>
  );
};

const HomeWrapper = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <ScrollIndicator />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFC533] origin-left z-[200]" 
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

export default HomeWrapper;
