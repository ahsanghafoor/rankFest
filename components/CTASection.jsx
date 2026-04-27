'use client'

import { motion } from 'framer-motion'

const avatarColors = ['bg-emerald-500', 'bg-amber-400', 'bg-blue-500', 'bg-pink-500']
const avatarInitials = ['MR', 'SL', 'DK', 'AP']

export default function CTASection() {
  return (
    <section className="py-8 px-5 sm:px-8 bg-cream">
      <motion.div
        className="max-w-7xl mx-auto bg-orange rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background texture */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-white/8 blur-2xl pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-[0.18] pointer-events-none" />

        <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* ── Left: headline + description ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                SPOTS FILLING UP FAST
              </span>
            </div>
            <h2
              className="font-display font-bold text-white leading-[1.08] italic"
              style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)' }}
            >
              Ready to dominate your local market?
            </h2>
            <p className="mt-3 text-sm lg:text-base text-white/65 leading-relaxed max-w-md mx-auto lg:mx-0">
              We work with a small group of businesses at a time so every client gets real attention. If you are serious, let's get started.
            </p>
            {/* <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-y-2 gap-x-4 items-center lg:items-start">
              {['No long-term contracts', 'Results in 30 days', 'Full flexibility always'].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <span className="text-white font-bold">✓</span>{b}
                </span>
              ))}
            </div> */}
          </motion.div>

          {/* ── Right: CTA + quote + avatars ── */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="/#free-audit"
              className="bg-white text-orange font-bold px-9 py-4 rounded-2xl text-base shadow-xl shadow-black/20 hover:bg-cream transition-all inline-flex items-center justify-center gap-2.5 w-full sm:w-auto"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get My Free Site Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            {/* Short testimonial quote */}
            {/* <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 max-w-[260px] text-center">
              <p className="text-white/85 text-xs italic leading-relaxed">"My calls tripled in 3 weeks. Best investment I've made."</p>
              <p className="text-white/45 text-[10px] mt-1.5">— James T., FlowRight Plumbing</p>
            </div> */}

            {/* Avatar stack + social proof */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center -space-x-2.5">
                {avatarInitials.map((init, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${avatarColors[i]} border-2 border-white/40 flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-[9px] font-bold text-white">{init}</span>
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-orange/80 border-2 border-white/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px] font-bold text-white">+146</span>
                </div>
              </div>
              <p className="text-[11px] text-white/55 text-center">
                Trusted by <span className="text-white font-semibold">150+</span> local businesses
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
