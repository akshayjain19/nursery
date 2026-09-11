'use client';

import { Lottie } from 'lottie-react';
import { useEffect, useState } from 'react';

const LOTTIE_CANDIDATES = ['/lottie/hero-plant.json', '/lottie/hero-plant'];

export default function HeroPlant() {
  const [src, setSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function resolveLottiePath() {
      for (const path of LOTTIE_CANDIDATES) {
        try {
          const response = await fetch(path, { method: 'HEAD' });
          if (response.ok) {
            if (!cancelled) setSrc(path);
            return;
          }
        } catch {
          // try next path
        }
      }
      if (!cancelled) setError(true);
    }

    resolveLottiePath();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-2 p-4 text-center text-sm text-white/55">
        <p>Lottie file not found.</p>
        <p className="text-xs text-white/40">
          Save as{' '}
          <code className="text-lime/80">public/lottie/hero-plant.json</code>
        </p>
        <p className="text-xs text-white/40">
          Then run <code className="text-lime/80">git pull origin dev</code> and{' '}
          <code className="text-lime/80">npm install</code>
        </p>
      </div>
    );
  }

  if (!src) {
    return (
      <div className="flex h-full min-h-[280px] w-full items-center justify-center">
        <div className="h-12 w-12 animate-pulse rounded-full bg-lime/20" />
      </div>
    );
  }

  return (
    <Lottie
      src={src}
      loop
      autoplay
      className="mx-auto h-full w-full min-h-[280px] max-h-[440px]"
      aria-label="Animated plant"
      subscriptions={{
        error: () => setError(true),
      }}
    />
  );
}
