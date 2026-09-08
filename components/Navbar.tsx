'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { getWhatsAppChatLink } from '@/lib/utils';
import { useOpenWhatsApp } from '@/lib/use-open-whatsapp';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Plants', href: '/categories' },
  { label: 'Help', href: '/faq' },
  { label: 'Contact us', href: '/contact' },
];

interface NavbarProps {
  theme?: 'light' | 'dark';
}

export default function Navbar({ theme = 'dark' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const openWhatsApp = useOpenWhatsApp();
  const isDark = theme === 'dark';

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDark
          ? 'border-b border-white/5 bg-forest/90 backdrop-blur-md'
          : 'border-b border-cream-dark bg-cream/95 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo variant="header" />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-white/85 hover:text-lime'
                    : 'text-charcoal hover:text-olive-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  getWhatsAppChatLink(),
                  'Opening WhatsApp to chat with Indore Nursery.'
                )
              }
              className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all sm:block ${
                isDark
                  ? 'bg-teal text-white hover:bg-teal-light'
                  : 'bg-olive-600 text-white hover:bg-olive-700'
              }`}
            >
              Chat
            </button>
            <button
              type="button"
              className={isDark ? 'text-white lg:hidden' : 'text-charcoal lg:hidden'}
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
            className={`overflow-hidden border-t lg:hidden ${
              isDark
                ? 'border-white/10 bg-forest-light'
                : 'border-cream-dark bg-cream'
            }`}
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-2 py-3 text-sm font-medium ${
                    isDark
                      ? 'text-white/85 hover:text-lime'
                      : 'text-charcoal hover:text-olive-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openWhatsApp(
                    getWhatsAppChatLink(),
                    'Opening WhatsApp to chat with Indore Nursery.'
                  );
                }}
                className="mt-2 rounded-full bg-teal px-4 py-3 text-sm font-semibold text-white"
              >
                Chat on WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
