import type { Metadata, Viewport } from "next";
import { LOCALE_INFO, localizedPath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { absoluteUrl, OG_IMAGE, SITE_NAME } from "./site";

export function rootMetadata(locale: Locale): Metadata {
  const info = LOCALE_INFO[locale];
  const messages = getMessages(locale);

  return {
    metadataBase: new URL(absoluteUrl("/")),
    applicationName: SITE_NAME,
    title: {
      default: messages.meta.defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: messages.meta.description,
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "48x48" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: info.ogLocale,
      url: localizedPath("/", locale),
      title: messages.meta.defaultTitle,
      description: messages.meta.description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: messages.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.defaultTitle,
      description: messages.meta.description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "games",
  };
}

export const SITE_VIEWPORT: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b2e22",
};
