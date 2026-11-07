'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Mail, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { LinkedinIcon } from './icons';
import SectionWrapper, { SectionLabel, SectionHeading } from './SectionWrapper';
import { socialLinks } from '@/data/content';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // NOTE: No backend email integration yet.
    // This sets a message explaining that email sending is not configured.
    setSubmitStatus('error');
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <SectionWrapper id="contact">
      <div ref={ref} className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20">
        {/* Left: Info */}
        <div>
          <SectionLabel>Get in Touch</SectionLabel>
          <SectionHeading>
            Have an idea or a problem worth solving?
          </SectionHeading>

          <p className="text-[16px] sm:text-[17px] leading-[1.8] text-text-secondary mt-6 mb-10">
            I&apos;m always interested in connecting with business owners, founders, technology professionals 
            and people exploring the possibilities of AI and software.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
                <MapPin size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-[13px] text-text-muted mb-0.5">Location</p>
                <p className="text-[15px] text-text-primary">Kerala, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
                <Mail size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-[13px] text-text-muted mb-0.5">Email</p>
                <p className="text-[15px] text-text-secondary italic">Configure your email address</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
                <LinkedinIcon size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-[13px] text-text-muted mb-0.5">LinkedIn</p>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-accent hover:text-accent/80 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-[14px] font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(79,143,234,0.25)]"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/[0.04] bg-surface/30" noValidate>
            <h3
              className="text-[20px] font-bold text-text-primary mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let&apos;s Discuss Your Idea
            </h3>
            <p className="text-[14px] text-text-muted mb-8">Fill in the details and I&apos;ll get back to you.</p>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-lg text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300 ${
                    errors.name ? 'border-red-400/40' : 'border-white/[0.06]'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-[12px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-lg text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300 ${
                    errors.email ? 'border-red-400/40' : 'border-white/[0.06]'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-[12px] text-red-400 mt-1">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-lg text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300 ${
                    errors.subject ? 'border-red-400/40' : 'border-white/[0.06]'
                  }`}
                  placeholder="How can I help?"
                />
                {errors.subject && <p className="text-[12px] text-red-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/[0.03] border rounded-lg text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-400/40' : 'border-white/[0.06]'
                  }`}
                  placeholder="Tell me about your idea or project..."
                />
                {errors.message && <p className="text-[12px] text-red-400 mt-1">{errors.message}</p>}
              </div>
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 rounded-lg border border-amber-500/20 bg-amber-500/5 flex items-start gap-3">
                <AlertTriangle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-[13px] text-amber-200/80 leading-relaxed">
                  Email sending is not configured yet. Please connect via LinkedIn or configure a backend email service (e.g., Supabase, SendGrid).
                </p>
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <p className="text-[13px] text-emerald-200/80">Message sent successfully!</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white text-[14px] font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(79,143,234,0.25)] disabled:opacity-50"
            >
              {submitStatus === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
