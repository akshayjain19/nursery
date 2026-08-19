'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import businessConfig from '@/config/business.json';

const faqs = [
  {
    q: 'Do you offer free shipping in Indore?',
    a: 'Yes. Indore Nursery offers free shipping in Indore. Extra delivery charges may apply if the address is more than 10 km from our warehouse at 663/2 LIG Link Road, Radhakunj Colony, Indore, or if the order weighs more than 30 kg.',
  },
  {
    q: 'How quickly do you ship?',
    a: 'Orders are typically handed over to the courier or post office within 0–2 days of order confirmation, or by the delivery date agreed at confirmation. Delivery timing after that depends on the courier.',
  },
  {
    q: 'How can I get expert plant guidance?',
    a: 'We hand-hold you through the plant world. Call or WhatsApp us on +91 8305449559, or email info@indorenursery.com, for help choosing and caring for plants.',
  },
  {
    q: 'Are product photos exactly what I will receive?',
    a: 'Images are for reference only. The actual plant may vary in shape or appearance based on climate, age, and height. Some plants are delicate and a few leaves may break in transit; that is not treated as damage.',
  },
  {
    q: 'Can pot colours be exchanged?',
    a: 'Pot colours can change based on availability. Colour changes after delivery are not exchanged as a rule; if an exchange is agreed, extra delivery charges apply.',
  },
  {
    q: 'What is your return window?',
    a: 'Returns must be postmarked within ten days of purchase, in unused condition with original tags. Email info@indorenursery.com for a return authorisation. Discounted or coupon orders are not eligible for refund or return.',
  },
  {
    q: 'Which plants are good for beginners?',
    a: 'Snake Plant is a strong starting choice — it needs little water and light. Pothos and similar easy indoor plants also do well in low-light homes. Water only when the top soil is dry.',
  },
  {
    q: 'How often should I water seasonal plants in summer?',
    a: 'Most seasonal plants need water 2–3 times per week in summer, based on soil moisture. Water early morning or evening. Tap water is fine if you let it sit 24 hours to reduce chlorine.',
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Frequently asked questions
          </h1>
          <p className="text-lg text-neutral-700 mb-10">
            Answers from {businessConfig.businessName} policies and plant-care
            guidance.
          </p>
          <div className="space-y-6">
            {faqs.map((item) => (
              <section
                key={item.q}
                className="bg-white rounded-xl p-6 shadow-soft"
              >
                <h2 className="text-xl font-display font-semibold text-charcoal mb-3">
                  {item.q}
                </h2>
                <p className="text-neutral-700 leading-relaxed">{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
