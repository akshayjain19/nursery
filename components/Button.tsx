'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.12em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-olive-600 focus:ring-offset-2 focus:ring-offset-cream',
        {
          'bg-olive-600 text-white hover:bg-olive-700': variant === 'primary',
          'bg-olive-800 text-white hover:bg-olive-900': variant === 'secondary',
          'border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white':
            variant === 'outline',
          'text-olive-600 hover:bg-olive-50': variant === 'ghost',
        },
        {
          'px-4 py-2 text-[11px]': size === 'sm',
          'px-6 py-3 text-xs': size === 'md',
          'px-8 py-4 text-sm': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
