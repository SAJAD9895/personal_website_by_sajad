'use client';

import Image from 'next/image';
import SectionWrapper, { SectionLabel, SectionHeading } from './SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" withGrid>
      <SectionLabel>About</SectionLabel>

      <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">
        {/* Portrait Column */}
        <div className="relative">
          <div className="relative w-full aspect-[3/4] max-w-[380px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/[0.06]">
            <Image
              src="/images/sajad-profile.jpg"
              alt="Sajad K portrait"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 380px, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/40 via-transparent to-transparent" />
          </div>

          {/* Info card below image */}
          <div className="mt-6 p-5 rounded-xl border border-white/[0.06] bg-surface/50">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[13px] font-medium text-text-secondary">Currently at Zil Money</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[13px] font-medium text-text-secondary">Manipal Institute of Technology</span>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div>
          <SectionHeading>
            Technology is most valuable when it solves real problems.
          </SectionHeading>

          <div className="space-y-6 mt-8">
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-text-secondary">
              I&apos;m a Software Engineer, Forward Deployment Engineer and AI Educator working at the intersection 
              of software development, artificial intelligence and business operations.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-text-secondary">
              My professional journey has given me experience in application development, software engineering, 
              mentoring and practical AI education.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-text-secondary">
              I enjoy understanding how businesses operate, identifying challenges in their workflows and exploring 
              how software, AI and automation can make their operations more efficient.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-text-secondary">
              Alongside software engineering, I conduct AI training sessions to help people and business owners 
              understand how to apply artificial intelligence in their everyday work.
            </p>

            <div className="pt-4 border-t border-white/[0.04]">
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-text-primary font-medium italic">
                &ldquo;Technology creates real value when it turns complex challenges into simple, practical solutions that make a meaningful difference in the way people work and businesses grow.&rdquo;
              </p>
            </div>
          </div>

          {/* Journey markers */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                year: '2022',
                title: 'Started Professional Career',
                desc: 'Began as a Flutter Developer at Edapt',
              },
              {
                year: '2023',
                title: 'Growing Expertise',
                desc: 'Continued Flutter development at Dax Ads and Edapt',
              },
              {
                year: '2024',
                title: 'AI Education Journey',
                desc: 'Started AI training and mentoring at Edapt',
              },
              {
                year: '2025',
                title: 'Software Engineering',
                desc: 'Joined Zil Money as Software Engineer',
              },
            ].map((item) => (
              <div
                key={item.year}
                className="group p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-surface/30 transition-all duration-300"
              >
                <span className="text-[24px] font-bold text-accent/60" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.year}
                </span>
                <h3 className="text-[15px] font-semibold text-text-primary mt-2 mb-1">{item.title}</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
