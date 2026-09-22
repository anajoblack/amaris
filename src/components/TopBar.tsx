import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div
      style={{
        backgroundColor: '#532DF5',
        backgroundImage: "url('/wp-content/uploads/2023/04/original-topbar-bg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#ffffff',
        fontSize: '12px',
        padding: '10px 0',
        lineHeight: 1.4,
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ fontWeight: 400, letterSpacing: '0.02em' }}>
          <p style={{ margin: 0 }}>
            Learn as if you will live forever, live like you will die tomorrow.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="tel:+18482137670"
            className="topbar-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#ffffff',
            }}
          >
            <Phone size={13} style={{ strokeWidth: 2.2 }} />
            <span>+1 848 213 7670</span>
          </a>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#ffffff',
            }}
          >
            <MapPin size={13} style={{ strokeWidth: 2.2 }} />
            <span>Princeton, New Jersey, USA & Accra, Ghana</span>
          </div>
        </div>
      </div>
    </div>
  );
}
