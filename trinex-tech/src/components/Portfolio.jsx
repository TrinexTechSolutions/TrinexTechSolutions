import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Plus, Sparkles } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Civic Technologies',
    description: 'Taking an industrial giant from local spreadsheets to a global digital authority.',
    image: '/civic-techno.png',
    link: 'https://www.civictechno.com/',
    tags: ['Enterprise Architecture', 'B2B Digital'],
    color: '#FFC533'
  },
  {
    id: '02',
    title: 'Dandu Interiors',
    description: 'Turning a local design studio into a visually immersive brand recognized across borders.',
    image: '/dandu-interior.png',
    link: 'https://www.danduinteriors.com/',
    tags: ['Luxury Branding', 'Creative UI'],
    color: '#FFC533'
  }
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Snappier spring for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.001
  });

  // Background color shift: White to warm cream/gold
  const bgColor = useTransform(
    smoothProgress, 
    [0, 0.5, 1], 
    ["#ffffff", "#ffffff", "#FFFBF0"] // Subtly warms up as you reach the second card
  );

  return (
    <motion.section 
      ref={containerRef} 
      id="portfolio" 
      style={{ 
        height: `${projects.length * 150}vh`,
        backgroundColor: bgColor 
      }}
      className="relative text-black transition-colors duration-700"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start pt-16 md:pt-24 px-6 lg:px-24">

        {/* Subtle Decorative Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] bg-[size:60px_60px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]" />

        {/* Portfolio Introduction Manifesto */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-6">
           <motion.div 
             style={{ 
               opacity: useTransform(smoothProgress, [0, 0.12], [1, 0]),
               y: useTransform(smoothProgress, [0, 0.12], [0, -100])
             }}
             className="flex flex-col items-center text-center max-w-4xl"
           >
              <h3 className="text-[clamp(1.5rem,5vw,3rem)] font-bold italic tracking-tight leading-tight text-black/80">
                "We don't just build pixels; we architect <span className="text-black font-black not-italic underline decoration-[#FFC533] decoration-4 underline-offset-8">Growth Engines</span> that scale."
              </h3>
           </motion.div>
        </div>

        {/* Repositioned Header: Small & Left */}
        <header className="relative z-50 mb-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#FFC533]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Case Archives</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
            OUR <span className="text-[#FFC533]">WORK.</span>
          </h2>
        </header>

        {/* Optimized Sticky Stack */}
        <div className="relative w-full flex-1 flex items-start justify-center">
          {projects.map((project, index) => (
            <ArchiveCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              progress={smoothProgress}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
};

const ArchiveCard = ({ project, index, total, progress }) => {
  // Rebalanced triggers for better friction and view-time
  const start = index === 0 ? 0 : 0.45; // Project 2 now waits longer to surface
  const pauseEnd = index === 0 ? 0.45 : 1.0;

  const y = useTransform(progress, [start, start + 0.25], [1000, 0]);
  const scale = useTransform(progress, [pauseEnd, pauseEnd + 0.15], [1, 0.96]);
  const opacity = useTransform(progress, [start, start + 0.1, pauseEnd, pauseEnd + 0.1], [0, 1, 1, 0]);
  const zIndex = index + 10;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex,
        willChange: "transform, opacity"
      }}
      className="absolute w-full max-w-6xl aspect-[21/9] flex flex-col lg:flex-row bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden border border-black/[0.05]"
    >
      {/* Visual Side */}
      <div className="relative flex-[1.4] overflow-hidden bg-[#f8f8f8] flex items-center justify-center p-4">
        <img
          src={project.image}
          className="w-full h-full object-contain"
          alt={project.title}
          loading="lazy"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] pointer-events-none" />
      </div>

      {/* Content Side */}
      <div className="flex-1 p-8 lg:p-14 flex flex-col justify-between bg-white">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono font-bold text-black/20 uppercase tracking-widest">Digital Solution</span>
            <div className="flex gap-2">
              {project.tags.slice(0, 1).map(tag => (
                <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-[#FFC533] border border-[#FFC533]/20 px-2 py-1">{tag}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-tight text-black">
              {project.title}
            </h3>
            <p className="text-base lg:text-lg font-medium text-black/40 leading-relaxed max-w-md italic border-l-2 border-black/5 pl-6">
              "{project.description}"
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          <div className="h-[1px] w-full bg-black/5" />
          <div className="flex items-center justify-between">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-black"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#FFC533] transition-all">Visit Website</span>
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#FFC533] group-hover:border-[#FFC533] group-hover:text-white transition-all">
                <ArrowUpRight size={16} />
              </div>
            </motion.a>

            <Plus size={14} className="opacity-10" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;







