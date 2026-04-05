'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [sectionRef, sectionVisible] = useScrollAnimation();

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, caseStudies.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`mb-12 text-center max-w-2xl mx-auto transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success Stories That <span className="text-accent">Prove Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses across industries achieve remarkable growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative min-h-[520px] md:min-h-[420px] flex items-stretch">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`absolute inset-0 transition-all duration-700 ${index === current
                    ? 'opacity-100 translate-x-0'
                    : index < current
                      ? 'opacity-0 -translate-x-8'
                      : 'opacity-0 translate-x-8'
                    } ${index !== current ? 'pointer-events-none' : ''}`}
                >
                  <div className="h-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-6 md:p-10">
                    {/* Label */}
                    <p className="text-accent font-semibold text-sm mb-4 tracking-wider">CASE STUDY</p>

                    {/* Grid Layout - 55/45 split */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                      {/* Left: Title & Image */}
                      <div className="md:col-span-7 space-y-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                            {study.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{study.client}</p>
                        </div>

                        {/* Screenshot Image */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden group border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                          <Image
                            src={study.image}
                            alt={`${study.title} screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Right: Results & CTA */}
                      <div className="md:col-span-5 flex flex-col justify-start md:pt-4 space-y-6">
                        <div>
                          <div className="text-4xl md:text-5xl font-extrabold text-accent mb-1 leading-none">
                            {study.metric}
                          </div>
                          <div className="text-lg md:text-xl font-semibold text-accent/80 mb-4">
                            {study.metricLabel}
                          </div>
                          <div className="min-h-[4.5rem] md:min-h-[5.5rem]">
                            <p className="text-foreground/80 leading-relaxed text-sm md:text-base line-clamp-3">
                              {study.description}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 w-fit"
                        >
                          View Case Study
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-2.5 hover:bg-card rounded-full transition-all duration-300 border border-border hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-accent w-8' : 'bg-border w-2 hover:bg-accent/50'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 hover:bg-card rounded-full transition-all duration-300 border border-border hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </section>
  );
}
