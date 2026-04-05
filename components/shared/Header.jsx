'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AGENCY_NAME, CONTACT_INFO } from '@/data/constants';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { href: '/services/seo', label: 'SEO Services' },
    { href: '/services/ppc', label: 'PPC Advertising' },
    { href: '/services/local-seo', label: 'Local SEO & GMB' },
    { href: '/services/web-dev', label: 'Web Development' },
    { href: '/services/branding', label: 'Branding & Design' },
    { href: '/services/content', label: 'Content Marketing' },
  ];

  const navLinks = [
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur border-b border-border' : 'bg-background/80 backdrop-blur'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold text-accent group-hover:scale-105 transition-transform inline-block">
              {AGENCY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`hover:text-accent transition-colors duration-200 text-base font-medium flex items-center gap-2 py-4 ${pathname.startsWith('/services') ? 'text-accent' : 'text-foreground'}`}>
                Services
                <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-2xl shadow-accent/20 overflow-hidden z-50 transition-all duration-200 origin-top ${isServicesOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
              >
                {services.map((service, idx) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-5 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent hover:pl-6 transition-all duration-200 ${idx !== services.length - 1 ? 'border-b border-border' : ''
                      }`}
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 text-base font-medium relative group ${pathname === link.href ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-sm"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full text-left block px-3 py-2 hover:text-accent hover:bg-accent/10 transition-all rounded-md text-base font-medium flex items-center justify-between ${pathname.startsWith('/services') ? 'text-accent bg-accent/5' : 'text-foreground'}`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-1 mt-1 border-l border-accent/30">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-foreground hover:text-accent transition-colors rounded-md text-sm"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 transition-colors rounded-md text-base font-medium ${pathname === link.href ? 'text-accent bg-accent/5' : 'text-foreground hover:text-accent hover:bg-accent/10'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href={CONTACT_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Call
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
