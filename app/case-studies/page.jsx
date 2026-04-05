import { caseStudies } from '@/data/caseStudies';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Case Studies - RankFest Success Stories',
  description: 'See how we\'ve helped businesses across industries achieve measurable growth. Real results from real clients.',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Success Stories That Prove <span className="text-accent">Results</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses across industries achieve measurable growth with strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up-stagger">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 fade-in-up flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden group-hover:brightness-110 transition-all flex-shrink-0">
                  <Image
                    src={`/${study.featureImage}`}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold w-fit">
                    {study.service}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {study.client}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {study.shortDesc}
                  </p>

                  {/* Main Metric */}
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-xs text-muted-foreground mb-0.5">Key Result</p>
                    <p className="text-xl font-bold text-accent">
                      {study.metric}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all text-sm mt-auto">
                    View Full Case Study
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      {/* <section className="py-12 md:py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center fade-in-up">
            Proven Results Across Industries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up-stagger">
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">€1.2M+</div>
              <p className="text-muted-foreground text-sm">Additional Revenue Generated</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground text-sm">Clients Successfully Helped</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">342%</div>
              <p className="text-muted-foreground text-sm">Average Traffic Increase</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.9★</div>
              <p className="text-muted-foreground text-sm">Average Client Rating</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Become a Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            Schedule Your Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
