'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './Button';
import ForegroundLeaves from './ForegroundLeaves';
import businessConfig from '@/config/business.json';

const Plant3D = dynamic(() => import('./Plant3D'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-pulse rounded-full bg-lime/20" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-forest">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(18,53,40,0.6)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(212,248,44,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:min-h-[calc(100vh-5rem)] md:grid-cols-2 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-30"
        >
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-lime sm:text-6xl lg:text-7xl">
            Bring your next
            <br />
            plants home
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
            Find your dream plant for your home decoration with us, and we will
            make it happen. {businessConfig.tagline}.
          </p>
          <div className="mt-10">
            <Link href="/categories">
              <Button variant="lime" size="lg" className="rounded-full px-10">
                Explore More
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative z-10 mx-auto flex h-[360px] w-full max-w-md items-center justify-center sm:h-[400px] md:h-[460px] lg:max-w-lg lg:h-[500px]"
        >
          <div className="absolute inset-4 rounded-3xl border border-white/5 bg-forest-panel/50 backdrop-blur-sm" />
          <div className="relative z-10 h-full w-full min-h-[300px] p-6">
            <Plant3D />
          </div>
        </motion.div>
      </div>

      <ForegroundLeaves />
    </section>
  );
}
