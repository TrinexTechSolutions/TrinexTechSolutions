import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MoveRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Team = () => {
  const [activeId, setActiveId] = useState(0);

  const founders = [
    {
      id: 0,
      name: "Panga Syamsundar Rao",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
      bio: "Visionary leader with a passion for digital business transformation. Building bridges to the global stage.",
      expertise: ["Strategy", "Growth", "Vision"]
    },
    {
      id: 1,
      name: "Alluri Pradeep Varma",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200",
      bio: "Technical mastermind specialized in high-performance engineering. Crafting the engines of the digital age.",
      expertise: ["Engineering", "Architecture", "AI"]
    },
    {
      id: 2,
      name: "Patcha Ashok Chakravarti",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1200",
      bio: "Operations expert focused on seamless delivery. Ensuring precision in every blueprint we execute.",
      expertise: ["Operations", "Scale", "Precision"]
    }
  ];

  return (
    <main className="bg-white min-h-screen text-black overflow-x-hidden">
      {/* HUD-STYLE FLOATING NAV (Ensures Clickability) */}
      <div className="fixed top-24 left-6 lg:left-12 z-[110] flex items-center gap-6">
        <Link 
          to="/" 
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </Link>
        <div className="hidden lg:flex flex-col gap-0.5">
          <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black/40">The Architects</span>
          <div className="w-8 h-[1px] bg-black/10"></div>
        </div>
      </div>

      <Navbar />
      
      {/* THE GALLERY: PURE FULL-SCREEN INTERACTION */}
      <section className="h-screen flex flex-col pt-0 overflow-hidden">
        <div className="flex-1 flex flex-col lg:flex-row h-full">
          {founders.map((founder) => (
            <motion.div 
              key={founder.id}
              onMouseEnter={() => setActiveId(founder.id)}
              onClick={() => setActiveId(founder.id)}
              className={`relative flex-1 group cursor-pointer overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                activeId === founder.id ? 'lg:flex-[3]' : 'lg:flex-[1]'
              }`}
            >
              {/* Image Layer */}
              <motion.div 
                className={`absolute inset-0 bg-black transition-all duration-1000 ${
                  activeId === founder.id ? 'grayscale-0' : 'grayscale'
                }`}
              >
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className={`w-full h-full object-cover transition-transform duration-[1500ms] ${
                    activeId === founder.id ? 'scale-100 opacity-90' : 'scale-110 opacity-30'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              </motion.div>

              {/* Text Layer */}
              <div className="absolute inset-0 p-8 lg:p-20 flex flex-col justify-end">
                <div className="flex flex-col gap-6">
                  {/* High-Impact Name */}
                  <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                    {founder.name.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>

                  {/* Bio Reveal (Only for Active slot) */}
                  <AnimatePresence>
                    {activeId === founder.id && (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-md flex flex-col gap-8 pb-4"
                      >
                         <div className="w-12 h-1 bg-white"></div>
                         <p className="text-xl text-white italic leading-relaxed font-sans">
                           "{founder.bio}"
                         </p>
                         <div className="flex flex-wrap gap-4">
                           {founder.expertise.map(skill => (
                             <span key={skill} className="text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/60">
                               {skill}
                             </span>
                           ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Indicator */}
              <div className="absolute top-8 right-8 lg:hidden">
                {activeId === founder.id ? <Minus className="text-white" size={32} /> : <Plus className="text-white" size={32} />}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="bg-black text-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-none italic opacity-20">ASSEMBLE.</h1>
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none -mt-16">Let's Build.</h2>
          </div>
          <Link to="/#contact" className="group flex items-center gap-8 text-2xl font-black uppercase tracking-[0.2em] hover:scale-105 transition-all">
             Start <MoveRight size={48} className="translate-y-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Team;
