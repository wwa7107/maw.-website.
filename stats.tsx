"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function Stats() {
  const { dict } = useLanguage();

  return (
    <section className="border-y border-navy-100 bg-cloud dark:border-navy-700 dark:bg-navy-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 sm:grid-cols-4 lg:px-8">
        {dict.home.stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-display text-3xl font-bold text-navy-800 dark:text-gold-300 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-soft dark:text-navy-300 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
