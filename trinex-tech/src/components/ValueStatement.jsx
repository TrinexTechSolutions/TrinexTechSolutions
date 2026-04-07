import React from 'react';
import { motion } from 'framer-motion';

const ValueStatement = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-white mb-8 block">
             CORE PHILOSOPHY
           </span>
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-5xl mx-auto text-balance text-white">
             We don’t just develop software — we build systems that are reliable, scalable, and built to last.
           </h2>
         </motion.div>
      </div>
    </section>
  );
};

export default ValueStatement;
