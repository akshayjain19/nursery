import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';

interface ContentPageProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: ContentPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
