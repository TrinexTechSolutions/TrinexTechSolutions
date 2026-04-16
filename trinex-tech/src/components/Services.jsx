import React, { useState, useEffect } from 'react';
import { Globe, Rocket, Layers, Brain, X, ArrowRight, Palette, Cpu, Server, Mail } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { scrollYProgress } = useScroll();
  
  // Parallel Axis: Skew and rotate based on scroll
  const skew = useTransform(scrollYProgress, [0.2, 0.5], [0, -5]);

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
      title: 'Website Design & Development',
      description: 'Your beautiful global home. We build high-speed websites that turn visitors into customers.',
      longDescription: 'A website is your 24/7 salesperson. We design stunning, easy-to-use platforms that don’t just look good but are engineered to grow your sales through professional design and lightning-fast speed.',
      icon: <Globe size={32} />
    },
    {
      id: '02',
      title: 'Mobile App Development',
      description: 'Put your business in your customer’s hands. Fast, reliable apps for iPhones and Androids.',
      longDescription: 'Reach your customers wherever they are. We build mobile applications that are fast, intuitive, and designed to keep people coming back to your brand every single day.',
      icon: <Rocket size={32} />
    },
    {
      id: '03',
      title: 'SEO & Search Optimization',
      description: 'Get found on Google. We make your business the first answer when customers search for help.',
      longDescription: 'If people can’t find you, they can’t buy from you. We use modern SEO strategies to push your business to the top of search results, ensuring you get the visibility you deserve.',
      icon: <Layers size={32} />
    },
    {
      id: '04',
      title: 'Custom Software Development',
      description: 'Software that solves your unique problems. Custom tools that help your business run itself.',
      longDescription: 'Stop using generic tools that don’t fit your needs. We build custom software specifically for your business processes, saving you time and money by automating the boring stuff.',
      icon: <Brain size={32} />
    },
    {
      id: '05',
      title: 'Branding & Graphic Design',
      description: 'Look like a industry leader. Professional logos and designs that command trust and respect.',
      longDescription: 'Your visual identity is the first thing people see. We create unique logos and brand designs that communicate power and reliability, making sure you stand out from the competition.',
      icon: <Palette size={32} />
    },
    {
      id: '06',
      title: 'AI & Business Automation',
      description: 'Leverage the power of AI. Smart tools that answer customers and analyze data instantly.',
      longDescription: 'The future is here. We integrate AI into your business to help you respond to clients faster, understand your data better, and stay years ahead of your competitors.',
      icon: <Cpu size={32} />
    },
    {
      id: '07',
      title: 'Deployment, Hosting & Maintenance',
      description: 'We keep your business online. Reliable hosting and continuous updates so your site never goes down.',
      longDescription: 'Launch with confidence. We handle the technical heavy lifting of putting your project online, ensuring it stays fast, secure, and up-to-date while you focus on running your business.',
      icon: <Server size={32} />
    },
    {
      id: '08',
      title: 'Email Marketing Services',
      description: 'Talk directly to your customers. High-impact email campaigns that drive repeat sales.',
      longDescription: 'Build relationships that last. We create professional email marketing systems that keep your customers engaged, informed, and always ready to buy from you again.',
      icon: <Mail size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 relative" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-widest text-black/30 mb-6 block px-1">Ready for Expansion?</span>
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
              Building Your <br />
              Digital Empire.
            </h2>
          </div>
          <div className="md:w-1/3 border-l border-black/10 pl-8 py-2">
            <p className="text-lg text-secondary font-medium leading-relaxed italic">
              "We don't just write code. Our services build the <strong className="text-black font-bold">global bridge</strong> between where you are and where you want to be."
            </p>
          </div>
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
                  className="text-[11px] font-bold tracking-widest flex items-center gap-2 group-hover:text-white transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                 >
                    See how

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
                      {selectedService.description}
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

