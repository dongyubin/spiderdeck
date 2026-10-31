import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, LOCALE_INFO } from "@/i18n/config";
import { pageUrl } from "@/lib/site";

const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  {
    path: "/spider-solitaire-2-suits",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/spider-solitaire-1-suit",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/spider-solitaire-4-suits",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  { path: "/how-to-play", priority: 0.85, changeFrequency: "monthly" },
  {
    path: "/spider-solitaire-rules",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/spider-solitaire-strategy",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/spider-solitaire-difficulty-levels",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/spider-solitaire-vs-klondike",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/spider-solitaire-mobile",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/spider-solitaire-no-download",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/spider-solitaire-unblocked",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  { path: "/spider-solitaire-faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.4, changeFrequency: "yearly" },
  { path: "/credits", priority: 0.3, changeFrequency: "yearly" },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: pageUrl(route.path, locale),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            LOCALES.map((item) => [
              LOCALE_INFO[item].htmlLang,
              pageUrl(route.path, item),
            ])
          ),
          "x-default": pageUrl(route.path, DEFAULT_LOCALE),
        },
      },
    }))
  );
}
