'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckIcon } from '@/components/icons'
import { teamMembers, companyValues, companyStats } from '@/lib/team-data'
import CTABanner from '@/components/CTABanner'

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function AboutPage() {
  const storyRef = useRef(null)
  const statsRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px 0px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-80px 0px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px 0px' })
  const teamInView = useInView(teamRef, { once: true, margin: '-80px 0px' })

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 hero-lines pointer-events-none" />
        <div className="absolute top-16 right-1/3 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Our Story</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-ink leading-[1.05] mb-6">
              The agency behind your{' '}
              <span className="text-orange italic">next #1</span>{' '}
              ranking
            </h1>

            <p className="text-base lg:text-xl text-ink/55 leading-relaxed max-w-2xl">
              We are a specialist local SEO and digital growth agency helping independent businesses
              compete and win online — without the fluff, the vanity metrics, or the 12-month lock-in contracts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1.5px] bg-orange" />
                <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Who We Are</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-[1.15] mb-6">
                Built for the businesses big agencies ignore
              </h2>
              <div className="space-y-4 text-ink/60 text-[15px] leading-relaxed">
                <p>
                  RankFest was founded after watching too many incredible local businesses — the family-run dentist,
                  the third-generation plumber, the talented home renovation company — get buried on Google by
                  national chains with bigger marketing budgets and zero local roots.
                </p>
                <p>
                  We built a different kind of agency. One that specialises exclusively in local search, speaks in
                  plain English, and measures success in calls, leads, and revenue — not impressions and traffic
                  that never converts.
                </p>
                <p>
                  Today we work with businesses across the US, UK, Canada, and Australia. Our clients range from
                  solo practitioners to multi-location service businesses. What they all have in common: they wanted
                  results, not excuses.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Specialist local SEO — not a generalise-everything agency',
                  'Plain-English reporting every single month',
                  'No long-term contracts — we earn your business every month',
                  'Results across US, UK, Canada, and Australia',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckIcon className="w-2.5 h-2.5 text-orange" />
                    </span>
                    <span className="text-ink/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: pull quote */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-dark rounded-3xl p-8 lg:p-10">
                <div className="text-4xl text-orange font-display font-bold mb-4 leading-none">&ldquo;</div>
                <p className="font-display text-xl lg:text-2xl text-white italic leading-relaxed mb-6">
                  We don&apos;t take on clients we can&apos;t genuinely help. Every engagement starts with honesty about
                  what&apos;s achievable and a realistic timeline to get there.
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center flex-shrink-0">
                    <Image src="/assets/umar.png" alt="Umar Farooq" width={34} height={34} className="rounded-full" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Umar Farooq</div>
                    <div className="text-white/35 text-xs">Founder, RankFest</div>
                  </div>
                </div>
              </div>

              {/* Mini stat bar */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {companyStats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl border border-ink/6 p-5 text-center">
                    <div className="font-display text-2xl font-bold text-orange">{stat.value}</div>
                    <div className="text-ink/45 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-10 lg:py-14 bg-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {companyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-orange mb-2">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">How We Work</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
              Principles we never{' '}
              <span className="text-orange">compromise on</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {companyValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border border-ink/6 p-7 hover:shadow-xl hover:shadow-ink/6 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl font-bold text-orange/15 group-hover:text-orange/30 transition-colors leading-none mt-1 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-2">{value.title}</h3>
                    <p className="text-ink/55 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-14 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 40 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">The Team</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              The people <span className="text-orange italic">doing the work</span>
            </h2>
            <p className="mt-4 text-white/40 text-base max-w-xl leading-relaxed">
              A small, specialist team. Everyone who works at RankFest is an expert — not a generalist who learned
              local SEO last month.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name + i}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-orange/30 hover:bg-white/8 transition-all duration-300 group"
              >
                {/* Photo area */}
                <div className="relative aspect-square bg-gradient-to-br from-orange/15 to-orange/5 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  {/* Fallback initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-orange/20 group-hover:text-orange/35 transition-colors select-none">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-white text-[15px]">{member.name}</h3>
                  <p className="text-orange text-xs font-medium mt-0.5 mb-3">{member.designation}</p>
                  {/* <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p> */}

                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-white/30 hover:text-orange transition-colors text-xs"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to work together?"
        subtitle="Start with a free audit. No obligation, no sales pressure — just honest data about where you stand and what it would take to get to the top."
        ctaText="Get My Free Audit"
        ctaHref="/#free-audit"
        secondaryText="Or drop us a message →"
        secondaryHref="/contact"
        badge="Let's grow together"
      />
    </>
  )
}
