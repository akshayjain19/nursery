'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import businessConfig from '@/config/business.json';
import { getWhatsAppChatLink } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-charcoal">
              {businessConfig.businessName.toLowerCase().replace(' ', '')}.
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-stone">
              plants for life
            </p>
            <div className="mt-6 flex gap-3">
              {businessConfig.socialMedia.instagram && (
                <SocialLink href={businessConfig.socialMedia.instagram} label="Instagram">
                  IG
                </SocialLink>
              )}
              {businessConfig.socialMedia.facebook && (
                <SocialLink href={businessConfig.socialMedia.facebook} label="Facebook">
                  FB
                </SocialLink>
              )}
            </div>
          </div>

          <FooterColumn
            title="Quick Links"
            links={[
              { label: 'About Us', href: '/about' },
              { label: 'Shop', href: '/categories' },
              { label: 'Plant Care', href: '/faq' },
              { label: 'Contact', href: '/contact' },
            ]}
          />

          <FooterColumn
            title="Help"
            links={[
              { label: 'FAQs', href: '/faq' },
              { label: 'Shipping & Delivery', href: '/shipping' },
              { label: 'Returns & Refunds', href: '/returns' },
              { label: 'Terms & Conditions', href: '/terms' },
            ]}
          />

          <FooterColumn
            title="Customer Care"
            links={[
              {
                label: businessConfig.contact.phone,
                href: `tel:${businessConfig.contact.phone.replace(/\s/g, '')}`,
              },
              {
                label: businessConfig.contact.email,
                href: `mailto:${businessConfig.contact.email}`,
              },
              {
                label: 'Chat on WhatsApp',
                href: getWhatsAppChatLink(),
              },
            ]}
          />

          <div className="flex items-start justify-start lg:justify-end">
            <p className="font-serif text-xl italic text-olive-600">
              thank you for supporting green living ♡
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream pt-6 text-center text-xs text-stone">
          © {currentYear} {businessConfig.businessName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-stone transition-colors hover:text-olive-600"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-olive-600 text-[10px] font-bold text-olive-600 transition-colors hover:bg-olive-600 hover:text-white"
    >
      {children}
    </Link>
  );
}
