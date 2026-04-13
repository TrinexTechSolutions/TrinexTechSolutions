import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NarrativeBridge = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Delayed Portal Logic (Starting at 40%)
  const clipPathRadius = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "150%"]);
  const contentY = useTransform(scrollYProgress, [0.45, 0.75], [40, 0]);

  return (
    <motion.section 
      ref={containerRef} 
      id="barrier" 
      className="h-[400vh] relative bg-black z-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        
        {/* SIMPLE INTRO: Direct & Clear */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]) }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black"
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent mb-12 animate-pulse"></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-light uppercase tracking-[0.3em] text-white/50 text-center leading-tight"
          >
             Don't Let Your <br/> Business Stay Small.
          </motion.h2>
        </motion.div>

        {/* REVEAL PORTAL (The Architectural Canvas) */}
        <motion.div 
          style={{ 
            clipPath: useTransform(clipPathRadius, (r) => `circle(${r} at 50% 50%)`),
            backgroundColor: '#ffffff',
            opacity: useTransform(scrollYProgress, [0.39, 0.4], [0, 1])
          }}
          className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
        >
          {/* ULTRA-MINIMALIST GRID (Non-Bulky, Clean) */}
          <motion.div 
            style={{ 
              y: contentY,
              display: useTransform(scrollYProgress, [0.39, 0.4], ["none", "flex"])
            }}
            className="max-w-6xl w-full px-8 lg:px-12 flex flex-col lg:flex-row items-stretch gap-0"
          >
            
            {/* COLUMN 1: THE LIMIT */}
            <div className="flex-1 flex flex-col justify-between py-12 lg:pr-24 lg:border-r border-black/[0.03]">
               <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/20">Problem</span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">
                       The Local <br/> Limit.
                    </h3>
                  </div>
                  
                  <p className="text-lg text-black/50 leading-relaxed font-medium font-sans">
                     "Most businesses never grow because only people in their neighborhood can find them. You have the passion, but you are stuck in one place."
                  </p>
               </div>

               <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-black/5"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500/30">Limited Potential</span>
               </div>
            </div>

            {/* COLUMN 2: THE GROWTH */}
            <div className="flex-1 flex flex-col justify-between py-12 lg:pl-24">
               <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/20">Our Solution</span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">
                       Unlimited <br/> Customers.
                    </h3>
                  </div>
                  
                  <p className="text-lg lg:text-xl text-black font-bold border-l-2 border-black/10 pl-8 italic leading-relaxed">
                     We put your business in front of the whole world. We make it possible for anyone, anywhere, to find and buy from you.
                  </p>
               </div>

               <div className="mt-12">
                  <motion.a 
                    href="#contact"
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-black"
                  >
                    <span>Grow Your Business</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </motion.a>
               </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default NarrativeBridge;
