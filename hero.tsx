"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Seal } from "@/components/ui/seal";

export function Hero() {
  const { dict, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-800 via-navy-800 to-navy-900 text-cloud">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div
        className="pointer-events-none absolute -top-32 rtl:-left-32 ltr:-right-32 h-96 w-96 rounded-full bg-royal-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 rtl:right-1/4 ltr:left-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300">
            <ShieldCheck size={14} />
            {dict.home.heroEyebrow}
          </div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.15] sm:text-5xl lg:text-6xl">
            {dict.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-navy-200">
            {dict.home.heroSubtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-gold transition hover:bg-gold-400"
            >
              {dict.home.heroCtaPrimary}
              <Arrow size={16} className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-navy-100/25 px-7 py-3.5 text-sm font-semibold text-cloud transition hover:border-gold-300 hover:text-gold-300"
            >
              {dict.home.heroCtaSecondary}
            </Link>
          </div>

          <p className="mt-8 text-xs uppercase tracking-widest text-navy-400">{dict.home.trustLine}</p>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center animate-seal-stamp">
          <div className="absolute h-72 w-72 rounded-full border border-gold-400/20" />
          <div className="absolute h-56 w-56 rounded-full border border-dashed border-gold-400/30" />
          <div className="relative flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm animate-float-y">
            <Seal size={96} />
            <p className="font-display text-sm font-semibold tracking-wide text-gold-200">
              {dict.home.heroBadge}
            </p>
            <div className="h-px w-16 bg-gold-400/40" />
            <p className="text-center text-xs text-navy-300">MAW · Mohammed &amp; Wajeeh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
