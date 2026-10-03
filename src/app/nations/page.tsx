// src/app/nations/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // REVISI: Wajib import Image
import { ArrowLeft } from 'lucide-react';
import nationsData from '@/data/nations.json';
import { Nation } from '@/types';
import { NationsList } from '@/components/sections/NationsList';
import { ConsultationCard } from '@/components/ui/ConsultationCard';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "Katalog Destinasi Jasa Pembuatan Visa", 
  description: "Eksplorasi layanan pengurusan visa ke berbagai negara favorit. Kami siap membantu kelengkapan dokumen Anda dengan tingkat approval tinggi.",
  openGraph: {
    title: `Katalog Destinasi Visa | ${siteConfig.name}`,
    description: "Eksplorasi layanan pengurusan visa ke berbagai negara favorit dengan tingkat approval tinggi.",
    images: [
      {
        url: "/images/background/plane.jpg", 
        width: 1200,
        height: 630,
        alt: `Katalog Destinasi Visa ${siteConfig.name}`,
      }
    ],
  }
};

export default function NationsPage() {
  const allNations = nationsData as Nation[];

  return (
    <div className="relative pt-24 pb-12 md:pb-16 bg-background-main overflow-hidden">
      
      <div className="absolute top-10 md:top-0 left-0 w-full h-[60vh] md:h-screen z-0 pointer-events-none opacity-15 md:opacity-25">
        <Image 
          src="/images/background/peta.png"
          alt="World Map Background"
          fill
          priority
          className="object-contain object-top mix-blend-screen origin-top scale-110 md:scale-[1.2]" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background-main/50 to-background-main" />
      </div>

      {/* --- KONTEN UTAMA --- */}
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-gold-primary transition-colors mb-5 md:mb-5 group w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Kembali ke Beranda</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white drop-shadow-md">
            The World is <span className="text-gold-primary italic">Open.</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
            Pilih destinasi Anda dan percayakan seluruh proses pengurusan visa kepada tim ahli kami.
          </p>
        </div>

        {/* Nations List with Search functionality */}
        <NationsList nations={allNations} />

        {/* Reusable Consultation Card ditaruh di bawah list */}
        <div className="max-w-4xl mx-auto mt-4 md:mt-4">
          <ConsultationCard />
        </div>

      </div>
    </div>
  );
}