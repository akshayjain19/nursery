'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './Button';
import businessConfig from '@/config/business.json';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌿</span>
              </div>
              <span className="font-display font-bold text-xl text-charcoal hidden sm:inline">
                Nursery
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href="/"
              className="text-charcoal hover:text-primary-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-charcoal hover:text-primary-500 font-medium transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#about"
              className="text-charcoal hover:text-primary-500 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-charcoal hover:text-primary-500 font-medium transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const phoneNumber = businessConfig.contact.whatsapp.replace('+', '');
                window.open(`https://wa.me/${phoneNumber}`, '_blank');
              }}
              className="hidden sm:inline-block"
            >
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
