'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './Button';
import businessConfig from '@/config/business.json';

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-2 text-olive-600">
            <LeafIcon />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Welcome
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-charcoal md:text-6xl lg:text-7xl">
            Bring Nature Home
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            {businessConfig.businessDescription}
          </p>
          <div className="mt-8">
            <Link href="/categories">
              <Button variant="primary" size="lg">
                Shop Now →
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-dark md:aspect-[5/6]"
        >
          <Image
            src="/images/monstera.jpg"
            alt="Indoor plants collection"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
      <path d="M12 22V10" />
    </svg>
  );
}
