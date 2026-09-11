'use client';

import { Lottie, LottieDisplay, LottieError } from 'lottie-react';

/** Drop your file at public/lottie/hero-plant.json */
export const HERO_PLANT_LOTTIE = '/lottie/hero-plant.json';

export default function HeroPlant() {
  return (
    <Lottie
      src={HERO_PLANT_LOTTIE}
      loop
      autoplay
      className="relative h-full w-full"
      aria-label="Animated plant"
    >
      <LottieDisplay className="mx-auto h-full w-full max-h-[420px]" />
      <LottieError className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-white/50">
        Add your Lottie JSON to{' '}
        <code className="ml-1 text-lime/80">public/lottie/hero-plant.json</code>
      </LottieError>
    </Lottie>
  );
}
