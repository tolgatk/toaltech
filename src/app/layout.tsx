import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import MainShell from "@/components/MainShell";
import GoogleAdsTag from "@/components/GoogleAdsTag";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ToalTech | İstanbul Sosyal Medya, Drone Çekimi, Web ve Yazılım", template: "%s | ToalTech" },
  description:
    "İstanbul'da sosyal medya yönetimi, drone çekimi, web tasarım, yazılım danışmanlığı ve reklam. Çekim, yazılım ve reklam tek ekipte; ücretsiz ilk görüşme.",
  applicationName: "ToalTech",
  authors: [{ name: "ToalTech", url: SITE_URL }],
  openGraph: { siteName: "ToalTech", locale: "tr_TR", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { themeColor: "#2563eb", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a href="#icerik" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2">
          İçeriğe atla
        </a>
        <Header />
        <MainShell>{children}</MainShell>
        <ConditionalFooter />
        <ConditionalFloatingButtons />
        <GoogleAdsTag />
      </body>
    </html>
  );
}
