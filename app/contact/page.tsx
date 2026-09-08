'use client';

import ContentPage from '@/components/ContentPage';
import LocationMap from '@/components/LocationMap';
import WhatsAppChatButton from '@/components/WhatsAppChatButton';
import businessConfig from '@/config/business.json';

const fullAddress = `${businessConfig.location.address}, ${businessConfig.location.city}, ${businessConfig.location.state} ${businessConfig.location.zipCode}`;

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Get in touch"
      title="Contact Us"
      description="We are happy to help with plant selection, care guidance, and orders."
    >
      <LocationMap className="mb-8" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-surface p-6">
          <h2 className="!mt-0 text-xs font-bold uppercase tracking-[0.16em] text-lime">
            Address
          </h2>
          <p className="mt-3">{fullAddress}</p>
          <a
            href={businessConfig.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.12em]"
          >
            Get Directions →
          </a>
        </div>
        <div className="card-surface p-6">
          <h2 className="!mt-0 text-xs font-bold uppercase tracking-[0.16em] text-lime">
            Phone
          </h2>
          <a
            href={`tel:${businessConfig.contact.phone.replace(/\s/g, '')}`}
            className="mt-3 block hover:text-lime"
          >
            {businessConfig.contact.phone}
          </a>
          <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-lime">
            Email
          </h2>
          <a
            href={`mailto:${businessConfig.contact.email}`}
            className="mt-3 block hover:text-lime"
          >
            {businessConfig.contact.email}
          </a>
          <a
            href={`mailto:${businessConfig.contact.supportEmail}`}
            className="mt-1 block hover:text-lime"
          >
            {businessConfig.contact.supportEmail}
          </a>
        </div>
      </div>

      <div className="mt-8">
        <WhatsAppChatButton variant="lime" size="lg" className="rounded-full" />
      </div>
    </ContentPage>
  );
}
