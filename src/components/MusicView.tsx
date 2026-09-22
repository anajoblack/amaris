'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Pause,
  ExternalLink,
  Award,
  Heart,
  Volume2,
  Disc,
  Radio,
  CheckCircle,
  Share2,
} from 'lucide-react';

interface Track {
  id: string;
  title: string;
  album: string;
  category: string;
  tag?: string;
  duration?: string;
}

const allTracks: Track[] = [
  // My Meditation Album
  { id: 'mm-1', title: 'Lift Every Voice – Anthem', album: 'My Meditation (Album)', category: 'album', duration: '4:15' },
  { id: 'mm-2', title: 'Twi Aseda Worship Medley', album: 'My Meditation (Album)', category: 'album', duration: '6:30' },
  { id: 'mm-3', title: 'Timeless Hymns Medley', album: 'My Meditation (Album)', category: 'album', duration: '5:48' },
  { id: 'mm-4', title: 'Deeper Worship Medley', album: 'My Meditation (Album)', category: 'album', duration: '7:12' },
  { id: 'mm-5', title: 'London Spontaneous Worship', album: 'My Meditation (Album)', category: 'album', duration: '8:05' },
  { id: 'mm-6', title: 'Wet With Worship (WWW)', album: 'My Meditation (Album)', category: 'album', duration: '5:22' },
  { id: 'mm-7', title: 'Goodbye World (Acapella)', album: 'My Meditation (Album)', category: 'album', duration: '3:40' },

  // Hosanna Africa Praise EP
  { id: 'hap-1', title: 'Hosanna Acapella (Reprise)', album: 'Hosanna Africa Praise (EP)', category: 'ep', duration: '3:15' },
  { id: 'hap-2', title: 'Me Wura (My Lord)', album: 'Hosanna Africa Praise (EP)', category: 'ep', duration: '5:02' },
  { id: 'hap-3', title: 'Hallelujah Hosanna', album: 'Hosanna Africa Praise (EP)', category: 'ep', tag: 'Award Winner', duration: '6:18' },
  { id: 'hap-4', title: 'N’adom (His Grace) Praise Song', album: 'Hosanna Africa Praise (EP)', category: 'ep', duration: '4:45' },
  { id: 'hap-5', title: 'Here I Am', album: 'Hosanna Africa Praise (EP)', category: 'ep', duration: '5:30' },

  // Worship Overflow Medley
  { id: 'wom-1', title: 'Deep Calls Unto Deep (Live Flow)', album: 'Worship Overflow Medley (Live)', category: 'live', duration: '9:10' },
  { id: 'wom-2', title: 'Spontaneous Adoration & Chants', album: 'Worship Overflow Medley (Live)', category: 'live', duration: '7:44' },

  // Singles & Social Impact
  { id: 'sis-1', title: 'W’ayi M’adesoa – Highlife', album: 'Singles & Social Impact', category: 'single', tag: 'Highlife', duration: '4:35' },
  { id: 'sis-2', title: 'Arise Africa (Stop Child Labor)', album: 'Singles & Social Impact', category: 'single', tag: 'Child Advocacy', duration: '4:50' },
  { id: 'sis-3', title: 'Ghana Folk Praise', album: 'Singles & Social Impact', category: 'single', tag: 'Folk Heritage', duration: '5:15' },
  { id: 'sis-4', title: 'Anago Africa Fire Praise', album: 'Singles & Social Impact', category: 'single', tag: 'High Energy', duration: '4:40' },
  { id: 'sis-5', title: 'Onua – “Hope Song” (Never Give Up)', album: 'Singles & Social Impact', category: 'single', tag: 'Inspiration', duration: '4:10' },
  { id: 'sis-6', title: 'Onua (Brethren) – “Un Orphanage Song”', album: 'Singles & Social Impact', category: 'single', tag: 'Philanthropy', duration: '4:25' },
  { id: 'sis-7', title: 'Look at Me', album: 'Singles & Social Impact', category: 'single', tag: 'Testimony', duration: '3:55' },
  { id: 'sis-8', title: 'It’s Raining (Live)', album: 'Singles & Social Impact', category: 'single', tag: 'Revival', duration: '6:05' },
];

export default function MusicView() {
  const [activeTab, setActiveTab] = useState<'all' | 'album' | 'ep' | 'single'>('all');
  const [activeTrack, setActiveTrack] = useState<Track>(allTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredTracks =
    activeTab === 'all'
      ? allTracks
      : allTracks.filter((t) => t.category === activeTab);

  const togglePlayTrack = (track: Track) => {
    if (activeTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#070707' }}>
      {/* 1. Hero Spotlight: Split Dark Card & Stage Photo */}
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
            {/* Left Column: Music Bio & Links */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(0, 196, 155, 0.12)',
                  color: 'var(--primary)',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                <Disc size={15} />
                <span>Music &amp; Worship Ministry</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '20px',
                  color: '#ffffff',
                }}
              >
                Music by Dr. Amaris Perbi
              </h1>

              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '16px',
                }}
              >
                Dr. Amaris Perbi’s music blends worship, inspiration, and purpose-driven storytelling.
                His compositions reflect a deep commitment to faith, social impact, and spiritual awakening.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.65)',
                  marginBottom: '32px',
                }}
              >
                Available across Apple Music, Spotify, and YouTube, these songs uplift, encourage, and empower listeners worldwide.
              </p>

              {/* Streaming Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="https://open.spotify.com/artist/3c0Eo6Dr3uK4TxQM03KBRF?si=XnXAu9VYQIya37aKXYxwFw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#1DB954',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 185, 84, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <span>Listen on Spotify</span>
                </a>

                <a
                  href="https://youtube.com/@dramarisperbi?si=01dlkATYF4i3oeBE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FF0000',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube Channel</span>
                </a>

                <Link
                  href="/contact"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '12px 22px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Licensing &amp; Booking</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Authentic Live Ministering Photo */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                aspectRatio: '1 / 1',
                maxHeight: '520px',
                margin: '0 auto',
                width: '100%',
              }}
            >
              <Image
                src="/wp-content/uploads/2026/05/PHOTO-2026-04-19-13-14-36.jpg"
                alt="Dr. Amaris Perbi ministering live with microphone and choir"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Floating Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(7, 7, 7, 0.75)',
                  backdropFilter: 'blur(12px)',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      boxShadow: '0 0 10px var(--primary)',
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                      Live Worship Experience
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                      Rev. Dr. Nana Amaris Perbi
                    </div>
                  </div>
                </div>

                <a
                  href="https://youtu.be/BRwQ9wQ5B1M?si=jJDeF1m6OXiHQQNR"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Play size={12} fill="#ffffff" />
                  <span>Watch Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Global Streaming Hub Bar */}
      <section style={{ backgroundColor: '#F8FCFC', borderBottom: '1px solid #eaedf0', padding: '36px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {/* Spotify */}
            <a
              href="https://open.spotify.com/artist/3c0Eo6Dr3uK4TxQM03KBRF?si=XnXAu9VYQIya37aKXYxwFw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#1DB954';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(29, 185, 84, 0.1)',
                  color: '#1DB954',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Radio size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-headline)' }}>
                  Spotify Artist
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Dr. Amaris Perbi on Spotify
                </div>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@dramarisperbi?si=01dlkATYF4i3oeBE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#FF0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eaedf0';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  color: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Play size={22} fill="#FF0000" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-headline)' }}>
                  YouTube Official
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Music Videos &amp; Live Sessions
                </div>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </a>

            {/* Apple Music */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(250, 36, 60, 0.1)',
                  color: '#FA243C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Disc size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-headline)' }}>
                  Apple Music
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Available across all devices
                </div>
              </div>
              <CheckCircle size={16} color="var(--primary)" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live Worship Performance Feature (Responsive Video Player) */}
      <section className="section-py" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
            <span className="section-subtitle">Live Performance Feature</span>
            <h2 className="section-title" style={{ fontSize: '34px', marginBottom: '14px' }}>
              Watch Dr. Perbi’s Live Worship Performance
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
              Experience the atmosphere-shifting presence in <strong>&ldquo;My Meditation&rdquo; – Live Performance</strong> recorded during global leadership &amp; praise ministry.
            </p>
          </div>

          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: '#070707',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
              border: '1px solid #222222',
            }}
          >
            {/* 16:9 Responsive Video Wrapper */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/BRwQ9wQ5B1M?rel=0&modestbranding=1"
                title="Dr. Amaris Perbi – My Meditation Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            </div>

            {/* Video Footer Caption */}
            <div
              style={{
                padding: '24px 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                backgroundColor: '#111111',
                borderTop: '1px solid #222222',
              }}
            >
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  “My Meditation” – Live Performance
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)' }}>
                  Ministering with live orchestra, African percussion, and choral accompaniment.
                </p>
              </div>

              <a
                href="https://youtu.be/BRwQ9wQ5B1M?si=jJDeF1m6OXiHQQNR"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#FF0000',
                  color: '#ffffff',
                  padding: '10px 22px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>Watch on YouTube</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Discography & Track Collection */}
      <section className="section-py" style={{ backgroundColor: '#F8FCFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px auto' }}>
            <span className="section-subtitle">Discography Catalog</span>
            <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '14px' }}>
              Featured Albums &amp; Singles
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
              Explore the complete musical discography of Dr. Amaris Perbi across worship medleys, continental praise, and social advocacy singles.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {[
              { id: 'all', label: 'All Releases' },
              { id: 'album', label: 'My Meditation (Album)' },
              { id: 'ep', label: 'Hosanna Africa Praise (EP)' },
              { id: 'single', label: 'Singles & Social Impact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeTab === tab.id ? 'var(--primary)' : '#ffffff',
                  color: activeTab === tab.id ? '#ffffff' : 'var(--text-headline)',
                  border: activeTab === tab.id ? '1px solid var(--primary)' : '1px solid #eaedf0',
                  boxShadow: activeTab === tab.id ? '0 4px 12px rgba(0, 196, 155, 0.2)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Player & Tracklist Split Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
            }}
          >
            {/* Left: Featured Album Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Card 1: My Meditation */}
              {(activeTab === 'all' || activeTab === 'album') && (
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '18px',
                    padding: '32px',
                    border: '1px solid #eaedf0',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        backgroundColor: 'rgba(0, 196, 155, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                      }}
                    >
                      Featured Album
                    </span>
                    <Disc size={22} color="var(--primary)" />
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    My Meditation (Album)
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                    A collection of worship medleys and spiritual reflections designed to center the soul and elevate the spirit.
                  </p>

                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '12px' }}>
                    7 Notable Album Tracks:
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      'Lift Every Voice – Anthem',
                      'Twi Aseda Worship Medley',
                      'Timeless Hymns Medley',
                      'Deeper Worship Medley',
                      'London Spontaneous Worship',
                      'Wet With Worship (WWW)',
                      'Goodbye World (Acapella)',
                    ].map((song, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          backgroundColor: '#F8FCFC',
                          fontSize: '14px',
                          fontWeight: 500,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)', width: '16px' }}>
                            {sIdx + 1}.
                          </span>
                          <span>{song}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 2: Hosanna Africa Praise */}
              {(activeTab === 'all' || activeTab === 'ep') && (
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '18px',
                    padding: '32px',
                    border: '1px solid #eaedf0',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--secondary)',
                        backgroundColor: 'rgba(83, 45, 245, 0.08)',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                      }}
                    >
                      EP Release • Award Winner
                    </span>
                    <Award size={22} color="var(--secondary)" />
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    Hosanna Africa Praise (Medley) (EP)
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                    A vibrant celebration of African praise traditions, blending languages, rhythms, and heartfelt worship.
                  </p>

                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '12px' }}>
                    EP Tracklist:
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Hosanna Acapella (Reprise)', tag: null },
                      { name: 'Me Wura (My Lord)', tag: null },
                      { name: 'Hallelujah Hosanna', tag: 'Award Winner' },
                      { name: 'N’adom (His Grace) Praise Song', tag: null },
                      { name: 'Here I Am', tag: null },
                    ].map((song, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          backgroundColor: '#F8FCFC',
                          fontSize: '14px',
                          fontWeight: 500,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)', width: '16px' }}>
                            {sIdx + 1}.
                          </span>
                          <span>{song.name}</span>
                        </div>
                        {song.tag && (
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              backgroundColor: '#fff3cd',
                              color: '#856404',
                              padding: '2px 8px',
                              borderRadius: '50px',
                            }}
                          >
                            ★ {song.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 3: Worship Overflow Medley (Live) */}
              {(activeTab === 'all' || activeTab === 'ep') && (
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '18px',
                    padding: '32px',
                    border: '1px solid #eaedf0',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        backgroundColor: 'rgba(0, 196, 155, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                      }}
                    >
                      Live Concert Recording
                    </span>
                    <Radio size={22} color="var(--primary)" />
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    Worship Overflow Medley (Live) (EP)
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.6, marginBottom: '0px' }}>
                    Live recordings that capture the spontaneous, spirit-led flow of worship in global gatherings. Unscripted praise and heartfelt choral expressions.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Singles & Social Impact Showcase + Interactive Player */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Interactive Player Console */}
              <div
                style={{
                  backgroundColor: '#070707',
                  color: '#ffffff',
                  borderRadius: '18px',
                  padding: '28px',
                  border: '1px solid #222222',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Track Preview Console
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Volume2 size={16} color="var(--primary)" />
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Stereo</span>
                  </div>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                    {activeTrack.title}
                  </h4>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                    {activeTrack.album}
                  </div>
                </div>

                {/* Simulated Audio Progress Waveform */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    height: '32px',
                    margin: '18px 0',
                    padding: '0 8px',
                  }}
                >
                  {[40, 65, 85, 30, 95, 70, 45, 100, 60, 35, 80, 50, 90, 75, 55, 30, 85, 60, 45, 95, 70, 40, 80, 60].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: isPlaying ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.8)))}%` : '15%',
                        backgroundColor: i < 10 ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                        borderRadius: '2px',
                        transition: 'height 0.3s ease',
                      }}
                    />
                  ))}
                </div>

                {/* Player Controls & External Link */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '10px 22px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    {isPlaying ? <Pause size={15} fill="#ffffff" /> : <Play size={15} fill="#ffffff" />}
                    <span>{isPlaying ? 'Pause Preview' : 'Play Track'}</span>
                  </button>

                  <a
                    href="https://open.spotify.com/artist/3c0Eo6Dr3uK4TxQM03KBRF?si=XnXAu9VYQIya37aKXYxwFw"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#1DB954',
                      fontSize: '13px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Full Track on Spotify</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Singles & Social Impact Songs Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '32px',
                  border: '1px solid #eaedf0',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#D1345B',
                      backgroundColor: 'rgba(209, 52, 91, 0.08)',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Social Impact &amp; Purpose Singles
                  </span>
                  <Heart size={20} color="#D1345B" />
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '12px' }}>
                  Singles &amp; Social Impact Songs
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Anthems created to drive community change, combat child exploitation, celebrate Ghanaian folklore, and inspire human resilience.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { title: 'W’ayi M’adesoa – Highlife', desc: 'Joyful traditional highlife groove', tag: 'Highlife' },
                    { title: 'Arise Africa (Stop Child Labor)', desc: 'Advocacy anthem for vulnerable children', tag: 'Advocacy' },
                    { title: 'Ghana Folk Praise', desc: 'Indigenous acoustic folk rhythms', tag: 'Folk' },
                    { title: 'Anago Africa Fire Praise', desc: 'Energetic continental celebration', tag: 'Praise' },
                    { title: 'Onua – “Hope Song” (Never Give Up)', desc: 'Empowerment anthem for weary hearts', tag: 'Hope' },
                    { title: 'Onua (Brethren) – “Un Orphanage Song”', desc: 'Philanthropic support for orphan care', tag: 'Charity' },
                    { title: 'Look at Me', desc: 'Personal testimony of transformative grace', tag: 'Testimony' },
                    { title: 'It’s Raining (Live)', desc: 'Spiritual revival anthem recorded live', tag: 'Live' },
                  ].map((single, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        togglePlayTrack({
                          id: `single-${idx}`,
                          title: single.title,
                          album: 'Singles & Social Impact',
                          category: 'single',
                        })
                      }
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        backgroundColor: '#F8FCFC',
                        border: '1px solid #eaedf0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f9f7')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F8FCFC')}
                    >
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-headline)' }}>
                          {single.title}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          {single.desc}
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#eef2f5',
                          color: '#495057',
                        }}
                      >
                        {single.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Licensing & Performance Booking Callout */}
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
            Artistic Inquiries &amp; Performances
          </span>

          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '20px', color: '#ffffff' }}>
            Want to Collaborate or License a Track?
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '17px', lineHeight: 1.7, marginBottom: '36px' }}>
            Reach out via the <strong>Contact Page</strong> for media inquiries, licensing, concert ministry,
            keynote worship, or performance bookings.
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
              Reach Out via Contact Page
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
              <span>Call: +1 848 213 7670</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
