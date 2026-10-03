// src/utils/analytics.ts

// Kita kenalin fungsi gtag ke TypeScript agar tidak dianggap error di object window
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Fungsi untuk mengirim custom event ke Google Analytics 4
 * @param eventName Nama event (cth: 'click_wa')
 * @param eventParams Parameter tambahan (cth: { source: 'navbar', country: 'jepang' })
 */
export const trackGAEvent = (
  eventName: string,
  eventParams?: Record<string, unknown> // REVISI: Mengganti 'any' dengan 'unknown'
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Tanpa perlu di-cast as any lagi, TypeScript sekarang udah paham
    window.gtag('event', eventName, eventParams);
  } else {
    // Mode fallback/debug kalau script GA belum load atau diblokir AdBlock
    console.log(`[GA Tracking] Event: ${eventName}`, eventParams);
  }
};