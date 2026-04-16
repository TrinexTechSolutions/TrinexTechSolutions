import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TransitionWaves = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Balanced reveal for taller, more majestic waves
  const yFront = useTransform(scrollYProgress, [0, 0.7], ["100vh", "-20vh"]);
  const yBack  = useTransform(scrollYProgress, [0, 0.8], ["100vh", "-30vh"]);
  const xSway  = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  // Taller asymmetric multi-peak path (Higher peaks)
  const wavePath = "M0,400 C150,200 300,600 450,350 C600,100 750,700 900,400 C1100,50 1300,400 1440,300 V800 H0 Z";

  return (
    <div 
      ref={containerRef} 
      className="relative h-[80vh] bg-black overflow-hidden z-20"
    >
      {/* Background Layer (Misty Gray) */}
      <motion.div 
        style={{ y: yBack, x: "1%" }}
        className="absolute inset-0 w-[105%] h-full opacity-50"
      >
        <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#888888" d={wavePath} />
        </svg>
      </motion.div>

      {/* Front Primary Layer (Pure White) */}
      <motion.div 
        style={{ y: yFront, x: xSway }}
        className="absolute inset-0 w-[105%] left-[-2%] h-full"
      >
        <svg viewBox="0 0 1440 800" className="w-full h-full drop-shadow-[0_-5px_15px_rgba(255,255,255,0.3)]" preserveAspectRatio="none">
          <path fill="white" d={wavePath} />
        </svg>
        <div className="w-full h-screen bg-white -mt-1" />
      </motion.div>
    </div>
  );
};

export default TransitionWaves;
