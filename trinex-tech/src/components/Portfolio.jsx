import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, X, ArrowRight, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();

  // Parallel Axis: Images slide at a different rate than the container
  const yImage = useTransform(scrollYProgress, [0.3, 0.7], [0, -100]);

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
      description: 'Taking an industrial giant from local spreadsheets to a global digital authority.',
      longDescription: 'Civic Techno Services had the expertise but lacked the digital presence to compete globally. We engineered a robust platform that didn’t just list their services, but established them as regional thought leaders. The result? A 40% increase in international inquiries within the first 6 months.',
      category: 'Global Expansion',
      image: '/Civic2.png',
      link: 'https://www.civictechno.com/'
    },
    {
      id: '02',
      title: 'Dandu Interiors',
      description: 'Turning a local design studio into a visually immersive brand recognized across borders.',
      longDescription: 'Design is visual. Dandu Interiors needed a portfolio that lived up to the quality of their physical work. We built a lightning-fast, visually immersive app that highlights their craftsmanship. Now, their digital front door is as beautiful as the homes they design.',
      category: 'Brand Evolution',
      image: '/Dandu2.png',
      link: 'https://dandu-interior.vercel.app/'
    }
  ];

  return (
    <section id="portfolio" className="py-24" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
          <header>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FFC533] uppercase mb-4">
               <BarChart3 size={14} />
               <span>Phase 4: Proof of Growth</span>
             </div>
            <h2 id="portfolio-heading" className="text-4xl lg:text-7xl font-black uppercase tracking-tight">Success <br/><span className="text-[#FFC533]">Stories</span></h2>
            <p className="text-secondary mt-8 max-w-lg text-lg leading-relaxed">
              We don’t just deliver projects; we deliver <strong className="text-black">market dominance</strong>. See how these businesses expanded their horizons.
            </p>
          </header>
          <div className="hidden lg:block h-px flex-1 bg-border mx-12 mb-6"></div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-6">
            REAL IMPACT
          </div>
        </div>

        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              <div
                className="lg:col-span-7 overflow-hidden transition-all duration-500 cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-black/5 skewed-container -z-10"></div>
                <motion.div style={{ y: yImage }}>
                    <img
                      src={project.image}
                      alt={`${project.title} success case`}
                      className="w-full aspect-[16/9] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none scale-110"
                      loading="lazy"
                    />
                </motion.div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-secondary">{project.id}</span>
                  <span className="w-8 h-[1px] bg-border group-hover:bg-black transition-all"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-black transition-all">
                    {project.category}
                  </span>
                </div>

                <h3
                  className="text-4xl lg:text-5xl font-black tracking-tighter group-hover:underline underline-offset-8 cursor-pointer leading-none"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-xl text-secondary leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary flex items-center justify-center gap-3 w-fit group px-10 py-5"
                    aria-label={`View project details for ${project.title}`}
                  >
                    LEARN THE STRATEGY
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
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
              className="fixed top-12 right-8 w-14 h-14 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-all z-[10000]"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto px-6 lg:px-12 py-24 no-scrollbar">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-black">{selectedProject.id}</span>
                    <span className="w-12 h-px bg-black"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-black">{selectedProject.category}</span>
                  </div>
                  <h2 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter mb-12 text-black underline decoration-black/5 underline-offset-[20px]">{selectedProject.title}</h2>

                  <div className="w-full aspect-[21/9] overflow-hidden mb-24 flex items-center justify-center bg-black/5 rounded-3xl p-12">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                  <div className="flex flex-col gap-8">
                    <p className="text-2xl lg:text-4xl font-bold leading-tight text-foreground">
                      {selectedProject.description}
                    </p>
                    <div className="w-24 h-2 bg-black"></div>
                  </div>

                  <div className="flex flex-col gap-12">
                    <p className="text-xl text-secondary leading-relaxed font-medium">
                      {selectedProject.longDescription}
                    </p>

                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group flex items-center gap-4 transition-all w-fit px-12 py-6 text-lg"
                    >
                      VISIT LIVE SITE
                      <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
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

