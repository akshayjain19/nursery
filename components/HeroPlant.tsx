'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';

export default function HeroPlant() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div
      className="relative h-full w-full"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="pointer-events-none absolute bottom-[12%] left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full bg-lime/15 blur-3xl" />

      <motion.div
        className="relative mx-auto h-full w-full max-w-[320px] sm:max-w-[360px]"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/hero-plant.jpg"
            alt="Peace lily in a white ceramic pot"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            sizes="(max-width: 768px) 80vw, 360px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
