import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageProvider } from './i18n/provider';
import { LanguageSwitcher } from './i18n/switcher';
import { TextTranslator } from './i18n/text-translator';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Landing",
  description: "A premium automated i18n demo repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-zinc-900`}>
        <SiteHeader />
        <LanguageProvider defaultLocale="en" availableLocales={['en', 'fr', 'ar', 'ja']}>
        {children}
        <TextTranslator />
        <LanguageSwitcher />
      </LanguageProvider>
      </body>
    </html>
  );
}
