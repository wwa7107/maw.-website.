"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const { dict, locale } = useLanguage();
  const items = testimonials[locale];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-navy-800 dark:text-cloud sm:text-4xl">
          {dict.home.testimonialsTitle}
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => (
          <figure
            key={t.name}
            className="diploma-border relative flex flex-col rounded-2xl bg-white p-6 shadow-sm dark:bg-navy-800"
          >
            <Quote size={24} className="mb-3 text-gold-400" />
            <blockquote className="flex-1 text-sm leading-relaxed text-slate-soft dark:text-navy-200">
              "{t.quote}"
            </blockquote>
            <div className="mt-5 flex items-center gap-0.5 text-gold-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <figcaption className="mt-3">
              <p className="font-display text-sm font-semibold text-navy-800 dark:text-cloud">{t.name}</p>
              <p className="text-xs text-slate-soft dark:text-navy-400">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
