'use client';

import { Product } from '@/types';
import { getWhatsAppLink } from '@/lib/utils';
import { useOpenWhatsApp } from '@/lib/use-open-whatsapp';
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
  const openWhatsApp = useOpenWhatsApp();
  const whatsappLink = getWhatsAppLink(product, phoneNumber);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() =>
        openWhatsApp(
          whatsappLink,
          `Opening WhatsApp to enquire about ${product.name}. Your message will be pre-filled with product details.`
        )
      }
    >
      💬 Enquire
    </Button>
  );
}
