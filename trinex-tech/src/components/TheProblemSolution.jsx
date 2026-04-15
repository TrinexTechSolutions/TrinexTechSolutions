import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldAlert, ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Vertical split: left half clips left, right half clips right
   children = the full text node rendered twice, each clipped to one side
───────────────────────────────────────────── */
const SplitWord = ({ children, xLeft, xRight }) => (
  <span className="relative inline-block whitespace-nowrap">
    {/* LEFT half — clips right 50%, slides left */}
    <motion.span
      aria-hidden="true"
      style={{ x: xLeft }}
      className="absolute inset-0 block overflow-hidden"
    >
      <span style={{ clipPath: 'inset(0 50% 0 0)' }} className="block">
        {children}
      </span>
    </motion.span>

    {/* RIGHT half — clips left 50%, slides right */}
    <motion.span
      aria-hidden="true"
      style={{ x: xRight }}
      className="absolute inset-0 block overflow-hidden"
    >
      <span style={{ clipPath: 'inset(0 0 0 50%)' }} className="block">
        {children}
      </span>
    </motion.span>

    {/* Invisible spacer keeps layout */}
    <span className="invisible select-none">{children}</span>
  </span>
);

/* ─────────────────────────────────────────────
   Individual problem/solution card
───────────────────────────────────────────── */
const Card = ({ item }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xLeft  = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-100, 0, 0, -100]);
  const xRight = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, 100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl w-full px-6 lg:px-12 flex flex-col md:flex-row gap-8 lg:gap-24 items-center pointer-events-auto"
      >
        {/* Problem panel */}
        <motion.div
          style={{ x: xLeft }}
          className="w-full md:w-1/2 p-10 lg:p-16 bg-white border-l-4 border-red-500 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldAlert size={120} />
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500/40">The Problem</span>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-black/80">{item.problem}</h3>
            <p className="text-lg text-secondary font-medium leading-relaxed italic">"{item.probDesc}"</p>
          </div>
        </motion.div>

        {/* Center arrow */}
        <div className="hidden md:flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-t from-black to-transparent opacity-10" />
          <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-black text-white shadow-xl">
            <ChevronRight size={20} />
          </div>
          <div className="w-px h-24 bg-gradient-to-b from-black to-transparent opacity-10" />
        </div>

        {/* Solution panel */}
        <motion.div
          style={{ x: xRight }}
          className="w-full md:w-1/2 p-10 lg:p-16 bg-black shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
          <div className="flex flex-col gap-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">The Solution</span>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none italic text-white">{item.solution}</h3>
            <p className="text-lg text-white/80 font-medium leading-relaxed font-sans">{item.solDesc}</p>
            <div className="mt-4 flex items-center gap-6">
              <div className="h-[2px] w-12 bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Success Roadmap</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
const TheProblemSolution = () => {
  const cardsRef = useRef(null);

  /*
    offset: ["start start", "end end"]
    → progress 0   = first card's top hits the viewport top  (card is NOW sitting over the header)
    → progress 1   = last card's bottom leaves the viewport bottom
    This means the split fires ONLY after the card is fully covering the header text.
  */
  const { scrollYProgress: cardsProgress } = useScroll({
    target: cardsRef,
    offset: ['start start', 'end end'],
  });

  // Enter: 0 → 0.06  (first card just landed on top → text splits open)
  // Exit:  0.94 → 1  (last card leaving → text snaps back)
  const enterEnd  = 0.06;
  const exitStart = 0.94;

  // Use vw units so halves slide fully off-screen (past the viewport edge)
  // Left half slides LEFT off-screen, right half slides RIGHT off-screen
  const xLeft = useTransform(
    cardsProgress,
    [0, enterEnd, exitStart, 1],
    ['0vw', '-60vw', '-60vw', '0vw']
  );

  const xRight = useTransform(
    cardsProgress,
    [0, enterEnd, exitStart, 1],
    ['0vw', '60vw', '60vw', '0vw']
  );

  // Subtitle fades out as text splits
  const subtitleOpacity = useTransform(
    cardsProgress,
    [0, enterEnd, exitStart, 1],
    [1, 0, 0, 1]
  );

  const journeys = [
    {
      problem: 'The Trust Problem',
      probDesc: "If your website looks outdated or unprofessional, people won't feel safe spending money with you. You lose customers before you even get a chance to talk to them.",
      solution: 'Professional Design',
      solDesc: 'We build modern, clean websites that make you look like a leader in your industry. We give your customers the confidence they need to choose you.',
    },
    {
      problem: 'The Speed Problem',
      probDesc: 'People are impatient. If your website takes too long to load, they will close the tab and go to a competitor\'s faster site.',
      solution: 'Instant Loading',
      solDesc: 'We use the latest technology to make your site open instantly. We remove the wait so your customers can find what they need and buy right away.',
    },
    {
      problem: 'Invisibility',
      probDesc: "You can have a great business, but if nobody can find you on Google, you don't have any customers. You are invisible to people searching for you.",
      solution: 'Ranked First',
      solDesc: 'We set up your site so it shows up at the top of search results. We make sure that when people look for what you do, your business is the first thing they see.',
    },
    {
      problem: 'Confusing Sites',
      probDesc: "If your website is hard to use, people won't know where to click or how to buy. They will leave your site confused instead of making a purchase.",
      solution: 'Easy Sales Path',
      solDesc: 'We design a clear path for your customers. We make it incredibly easy for them to find your products and pay you with zero stress.',
    },
  ];

  return (
    <section className="bg-white" id="solutions">

      {/* ── Sticky intro header — z-0 so cards (z-10) layer on top ── */}
      {/* overflow-hidden on the sticky container clips the split halves at the viewport edge */}
      <div className="h-screen flex items-center justify-center sticky top-0 bg-white z-0 overflow-hidden">
        <div className="text-center px-6 select-none">
          <span className="text-xs font-black uppercase tracking-[0.6em] text-black/20 mb-8 block">
            The Journey
          </span>

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

      {/* ── Cards — z-10 so they sit above the sticky header ── */}
      <div ref={cardsRef} className="relative z-10">
        {journeys.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      <div className="h-[50vh]" />
    </section>
  );
};

export default TheProblemSolution;
