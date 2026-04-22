import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Immediate Reveal Logic
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -250]);
  
  // Early Diagonal Cut Animation (Starts after slight scroll)
  const cutY = useTransform(scrollYProgress, [0.3, 0.95], ["100%", "0%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-black flex items-center"
    >
      <div className="relative w-full flex items-center justify-center overflow-hidden py-8">
        
        {/* BACKGROUND LAYER: Optimized Architectural Minimalist Canvas */}
        <motion.div 
          style={{ opacity, transform: "translateZ(0)" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/Hero_Minimalist.png" 
            className="w-full h-full object-cover opacity-20"
            alt="Minimalist Architecture"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </motion.div>

        {/* MIDDLE LAYER: Optimized Globe (Simplified Rendering) */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.4], [0.8, 0]),
            y: yImage,
            transform: "translateZ(0)"
          }}
          className="absolute pointer-events-none z-10 w-full max-w-md aspect-square rounded-full overflow-hidden flex items-center justify-center"
        >
          <img 
            src="/Hero_Globe_Clean.png" 
            className="w-full h-full object-cover animate-spin-slow scale-110 opacity-30"
            alt="Global Connectivity"
          />
        </motion.div>

        {/* TOP LAYER: Unique Asymmetric Content Grid */}
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center justify-center">
          
          <motion.div 
            style={{ y: yText, opacity, transform: "translateZ(0)" }}
            className="w-full h-full flex flex-col justify-between py-6 md:py-8 will-change-transform"
          >
            {/* TOP LEFT: The Vision */}
            <div className="flex flex-col items-start text-left max-w-2xl self-start mt-8">
              <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-bold tracking-tighter leading-[0.85] text-white uppercase mb-8">
                 BUILDING <br />
                 THE <span className="italic font-light text-[#FFC533]/90 lowercase">New Era.</span>
              </h1>
              
              {/* Condensed Left Side Narrative */}
              <div className="flex flex-col gap-6 max-w-md">
                 <p className="text-sm md:text-base text-white/40 font-medium leading-relaxed italic">
                    In a world of digital noise, standing out requires more than aesthetics—it requires a strategic alignment of brand intent and technical performance that bridges the gap between your vision and global dominance.
                 </p>
              </div>
            </div>

            <div className="flex flex-row items-end justify-between w-full h-full pb-8">
              {/* BOTTOM LEFT: The Action */}
              <div className="flex flex-col items-start gap-8 max-w-xs">
                 <a 
                    href="#contact" 
                    className="group relative px-12 py-5 bg-[#FFC533] text-black font-bold tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105"
                  >
                    <span className="relative z-10 uppercase">Start Your Scale</span>
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white transition-transform duration-300" />
                  </a>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white/10" />
                    <span className="text-[9px] font-bold text-white/20 tracking-[0.3em] uppercase">Trusted Globally</span>
                  </div>
              </div>

              {/* BOTTOM RIGHT: The Expanded Narrative (Two Paragraphs) */}
              <div className="flex flex-col items-end text-right max-w-2xl">
                 <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-6">
                    We don't just build websites; we architect <span className="text-white font-bold uppercase italic">global growth engines</span>. By bridging the gap between local vision and digital dominance, we transform your brand into a scalable empire that works for you 24/7.
                 </p>
                 <p className="text-sm md:text-base text-white/30 font-medium leading-relaxed max-w-lg">
                    Our process is rooted in technical excellence and strategic clarity. We identify the unique leverage points in your business and amplify them through custom architecture, high-conversion design, and global deployment. 
                 </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIAGONAL WAVE CUT: Merges Hero and Below uniquely (Optimized & Taller) */}
        <motion.div 
          style={{ y: cutY, transform: "translateZ(0)" }}
          className="absolute bottom-0 left-0 w-full h-[30vh] z-30 pointer-events-none will-change-transform"
        >
          <svg viewBox="0 0 1440 400" className="w-full h-full fill-white" preserveAspectRatio="none">
            <path d="M0,400 L1440,400 L1440,0 C1080,300 360,-200 0,200 Z" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
