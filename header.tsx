"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers/language-provider";
import { NAV_ROUTES } from "@/lib/site-data";
import { Seal } from "@/components/ui/seal";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { dict, locale, toggleLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/60 bg-cloud/80 backdrop-blur-md dark:border-navy-700/60 dark:bg-navy-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Seal size={40} />
          <div className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide text-navy-800 dark:text-cloud">
              {dict.brand.name}
            </span>
            <span className="block text-[11px] text-slate-soft dark:text-navy-200 rtl:font-body-ar">
              {dict.brand.full}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ROUTES.map((route) => {
            const href = route.href;
            const isActive = pathname === href;
            return (
              <Link
                key={route.key}
                href={href}
                className={`relative text-sm font-medium transition-colors hover:text-gold-600 ${
                  isActive ? "text-gold-600" : "text-navy-700 dark:text-navy-100"
                }`}
              >
                {dict.nav[route.key as keyof typeof dict.nav]}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gold-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-full border border-navy-200 px-3 py-1.5 text-xs font-semibold text-navy-700 transition hover:border-gold-400 hover:text-gold-600 dark:border-navy-600 dark:text-navy-100"
          >
            <Globe size={14} />
            {locale === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-full border border-navy-200 p-2 text-navy-700 transition hover:border-gold-400 hover:text-gold-600 dark:border-navy-600 dark:text-navy-100"
          >
            <Sun size={16} className="hidden dark:block" />
            <Moon size={16} className="block dark:hidden" />
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-navy-800 px-5 py-2 text-sm font-semibold text-cloud shadow-seal transition hover:bg-royal-600 sm:inline-block"
          >
            {dict.nav.cta}
          </Link>
          <button
            className="rounded-full border border-navy-200 p-2 text-navy-700 dark:border-navy-600 dark:text-navy-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy-100 bg-cloud px-5 py-4 dark:border-navy-700 dark:bg-navy-900 lg:hidden">
          {NAV_ROUTES.map((route) => (
            <Link
              key={route.key}
              href={route.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-navy-800"
            >
              {dict.nav[route.key as keyof typeof dict.nav]}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-navy-800 px-5 py-2.5 text-center text-sm font-semibold text-cloud"
          >
            {dict.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
