import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, User, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to rollout crisis management effectively in an organization',
  description:
    'A tactical guide on rolling out proactive crisis management frameworks in modern enterprises by Dr. Amaris Perbi.',
};

const crisisSteps = [
  {
    title: 'Develop a Crisis Management Plan',
    desc: 'The first step in effective crisis management is to develop a crisis management plan. The plan should outline the key roles and responsibilities of the crisis management team, the communication strategy, and the procedures for responding to different types of crises.',
  },
  {
    title: 'Train the Crisis Management Team',
    desc: 'The crisis management team should be trained to respond effectively to a crisis. The training should include scenario-based exercises to simulate the response to different types of crises. The team should also be familiar with the crisis management plan and their roles and responsibilities.',
  },
  {
    title: 'Test the Crisis Management Plan',
    desc: 'The crisis management plan should be tested regularly to ensure that it is effective. The tests should include scenario-based exercises to simulate different types of crises. The tests should identify any gaps in the plan and provide an opportunity to refine the plan accordingly.',
  },
  {
    title: 'Establish a Communication Strategy',
    desc: 'Effective communication is critical in crisis management. The communication strategy should identify the key stakeholders, the communication channels, and the messages to be communicated during a crisis. The communication strategy should be updated regularly to reflect any changes in the organization or the environment.',
  },
  {
    title: 'Establish a Crisis Communication Team',
    desc: 'The crisis communication team should be responsible for communicating with key stakeholders during a crisis. The team should be trained in crisis communication, including how to manage media relations, social media, and internal communications.',
  },
  {
    title: 'Identify and Assess Potential Crises',
    desc: 'The organization should identify and assess potential crises regularly. This step involves monitoring the internal and external environment for any signs of a crisis and assessing the potential impact of a crisis on the organization.',
  },
  {
    title: 'Implement the Crisis Management Plan',
    desc: 'If a crisis occurs, the crisis management plan should be implemented immediately. The crisis management team should be activated, and the communication strategy should be executed. The crisis response should be well-coordinated, and the organization’s response should be aligned with its values and mission.',
  },
  {
    title: 'Evaluate the Crisis Response',
    desc: 'After the crisis has been resolved, the organization should evaluate the crisis response. The evaluation should identify the strengths and weaknesses of the response and provide an opportunity to refine the crisis management plan accordingly.',
  },
];

export default function CrisisManagementPage() {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          backgroundColor: '#070707',
          color: '#ffffff',
          padding: '80px 0 60px 0',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary)',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </Link>
          <span className="section-subtitle">Risk Governance &amp; Crisis Response</span>
          <h1 className="section-title light" style={{ fontSize: '38px', marginBottom: '16px' }}>
            How to Rollout Crisis Management Effectively in an Organization
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={15} />
              <span>By Dr. Amaris Perbi</span>
            </div>
            <span>·</span>
            <span>Crisis Management</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-headline)', marginBottom: '40px' }}>
            <p style={{ marginBottom: '24px' }}>
              Crisis management is an essential function for any modern enterprise. It involves the
              proactive identification, tactical assessment, and swift resolution of disruptive
              situations. An effective crisis management plan is critical to minimizing operational
              fallout and safeguarding brand reputation.
            </p>
            <p>
              Here are the core procedural steps to roll out a robust crisis management architecture
              across an organization:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
            {crisisSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FCFC',
                  borderRadius: '12px',
                  padding: '28px 24px',
                  border: '1px solid #eaedf0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-headline)' }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.7, margin: 0, paddingLeft: '44px' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '36px',
              marginTop: '40px',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
              Conclusion
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              In conclusion, crisis management is critical to the survival and enduring success of
              any organization. By following these steps, an organization can rollout crisis management
              effectively and respond to turbulence in a way that protects stakeholder trust and
              organizational resilience.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Crisis Simulation Drill
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
