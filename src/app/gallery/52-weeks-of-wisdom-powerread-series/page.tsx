import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: '52 Weeks of Wisdom PowerRead Series – Gallery',
  description: '52 Weeks of Wisdom and PowerRead book launches and reading sessions – Dr. Amaris Perbi.',
};

export default function PowerReadGalleryPage() {
  return (
    <GalleryView
      initialCategory="52-weeks-of-wisdom-powerread-series"
      title="52 Weeks of Wisdom & PowerRead™"
      subtitle="Intellectual Literacy"
      desc="Moments from reading summits, university keynote engagements, book launches, and executive study cohorts."
    />
  );
}
