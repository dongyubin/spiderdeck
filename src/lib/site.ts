import { DEFAULT_LOCALE, LOCALE_INFO, type Locale } from "@/i18n/config";
import type {
  FooterGroupKey,
  FooterLabelKey,
  NavLabelKey,
} from "@/i18n/messages";

export const SITE_NAME = "SpiderDeck";

export const SITE_URL = (
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://spiderdeck.pages.dev"
).replace(/\/$/, "");

export const OG_IMAGE = "/og.jpg";

export interface NavLink {
  href: string;
  labelKey: NavLabelKey;
}

export const PRIMARY_NAV: NavLink[] = [
  { href: "/spider-solitaire-2-suits", labelKey: "twoSuits" },
  { href: "/spider-solitaire-1-suit", labelKey: "oneSuit" },
  { href: "/spider-solitaire-4-suits", labelKey: "fourSuits" },
  { href: "/how-to-play", labelKey: "howToPlay" },
  { href: "/spider-solitaire-strategy", labelKey: "strategy" },
  { href: "/guides", labelKey: "guides" },
];

export interface FooterLink {
  href: string;
  labelKey: FooterLabelKey;
}

export const FOOTER_LINKS: {
  titleKey: FooterGroupKey;
  links: FooterLink[];
}[] = [
  {
    titleKey: "play",
    links: [
      { href: "/", labelKey: "play" },
      { href: "/spider-solitaire-2-suits", labelKey: "twoSuits" },
      { href: "/spider-solitaire-1-suit", labelKey: "oneSuit" },
      { href: "/spider-solitaire-4-suits", labelKey: "fourSuits" },
    ],
  },
  {
    titleKey: "learn",
    links: [
      { href: "/how-to-play", labelKey: "howToPlay" },
      { href: "/spider-solitaire-rules", labelKey: "rules" },
      { href: "/spider-solitaire-strategy", labelKey: "strategy" },
      { href: "/spider-solitaire-difficulty-levels", labelKey: "difficulty" },
      { href: "/spider-solitaire-vs-klondike", labelKey: "vsKlondike" },
    ],
  },
  {
    titleKey: "site",
    links: [
      { href: "/guides", labelKey: "allGuides" },
      { href: "/spider-solitaire-mobile", labelKey: "mobile" },
      { href: "/spider-solitaire-no-download", labelKey: "noDownload" },
      { href: "/spider-solitaire-unblocked", labelKey: "unblocked" },
      { href: "/spider-solitaire-faq", labelKey: "faq" },
      { href: "/about", labelKey: "about" },
      { href: "/credits", labelKey: "credits" },
    ],
  },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageUrl(
  path: string,
  locale: Locale = DEFAULT_LOCALE
): string {
  const [pathname = "/"] = path.split("#");
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const prefix = LOCALE_INFO[locale].pathPrefix;
  if (normalized === "/") {
    return `${SITE_URL}${prefix}/`;
  }
  return `${SITE_URL}${prefix}${normalized.replace(/\/$/, "")}/`;
}
