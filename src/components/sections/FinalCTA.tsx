// src/components/sections/FinalCTA.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileEdit } from 'lucide-react';
import { Button } from '@/components/ui/Button';
// REVISI: Import WhatsAppButton Sakti
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const FinalCTA = () => {
  // waLink dihapus karena sudah di-handle di dalam WhatsAppButton

  return (
    <section className="py-12 md:py-16 bg-background-section relative overflow-hidden">
      <div className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Wrapper Card / Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-border-subtle/50 shadow-2xl">

          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/background/flight.jpg" 
              alt="Mulai Pembuatan Visa"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-background-main via-background-main/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-background-main/10 z-10 md:hidden" />
          </div>

          {/* Content Inside Card */}
          <div className="relative z-20 px-6 py-12 md:p-16 lg:p-20 flex flex-col items-center md:items-start text-center md:text-left">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading leading-tight text-white max-w-2xl">
              Mulai Proses Pembuatan Visa Anda <span className="text-gold-primary">Sekarang!</span>
            </h2>

            <p className="text-text-secondary text-sm md:text-base mb-10 leading-relaxed max-w-lg">
              Percayakan urusan dokumen perjalanan Anda kepada tim ahli kami. Proses cepat, aman, dan tanpa ribet.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              {/* PRIMARY BUTTON: Solid Gold dengan Ikon Form */}
              <Link href="/nations" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 shadow-[0_0_20px_rgba(200,169,106,0.2)] flex items-center justify-center gap-2.5 group">
                  Booking Sekarang
                  <FileEdit className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                </Button>
              </Link>

              {/* REVISI: Menggunakan WhatsAppButton dengan styling dark glassmorphism lu */}
              <WhatsAppButton 
                source="final_cta" 
                variant="custom"
                className="w-full sm:w-auto px-8 py-3.5 bg-black/50 backdrop-blur-md border border-white/50 hover:bg-black/75 hover:border-gold-primary transition-all text-white flex items-center justify-center gap-2.5 group"
              >
                Konsultasi dengan Kami
              </WhatsAppButton>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};