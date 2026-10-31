export const LOCALES = ["en", "zh", "ja"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleInfo {
  dateLocale: string;
  htmlLang: string;
  label: string;
  ogLocale: string;
  pathPrefix: string;
  shortLabel: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: {
    dateLocale: "en-US",
    htmlLang: "en",
    label: "English",
    ogLocale: "en_US",
    pathPrefix: "",
    shortLabel: "EN",
  },
  zh: {
    dateLocale: "zh-CN",
    htmlLang: "zh-CN",
    label: "中文",
    ogLocale: "zh_CN",
    pathPrefix: "/zh",
    shortLabel: "中文",
  },
  ja: {
    dateLocale: "ja-JP",
    htmlLang: "ja",
    label: "日本語",
    ogLocale: "ja_JP",
    pathPrefix: "/ja",
    shortLabel: "日本語",
  },
};

export const LOCALIZED_LOCALES = LOCALES.filter(
  (locale) => locale !== DEFAULT_LOCALE
);

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function normalizePath(path: string): string {
  const [rawPath = "/"] = path.split("#");
  const [rawPathname = "/"] = rawPath.split("?");
  const withSlash = rawPathname.startsWith("/")
    ? rawPathname
    : `/${rawPathname}`;
  if (withSlash === "/") {
    return "/";
  }
  return withSlash.replace(/\/+$/, "");
}

export function splitPath(path: string): {
  hash: string;
  pathname: string;
  query: string;
} {
  const hashIndex = path.indexOf("#");
  const withoutHash = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  const queryIndex = withoutHash.indexOf("?");
  const pathname =
    queryIndex === -1 ? withoutHash : withoutHash.slice(0, queryIndex);
  const query = queryIndex === -1 ? "" : withoutHash.slice(queryIndex);
  return { hash, pathname, query };
}

/** Locale-aware internal href. English keeps root URLs; others get a prefix. */
export function localizedPath(path: string, locale: Locale): string {
  const { hash, pathname, query } = splitPath(path);
  const normalized = normalizePath(pathname);
  const prefix = LOCALE_INFO[locale].pathPrefix;
  const base =
    normalized === "/" ? prefix || "/" : `${prefix}${normalized}`;
  return `${base}${query}${hash}`;
}

export function stripLocalePath(pathname: string): {
  locale: Locale | null;
  path: string;
} {
  const { pathname: cleanPath } = splitPath(pathname);
  const normalized = normalizePath(cleanPath);
  for (const locale of LOCALIZED_LOCALES) {
    const prefix = LOCALE_INFO[locale].pathPrefix;
    if (normalized === prefix) {
      return { locale, path: "/" };
    }
    if (normalized.startsWith(`${prefix}/`)) {
      return { locale, path: normalized.slice(prefix.length) };
    }
  }
  return { locale: null, path: normalized };
}

/** Map the current page to the same page in another language. */
export function switchLocalePath(pathname: string, locale: Locale): string {
  return localizedPath(stripLocalePath(pathname).path, locale);
}
