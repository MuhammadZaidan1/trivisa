// src/components/ui/Button.tsx
import React from 'react';

// REVISI 1: Tambahin 'custom' di interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'custom'; 
  fullWidth?: boolean;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-gold-primary text-black hover:bg-gold-hover",
    secondary: "border-2 border-gold-primary text-gold-primary hover:bg-gold-primary/10",
    // REVISI 2: Variant custom dibiarin kosong biar gak ada warna yang tabrakan
    custom: "" 
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};