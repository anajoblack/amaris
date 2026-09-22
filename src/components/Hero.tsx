'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  objectPosition?: string;
}

export const slides: HeroSlide[] = [
  {
    image: '/images/tapsb-1-1024x683_AdEt.jpg',
    eyebrow: 'Get Started with Dr. Amaris Perbi',
    title: 'Global Training Consultant & Executive Educator',
    description:
      'Empowering leaders and organizations worldwide through high-impact programs in Leadership, Strategy, ESG, Risk, PMO, Operational Excellence, and Digital Transformation.',
    buttonText: 'Explore Training Programs',
    buttonLink: '/expertise/trainings-programs',
    objectPosition: 'right center',
  },
  {
    image: '/images/singggamae1_AdEt.jpg',
    eyebrow: 'Keynotes & Executive Forums',
    title: 'Ideas Worth Bringing Into the Room',
    description:
      'Delivering transformative executive keynotes across North America, the UK, Europe, the UAE, and Africa that challenge conventional paradigms and inspire organizational alignment.',
    buttonText: 'Speaking & Keynotes',
    buttonLink: '/expertise/speaking-media-conference',
    objectPosition: '75% top',
  },
  {
    image: '/images/15-21_AdEt.jpeg',
    eyebrow: 'Transatlantic Advisory & Strategy',
    title: 'Human-Centered Leadership with Institutional Rigor',
    description:
      'Over 15 years partnering with corporate boards, senior executives, and institutions to navigate complex change, instill ESG governance, and drive measurable performance.',
    buttonText: 'Advisory Offerings',
    buttonLink: '/expertise/services',
    objectPosition: '80% top',
  },
  {
    image: '/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-01-at-9.47.31-AM.jpeg',
    eyebrow: 'Executive Education & Capability Building',
    title: '70+ Scenario-Driven Training Programs',
    description:
      'Equipping enterprise workforces with competency-based tools, agile problem-solving methods, and ethical leadership practices that endure.',
    buttonText: 'Get in Touch',
    buttonLink: '/contact',
    objectPosition: 'center top',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="hero-section-fullbleed"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Dr. Amaris Perbi Executive Presentation Showcase"
      style={{
        position: 'relative',
        minHeight: '85vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Full-Bleed Background Images (Cross-fading) */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.image}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : 'scale(1.03)',
              transition: 'opacity 1000ms ease-in-out, transform 1200ms ease-out',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: slide.objectPosition || 'center right',
              }}
            />
          </div>
        );
      })}

      {/* Directional Gradient Mask: Left-to-right dark mask pinned across all slides */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.60) 50%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Vignette pinned across all slides */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '112px',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.80) 0%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Left-Aligned Content Layer */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '96px 24px',
        }}
      >
        <div
          key={currentIndex}
          className="hero-text-animate"
          style={{ maxWidth: '576px', textAlign: 'left' }}
        >
          {/* Eyebrow */}
          <span
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '12px',
              display: 'block',
              letterSpacing: '0.02em',
            }}
          >
            {currentSlide.eyebrow}
          </span>

          {/* Headline (H1) */}
          <h1
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 58px)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: '24px',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.5)',
            }}
          >
            {currentSlide.title}
          </h1>

          {/* Body Description */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '512px',
              textShadow: '0 1px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            {currentSlide.description}
          </p>

          {/* Call to Action (CTA) */}
          <Link
            href={currentSlide.buttonLink}
            style={{
              display: 'inline-block',
              backgroundColor: '#34d399',
              color: '#000000',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#10b981';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#34d399';
            }}
          >
            {currentSlide.buttonText}
          </Link>
        </div>
      </div>

      {/* Navigation Arrows: Floating on far left and far right edges */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '44px',
          height: '44px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '44px',
          height: '44px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Pagination Indicators: Docked at bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '24px',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {slides.map((_, dotIndex) => {
          const isSelected = dotIndex === currentIndex;
          return (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              style={{
                width: isSelected ? '36px' : '12px',
                height: '6px',
                borderRadius: '9999px',
                backgroundColor: isSelected ? '#34d399' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
