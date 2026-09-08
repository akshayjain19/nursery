'use client';

import type { ReactNode } from 'react';
import { getWhatsAppChatLink } from '@/lib/utils';
import { useOpenWhatsApp } from '@/lib/use-open-whatsapp';
import Button from './Button';

interface WhatsAppChatButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: ReactNode;
  message?: string;
}

export default function WhatsAppChatButton({
  variant = 'primary',
  size = 'md',
  className,
  children = 'Chat on WhatsApp →',
  message,
}: WhatsAppChatButtonProps) {
  const openWhatsApp = useOpenWhatsApp();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() =>
        openWhatsApp(
          getWhatsAppChatLink(),
          message ??
            'Opening WhatsApp to chat with Indore Nursery. Ask us about plants, pricing, delivery, or care tips.'
        )
      }
    >
      {children}
    </Button>
  );
}
