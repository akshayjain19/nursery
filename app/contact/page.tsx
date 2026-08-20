'use client';

import ContentPage from '@/components/ContentPage';
import Button from '@/components/Button';
import businessConfig from '@/config/business.json';
import { getWhatsAppChatLink } from '@/lib/utils';

const fullAddress = `${businessConfig.location.address}, ${businessConfig.location.city}, ${businessConfig.location.state} ${businessConfig.location.zipCode}`;

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Get in touch"
      title="Contact Us"
      description={`We are happy to help with plant selection, care guidance, and orders.`}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-cream-dark bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
            Address
          </h2>
          <p className="mt-3 text-stone">{fullAddress}</p>
          <a
            href={businessConfig.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-olive-600 hover:underline"
          >
            Get Directions →
          </a>
        </div>
        <div className="border border-cream-dark bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
            Phone
          </h2>
          <a
            href={`tel:${businessConfig.contact.phone.replace(/\s/g, '')}`}
            className="mt-3 block text-stone hover:text-olive-600"
          >
            {businessConfig.contact.phone}
          </a>
          <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
            Email
          </h2>
          <a
            href={`mailto:${businessConfig.contact.email}`}
            className="mt-3 block text-stone hover:text-olive-600"
          >
            {businessConfig.contact.email}
          </a>
          <a
            href={`mailto:${businessConfig.contact.supportEmail}`}
            className="mt-1 block text-stone hover:text-olive-600"
          >
            {businessConfig.contact.supportEmail}
          </a>
        </div>
      </div>

      <div className="mt-8">
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open(getWhatsAppChatLink(), '_blank')}
        >
          Chat on WhatsApp →
        </Button>
      </div>
    </ContentPage>
  );
}
