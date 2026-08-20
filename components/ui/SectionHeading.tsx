interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="text-olive-600" aria-hidden>
          <LeafIcon />
        </span>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal uppercase">
          {title}
        </h2>
        <span className="text-olive-600" aria-hidden>
          <LeafIcon />
        </span>
      </div>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-stone text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function LeafIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
      <path d="M12 22V10" />
    </svg>
  );
}
