'use client';

import businessConfig from '@/config/business.json';
import {
  CareIcon,
  DeliveryIcon,
  QualityIcon,
  SelectionIcon,
} from './ui/FeatureIcons';

const icons = [SelectionIcon, QualityIcon, DeliveryIcon, CareIcon];

const featureTitles = [
  'Wide Selection',
  'Premium Quality',
  'Safe Delivery',
  'Plant Care Support',
];

const featureDescriptions = [
  'Find the perfect plant for every space.',
  'Healthy, handpicked and carefully potted.',
  'Secure packaging. Delivered with care.',
  'Expert tips to help your plants thrive.',
];

export default function FeaturesBar() {
  const items = businessConfig.whyChooseUs.map((item, index) => ({
    title: featureTitles[index] ?? item.title,
    description: featureDescriptions[index] ?? item.description,
    Icon: icons[index] ?? SelectionIcon,
  }));

  return (
    <section className="border-y border-cream-dark bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center text-olive-600">
              <item.Icon />
            </div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-stone">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
