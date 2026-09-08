'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
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
        'inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-olive-600 text-white hover:bg-olive-700 focus:ring-olive-600 focus:ring-offset-cream':
            variant === 'primary',
          'bg-olive-800 text-white hover:bg-olive-900 focus:ring-olive-800 focus:ring-offset-cream':
            variant === 'secondary',
          'border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white focus:ring-olive-600 focus:ring-offset-cream':
            variant === 'outline',
          'text-olive-600 hover:bg-olive-50': variant === 'ghost',
          'bg-lime text-forest hover:bg-lime-dim focus:ring-lime focus:ring-offset-forest font-bold':
            variant === 'lime',
        },
        {
          'px-4 py-2 text-[11px] uppercase tracking-[0.12em]': size === 'sm' && variant !== 'lime',
          'px-6 py-3 text-xs uppercase tracking-[0.12em]': size === 'md' && variant !== 'lime',
          'px-8 py-4 text-sm uppercase tracking-[0.12em]': size === 'lg' && variant !== 'lime',
          'px-6 py-3 text-sm': size === 'sm' && variant === 'lime',
          'px-8 py-3.5 text-base': size === 'md' && variant === 'lime',
          'px-10 py-4 text-base': size === 'lg' && variant === 'lime',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
