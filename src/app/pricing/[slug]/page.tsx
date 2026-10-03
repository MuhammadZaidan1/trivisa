// src/app/pricing/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import nationsData from '@/data/nations.json';
import { Nation } from '@/types';
import { PriceCard } from '@/components/ui/PriceCard';
import { ConsultationCard } from '@/components/ui/ConsultationCard';
import { Metadata } from 'next';
// REVISI: Import siteConfig
import { siteConfig } from '@/config/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const nation = (nationsData as Nation[]).find((n) => n.slug === slug);
  
  if (!nation) return { title: 'Negara Tidak Ditemukan' };

  return {
    title: `Jasa Pembuatan Visa ${nation.name} Resmi & Cepat`,
    description: nation.metaDescription || `Layanan pengurusan Visa ${nation.name} terpercaya. Proses transparan, syarat mudah, dan didampingi tim ahli. Konsultasi sekarang!`,
    openGraph: {
      title: `Jasa Pembuatan Visa ${nation.name} | ${siteConfig.name}`,
      description: nation.metaDescription || `Pengurusan Visa ${nation.name} cepat dan aman.`,
      images: [
        {
          url: nation.images.hero, 
          width: 1200,
          height: 630,
          alt: `Visa ${nation.name}`,
        }
      ],
    },
  };
}

export async function generateStaticParams() {
  return (nationsData as Nation[]).map((nation) => ({
    slug: nation.slug,
  }));
}

export default async function PricingPage({ params }: Props) {
  const { slug } = await params;
  const nation = (nationsData as Nation[]).find((n) => n.slug === slug);

  if (!nation) {
    notFound();
  }

  return (
    <div className="bg-background-main min-h-screen">
      
      {/* SECTION 1: HERO DETAIL */}
      <section className="relative h-[60vh] md:h-[90vh] flex pt-[10vh] md:pt-[20vh] justify-center overflow-hidden">
        <Image
          src={nation.images.hero}
          alt={`Background Visa ${nation.name}`}
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background-main from-5% via-background-main/90 via-25% to-background-main/0 to-95% z-10" />
        
        <div className="section-container relative z-20 text-center px-4 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 drop-shadow-2xl">
            Visa <span className="text-gold-primary">{nation.name}</span>
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {nation.description}
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTENT (Cards & CTA) */}
      <section className="pb-16 md:pb-16 -mt-60 md:-mt-74 relative z-30">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="max-w-7xl mx-auto mb-6 md:mb-4">
            <Link 
              href="/nations" 
              className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors group w-fit bg-background-main/50 backdrop-blur-md px-5 py-2.5 rounded-lg border border-border-subtle hover:border-gold-primary/50"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs md:text-sm font-medium tracking-wide">Katalog Destinasi</span>
            </Link>
          </div>

          {/* Pricing Grid */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto pb-8 md:pb-8">
            {nation.pricing.map((price, index) => (
              <div 
                key={index} 
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.5rem)]"
              >
                <PriceCard 
                  priceData={price} 
                  nationName={nation.name} 
                  countryCode={nation.countryCode} 
                />
              </div>
            ))}
          </div>

          {/* Consultation CTA Card */}
          <div className="max-w-7xl mx-auto mt-4 md:mt-4">
            <ConsultationCard />
          </div>

        </div>
      </section>

    </div>
  );
}