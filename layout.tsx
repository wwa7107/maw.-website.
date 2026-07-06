import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  metadataBase: new URL("https://maw-academic.sa"),
  title: {
    default: "MAW | Academic Research, Writing & Consultation — Saudi Arabia",
    template: "%s | MAW",
  },
  description:
    "MAW (Mohammed & Wajeeh) provides premium academic services in Saudi Arabia: research papers, assignments, graduation projects, presentations, reports, translation, proofreading, and academic consultation.",
  keywords: [
    "academic services Saudi Arabia",
    "research paper writing KSA",
    "graduation project help",
    "assignment help Saudi",
    "academic translation Arabic English",
    "proofreading service Riyadh",
  ],
  openGraph: {
    title: "MAW | Academic Excellence, Certified.",
    description:
      "Premium research, writing, and academic consultation services for students across Saudi Arabia.",
    locale: "en_SA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700;800&family=Amiri:wght@400;700&family=Tajawal:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
