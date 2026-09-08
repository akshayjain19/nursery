'use client';

import Link from 'next/link';
import Logo from './Logo';
import businessConfig from '@/config/business.json';
import { SocialIcon } from './ui/SocialIcons';
import WhatsAppChatButton from './WhatsAppChatButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-forest-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="footer" theme="dark" />
            <div className="mt-6 flex gap-3">
              {businessConfig.socialMedia.instagram && (
                <SocialLink
                  href={businessConfig.socialMedia.instagram}
                  label="Instagram"
                  platform="instagram"
                />
              )}
              {businessConfig.socialMedia.facebook && (
                <SocialLink
                  href={businessConfig.socialMedia.facebook}
                  label="Facebook"
                  platform="facebook"
                />
              )}
            </div>
          </div>

          <FooterColumn
            title="Quick Links"
            links={[
              { label: 'About Us', href: '/about' },
              { label: 'Shop', href: '/categories' },
              { label: 'Plant Care', href: '/plant-care' },
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
            ]}
          />

          <div className="flex flex-col items-start justify-start gap-4 lg:items-end">
            <WhatsAppChatButton variant="lime" size="sm" className="rounded-full" />
            <p className="font-serif text-xl italic text-lime/80">
              thank you for supporting green living ♡
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/45">
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
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-lime"
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
  platform,
}: {
  href: string;
  label: string;
  platform: 'instagram' | 'facebook';
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-lime/40 text-lime transition-colors hover:bg-lime hover:text-forest"
    >
      <SocialIcon platform={platform} />
    </Link>
  );
}
