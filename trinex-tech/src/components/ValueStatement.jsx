import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Zap } from 'lucide-react';

const ValueStatement = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique Motion: Horizontal Layering (Paradigm Shift)
  // We move things horizontally at different speeds to create 3D depth without bulk
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 0]); // Center stays
  const x3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  return (
    <section ref={containerRef} className="py-20 bg-white relative overflow-hidden border-t border-black/[0.03]">
      
      {/* ARCHITECTURAL GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute inset-0 bg-radial-gradient from-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
         
         <div className="flex flex-col items-center justify-center text-center gap-12">
            
            {/* Top Label */}
            <motion.div 
              style={{ opacity }}
              className="flex items-center gap-4"
            >
               <span className="w-12 h-px bg-black/10"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/30 italic">The Digital Law</span>
               <span className="w-12 h-px bg-black/10"></span>
            </motion.div>

            {/* THE HEADLINE: Wide Parallel Displacement (Non-Bulky) */}
            <motion.div 
               style={{ scale, opacity }}
               className="flex flex-col gap-6 md:gap-10"
            >
               <motion.h2 
                 style={{ x: x1 }}
                 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-black/40 leading-none whitespace-nowrap"
               >
                 Your Business
               </motion.h2>

               <motion.h2 
                 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-none"
               >
                 Is Limited Only
               </motion.h2>

               <motion.h2 
                 style={{ x: x3 }}
                 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.4em] text-black/40 leading-none whitespace-nowrap italic"
               >
                 By Its <span className="text-black font-black not-italic tracking-tighter">Visibility.</span>
               </motion.h2>
            </motion.div>

            {/* BOTTOM BRIDGE (Minimalist) */}
            <motion.div 
              style={{ opacity }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 items-start max-w-5xl"
            >
               <div className="flex flex-col gap-6 text-left">
                  <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center">
                     <Layers size={14} className="text-black/20" />
                  </div>
                  <p className="text-sm md:text-base font-medium text-black/60 leading-relaxed font-sans italic">
                    "In the digital age, if you are not easily found, you simply do not exist. We build the engines of existence for your brand."
                  </p>
               </div>

               <div className="flex flex-col gap-6 text-left border-l border-black/[0.03] pl-12 lg:pl-20">
                  <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center">
                     <Zap size={14} className="text-black/20" />
                  </div>
                  <p className="text-sm md:text-base font-medium text-black/60 leading-relaxed font-sans">
                    We ensure your voice is heard across the digital noise. We bring the world to your doorstep by removing every barrier to your growth.
                  </p>
                  <div className="h-[1px] w-12 bg-black/10"></div>
               </div>
            </motion.div>

         </div>
      </div>
    </section>
  );
};

export default ValueStatement;
