import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      id: '01',
      title: 'Civic Technologies',
      description: 'Building modern digital infrastructure for civic engagement and government transparency.',
      longDescription: 'Civic Technologies is a flagship project aimed at bridging the gap between citizens and local governance. We developed a highly secure, transparent platform that allows for real-time tracking of public projects, digital voting, and direct communication with representatives. The architecture handles massive traffic while maintaining strict data privacy standards.',
      category: 'Software Solutions',
      image: '/Civic2.png',
      link: 'https://www.civictechno.com/'
    },
    {
      id: '02',
      title: 'Dandu Interiors',
      description: 'A premium interior design platform showcasing elegant spaces and architectural excellence.',
      longDescription: 'Dandu Interiors required a digital presence that matched their sophisticated physical designs. We built a visually immersive portfolio site featuring high-resolution galleries, interactive 3D room tours, and a streamlined consultation booking system. The site emphasizes minimalist elegance and lightning-fast performance across all devices.',
      category: 'Design & Tech',
      image: '/Dandu2.png',
      link: 'https://www.civictechno.com/' // Placeholder for Dandu Interiors
    }
  ];

  return (
    <section id="portfolio" className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
           <div>
             <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Our Work</h2>
             <p className="text-secondary mt-4 max-w-lg">
                Each project reflects our commitment to performance, reliability, and precision.
             </p>
           </div>
           <div className="hidden lg:block h-px flex-1 bg-border mx-12 mb-6"></div>
           <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-6">
              RECENT DELIVERIES
           </div>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div 
                className="lg:col-span-7 overflow-hidden border border-border group-hover:border-black transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-secondary">{project.id}</span>
                  <span className="w-8 h-[1px] bg-border group-hover:bg-black transition-all"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-black transition-all">
                    {project.category}
                  </span>
                </div>

                <h3 
                  className="text-3xl lg:text-4xl font-black tracking-tight group-hover:underline underline-offset-8 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-lg text-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary flex items-center justify-center gap-3 w-fit group"
                  >
                    VIEW DETAILS
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col"
          >
            {/* Floating Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-24 right-8 w-14 h-14 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-all z-[10000]"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto px-6 lg:px-12 py-24 no-scrollbar">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-black/40">{selectedProject.id}</span>
                    <span className="w-12 h-px bg-black/10"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-black/60">{selectedProject.category}</span>
                  </div>
                  <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-12">{selectedProject.title}</h2>
                  
                  <div className="w-full aspect-[21/9] overflow-hidden bg-border mb-24">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                  <div className="flex flex-col gap-8">
                    <p className="text-2xl lg:text-3xl font-bold leading-tight text-foreground">
                      {selectedProject.description}
                    </p>
                    <div className="w-12 h-1 bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col gap-12">
                    <p className="text-lg text-secondary leading-relaxed font-medium">
                      {selectedProject.longDescription}
                    </p>
                    
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary group flex items-center gap-2 transition-all w-fit"
                    >
                      VISIT LIVE SITE
                      <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
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

export default Portfolio;

