import businessConfig from '@/config/business.json';

interface LocationMapProps {
  className?: string;
}

export default function LocationMap({ className = '' }: LocationMapProps) {
  const query = encodeURIComponent(
    `${businessConfig.location.address}, ${businessConfig.location.city}, ${businessConfig.location.state} ${businessConfig.location.zipCode}`
  );

  return (
    <div className={`card-surface overflow-hidden ${className}`}>
      <div className="relative aspect-[16/10] w-full">
        <iframe
          title="Indore Nursery location on Google Maps"
          src={`https://maps.google.com/maps?q=${query}&hl=en&z=16&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
            Visit us
          </p>
          <p className="mt-1 text-sm text-white/65">
            {businessConfig.location.address}, {businessConfig.location.city}
          </p>
        </div>
        <a
          href={businessConfig.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-lime hover:underline"
        >
          Open in Maps →
        </a>
      </div>
    </div>
  );
}
