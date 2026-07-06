"use client";

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { useLanguage } from "@/components/providers/language-provider";
import { serviceIcons } from "@/components/ui/service-icon";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const { dict } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={dict.nav.services} title={dict.services.title} subtitle={dict.services.subtitle} />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.list.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition hover:border-gold-300 hover:shadow-seal dark:border-navy-700 dark:bg-navy-800"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-800 dark:text-cloud">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft dark:text-navy-300">
                  {service.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-navy-700 dark:text-navy-200">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm font-medium text-slate-soft dark:text-navy-300">
          {dict.services.processNote}
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-semibold text-cloud shadow-seal transition hover:bg-royal-600"
          >
            {dict.nav.pricing}
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
