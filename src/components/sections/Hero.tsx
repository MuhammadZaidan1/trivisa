// src/components/sections/Hero.tsx
import React from 'react';
import { icons } from 'lucide-react';
import benefitsData from '@/data/benefits.json';
import { Benefit as BenefitType } from '@/types';
import { SectionCTA } from '@/components/ui/SectionCTA';

export const Hero = () => {
  const targetIds = [1, 5, 2, 3];
  const heroBenefits = targetIds.map(id => 
    (benefitsData as BenefitType[]).find(b => b.id === id)
  ).filter(Boolean) as BenefitType[];

  const Icon = ({ name, className }: { name: string; className?: string }) => {
    const LucideIcon = icons[name as keyof typeof icons];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} strokeWidth={1.5} />;
  };

  return (
    <section className="relative flex items-center justify-center pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background/map.jpeg')" }} 
      >
        <div className="absolute inset-0 bg-background-main/80 bg-linear-to-t from-background-main via-background-main/60 to-transparent z-10" />
      </div>

      <div className="section-container relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.1] text-white drop-shadow-lg max-w-4xl mx-auto">
          Urus Visa ke Luar Negri, <br className="hidden sm:block" />
          <span className="text-gold-primary italic font-heading">Cepat & Bebas Ribet.</span>
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-fit mx-auto place-items-center">
          {heroBenefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="flex flex-col items-center justify-center gap-2 w-27.5 sm:w-30 md:w-32.5 min-h-22.5 md:min-h-25 p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold-primary/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <Icon 
                name={benefit.iconName} 
                className="w-6 h-6 md:w-7 md:h-7 text-gold-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
              />
              
              <h3 className="text-white text-[11px] sm:text-xs font-bold font-heading text-center leading-tight tracking-wide px-1">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <SectionCTA />
        
      </div>
    </section>
  );
};