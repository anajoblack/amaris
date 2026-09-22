'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: 'Executive Training',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <span className="section-subtitle">CONNECT WITH US</span>
          <h1 className="section-title light" style={{ fontSize: '42px', marginBottom: '16px' }}>
            Get In Touch &amp; Booking
          </h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '18px',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            For training engagements, keynote speaking invitations, strategic advisory, or
            media inquiries, reach out using the form or direct channels below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'start',
            }}
          >
            {/* Contact Details Column */}
            <div>
              <span className="section-subtitle">Direct Inquiries</span>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '24px' }}>
                We Are Here to Serve Your Organization
              </h2>
              <p className="section-desc" style={{ marginBottom: '36px' }}>
                Whether you are coordinating an annual c-suite retreat, requesting custom
                training modules, or booking Dr. Amaris Perbi for a global conference, our executive
                liaison team ensures prompt and attentive communication.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 196, 155, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--text-headline)' }}>
                      Phone &amp; WhatsApp
                    </h3>
                    <a
                      href="tel:+18482137670"
                      style={{ color: 'var(--text-body)', fontSize: '15px' }}
                    >
                      +1 848 213 7670
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 196, 155, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--text-headline)' }}>
                      Email Inquiries
                    </h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '15px', margin: 0 }}>
                      contact@dramarisperbi.com · info@dramarisperbi.com
                    </p>
                  </div>
                </div>

                {/* Addresses */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 196, 155, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} color="var(--primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: 'var(--text-headline)' }}>
                      Global Office Locations
                    </h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '15px', marginBottom: '8px' }}>
                      <strong>USA:</strong> Princeton, New Jersey, USA
                    </p>
                    <p style={{ color: 'var(--text-body)', fontSize: '15px', margin: 0 }}>
                      <strong>Ghana:</strong> RevPerbi Villa, Brave Heart Plaza · OPD Hall, Absa
                      Bank Building (Abrafi Plaza), Westland, Haatso, Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking / Contact Form Column */}
            <div
              style={{
                backgroundColor: '#F8FCFC',
                borderRadius: '16px',
                padding: '40px 36px',
                border: '1px solid #eaedf0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              }}
            >
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-headline)' }}>
                Booking &amp; Inquiry Form
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                Fill out the details below and our team will respond within 24 hours.
              </p>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(0, 196, 155, 0.1)',
                    border: '1px solid var(--primary)',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 size={40} color="var(--primary)" style={{ margin: '0 auto 12px auto' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '8px' }}>
                    Inquiry Submitted Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '14px', margin: 0 }}>
                    Thank you for reaching out. A representative will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d7dc',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d7dc',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #d1d7dc',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '6px' }}>
                        Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Company / Institution"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #d1d7dc',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '6px' }}>
                      Nature of Inquiry *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d7dc',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    >
                      <option value="Executive Training">Executive Training &amp; Programs</option>
                      <option value="Keynote Speaking">Keynote Speaking &amp; Conferences</option>
                      <option value="ESG Advisory">ESG &amp; Sustainability Strategy</option>
                      <option value="Corporate Mentorship">Mentorship Program</option>
                      <option value="Books & PowerRead">Books &amp; PowerRead™ Bulk Order</option>
                      <option value="Music & Media">Music Licensing &amp; Performance</option>
                      <option value="General Inquiry">General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-headline)', marginBottom: '6px' }}>
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe your event dates, team size, or training objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d7dc',
                        fontSize: '15px',
                        outline: 'none',
                        fontFamily: 'inherit',
                        backgroundColor: '#ffffff',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px 0',
                      fontSize: '15px',
                      display: 'flex',
                      gap: '8px',
                    }}
                  >
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
