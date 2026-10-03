// src/components/sections/Process.tsx
import React from 'react';
import { icons } from 'lucide-react';
import processData from '@/data/process.json';
import { Process as ProcessType } from '@/types';
import { SectionCTA } from '@/components/ui/SectionCTA';

export const Process = () => {
  const Icon = ({ name, className }: { name: string; className?: string }) => {
    const LucideIcon = icons[name as keyof typeof icons];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} strokeWidth={1.5} />;
  };

  return (
    // ID tetap "layanan" agar link di Navbar tidak error
    <section id="layanan" className="py-12 md:py-16 bg-background-main relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container px-4 sm:px-6 lg:px-8 relative z-20 max-w-7xl mx-auto">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading text-white">
            Cara Kerja <span className="text-gold-primary">Kami</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Proses transparan dan bebas ribet. Kami mendesain 4 langkah mudah untuk memastikan visa Anda selesai tepat waktu tanpa kendala.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative mb-16 md:mb-24">
          
          {/* Garis Horizontal Penghubung (Hanya muncul di Desktop) */}
          <div className="hidden md:block absolute top-11.25 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-gold-primary/10 via-gold-primary/50 to-gold-primary/10 z-0" />

          {/* Garis Vertikal Penghubung (Hanya muncul di Mobile) */}
          <div className="block md:hidden absolute top-8 bottom-8 left-9.75 w-0.5 bg-linear-to-b from-gold-primary/10 via-gold-primary/30 to-gold-primary/10 z-0" />

          {/* Grid Layout: 1 Kolom di Mobile, 4 Kolom di Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {(processData as ProcessType[]).map((step, index) => (
              <div key={step.id} className="relative flex md:flex-col items-start md:items-center text-left md:text-center group">
                
                {/* Ikon & Nomor */}
                <div className="relative shrink-0 mr-6 md:mr-0 md:mb-6">
                  {/* Lingkaran Luar (Glow effect pas di-hover) */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-background-section border border-gold-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(200,169,106,0.1)] group-hover:shadow-[0_0_30px_rgba(200,169,106,0.3)] group-hover:border-gold-primary transition-all duration-500 relative z-10">
                    <Icon name={step.icon} className="w-8 h-8 md:w-10 md:h-10 text-gold-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Badge Nomor */}
                  <div className="absolute -top-2 -right-2 md:top-0 md:-right-2 w-7 h-7 rounded-lg bg-gold-primary text-black font-bold flex items-center justify-center text-sm shadow-lg z-20 border-[3px] border-background-main">
                    {index + 1}
                  </div>
                </div>

                {/* Teks Konten */}
                <div>
                  <h3 className="text-xl font-bold mb-2 font-heading text-white group-hover:text-gold-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Panggil komponen CTA di sini */}
        <SectionCTA />

      </div>
    </section>
  );
};