import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALE_INFO, LOCALES, type Locale } from "@/i18n/config";
import { absoluteUrl, OG_IMAGE, pageUrl, SITE_NAME, SITE_URL } from "./site";

export interface PageMetaInput {
  description: string;
  locale: Locale;
  path: string;
  title: string;
}

export function pageMetadata({
  title,
  description,
  path,
  locale,
}: PageMetaInput): Metadata {
  const url = pageUrl(path, locale);
  const languages: Record<string, string> = {};
  for (const item of LOCALES) {
    languages[LOCALE_INFO[item].htmlLang] = pageUrl(path, item);
  }
  languages["x-default"] = pageUrl(path, DEFAULT_LOCALE);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: LOCALE_INFO[locale].ogLocale,
      alternateLocale: LOCALES.filter((item) => item !== locale).map(
        (item) => LOCALE_INFO[item].ogLocale
      ),
      url,
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Spider Solitaire`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path, locale),
    })),
  };
}

export interface FaqEntry {
  q: string;
  a: string;
}

export function faqSchema(faq: FaqEntry[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_INFO[locale].htmlLang,
    mainEntity: faq.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  };
}

export interface GameSchemaInput {
  description: string;
  locale: Locale;
  name: string;
  path: string;
  suits: 1 | 2 | 4;
}

export function gameSchema({
  name,
  description,
  path,
  suits,
  locale,
}: GameSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "VideoGame"],
    name,
    url: pageUrl(path, locale),
    description,
    applicationCategory: "GameApplication",
    applicationSubCategory: "Card Game",
    genre: "Solitaire",
    gamePlatform: ["Web browser", "Mobile browser", "Tablet browser"],
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    playMode: "SinglePlayer",
    numberOfPlayers: 1,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
    inLanguage: LOCALE_INFO[locale].htmlLang,
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: `${suits}-suit Spider Solitaire`,
    screenshot: absoluteUrl(OG_IMAGE),
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Free browser Spider Solitaire with 1, 2, and 4-suit modes, undo, hints, and local statistics.",
  inLanguage: LOCALES.map((locale) => LOCALE_INFO[locale].htmlLang),
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/icon.svg"),
};

export function webPageSchema({
  name,
  description,
  path,
  locale,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: pageUrl(path, locale),
    inLanguage: LOCALE_INFO[locale].htmlLang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}
