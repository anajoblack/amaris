'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Star,
  CheckCircle,
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Compass,
  Shield,
  Heart,
  RefreshCw,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface BookTheme {
  title: string;
  subtitle: string;
  icon: typeof Compass;
  color: string;
  excerpt: string;
  weeks: string;
}

const wisdomThemes: BookTheme[] = [
  {
    title: 'Courage & Resilience',
    subtitle: 'Overcoming Friction & Adversity',
    icon: Shield,
    color: '#00C49B',
    weeks: 'Quarter 1 (Weeks 1–13)',
    excerpt:
      'True resilience is not the absence of difficulty, but the deliberate decision to stand firm when circumstances shift. Learn to convert stumbling blocks into launching pads.',
  },
  {
    title: 'Vision & Purpose',
    subtitle: 'Clarifying Your True North',
    icon: Compass,
    color: '#532DF5',
    weeks: 'Quarter 2 (Weeks 14–26)',
    excerpt:
      'Without an anchoring vision, motion is mistaken for progress. Clarify what matters most, eliminate distractions, and align your daily execution with your highest destiny.',
  },
  {
    title: 'Gratitude & Growth',
    subtitle: 'Cultivating Enduring Humility',
    icon: Heart,
    color: '#D1345B',
    weeks: 'Quarter 3 (Weeks 27–39)',
    excerpt:
      'Gratitude is the catalyst of abundance. When you celebrate small milestones with genuine appreciation, your capacity to absorb and manage greater responsibility expands.',
  },
  {
    title: 'New Beginnings',
    subtitle: 'Reinvention & Decisive Action',
    icon: RefreshCw,
    color: '#FFB800',
    weeks: 'Quarter 4 (Weeks 40–52)',
    excerpt:
      'Every finish line is a starting gate in disguise. Shed the weight of yesterday’s mistakes, embrace fresh horizons, and step courageously into your next dimension.',
  },
];

const sampleLessons = [
  {
    week: 'Week 1',
    theme: 'Vision & Purpose',
    title: 'Defining the Uncompromising Core',
    lesson:
      'Before setting annual milestones, strip away external expectations. Ask yourself: If failure were completely off the table, what single transformation would I dedicate my life to achieving?',
    reflection:
      'Write down three foundational values you refuse to negotiate under any circumstance.',
  },
  {
    week: 'Week 14',
    theme: 'Courage & Resilience',
    title: 'The Discipline of Standing Still in the Storm',
    lesson:
      'In high-stakes turbulence, panic is the enemy of strategy. When every voice demands hasty action, the greatest executive skill is the quiet fortitude to observe and evaluate before executing.',
    reflection:
      'Identify a recent setback and extract two strategic lessons it produced that success could never have taught.',
  },
  {
    week: 'Week 27',
    theme: 'Gratitude & Growth',
    title: 'The Multiplier Effect of Acknowledgment',
    lesson:
      'Leadership is never an individual summit. The fastest way to reinvigorate an exhausted team or revitalize a personal plateau is through authentic, specific, unprompted gratitude.',
    reflection:
      'Send an unexpected handwritten note or personal message of appreciation to someone whose background work supports your everyday life.',
  },
  {
    week: 'Week 52',
    theme: 'New Beginnings',
    title: 'The Courage to Turn the Final Page',
    lesson:
      'Closing a chapter requires as much faith as writing the first sentence. Honor where you have walked, forgive what was left undone, and greet tomorrow with clear eyes and an open heart.',
    reflection:
      'Declare the single overarching intention that will govern your choices for the next 365 days.',
  },
];

export default function BooksPowerReadView() {
  const [selectedTheme, setSelectedTheme] = useState<number>(0);
  const [selectedSample, setSelectedSample] = useState<number>(0);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#070707' }}>
      {/* 1. Hero Split Section (Exact Live Match to dramarisperbi.com/books-powerread/) */}
      <section style={{ backgroundColor: '#070707', color: '#ffffff', padding: '60px 0 80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Authentic Boardroom Photo */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                aspectRatio: '1024 / 683',
                width: '100%',
              }}
            >
              <Image
                src="/wp-content/uploads/2026/05/tapsb-1024x683.jpg"
                alt="Dr. Amaris Perbi reading 52 Weeks of Wisdom in white suit"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(7, 7, 7, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sparkles size={14} color="var(--primary)" />
                <span>52 Weeks of Wisdom Series</span>
              </div>
            </div>

            {/* Right Column: Dark Card with Typography */}
            <div>
              <span
                style={{
                  color: '#A3A1A1',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                Be Inspired
              </span>

              <h1
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '20px',
                  color: '#ffffff',
                }}
              >
                Books &amp; PowerRead™ Series
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.88)',
                  marginBottom: '16px',
                }}
              >
                Explore transformational books designed to ignite purpose, strengthen identity, and inspire decisive action.
              </p>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.68)',
                  marginBottom: '32px',
                }}
              >
                Dr. Perbi’s writing blends clarity, wisdom, and practical guidance to help readers grow into their highest selves.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ADr.%2BAmaris%2B%2BPerbi&s=relevancerank&text=Dr.+Amaris++Perbi&ref=dp_byline_sr_ebooks_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '12px 28px',
                    fontSize: '14px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <ShoppingBag size={16} />
                  <span>Order on Amazon</span>
                </a>

                <Link
                  href="/gallery/52-weeks-of-wisdom-powerread-series"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Layers size={16} color="var(--primary)" />
                  <span>PowerRead Gallery (54 Photos)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Deep Royal Indigo Section (#1A0574) - Exact Brand Backdrop */}
      <section
        style={{
          backgroundColor: '#1A0574',
          color: '#ffffff',
          padding: '90px 0 100px 0',
          position: 'relative',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(83, 45, 245, 0.4) 0%, transparent 60%)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
            <span
              style={{
                color: 'var(--primary)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '10px',
                display: 'block',
              }}
            >
              Author Catalog &amp; Masterworks
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '20px', color: '#ffffff' }}>
              The Transformative Literary Trilogy
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '17px', lineHeight: 1.7 }}>
              Authored by Dr. Amaris Perbi to equip leaders, students, and executives worldwide with clear mental models, moral courage, and deliberate habits.
            </p>
          </div>

          {/* Book 1 Hero Feature: 52 Weeks of Wisdom */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              borderRadius: '24px',
              padding: 'clamp(28px, 5vw, 50px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
              ))}
              <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', marginLeft: '6px' }}>
                Featured Year-Long Companion
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              52 Weeks of Wisdom: A Year of Motivation, Clarity, and Practical Life Lessons
            </h3>

            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.88)',
                marginBottom: '24px',
              }}
            >
              A year-long companion for personal mastery, <strong>52 Weeks of Wisdom</strong> delivers weekly insights designed to strengthen mindset, build resilience, deepen purpose, and inspire consistent growth. Structured around four transformative themes — <em>Courage &amp; Resilience, Vision &amp; Purpose, Gratitude &amp; Growth, and New Beginnings</em> — this book guides readers through a full year of reflection, clarity, and intentional action. Each week offers a powerful lesson that helps readers pause, think deeply, and take meaningful steps toward becoming their best selves.
            </p>

            {/* The 4 Transformative Themes Interactive Selector */}
            <div style={{ marginTop: '36px' }}>
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--primary)',
                  marginBottom: '18px',
                }}
              >
                The Four Transformative Themes:
              </h4>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                {wisdomThemes.map((theme, idx) => {
                  const Icon = theme.icon;
                  const isSelected = selectedTheme === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedTheme(idx)}
                      style={{
                        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: isSelected ? `2px solid ${theme.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '16px',
                        padding: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: `${theme.color}22`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '14px',
                        }}
                      >
                        <Icon size={20} color={theme.color} />
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                        {theme.weeks}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                        {theme.title}
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {theme.subtitle}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Theme Excerpt Box */}
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                  borderLeft: `4px solid ${wisdomThemes[selectedTheme].color}`,
                  padding: '20px 24px',
                  borderRadius: '0 14px 14px 0',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <div style={{ fontWeight: 700, color: wisdomThemes[selectedTheme].color, marginBottom: '4px' }}>
                  {wisdomThemes[selectedTheme].title} Reflection:
                </div>
                {wisdomThemes[selectedTheme].excerpt}
              </div>
            </div>
          </div>

          {/* Books 2 & 3 Dual Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {/* Book 2: Become Your Dream! */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(0, 196, 155, 0.15)',
                    color: 'var(--primary)',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  <Sparkles size={14} />
                  <span>Purpose &amp; Breakthrough</span>
                </div>

                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                  Become Your Dream!
                </h3>

                <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '24px' }}>
                  A powerful guide that helps readers break limitations, clarify purpose, and take bold steps toward their highest potential. This book challenges individuals to confront fear, embrace possibility, and pursue the life they were created to live.
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '18px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px' }}>
                    Key Focus Areas:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Confronting paralyzing fears & mental glass ceilings', 'Discovering authentic vocation and personal purpose', 'Developing radical consistency and execution'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                        <CheckCircle size={15} color="var(--primary)" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '28px', paddingTop: '18px' }}>
                <a
                  href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ADr.%2BAmaris%2B%2BPerbi&s=relevancerank&text=Dr.+Amaris++Perbi&ref=dp_byline_sr_ebooks_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 20px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <span>Amazon Edition</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Book 3: Be Your Highest Self */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(209, 52, 91, 0.15)',
                    color: '#ff6b8b',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  <Heart size={14} />
                  <span>Identity &amp; Character</span>
                </div>

                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                  Be Your Highest Self
                </h3>

                <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '24px' }}>
                  A transformational book focused on identity, mindset, and the habits required to live a life of meaning and impact. It equips readers with the tools to elevate their thinking, strengthen their character, and align their daily actions with their deepest values.
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '18px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.6)', marginBottom: '10px' }}>
                    Key Focus Areas:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Character architecture and ethical leadership', 'Daily micro-habits that foster sustained excellence', 'Aligning outer success with inner peace and integrity'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                        <CheckCircle size={15} color="#ff6b8b" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '28px', paddingTop: '18px' }}>
                <a
                  href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ADr.%2BAmaris%2B%2BPerbi&s=relevancerank&text=Dr.+Amaris++Perbi&ref=dp_byline_sr_ebooks_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 20px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <span>Amazon Edition</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Weekly Wisdom Sneak Peek */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px auto' }}>
            <span className="section-subtitle">Inside the Book</span>
            <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '14px' }}>
              Sample Weekly Reflections
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
              Preview actual weekly contemplation frameworks from <strong>52 Weeks of Wisdom</strong>.
            </p>
          </div>

          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              backgroundColor: '#F8FCFC',
              border: '1px solid #eaedf0',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 44px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            }}
          >
            {/* Week Selector Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                overflowX: 'auto',
                paddingBottom: '16px',
                borderBottom: '1px solid #eaedf0',
                marginBottom: '28px',
              }}
            >
              {sampleLessons.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSample(idx)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    backgroundColor: selectedSample === idx ? 'var(--primary)' : '#ffffff',
                    color: selectedSample === idx ? '#ffffff' : 'var(--text-headline)',
                    border: selectedSample === idx ? '1px solid var(--primary)' : '1px solid #eaedf0',
                  }}
                >
                  {sample.week}: {sample.theme}
                </button>
              ))}
            </div>

            {/* Selected Lesson Card */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  {sampleLessons[selectedSample].week} Framework
                </span>
                <span style={{ color: '#d0d7de' }}>•</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Theme: {sampleLessons[selectedSample].theme}
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '16px' }}>
                {sampleLessons[selectedSample].title}
              </h3>

              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>
                &ldquo;{sampleLessons[selectedSample].lesson}&rdquo;
              </p>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e1e8ed',
                  borderLeft: '4px solid var(--secondary)',
                  borderRadius: '12px',
                  padding: '18px 22px',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--secondary)', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Actionable Weekly Prompt:
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-headline)', lineHeight: 1.6 }}>
                  {sampleLessons[selectedSample].reflection}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Retailers & Digital Distribution Hub */}
      <section style={{ backgroundColor: '#F8FCFC', borderTop: '1px solid #eaedf0', borderBottom: '1px solid #eaedf0', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px auto' }}>
            <span className="section-subtitle">Retail Partners &amp; Availability</span>
            <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '12px' }}>
              Where to Purchase
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '15px' }}>
              Order your paperback copy or digital e-book across all leading global book platforms.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {/* Amazon */}
            <a
              href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ADr.%2BAmaris%2B%2BPerbi&s=relevancerank&text=Dr.+Amaris++Perbi&ref=dp_byline_sr_ebooks_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#FF9900';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#FF9900', marginBottom: '6px' }}>
                Amazon
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Kindle &amp; Print on Demand
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Available Now <ExternalLink size={12} />
              </span>
            </a>

            {/* Barnes & Noble */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1E392A', marginBottom: '6px' }}>
                Barnes &amp; Noble
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                NOOK &amp; Bookstore Orders
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                Catalog Distribution
              </span>
            </div>

            {/* Apple Books */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#070707', marginBottom: '6px' }}>
                Apple Books
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                iOS &amp; iPadOS Digital E-book
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                Digital Reader
              </span>
            </div>

            {/* Kobo */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#BF0000', marginBottom: '6px' }}>
                Kobo
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                International E-reader
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                Worldwide Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The PowerRead™ Movement & Gallery Showcase */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-subtitle">Global Literacy Initiative</span>
              <h2 className="section-title" style={{ fontSize: '34px', marginBottom: '20px' }}>
                What is the PowerRead™ Movement?
              </h2>
              <p className="section-desc" style={{ marginBottom: '20px' }}>
                Founded by Dr. Amaris Nana Adjei Perbi, the <strong>PowerRead™ Movement</strong> is an international intellectual awakening that champions reading cultures, moral fortitude, and leadership depth among university scholars, youth clubs, and corporate organizations.
              </p>
              <p className="section-desc" style={{ marginBottom: '32px' }}>
                Through community book clubs, national campus reading summits, and philanthropic copy distributions, PowerRead™ equips the next generation with timeless wisdom to solve 21st-century societal challenges.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href="/gallery/52-weeks-of-wisdom-powerread-series"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Explore PowerRead Photo Gallery</span>
                  <ArrowRight size={16} />
                </Link>

                <Link href="/contact" className="btn-outline-dark">
                  Host a Reading Summit
                </Link>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.1)',
                aspectRatio: '4 / 3',
              }}
            >
              <Image
                src="/wp-content/uploads/2026/05/DSC06564.jpg"
                alt="PowerRead Series book launch and reading participants"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(7, 7, 7, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                54 Series Photos in Gallery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Institutional & Bulk Orders Callout */}
      <section style={{ backgroundColor: '#070707', color: '#ffffff', padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <span
            style={{
              color: 'var(--primary)',
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Academic, Corporate &amp; Non-Profit Inquiries
          </span>

          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '20px', color: '#ffffff' }}>
            Equip Your Organization with the PowerRead™ Trilogy
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '17px', lineHeight: 1.7, marginBottom: '36px' }}>
            Custom bulk orders, signed executive editions, and keynote author book discussions are available for organizations, coaching networks, and universities.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                fontSize: '15px',
                padding: '14px 38px',
                borderRadius: '50px',
                fontWeight: 700,
              }}
            >
              Request Institutional Copies
            </Link>

            <a
              href="tel:+18482137670"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '14px 28px',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Direct Phone: +1 848 213 7670</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
