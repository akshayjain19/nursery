'use client';

import Image from 'next/image';
import Link from 'next/link';
import businessConfig from '@/config/business.json';
import products from '@/data/products.json';
import SectionHeading from './ui/SectionHeading';

const galleryImages = products.slice(0, 6);

export default function InstagramFeed() {
  const handle = businessConfig.socialMedia.instagram
    ? '@indorenursery'
    : '@indorenursery';

  return (
    <section className="bg-forest-mid py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Follow Our Green Journey"
          subtitle={handle}
          theme="dark"
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((product) => (
            <Link
              key={product.id}
              href={businessConfig.socialMedia.instagram ?? '/categories'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm bg-forest-panel"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
