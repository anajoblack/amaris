'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className="navbar-header sticky top-0 z-50 bg-white/95 backdrop-blur-md"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : '0 1px 4px rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container navbar-container h-16 md:h-[84px] px-4 md:px-6 flex items-center justify-between"
      >
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/logogo_AdEt.png"
            alt="Dr. Amaris Perbi"
            width={160}
            height={43}
            className="navbar-logo-img h-8 sm:h-9 md:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          {/* Meet Dr. Amaris */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('meet')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#070707',
                padding: '8px 4px',
                cursor: 'pointer',
              }}
            >
              <span>Meet Dr. Amaris</span>
              <ChevronDown size={14} style={{ opacity: 0.7 }} />
            </button>
            {activeDropdown === 'meet' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  padding: '10px 0',
                  minWidth: '220px',
                  zIndex: 200,
                  border: '1px solid #f0f0f0',
                }}
              >
                <Link
                  href="/about-us"
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fcfc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  About Dr. Amaris Perbi
                </Link>
                <Link
                  href="/philanthropist"
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fcfc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Philanthropist
                </Link>
              </div>
            )}
          </div>

          {/* Offerings */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('offerings')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#070707',
                padding: '8px 4px',
                cursor: 'pointer',
              }}
            >
              <span>Offerings</span>
              <ChevronDown size={14} style={{ opacity: 0.7 }} />
            </button>
            {activeDropdown === 'offerings' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  padding: '10px 0',
                  minWidth: '260px',
                  zIndex: 200,
                  border: '1px solid #f0f0f0',
                }}
              >
                <Link
                  href="/expertise/services"
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fcfc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Services
                </Link>
                <Link
                  href="/expertise/speaking-media-conference"
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fcfc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Speaking, Media & Conferences
                </Link>
                <Link
                  href="/expertise/trainings-programs"
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fcfc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Training & Programs
                </Link>
                <Link
                  href="/books-powerread"
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fcfc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Books & PowerRead
                </Link>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <Link
            href="/books-powerread"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#070707',
              padding: '8px 4px',
            }}
          >
            PowerRead™
          </Link>

          <Link
            href="/music"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#070707',
              padding: '8px 4px',
            }}
          >
            Music
          </Link>

          <Link
            href="/gallery"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#070707',
              padding: '8px 4px',
            }}
          >
            Gallery
          </Link>

          <Link
            href="/blog"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#070707',
              padding: '8px 4px',
            }}
          >
            News
          </Link>

          <Link
            href="/contact"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#070707',
              padding: '8px 4px',
            }}
          >
            Contact
          </Link>

          {/* Booking CTA Button */}
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              fontSize: '14px',
              padding: '10px 26px',
              borderRadius: '50px',
              fontWeight: 600,
              marginLeft: '8px',
            }}
          >
            Booking
          </Link>
        </nav>

        {/* Mobile Actions Group (Booking + Hamburger) */}
        <div className="mobile-toggle mobile-actions-group flex items-center gap-2.5">
          <Link
            href="/contact"
            className="mobile-booking-btn text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#10b981] hover:bg-[#059669] text-white transition-colors shadow-sm"
          >
            Booking
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-hamburger-btn p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none flex items-center justify-center"
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Full-Screen High-End Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-fullscreen-overlay fixed inset-0 z-50 bg-[#0a0a0c] text-white flex flex-col justify-between overflow-y-auto px-6 py-6 transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 w-full">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/images/logogo_AdEt.png"
                alt="Dr. Amaris Perbi"
                width={140}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Navigation Links (Clean & Prominent) */}
          <div className="flex flex-col space-y-5 py-8">
            {/* Meet Dr. Amaris Accordion */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => toggleDropdown('mobile-meet')}
                className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group w-full text-left"
              >
                <span>Meet Dr. Amaris</span>
                <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  {activeDropdown === 'mobile-meet' ? '↓' : '→'}
                </span>
              </button>
              {activeDropdown === 'mobile-meet' && (
                <div className="pl-4 mt-3 space-y-3 border-l border-white/10 flex flex-col">
                  <Link
                    href="/about-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    About Dr. Amaris Perbi
                  </Link>
                  <Link
                    href="/philanthropist"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Philanthropist &amp; Impact
                  </Link>
                </div>
              )}
            </div>

            {/* Offerings Accordion */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => toggleDropdown('mobile-offerings')}
                className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group w-full text-left"
              >
                <span>Offerings</span>
                <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  {activeDropdown === 'mobile-offerings' ? '↓' : '→'}
                </span>
              </button>
              {activeDropdown === 'mobile-offerings' && (
                <div className="pl-4 mt-3 space-y-3 border-l border-white/10 flex flex-col">
                  <Link
                    href="/expertise/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Strategic Advisory Services
                  </Link>
                  <Link
                    href="/expertise/speaking-media-conference"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Speaking, Media &amp; Conferences
                  </Link>
                  <Link
                    href="/expertise/trainings-programs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Training &amp; Programs (70+)
                  </Link>
                  <Link
                    href="/books-powerread"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Books &amp; PowerRead
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/books-powerread"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>PowerRead™</span>
              <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

            <Link
              href="/music"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>Music</span>
              <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>Gallery</span>
              <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>News</span>
              <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>Contact</span>
              <span className="text-sm text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Integrated Contact & Quote Card (Directly Below the Nav List) */}
          <div className="drawer-contact-card mt-4 p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-500/20 backdrop-blur-md space-y-4">
            {/* The Quote */}
            <p className="text-xs italic text-indigo-200/80 leading-relaxed border-l-2 border-indigo-400 pl-3 m-0">
              &ldquo;Learn as if you will live forever, live like you will die tomorrow.&rdquo;
            </p>

            {/* Click-to-Call Direct Phone */}
            <a
              href="tel:+18482137670"
              className="flex items-center gap-3 text-sm font-semibold text-white hover:text-emerald-400 transition"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                <Phone size={14} />
              </div>
              <span>+1 848 213 7670</span>
            </a>

            {/* Location Pin */}
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <div className="w-8 h-8 rounded-full bg-white/5 text-zinc-400 flex items-center justify-center shrink-0">
                <MapPin size={14} />
              </div>
              <span>Princeton, New Jersey, USA &amp; Accra, Ghana</span>
            </div>

            {/* Mobile Drawer CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition"
            >
              Book Dr. Perbi &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
