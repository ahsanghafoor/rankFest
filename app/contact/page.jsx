'use client';

import FinalCTA from '@/components/home/FinalCTA';
import { Mail, Phone, MapPin, Globe, Clock, CheckCircle2 } from 'lucide-react';
import { AGENCY_NAME, CONTACT_INFO, STATS } from '@/data/constants';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactContent() {
  const searchParams = useSearchParams();
  const website = searchParams.get('website') || '';

  return (
    <>
      {/* Hero Section - Simplified for 2-column layout */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Let's Grow Your <span className="text-accent">Business Together</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Have questions? Want to discuss your marketing goals? We're here to help. Reach out today and let's start your journey to the top.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:border-accent/30 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Email Us</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:border-accent/30 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Call Us</p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:border-accent/30 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-lg font-bold text-foreground italic">
                      {CONTACT_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Why Partner with {AGENCY_NAME}?</h3>
                <div className="space-y-4">
                  {[
                    `Full transparency and monthly reporting`,
                    `Proprietary SEO strategies that drive ROI`,
                    `Dedicated expert support for your business`,
                    `Proven track record with ${STATS.clientsHelped} clients`
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-3xl blur opacity-30"></div>
              <div className="relative">
                <FinalCTA prefilledWebsite={website} />
              </div>
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
