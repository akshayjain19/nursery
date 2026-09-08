import Image from 'next/image';
import Link from 'next/link';
import businessConfig from '@/config/business.json';

interface LogoProps {
  variant?: 'header' | 'footer';
  theme?: 'light' | 'dark';
  linked?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'header',
  theme = 'light',
  linked = true,
  className = '',
}: LogoProps) {
  if (theme === 'dark') {
    const textLogo = (
      <span
        className={`font-serif lowercase tracking-wide text-white ${
          variant === 'footer' ? 'text-2xl' : 'text-xl sm:text-2xl'
        } ${className}`}
      >
        <span className="relative">
          indore
          <LeafMark className="absolute -top-2 left-[2.1em] h-3 w-3 text-lime" />
        </span>
        <span className="ml-1">nursery</span>
      </span>
    );

    if (!linked) return textLogo;
    return (
      <Link href="/" className="inline-flex shrink-0 items-center">
        {textLogo}
      </Link>
    );
  }

  const image = (
    <Image
      src={businessConfig.logo}
      alt={businessConfig.businessName}
      width={790}
      height={325}
      priority={variant === 'header'}
      className={`h-auto w-auto object-contain ${
        variant === 'footer' ? 'max-h-[52px]' : 'max-h-[44px] sm:max-h-[48px]'
      } ${className}`}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      {image}
    </Link>
  );
}

function LeafMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8 6 4 10 4 14a4 4 0 0 0 8 0c0-2-2-4-4-6 2 2 4 4 6 4a4 4 0 0 0 8 0c0-4-4-8-8-12z" />
    </svg>
  );
}
