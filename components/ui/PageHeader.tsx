interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="border-b border-white/5 bg-forest-light py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/65">{description}</p>
        )}
      </div>
    </div>
  );
}
