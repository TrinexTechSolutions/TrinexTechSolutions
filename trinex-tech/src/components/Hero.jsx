import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallel Axis Effects: Background symbols move at different speeds
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-12 overflow-hidden relative flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-black/40 uppercase">
            <Sparkles size={14} />
            <span>Your Vision, Globally Visible</span>
          </div>

          <header>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-foreground text-balance">
              Stop Being <span className="text-secondary opacity-30">Invisible.</span> Start Being <span className="underline decoration-black/10 underline-offset-8">Iconic.</span>
            </h1>
          </header>

          <p className="text-xl text-secondary leading-relaxed max-w-lg font-medium">
            You’ve built a great business. Now, let’s build its <span className="text-black font-bold">global home</span>. We translate your passion into a digital experience that works 24/7 to find your next customer.
          </p>

          <nav className="flex flex-wrap gap-6 mt-4" aria-label="Hero Actions">
            <a href="#contact" className="btn-primary group flex items-center gap-3 px-10">
              GROW MY BUSINESS
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="btn-secondary flex items-center gap-2">
              SEE THE TRANSFORMATION
            </a>
          </nav>

          <div className="mt-8 flex items-center gap-8 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-black">24/7</span>
              <span className="text-[10px] uppercase tracking-wider text-secondary">Global Exposure</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-secondary">Scalable Identity</span>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative hidden lg:flex justify-center items-center"
        >
          {/* Artistic Frame for Image */}
          <div className="relative w-full aspect-square max-w-xl">
            <div className="absolute inset-0 bg-black/5 skewed-container -z-10"></div>
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-full p-8"
            >
              <img
                 src="/HeroImg.png"
                 alt="Digital business transformation journey"
                 className="w-full h-full object-contain filter drop-shadow-2xl"
                 loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
