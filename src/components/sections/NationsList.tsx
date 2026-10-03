// src/components/sections/NationsList.tsx
'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Nation } from '@/types';
import { NationCard } from '@/components/ui/NationCard';

interface NationsListProps {
  nations: Nation[];
}

export const NationsList = ({ nations }: NationsListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNations = nations.filter((nation) =>
    nation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="pb-8 md:pb-8">
      {/* Search Bar Section dengan Lucide Icon */}
      <div className="mb-8 md:mb-8">
        <div className="relative max-w-lg mx-auto group">
          <input
            type="text"
            placeholder="Cari negara tujuan (ex: Jepang, Korea)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background-section border border-border-subtle text-white pl-6 pr-14 py-4 rounded-lg focus:outline-none focus:border-gold-primary/50 transition-all duration-300 text-sm md:text-base placeholder:text-text-muted/50"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-gold-primary transition-colors w-5 h-5" />
        </div>
      </div>

      {/* Layout Grid-Flex: 2 Kolom (Mobile), 3 Kolom (Tablet), 4 Kolom (Desktop) */}
      {filteredNations.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {filteredNations.map((nation) => (
            <div 
              key={nation.id} 
              // REVISI: Kalkulasi persentase lebar agar presisi 4 kolom di desktop
              className="w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-70 transition-all duration-300"
            >
              <NationCard nation={nation} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border border-dashed border-border-subtle rounded-lg">
          <p className="text-text-muted italic text-sm md:text-base">
            Negara &ldquo;{searchQuery}&rdquo; belum tersedia atau tidak ditemukan.
          </p>
        </div>
      )}
    </section>
  );
};