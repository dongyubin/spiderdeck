import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { LocaleProvider } from "@/i18n/client";
import { LOCALE_INFO, type Locale } from "@/i18n/config";
import { organizationSchema, websiteSchema } from "@/lib/seo";

export function SiteDocument({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <html lang={LOCALE_INFO[locale].htmlLang}>
      <body className="font-sans text-base antialiased">
        <LocaleProvider locale={locale}>
          <SiteHeader locale={locale} />
          {children}
          <SiteFooter locale={locale} />
        </LocaleProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
