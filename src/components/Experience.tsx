'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import SectionWrapper, { SectionLabel, SectionHeading, SectionDescription } from './SectionWrapper';
import { experiences } from '@/data/content';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionLabel>Career Journey</SectionLabel>
      <SectionHeading>Professional Experience</SectionHeading>
      <SectionDescription className="mb-16">
        My professional path across software engineering, AI education and technology.
      </SectionDescription>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] lg:left-1/2 lg:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/30 via-white/[0.06] to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ExperienceItem({
  experience: exp,
  index,
  isLeft,
}: {
  experience: typeof experiences[number];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative grid lg:grid-cols-2 gap-4 lg:gap-12 pl-12 lg:pl-0`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[13px] lg:left-1/2 lg:-translate-x-1/2 top-8 z-10">
        <div className={`w-[13px] h-[13px] rounded-full border-2 ${
          exp.isCurrent
            ? 'border-accent bg-accent/30 shadow-[0_0_12px_rgba(79,143,234,0.4)]'
            : 'border-white/20 bg-background'
        }`} />
      </div>

      {/* Content */}
      <div className={`${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-surface/30 hover:bg-surface/50 transition-all duration-500">
          {/* Header */}
          <div className={`flex flex-wrap items-center gap-3 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
            {exp.isCurrent && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Current
              </span>
            )}
            <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-text-muted">
              {exp.type}
            </span>
          </div>

          {/* Company */}
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'lg:justify-end' : ''}`}>
            <Building2 size={14} className="text-accent/60" />
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-accent/80">
              {exp.company}
            </span>
          </div>

          {/* Role */}
          <h3
            className="text-[20px] sm:text-[22px] font-bold tracking-[-0.02em] text-text-primary mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {exp.role}
          </h3>

          {/* Date */}
          <div className={`flex items-center gap-2 text-[13px] text-text-muted mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
            <Calendar size={13} />
            <span>{exp.startDate} – {exp.endDate}</span>
          </div>

          {/* Description */}
          <p className="text-[14px] leading-[1.7] text-text-secondary mb-4">
            {exp.description}
          </p>

          {/* Highlights */}
          <ul className={`space-y-2 ${isLeft ? 'lg:text-right' : ''}`}>
            {exp.highlights.map((h, i) => (
              <li key={i} className={`flex items-start gap-2 text-[13px] text-text-muted ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                <span className="w-1 h-1 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
