'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, StarIcon, CheckIcon } from '@/components/icons'
import CTABanner from '@/components/CTABanner'

export default function CaseStudyPage({ cs }) {
  const challengeRef  = useRef(null)
  const strategyRef   = useRef(null)
  const resultsRef    = useRef(null)
  const timelineRef   = useRef(null)
  const testimRef     = useRef(null)

  const challengeInView = useInView(challengeRef,  { once: true, margin: '-80px 0px' })
  const strategyInView  = useInView(strategyRef,   { once: true, margin: '-80px 0px' })
  const resultsInView   = useInView(resultsRef,    { once: true, margin: '-80px 0px' })
  const timelineInView  = useInView(timelineRef,   { once: true, margin: '-80px 0px' })
  const testimInView    = useInView(testimRef,     { once: true, margin: '-60px 0px' })

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream pt-36 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 hero-lines pointer-events-none" />
        <div className="absolute top-16 right-1/4 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-orange/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-ink/30 text-xs mb-8">
              <a href="/" className="hover:text-ink/60 transition-colors">Home</a>
              <span>/</span>
              <span className="text-ink/40">Case Studies</span>
              <span>/</span>
              <span className="text-ink/55">{cs.business}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="inline-flex items-center bg-orange/10 border border-orange/20 text-orange text-[11px] font-semibold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="inline-flex items-center bg-ink/6 border border-ink/10 text-ink/50 text-[11px] px-3.5 py-1.5 rounded-full">
                    {cs.city}
                  </span>
                  <span className="inline-flex items-center bg-ink/6 border border-ink/10 text-ink/50 text-[11px] px-3.5 py-1.5 rounded-full">
                    {cs.duration}
                  </span>
                </div>

                <h1 className="font-display text-4xl lg:text-6xl font-bold text-ink leading-[1.05] mb-4">
                  {cs.business}
                </h1>

                <p className="text-xl text-orange font-display font-medium italic mb-8">
                  {cs.tagline}
                </p>

                {/* Top 3 metrics */}
                <div className="flex flex-wrap gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-white border border-ink/8 rounded-2xl px-5 py-3.5 min-w-[100px] shadow-sm">
                      <div className="font-display text-2xl font-bold text-orange leading-none">{m.value}</div>
                      <div className="text-ink/40 text-[11px] mt-1.5 leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: thumbnail image */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-ink/12 border border-ink/6"
              >
                <Image
                  src={cs.thumbnail}
                  alt={cs.business}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 text-ink/70 text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                    {cs.service}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              ref={challengeRef}
              initial={{ opacity: 0, x: -40 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-orange" />
                <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">The Challenge</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-[1.15] mb-6">
                Where they were <span className="text-orange">before us</span>
              </h2>
              <p className="text-ink/60 leading-relaxed text-[15px]">{cs.challenge}</p>
            </motion.div>

            {/* Result callout card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-dark rounded-3xl p-8 text-white sticky top-28"
            >
              <p className="text-white/40 text-xs uppercase tracking-[0.15em] font-medium mb-5">Final Results</p>
              <div className="grid grid-cols-2 gap-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="bg-white/6 rounded-2xl p-4">
                    <div className="font-display text-2xl font-bold text-orange leading-none mb-1.5">{r.value}</div>
                    <div className="text-white/40 text-[11px] leading-snug">{r.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/8">
                <a
                  href="/#free-audit"
                  className="flex items-center justify-center gap-2 bg-orange text-white font-semibold py-3.5 rounded-2xl hover:bg-orange/90 transition-colors text-sm"
                >
                  Get similar results
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Strategy ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div
              ref={strategyRef}
              initial={{ opacity: 0, y: 40 }}
              animate={strategyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-orange" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">Our Strategy</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-[1.15] mb-6">
                What we <span className="text-orange italic">actually did</span>
              </h2>
              <p className="text-white/55 leading-relaxed text-[15px]">{cs.strategy}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 40 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Campaign Timeline</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-[1.15]">
              Week by <span className="text-orange">week</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-orange/20" />

            <div className="space-y-6">
              {cs.timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 items-start"
                >
                  {/* Dot */}
                  <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange/30 relative z-10">
                    <span className="text-white font-bold text-xs">{i + 1}</span>
                  </div>
                  <div className="bg-white rounded-2xl border border-ink/6 p-5 flex-1 hover:shadow-md hover:shadow-ink/5 transition-shadow">
                    <div className="text-orange text-xs font-semibold uppercase tracking-[0.1em] mb-1.5">{t.week}</div>
                    <p className="text-ink/70 text-sm leading-relaxed">{t.milestone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            ref={testimRef}
            initial={{ opacity: 0, y: 40 }}
            animate={testimInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-orange" />
              ))}
            </div>
            <blockquote className="font-display text-2xl lg:text-3xl font-medium text-white italic leading-relaxed mb-8">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                <span className="text-orange font-bold">{cs.testimonial.author.charAt(0)}</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">{cs.testimonial.author}</div>
                <div className="text-white/35 text-xs">{cs.testimonial.title} · {cs.testimonial.business}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Want results like this?"
        subtitle="We offer a free, no-obligation audit of your current local SEO setup. No sales pressure — just honest data on where you stand and what it would take to reach the top."
        ctaText="Get My Free Audit"
        ctaHref="/#free-audit"
        secondaryText="Talk to us first →"
        secondaryHref="/contact"
        badge="Free audit — no strings attached"
      />
    </>
  )
}
