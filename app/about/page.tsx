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
      <p>{businessConfig.about}</p>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {businessConfig.stats.map((stat) => (
          <div key={stat.label} className="card-surface p-6 text-center">
            <div className="font-display text-3xl font-bold text-lime">
              {stat.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.12em] text-white/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="card-surface mt-12 p-8">
        <h2 className="!mt-0 font-display text-2xl font-bold text-white">
          {businessConfig.mission}
        </h2>
        <p className="mt-4">
          Visit us in {businessConfig.location.city} or browse plants online. We
          protect and nurture every plant until it enters your home.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/categories">
            <Button variant="lime" className="rounded-full">
              Browse Plants
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
