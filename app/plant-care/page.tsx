import ContentPage from '@/components/ContentPage';
import businessConfig from '@/config/business.json';

const careGuides = [
  {
    title: 'Watering basics',
    tips: [
      'Check the top inch of soil before watering — if it is dry, it is usually time to water.',
      'Water early morning or evening to reduce evaporation.',
      'Use pots with drainage holes to prevent root rot.',
      'It is easier for plants to recover from slight dryness than from overwatering.',
    ],
  },
  {
    title: 'Light & placement',
    tips: [
      'Group plants by light needs — low-light plants away from harsh afternoon sun.',
      'Watch for yellowing leaves (too much water or low light) and brown tips (dry air or underwatering).',
      'Rotate pots every few weeks so growth stays even.',
      'Keep plants away from direct AC or fan drafts.',
    ],
  },
  {
    title: 'Indoor plant care',
    tips: [
      'Snake Plant and Pothos are excellent beginner choices for Indore homes.',
      'Water only when the top soil feels dry to the touch.',
      'Wipe leaves occasionally to keep them dust-free and healthy.',
      'Feed lightly once a month during the growing season.',
    ],
  },
  {
    title: 'Seasonal plants in summer',
    tips: [
      'Most seasonal plants need water 2–3 times per week in summer.',
      'Let tap water sit for 24 hours before use to reduce chlorine.',
      'Mulch the topsoil to help retain moisture on hot days.',
      'Move delicate plants away from harsh midday sun.',
    ],
  },
];

export default function PlantCarePage() {
  return (
    <ContentPage
      eyebrow="Plant care"
      title="Plant Care Guide"
      description={`Expert tips from ${businessConfig.businessName} to help your plants thrive at home.`}
    >
      <div className="space-y-6">
        {careGuides.map((guide) => (
          <section
            key={guide.title}
            className="border border-cream-dark bg-white p-6"
          >
            <h2 className="font-serif text-2xl text-charcoal">{guide.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone">
              {guide.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-stone">
        Need personal advice?{' '}
        <a href="/contact" className="font-semibold text-olive-600 hover:underline">
          Contact us
        </a>{' '}
        or check our{' '}
        <a href="/faq" className="font-semibold text-olive-600 hover:underline">
          FAQs
        </a>{' '}
        for shipping and returns.
      </p>
    </ContentPage>
  );
}
