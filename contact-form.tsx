"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function ContactForm() {
  const { dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder: wire this up to your email service / API route before launch.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gold-300 bg-gold-50 p-10 text-center dark:border-gold-700 dark:bg-navy-800">
        <CheckCircle2 size={40} className="mb-4 text-gold-600" />
        <p className="font-display text-lg font-semibold text-navy-800 dark:text-cloud">
          {dict.contact.formSuccess}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-700 dark:text-navy-200">
          {dict.contact.formName}
          <input
            required
            type="text"
            className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-navy-600 dark:bg-navy-900 dark:text-cloud"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-700 dark:text-navy-200">
          {dict.contact.formEmail}
          <input
            required
            type="email"
            className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-navy-600 dark:bg-navy-900 dark:text-cloud"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-700 dark:text-navy-200">
          {dict.contact.formPhone}
          <input
            required
            type="tel"
            className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-navy-600 dark:bg-navy-900 dark:text-cloud"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-700 dark:text-navy-200">
          {dict.contact.formService}
          <select className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-navy-600 dark:bg-navy-900 dark:text-cloud">
            {dict.services.list.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-700 dark:text-navy-200">
        {dict.contact.formMessage}
        <textarea
          required
          rows={5}
          className="resize-none rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-navy-600 dark:bg-navy-900 dark:text-cloud"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-semibold text-cloud shadow-seal transition hover:bg-royal-600 disabled:opacity-60"
      >
        <Send size={16} />
        {loading ? "..." : dict.contact.formSubmit}
      </button>
    </form>
  );
}
