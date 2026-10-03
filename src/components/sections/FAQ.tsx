// src/components/sections/FAQ.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqsData from '@/data/faqs.json';
import { FAQItem } from '@/types';
// Import CTA Component
import { SectionCTA } from '@/components/ui/SectionCTA';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-background-section border-t border-border-subtle">
      <div className="section-container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang paling sering diajukan seputar layanan pengurusan visa kami.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-8">
          {(faqsData as FAQItem[]).map((faq, index) => (
            <div 
              key={index} 
              className="border border-border-subtle md:border-none rounded-lg md:rounded-none bg-card-bg md:bg-transparent transition-colors md:hover:bg-transparent hover:border-gold-primary/30 overflow-hidden md:overflow-visible"
            >
              <button 
                className="w-full text-left px-6 py-5 md:p-0 flex justify-between items-start focus:outline-none md:pointer-events-none md:cursor-default"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-3 pr-4">
                  {/* REVISI: Titik Gold minimalis sebagai bullet point (mt disesuaikan agar sejajar teks) */}
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary shrink-0 mt-1.5 md:mt-2" />
                  
                  {/* REVISI: font-medium dan ukuran text-base untuk keterbacaan maksimal */}
                  <h3 className="font-medium text-text-primary text-sm md:text-base leading-snug">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Chevron Down (Hanya Mobile) */}
                <ChevronDown 
                  className={`w-5 h-5 text-gold-primary shrink-0 transition-transform duration-300 md:hidden ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out md:grid-rows-[1fr]! md:opacity-100! ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden md:overflow-visible">
                  {/* REVISI: Teks jawaban dikecilkan jadi text-sm, md:pl-[1.125rem] (18px) agar sejajar rapi dengan teks pertanyaan di atasnya */}
                  <p className="px-6 pb-6 md:p-0 md:pl-4.5 md:mt-2 text-text-muted text-xs md:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Panggil CTA Component */}
        <SectionCTA />

      </div>
    </section>
  );
};