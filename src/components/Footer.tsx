'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon } from './icons';
import { navLinks, socialLinks } from '@/data/content';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-surface/20">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3
              className="text-[20px] font-bold tracking-[-0.02em] text-text-primary mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              SAJAD K.
            </h3>
            <p className="text-[14px] text-text-muted leading-relaxed max-w-xs">
              Software Engineer · AI Educator · Forward Deployment Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="text-[12px] font-medium tracking-[0.12em] uppercase text-text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="text-[12px] font-medium tracking-[0.12em] uppercase text-text-muted mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.edapt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  Edapt
                </a>
              </li>
              <li>
                <span className="text-[14px] text-text-muted italic">
                  Email: Configure your email
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text-muted">
            © {year} Sajad K. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[13px] text-text-muted hover:text-text-primary transition-colors duration-300"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
