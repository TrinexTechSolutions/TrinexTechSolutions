import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Tightened Cinematic Transforms
  const textX1 = useTransform(scrollYProgress, [0, 0.35], [-100, 0]);
  const textX2 = useTransform(scrollYProgress, [0.05, 0.45], [100, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 0.95], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="h-[110vh] relative bg-white overflow-hidden">
      <div id="about" />
      
      <div className="sticky top-[80px] h-[calc(100vh-80px)] w-full flex items-center justify-center">
        
        <motion.div 
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 z-0 will-change-transform will-change-opacity"
        >
          <img 
            src="/world_abstract.png" 
            alt="Global Network" 
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <div className="max-w-7xl w-full px-6 lg:px-12 z-10 flex flex-col items-center pt-10 will-change-transform">
           <div className="flex flex-col items-center text-center">
              <motion.h2 
                style={{ x: textX1 }}
                className="text-6xl md:text-9xl lg:text-[10vw] font-black uppercase tracking-tighter leading-none mb-4 will-change-transform text-black"
              >
                The World <br /> <span className="text-black/5 italic">Is Waiting</span>
              </motion.h2>
              <motion.h2 
                style={{ x: textX2 }}
                className="text-6xl md:text-9xl lg:text-[10vw] font-black uppercase tracking-tighter leading-none will-change-transform text-black"
              >
                To Find You.
              </motion.h2>
           </div>

           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="max-w-2xl text-center mt-12 flex flex-col items-center gap-8"
           >
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-black italic border-y border-black/5 py-8">
                "For most, a website is just a page. For us, it’s a living bridge that finds customers while you sleep."
              </p>
              
              <div className="flex flex-col gap-8 items-center">
                <p className="text-lg text-black/60 leading-relaxed font-medium font-sans">
                   We take what you do best and give it a global stage, ensuring your business is the first answer customers find, anywhere in the world.
                </p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
