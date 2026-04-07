import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const About = () => {
  const [showFounders, setShowFounders] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showFounders) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showFounders]);

  const founders = [
    {
      name: "Panga Syamsundar Rao",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bio: "Visionary leader with a passion for scalable software architecture and digital business transformation."
    },
    {
      name: "Alluri Pradeep Varma",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      bio: "Technical mastermind specialized in high-performance engineering, cloud infrastructure, and backend security."
    },
    {
      name: "Patcha Ashok Chakravarti",
      role: "Co-Founder & COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
      bio: "Operations expert focused on seamless delivery, turnkey solutions, and international business scaling."
    }
  ];

  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black uppercase tracking-tight leading-none mb-8">
              About <br /> Trinex Tech <br /> Solutions
            </h2>
            <div className="w-12 h-1 bg-black mb-12"></div>
            
            <button 
              onClick={() => setShowFounders(true)}
              className="btn-primary group flex items-center gap-2 transition-all w-fit"
            >
              VIEW MORE
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="md:w-2/3 flex flex-col gap-8">
            <p className="text-2xl lg:text-3xl font-bold leading-tight text-foreground">
              Trinex Tech Solutions is a technology-driven company focused on delivering scalable, secure, and high-quality software solutions.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              We specialize in building robust web applications, managing seamless deployments, and delivering complete turnkey solutions. Our goal is simple — to transform ideas into powerful digital products that drive real business results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-black mb-4">Our Vision</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  To be the global benchmarks for engineering excellence and digital innovation.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-black mb-4">Our Mission</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  Empowering businesses through cutting-edge technology that scales with their ambition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Modal */}
      <AnimatePresence>
        {showFounders && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col"
          >
            {/* Floating Close Button */}
            <button 
              onClick={() => setShowFounders(false)}
              className="fixed top-24 right-8 w-14 h-14 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-all z-[10000]"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto px-6 lg:px-12 py-24 no-scrollbar">
              <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                  <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-6">Founders</h2>
                  <p className="text-xl text-secondary max-w-2xl font-medium leading-relaxed">Meet the visionary leadership driving the future of scalable software engineering at Trinex Tech Solutions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                  {founders.map((founder, index) => (
                    <motion.div 
                      key={founder.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className="group flex flex-col gap-8"
                    >
                      <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-border shadow-2xl">
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-3xl font-black uppercase tracking-tight leading-none">{founder.name}</h3>
                          <p className="text-xs font-bold uppercase tracking-widest text-black/50">{founder.role}</p>
                        </div>
                        <p className="text-base text-secondary leading-relaxed mt-2 italic">
                          "{founder.bio}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
