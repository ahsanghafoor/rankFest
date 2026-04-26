'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Mail, CheckIcon, StarIcon } from '@/components/icons'

const checklistItems = [
  'Full Google Business Profile health check',
  'Citation accuracy report across 30+ directories',
  'Top 5 keyword gaps vs. your competitors',
  'On-page SEO score for your homepage and 2 location pages',
  'Priority fix list with what to tackle first',
]

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
}

export default function FreeAuditSection() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')

  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-80px 0px' })
  const rightInView = useInView(rightRef, { once: true, margin: '-80px 0px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url || !email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="free-audit" className="py-12 lg:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-orange" />
            <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">
              Free Local SEO Audit
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mt-2 leading-[1.1]">
            Find out why you're not ranking{' '}
            <span className="text-orange">for free.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-ink/55 leading-relaxed">
            Enter your website and we'll run a full audit of your Google Business Profile,
            local citations, on-page signals, and backlink profile. No sales pitch on the
            first call. Just honest data.
          </p>

          <motion.ul
            className="mt-8 space-y-3.5"
            variants={listVariants}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
          >
            {checklistItems.map((item) => (
              <motion.li key={item} variants={itemVariants} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-orange/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <CheckIcon className="w-2.5 h-2.5 text-orange" />
                </span>
                <span className="text-ink/65 text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={rightInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-7 lg:p-10 border border-ink/6 shadow-xl shadow-ink/4"
        >
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-5">
                <CheckIcon className="w-7 h-7 text-orange" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-2">You're all set!</h3>
              <p className="text-ink/50 text-sm leading-relaxed">
                We've received your request and sent a confirmation to{' '}
                <span className="font-medium text-ink/70">{email}</span>.
                Your audit report will be ready within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-bold text-ink mb-1.5">
                Get Your Free Audit
              </h3>
              <p className="text-sm text-ink/45 mb-7 leading-relaxed">
                Takes 2 minutes. Report ready within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* URL input */}
                <div>
                  <label className="text-sm font-semibold text-ink/70 mb-2 block">
                    Your Website URL
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink/30">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://yourbusiness.com"
                      required
                      className="w-full bg-cream border border-ink/10 rounded-2xl pl-11 pr-4 py-3.5 text-ink text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all duration-200 placeholder:text-ink/30"
                    />
                  </div>
                </div>

                {/* Email input */}
                <div>
                  <label className="text-sm font-semibold text-ink/70 mb-2 block">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      required
                      className="w-full bg-cream border border-ink/10 rounded-2xl pl-11 pr-4 py-3.5 text-ink text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all duration-200 placeholder:text-ink/30"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center">
                    Something went wrong. Please try again or email us at info@rankfest.co
                  </p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-orange text-white font-bold py-4 rounded-2xl hover:bg-orange/90 transition-all shadow-lg shadow-orange/20 text-sm disabled:opacity-70 mt-2"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Me My Free Audit Report'}
                </motion.button>

                <p className="text-center text-xs text-ink/35 pt-1">
                  We never share your data. No spam, just your audit report.
                </p>
              </form>

              {/* Credibility bar */}
              <div className="mt-7 pt-6 border-t border-ink/6 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3 text-orange" />
                    ))}
                  </div>
                  <span className="text-xs text-ink/40">4.9 from 1270+ reviews</span>
                </div>
                <span className="text-xs text-ink/40">350+ audits done this month</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
