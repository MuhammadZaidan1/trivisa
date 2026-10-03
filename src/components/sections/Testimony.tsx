// src/components/sections/Testimony.tsx
'use client';

import React from 'react';
import { Star } from 'lucide-react';
import ReactCountryFlag from "react-country-flag"; // Wajib import ini bos
import testimonialsData from '@/data/testimonials.json';
import { Testimonial } from '@/types';
import { SectionCTA } from '@/components/ui/SectionCTA';

export const Testimony = () => {
  const sortedTestimonials = [...(testimonialsData as Testimonial[])].sort(
    (a, b) => b.rating - a.rating
  );

  const row1Data = sortedTestimonials.filter((_, index) => index % 2 === 0);
  const row2Data = sortedTestimonials.filter((_, index) => index % 2 !== 0);

  const TestiCard = ({ testi }: { testi: Testimonial }) => (
    <div className="card-premium flex flex-col justify-between p-5 md:p-6 w-65 md:w-75 shrink-0 border-border-subtle/50 mx-2 md:mx-3 bg-card-bg/80 backdrop-blur-sm">
      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(testi.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-gold-primary" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="text-text-secondary text-sm italic mb-6 line-clamp-4">
          &ldquo;{testi.text}&rdquo;
        </p>
      </div>
      
      {/* REVISI: Bagian bawah kartu dirombak */}
      <div className="border-t border-border-subtle pt-3 mt-auto">
        <p className="font-bold text-white text-sm">{testi.name}</p>
        <div className="flex items-center justify-between mt-1.5">
          {/* Tanggal Testimoni */}
          <p className="text-xs text-text-muted">{testi.date}</p>
          
          {/* Bendera & Destinasi */}
          <div className="flex items-center gap-1.5">
            <ReactCountryFlag 
              countryCode={testi.countryCode} 
              svg 
              className="rounded-sm"
              style={{ width: '1.2em', height: 'auto' }} 
            />
            <span className="text-xs text-text-muted">{testi.destination}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimoni" className="py-12 md:py-16 bg-background-main overflow-hidden">
      
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 30s linear infinite;
        }
      `}</style>

      <div className="section-container px-0 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-white">
            Bukti Kepercayaan
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto">
            Lebih dari 100 perjalanan telah terwujud. Berikut adalah pengalaman mereka yang mempercayakan visanya kepada TRIVISA.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 pointer-events-none relative w-full">
        <div className="flex w-max animate-marquee-left">
          {[...row1Data, ...row1Data].map((testi, index) => (
            <TestiCard key={`row1-${index}`} testi={testi} />
          ))}
        </div>

        <div className="flex w-max animate-marquee-right">
          {[...row2Data, ...row2Data].map((testi, index) => (
            <TestiCard key={`row2-${index}`} testi={testi} />
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-linear-to-r from-background-main to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-linear-to-l from-background-main to-transparent z-10" />
      </div>

      {/* PANGGIL KOMPONEN CTA DI SINI */}
      <div className="section-container px-0 sm:px-6 lg:px-8 relative z-20">
        <SectionCTA />
      </div>

    </section>
  );
};