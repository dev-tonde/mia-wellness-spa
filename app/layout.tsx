import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.business.baseUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.business.name,
  alternates: {
    canonical: siteConfig.business.baseUrl,
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    type: "website",
    url: siteConfig.business.baseUrl,
    siteName: siteConfig.business.name,
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider />
        <StructuredData />
        <a className="skip-link sr-only" href="#main-content">
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pb-8" id="main-content">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
