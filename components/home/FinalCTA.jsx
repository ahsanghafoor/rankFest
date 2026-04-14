'use client';
import { useState, useEffect } from 'react';
import { Check, Send, ChevronDown, Shield } from 'lucide-react';
import { useScrollAnimation, AnimatedElement } from '@/hooks/useScrollAnimation';

export default function FinalCTA({ prefilledWebsite = '', hideHeader = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    website: prefilledWebsite,
    budget: '',
    message: '',
  });

  useEffect(() => {
    if (prefilledWebsite) {
      setFormData(prev => ({ ...prev, website: prefilledWebsite }));
    }
  }, [prefilledWebsite]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [headerRef, headerVisible] = useScrollAnimation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', businessName: '', website: '', budget: '', message: '' });
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-background/70 border border-border/70 rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300 text-sm';

  const selectClasses =
    'w-full px-4 py-3 pr-10 bg-background/70 border border-border/70 rounded-xl text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300 text-sm appearance-none cursor-pointer';

  /* ── When used standalone (e.g. home page) keep the full section wrapper.
     When used inside the contact page, strip the outer padding/background. ── */
  const Wrapper = hideHeader
    ? ({ children }) => <div className="w-full">{children}</div>
    : ({ children }) => (
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
      </section>
    );

  return (
    <Wrapper>
      {/* Header — hidden on contact page (info is on the left) */}
      {!hideHeader && (
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-5 border border-accent/20">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Scale Your <span className="text-accent">Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our SEO strategists will be in touch with a custom growth plan.
          </p>
        </div>
      )}

      {/* Form card */}
      <AnimatedElement animation="scaleIn" delay={hideHeader ? 0 : 200}>
        <div className="relative">
          {/* Glow border */}
          <div className="absolute -inset-px bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl pointer-events-none" />

          <div className="relative bg-card border border-border/60 rounded-2xl p-7 md:p-9 shadow-xl shadow-black/20">

            {/* Mini heading inside the card — shown only on contact page */}
            {hideHeader && (
              <div className="mb-7 pb-6 border-b border-border/50">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/20 mb-3">
                  Get in Touch
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Ready to Scale Your <span className="text-accent">Business?</span>
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Fill out the form and our SEO strategists will be in touch with a custom growth plan.
                </p>
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cta-name" className="block text-xs font-semibold text-foreground tracking-wide">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input type="text" id="cta-name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cta-email" className="block text-xs font-semibold text-foreground tracking-wide">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input type="email" id="cta-email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@example.com" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cta-website" className="block text-xs font-semibold text-foreground tracking-wide">Website URL</label>
                    <input type="url" id="cta-website" name="website" value={formData.website} onChange={handleChange} className={inputClasses} placeholder="https://example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cta-businessName" className="block text-xs font-semibold text-foreground tracking-wide">
                      Business Name <span className="text-accent">*</span>
                    </label>
                    <input type="text" id="cta-businessName" name="businessName" value={formData.businessName} onChange={handleChange} required className={inputClasses} placeholder="Your Business" />
                  </div>
                </div>

                {/* Row 3: Budget */}
                <div className="space-y-1.5">
                  <label htmlFor="cta-budget" className="block text-xs font-semibold text-foreground tracking-wide">Monthly Budget</label>
                  <div className="relative">
                    <select id="cta-budget" name="budget" value={formData.budget} onChange={handleChange} className={selectClasses}>
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-3k">$1,000 – $3,000</option>
                      <option value="3k-5k">$3,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown size={16} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1.5">
                  <label htmlFor="cta-message" className="block text-xs font-semibold text-foreground tracking-wide">Tell us about your business</label>
                  <textarea
                    id="cta-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your business, current challenges, and what you're hoping to achieve..."
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-base hover:shadow-lg hover:shadow-accent/30 hover:brightness-105 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group mt-1 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  <span>{loading ? 'Sending…' : 'Contact Now'}</span>
                  {!loading && (
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  )}
                </button>

                <div className="flex items-center justify-center gap-2">
                  <Shield size={12} className="text-muted-foreground/50" />
                  <p className="text-[11px] text-muted-foreground/50 text-center">
                    We respect your privacy. Your information will only be used to contact you about your inquiry.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-14" style={{ animation: 'scaleIn 0.5s ease-out' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-5 border border-accent/30">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground max-w-xs mx-auto text-sm leading-relaxed">
                  We've received your inquiry. Our team will be in touch within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedElement>
    </Wrapper>
  );
}