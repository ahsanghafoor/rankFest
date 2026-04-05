'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer:
        'SEO typically shows initial results within 2-3 months, with significant improvements by 6 months. PPC shows results immediately. The timeline depends on your industry, competition, current website state, and the services you choose. We\'ll provide a realistic timeline during your consultation.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Pricing varies based on the services you choose and the scope of work needed. SEO typically starts at $1,500-$3,000/month, PPC management from $1,000/month plus ad spend, and web development from $3,000-$10,000+. We offer custom quotes based on your specific goals. Schedule a consultation for an exact estimate.',
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes! We offer completely free initial consultations. We\'ll analyze your current situation, discuss your goals, and recommend a custom strategy with no obligation. It\'s a great way to understand how we can help your business.',
    },
    {
      question: 'What if I\'m not satisfied with your services?',
      answer:
        'We\'re confident in our work and your satisfaction is our priority. We continuously optimize your campaigns, provide transparent reporting, and adapt our strategy based on performance. If you\'re not seeing the results we promised, we\'ll work with you to adjust the approach. We believe in earning your business every month.',
    },
    {
      question: 'Can you work with businesses in my industry?',
      answer:
        'We\'ve helped businesses across numerous industries—e-commerce, services, B2B, healthcare, local businesses, SaaS, and more. Our strategies adapt to your specific industry needs, competitive landscape, and business goals. Tell us about your industry and we\'ll let you know how we can help.',
    },
    {
      question: 'How do you report on progress?',
      answer:
        'We provide detailed monthly reports showing key metrics, progress toward goals, and actionable insights. You\'ll have direct access to your account, real-time performance data, and regular communication with your dedicated team member. No surprises, just transparency.',
    },
    {
      question: 'What\'s the minimum commitment?',
      answer:
        'Most services require a minimum 3-month engagement to allow time for strategy implementation and measurable results. SEO needs at least 3 months to show traction. Some services like PPC can start showing results immediately but benefit from ongoing optimization. We\'ll discuss the right timeline during your consultation.',
    },
    {
      question: 'Will you work with my existing web designer or developer?',
      answer:
        'Absolutely! We can work with your existing team. We communicate clearly about what needs to be done and can collaborate directly with your designer or developer. If you don\'t have a team, we can handle everything or recommend partners we trust.',
    },
    {
      question: 'How is your team different from other agencies?',
      answer:
        'We focus on transparency, customized strategy, and measurable results—not activity metrics. We don\'t use cookie-cutter approaches. Every client gets a dedicated strategy based on their unique situation. We provide detailed reporting, direct communication, and we\'re honest about what\'s working and what isn\'t.',
    },
    {
      question: 'Can I scale services if business grows?',
      answer:
        'Yes! Our services are designed to scale with your business. As you grow, we can expand PPC budgets, increase content production, add new service offerings, or target new markets. Your success is our success, and we\'ll grow with you.',
    },
    {
      question: 'What if my competitor is also a client?',
      answer:
        'We have clear policies to avoid conflicts of interest. Generally, we don\'t take on clients who directly compete in the same niche and geography. We focus on providing each client with world-class service tailored to their specific situation.',
    },
    {
      question: 'Do you offer contracts?',
      answer:
        'Yes, we typically require contracts for service engagements. Most are 3 months minimum with month-to-month renewal options after that. We believe in earning your business every month, so the contract protects both parties but doesn\'t lock you in indefinitely.',
    },
    {
      question: 'Can you guarantee #1 rankings?',
      answer:
        'No legitimate SEO agency can guarantee specific rankings. Google\'s algorithm is complex and constantly changing. What we guarantee is that we\'ll implement best practices, focus on sustainable white-hat strategies, and continuously optimize for better performance. We measure success by traffic and conversions, not rankings.',
    },
    {
      question: 'What\'s included in an SEO service?',
      answer:
        'Typically includes keyword research, on-page optimization, content strategy and creation, technical SEO, link building, monthly reporting, and strategy optimization. The exact scope depends on your specific plan. We\'ll detail everything during your consultation.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Easy! Schedule a free consultation on our contact page. We\'ll discuss your goals, analyze your current situation, and provide a custom recommendation. If you\'re interested, we\'ll create a detailed proposal and get you started on your growth journey.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Common questions about our services, pricing, and how we work. Have a question not listed? Reach out anytime.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/50"
              >
                <button
                  onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-accent flex-shrink-0 transition-transform duration-300 ${expanded === idx ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {expanded === idx && (
                  <div className="px-8 py-6 bg-secondary/30 border-t border-border">
                    <p className="text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Didn't find your answer?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Reach out to our team. We're happy to answer any questions about our services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Trust RankFest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <p className="text-muted-foreground">Years of proven results</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Successful clients nationwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
              <p className="text-muted-foreground">Average client rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
