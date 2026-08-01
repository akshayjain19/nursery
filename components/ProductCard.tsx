'use client';

import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  onImageClick?: () => void;
}

export default function ProductCard({
  product,
  onImageClick,
}: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-soft-md transition-shadow duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="relative w-full h-48 bg-gray-100 cursor-pointer group overflow-hidden rounded-t-xl"
        onClick={onImageClick}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-secondary-600 font-medium mb-1">
          {product.category}
        </p>

        <h3 className="text-lg font-display font-semibold text-charcoal mb-2 line-clamp-2">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-accent-500">
            {formatPrice(product.price)}
          </span>
        </div>

        <WhatsAppButton
          product={product}
          variant="primary"
          size="md"
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
