import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldAlert, ZapOff, UserX, BarChart3 } from 'lucide-react';

const TheHiddenCosts = () => {
  const { scrollYProgress } = useScroll();
  
  // Shader-style scaling/parallax
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const problems = [
    {
      icon: <ShieldAlert className="text-black/40" />,
      title: "The Trust Gap",
      desc: "If your website looks old, customers assume your business is too. One bad first impression kills 90% of sales.",
      color: "bg-red-50/50"
    },
    {
      icon: <ZapOff className="text-black/40" />,
      title: "The Speed Tax",
      desc: "Every second your site takes to load, you lose 20% of your visitors. Slow tech is a tax on your growth.",
      color: "bg-blue-50/50"
    },
    {
      icon: <UserX className="text-black/40" />,
      title: "The Ghost Town",
      desc: "A beautiful site with no SEO is just a billboard in the desert. If they can't find you, you don't exist.",
      color: "bg-orange-50/50"
    },
    {
      icon: <BarChart3 className="text-black/40" />,
      title: "The Leaky Bucket",
      desc: "Getting traffic but no sales? Your design is likely confusing your customers instead of helping them.",
      color: "bg-green-50/50"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="problems">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2 sticky top-32">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-black/30 mb-6 block">The Real Cost</span>
            <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              What Is <br/> Holding <br/> You <span className="text-black/10">Back?</span>
            </h2>
            <p className="text-xl text-secondary font-medium leading-relaxed max-w-md">
              Most businesses don't realize that a bad website isn't just "not helping"—it's actively pushing your customers into the arms of your competitors.
            </p>
            
            <div className="mt-12 flex items-center gap-4 text-sm font-black uppercase tracking-widest text-black/20">
              <div className="w-12 h-[1px] bg-black/10"></div>
              <span>Scroll to see the wall</span>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-8">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`p-10 border border-black/5 ${problem.color} flex flex-col gap-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-default`}
              >
                <div className="w-14 h-14 bg-white border border-black/5 flex items-center justify-center">
                   {problem.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{problem.title}</h3>
                  <p className="text-secondary leading-relaxed font-medium">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Abstract Background Elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/[0.01] rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default TheHiddenCosts;
