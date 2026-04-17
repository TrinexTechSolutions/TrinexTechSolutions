import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    "End-to-End Ownership",
    "Scalable Architecture",
    "Strong Backend Expertise",
    "Clean Code Practices",
    "Reliable Delivery"
  ];

  return (
    <section id="why-choose-us" className="py-12" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
           <div>
             <header>
               <h2 id="why-heading" className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-8 text-black">
                 The Trinex <br/><span className="text-[#FFC533]">Advantage</span>
               </h2>
             </header>
             <p className="text-lg text-secondary leading-relaxed max-w-md">
               We build long-term partnerships by consistently delivering value and quality. Our focus is on the <strong className="text-black">long-term success</strong> of your digital ecosystem.
             </p>
           </div>

           <div className="flex flex-col gap-6" role="list">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-6 p-6 transition-all duration-300"
                  role="listitem"
                >
                  <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all" aria-hidden="true">
                    <Check size={20} />
                  </div>
                  <span className="text-xl font-bold uppercase tracking-tight">
                    {point}
                  </span>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
