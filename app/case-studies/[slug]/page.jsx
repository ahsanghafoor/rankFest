import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/caseStudies';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {
      title: 'Case Study Not Found',
      description: 'This case study does not exist.',
    };
  }
  return {
    title: `${study.title} - Case Study | RankFest`,
    description: study.shortDesc,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-accent hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Link href="/case-studies" className="text-accent hover:underline inline-block mb-6">
                  ← Back to Case Studies
                </Link>
                {/* <div className="mb-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  {study.service}
                </div> */}
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                  {study.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {study.client}
                </p>
              </div>

              {/* Key Metric */}
              {/* <div className="p-8 bg-card border border-border rounded-xl">
                <p className="text-muted-foreground text-sm mb-2">Key Result</p>
                <h2 className="text-4xl font-bold text-accent">
                  {study.metric}
                </h2>
              </div> */}
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden border border-accent/20">
              <Image
                src={`${study.featureImage}`}
                alt={`${study.title} screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Strategy</h2>
          <ul className="space-y-4">
            {study.strategy.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Execution Timeline */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Execution & Timeline</h2>
          <div className="space-y-6">
            {study.execution.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <p className="text-foreground text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {study.results.map((result, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-8 text-center">
                <p className="text-muted-foreground text-sm mb-4">{result.metric}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Before</p>
                    <p className="text-lg font-semibold text-foreground">{result.before}</p>
                  </div>
                  <div className="text-2xl text-accent">→</div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">After</p>
                    <p className="text-lg font-semibold text-foreground">{result.after}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-accent">{result.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Progress Timeline</h2>
          <div className="space-y-6">
            {Object.entries(study.timeline).map(([period, description], idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {idx + 1}
                  </div>
                  {idx < Object.entries(study.timeline).length - 1 && (
                    <div className="w-0.5 h-16 bg-border mx-auto mt-2"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{period}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-5xl mb-4">💬</div>
          </div>
          <blockquote className="text-2xl font-semibold text-foreground mb-6 leading-relaxed">
            "{study.testimonial.quote}"
          </blockquote>
          <p className="text-lg font-semibold text-accent mb-1">
            {study.testimonial.author}
          </p>
          <p className="text-muted-foreground">
            {study.testimonial.role}
          </p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">Key Takeaway</h2>
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8">
            <p className="text-lg text-foreground leading-relaxed">
              {study.takeaway}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business succeed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Schedule Your Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
