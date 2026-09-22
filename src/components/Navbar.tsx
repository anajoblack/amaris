'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
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
            onClick={() => setIsOpen(true)}
            className="mobile-hamburger-btn p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none flex items-center justify-center"
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    {/* Guaranteed full-screen portal/fixed drawer */}
    {isOpen && (
      <div className="fixed inset-0 z-[999] flex flex-col bg-slate-950 text-white w-screen h-[100dvh] overflow-y-auto">
        {/* Drawer Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <div className="h-8 flex items-center">
            {/* Logo */}
            <span className="font-extrabold text-lg tracking-wider text-white">DR. AMARIS PERBI</span>
          </div>
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xl hover:bg-white/20 transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 px-6 py-8 flex flex-col justify-between">
          {/* 1. Main Navigation Links */}
          <nav className="flex flex-col space-y-5">
            {[
              { label: "Meet Dr. Amaris", href: "#about" },
              { label: "Offerings", href: "#offerings" },
              { label: "PowerRead™", href: "#powerread" },
              { label: "Music", href: "#music" },
              { label: "Gallery", href: "#gallery" },
              { label: "News", href: "#news" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-zinc-600 text-base">→</span>
              </a>
            ))}
          </nav>

          {/* 2. Contact & Quote Info Card (Directly Below Nav List) */}
          <div className="mt-10 p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4 shrink-0">
            <blockquote className="text-xs italic text-zinc-300 border-l-2 border-emerald-400 pl-3 leading-relaxed">
              &ldquo;Learn as if you will live forever, live like you will die tomorrow.&rdquo;
            </blockquote>

            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <a href="tel:+18482137670" className="flex items-center gap-2.5 text-white hover:text-emerald-400 font-medium">
                <span>📞</span>
                <span>+1 848 213 7670</span>
              </a>
              <div className="flex items-center gap-2.5 text-zinc-400">
                <span>📍</span>
                <span>Princeton, New Jersey, USA & Accra, Ghana</span>
              </div>
            </div>

            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 mt-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-center block text-sm transition"
            >
              Book Dr. Perbi
            </a>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
