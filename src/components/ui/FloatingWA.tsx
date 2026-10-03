// src/components/ui/FloatingWA.tsx
'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { generateWALink } from '@/utils/whatsapp';

export const FloatingWA = () => {
  const waLink = generateWALink('general');

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Container Tombol Tanpa Efek Sinar Bising */}
      <div className="relative flex items-center justify-center">
        
        {/* REVISI: Efek Ping dihapus total. Bayangan dibuat lebih pekat dan natural. */}
        <div className="relative flex items-center gap-2 bg-gold-primary text-black px-4 py-4 md:p-4 rounded-full shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-gold-primary/50">
          
          {/* Ikon WA dengan hover halus */}
          <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />

          {/* Teks: Muncul di Mobile, Tersembunyi di Desktop */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold text-sm transition-all duration-500 ease-in-out md:group-hover:max-w-30 md:group-hover:ml-1 hidden md:block">
            Konsultasi
          </span>
          
          {/* Versi Mobile Selalu Muncul Teksnya */}
          <span className="font-bold text-sm block md:hidden">
            Konsultasi
          </span>

        </div>
      </div>
    </a>
  );
};