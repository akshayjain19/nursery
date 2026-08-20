'use client';

import { useToast } from '@/components/ToastProvider';

export function useOpenWhatsApp() {
  const { showToast } = useToast();

  return (
    url: string,
    toastMessage = 'Opening WhatsApp to chat with Indore Nursery. You can ask about plants, pricing, or delivery.'
  ) => {
    showToast(toastMessage);
    window.setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 700);
  };
}
