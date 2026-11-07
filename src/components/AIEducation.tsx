'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Users, GraduationCap, Sparkles, BookOpen, Lightbulb, Zap, Wrench } from 'lucide-react';
import SectionWrapper, { SectionLabel, SectionHeading, SectionDescription } from './SectionWrapper';
import { aiEducationTopics, socialLinks } from '@/data/content';

const topicIcons = [Sparkles, BookOpen, Lightbulb, Zap, Wrench, Lightbulb, BookOpen];

export default function AIEducation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper id="ai-education" className="relative overflow-hidden">
      {/* Subtle accent gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(167,139,250,0.04),transparent_60%)] pointer-events-none" />

      <SectionLabel>AI Education</SectionLabel>
      <SectionHeading>
        Making AI practical, understandable and useful.
      </SectionHeading>
      <SectionDescription className="mb-12">
        I help business owners and learners understand AI without requiring a technical background. 
        My approach focuses on practical application — showing people how to use AI tools effectively 
        in their everyday work and business operations.
      </SectionDescription>

      <div ref={ref} className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
        {/* Topics Grid */}
        <div>
          <h3 className="text-[14px] font-medium tracking-[0.08em] uppercase text-text-muted mb-6">
            Training Topics
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {aiEducationTopics.map((topic, i) => {
              const Icon = topicIcons[i % topicIcons.length];
              return (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-white/[0.04] hover:border-purple-400/20 hover:bg-purple-400/[0.02] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-400/[0.06] border border-purple-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-purple-400/70" />
                  </div>
                  <span className="text-[15px] text-text-secondary group-hover:text-text-primary transition-colors duration-300 pt-1.5">
                    {topic}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Impact & Info */}
        <div className="space-y-6">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl border border-white/[0.04] bg-surface/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center">
                <Users size={18} className="text-purple-400" />
              </div>
              <div>
                <span className="text-[32px] font-bold text-text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  120+
                </span>
                <p className="text-[13px] text-text-muted -mt-1">Students Mentored</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/[0.04]">
              <div className="flex items-start gap-3">
                <GraduationCap size={16} className="text-purple-400/60 mt-1 flex-shrink-0" />
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  Contributed to IITM Pravartak-certified course offerings through Edapt.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={16} className="text-purple-400/60 mt-1 flex-shrink-0" />
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  Conducted online AI training sessions for individuals and business owners.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb size={16} className="text-purple-400/60 mt-1 flex-shrink-0" />
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  Taught generative AI, prompt engineering and AI-powered workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Edapt Link */}
          <motion.a
            href={socialLinks.edapt}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.04] hover:border-purple-400/20 hover:bg-purple-400/[0.02] transition-all duration-300"
          >
            <div>
              <p className="text-[15px] font-semibold text-text-primary mb-1">Edapt</p>
              <p className="text-[13px] text-text-muted">AI Education Platform</p>
            </div>
            <ExternalLink size={16} className="text-text-muted group-hover:text-purple-400 transition-colors" />
          </motion.a>
        </div>
      </div>
    </SectionWrapper>
  );
}
