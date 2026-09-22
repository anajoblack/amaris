import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, BookOpen, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Philanthropist',
  description: 'Changing the world, one act of kindness at a time – Philanthropy by Dr. Amaris Perbi.',
};

const pillars = [
  {
    num: '01',
    title: 'Healthcare & Medical Access',
    icon: Heart,
    desc: 'Supporting programs and initiatives that improve access to healthcare, advance medical research, and promote public health and disease prevention across vulnerable communities.',
  },
  {
    num: '02',
    title: 'Quality Education & Mentorship',
    icon: BookOpen,
    desc: 'Investing in programs and initiatives that increase access to quality education, enhance educational outcomes, and provide opportunities for lifelong learning and youth development.',
  },
  {
    num: '03',
    title: 'Economic Stability & Livelihoods',
    icon: TrendingUp,
    desc: 'Supporting sustainable livelihood programs that help individuals and communities achieve economic stability, financial inclusion, and long-term self-sufficiency.',
  },
  {
    num: '04',
    title: 'Empowerment & Social Inclusion',
    icon: Users,
    desc: 'Investing in initiatives that promote gender equality, social inclusion, and empower marginalized individuals and communities to lead self-determined, dignified lives.',
  },
];

const galleryImages = [
  '/wp-content/uploads/2023/05/9-3.jpeg',
  '/wp-content/uploads/2023/05/Women-Empowerment-Training-Sessions-5-300x225.jpeg',
  '/wp-content/uploads/2023/05/22-3-300x225.jpeg',
  '/wp-content/uploads/2023/05/23-300x169.jpeg',
  '/wp-content/uploads/2023/05/231-241x300.jpeg',
  '/wp-content/uploads/2023/05/14-3-300x300.jpeg',
  '/wp-content/uploads/2023/04/Women-Empowerment-Training-Sessions-11-300x169.jpeg',
  '/wp-content/uploads/2023/04/Women-Empowerment-Training-Sessions-2-1-300x267.jpeg',
];

export default function PhilanthropistPage() {
  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '90px 0 70px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-subtitle">Philanthropist</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '16px' }}>
            Changing the World, One Act of Kindness at a Time
          </h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '18px',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            Empowering communities through sustainable clean water, STEM education, women’s
            economic empowerment, and holistic community mentorship.
          </p>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
            <span className="section-subtitle">Core Pillars of Impact</span>
            <h2 className="section-title" style={{ fontSize: '34px' }}>
              Strategic Interventions Designed for Multi-Generational Impact
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px',
            }}
          >
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  style={{
                    backgroundColor: '#F8FCFC',
                    borderRadius: '16px',
                    padding: '36px 28px',
                    border: '1px solid #eaedf0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                      }}
                    >
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(0, 196, 155, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={24} color="var(--primary)" />
                      </div>
                      <span
                        style={{
                          fontSize: '28px',
                          fontWeight: 800,
                          color: '#d1d7dc',
                        }}
                      >
                        {p.num}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--text-headline)',
                        marginBottom: '14px',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.65 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training & Community Photo Showcase */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            <span className="section-subtitle">Capturing the Impact</span>
            <h2 className="section-title" style={{ fontSize: '34px' }}>
              A Photo Journey of Philanthropic Work
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
              From borehole water installations in remote villages to youth coding bootcamps and
              women’s micro-enterprise workshops across West and East Africa.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {galleryImages.map((src, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                }}
              >
                <Image
                  src={src}
                  alt={`Philanthropy impact photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
