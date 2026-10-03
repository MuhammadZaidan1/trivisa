// src/components/sections/Benefit.tsx
'use client';

import React from 'react';
import { icons } from 'lucide-react';
import benefitsData from '@/data/benefits.json';
import { Benefit as BenefitType } from '@/types';
import { SectionCTA } from '@/components/ui/SectionCTA';

export const Benefit = () => {
  const Icon = ({ name, className }: { name: string; className?: string }) => {
    const LucideIcon = icons[name as keyof typeof icons];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} strokeWidth={1.5} />;
  };

  return (
    <section id="benefit" className="bg-background-main py-12 md:py-16 border-t border-border-subtle relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
            Keunggulan Layanan <span className="text-gold-primary">Kami</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Kami memastikan pengalaman pengurusan visa Anda berjalan lancar dengan standar pelayanan premium dan pendampingan menyeluruh.
          </p>
        </div>

        {/* GRID SYSTEM:
            - Mobile: 1 Kolom (Vertical List) biar gampang dibaca pas scrolling.
            - Desktop: 3 Kolom (Horizontal Grid) agar compact.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {(benefitsData as BenefitType[]).map((benefit) => (
            <div 
              key={benefit.id} 
              // items-center: Menjaga ikon & teks tetap sejajar di tengah secara vertikal
              className="card-premium flex items-center rounded-lg text-left p-5 md:p-7 border-border-subtle/40 bg-background-section/30 backdrop-blur-sm hover:border-gold-primary/40 group transition-all duration-500 hover:-translate-y-1"
            >
              {/* IKON CONTAINER */}
              <div className="shrink-0 mr-5">
                <div className="p-4 rounded-lg bg-gold-primary/5 border border-gold-primary/10 group-hover:bg-gold-primary/10 group-hover:border-gold-primary/30 transition-all duration-500 shadow-inner">
                  <Icon 
                    name={benefit.iconName} 
                    className="w-7 h-7 text-gold-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" 
                  />
                </div>
              </div>
              
              {/* CONTENT */}
              <div className="flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-bold mb-1 font-heading text-white tracking-wide group-hover:text-gold-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed line-clamp-2 group-hover:text-text-primary transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionCTA />
        </div>

      </div>
    </section>
  );
};