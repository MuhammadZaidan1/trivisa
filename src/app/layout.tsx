// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
// REVISI: Import config global yang baru kita bikin
import { siteConfig } from "@/config/site"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#C8A96A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  // REVISI: Panggil URL dari siteConfig
  metadataBase: new URL(siteConfig.url), 
  
  alternates: {
    canonical: '/',
  },
  
  title: {
    // REVISI: Panggil nama web dari siteConfig
    default: `${siteConfig.name} | Jasa Pengurusan Visa Terpercaya & Cepat`,
    template: `%s | ${siteConfig.name}`
  },
  description: "Layanan pengurusan visa profesional dengan proses transparan, aman, dan pendampingan 24/7. Hubungi kami untuk kemudahan perjalanan global Anda.",
  keywords: ["jasa pembuatan visa", "agen visa terpercaya", "pengurusan visa cepat", "biro jasa visa", "trivisa", "bikin visa murah"],
  
  // REVISI: Panggil author/creator dari siteConfig
  authors: [{ name: `${siteConfig.name} Agency` }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Jasa Pengurusan Visa Terpercaya`,
    description: "Proses pembuatan visa cepat, aman, dan tanpa ribet. Konsultasi gratis sekarang!",
    images: [
      {
        url: "/images/background/map.jpeg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Layanan Pengurusan Visa`,
        type: "image/jpeg", 
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Jasa Pengurusan Visa`,
    description: "Proses pembuatan visa cepat, aman, dan tanpa ribet.",
    images: ["/images/background/map.jpeg"], 
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // REVISI: Sambungin kode verifikasi ke file .env
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-background-main text-text-primary font-body antialiased min-h-screen flex flex-col relative">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        
        <WhatsAppButton isSticky={true} source="sticky_global" />
        
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}