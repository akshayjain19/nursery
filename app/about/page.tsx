'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import businessConfig from '@/config/business.json';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.p
            className="text-accent-500 font-display font-semibold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Know more about us
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About {businessConfig.businessName}
          </motion.h1>
          <motion.p
            className="text-lg text-neutral-700 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {businessConfig.about}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {businessConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center shadow-soft"
              >
                <div className="text-3xl font-display font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <h2 className="text-2xl font-display font-semibold text-charcoal mb-4">
              {businessConfig.mission}
            </h2>
            <p className="text-neutral-700 mb-6">
              Visit us in {businessConfig.location.city} or browse plants online.
              We protect and nurture every plant until it enters your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/categories">
                <Button variant="primary">Browse plants</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact us</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
