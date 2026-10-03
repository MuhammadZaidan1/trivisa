// src/components/ui/ConsultationCard.tsx
import React from 'react';
import { MessageSquareText } from 'lucide-react';
// REVISI: Import WhatsAppButton Sakti
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const ConsultationCard = () => {
  return (
    // Menggunakan card-premium dengan tambahan border-left tebal untuk aksen
    <div className="card-premium relative overflow-hidden border-none border-l-4 border-l-gold-primary bg-card-bg/80 backdrop-blur-sm">
      
      {/* Dekorasi subtle gradient di background card */}
      <div className="absolute inset-0 bg-linear-to-r from-gold-primary/5 to-transparent pointer-events-none" />

      {/* Flex container: Numpuk di Mobile (flex-col), Menyamping di Desktop (md:flex-row) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Konten Teks & Icon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 w-full md:w-auto">
          <div className="p-3 rounded-lg bg-gold-primary/10 text-gold-primary shrink-0 hidden sm:block">
            <MessageSquareText className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-2">
              Masih Bingung Memilih?
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl">
              Tim ahli kami siap menjawab pertanyaan dan merekomendasikan jenis visa yang paling tepat untuk perjalanan Anda.
            </p>
          </div>
        </div>

        {/* Tombol CTA */}
        <div className="w-full md:w-auto shrink-0">
          {/* REVISI: Menggunakan WhatsAppButton */}
          <WhatsAppButton 
            source="consultation_card"
            variant="primary"
            className="md:w-auto px-8 py-3 whitespace-nowrap shadow-[0_0_15px_rgba(200,169,106,0.15)] hover:shadow-[0_0_25px_rgba(200,169,106,0.3)]"
          >
            Tanya via WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </div>
  );
};