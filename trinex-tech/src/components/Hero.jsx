import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 h-full p-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
             <span className="w-8 h-[1px] bg-black"></span>
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Established 2026</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-foreground text-balance">
            Building <span className="text-secondary opacity-40">Scalable</span> Software for the Modern World
          </h1>

          <p className="text-lg text-secondary leading-relaxed max-w-lg">
            Trinex Tech Solutions delivers high-performance web applications, seamless deployment, and end-to-end turnkey solutions for businesses that demand reliability and scale.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contact" className="btn-primary group flex items-center gap-2">
              GET STARTED
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="btn-secondary">
              VIEW OUR WORK
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-border flex items-center justify-center text-[10px] font-bold">
                  {i === 4 ? '+50' : ''}
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-secondary italic">
              Trusted by growing businesses | Engineering digital excellence
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden lg:flex justify-center items-center h-full"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
             <img 
               src="/hero-tech.png" 
               alt="Software Scalability" 
               className="w-full h-full object-contain" 
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
