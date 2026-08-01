import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nursery - Premium Plants & Garden Supplies',
  description:
    'Discover premium plants, seeds, and garden supplies. Shop healthy indoor and outdoor plants with expert guidance.',
  icons: {
    icon: '/favicon.ico',
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
        {children}
      </body>
    </html>
  );
}
