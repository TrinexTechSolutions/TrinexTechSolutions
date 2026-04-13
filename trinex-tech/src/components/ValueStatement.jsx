import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, ShieldCheck, TrendingUp } from 'lucide-react';

const ValueStatement = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique Motion: Words floating in from different depths
  const y1 = useTransform(scrollYProgress, [0, 0.5], [100, -50]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5], [300, 50]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-12 bg-white relative overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND TEXT - Soft & Airy */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.04] pointer-events-none select-none z-0"
      >
        <span className="text-[25vw] font-black uppercase text-black italic">LIMITLESS • VISIBILITY • UNLOCKED • </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
         

         {/* MAIN HEADLINE: Staggered Depth Layout */}
         <div className="flex flex-col items-center text-center gap-4">
            <motion.h2 
              style={{ y: y1, opacity }}
              className="text-5xl md:text-8xl lg:text-[9vw] font-black uppercase tracking-tighter leading-none text-black"
            >
              Your Business
            </motion.h2>

            <motion.div 
              style={{ y: y2, opacity }}
              className="flex items-center gap-6"
            >
               <div className="hidden lg:block w-32 h-[2px] bg-black/10"></div>
               <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black/5 decoration-black/5 underline underline-offset-8">
                 Is Limited Only
               </h2>
               <div className="hidden lg:block w-32 h-[2px] bg-black/10"></div>
            </motion.div>

            <motion.h2 
              style={{ y: y3, opacity }}
              className="text-6xl md:text-9xl lg:text-[12vw] font-black uppercase tracking-tighter leading-none italic text-black"
            >
              By Its Visibility.
            </motion.h2>
         </div>

         {/* BOTTOM NARRATIVE: Parallel Grid */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center border-t border-black/5 pt-16"
         >
            <div className="flex flex-col gap-8">
               <p className="text-2xl font-bold leading-tight">
                 In the digital age, if you are not easily found, <span className="text-black/40">you simply do not exist.</span>
               </p>
            </div>

            <div className="flex flex-col gap-8 bg-[#fdfdfd] p-10 border border-black/5 shadow-2xl relative group">
               <TrendingUp className="absolute top-10 right-10 text-black/10 group-hover:text-black/40 transition-colors" size={48} />
               <p className="text-lg text-secondary leading-relaxed font-medium font-sans">
                 We don’t just build websites; we build the <span className="text-black font-black">engines of existence</span>. We ensure your voice is heard across the digital noise, bringing the world to your doorstep.
               </p>
               <div className="h-[2px] w-12 bg-black/10"></div>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

export default ValueStatement;
