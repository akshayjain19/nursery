'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Categories', href: '/categories' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Contact Info',
      links: [
        { label: 'Phone: +91-9999999999', href: 'tel:+919999999999' },
        { label: 'Email: hello@nursery.com', href: 'mailto:hello@nursery.com' },
        {
          label: 'WhatsApp: +91-9999999999',
          href: 'https://wa.me/919999999999',
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center">
                <span className="text-lg">🌿</span>
              </div>
              <span className="font-display font-bold text-xl">Nursery</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your premium destination for healthy plants and garden supplies.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-display font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Social Links & Copyright */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                title={social.label}
                className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-lg">{social.icon}</span>
              </Link>
            ))}
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear} Nursery. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
