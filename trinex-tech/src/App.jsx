import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import FAQ from './components/FAQ';
import Schema from './components/Schema';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-black selection:text-white">
      <Schema />
      <Helmet>
        <title>Trinex Tech Solutions | Premium Web & Software Development</title>
        <meta name="description" content="Trinex Tech Solutions delivers high-performance web development, mobile apps, and SEO services to help businesses scale globally. Expert IT solutions for startups and enterprises." />
        <link rel="canonical" href="https://www.trinextechsolutions.site/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trinextechsolutions.site/" />
        <meta property="og:title" content="Trinex Tech Solutions | Premium Web & Software Development" />
        <meta property="og:description" content="Trinex Tech Solutions delivers high-performance web development, mobile apps, and SEO services. Get expert IT solutions to scale your business." />
        <meta property="og:image" content="https://www.trinextechsolutions.site/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.trinextechsolutions.site/" />
        <meta property="twitter:title" content="Trinex Tech Solutions | Premium Web & Software Development" />
        <meta property="twitter:description" content="Expert Web & Software Development to help your business scale globally." />
        <meta property="twitter:image" content="https://www.trinextechsolutions.site/images/og-image.jpg" />
      </Helmet>

      {/* Background Subtle Noise/Grain Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Navbar />
      
      <main id="main-content" className="relative z-10" role="main">
        <Hero />
        <article id="about-section">
          <About />
        </article>
        <ValueStatement />
        <section id="services-section">
          <Services />
        </section>
        <Technologies />
        <section id="portfolio-section">
          <Portfolio />
        </section>
        <WhyChooseUs />
        <Clients />
        <FAQ />
        <section id="contact-section">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;