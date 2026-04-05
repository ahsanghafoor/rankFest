'use client';

import { useEffect, useState } from 'react';
import { getServiceBySlug, services as allServices } from '@/data/services';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

function ServiceHero({ service }) {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.05 });

    return (
        <section ref={ref} className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
                    <ChevronRight size={14} />
                    <span className="text-accent font-medium">{service.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 border border-accent/20 uppercase tracking-wider">
                                {service.name}
                            </span>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                                {service.headline}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                {service.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                            >
                                Get Started Today
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                            >
                                View Results
                            </Link>
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-2xl border border-accent/20 p-2 overflow-hidden group-hover:border-accent/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/20">
                                <Image
                                    src={`/${service.image}`}
                                    alt={service.name}
                                    width={800}
                                    height={500}
                                    className='rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-700 ease-out w-full h-auto'
                                />

                                {/* Decorative elements - tighter fit */}
                                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-accent/30 rounded-tr-md pointer-events-none"></div>
                                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-accent/30 rounded-bl-md pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProblemsSection({ service }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 md:py-24 bg-card border-y border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-semibold mb-4 border border-red-500/20">
                        Common Challenges
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Problems We Solve
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mb-10">
                        These are the challenges businesses face before partnering with us. Sound familiar?
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {service.problems.map((problem, idx) => (
                        <AnimatedElement key={idx} delay={idx * 100}>
                            <div className="flex gap-4 p-5 bg-background rounded-xl border border-border hover:border-red-500/30 transition-all duration-300 group">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-foreground text-base leading-relaxed">{problem}</p>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BenefitsSection({ service }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 border border-accent/20">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Benefits of <span className="text-accent">{service.shortName}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here&apos;s what you get when you partner with RankFest for {service.name.toLowerCase()}.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {service.benefits.map((benefit, idx) => (
                        <AnimatedElement key={idx} delay={idx * 80}>
                            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full group">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                        <Check size={18} className="text-accent" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{benefit.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProcessSection({ service }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 md:py-24 bg-card border-y border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 border border-accent/20">
                        Our Approach
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our <span className="text-accent">{service.shortName}</span> Process
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A proven, systematic approach that delivers consistent results.
                    </p>
                </div>
                <div className="space-y-0 relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

                    {service.processSteps.map((step, idx) => (
                        <AnimatedElement key={idx} delay={idx * 120}>
                            <div className="flex gap-6 md:gap-8 relative py-5">
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent text-accent-foreground font-bold text-lg border-4 border-card shadow-lg">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="bg-background border border-border rounded-xl p-5 md:p-6 flex-1 hover:border-accent/30 transition-colors">
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DeliverablesSection({ service }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 border border-accent/20">
                        What&apos;s Included
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What You&apos;ll Get
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Comprehensive deliverables that ensure measurable results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.deliverables.map((deliverable, idx) => (
                        <AnimatedElement key={idx} delay={idx * 70}>
                            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/40 transition-all duration-300 group">
                                <div className="flex-shrink-0 p-1.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <Check size={16} className="text-accent" />
                                </div>
                                <span className="text-foreground font-medium">{deliverable}</span>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
}

function IdealForSection({ service }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 md:py-24 bg-card border-y border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 border border-accent/20">
                            Perfect Match
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Is This Service Right for You?
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            This service is ideal for businesses that match the following criteria.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {service.idealFor.map((ideal, idx) => (
                            <AnimatedElement key={idx} animation="fadeRight" delay={idx * 100}>
                                <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border hover:border-accent/30 transition-colors">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="p-1 bg-accent/10 rounded-full">
                                            <Check size={14} className="text-accent" />
                                        </div>
                                    </div>
                                    <span className="text-foreground">{ideal}</span>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function OtherServicesSection({ currentSlug }) {
    const [ref, isVisible] = useScrollAnimation();
    const otherServices = allServices.filter(s => s.slug !== currentSlug).slice(0, 3);

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Explore Other <span className="text-accent">Services</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Combine services for amplified results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherServices.map((service, idx) => (
                        <AnimatedElement key={service.id} delay={idx * 100}>
                            <Link
                                href={`/services/${service.slug}`}
                                className="group p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 block h-full"
                            >
                                <div className="relative h-44 mb-4 bg-accent/5 rounded-xl flex items-center justify-center overflow-hidden border border-border group-hover:border-accent/30 transition-colors">
                                    <Image
                                        src={`/${service.image}`}
                                        alt={service.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
                                <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                                    Learn More
                                    <ArrowRight size={14} />
                                </div>
                            </Link>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTASection({ service }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent/3 to-transparent pointer-events-none"></div>

            <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                    <div className="flex items-center justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="fill-accent text-accent" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Ready to Get Started with <span className="text-accent">{service.shortName}</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Schedule a free consultation with our experts. We&apos;ll analyze your current situation and create a custom strategy tailored to your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                        >
                            Schedule Free Consultation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">No commitment required • Free initial consultation</p>
                </div>
            </div>
        </section>
    );
}

export default function ServiceDetailPage({ service }) {
    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-accent hover:underline">
                        ← Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <ServiceHero service={service} />
            <ProblemsSection service={service} />
            <BenefitsSection service={service} />
            <ProcessSection service={service} />
            <DeliverablesSection service={service} />
            <IdealForSection service={service} />
            <OtherServicesSection currentSlug={service.slug} />
            <FinalCTASection service={service} />
        </>
    );
}
