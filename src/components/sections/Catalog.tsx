// src/components/sections/Catalog.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import nationsData from '@/data/nations.json';
import { NationCard } from '@/components/ui/NationCard';
import { Button } from '@/components/ui/Button';
import { Nation } from '@/types';

export const Catalog = () => {
  const popularNations = (nationsData as Nation[]).filter(n => n.isPopular);

  return (
    <section className="py-12 md:py-16 bg-background-section border-t border-border-subtle">
      <div className="section-container px-0 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-4 sm:px-0 gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-white">
              Pilih Negara Tujuan
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Kami melayani pengurusan visa ke berbagai destinasi populer dengan proses yang sudah terstandarisasi.
            </p>
          </div>
          
          {/* Top Link Elegan (Tanpa Border Button) - Sembunyi di HP karena ada CTA bawah */}
          <Link 
            href="/nations" 
            className="hidden md:flex items-center gap-2 text-gold-primary hover:text-white transition-colors text-sm font-medium group"
          >
            Lihat Semua Destinasi 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Adaptive Flex-Wrap: 
          - Mobile: 2 Kolom presisi (calc 50% dikurangi setengah ukuran gap)
          - Tablet: 3 Kolom
          - Desktop: Lebar fixed 280px agar rapi di tengah (orphan control)
          - Carousel dihapus total
        */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 sm:px-0">
          {popularNations.map((nation) => (
            <div 
              key={nation.id} 
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-70 max-w-[320px] transition-all duration-300"
            >
              <NationCard nation={nation} />
            </div>
          ))}
        </div>

        {/* Bottom CTA (Tampil sentris di semua ukuran layar) */}
        <div className="mt-10 md:mt-12 flex justify-center px-4 sm:px-0">
          <Link href="/nations" className="w-full sm:w-auto">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto py-3 px-8 shadow-[0_0_15px_rgba(200,169,106,0.15)] hover:shadow-[0_0_25px_rgba(200,169,106,0.3)]"
            >
              Eksplorasi Semua Negara
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};