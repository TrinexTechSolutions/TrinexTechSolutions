import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 h-full">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col gap-8"
        >
          <header>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-foreground text-balance">
              Building <span className="text-secondary opacity-40">Scalable</span> Software Development & Digital Solutions
            </h1>
          </header>

          <p className="text-lg text-secondary leading-relaxed max-w-lg">
            Trinex Tech Solutions delivers high-performance <strong className="font-bold text-black">web development</strong>, <strong className="font-bold text-black">mobile apps</strong>, and <strong className="font-bold text-black">SEO services</strong> for businesses that demand reliability and scale.
          </p>

          <nav className="flex flex-wrap gap-4 mt-4" aria-label="Hero Actions">
            <a href="#contact" className="btn-primary group flex items-center gap-2">
              GET STARTED
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="btn-secondary">
              VIEW OUR WORK
            </a>
          </nav>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden lg:flex justify-center items-center h-full"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            <img
               src="/HeroImg.png"
               alt="Scalable Software Development Solutions by Trinex Tech"
               className="w-full h-full object-contain"
               loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
