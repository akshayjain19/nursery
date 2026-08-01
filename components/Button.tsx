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
        'font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
            variant === 'primary',
          'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500':
            variant === 'secondary',
          'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500':
            variant === 'outline',
          'text-primary-500 hover:bg-primary-50 focus:ring-primary-500':
            variant === 'ghost',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
