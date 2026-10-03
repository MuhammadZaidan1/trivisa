// src/components/ui/SectionCTA.tsx
import React from 'react';
import Link from 'next/link';
import { Plane } from 'lucide-react';
import { Button } from '@/components/ui/Button';
// REVISI: Import WhatsAppButton Sakti
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const SectionCTA = () => {
  // waLink dihapus karena sudah di-handle di dalam WhatsAppButton

  return (
    <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0 relative z-20">
      
      {/* Primary CTA: Solid Gold dengan efek terbang */}
      <Link href="/nations" className="w-full sm:w-auto">
        <Button 
          variant="primary" 
          className="w-full sm:w-auto py-3.5 px-8 shadow-[0_0_15px_rgba(200,169,106,0.15)] hover:shadow-[0_0_25px_rgba(200,169,106,0.3)] flex items-center justify-center gap-2.5 group"
        >
          Booking Sekarang
          <Plane className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />
        </Button>
      </Link>

      {/* REVISI: Menggunakan WhatsAppButton dengan styling custom bawaan lu */}
      <WhatsAppButton 
        source="section_cta" 
        variant="custom"
        className="w-full sm:w-auto py-3.5 px-8 bg-transparent border-2 border-gold-primary text-gold-primary hover:bg-gold-primary/10 transition-colors flex items-center justify-center gap-2.5 group"
      >
        Konsultasi Gratis Dengan Kami
      </WhatsAppButton>
      
    </div>
  );
};