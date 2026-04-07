import React from 'react';
import { Globe, Rocket, Layers, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Website Development',
      description: 'We build modern, responsive, and high-performance websites designed for scalability and user experience.',
      icon: <Globe size={32} />
    },
    {
      id: '02',
      title: 'Application Deployment',
      description: 'We ensure smooth, secure, and efficient deployment of applications across production environments.',
      icon: <Rocket size={32} />
    },
    {
      id: '03',
      title: 'Turnkey Solutions',
      description: 'We deliver complete end-to-end software solutions — from concept to deployment — ready for immediate use.',
      icon: <Layers size={32} />
    },
    {
       id: '04',
       title: 'Additional Expertise',
       description: 'Backend Engineering, API Development, Cloud Integration, and Performance Optimization.',
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
              className="p-10 flex flex-col gap-8 group hover:bg-black transition-all duration-500 hover:text-white"
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
                 <a href="#contact" className="text-[10px] font-black tracking-widest uppercase flex items-center gap-2 group-hover:text-white transition-colors">
                    LEARN MORE
                    <div className="w-4 h-[1px] bg-black group-hover:bg-white"></div>
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
