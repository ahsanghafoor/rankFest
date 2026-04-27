'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, CheckIcon } from '@/components/icons'

function ChevronDown({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

const services = [
  'Local SEO',
  'Web Development',
  'AI Chatbots',
  'Multiple Services',
  'Not Sure Yet',
]

const whyUs = [
  'Free initial audit — no strings attached',
  'Response within 24 hours, usually faster',
  'Honest timelines and realistic expectations',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const formRef = useRef(null)
  const infoRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px 0px' })
  const infoInView = useInView(infoRef, { once: true, margin: '-60px 0px' })

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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

  const inputClass =
    'w-full bg-cream border border-ink/10 rounded-2xl px-4 py-3.5 text-ink text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all duration-200 placeholder:text-ink/30'

  return (
    <>
      {/* ── Hero + Form combined on cream ── */}
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
            className="max-w-2xl mb-14"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[1.5px] bg-orange" />
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Get In Touch</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-ink leading-[1.05] mb-6">
              Let&apos;s talk about your{' '}
              <span className="text-orange italic">growth</span>
            </h1>

            <p className="text-base lg:text-xl text-ink/55 leading-relaxed">
              Got questions? Not sure what you need yet? Reach out anyway. We will help you figure out the right move for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="py-14 lg:py-20 bg-cream -mt-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left: info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -40 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1.5px] bg-orange" />
                  <span className="text-xs uppercase tracking-[0.15em] text-ink/50 font-medium">Contact Details</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-[1.15] mb-6">
                  We&apos;re real people,{' '}
                  <span className="text-orange">not a bot</span>
                </h2>
                <p className="text-ink/55 text-[15px] leading-relaxed">
                  Every message you send goes straight to our team. A real person reads it and gets back to you with an actual answer, not a templated reply.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-3">
                <a
                  href="mailto:info@rankfest.co"
                  className="flex items-center gap-4 bg-white rounded-2xl border border-ink/6 p-4 hover:border-orange/30 hover:shadow-md hover:shadow-ink/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-colors duration-200">
                    <Mail className="w-4.5 h-4.5 text-orange group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-ink/40 text-[10px] uppercase tracking-[0.1em] font-medium mb-0.5">Email us</div>
                    <div className="text-ink font-semibold text-sm group-hover:text-orange transition-colors">info@rankfest.co</div>
                  </div>
                </a>

                <a
                  href="tel:+18887265378"
                  className="flex items-center gap-4 bg-white rounded-2xl border border-ink/6 p-4 hover:border-orange/30 hover:shadow-md hover:shadow-ink/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-colors duration-200">
                    <Phone className="w-4.5 h-4.5 text-orange group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-ink/40 text-[10px] uppercase tracking-[0.1em] font-medium mb-0.5">Call us</div>
                    <div className="text-ink font-semibold text-sm group-hover:text-orange transition-colors">+44 748 7516 849</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/+447487516849?text=${encodeURIComponent("Hi RankFest, I'd like to discuss my business goals.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl border border-ink/6 p-4 hover:border-[#25D366]/40 hover:shadow-md hover:shadow-ink/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors duration-200">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-[#25D366] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-ink/40 text-[10px] uppercase tracking-[0.1em] font-medium mb-0.5">WhatsApp</div>
                    <div className="text-ink font-semibold text-sm group-hover:text-[#25D366] transition-colors">Chat with us directly</div>
                  </div>
                </a>
              </div>

              {/* Why reach out */}
              {/* <div className="bg-dark rounded-2xl p-6">
                <p className="text-white text-sm font-semibold mb-4">What to expect when you reach out:</p>
                <div className="space-y-3">
                  {whyUs.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-orange/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckIcon className="w-2 h-2 text-orange" />
                      </span>
                      <span className="text-white/55 text-xs leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </motion.div>

            {/* Right: form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={formInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 bg-white rounded-3xl p-7 lg:p-10 border border-ink/6 shadow-xl shadow-ink/4"
            >
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-5">
                    <CheckIcon className="w-7 h-7 text-orange" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink mb-2">Message received!</h3>
                  <p className="text-ink/50 text-sm leading-relaxed max-w-sm mx-auto">
                    Thanks for reaching out. A member of the RankFest team will get back to you within 24 hours —
                    usually much sooner.
                  </p>
                  <p className="mt-3 text-ink/40 text-sm">
                    Confirmation sent to <span className="font-medium text-ink/60">{form.email}</span>
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-ink mb-1.5">Send Us a Message</h3>
                  <p className="text-sm text-ink/45 mb-7">
                    Share a few details and we will get back to you within 24 hours.

                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-ink/70 mb-2 block">
                          Your Name <span className="text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-ink/70 mb-2 block">
                          Email Address <span className="text-orange">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@yourbusiness.com"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-ink/70 mb-2 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+44 748 7516 849"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-ink/70 mb-2 block">
                          Interested In
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                          >
                            <option value="">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-ink/70 mb-2 block">
                        Tell Us About Your Business <span className="text-orange">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What kind of business do you run and what is your biggest challenge right now? Any details help us come prepared."
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs text-center">
                        Something went wrong. Please try again or email us directly at info@rankfest.co
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-orange text-white font-bold py-4 rounded-2xl hover:bg-orange/90 transition-all shadow-lg shadow-orange/20 text-sm disabled:opacity-70 mt-2"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    <p className="text-center text-xs text-ink/35 pt-1">
                      We respond within 24 hours. Your details are never shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
