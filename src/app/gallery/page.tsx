import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'Gallery – Dr. Amaris Perbi',
  description: 'Checkout Pictures from our Projects – Dr. Amaris Perbi.',
};

export default function GalleryPage() {
  return (
    <GalleryView
      initialCategory="all"
      title="Checkout Pictures from our Projects"
      subtitle="Gallery"
      desc="A visual documentation of Dr. Amaris Perbi’s projects, economic empowerment, borehole installations, youth education, and community initiatives."
    />
  );
}

