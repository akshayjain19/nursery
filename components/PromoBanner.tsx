'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function PromoBanner() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center bg-olive-700 px-8 py-12 text-white md:px-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Green spaces,
            <br />
            better places.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
            Curated plants to make every corner fresh, calm and alive. Free
            shipping across Indore with expert guidance on every order.
          </p>
          <div className="mt-8">
            <Link href="/about">
              <Button
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-olive-700"
              >
                Learn More →
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          <Image
            src="/images/peace-lily.jpg"
            alt="Plants in a living space"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
