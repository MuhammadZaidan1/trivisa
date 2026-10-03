// src/components/ui/NationCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import ReactCountryFlag from "react-country-flag";
import { Nation } from '@/types';

interface NationCardProps {
  nation: Nation;
}

export const NationCard = ({ nation }: NationCardProps) => {
  return (
    <Link href={`/pricing/${nation.slug}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-lg bg-background-section h-full border border-border-subtle/50 transition-colors hover:border-gold-primary/30">
        
        {/* Digembok mati di rasio 3:4 */}
        <div className="relative w-full aspect-3/4">
          <Image 
            src={nation.images.card} 
            alt={`Jasa Visa ${nation.name}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute top-4 left-4 z-20 drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
            <ReactCountryFlag 
              countryCode={nation.countryCode} 
              svg 
              className="rounded-sm"
              style={{ width: '2.5em', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className="absolute bottom-5 left-5 z-10">
            <h3 className="text-lg md:text-xl text-white font-heading font-bold tracking-wide">
              {nation.name}
            </h3>
            <div className="w-6 h-0.5 bg-gold-primary mt-2 transition-all duration-300 group-hover:w-12" />
          </div>
        </div>

      </div>
    </Link>
  );
};