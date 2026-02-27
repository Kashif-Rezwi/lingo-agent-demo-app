import { t } from "../lib/i18n";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
const inter = Inter({
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: t("3426c72ba755a424d9a0579d14c46c549a4cbc9704d3abcd3e94f7c4c59324d1"),
  description: t("b52e1879984e4f840dac532df01de37d66ed33242ab2f93adb4298221366259d")
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-zinc-900`}>
        <SiteHeader />
        {children}
      </body>
    </html>;
}