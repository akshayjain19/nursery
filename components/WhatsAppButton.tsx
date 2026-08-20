'use client';

import { Product } from '@/types';
import { getWhatsAppLink } from '@/lib/utils';
import Link from 'next/link';
import Button from './Button';
import businessConfig from '@/config/business.json';

interface WhatsAppButtonProps {
  product: Product;
  phoneNumber?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WhatsAppButton({
  product,
  phoneNumber = businessConfig.contact.whatsapp,
  variant = 'primary',
  size = 'md',
  className,
}: WhatsAppButtonProps) {
  const whatsappLink = getWhatsAppLink(product, phoneNumber);

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          window.open(whatsappLink, '_blank');
        }}
      >
        💬 Enquire
      </Button>
    </Link>
  );
}
