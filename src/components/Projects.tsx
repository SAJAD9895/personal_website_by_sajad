'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon } from './icons';
import SectionWrapper, { SectionLabel, SectionHeading, SectionDescription } from './SectionWrapper';
import { projects, type Project } from '@/data/content';

const categories = ['All', 'Software Engineering', 'AI Applications', 'Business Automation', 'Other'] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" withGrid>
      <SectionLabel>Featured Work</SectionLabel>
      <SectionHeading>Projects</SectionHeading>
      <SectionDescription className="mb-10">
        A selection of projects across software engineering, AI applications and business automation.
      </SectionDescription>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-accent/10 text-accent border border-accent/20'
                : 'text-text-muted border border-white/[0.04] hover:border-white/[0.08] hover:text-text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Placeholder notice */}
      {filteredProjects.every(p => p.isPlaceholder) && (
        <div className="mb-8 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-[14px] text-amber-200/80 leading-relaxed">
            These are placeholder projects. Update the project data in <code className="text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded text-[12px]">src/data/content.ts</code> with your real projects.
          </p>
        </div>
      )}

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isReversed={index % 2 === 1} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project, index, isReversed }: { project: Project; index: number; isReversed: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-surface/30 hover:bg-surface/50 overflow-hidden transition-all duration-500"
    >
      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:direction-rtl' : ''}`}>
        {/* Image */}
        <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent lg:bg-none" />
          
          {project.isPlaceholder && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-medium">
              Placeholder
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-8 sm:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`} style={{ direction: 'ltr' }}>
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-4">
            {project.category}
          </span>

          <h3
            className="text-[22px] sm:text-[26px] font-bold tracking-[-0.02em] text-text-primary mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {project.title}
          </h3>

          <p className="text-[15px] leading-[1.7] text-text-secondary mb-4">
            {project.description}
          </p>

          {/* Problem & Solution */}
          <div className="space-y-3 mb-6">
            <div>
              <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-muted">Problem</span>
              <p className="text-[14px] text-text-secondary mt-1">{project.problem}</p>
            </div>
            <div>
              <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-muted">Solution</span>
              <p className="text-[14px] text-text-secondary mt-1">{project.solution}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[12px] font-medium text-text-muted border border-white/[0.06] bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:text-accent/80 transition-colors"
              >
                <ExternalLink size={14} />
                View Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-text-secondary transition-colors"
              >
                <GithubIcon size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
