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
      title: 'Full-Stack Web Development',
      description: 'We build modern, responsive, and high-performance websites using React, Next.js, and Node.js.',
      longDescription: 'Our website development service focuses on creating high-end digital experiences that are not only visually stunning but also technically superior. We prioritize speed, SEO-ready architectures, and scalable cloud hosting to ensure your business stays ahead.',
      icon: <Globe size={32} />
    },
    {
      id: '02',
      title: 'Mobile App Development',
      description: 'Expert iOS and Android app development using React Native and Flutter for seamless user experiences.',
      longDescription: 'From initial wireframing to App Store and Google Play deployment, we build high-performance mobile applications. We focus on native-like performance, secure backend integration, and intuitive UI/UX design.',
      icon: <Rocket size={32} />
    },
    {
      id: '03',
      title: 'Digital Marketing & SEO',
      description: 'Data-driven SEO services, PPC management, and social media marketing to scale your online presence.',
      longDescription: 'Our digital marketing strategies are built on data. We provide comprehensive SEO audits, GEO (AI search optimization), and result-oriented content marketing to drive organic growth and maximize ROI.',
      icon: <Layers size={32} />
    },
    {
      id: '04',
      title: 'Custom Software Engineering',
      description: 'Bespoke software solutions including ERP, CRM, and API development for complex business needs.',
      longDescription: 'We solve complex business problems with custom-engineered software. Our expertise includes building robust microservices, secure API landscapes, and cloud-native applications that scale with your enterprise.',
      icon: <Brain size={32} />
    }
  ];

  return (
    <section id="services" className="py-12" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="mb-16">
           <h2 id="services-heading" className="text-4xl font-black uppercase tracking-tight">Expert IT Services</h2>
           <p className="text-secondary mt-4 max-w-lg">
             Our expertise spans the entire digital lifecycle, ensuring <strong className="text-black">performance-driven results</strong> at every stage.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="p-10 flex flex-col gap-8 group hover:bg-black transition-all duration-500 hover:text-white cursor-pointer"
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
                    LEARN MORE
                    <div className="w-4 h-[1px] bg-black group-hover:bg-white"></div>
                 </button>
              </div>
            </article>
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

