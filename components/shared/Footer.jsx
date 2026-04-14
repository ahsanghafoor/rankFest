'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { label: 'SEO Services', href: '/services/seo' },
        { label: 'Local SEO & GMB', href: '/services/local-seo' },
        { label: 'PPC Management', href: '/services/ppc' },
        { label: 'Website Development', href: '/services/web-dev' },
        { label: 'Branding & Design', href: '/services/branding' },
        { label: 'Content Marketing', href: '/services/content' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <span className="group-hover:scale-105 transition-transform inline-block mb-3">
              <Image src="/logo.svg" alt="Logo" width={130} height={130} />
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional SEO services for businesses aiming for real growth. Get seen, trusted, and chosen online.
            </p>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@rankfest.co"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                <span>info@rankfest.co</span>
              </a>
              <a
                href="tel:+447487516849"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+44 748 7516 849</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} RankFest. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
