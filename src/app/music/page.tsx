import React from 'react';
import type { Metadata } from 'next';
import MusicView from '@/components/MusicView';

export const metadata: Metadata = {
  title: 'Music – Dr. Amaris Perbi',
  description:
    'Music by Dr. Amaris Perbi – Blending worship, inspiration, and purpose-driven storytelling. Discover albums, singles, live performances, and streaming on Spotify, Apple Music, and YouTube.',
};

export default function MusicPage() {
  return <MusicView />;
}

