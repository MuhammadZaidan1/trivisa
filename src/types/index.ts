// src/types/index.ts

// ==========================================
// 1. NATIONS & PRICING TYPES
// ==========================================
export interface Pricing {
  serviceType: string;
  visaType: string[];
  amount: number;
  description: string;
}

export interface NationImages {
  card: string;
  hero: string;
}

export interface Nation {
  id: number;
  slug: string;
  name: string;
  countryCode: string;
  isPopular: boolean;
  images: NationImages;
  description: string;
  metaTitle: string;
  metaDescription: string;
  pricing: Pricing[];
}

// ==========================================
// 2. LANDING PAGE SECTIONS TYPES
// ==========================================

export interface Benefit {
  id: number;
  title: string;
  description: string;
  iconName: string; // Nama icon dari lucide-react, misal: 'Zap'
}

export interface Process {
  id: number;
  title: string;
  description: string;
  icon: string; // Sesuai dengan key "icon" di process.json lu
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  date: string;
  destination: string;
  countryCode: string;
  text: string;
  rating: number;
}