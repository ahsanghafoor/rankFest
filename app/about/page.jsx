import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AGENCY_NAME, STATS } from '@/data/constants';

export const metadata = {
  title: `About ${AGENCY_NAME} - Digital Marketing Agency`,
  description: `Learn about ${AGENCY_NAME}, our mission, our team, and why businesses trust us with their digital growth.`,
};

export default function AboutPage() {
  const values = [
    {
      title: 'Results-Driven',
      description: 'We don\'t measure success by activity; we measure it by tangible business results and ROI.',
      icon: '📊',
    },
    {
      title: 'Transparent',
      description: 'Clear communication, detailed reporting, and honest discussions about strategy and performance.',
      icon: '🔍',
    },
    {
      title: 'Innovative',
      description: 'Staying ahead of algorithm changes and leveraging the latest tools and strategies.',
      icon: '💡',
    },
    {
      title: 'Collaborative',
      description: 'We work as an extension of your team, not a separate vendor. Your success is our success.',
      icon: '🤝',
    },
  ];

  const team = [
    {
      name: 'Umar Farooq',
      role: 'Founder & SEO Strategist',
      initials: 'UF',
      image: '/assets/team/umar.png'
    },
    {
      name: 'Ahmad Raza',
      role: 'Technical SEO Lead',
      initials: 'AR',
      image: '/assets/team/ahmad.png'
    },
    {
      name: 'Ahsan Ghafoor',
      role: 'Web Development Lead',
      initials: 'AG',
      image: '/assets/team/ahsan.png'
    },
    {
      name: 'Naeem Zahoor',
      role: 'PPC & Paid Ads Manager',
      initials: 'NZ',
      image: '/assets/team/naeem.png'
    },
    {
      name: 'Salman Arshad',
      role: 'Branding & Design Specialist',
      initials: 'SA',
      image: '/assets/team/salman.png'
    },
    {
      name: 'Hassan Raza',
      role: 'Local SEO Specialist',
      initials: 'HR',
      image: '/assets/team/hassan.png'
    },
    {
      name: 'Abdul Raouf',
      role: 'Content Writer',
      initials: 'AR',
      image: '/assets/team/rauf.png'
    },
    {
      name: 'Farhan Rasool',
      role: 'Client Success Manager',
      initials: 'FR',
      image: '/assets/team/farhan.png'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            More Than an Agency, a <span className="text-accent">Growth Partner</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're obsessed with one thing: helping businesses achieve remarkable growth through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {AGENCY_NAME} started in 2016 when Umer Farooq realized that most digital marketing agencies were more focused on complexity than results. He founded {AGENCY_NAME} with a simple mission: help businesses get found, trusted, and chosen online.
            </p>
            <p>
              What started as a one-person SEO consultancy has grown into a full-service digital marketing agency helping hundreds of businesses achieve measurable growth. But our core belief hasn't changed: success is measured in business results, not activity metrics.
            </p>
            <p>
              Today, we're a team of digital marketing specialists united by one goal delivering ROI for our clients. We've generated millions in revenue for our clients through strategic SEO, targeted paid advertising, and comprehensive digital marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Empower businesses to achieve sustainable growth by making digital marketing transparent, strategic, and results-oriented. We believe every business deserves access to world-class digital marketing expertise.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Why Businesses Choose {AGENCY_NAME}</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  {STATS.yearsInBusiness} years of consistent results. {STATS.clientsHelped} successful clients. Multiple 7-figure success stories.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Transparent Communication</h3>
                <p className="text-muted-foreground">
                  Monthly reports. Direct communication with your dedicated team member. No hidden metrics or fluff.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Customized Strategy</h3>
                <p className="text-muted-foreground">
                  No cookie-cutter solutions. We analyze your unique situation and create a strategy specifically for your business.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expertise Across Services</h3>
                <p className="text-muted-foreground">
                  SEO, PPC, Local SEO, Web Development, and Branding. One team, full capability, seamless integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center fade-in-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up-stagger">
            {team.map((member, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all fade-in-up group">
                {/* Image Section */}
                <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all overflow-hidden relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-6xl font-bold text-accent/40 group-hover:text-accent/60 transition-colors">
                      {member.initials}
                    </div>
                  )}
                </div>
                {/* Info Section */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">{STATS.yearsInBusiness}</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">{STATS.clientsHelped}</div>
              <p className="text-muted-foreground">Clients Helped</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">{STATS.revenueGenerated}</div>
              <p className="text-muted-foreground">Revenue Generated</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">{STATS.clientSatisfaction}★</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Partner for Your Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to work with a team that's obsessed with your growth? Let's talk.
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
