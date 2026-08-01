'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20 pb-10 md:pt-0 md:pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warmwhite to-secondary-50 -z-10" />

      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 -right-40 w-80 h-80 bg-accent-100 rounded-full filter blur-3xl opacity-30 -z-10"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 -left-40 w-80 h-80 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-accent-500 font-display font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Welcome to Our Nursery
            </motion.p>

            <motion.h1
              className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Bring Nature Home with Premium Plants
            </motion.h1>

            <motion.p
              className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover healthy, vibrant plants and garden essentials. From indoor plants to outdoor greenery, we have everything to transform your space.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link href="/categories">
                <Button variant="primary" size="lg">
                  Browse Plants
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.open('https://wa.me/919999999999', '_blank');
                }}
              >
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex gap-6 mt-12 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                '✓ Healthy Plants',
                '✓ Expert Guidance',
                '✓ Fast Delivery',
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-primary-600">
                  <span className="text-primary-500">✓</span>
                  {badge.replace('✓ ', '')}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="relative h-96 md:h-full min-h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-soft-lg">
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-8xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🌱
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
