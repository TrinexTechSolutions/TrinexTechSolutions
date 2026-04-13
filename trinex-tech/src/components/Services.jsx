import React, { useState, useEffect } from 'react';
import { Globe, Rocket, Layers, Brain, X, ArrowRight, Zap } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { scrollYProgress } = useScroll();
  
  // Parallel Axis: Skew and rotate based on scroll
  const skew = useTransform(scrollYProgress, [0.2, 0.5], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const services = [
    {
      id: '01',
      title: 'Global Growth Platforms',
      description: 'Your local shop, now open to 8 billion people. High-performance growth architectures.',
      longDescription: 'A website is your 24/7 salesperson. We build platforms that don’t just look good but are engineered to convert visitors into lifelong customers through psychological design and technical speed.',
      icon: <Globe size={32} />
    },
    {
      id: '02',
      title: 'Mobile Reach Systems',
      description: 'Being in your customer’s pocket is the ultimate expansion strategy. iOS & Android experts.',
      longDescription: 'We develop mobile applications that feel native, fast, and indispensable. Our focus is on retention—keeping your brand top-of-mind every time your customer picks up their phone.',
      icon: <Rocket size={32} />
    },
    {
      id: '03',
      title: 'Search Engine Dominance',
      description: 'Be the first answer to your customer’s questions. SEO and AI-Search optimization.',
      longDescription: 'Visibility is oxygen for business. We use data-driven SEO and the latest AI-search strategies (GEO) to ensure that when your potential clients search, you are the only one they see.',
      icon: <Layers size={32} />
    },
    {
      id: '04',
      title: 'Operational Automation',
      description: 'Software that works while you sleep. Custom ERP, CRM, and automated workflows.',
      longDescription: 'As you grow, your operations must scale. We build custom software that automates the boring stuff, freeing you to focus on the big-picture vision of your expanding empire.',
      icon: <Brain size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 relative" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <motion.div 
          style={{ opacity }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
           <div className="md:w-1/2">
             <div className="flex items-center gap-2 text-xs font-black tracking-widest text-black/40 uppercase mb-4">
               <Zap size={14} />
               <span>Phase 4: Getting Started</span>
             </div>
             <h2 id="services-heading" className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-none">The Path <br/> To Success</h2>
           </div>
           <p className="md:w-1/3 text-secondary text-lg leading-relaxed border-l border-black/10 pl-8">
             We provide the technical <strong className="text-black">tools</strong> and the plan you need to grow your business anywhere in the world.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ skewY: skew }}
              className="p-10 flex flex-col gap-8 group hover:bg-black transition-all duration-500 hover:text-white cursor-pointer border-r border-b border-black/5"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-between items-start">
                 <div className="text-black group-hover:text-white transition-colors duration-500" aria-hidden="true">
                   {service.icon}
                 </div>
                 <span className="text-xs font-mono text-secondary group-hover:text-white/50">{service.id}</span>
              </div>
              
              <header>
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-none group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </header>

              <div className="mt-auto pt-4 border-t border-border group-hover:border-white/20">
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="text-[10px] font-black tracking-widest uppercase flex items-center gap-2 group-hover:text-white transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                 >
                    SEE HOW

                    <div className="w-4 h-[1px] bg-black group-hover:bg-white"></div>
                 </button>

              </div>
            </motion.article>
          ))}
        </div>
      </div>


      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col"
          >
            {/* Floating Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="fixed top-12 right-8 w-14 h-14 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-all z-[10000]"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto px-6 lg:px-12 py-24 no-scrollbar">
              <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <span className="text-xs font-mono text-black/40 mb-4 block">{selectedService.id}</span>
                    <h2 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter mb-6 underline decoration-black/5 underline-offset-8">{selectedService.title}</h2>
                  </div>
                  <div className="p-8 bg-black text-white rounded-full w-24 h-24 flex items-center justify-center mb-8 md:mb-0">
                    {React.cloneElement(selectedService.icon, { size: 48 })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                  <div className="flex flex-col gap-8">
                    <p className="text-2xl lg:text-4xl font-bold leading-tight text-foreground">
                      {service.description}
                    </p>
                    <div className="w-24 h-2 bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col gap-12">
                    <p className="text-xl text-secondary leading-relaxed font-medium">
                      {selectedService.longDescription}
                    </p>
                    
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedService(null)}
                      className="btn-primary group flex items-center gap-3 transition-all w-fit px-12 py-6 text-lg"
                    >
                      BEGIN EXPANSION
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;

