'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Owner, Premium Fashion Retail',
      content:
        'RankFest completely transformed our online presence. Our organic traffic increased by 342% in just 8 months. Their strategy is data-driven and their team is incredibly responsive.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'CEO, Tech Startup',
      content:
        "The team at RankFest didn't just implement SEO—they educated us on how it works and why it matters. Our qualified leads increased significantly, and we've seen a direct impact on our bottom line.",
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      role: 'Manager, Plumbing Services',
      content:
        'We were struggling to get found online. After working with RankFest, we consistently rank #1 for our service areas and have more client inquiries than we can handle. Highly recommended!',
      rating: 5,
      image: '👩‍🔧',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder, Dental Clinic Network',
      content:
        "Professional, transparent, and results-driven. RankFest's SEO strategy brought us 220% more appointment bookings. They're not just a vendor—they're a true partner in our growth.",
      rating: 5,
      image: '👨‍⚕️',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real businesses that have experienced measurable growth with RankFest.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-foreground font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-8 py-4">
            <div>
              <div className="font-bold text-foreground">4.9/5 Stars</div>
              <div className="text-xs text-muted-foreground">1000+ Reviews</div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-accent text-accent"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
