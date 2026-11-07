'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0b0b0f]/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide flex items-center justify-between h-[72px]" aria-label="Main navigation">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="relative z-10 text-[18px] font-bold tracking-[-0.02em] text-text-primary hover:text-accent transition-colors duration-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            SAJAD K.
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-[0.02em] uppercase transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-10 p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0b0b0f]/98 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className={`text-[28px] font-medium tracking-[-0.01em] py-3 transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
