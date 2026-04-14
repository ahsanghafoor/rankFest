'use client';

import FinalCTA from '@/components/home/FinalCTA';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENCY_NAME, CONTACT_INFO, STATS } from '@/data/constants';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactContent() {
  const searchParams = useSearchParams();
  const website = searchParams.get('website') || '';

  return (
    <>
      <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Eyebrow label */}
          <div className="mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 xl:gap-20 items-start">

            {/* ── LEFT: Info panel ── */}
            <div className="space-y-10 lg:sticky lg:top-28">

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl xl:text-[3.75rem] font-bold text-foreground leading-[1.08] tracking-tight">
                  Let's Grow Your{' '}
                  <span className="relative inline-block text-accent">
                    Business
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/35 rounded-full" />
                  </span>{' '}
                  Together
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  Have questions? Want to discuss your marketing goals? We're here to help —
                  reach out today and let's start your journey to the top.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-2.5">
                {[
                  { icon: Mail, label: 'Email Us', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                  { icon: Phone, label: 'Call Us', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}` },
                  { icon: MapPin, label: 'Location', value: CONTACT_INFO.location, href: null, italic: true },
                ].map(({ icon: Icon, label, value, href, italic }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/40 hover:border-accent/25 hover:bg-card/70 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.12em] font-semibold mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className={`text-sm font-semibold text-foreground hover:text-accent transition-colors block truncate${italic ? ' italic' : ''}`}>
                          {value}
                        </a>
                      ) : (
                        <p className={`text-sm font-semibold text-foreground truncate${italic ? ' italic' : ''}`}>{value}</p>
                      )}
                    </div>
                    {href && (
                      <ArrowRight size={14} className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border/60" />

              {/* Why partner */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-foreground uppercase tracking-widest">Why Partner with {AGENCY_NAME}?</p>
                <div className="space-y-3">
                  {[
                    'Full transparency and monthly reporting',
                    'Proprietary SEO strategies that drive ROI',
                    'Dedicated expert support for your business',
                    `Proven track record with ${STATS.clientsHelped} clients`,
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live pulse badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs text-muted-foreground">
                  Usually respond within <span className="text-accent font-semibold">24 hours</span>
                </span>
              </div>
            </div>

            {/* ── RIGHT: Form (no extra heading — handled inside FinalCTA) ── */}
            <div className="w-full">
              <FinalCTA prefilledWebsite={website} hideHeader />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}