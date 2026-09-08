'use client';

export default function ForegroundLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden>
      <div
        className="absolute -bottom-16 -left-20 h-64 w-64 rounded-full bg-lime/20 blur-3xl animate-pulse-slow"
      />
      <div
        className="absolute bottom-0 left-[15%] h-48 w-72 -rotate-12 rounded-[60%] bg-forest-mid/80 blur-2xl"
        style={{ filter: 'blur(28px)' }}
      />
      <div
        className="absolute -bottom-8 left-[35%] h-40 w-56 rotate-6 rounded-[50%] bg-lime/15 blur-3xl"
      />
      <div
        className="absolute bottom-4 left-8 h-32 w-48 -rotate-[25deg] rounded-[40%] bg-[#1a4d38]/70 blur-xl opacity-80"
      />
      <div
        className="absolute bottom-0 right-[20%] h-36 w-44 rotate-12 rounded-[45%] bg-forest-mid/60 blur-2xl"
      />
    </div>
  );
}
