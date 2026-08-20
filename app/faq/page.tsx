import ContentPage from '@/components/ContentPage';
import businessConfig from '@/config/business.json';

const faqs = [
  {
    q: 'Do you offer free shipping in Indore?',
    a: 'Yes. Indore Nursery offers free shipping in Indore. Extra delivery charges may apply if the address is more than 10 km from our warehouse at 663/2 LIG Link Road, Radhakunj Colony, Indore, or if the order weighs more than 30 kg.',
  },
  {
    q: 'How quickly do you ship?',
    a: 'Orders are typically handed over to the courier or post office within 0–2 days of order confirmation, or by the delivery date agreed at confirmation.',
  },
  {
    q: 'How can I get expert plant guidance?',
    a: 'We hand-hold you through the plant world. Call or WhatsApp us on +91 8305449559, or email info@indorenursery.com, for help choosing and caring for plants.',
  },
  {
    q: 'Are product photos exactly what I will receive?',
    a: 'Images are for reference only. The actual plant may vary in shape or appearance based on climate, age, and height.',
  },
  {
    q: 'Can pot colours be exchanged?',
    a: 'Pot colours can change based on availability. Colour changes after delivery are not exchanged as a rule; if an exchange is agreed, extra delivery charges apply.',
  },
  {
    q: 'What is your return window?',
    a: 'Returns must be postmarked within ten days of purchase, in unused condition with original tags. Email info@indorenursery.com for a return authorisation.',
  },
  {
    q: 'Which plants are good for beginners?',
    a: 'Snake Plant is a strong starting choice — it needs little water and light. Pothos and similar easy indoor plants also do well in low-light homes.',
  },
  {
    q: 'How often should I water seasonal plants in summer?',
    a: 'Most seasonal plants need water 2–3 times per week in summer, based on soil moisture. Water early morning or evening.',
  },
];

export default function FaqPage() {
  return (
    <ContentPage
      eyebrow="Help"
      title="Frequently Asked Questions"
      description={`Answers from ${businessConfig.businessName} policies and plant-care guidance.`}
    >
      <div className="space-y-4">
        {faqs.map((item) => (
          <section
            key={item.q}
            className="border border-cream-dark bg-white p-6"
          >
            <h2 className="font-serif text-xl text-charcoal">{item.q}</h2>
            <p className="mt-3 leading-relaxed text-stone">{item.a}</p>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
