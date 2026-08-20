'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getCategoryImage } from '@/lib/category-images';

interface CategoryCardProps {
  name: string;
  href?: string;
}

export default function CategoryCard({
  name,
  href = '/categories',
}: CategoryCardProps) {
  const image = getCategoryImage(name);

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Link href={`${href}?category=${encodeURIComponent(name)}`} className="group block">
        <div className="overflow-hidden rounded-sm bg-white shadow-soft transition-shadow group-hover:shadow-soft-md">
          <div className="relative aspect-square overflow-hidden bg-cream-dark">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
          <div className="px-4 py-5 text-center">
            <h3 className="font-serif text-lg text-charcoal">{name}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-olive-600">
              Shop Now →
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
