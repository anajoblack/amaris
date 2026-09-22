'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : '0 1px 4px rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '84px',
        }}
      >
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/logogo_AdEt.png"
            alt="Dr. Amaris Perbi"
            width={160}
            height={43}
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
            }}
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

        {/* Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-toggle">
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              fontSize: '13px',
              padding: '8px 18px',
              borderRadius: '50px',
              fontWeight: 600,
            }}
          >
            Booking
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '8px',
              color: '#070707',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f0f0f0',
            padding: '20px 24px',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Meet Dr. Amaris Accordion */}
            <div>
              <div
                onClick={() => toggleDropdown('mobile-meet')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 600,
                  padding: '8px 0',
                  cursor: 'pointer',
                }}
              >
                <span>Meet Dr. Amaris</span>
                <ChevronDown size={18} />
              </div>
              {activeDropdown === 'mobile-meet' && (
                <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                  <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Dr. Amaris Perbi</Link>
                  <Link href="/philanthropist" onClick={() => setMobileMenuOpen(false)}>Philanthropist</Link>
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
                  padding: '8px 0',
                  cursor: 'pointer',
                }}
              >
                <span>Offerings</span>
                <ChevronDown size={18} />
              </div>
              {activeDropdown === 'mobile-offerings' && (
                <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                  <Link href="/expertise/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                  <Link href="/expertise/speaking-media-conference" onClick={() => setMobileMenuOpen(false)}>Speaking, Media & Conferences</Link>
                  <Link href="/expertise/trainings-programs" onClick={() => setMobileMenuOpen(false)}>Training & Programs</Link>
                  <Link href="/books-powerread" onClick={() => setMobileMenuOpen(false)}>Books & PowerRead</Link>
                </div>
              )}
            </div>

            <Link href="/books-powerread" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '8px 0' }}>
              PowerRead™
            </Link>

            <Link href="/music" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '8px 0' }}>
              Music
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontWeight: 600, padding: '8px 0' }}
            >
              Gallery
            </Link>

            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '8px 0' }}>
              News
            </Link>

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '8px 0' }}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
