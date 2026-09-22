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

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer / Flyout Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-flyout fixed inset-y-0 right-0 w-full sm:w-80 bg-white z-50 flex flex-col justify-between shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Drawer Top Header (Logo & Close Button) */}
          <div
            style={{
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #f1f5f9',
            }}
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/images/logogo_AdEt.png"
                alt="Dr. Amaris Perbi"
                width={140}
                height={36}
                style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none flex items-center justify-center"
              style={{ padding: '6px', borderRadius: '8px', color: '#374151' }}
              aria-label="Close Navigation Menu"
            >
              <X size={24} className="w-6 h-6" />
            </button>
          </div>

          {/* Top / Center Area (Scrollable Navigation Links) */}
          <div
            className="flex-1 overflow-y-auto px-6 py-6 space-y-4"
            style={{
              flex: '1 1 auto',
              overflowY: 'auto',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {/* Meet Dr. Amaris Accordion */}
            <div>
              <div
                onClick={() => toggleDropdown('mobile-meet')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#070707',
                  padding: '8px 0',
                  cursor: 'pointer',
                }}
              >
                <span>Meet Dr. Amaris</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: activeDropdown === 'mobile-meet' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    opacity: 0.7,
                  }}
                />
              </div>
              {activeDropdown === 'mobile-meet' && (
                <div
                  style={{
                    paddingLeft: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '6px',
                    borderLeft: '2px solid #00C49B',
                    marginLeft: '4px',
                  }}
                >
                  <Link
                    href="/about-us"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}
                  >
                    About Dr. Amaris Perbi
                  </Link>
                  <Link
                    href="/philanthropist"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}
                  >
                    Philanthropist
                  </Link>
                </div>
              )}
            </div>

            {/* Offerings Accordion */}
            <div>
              <div
                onClick={() => toggleDropdown('mobile-offerings')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#070707',
                  padding: '8px 0',
                  cursor: 'pointer',
                }}
              >
                <span>Offerings</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: activeDropdown === 'mobile-offerings' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    opacity: 0.7,
                  }}
                />
              </div>
              {activeDropdown === 'mobile-offerings' && (
                <div
                  style={{
                    paddingLeft: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '6px',
                    borderLeft: '2px solid #00C49B',
                    marginLeft: '4px',
                  }}
                >
                  <Link
                    href="/expertise/services"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}
                  >
                    Services
                  </Link>
                  <Link
                    href="/expertise/speaking-media-conference"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}
                  >
                    Speaking, Media & Conferences
                  </Link>
                  <Link
                    href="/expertise/trainings-programs"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}
                  >
                    Training & Programs
                  </Link>
                  <Link
                    href="/books-powerread"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}
                  >
                    Books & PowerRead
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/books-powerread"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, fontSize: '15px', color: '#070707', padding: '6px 0' }}
            >
              PowerRead™
            </Link>

            <Link
              href="/music"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, fontSize: '15px', color: '#070707', padding: '6px 0' }}
            >
              Music
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, fontSize: '15px', color: '#070707', padding: '6px 0' }}
            >
              Gallery
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, fontSize: '15px', color: '#070707', padding: '6px 0' }}
            >
              News
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, fontSize: '15px', color: '#070707', padding: '6px 0' }}
            >
              Contact
            </Link>

            <div style={{ paddingTop: '10px' }}>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '14px',
                  padding: '12px 20px',
                  borderRadius: '50px',
                }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Drawer Bottom Footer (Repurposed Top Bar Info) */}
          <div
            className="mt-auto p-6 bg-[#532DF5] text-white space-y-3"
            style={{
              marginTop: 'auto',
              padding: '20px 24px',
              backgroundColor: '#532DF5',
              backgroundImage: "url('/wp-content/uploads/2023/04/original-topbar-bg.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              color: '#ffffff',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* Quote */}
            <p
              className="text-xs italic text-white/85 leading-snug"
              style={{
                fontSize: '11px',
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              &ldquo;Learn as if you will live forever, live like you will die tomorrow.&rdquo;
            </p>

            {/* Clickable Direct Phone */}
            <a
              href="tel:+18482137670"
              className="hover:underline flex items-center gap-2"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <Phone size={14} style={{ color: '#00C49B', flexShrink: 0 }} />
              <span>+1 848 213 7670</span>
            </a>

            {/* Locations */}
            <div
              className="flex items-start gap-2 text-xs text-white/75"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.4,
              }}
            >
              <MapPin size={14} style={{ color: '#00C49B', flexShrink: 0, marginTop: '2px' }} />
              <span>Princeton, New Jersey, USA &amp; Accra, Ghana</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
