import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 1.7);

      if (location.pathname === '/') {
        const sections = ['about', 'barrier', 'solutions', 'pivot', 'services', 'portfolio', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(`#${section}`);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Vision', href: '#about', isExternal: false },
    { name: 'Strategy', href: '#barrier', isExternal: false },
    { name: 'Solutions', href: '#solutions', isExternal: false },
    { name: 'Team', href: '/team', isExternal: true },
    { name: 'Services', href: '#services', isExternal: false },
    { name: 'Portfolio', href: '#portfolio', isExternal: false },
  ];

  const isHome = location.pathname === '/';
  // If not scrolled and on Home, we are over the black Hero
  const sectionTheme = isHome && !isScrolled ? 'text-white' : 'text-black';
  const sectionThemeMuted = isHome && !isScrolled ? 'text-white/60' : 'text-black/60';

  return (
    <nav
      className={`left-0 right-0 z-[100] transition-all duration-700 ${isScrolled || !isHome
        ? 'fixed top-0 bg-white/95 backdrop-blur-md py-4 shadow-sm translate-y-0 opacity-100'
        : 'absolute top-0 bg-transparent py-6 -translate-y-2 md:translate-y-0 opacity-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-3 items-center">
        {/* Left: Brand Logo */}
        <div className="flex justify-start">
          <Link to="/" className="flex items-center group" onClick={() => { setActiveSection('#'); window.scrollTo(0, 0); }}>
            <img
              src={!isScrolled && isHome ? "/Trinex_logo_white.svg" : "/trinex_logo.svg"}
              alt="Trinex Tech"
              className="h-10 w-auto group-hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Center: Navigation Names */}
        <div className="hidden md:flex justify-center items-center gap-10">
          {navLinks.map((link) => (
            link.isExternal ? (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-xs font-black uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${location.pathname === link.href ? sectionTheme : `${sectionThemeMuted} hover:${sectionTheme}`
                  }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled || !isHome ? 'bg-black' : 'bg-white'}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ) : (
              <a
                key={link.name}
                href={location.pathname === '/' ? link.href : `/${link.href}`}
                onClick={() => setActiveSection(link.href)}
                className={`relative text-xs font-black uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${activeSection === link.href ? sectionTheme : `${sectionThemeMuted} hover:${sectionTheme}`
                  }`}
              >
                {link.name}
                {location.pathname === '/' && activeSection === link.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled || !isHome ? 'bg-black' : 'bg-white'}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-end items-center gap-6 text-black">
          <div className={`hidden md:flex items-center gap-6 ${sectionThemeMuted}`}>
            <a href="https://wa.me/918500195791" target="_blank" rel="noopener noreferrer" className={`hover:${sectionTheme} transition-colors`} title="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.007 12.04a11.942 11.942 0 001.612 6.105l-1.713 6.254 6.398-1.679a11.907 11.907 0 005.748 1.488h.005c6.634 0 12.035-5.404 12.039-12.042a11.876 11.876 0 00-3.527-8.455" /></svg>
            </a>
            <a href="https://github.com/TrinexTechSolutions" target="_blank" rel="noopener noreferrer" className={`hover:${sectionTheme} transition-colors`} title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${sectionTheme}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-xl font-black uppercase tracking-widest ${location.pathname === link.href ? 'text-black' : 'text-black/40'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={location.pathname === '/' ? link.href : `/${link.href}`}
                    className={`text-xl font-black uppercase tracking-widest ${activeSection === link.href ? 'text-black' : 'text-black/40'
                      }`}
                    onClick={() => {
                      setActiveSection(link.href);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
