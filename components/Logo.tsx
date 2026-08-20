import Image from 'next/image';
import Link from 'next/link';
import businessConfig from '@/config/business.json';

interface LogoProps {
  variant?: 'header' | 'footer';
  linked?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'header',
  linked = true,
  className = '',
}: LogoProps) {
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

  if (!linked) {
    return image;
  }

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      {image}
    </Link>
  );
}
