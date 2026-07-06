"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { NAV_ROUTES } from "@/lib/site-data";
import { SITE } from "@/lib/site-data";
import { Seal } from "@/components/ui/seal";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-900 text-navy-100 dark:border-navy-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Seal size={36} />
            <div>
              <p className="font-display text-lg font-semibold text-cloud">{dict.brand.name}</p>
              <p className="text-xs text-navy-300">{dict.brand.full}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-300">{dict.brand.tagline}</p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
            {dict.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_ROUTES.map((r) => (
              <li key={r.key}>
                <Link href={r.href} className="text-navy-300 transition hover:text-gold-300">
                  {dict.nav[r.key as keyof typeof dict.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
            {dict.footer.servicesLinks}
          </h4>
          <ul className="space-y-2.5 text-sm text-navy-300">
            {dict.services.list.slice(0, 6).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
            {dict.footer.contactLinks}
          </h4>
          <ul className="space-y-3 text-sm text-navy-300">
            <li className="flex items-center gap-2">
              <MessageCircle size={15} className="text-gold-400" /> {SITE.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold-400" /> {SITE.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" /> {dict.contact.locationValue}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <p className="text-xs leading-relaxed text-navy-400">{dict.footer.disclaimer}</p>
          <p className="mt-4 text-xs text-navy-500">
            © {year} {dict.brand.name} — {dict.brand.full}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
