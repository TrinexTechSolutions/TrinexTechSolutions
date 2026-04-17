import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Globe, Zap, Sparkles, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Local Image Imports
import syamImg from '../assets/our-team-images/syam-trinex.png';
import pradeepImg from '../assets/our-team-images/pradeep-trinex.png';
import ashokImg from '../assets/our-team-images/ashok-trinex.png';

const Team = () => {
  const { scrollY } = useScroll();
  
  // PARALLAX FOR THE HEADER
  const yHeader = useTransform(scrollY, [0, 600], [0, 300]);

  const founders = [
    {
      id: "01",
      name: "Syamsundar Rao Panga",
      image: syamImg,
      color: "#D591D5",
      description: "A focused graduate professional and strategic partner. Dedicated to the multi-disciplinary execution of the Trinex vision, ensuring every project is handled with shared responsibility and technical precision."
    },
    {
      id: "02",
      name: "Pradeep Varma Alluri",
      image: pradeepImg,
      color: "#6E60EE",
      description: "A committed graduate professional driving excellence across all facets of Trinex. Focused on the collective engineering of digital solutions, where every task is met with equal dedication and professional rigor."
    },
    {
      id: "03",
      name: "Ashok Chakravarti Patcha",
      image: ashokImg,
      color: "#00D1FF",
      description: "A graduate professional specialized in the seamless delivery of the Trinex mission. Working as an equal partner to ensure that every operational and technical blueprint is executed with absolute unity."
    }
  ];

  return (
    <main className="bg-white min-h-screen text-black overflow-x-hidden selection:bg-black selection:text-white relative team-3d-page">
      <Navbar />

      {/* BACKGROUND BLUEPRINT GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* 3D STYLIZED HEADER SECTION */}
      <motion.section 
        style={{ y: yHeader, transform: "translateZ(0)" }}
        className="relative pt-24 pb-12 px-6 lg:px-12 z-10 will-change-transform overflow-visible"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-12 relative z-10">
          <Link to="/" className="flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-black/40 hover:text-black transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </Link>
          
          <div className="perspective-[1000px] w-full">
             <motion.div 
               initial={{ rotateY: 30, rotateX: 5, skewY: 5, x: -50, opacity: 0 }}
               whileInView={{ rotateY: -10, rotateX: 0, skewY: -2, x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
               className="transform-gpu origin-left"
             >
                <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-black uppercase tracking-[-0.04em] leading-[0.8] mb-4 text-black drop-shadow-2xl font-sans">
                   MEET THE<br />
                   <span className="text-[#FFC533] relative">
                     TEAM.
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute -bottom-2 left-0 h-1 md:h-2 bg-[#FFC533]/30 w-full"
                     />
                   </span>
                </h1>
             </motion.div>
          </div>

          <div className="w-full flex justify-end">
             <div className="max-w-md flex flex-col gap-6 items-end">
                <div className="w-12 h-px bg-black/20"></div>
                <p className="text-xl text-black/60 font-medium leading-relaxed text-right">
                   Equality in vision. Unity in execution. Bridging the gap between graduation and global scale.
                </p>
             </div>
          </div>
        </div>
      </motion.section>

      {/* THE TEAM LIST */}
      <section className="relative z-20 pb-40 bg-white">
        {/* BLUEPRINT GRID ONLY FOR THE TEAM SECTION */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-40 lg:space-y-64 relative z-10 pt-20">
          {founders.map((founder, index) => (
             <TeamMemberCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="bg-black text-white py-40 relative overflow-hidden z-20">
         {/* SUBTLE GLOW FOR VISIBILITY */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#FFC533]/5 blur-[120px] rounded-full pointer-events-none"></div>
         
         <div className="absolute inset-x-0 bottom-0 text-[30vw] font-black opacity-[0.03] select-none leading-none -mb-20">
            TRINEX
         </div>
         <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center gap-12">
            <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter max-w-4xl text-white drop-shadow-2xl">
               Ready to Build Your <span className="text-[#FFC533] italic font-light lowercase">Legacy?</span>
            </h2>
            <Link 
              to="/#contact" 
              className="px-12 py-6 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-6 group bg-white/5 backdrop-blur-sm"
            >
               <span className="text-xs font-bold tracking-[0.4em] uppercase">Initialize Project</span>
               <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
         </div>
      </section>

      <Footer />
      
      {/* SCOPED CSS FOR 3D EFFECTS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .team-3d-page .perspective-1000 {
          perspective: 1000px;
        }
        .team-3d-page h1, .team-3d-page .heading-3d {
          text-shadow: 10px 10px 30px rgba(0,0,0,0.05);
        }
      `}} />
    </main>
  );
};

const TeamMemberCard = ({ founder, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity, transform: "translateZ(0)" }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
    >
      {/* IMAGE */}
      <div className="relative flex-1 group max-w-md">
         <div className="overflow-hidden relative aspect-[4/5] lg:aspect-[3/4] shadow-2xl bg-black">
            <motion.div 
              style={{ transform: "translateZ(0)" }} 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out"
            >
              <img 
                src={founder.image} 
                className="w-full h-full object-cover" 
                alt={founder.name}
              />
            </motion.div>
            
            {/* Technical Mask Overlays */}
            <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-white/0 transition-all duration-700"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-black/10" style={{ borderColor: `${founder.color}33` }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-black/10" style={{ borderColor: `${founder.color}33` }}></div>
         </div>
      </div>

      {/* CONTENT DETAILS */}
      <div className="flex-1 flex flex-col gap-10">
         <div className="perspective-[1000px] w-full">
            <motion.div 
              initial={{ rotateY: 30, skewY: 5, x: -30, opacity: 0 }}
              whileInView={{ rotateY: -8, skewY: -1, x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="transform-gpu origin-left"
            >
               <h3 className="heading-3d text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                  {founder.name.split(' ').map((word, i) => (
                    <span key={i} style={{ color: i === founder.name.split(' ').length - 1 ? founder.color : 'inherit' }}>
                      {word} {i < founder.name.split(' ').length - 1 && <br />}
                    </span>
                  ))}
               </h3>
               <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="h-1 mt-2"
                  style={{ backgroundColor: `${founder.color}4D` }}
               />
            </motion.div>
         </div>

         <div className="flex flex-col gap-8">
            <div className="h-px w-full bg-black/5"></div>
            <p className="text-xl text-black/60 font-medium leading-relaxed italic">
              "{founder.description}"
            </p>
            <div className="flex items-center gap-4 text-black/20">
               <GraduationCap size={24} />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Graduate Professional</span>
            </div>
         </div>
      </div>
    </motion.div>
  );
}

export default Team;
