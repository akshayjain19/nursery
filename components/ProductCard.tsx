'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  showRating?: boolean;
}

function getRating(productId: number) {
  const rating = 4 + (productId % 2) * 0.5;
  const reviews = 40 + productId * 17;
  return { rating, reviews };
}

export default function ProductCard({
  product,
  showRating = true,
}: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [liked, setLiked] = useState(false);
  const { rating, reviews } = getRating(product.id);

  return (
    <motion.article
      className="group bg-white"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-sm bg-cream-dark">
          {imageFailed ? (
            <div className="flex h-full w-full items-center justify-center text-5xl">
              🌿
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 16vw"
              onError={() => setImageFailed(true)}
            />
          )}
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setLiked((value) => !value);
            }}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-charcoal transition-colors hover:text-olive-600"
            aria-label="Add to wishlist"
          >
            <HeartIcon filled={liked} />
          </button>
        </div>
      </Link>

      <div className="px-1 py-4 text-center">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-serif text-base text-charcoal transition-colors hover:text-olive-600 md:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm font-semibold text-charcoal">
          {formatPrice(product.price)}
        </p>
        {showRating && (
          <div className="mt-2 flex items-center justify-center gap-1 text-xs text-stone">
            <StarRow rating={rating} />
            <span>({reviews})</span>
          </div>
        )}
        <div className="mt-4">
          <WhatsAppButton
            product={product}
            variant="outline"
            size="sm"
            className="w-full"
          />
        </div>
      </div>
    </motion.article>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 21s-7-4.4-9.2-8.8C1.2 8.7 3.6 5 7.1 5c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3.5 0 5.9 3.7 4.3 7.2C19 16.6 12 21 12 21z" />
    </svg>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="flex text-olive-600">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}
