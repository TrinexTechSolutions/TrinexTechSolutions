import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, Globe2 } from 'lucide-react';

const TheTransformation = () => {
  const { scrollYProgress } = useScroll();

  const scale  = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const xLeft  = useTransform(scrollYProgress, [0.4, 0.6], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

  return (
    <section id="pivot" className="py-32 bg-black text-white relative overflow-hidden">

      {/* Background ghost text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[30vw] font-black uppercase leading-none -ml-20">FUTURE</h2>
        <h2 className="text-[30vw] font-black uppercase leading-none ml-20">GROWTH</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div style={{ scale, opacity }} className="flex flex-col items-center text-center mb-32">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-white/30 mb-8 block">The Real Difference</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Local Pride <br />
            <span className="text-white/20">Global Power.</span>
          </h2>
          <p className="max-w-2xl text-xl md:text-2xl font-medium text-white/60 leading-relaxed">
            We don't just put you online. We give your business a global voice and the power to reach people you never thought possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            style={{ x: xLeft }}
            className="p-10 lg:p-12 border border-white/[0.06] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-700 flex flex-col gap-12 group"
          >
            <Users size={40} strokeWidth={1} className="text-white/20 group-hover:text-white transition-colors duration-500" />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black uppercase leading-tight text-white">More <br /> People</h3>
              <p className="text-white/40 group-hover:text-white/70 transition-colors font-medium font-sans text-sm leading-relaxed">
                Instead of waiting for people to walk past your door, you show up in front of everyone, everywhere.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 lg:p-12 border border-white/[0.06] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-700 flex flex-col gap-12 group md:-mt-8 md:mb-8"
          >
            <TrendingUp size={40} strokeWidth={1} className="text-white/20 group-hover:text-white transition-colors duration-500" />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black uppercase leading-tight text-white">Real <br /> Sales</h3>
              <p className="text-white/40 group-hover:text-white/70 transition-colors font-medium font-sans text-sm leading-relaxed">
                A simple page is nice, but a system that finds customers and makes sales is what grows your bank account.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ x: xRight }}
            className="p-10 lg:p-12 border border-white/[0.06] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-700 flex flex-col gap-12 group"
          >
            <Globe2 size={40} strokeWidth={1} className="text-white/20 group-hover:text-white transition-colors duration-500" />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black uppercase leading-tight text-white">No <br /> Limits</h3>
              <p className="text-white/40 group-hover:text-white/70 transition-colors font-medium font-sans text-sm leading-relaxed">
                Your town has a ceiling. The internet doesn't. We build the bridge that takes you past your limits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheTransformation;
