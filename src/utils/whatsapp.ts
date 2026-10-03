// src/utils/whatsapp.ts
import { siteConfig } from '@/config/site';

export const generateWALink = (
  type: 'general' | 'specific' | 'custom', // REVISI: Tambah opsi 'custom'
  payload1?: string, // Bisa berupa nationName ATAU customMessage
  payload2?: string  // Bisa berupa priceType
): string => {
  let message = "";

  if (type === 'custom' && payload1) {
    // Skenario 1: Jika dipanggil dengan custom message (dari PriceCard)
    message = payload1;
  } else if (type === 'specific' && payload1) {
    // Skenario 2: Format spesifik bawaan (buat jaga-jaga kalau dipakai)
    message = `Halo TRIVISA, saya ingin mengajukan visa ke ${payload1}.`;
    if (payload2) {
      message += `\nJenis Layanan: ${payload2}`;
    }
  } else {
    // Skenario 3: Default General (dari Navbar, Sticky, dll)
    message = "Halo TRIVISA, saya ingin konsultasi mengenai pengajuan visa.";
  }

  // Tarik nomor WA langsung dari config global
  const WA_NUMBER = siteConfig.contact.whatsapp;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
};