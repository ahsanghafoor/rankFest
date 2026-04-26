'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckIcon, StarIcon, ArrowRight } from '@/components/icons'
import CTABanner from '@/components/CTABanner'

function ChevronDown({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

export default function ServicePage({ service }) {
  const [openFaq, setOpenFaq] = useState(null)

  const includesRef  = useRef(null)
  const processRef   = useRef(null)
  const faqRef       = useRef(null)
  const testimRef    = useRef(null)

  const includesInView = useInView(includesRef,  { once: true, margin: '-80px 0px' })
  const processInView  = useInView(processRef,   { once: true, margin: '-80px 0px' })
  const faqInView      = useInView(faqRef,       { once: true, margin: '-80px 0px' })
  const testimInView   = useInView(testimRef,    { once: true, margin: '-60px 0px' })

  // Split title for colored last word
  const titleParts = service.title.split(' ')
  const titleStart = titleParts.slice(0, -1).join(' ')
  const titleEnd   = titleParts[titleParts.length - 1]

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream pt-36 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 hero-lines pointer-events-none" />
        {/* Soft orange blobs */}
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange/5 rounded-full blur-2xl pointer-events-none" />

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
              <span className="text-ink/50">{service.title}</span>
            </div>

            <div className="max-w-3xl">
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-orange" />
                <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Our Services</span>
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold text-ink leading-[1.05] mb-6">
                {titleStart && <>{titleStart} </>}
                <span className="text-orange">{titleEnd}</span>
              </h1>

              <p className="text-base lg:text-lg text-ink/55 leading-relaxed mb-10 max-w-2xl">
                {service.heroDescription}
              </p>

              {/* Result metrics */}
              <div className="flex flex-wrap gap-4 mb-10">
                {service.results.map((r) => (
                  <div key={r.label} className="bg-white border border-ink/8 rounded-2xl px-5 py-3.5 min-w-[110px] shadow-sm">
                    <div className="font-display text-2xl font-bold text-orange leading-none">{r.value}</div>
                    <div className="text-ink/40 text-[11px] mt-1.5 leading-snug">{r.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/#free-audit"
                  className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded-full hover:bg-orange/90 transition-all hover:shadow-lg hover:shadow-orange/30 text-sm"
                >
                  Get a Free Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/contact" className="text-ink/45 text-sm hover:text-ink/70 transition-colors">
                  Talk to us first →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={includesRef}
            initial={{ opacity: 0, y: 40 }}
            animate={includesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">What's Included</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
              Everything you need,{' '}
              <span className="text-orange">nothing you don't.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.includes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={includesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl p-6 border border-ink/6 hover:shadow-xl hover:shadow-ink/6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl font-bold text-orange/15 group-hover:text-orange/30 transition-colors leading-none mt-0.5 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-[15px] mb-2">{item.title}</h3>
                    <p className="text-ink/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 40 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">How It Works</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              Simple, transparent{' '}
              <span className="text-orange italic">process.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:border-orange/30 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="font-display text-5xl font-bold text-orange/20 group-hover:text-orange/35 transition-colors mb-4 leading-none">
                  {step.step}
                </div>
                <h3 className="font-semibold text-white text-[15px] mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 40 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Common Questions</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-ink leading-[1.1]">
              Questions &amp; <span className="text-orange">Answers</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {service.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border border-ink/6 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className={`font-semibold text-[15px] pr-4 transition-colors duration-200 ${openFaq === i ? 'text-orange' : 'text-ink group-hover:text-orange'}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180 text-orange' : 'text-ink/30'}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-ink/55 text-sm leading-relaxed border-t border-ink/5 pt-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center flex-wrap gap-3">
              <div className="w-11 h-11 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                <span className="text-orange font-bold">{service.testimonial.author.charAt(0)}</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">{service.testimonial.author}</div>
                <div className="text-white/35 text-xs">{service.testimonial.business}</div>
              </div>
              <div className="bg-orange/15 border border-orange/25 rounded-full px-3.5 py-1.5">
                <span className="text-orange text-xs font-semibold">{service.testimonial.result}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to get started?"
        subtitle={`Get a free audit and see exactly where the opportunities are for your ${service.title.toLowerCase()} presence. No obligation — just clear, honest data.`}
        ctaText="Get My Free Audit"
        ctaHref="/#free-audit"
        secondaryText="Have a question? Talk to us →"
        secondaryHref="/contact"
        badge="Free audit — no strings attached"
      />
    </>
  )
}
