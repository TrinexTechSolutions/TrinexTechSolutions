import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: '01',
      title: 'Civic Technologies',
      description: 'Building modern digital infrastructure for civic engagement and government transparency.',
      category: 'Software Solutions',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '02',
      title: 'Dandu Interiors',
      description: 'A premium interior design platform showcasing elegant spaces and architectural excellence.',
      category: 'Design & Tech',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
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
              <div className="lg:col-span-7 overflow-hidden border border-border group-hover:border-black transition-all duration-500">
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

                <h3 className="text-3xl lg:text-4xl font-black tracking-tight group-hover:underline underline-offset-8">
                  {project.title}
                </h3>

                <p className="text-lg text-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4">
                  <a href="https://www.civictechno.com/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-3 w-fit group">
                    VIEW DETAILS
                    <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
