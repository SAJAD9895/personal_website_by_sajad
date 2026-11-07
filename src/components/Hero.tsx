'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { LinkedinIcon } from './icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,143,234,0.08),transparent)]" />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
      </div>

      <div className="container-wide relative z-10 pt-[120px] pb-[80px]">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-[12px] font-medium tracking-[0.1em] uppercase text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Professional Identity */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[12px] sm:text-[13px] font-medium tracking-[0.15em] uppercase text-accent mb-6"
            >
              Software Engineer · AI Educator · Forward Deployment Engineer
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[64px] font-bold tracking-[-0.03em] leading-[1.05] text-text-primary mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              I turn ideas into technology
              <br />
              <span className="gradient-text-accent">and technology into solutions.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-[16px] sm:text-[18px] leading-[1.7] text-text-secondary max-w-xl mb-10"
            >
              I&apos;m Sajad, a Software Engineer and AI Educator passionate about building practical software, 
              teaching people to use AI, and helping businesses solve real-world problems through technology 
              and automation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#expertise"
                onClick={(e) => { e.preventDefault(); document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-[14px] font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(79,143,234,0.25)]"
              >
                Explore My Work
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sajad-k-957739216/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.1] text-text-primary text-[14px] font-semibold rounded-lg hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
              >
                <LinkedinIcon size={16} />
                Let&apos;s Connect
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-accent/10 via-transparent to-accent/5 blur-sm" />
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-accent/10 rounded-[20px]" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 border border-accent/5 rounded-[24px]" />
              
              {/* Image */}
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[440px] rounded-[20px] overflow-hidden border border-white/[0.06]">
                <Image
                  src="/images/sajad-profile.jpg"
                  alt="Sajad K – Software Engineer, AI Educator and Forward Deployment Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/30 via-transparent to-transparent" />
              </div>

              {/* Name card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-4 -left-6 sm:-left-8 bg-surface/90 backdrop-blur-md border border-white/[0.06] rounded-xl px-5 py-3"
              >
                <p className="text-[14px] font-semibold text-text-primary" style={{ fontFamily: 'var(--font-heading)' }}>Sajad K</p>
                <p className="text-[11px] text-text-muted tracking-[0.05em]">Malappuram, Kerala</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Discipline Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 lg:mt-28 pt-10 border-t border-white/[0.04]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              'Software Engineering',
              'Artificial Intelligence',
              'Business Automation',
              'Technology Education',
            ].map((item, i) => (
              <div key={item} className="group">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-text-muted group-hover:text-accent transition-colors duration-300">
                  <span className="text-accent/40 mr-2">0{i + 1}</span>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {[
            { value: '4+', label: 'Years of Software Development' },
            { value: '120+', label: 'Students Mentored' },
            { value: '3', label: 'Areas of Technology Expertise' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span
                className="text-[36px] sm:text-[42px] font-bold tracking-[-0.03em] text-text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.value}
              </span>
              <span className="text-[13px] text-text-muted leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
