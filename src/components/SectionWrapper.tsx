'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  withGrid?: boolean;
}

export default function SectionWrapper({ id, children, className = '', withGrid = false }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding relative ${withGrid ? 'grid-bg' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-wide relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

// Section label component
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-accent mb-6">
      <span className="w-8 h-[1px] bg-accent/40" />
      {children}
    </span>
  );
}

// Section heading
export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.1] text-text-primary mb-6 ${className}`}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {children}
    </h2>
  );
}

// Section description
export function SectionDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[16px] sm:text-[18px] leading-[1.7] text-text-secondary max-w-2xl ${className}`}>
      {children}
    </p>
  );
}
