import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete(); // Call immediately when 100 is reached
          return 100;
        }
        return prev + 1;
      });
    }, 15); // Faster progress increment

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
      animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
      exit={{ 
        clipPath: "circle(0% at 50% 50%)",
        opacity: 0,
        scale: 1.2,
        transition: { 
          duration: 1.2, 
          ease: [0.76, 0, 0.24, 1] 
        }
      }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative w-full max-w-md px-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFC533]">Trinex Tech</span>
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Initializing Infrastructure...</span>
            </motion.div>
            <span className="text-2xl font-black text-white tabular-nums">{progress}%</span>
          </div>

          <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-[#FFC533] shadow-[0_0_15px_rgba(255,197,51,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>

          <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-white/20">
            <span>Global Scale Engine v1.0</span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
