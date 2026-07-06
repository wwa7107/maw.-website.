export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-cloud">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold-300">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-balance text-navy-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
