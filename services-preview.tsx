"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { serviceIcons } from "@/components/ui/service-icon";

export function ServicesPreview() {
  const { dict } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
          {dict.nav.services}
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy-800 dark:text-cloud sm:text-4xl">
          {dict.home.servicesTitle}
        </h2>
        <p className="mt-4 text-slate-soft dark:text-navy-300">{dict.home.servicesSubtitle}</p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dict.services.list.map((service, i) => {
          const Icon = serviceIcons[i];
          return (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-seal dark:border-navy-700 dark:bg-navy-800"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-gold-300 transition group-hover:bg-gold-500 group-hover:text-navy-900">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-navy-800 dark:text-cloud">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft dark:text-navy-300">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800 transition hover:border-gold-400 hover:text-gold-600 dark:border-navy-600 dark:text-cloud"
        >
          {dict.common.viewAll}
        </Link>
      </div>
    </section>
  );
}
