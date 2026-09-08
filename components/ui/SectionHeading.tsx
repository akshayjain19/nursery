interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  theme = 'light',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className={isDark ? 'text-lime' : 'text-olive-600'} aria-hidden>
          <LeafIcon />
        </span>
        <h2
          className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
            isDark ? 'text-white' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
        <span className={isDark ? 'text-lime' : 'text-olive-600'} aria-hidden>
          <LeafIcon />
        </span>
      </div>
      {subtitle && (
        <p
          className={`mx-auto max-w-2xl text-base md:text-lg ${
            isDark ? 'text-white/65' : 'text-stone'
          }`}
        >
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
