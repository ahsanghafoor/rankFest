'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/shared/Button';
import { useScrollAnimation, AnimatedElement } from '@/hooks/useScrollAnimation';

export default function ProcessSection() {
  const [headerRef, headerVisible] = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current digital presence, identify opportunities, and understand your business goals to build a solid foundation.',
      points: ['Website audit', 'Competitor analysis', 'Market research', 'Goal setting'],
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive, customized plan tailored to your business objectives and target audience for maximum impact.',
      points: ['Keyword research', 'Content strategy', 'Campaign planning', 'Timeline setup'],
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the strategy with precision, optimizing your website and launching targeted campaigns that drive real results.',
      points: ['On-page SEO', 'Content creation', 'Link building', 'PPC setup'],
    },
    {
      number: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuously track performance, adjust tactics, and scale what works to maximize your ROI and ensure sustained growth.',
      points: ['Performance tracking', 'A/B testing', 'Monthly reports', 'Continuous improvement'],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Our Proven <span className="text-accent">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A systematic approach designed to deliver measurable results and sustainable growth for your business.
          </p>
        </div>

        {/* Process Steps - Desktop with Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <AnimatedElement key={step.number} animation={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={index * 150}>
                  <div className="relative">
                    <div className={`grid grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'text-right'}`}>
                      {/* Content */}
                      <div className={index % 2 === 1 ? 'order-2' : ''}>
                        <div className={`bg-card border border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group ${index % 2 === 1 ? 'text-right' : ''}`}>
                          <span className={`inline-block text-accent/40 text-sm font-bold mb-2 ${index % 2 === 1 ? 'ml-auto' : ''}`}>
                            STEP {step.number}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {/* Points */}
                          <ul className={`space-y-3 ${index % 2 === 1 ? 'flex flex-col items-end' : ''}`}>
                            {step.points.map((point, idx) => (
                              <li key={idx} className={`flex items-center gap-3 text-base text-foreground ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                                <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Timeline Circle */}
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl relative z-10 border-4 border-background shadow-lg shadow-accent/20">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <AnimatedElement key={step.number} delay={index * 100}>
              <div className="relative bg-card border border-border rounded-2xl p-6">
                {/* Number */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-accent/20">
                    {step.number}
                  </div>
                  <div>
                    <span className="text-accent/40 text-xs font-bold">STEP {step.number}</span>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* Schedule Consultation Section - Full Width CTA Band */}
      <div className="mt-20 md:mt-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-accent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

        <AnimatedElement>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-accent-foreground/80 text-lg md:text-xl leading-relaxed">
                  Schedule a free consultation with our team to discuss your business goals and see how we can help you achieve them.
                </p>
              </div>

              {/* Right CTA */}
              <div className="flex-shrink-0">
                <Button
                  href="/contact"
                  variant="primary"
                  className="bg-accent-foreground text-accent hover:bg-background px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
