// src/components/ui/WhatsAppButton.tsx
'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { generateWALink } from '@/utils/whatsapp';
import { trackGAEvent } from '@/utils/analytics';

interface WhatsAppButtonProps {
  source: string;
  customMessage?: string;
  variant?: 'primary' | 'custom';
  isSticky?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const WhatsAppButton = ({
  source,
  customMessage,
  variant = 'primary',
  isSticky = false,
  children = 'Konsultasi Gratis', // Gua tambahin 'Gratis' biar nambah konversi
  className = '',
}: WhatsAppButtonProps) => {
  
  const waLink = customMessage 
    ? generateWALink('custom', customMessage) 
    : generateWALink('general');

  const handleClick = () => {
    trackGAEvent('click_whatsapp', {
      button_source: source,
      button_type: isSticky ? 'sticky' : 'inline',
    });
  };

  if (isSticky) {
    return (
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 ${className}`}
      >
        <div className="flex items-center gap-2 bg-gold-primary text-black p-4 md:px-5 md:py-3 rounded-full md:rounded-lg shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-gold-primary/50">
          <MessageCircle className="w-6 h-6" strokeWidth={2} />
          <span className="font-bold text-sm hidden md:block whitespace-nowrap">
            Hubungi Kami
          </span>
        </div>
      </a>
    );
  }

  // RENDER 2: MODE NORMAL (Inline)
  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={handleClick}
      className="w-full sm:w-auto block sm:inline-block"
    >
      <Button 
        variant={variant} 
        fullWidth 
        className={`flex items-center justify-center gap-2 group w-full sm:w-auto ${
          variant === 'primary' ? 'shadow-[0_0_15px_rgba(200,169,106,0.15)] hover:shadow-[0_0_25px_rgba(200,169,106,0.3)]' : ''
        } ${className}`}
      >
        {children}
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
      </Button>
    </a>
  );
};