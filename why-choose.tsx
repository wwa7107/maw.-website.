"use client";

import { ShieldCheck, Users, Lock, Clock } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

const icons = [Users, ShieldCheck, Lock, Clock];

export function WhyChoose() {
  const { dict } = useLanguage();

  return (
    <section className="bg-navy-50 dark:bg-navy-800/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-navy-800 dark:text-cloud sm:text-4xl">
            {dict.home.whyTitle}
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.why.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-400/50 bg-white text-gold-600 dark:bg-navy-900">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base font-semibold text-navy-800 dark:text-cloud">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft dark:text-navy-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
