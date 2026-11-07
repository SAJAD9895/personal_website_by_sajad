'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, AlertCircle } from 'lucide-react';
import SectionWrapper, { SectionLabel, SectionHeading, SectionDescription } from './SectionWrapper';
import { articles } from '@/data/content';

const categoryColors: Record<string, string> = {
  'Artificial Intelligence': '#a78bfa',
  'Business Automation': '#34d399',
  'Software Engineering': '#4f8fea',
  'Technology': '#f59e0b',
  'Practical AI': '#ec4899',
};

export default function Insights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper id="insights" withGrid>
      <SectionLabel>Insights</SectionLabel>
      <SectionHeading>Knowledge Sharing</SectionHeading>
      <SectionDescription className="mb-8">
        Thoughts and insights on artificial intelligence, software engineering and business automation.
      </SectionDescription>

      {/* Placeholder notice */}
      {articles.every(a => a.isPlaceholder) && (
        <div className="mb-10 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-[14px] text-amber-200/80 leading-relaxed">
            These are placeholder articles. Update the articles data in <code className="text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded text-[12px]">src/data/content.ts</code> with your real articles.
          </p>
        </div>
      )}

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-surface/30 hover:bg-surface/50 overflow-hidden transition-all duration-500 cursor-pointer"
          >
            {/* Cover Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              
              {/* Category badge */}
              <div className="absolute bottom-3 left-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-medium"
                  style={{
                    backgroundColor: `${categoryColors[article.category] || '#4f8fea'}15`,
                    color: categoryColors[article.category] || '#4f8fea',
                    border: `1px solid ${categoryColors[article.category] || '#4f8fea'}25`,
                  }}
                >
                  {article.category}
                </span>
              </div>

              {article.isPlaceholder && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-medium">
                  Placeholder
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <time className="text-[12px] text-text-muted">
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <h3
                className="text-[18px] font-bold tracking-[-0.01em] text-text-primary mt-2 mb-3 group-hover:text-accent transition-colors duration-300"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {article.title}
              </h3>

              <p className="text-[14px] leading-[1.7] text-text-muted mb-4 line-clamp-2">
                {article.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent group-hover:gap-2.5 transition-all duration-300">
                Read More
                <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
