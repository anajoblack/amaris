import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'Others – Gallery',
  description: 'Community events and other highlights – Dr. Amaris Perbi.',
};

export default function OthersGalleryPage() {
  return (
    <GalleryView
      initialCategory="others"
      title="Other Highlights"
      subtitle="Community & Fellowship"
      desc="Capturing awards ceremonies, media interviews, and special community gatherings."
    />
  );
}
