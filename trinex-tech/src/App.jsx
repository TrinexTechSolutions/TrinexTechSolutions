import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Schema from './components/Schema';
import LoadingScreen from './components/LoadingScreen';

// Lazy Loaded Pages
const Home = lazy(() => import('./HomeWrapper'));
const Team = lazy(() => import('./pages/Team'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background font-sans selection:bg-black selection:text-white relative">
          <Schema />
          <Helmet>
            <title>Trinex Tech Solutions | Premium Web & Software Development</title>
            <meta name="description" content="Trinex Tech Solutions delivers high-performance web development, mobile apps, and SEO services to help businesses scale globally. Expert IT solutions for startups and enterprises." />
            <link rel="canonical" href="https://www.trinextechsolutions.site/" />
          </Helmet>

          {/* Background Subtle Noise/Grain Effect */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <Suspense fallback={
            <div className="fixed top-0 left-0 right-0 h-1 z-[10000] bg-[#FFC533] origin-left animate-pulse" />
          }>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      )}
    </Router>
  );
}

export default App;