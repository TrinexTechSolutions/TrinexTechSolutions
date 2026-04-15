import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldAlert, ChevronRight, Globe2 } from 'lucide-react';

/* ─────────────────────────────────────────────
   Performance rules applied throughout:
   - will-change: transform on every animated element
   - No blur filters during scroll
   - No box-shadow on scroll-animated elements
   - clipPath on its own GPU-composited layer
   - No nested sticky — single sticky wrapper
   - No scale transforms on large containers
   - Simplified motion value chains
───────────────────────────────────────────── */

/* ── Vertical split word ── */
const SplitWord = ({ children, xLeft, xRight }) => (
  <span className="relative inline-block whitespace-nowrap">
    <motion.span
      aria-hidden="true"
      style={{ x: xLeft, willChange: 'transform' }}
      className="absolute inset-0 block overflow-hidden"
    >
      <span style={{ clipPath: 'inset(0 50% 0 0)' }} className="block">{children}</span>
    </motion.span>
    <motion.span
      aria-hidden="true"
      style={{ x: xRight, willChange: 'transform' }}
      className="absolute inset-0 block overflow-hidden"
    >
      <span style={{ clipPath: 'inset(0 0 0 50%)' }} className="block">{children}</span>
    </motion.span>
    <span className="invisible select-none">{children}</span>
  </span>
);

/* ── Regular card ── */
const Card = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const xLeft   = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-80, 0, 0, -80]);
  const xRight  = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [80, 0, 0, 80]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.75], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center sticky top-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl w-full px-6 lg:px-12 flex flex-col md:flex-row gap-8 lg:gap-24 items-center pointer-events-auto"
      >
        {/* Problem panel — no shadow-2xl, no blur */}
        <motion.div
          style={{ x: xLeft, willChange: 'transform' }}
          className="w-full md:w-1/2 p-10 lg:p-16 bg-white border-l-4 border-red-500 border border-black/5"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500/40">The Problem</span>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-black/80">{item.problem}</h3>
            <p className="text-lg text-secondary font-medium leading-relaxed italic">"{item.probDesc}"</p>
          </div>
        </motion.div>

        {/* Center arrow */}
        <div className="hidden md:flex flex-col items-center gap-4 flex-shrink-0">
          <div className="w-px h-16 bg-black/10" />
          <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-black text-white">
            <ChevronRight size={20} />
          </div>
          <div className="w-px h-16 bg-black/10" />
        </div>

        {/* Solution panel — no blur decorative elements */}
        <motion.div
          style={{ x: xRight, willChange: 'transform' }}
          className="w-full md:w-1/2 p-10 lg:p-16 bg-black"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">The Solution</span>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none italic text-white">{item.solution}</h3>
            <p className="text-lg text-white/80 font-medium leading-relaxed">{item.solDesc}</p>
            <div className="mt-2 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Success Roadmap</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ── Last card with portal ── */
const LastCard = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const xLeft      = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-80, 0, 0, -80]);
  const xRight     = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [80, 0, 0, 80]);
  const cardOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.65], [0, 1, 1, 0]);

  // Portal: single useTransform, no chained derived value
  // clipPath string built directly — avoids extra motion value
  const portalClip = useTransform(
    scrollYProgress,
    [0.55, 0.82],
    ['circle(0% at 50% 50%)', 'circle(200% at 50% 50%)']
  );
  const portalOpacity = useTransform(scrollYProgress, [0.54, 0.56], [0, 1]);

  return (
    // Single sticky wrapper — no nested sticky
    <div ref={ref} className="h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Card layer */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ opacity: cardOpacity }}
            className="max-w-7xl w-full px-6 lg:px-12 flex flex-col md:flex-row gap-8 lg:gap-24 items-center pointer-events-auto"
          >
            <motion.div
              style={{ x: xLeft, willChange: 'transform' }}
              className="w-full md:w-1/2 p-10 lg:p-16 bg-white border-l-4 border-red-500 border border-black/5"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500/40">The Problem</span>
                <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-black/80">{item.problem}</h3>
                <p className="text-lg text-secondary font-medium leading-relaxed italic">"{item.probDesc}"</p>
              </div>
            </motion.div>

            <div className="hidden md:flex flex-col items-center gap-4 flex-shrink-0">
              <div className="w-px h-16 bg-black/10" />
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-black text-white">
                <ChevronRight size={20} />
              </div>
              <div className="w-px h-16 bg-black/10" />
            </div>

            <motion.div
              style={{ x: xRight, willChange: 'transform' }}
              className="w-full md:w-1/2 p-10 lg:p-16 bg-black"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">The Solution</span>
                <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none italic text-white">{item.solution}</h3>
                <p className="text-lg text-white/80 font-medium leading-relaxed">{item.solDesc}</p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-white/20" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Success Roadmap</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Portal layer — isolated GPU layer via will-change */}
        <motion.div
          style={{
            clipPath: portalClip,
            opacity: portalOpacity,
            willChange: 'clip-path',
          }}
          className="absolute inset-0 z-20 bg-black"
        >
          {/* Static content — no animations inside portal, zero repaints */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
            <span className="text-[38vw] font-black text-white/[0.03] leading-none tracking-tighter">∞</span>
          </div>

          {/* Diagonal slash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(105deg, transparent 49.6%, rgba(255,255,255,0.05) 49.6%, rgba(255,255,255,0.05) 50.4%, transparent 50.4%)' }}
          />

          {/* Top-left headline */}
          <div className="absolute top-0 left-0 p-8 lg:p-12 max-w-[52%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-white/30" />
              <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/40">After The Journey</span>
            </div>
            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
              Local<br />
              <span className="italic text-white/25">Pride.</span>
            </h2>
          </div>

          {/* Bottom-right headline */}
          <div className="absolute bottom-0 right-0 p-8 lg:p-12 max-w-[52%] text-right">
            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
              Global<br />
              <span className="italic text-white/25">Power.</span>
            </h2>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs ml-auto font-medium">
              We give your business a global voice — reaching people you never thought possible.
            </p>
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center w-full max-w-xl px-6">

              {/* Static circular badge — no spin animation during scroll */}
              <div className="relative w-16 h-16 mb-6 flex-shrink-0">
                <div className="w-full h-full rounded-full border border-white/15 flex items-center justify-center">
                  <Globe2 size={20} className="text-white/50" />
                </div>
                <div className="absolute -inset-2 rounded-full border border-white/[0.06]" />
              </div>

              {/* Three stat rows */}
              {[
                { num: '01', title: 'More People', stat: '8B+',  desc: 'Everyone. Everywhere. Always.' },
                { num: '02', title: 'Real Sales',  stat: '24/7', desc: 'Revenue while you sleep.' },
                { num: '03', title: 'No Limits',   stat: '∞',    desc: 'The internet has no ceiling.' },
              ].map((row, i) => (
                <div key={i} className="w-full flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-[10px] font-black text-white/20 font-mono w-6">{row.num}</span>
                  <span className="text-sm font-black uppercase tracking-widest text-white flex-1 px-4">{row.title}</span>
                  <span className="text-xs text-white/40 font-medium flex-1 text-center hidden lg:block">{row.desc}</span>
                  <span className="text-2xl font-black text-white w-16 text-right">{row.stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-5 right-5 w-10 h-10 border-t border-r border-white/10" />
          <div className="absolute bottom-5 left-5 w-10 h-10 border-b border-l border-white/10" />
        </motion.div>

      </div>
    </div>
  );
};

/* ── Main section ── */
const TheProblemSolution = () => {
  const cardsRef = useRef(null);
  const { scrollYProgress: cardsProgress } = useScroll({
    target: cardsRef,
    offset: ['start start', 'end end'],
  });

  const enterEnd  = 0.06;
  const exitStart = 0.94;

  const xLeft = useTransform(cardsProgress, [0, enterEnd, exitStart, 1], ['0vw', '-60vw', '-60vw', '0vw']);
  const xRight = useTransform(cardsProgress, [0, enterEnd, exitStart, 1], ['0vw', '60vw', '60vw', '0vw']);
  const subtitleOpacity = useTransform(cardsProgress, [0, enterEnd, exitStart, 1], [1, 0, 0, 1]);

  const journeys = [
    {
      problem: 'The Trust Problem',
      probDesc: "If your website looks outdated or unprofessional, people won't feel safe spending money with you. You lose customers before you even get a chance to talk to them.",
      solution: 'Professional Design',
      solDesc: 'We build modern, clean websites that make you look like a leader in your industry. We give your customers the confidence they need to choose you.',
    },
    {
      problem: 'The Speed Problem',
      probDesc: "People are impatient. If your website takes too long to load, they will close the tab and go to a competitor's faster site.",
      solution: 'Instant Loading',
      solDesc: 'We use the latest technology to make your site open instantly. We remove the wait so your customers can find what they need and buy right away.',
    },
    {
      problem: 'Invisibility',
      probDesc: "You can have a great business, but if nobody can find you on Google, you don't have any customers. You are invisible to people searching for you.",
      solution: 'Ranked First',
      solDesc: 'We set up your site so it shows up at the top of search results. We make sure that when people look for what you do, your business is the first thing they see.',
    },
  ];

  const lastJourney = {
    problem: 'Confusing Sites',
    probDesc: "If your website is hard to use, people won't know where to click or how to buy. They will leave your site confused instead of making a purchase.",
    solution: 'Easy Sales Path',
    solDesc: 'We design a clear path for your customers. We make it incredibly easy for them to find your products and pay you with zero stress.',
  };

  return (
    <section className="bg-white" id="solutions">

      {/* Sticky intro header */}
      <div className="h-screen flex items-center justify-center sticky top-0 bg-white z-0 overflow-hidden">
        <div className="text-center px-6 select-none">
          <span className="text-xs font-black uppercase tracking-[0.6em] text-black/20 mb-8 block">The Journey</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
            <SplitWord xLeft={xLeft} xRight={xRight}>Problem</SplitWord>
            <br />
            <span className="text-black/[0.07] decoration-black/[0.05] underline underline-offset-8 decoration-8">
              <SplitWord xLeft={xLeft} xRight={xRight}>To&nbsp;Success</SplitWord>
            </span>
          </h2>
          <motion.p
            style={{ opacity: subtitleOpacity }}
            className="mt-12 text-sm font-black uppercase tracking-widest text-black/30"
          >
            Scroll to transform your business
          </motion.p>
        </div>
      </div>

      {/* Cards */}
      <div ref={cardsRef} className="relative z-10">
        {journeys.map((item, i) => (
          <Card key={i} item={item} />
        ))}
        <LastCard item={lastJourney} />
      </div>

    </section>
  );
};

export default TheProblemSolution;
