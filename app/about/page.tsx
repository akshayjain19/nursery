import Link from 'next/link';
import ContentPage from '@/components/ContentPage';
import Button from '@/components/Button';
import businessConfig from '@/config/business.json';

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="Know more about us"
      title={`About ${businessConfig.businessName}`}
      description={businessConfig.mission}
    >
      <p className="text-lg leading-relaxed text-stone">{businessConfig.about}</p>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {businessConfig.stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-cream-dark bg-white p-6 text-center"
          >
            <div className="font-serif text-3xl text-olive-600">{stat.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.12em] text-stone">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-cream-dark bg-white p-8">
        <h2 className="font-serif text-2xl text-charcoal">{businessConfig.mission}</h2>
        <p className="mt-4 text-stone">
          Visit us in {businessConfig.location.city} or browse plants online. We
          protect and nurture every plant until it enters your home.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/categories">
            <Button variant="primary">Browse Plants</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
