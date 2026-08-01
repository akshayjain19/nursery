'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  emoji: string;
  count?: number;
  href?: string;
}

export default function CategoryCard({
  name,
  emoji,
  count,
  href = '/categories',
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`${href}?category=${encodeURIComponent(name)}`}>
        <div className="bg-white rounded-2xl p-8 text-center cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-300 group min-h-48 flex flex-col items-center justify-center">
          <motion.div
            className="text-6xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.div>

          <h3 className="font-display font-bold text-xl text-charcoal mb-2 group-hover:text-primary-500 transition-colors">
            {name}
          </h3>

          {count && (
            <p className="text-sm text-neutral-600">
              {count} {count === 1 ? 'product' : 'products'}
            </p>
          )}

          <div className="mt-4 inline-block px-4 py-2 bg-primary-50 text-primary-500 rounded-lg text-sm font-medium group-hover:bg-primary-500 group-hover:text-white transition-all">
            Browse →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
