'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import businessConfig from '@/config/business.json';
import { getWhatsAppChatLink } from '@/lib/utils';
import { motion } from 'framer-motion';

const fullAddress = `${businessConfig.location.address}, ${businessConfig.location.city}, ${businessConfig.location.state} ${businessConfig.location.zipCode}`;

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact us
          </motion.h1>
          <p className="text-lg text-neutral-700 mb-12">
            Get in touch with {businessConfig.businessName}. We are happy to help
            with plant selection, care guidance, and orders.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h2 className="font-display font-semibold text-charcoal mb-2">
                Address
              </h2>
              <p className="text-neutral-700 mb-4">{fullAddress}</p>
              <a
                href={businessConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:underline"
              >
                Get directions
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h2 className="font-display font-semibold text-charcoal mb-2">
                Phone
              </h2>
              <a
                href={`tel:${businessConfig.contact.phone.replace(/\s/g, '')}`}
                className="text-neutral-700 hover:text-primary-600"
              >
                {businessConfig.contact.phone}
              </a>
              <h2 className="font-display font-semibold text-charcoal mt-6 mb-2">
                Email
              </h2>
              <p>
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="text-neutral-700 hover:text-primary-600"
                >
                  {businessConfig.contact.email}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${businessConfig.contact.supportEmail}`}
                  className="text-neutral-700 hover:text-primary-600"
                >
                  {businessConfig.contact.supportEmail}
                </a>
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(getWhatsAppChatLink(), '_blank')}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
