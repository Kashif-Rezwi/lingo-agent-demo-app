import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

import { LingoProvider } from '@lingo.dev/react/client';
import { LanguageSwitcher } from './i18n/switcher';
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
        <LingoProvider locales={['en', 'fr', 'ar', 'ja']}>{children}<LanguageSwitcher /></LingoProvider>
      </body>
    </html>
  );
}
