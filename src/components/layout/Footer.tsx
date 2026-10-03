// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
// REVISI: Import config global
import { siteConfig } from '@/config/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper untuk format nomor WA biar rapi di UI (dari 62812... jadi +62 812...)
  const formatPhoneNumber = (phone: string) => {
    if (phone.startsWith('62')) {
      return `+62 ${phone.substring(2)}`;
    }
    return phone;
  };

  return (
    <footer className="bg-background-main border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-3xl tracking-widest text-white">
                TRI<span className="text-gold-primary">VISA</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Mitra terpercaya untuk perjalanan global Anda. Kami menyederhanakan proses pengurusan visa dengan layanan transparan, cepat, dan profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-5 font-heading tracking-wide">Navigasi</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link href="/" className="hover:text-gold-primary transition-colors">Beranda</Link></li>
              <li><Link href="/nations" className="hover:text-gold-primary transition-colors">Destinasi</Link></li>
              <li><Link href="/#layanan" className="hover:text-gold-primary transition-colors">Layanan</Link></li>
              <li><Link href="/#faq" className="hover:text-gold-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-5 font-heading tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-start gap-3">
                <span className="text-gold-primary mt-0.5">✉</span>
                {/* REVISI: Tarik email dari config */}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary mt-0.5">☏</span>
                {/* REVISI: Tarik WA dari config dan diformat */}
                <span className="hover:text-white transition-colors cursor-default">
                  {formatPhoneNumber(siteConfig.contact.whatsapp)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary mt-0.5">⚲</span>
                {/* REVISI: Tarik alamat dari config */}
                <span className="leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};