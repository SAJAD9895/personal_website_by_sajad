'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Workflow } from 'lucide-react';
import SectionWrapper, { SectionLabel, SectionHeading, SectionDescription } from './SectionWrapper';
import { expertiseAreas } from '@/data/content';

const icons = {
  softwareEngineering: Code2,
  aiEducation: Brain,
  forwardDeployment: Workflow,
};

const colors = {
  softwareEngineering: { accent: '#4f8fea', bg: 'rgba(79,143,234,0.06)', border: 'rgba(79,143,234,0.12)' },
  aiEducation: { accent: '#a78bfa', bg: 'rgba(167,139,250,0.06)', border: 'rgba(167,139,250,0.12)' },
  forwardDeployment: { accent: '#34d399', bg: 'rgba(52,211,153,0.06)', border: 'rgba(52,211,153,0.12)' },
};

export default function Expertise() {
  return (
    <SectionWrapper id="expertise">
      <SectionLabel>What I Do</SectionLabel>
      <SectionHeading>Areas of Expertise</SectionHeading>
      <SectionDescription className="mb-16">
        My work spans software engineering, AI education and business automation — 
        three areas that together help build practical technology solutions.
      </SectionDescription>

      <div className="space-y-8">
        {(Object.keys(expertiseAreas) as Array<keyof typeof expertiseAreas>).map((key, index) => (
          <ExpertiseCard key={key} areaKey={key} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ExpertiseCard({ areaKey, index }: { areaKey: keyof typeof expertiseAreas; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const area = expertiseAreas[areaKey];
  const Icon = icons[areaKey];
  const color = colors[areaKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-surface/30 hover:bg-surface/50 transition-all duration-500 overflow-hidden"
    >
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${color.accent}40, transparent)` }} />
      
      <div className="p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: Title area */}
          <div className="lg:w-[340px] flex-shrink-0">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: color.bg, border: `1px solid ${color.border}` }}
            >
              <Icon size={22} style={{ color: color.accent }} />
            </div>

            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-text-muted mb-2 block">
              0{index + 1}
            </span>

            <h3
              className="text-[24px] sm:text-[28px] font-bold tracking-[-0.02em] text-text-primary mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {area.title}
            </h3>

            <p className="text-[15px] leading-[1.7] text-text-secondary">
              {area.tagline}
            </p>
          </div>

          {/* Right: Skills grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {area.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300"
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: color.accent }}
                  />
                  <span className="text-[14px] text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
