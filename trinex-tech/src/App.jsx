import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValueStatement from './components/ValueStatement';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-black selection:text-white">
      {/* Background Subtle Noise/Grain Effect (Optional but adds premium feel) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <ValueStatement />
        <Services />
        <Technologies />
        <WhyChooseUs />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;