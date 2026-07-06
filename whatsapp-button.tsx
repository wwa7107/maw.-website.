"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SITE } from "@/lib/site-data";

export function WhatsAppButton() {
  const { locale } = useLanguage();
  const message =
    locale === "ar"
      ? "مرحبًا MAW، أرغب في الاستفسار عن خدمة أكاديمية."
      : "Hello MAW, I'd like to ask about an academic service.";
  const href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle size={26} className="relative" fill="white" />
    </a>
  );
}
