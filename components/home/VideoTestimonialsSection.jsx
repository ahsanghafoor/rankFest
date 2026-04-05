'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VideoTestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [headerRef, headerVisible] = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'E-Commerce Store Owner',
      company: 'Premium Fashion Retail',
      videoPlaceholder: '🎬',
      duration: '2:15',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Business Owner',
      company: 'Plumbing Services',
      videoPlaceholder: '📹',
      duration: '1:45',
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      role: 'VP Marketing',
      company: 'B2B Software Company',
      videoPlaceholder: '🎥',
      duration: '2:30',
    },
    {
      id: 4,
      name: 'Dr. David Park',
      role: 'Clinic Director',
      company: 'Dental Clinic Network',
      videoPlaceholder: '📺',
      duration: '2:00',
    },
  ];

  useEffect(() => {
    if (!isAutoScroll || isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoScroll, isPlaying, testimonials.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoScroll(false);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoScroll(false);
  };

  const handlePlayPause = (e) => {
    if (e) e.stopPropagation();
    setIsPlaying(!isPlaying);
    setIsAutoScroll(false);
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [current]);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background */}
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
            Hear From Our <span className="text-accent">Happy Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real success stories from businesses we've transformed.
          </p>
        </div>

        {/* Video Stack Carousel */}
        <div className="relative h-96 md:h-[500px] flex items-center justify-center perspective">
          <div className="relative w-full max-w-2xl h-full">
            {testimonials.map((testimonial, index) => {
              let position = (index - current + testimonials.length) % testimonials.length;
              if (position > testimonials.length / 2) {
                position -= testimonials.length;
              }

              const isActive = position === 0;
              const distance = Math.abs(position);

              let translateX = 0;
              let translateY = 0;
              let scale = 1;
              let opacity = 0;
              let zIndex = 10 - distance;

              if (isActive) {
                translateX = 0;
                translateY = 0;
                scale = 1;
                opacity = 1;
                zIndex = 50;
              } else if (position < 0) {
                translateX = -40 * distance;
                translateY = -20 * distance;
                scale = 0.85 - distance * 0.05;
                opacity = Math.max(0.4, 1 - distance * 0.3);
                zIndex = 10 - distance;
              } else {
                translateX = 40 * distance;
                translateY = -20 * distance;
                scale = 0.85 - distance * 0.05;
                opacity = Math.max(0.4, 1 - distance * 0.3);
                zIndex = 10 - distance;
              }

              return (
                <div
                  key={testimonial.id}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-700"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${position * -15}deg)`,
                    opacity,
                    zIndex,
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                  onClick={() => !isActive && setCurrent(index)}
                >
                  <div className={`w-full mx-4 md:mx-0 bg-card border-2 border-accent/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${isActive ? 'shadow-accent/50' : ''}`}>
                    <div className="relative w-full aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex flex-col items-center justify-center group cursor-pointer">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={handlePlayPause}
                          className="w-16 h-16 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                          {isPlaying && isActive ? (
                            <Pause className="w-7 h-7 text-accent-foreground fill-current" />
                          ) : (
                            <Play className="w-7 h-7 text-accent-foreground fill-current ml-1" />
                          )}
                        </button>
                      </div>

                      <div className="text-6xl mb-3">{testimonial.videoPlaceholder}</div>
                      <p className="text-muted-foreground text-sm">Video Testimonial</p>

                      <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded text-white text-xs font-semibold">
                        {testimonial.duration}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-accent font-semibold">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            disabled={isPlaying}
            className="p-3 hover:bg-card rounded-full transition-all duration-300 border border-border hover:border-accent disabled:opacity-50"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-foreground hover:text-accent" />
          </button>

          <button
            onClick={handlePlayPause}
            className="p-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={isPlaying}
            className="p-3 hover:bg-card rounded-full transition-all duration-300 border border-border hover:border-accent disabled:opacity-50"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-foreground hover:text-accent" />
          </button>
        </div>

        {/* Video Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsAutoScroll(false);
                setIsPlaying(false);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === current ? 'bg-accent w-8' : 'bg-border w-2.5 hover:bg-accent/50'}`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Scroll left and right to browse videos • Click play to watch
        </p>
      </div>
    </section>
  );
}
