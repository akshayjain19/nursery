'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { getWhatsAppChatLink } from '@/lib/utils';
import { useOpenWhatsApp } from '@/lib/use-open-whatsapp';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/categories' },
  { label: 'Plants', href: '/categories?category=Indoor Plants' },
  {
    label: 'Pots & Accessories',
    href: '/categories?category=Garden Accessories',
  },
  { label: 'About Us', href: '/about' },
  { label: 'Plant Care', href: '/plant-care' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const openWhatsApp = useOpenWhatsApp();

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark bg-cream/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo variant="header" />

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-olive-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/categories"
              className="hidden text-charcoal transition-colors hover:text-olive-600 sm:block"
              aria-label="Search plants"
            >
              <SearchIcon />
            </Link>
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  getWhatsAppChatLink(),
                  'Opening WhatsApp to chat with Indore Nursery. Ask us about plants, pricing, delivery, or care tips.'
                )
              }
              className="hidden text-charcoal transition-colors hover:text-olive-600 sm:block"
              aria-label="Chat on WhatsApp"
            >
              <ChatIcon />
            </button>
            <button
              type="button"
              className="text-charcoal lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-cream-dark bg-cream lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal hover:text-olive-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2 8.5 8.5 0 0 1-7.4 4.3 8.4 8.4 0 0 1-4.2-1.1L3 21l1.1-5.3A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3 8.5 8.5 0 0 1 21 11.5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
