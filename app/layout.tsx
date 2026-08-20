import type { Metadata } from 'next';
import './globals.css';
import businessConfig from '@/config/business.json';
import { ToastProvider } from '@/components/ToastProvider';

export const metadata: Metadata = {
  title: 'Indore Nursery - Premium Plants & Garden Supplies',
  description:
    'Discover premium plants and garden essentials in Indore. Shop healthy indoor, outdoor, and exotic plants with expert guidance.',
  icons: {
    icon: businessConfig.logoIcon,
    apple: businessConfig.logoIcon,
  },
  openGraph: {
    title: 'Indore Nursery - Premium Plants & Garden Supplies',
    description:
      'Best plant nursery in Indore. Fresh, healthy plants delivered to your doorstep.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
