'use client';

import { Lottie } from 'lottie-react';

export const HERO_PLANT_LOTTIE = '/lottie/hero-plant.json';

export default function HeroPlant() {
  return (
    <Lottie
      src={HERO_PLANT_LOTTIE}
      loop
      autoplay
      className="mx-auto h-full w-full min-h-[280px] max-h-[440px]"
      aria-label="Animated plant"
    />
  );
}
