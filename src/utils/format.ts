// src/utils/format.ts

export const formatIDR = (amount: string | number): string => {
  // Membersihkan string dari titik/koma jika datanya string (contoh: "1.500.000")
  const numericAmount = typeof amount === 'string' 
    ? parseInt(amount.replace(/[^0-9]/g, ''), 10) 
    : amount;

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericAmount);
};