'use client';
import { useState, useEffect } from 'react';
import { Check, Send, ChevronDown, Clock, Shield, Users } from 'lucide-react';
import { useScrollAnimation, AnimatedElement } from '@/hooks/useScrollAnimation';

export default function FinalCTA({ prefilledWebsite = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    website: prefilledWebsite,
    budget: '',
    message: '',
  });

  // Update website field if prefilledWebsite changes
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
          setFormData({
            name: '',
            email: '',
            phone: '',
            businessName: '',
            website: '',
            budget: '',
            message: '',
          });
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

  const inputClasses = "w-full px-5 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-base";

  const selectClasses = "w-full px-5 py-3.5 pr-12 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-base appearance-none cursor-pointer";

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Ready to Scale Your <span className="text-accent">Business?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our SEO strategists will be in touch with a custom growth plan.
          </p>
        </div>

        {/* Form Container */}
        <AnimatedElement animation="scaleIn" delay={200}>
          <div className="relative">
            {/* Glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-sm"></div>

            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="cta-name" className="block text-sm font-semibold text-foreground">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="cta-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cta-email" className="block text-sm font-semibold text-foreground">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="cta-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Website & Business Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="cta-website" className="block text-sm font-semibold text-foreground">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="cta-website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cta-businessName" className="block text-sm font-semibold text-foreground">
                        Business Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="cta-businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="Your Business"
                      />
                    </div>
                  </div>

                  {/* Row 3: Budget (full width) */}
                  <div className="space-y-2">
                    <label htmlFor="cta-budget" className="block text-sm font-semibold text-foreground">
                      Monthly Budget
                    </label>
                    <div className="relative">
                      <select
                        id="cta-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-5k">$3,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k+">$10,000+</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown size={20} className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-2">
                    <label htmlFor="cta-message" className="block text-sm font-semibold text-foreground">
                      Tell us about your business
                    </label>
                    <textarea
                      id="cta-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your business, current challenges, and what you're hoping to achieve..."
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm animate-shake">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <span>{loading ? 'Sending...' : 'Get My Free SEO Audit'}</span>
                    {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    <Shield size={14} className="text-muted-foreground/60" />
                    <p className="text-xs text-muted-foreground/60">
                      We respect your privacy. Your information will only be used to contact you about your inquiry.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16" style={{ animation: 'scaleIn 0.5s ease-out' }}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 border border-accent/30">
                    <Check className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    Thank you!
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    We&apos;ve received your inquiry. Our team will be in touch within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
