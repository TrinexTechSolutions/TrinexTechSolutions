import React, { useState, useEffect } from 'react';
import { Globe, Rocket, Layers, Brain, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

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
      title: 'Website Development',
      description: 'We build modern, responsive, and high-performance websites designed for scalability and user experience.',
      longDescription: 'Our website development service focuses on creating high-end digital experiences that are not only visually stunning but also technically superior. We use the latest technologies like React, Next.js, and advanced CSS to ensure your site is fast, SEO-friendly, and highly interactive. From landing pages to complex corporate portals, we deliver excellence at every pixel.',
      icon: <Globe size={32} />
    },
    {
      id: '02',
      title: 'Application Deployment',
      description: 'We ensure smooth, secure, and efficient deployment of applications across production environments.',
      longDescription: 'Deployment is more than just pushing code. We provide robust CI/CD pipelines, cloud infrastructure management (AWS, Azure, Vercel), and automated scaling solutions. Our goal is to ensure your application is always available, secure, and performing at its peak under any load.',
      icon: <Rocket size={32} />
    },
    {
      id: '03',
      title: 'Turnkey Solutions',
      description: 'We deliver complete end-to-end software solutions — from concept to deployment — ready for immediate use.',
      longDescription: 'Our turnkey solutions are designed for businesses that need a complete product without the hassle of managing multiple vendors. We handle everything from initial strategy and UI/UX design to backend development, testing, and final rollout. You get a market-ready product that aligns perfectly with your business objectives.',
      icon: <Layers size={32} />
    },
    {
       id: '04',
       title: 'Additional Expertise',
       description: 'Backend Engineering, API Development, Cloud Integration, and Performance Optimization.',
       longDescription: 'Beyond our core services, we offer specialized expertise in building robust backend architectures, designing secure REST/GraphQL APIs, and integrating complex cloud services. We also focus heavily on performance optimization to ensure your digital assets are running as efficiently as possible.',
       icon: <Brain size={32} />
    }
  ];

  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="mb-16">
           <h2 className="text-4xl font-black uppercase tracking-tight">What We Do</h2>
           <p className="text-secondary mt-4 max-w-lg">
             Our expertise spans across the entire software development lifecycle, ensuring excellence at every stage.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 flex flex-col gap-8 group hover:bg-black transition-all duration-500 hover:text-white cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-between items-start">
                 <div className="text-black group-hover:text-white transition-colors duration-500">
                   {service.icon}
                 </div>
                 <span className="text-xs font-mono text-secondary group-hover:text-white/50">{service.id}</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-none group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-border group-hover:border-white/20">
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="text-[10px] font-black tracking-widest uppercase flex items-center gap-2 group-hover:text-white transition-colors"
                 >
                    LEARN MORE
                    <div className="w-4 h-[1px] bg-black group-hover:bg-white"></div>
                 </button>
              </div>
            </motion.div>
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
              className="fixed top-24 right-8 w-14 h-14 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-all z-[10000]"
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
                    <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-6">{selectedService.title}</h2>
                  </div>
                  <div className="p-8 bg-black text-white rounded-full w-24 h-24 flex items-center justify-center mb-8 md:mb-0">
                    {React.cloneElement(selectedService.icon, { size: 48 })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                  <div className="flex flex-col gap-8">
                    <p className="text-2xl lg:text-3xl font-bold leading-tight text-foreground">
                      {selectedService.description}
                    </p>
                    <div className="w-12 h-1 bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col gap-12">
                    <p className="text-lg text-secondary leading-relaxed font-medium">
                      {selectedService.longDescription}
                    </p>
                    
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedService(null)}
                      className="btn-primary group flex items-center gap-2 transition-all w-fit"
                    >
                      GET STARTED
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

