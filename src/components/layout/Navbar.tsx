// src/components/layout/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // MessageCircle dihapus karena udah di dalam WhatsAppButton
// REVISI: Import WhatsAppButton Sakti
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // waLink dihapus karena sudah di-handle di dalam WhatsAppButton

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Destinasi', href: '/nations' },
    { name: 'Layanan', href: '/#layanan' },
    { name: 'Keunggulan', href: '/#benefit' },
    { name: 'Testimoni', href: '/#testimoni' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-main/95 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-10">
          
          {/* KIRI: Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <span className="font-heading font-bold text-2xl md:text-3xl tracking-widest text-white">
              TRI<span className="text-gold-primary">VISA</span>
            </span>
          </Link>

          {/* TENGAH: Desktop Navigation */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 xl:space-x-8 w-max">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-text-secondary hover:text-gold-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* KANAN: CTA Button Desktop */}
          <div className="hidden lg:flex relative z-10 items-center">
            {/* REVISI: Menggunakan WhatsAppButton Sakti */}
            <WhatsAppButton 
              source="navbar_desktop"
              variant="primary" 
              className="py-2.5 px-6 text-sm"
            >
              Konsultasi Gratis
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-10 flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" strokeWidth={1.5} />
              ) : (
                <Menu className="w-7 h-7" strokeWidth={1.5} />
              )}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-background-main border-b border-border-subtle transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl bg-background-main">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-text-secondary hover:text-gold-primary transition-colors py-2 font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border-subtle">
            {/* REVISI: Menggunakan WhatsAppButton untuk Mobile, dibungkus div dengan onClick agar menu tertutup saat diklik */}
            <div onClick={() => setIsMobileMenuOpen(false)}>
              <WhatsAppButton 
                source="navbar_mobile"
                variant="primary" 
                className="w-full py-3 mt-2"
              >
                Konsultasi via WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};