import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <span className="section-number">01</span>
            <h2 className="text-4xl font-black uppercase tracking-tight leading-none mb-8">
              About <br/> Trinex Tech <br/> Solutions
            </h2>
            <div className="w-12 h-1 bg-black"></div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-black leading-tight"
            >
              Trinex Tech Solutions is a technology-driven company focused on delivering scalable, secure, and high-quality software solutions.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-secondary leading-relaxed"
            >
              We specialize in building robust web applications, managing seamless deployments, and delivering complete turnkey solutions. Our goal is simple — to transform ideas into powerful digital products that drive real business results.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, scaleX: 0 }}
               whileInView={{ opacity: 1, scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="h-px bg-border my-4 origin-left"
            ></motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
               <div>
                  <h4 className="text-3xl font-black">2026</h4>
                  <p className="text-[10px] font-bold uppercase text-secondary tracking-widest mt-2">Founded</p>
               </div>
               <div>
                  <h4 className="text-3xl font-black">100%</h4>
                  <p className="text-[10px] font-bold uppercase text-secondary tracking-widest mt-2">Commitment</p>
               </div>
               <div>
                  <h4 className="text-3xl font-black">Scalable</h4>
                  <p className="text-[10px] font-bold uppercase text-secondary tracking-widest mt-2">Architecture</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
