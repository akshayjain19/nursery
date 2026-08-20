'use client';

import { useState } from 'react';
import Button from './Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="border-y border-cream-dark bg-cream py-14 md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div className="text-olive-600">
          <EnvelopeIcon />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-charcoal md:text-3xl">
            Let&apos;s Grow Together
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone md:text-base">
            Subscribe for plant care tips, new arrivals and exclusive offers.
          </p>
        </div>
        <form
          className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setEmail('');
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="flex-1 border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-olive-600"
            required
          />
          <Button type="submit" variant="primary" size="md">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
