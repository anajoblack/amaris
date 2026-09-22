import React from 'react';
import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'Financial Inclusion – Gallery',
  description: 'Financial Inclusion workshops and community impact – Dr. Amaris Perbi.',
};

export default function FinancialInclusionGalleryPage() {
  return (
    <GalleryView
      initialCategory="financial-inclusion"
      title="Financial Inclusion"
      subtitle="Economic Literacy"
      desc="Teaching personal finance, budgeting, micro-savings, and credit literacy to families and small business owners."
    />
  );
}
