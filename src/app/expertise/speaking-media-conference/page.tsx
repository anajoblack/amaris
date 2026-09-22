import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mic, Radio, Users, Sparkles, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speaking, Media & Conferences',
  description:
    'Fostering Growth and Innovation through Dynamic Conference Experiences – Keynotes & Media with Dr. Amaris Perbi.',
};

const keynoteTopics = [
  {
    title: 'Transformational Leadership in Turbulent Times',
    desc: 'Equipping leaders to navigate economic volatility, technological disruptions, and rapid organizational shifts with purpose and grit.',
  },
  {
    title: 'ESG, Sustainability & Strategic Value Creation',
    desc: 'Demystifying ESG for modern enterprise boards: turning compliance obligations into competitive advantages.',
  },
  {
    title: 'Conflict Transformation & Boardroom Synergy',
    desc: 'Unlocking breakthrough innovation by transforming corporate friction and interpersonal deadlock into collaborative alignment.',
  },
  {
    title: 'The Servant Leadership Imperative in Africa & Beyond',
    desc: 'Inspiring multi-sector leaders to champion ethical stewardship, youth empowerment, and enduring societal impact.',
  },
];

export default function SpeakingPage() {
  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          position: 'relative',
          backgroundImage: "url('/images/singggamae1_AdEt.jpg')",
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover',
          padding: '110px 0 90px 0',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
          <span className="section-subtitle light">Keynotes & Global Events</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '20px' }}>
            Fostering Growth and Innovation through Dynamic Conference Experiences
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            Renowned worldwide for captivating keynote speeches, executive fireside chats, and
            transformational leadership panels.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '14px 36px' }}>
            Check Availability for Booking
          </Link>
        </div>
      </section>

      {/* Signature Keynote Topics */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
            <span className="section-subtitle">Keynote Offerings</span>
            <h2 className="section-title" style={{ fontSize: '34px' }}>
              Signature Speaking & Workshop Themes
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
              Every keynote is customized with relevant industry case studies, audience interaction,
              and actionable takeaways.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {keynoteTopics.map((topic, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#F8FCFC',
                  padding: '32px 28px',
                  borderRadius: '16px',
                  border: '1px solid #eaedf0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 196, 155, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}
                  >
                    <Mic size={22} color="var(--primary)" />
                  </div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--text-headline)',
                      marginBottom: '12px',
                    }}
                  >
                    {topic.title}
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.6 }}>
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & Media Engagements */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-subtitle">Engagements</span>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px' }}>
                Engagements Formats Tailored to Your Audience
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '30px',
                }}
              >
                {[
                  'Global Convention & Summit Keynotes (30–60 mins)',
                  'Executive Boardroom & Leadership Retreats (Half-Day / Multi-Day)',
                  'Panel Moderation & Fireside Discussions',
                  'Television, Radio & Podcast Media Interviews',
                  'Virtual Webinars & Global Live Streams',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--text-headline)', fontWeight: 500 }}>
                    <CheckCircle size={18} color="var(--primary)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Book Speaking Engagement
              </Link>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/images/tapsb-1-1024x683_AdEt.jpg"
                alt="Dr. Amaris Perbi presenting to executives"
                width={650}
                height={450}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
