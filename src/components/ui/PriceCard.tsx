// src/components/ui/PriceCard.tsx
import { Pricing } from '@/types';
import { formatIDR } from '@/utils/format';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import ReactCountryFlag from "react-country-flag";

interface PriceCardProps {
  priceData: Pricing;
  nationName: string;
  countryCode: string; 
}

export const PriceCard = ({ priceData, nationName, countryCode }: PriceCardProps) => {
  // Karena visaType sekarang array, kita gabungin pakai '&' buat di pesan WA
  const visaTypesString = priceData.visaType.join(' & ');
  const customWAMessage = `Halo TRIVISA, saya tertarik dengan paket ${priceData.serviceType} - ${visaTypesString} untuk pembuatan Visa ${nationName}. Mohon informasi lebih lanjut.`;
  
  const gaSource = `pricing_${nationName.toLowerCase().replace(/\s+/g, '_')}_${priceData.serviceType.toLowerCase().replace(/\s+/g, '_')}`;

  return (
    <div className="card-premium flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      
      {/* 1. HEADER: Service Type & Flag + Nama Negara */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <span className="text-gold-primary text-xs font-bold uppercase tracking-wider mt-1.5">
          {priceData.serviceType}
        </span>
        
        {/* Tambahan kotak elegan buat Bendera + Nama Negara */}
        <div className="flex items-center gap-2 shrink-0 bg-background-main/40 px-2.5 py-1.5 rounded-lg border border-border-subtle">
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            {nationName}
          </span>
          <ReactCountryFlag 
            countryCode={countryCode} 
            svg 
            className="rounded-sm shadow-sm"
            style={{ width: '1.4em', height: 'auto' }} 
          />
        </div>
      </div>

      {/* 2. VISA TYPE BADGES (Mapping Array) */}
      <div className="flex flex-wrap gap-2 mb-5">
        {priceData.visaType.map((type, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg"
          >
            {type}
          </span>
        ))}
      </div>

      {/* 3. DESKRIPSI (Pakai flex-grow buat ngedorong harga ke bawah) */}
      <div className="grow mb-8">
        <p className="text-sm text-text-secondary leading-relaxed">
          {priceData.description}
        </p>
      </div>

      {/* 4. HARGA (Dipindah ke bawah sebagai penahan visual / jangkar) */}
      <div className="border-t border-border-subtle pt-6 mb-6 flex flex-col">
        <span className="text-sm text-text-muted font-medium mb-1">Mulai dari</span>
        <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">
          {formatIDR(priceData.amount)}
        </h3>
      </div>

      {/* 5. TOMBOL CTA */}
      <div className="mt-auto pt-2 flex justify-center w-full">
        <WhatsAppButton 
          source={gaSource}
          customMessage={customWAMessage}
          variant="primary"
          className="w-full sm:w-auto px-8 py-3 shadow-[0_0_15px_rgba(200,169,106,0.1)] hover:shadow-[0_0_25px_rgba(200,169,106,0.3)]"
        >
          Pilih Paket Ini
        </WhatsAppButton>
      </div>
      
    </div>
  );
};