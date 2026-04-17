import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe2, ArrowRight, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // MULTI-LAYERED PARALLAX EFFECTS
  // 1. Background Panorama (Horizontal)
  const bgX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  
  // 2. Vertical Parallax for Content (Staggered speeds)
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const leftColY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  
  // 3. Floating Sparkle Parallax (Unique movement)
  const sparkleY = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const sparkleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="py-32 relative bg-white overflow-hidden flex items-center justify-center min-h-[70vh] lg:min-h-[80vh]"
    >
      {/* LAYER 0: SLIDING BACKGROUND TEXT */}
      <motion.div 
        style={{ x: bgX, opacity: 0.02 }}
        className="absolute inset-0 whitespace-nowrap flex items-center pointer-events-none select-none z-0"
      >
        <span className="text-[25vw] font-black uppercase tracking-tighter leading-none italic text-black">
          TRINEX • GROWTH • SCALE • TRINEX • GROWTH • SCALE • TRINEX
        </span>
      </motion.div>

      {/* LAYER 1: FLOATING DECORATIVE ELEMENTS (Parallax) */}
      <motion.div 
        style={{ y: sparkleY, rotate: sparkleRotate, opacity: 0.1 }}
        className="absolute top-1/4 left-1/4 pointer-events-none z-1"
      >
        <Sparkles size={40} className="text-black" />
      </motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity: 0.1 }}
        className="absolute bottom-1/4 right-1/4 pointer-events-none z-1"
      >
        <Zap size={60} strokeWidth={1} className="text-black" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center text-center gap-12"
        >
          {/* HEADER LAYER (Vertical Parallax) */}
          <motion.div 
            style={{ y: headerY }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#FFC533] rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFC533]">Our Perspective</span>
              <div className="w-1.5 h-1.5 bg-[#FFC533] rounded-full"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-none text-balance">
              The World Is Waiting <br /> 
              <span className="font-light italic tracking-[0.1em] text-[#FFC533]/80">To Find You.</span>
            </h2>
          </motion.div>

          {/* COLUMNS LAYER (Asymmetric Vertical Parallax) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start text-left max-w-4xl w-full">
            <motion.div 
              style={{ y: leftColY }}
              className="flex flex-col gap-6 p-8 bg-black/[0.01] border-l border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-700 group"
            >
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <Globe2 size={14} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-black">Digital Presence</span>
               </div>
               <p className="text-sm md:text-base font-medium text-secondary group-hover:text-black leading-relaxed font-sans transition-colors">
                  Visibility is the currency of the modern age. We build the <span className="text-black font-bold">architectural bridges</span> that connect your passion with a global audience, 24/7.
               </p>
            </motion.div>

            <motion.div 
              style={{ y: rightColY }}
              className="flex flex-col gap-6 p-8 bg-black/[0.01] border-l border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-700 group md:mt-12"
            >
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-black">Scale Velocity</span>
               </div>
               <p className="text-sm md:text-base font-medium text-secondary group-hover:text-black leading-relaxed font-sans transition-colors">
                  Don't just launch; dominate. We transform your business into a <span className="text-black font-bold">growth engine</span> that works while you sleep, removing every barrier to your expansion.
               </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Panorama Masking Gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default About;

