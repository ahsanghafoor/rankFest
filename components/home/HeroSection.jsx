'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Globe, BarChart3, Search } from 'lucide-react';
import Button from '@/components/shared/Button';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { AGENCY_NAME, TAGLINE, STATS } from '@/data/constants';
import { useRouter } from 'next/navigation';

function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text, started]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

function AnimatedCounter({ end, suffix = '', label, icon: Icon, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();
  const count = useCountUp(end, 2000, isVisible);

  return (
    <div
      ref={ref}
      className="text-center opacity-0 translate-y-4 transition-all duration-700"
      style={{
        transitionDelay: `${delay}ms`,
        ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
      }}
    >
      <div className="flex items-center justify-center mb-1">
        <Icon size={16} className="text-accent mr-1.5" />
        <div className="text-2xl font-bold text-accent">{count}{suffix}</div>
      </div>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export default function HeroSection() {
  const router = useRouter();
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.05 });

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (websiteUrl) {
      router.push(`/contact?website=${encodeURIComponent(websiteUrl)}`);
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center py-8 md:py-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
                📈 Rank Higher, Grow Faster
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Get Your Business <span className="text-accent">Seen, Trusted & Chosen</span> Online
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {TAGLINE}. Professional SEO services for businesses aiming for real growth. We improve your search rankings so more customers can find you online.
            </p>

            {/* Free Audit Input Section */}
            <form onSubmit={handleAuditSubmit} className="relative max-w-md group transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground/60">
                    <Globe size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your website URL"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-4 bg-accent text-accent-foreground rounded-xl font-bold hover:shadow-lg hover:shadow-accent/40 active:scale-95 transition-all text-base whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Free Website Audit
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/60 flex items-center gap-1.5 ml-1">
                <Search size={12} />
                Get a comprehensive analysis of your site's SEO in minutes
              </p>
            </form>

            {/* Trust Elements */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4">
                <AnimatedCounter 
                  end={parseInt(STATS.yearsInBusiness)} 
                  suffix="+" 
                  label="Years in Business" 
                  icon={TrendingUp} 
                  delay={200} 
                />
                <AnimatedCounter 
                  end={parseInt(STATS.clientsHelped)} 
                  suffix="+" 
                  label="Clients Helped" 
                  icon={Users} 
                  delay={400} 
                />
                <AnimatedCounter 
                  end={parseInt(STATS.reviewsAndRatings)} 
                  suffix="+" 
                  label="Success Stories" 
                  icon={Globe} 
                  delay={600} 
                />
              </div>
            </div>
          </div>

          {/* Right Visual - Redesigned Analytics Dashboard */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Floating glow behind */}
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-60"></div>

            {/* Main card */}
            <div className="relative rounded-2xl border border-accent/20 overflow-hidden shadow-2xl shadow-accent/10">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <BarChart3 size={12} />
                  <span>{AGENCY_NAME} Analytics Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <DashboardStat label="Active Users" value="2,078" change="+24%" positive />
                  <DashboardStat label="Page Views" value="14.5K" change="+18%" positive />
                  <DashboardStat label="Bounce Rate" value="28%" change="-12%" positive />
                </div>

                {/* Main GIF area */}
                <div className="relative rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/active_users.gif"
                    width={600}
                    height={300}
                    alt="Active Users Analytics"
                    priority
                    style={{ width: '100%', height: 'auto' }}
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-accent/40 to-transparent"></div>
                </div>

                {/* Bottom metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/50">Organic Traffic</span>
                      <span className="text-xs text-green-400 font-medium">+342%</span>
                    </div>
                    <div className="flex items-end gap-1 h-8">
                      {[20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-accent/60 rounded-sm transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/50">Keyword Rankings</span>
                      <span className="text-xs text-green-400 font-medium">Top 10</span>
                    </div>
                    <div className="flex items-end gap-1 h-8">
                      {[30, 45, 40, 55, 60, 50, 70, 65, 75, 80, 85, 90].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-blue-400/60 rounded-sm transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function DashboardStat({ label, value, change, positive }) {
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-lg font-bold text-white">{value}</p>
      <p className={`text-xs font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </p>
    </div>
  );
}
