import { services } from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart3, Users, Target } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing Services - RankFest',
  description: 'Full suite of digital marketing services including SEO, PPC, local SEO, web development, and branding.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Complete Digital Marketing <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From SEO to paid advertising, web development to branding, we offer a full suite of services designed to grow your business online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Image Container */}
                  <div className="relative h-44 mb-6 bg-accent/5 rounded-xl flex items-center justify-center overflow-hidden border border-border group-hover:border-accent/30 transition-all duration-500">
                    <Image
                      src={`${service.image}`}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose RankFest?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <BarChart3 size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">Data-Driven</h3>
              <p className="text-muted-foreground">
                Every decision is backed by data and analytics. We measure, test, and optimize continuously.
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Users size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">Expert Team</h3>
              <p className="text-muted-foreground">
                Specialists with years of experience in digital marketing and proven track records.
              </p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Target size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">Results Focused</h3>
              <p className="text-muted-foreground text-sm">
                We don't just execute tasks. We focus on delivering measurable business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Combination Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Best Results With Combined Services
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            While each service delivers value on its own, combining services amplifies results. For example, pairing SEO with PPC creates consistent visibility, or combining Web Dev with Local SEO ensures your website converts local visitors.
          </p>
          <p className="text-lg text-foreground font-semibold">
            Let's discuss which combination works best for your business.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Find the Right Service <span className="text-accent">for Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation to discuss your goals and which services will deliver the best results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Schedule Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
