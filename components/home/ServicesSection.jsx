'use client';

import Link from 'next/link';
import { TrendingUp, Zap, MapPin, Code, Palette, FileText } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesSection() {
  const [headerRef, headerVisible] = useScrollAnimation();

  const services = [
    {
      id: 'seo',
      name: 'SEO Services',
      description: 'Comprehensive on-page and off-page optimization to boost your rankings and organic traffic.',
      icon: TrendingUp,
      href: '/services/seo',
    },
    {
      id: 'ppc',
      name: 'PPC Management',
      description: 'Data-driven paid advertising campaigns that deliver measurable ROI and qualified leads.',
      icon: Zap,
      href: '/services/ppc',
    },
    {
      id: 'local-seo',
      name: 'Local SEO & GMB',
      description: 'Dominate local search results with optimized Google My Business and local directory listings.',
      icon: MapPin,
      href: '/services/local-seo',
    },
    {
      id: 'web-dev',
      name: 'Website Development',
      description: 'Fast, SEO-friendly websites that convert visitors into customers with stunning design.',
      icon: Code,
      href: '/services/web-dev',
    },
    {
      id: 'branding',
      name: 'Branding & Design',
      description: 'Complete brand identity and design solutions that make your business stand out.',
      icon: Palette,
      href: '/services/branding',
    },
    {
      id: 'content',
      name: 'Content Marketing',
      description: 'Strategic content creation that drives traffic, builds authority, and engages your audience.',
      icon: FileText,
      href: '/services/content',
    },
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-12 text-center max-w-2xl mx-auto transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services That Drive <span className="text-accent">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full suite of digital marketing services designed to grow your business online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={service.id} service={service} Icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon, index }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <Link
      ref={ref}
      key={service.id}
      href={service.href}
      className={`group p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-3 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
        {service.name}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {service.description}
      </p>
      <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
