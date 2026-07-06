"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SITE } from "@/lib/site-data";

export function CTASection() {
  const { dict, locale } = useLanguage();
  const message =
    locale === "ar"
      ? "مرحبًا MAW، أرغب في الاستفسار عن خدمة أكاديمية."
      : "Hello MAW, I'd like to ask about an academic service.";
  const href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden bg-navy-800">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-cloud sm:text-4xl">
          {dict.home.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-200">{dict.home.ctaSubtitle}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
        >
          <MessageCircle size={18} />
          {dict.home.ctaButton}
        </a>
      </div>
    </section>
  );
}
