import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Search, Zap, MousePointerClick, ArrowUpRight } from 'lucide-react';

const TheGrowthEngine = () => {
  const { scrollYProgress } = useScroll();
  
  const solutions = [
    {
      id: "01",
      icon: <Layout className="text-black" size={32} strokeWidth={1.5} />,
      title: "Design That Builds Trust",
      desc: "Our designs make your business look like a global leader from day one. We turn visitors into believers in seconds.",
      stat: "94%",
      statDesc: "of first impressions are design-based",
      accent: "bg-blue-500/5"
    },
    {
      id: "02",
      icon: <Zap className="text-black" size={32} strokeWidth={1.5} />,
      title: "Pure Velocity",
      desc: "We build for speed. No waiting, no loading spinners. Just instant access to your products.",
      stat: "< 1s",
      statDesc: "average load time for our builds",
      accent: "bg-orange-500/5"
    },
    {
      id: "03",
      icon: <Search className="text-black" size={32} strokeWidth={1.5} />,
      title: "Being Found Easily",
      desc: "A great site is only useful if people find it. We make sure your business is the first one they see.",
      stat: "3x",
      statDesc: "average increase in reach",
      accent: "bg-purple-500/5"
    },
    {
      id: "04",
      icon: <MousePointerClick className="text-black" size={32} strokeWidth={1.5} />,
      title: "Turning Traffic to Sales",
      desc: "Every button is placed to guide your customer to the checkout. We build websites that sell.",
      stat: "40%+",
      statDesc: "increase in conversion rates",
      accent: "bg-green-500/5"
    }
  ];

  return (
    <section className="bg-white text-black relative" id="solutions">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-0 lg:gap-24">
        
        {/* Sticky Narrative Column */}
        <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 py-24 flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-6 block font-sans">The Advantage</span>
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
               How We <br/> Build Your <br/> <span className="text-black/10">Success.</span>
            </h2>
            <p className="text-base text-secondary leading-relaxed font-medium max-w-[280px]">
              We use 4 key pillars to ensure your business grows and stays ahead.
            </p>
          </motion.div>
        </div>

        {/* Scrollable Impact Column */}
        <div className="lg:w-2/3 flex flex-col pb-32">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative py-20 lg:py-32 border-b border-black/[0.03] group`}
            >
              {/* Subtle Back Accent */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${sol.accent} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10`}></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                <div className="flex flex-col gap-8 max-w-sm">
                   <div className="text-black/20 group-hover:text-black transition-all duration-500">
                     {sol.icon}
                   </div>
                   <div className="flex flex-col gap-4">
                      <h3 className="text-3xl font-black uppercase tracking-tight leading-none">{sol.title}</h3>
                      <p className="text-lg text-secondary group-hover:text-black transition-colors leading-relaxed font-medium">
                        {sol.desc}
                      </p>
                   </div>
                </div>

                <div className="flex flex-col items-start md:items-end text-left md:text-right shrink-0">
                  <span className="text-7xl lg:text-8xl font-black block leading-none tracking-tighter text-black/10 group-hover:text-black transition-colors duration-700">
                    {sol.stat}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/20 max-w-[150px] leading-tight mt-4">
                    {sol.statDesc}
                  </span>
                  
                  <div className="mt-8 flex items-center gap-3 text-black/10 group-hover:text-black transition-all cursor-pointer">
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">View Impact</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheGrowthEngine;
