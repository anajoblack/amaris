import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer w-full bg-slate-950 text-slate-400 py-12 px-6 sm:px-12 border-t border-slate-900">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Footer Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Column 1: Brand & Executive Mission */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <Image
                src="/images/logogo_AdEt.png"
                alt="Dr. Amaris Perbi"
                width={150}
                height={38}
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p
              style={{
                fontSize: '13px',
                lineHeight: 1.7,
                color: '#94a3b8',
                marginBottom: '20px',
                maxWidth: '340px',
              }}
            >
              Equipping global executives, corporate boards, and enterprise organizations to lead through uncertainty, strategic agility, and sustainable impact.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a
                href="tel:+18482137670"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none' }}
                className="hover:underline"
              >
                <Phone size={14} style={{ color: '#00C49B' }} />
                <span>+1 848 213 7670</span>
              </a>
              <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '8px', color: '#94a3b8' }}>
                <MapPin size={14} style={{ color: '#00C49B', marginTop: '3px', flexShrink: 0 }} />
                <span>Princeton, NJ, USA &amp; Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore & Profile */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#f8fafc',
                marginBottom: '16px',
              }}
            >
              Explore &amp; Profile
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  About Dr. Amaris Perbi
                </Link>
              </li>
              <li>
                <Link href="/philanthropist" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Philanthropy &amp; Impact
                </Link>
              </li>
              <li>
                <Link href="/expertise/services" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Strategic Advisory Services
                </Link>
              </li>
              <li>
                <Link href="/expertise/trainings-programs" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Executive Training Programs
                </Link>
              </li>
              <li>
                <Link href="/expertise/speaking-media-conference" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Speaking, Media &amp; Conferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Media & Literary Pillars */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#f8fafc',
                marginBottom: '16px',
              }}
            >
              Media &amp; Initiatives
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li>
                <Link href="/books-powerread" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Books &amp; PowerRead™ Series
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Music &amp; Compositions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Community &amp; Event Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  News &amp; Leadership Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors" style={{ color: '#94a3b8' }}>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row (copyright & legal links) */}
        <div className="footer-bottom-row pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p style={{ margin: 0, color: '#64748b' }}>
            Dr. Amaris Perbi &copy; {new Date().getFullYear()}. All Rights Reserved. Powered by{' '}
            <span style={{ color: '#e2e8f0', fontWeight: 500 }}>Media Oval Inc.</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#64748b' }}>
            <Link href="/about-us" className="hover:text-slate-300 transition-colors">
              Leadership Bio
            </Link>
            <Link href="/expertise/trainings-programs" className="hover:text-slate-300 transition-colors">
              Training Curriculum
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact &amp; Booking
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
